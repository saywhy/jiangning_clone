<template>
  <Tooltip theme="light" transfer style="margin-left: 8px">
    <Button type="primary" size="small">
      操作
      <Icon type="ios-arrow-down"></Icon>
    </Button>
    <div slot="content" class="tool-box">
      <Button type="text" size="small" @click="toInfoView('feature')" v-if="hasFeature">特征提取</Button>
      <Button type="text" size="small" @click="jump()">特征分析</Button>
      <Button type="text" size="small" @click="toInfoView()">查看信息</Button>
      <Button type="text" size="small" v-if="end === '1' && hasFeature" @click="download()">下载</Button>
      <Button type="text" size="small" v-if="end === '8'" @click="sendDB()">发送</Button>

    </div>
  </Tooltip>
</template>

<script>
import {baseUrl,sendDBData } from '@/api/app'
export default {
  name: '',
  props: {
    index: {
      type: String,
      default: -1
    },
    row: {
      type: Object,
      default: Object
    },
    param: {
      type: Object,
      default: Object
    }
  },
  data () {
    return {}
  },
  computed: {
    hasFeature () {
      return this.$route.name.includes('moban')
    },
    start() {
      let name = this.$route.name
      return name.includes('moban') ? 'm' : 'f'
    },
    end() {
      let name = this.$route.name
      return name.slice(-1)
    },
    status () {
      return `${this.start}${this.end}`
    }
  },
  created () {},
  methods: {
    jump () {
      let start = this.start
      let end = this.end
      this.$router.push({
        path: `featureAnalysisDataSingle`,
        query: {row: this.$props.row, index: this.status, start, end}
      })
    },
    toFeaturView () {
      let start = this.start
      let end = this.end
      let table = this.$parent.$parent.$parent || {}
      let columns = table.columns || []
      let infos = columns.filter(o => o.key).map(o => {
        o.value = this.row[o.key] || '--'
        o.label = o.title
        return o
      })
      this.$router.push({
        name: `featureView`,
        params: {
          infos
        },
        query: {row: this.$props.row, index: this.status, start, end}
      })
    },
    toInfoView (isFeature) {
      let start = this.start
      let end = this.end
      let table = this.$parent.$parent.$parent || {}
      let columns = table.columns || []
      let infos = columns.filter(o => o.key).map(o => {
        o.value = this.row[o.key] || '--'
        o.label = o.title
        return o
      })
      let status = isFeature === 'feature' ? `m_f${this.end}` : this.status
      let pathName = `infoView`
      if (['m4','f4','m_f4'].includes(status)) {
        pathName += 'JEM'
      }
      this.$router.push({
        name: pathName,
        params: {
          infos
        },
        query: {row: this.$props.row, index: status, end,feature: isFeature,hasFeature: this.hasFeature}
      })
    },
    download(){
      let currentTableStatus = localStorage.getItem('status')
      let link = document.createElement('a')
      link.style.display = 'none'
      if (currentTableStatus === 'sea') {
      link.href = `${baseUrl}/HRRPTemplate/importDat?id=` + this.row.id
      }else{
      link.href = `${baseUrl}/HRRPSkyTemplate/importDat?id=` + this.row.id
      }
      document.body.appendChild(link)
      link.click()
    },
    async sendDB(){
      let res = await sendDBData({
          'id':this.row.id
        });
        if (res.data) {
          this.$Message.success("发送成功！");
        }
    }
  }
}
</script>

<style lang="" scoped>
.tool-box button + button {
  margin-top: 10px;
}
.tool-box {
  width: 90px;
  white-space: pre-wrap;
  text-align: center;
}
</style>

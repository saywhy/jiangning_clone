
<template>
  <Modal v-model="dialogShow" :title="title" :closable= false>
    <Upload multiple type="drag" action :before-upload="beforeUpload" :accept="accept">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击或者拖拽文件上传</p>

        <div v-if="file !== null">文件名称: {{ file.name }}</div>

        <div id="progress" v-show="iSpeed > 0 && iSpeed < 100">
          <div id="bar" :style="{ width: `${iSpeed}%`}"></div>
        </div>
      </div>
    </Upload>

    <div slot="footer">
      <Button type="primary"  @click="closeDialog">关闭</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'importDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: '.dat,.txt,.mat,.csv'
    },
    title: {
      type: String,
      default: '导入'
    },
    uploadFn: {
      type: Function,
      default: async () => {
        let res = new Promise((resolve) => {
          setTimeout(() => {
            resolve('success!')
          }, 2000000)
        })
        return res
      }
    }
  },
  data () {
    return {
      dialogShow: false,
      file: null,
      iSpeed: 0,
      isFinished: false
    }
  },
  computed: {
    index () {
      return this.$route.name.slice(-1)
    }
  },
  watch: {
    show: {
      handler (v) {
        this.dialogShow = v

      },
      immediate: true
    }
  },
  methods: {
    ok () {},
    cancel () {},
    closeDialog () {
      this.file = null
      this.$emit(`close`)
    },
    beforeUpload (file) {
      this.file = file
      this.importFile(file)
      return false
    },
    async importFile (file) {
      if (!file) {
        return
      }
      if (this.uploadFn) {
        this.progress()
        let MAP = {
          1: '1',
          2: '4',
          3: '5',
          4: '3',
          5: '6',
          6: '2',
          7: '7',
          8: '8'
        }
        file.typeStatus = MAP[this.index]

        let res = await this.uploadFn(file)
        this.isFinished = true

      }
    },
    progress () {
      this.isFinished = false
      this.iSpeed = 0
      let obj = setInterval(() => {
        this.iSpeed += 1
        if (this.isFinished) {
          this.iSpeed += 50
        }
        if (this.iSpeed >= 100) {
          clearInterval(obj)
        }
      }, 2000) // 1s后函数执行一次
    }
  }
}
</script>

<style lang="" scoped>
#progress {
  width: 100%;
  height: 3px;
  background: silver;
}
#bar {
  width: 1%;
  height: 3px;
  margin-top: 1px;
  background: #2d8cf0;
}
</style>

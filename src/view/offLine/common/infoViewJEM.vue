<template>
  <div>
    <Row :gutter="16">
      <i-col span="14">
        <div class="echarts-area">
          <echarts3D :smooth="true" style="height: 700px;"></echarts3D>
        </div>
      </i-col>
      <i-col span="10">
      <div class="data-area">

        <img src="../../../assets/images/left-top3.jpg" alt="">
        <div class="data-area1" style="margin-top: 10px">

          <div class="flex_box" v-for="(item,index) in nData" :key="index">
            <div style="line-height: 32px;padding-right: 10px">{{item.title}}</div>
            <div class="i border border-r">{{item.value}}</div>
          </div>

        </div>
      </div>
      </i-col>
    </Row>
    <div class="echarts-area" style="margin: 10px 0;">
      <div class="select-box">
        <i-select v-model="data1" style="width: 200px" @on-change="selecteda">
          <i-option v-for="(item,index) in aData" :value="item.value" :key="index">{{ item.label }}</i-option>
        </i-select>
        <i-select v-model="data2" style="width: 200px" @on-change="selectedb">
          <i-option v-for="(item,index) in bData" :value="item.value" :key="index">{{ item.label }}</i-option>
        </i-select>
      </div>
      <echartsLine :eData="eData" :name="name" :smooth="true" style="height: 430px;"></echartsLine>
    </div>
  </div>
</template>

<script>
import * as api from '../../../api/app.js'
import echartsLine from '../../../components/Echarts/echartsLine.vue'
import echarts3D from '../../../components/Echarts/echart3D.vue'
import moban from './moban.js'
import featureColumnsMap from "./featureData.js";

export default {
  components: {
    echartsLine,
    echarts3D
  },
  name: 'featureView',
  mixins: [featureColumnsMap],
  data () {
    return {
      eData: undefined,
      sData: undefined,
      nData: [],
      TDAdata: undefined,
      bData: [],
      aData: [{
        value: 'maichong',
        label: '脉冲数'
      },
      {
        value: 'juli',
        label: '距离单元'
      }],
      data1: '',
      data2: '',
      name: {
        x: '',
        z: '',
        xName: '',
        yName: '幅度值',
        zName: '幅度值'
      }
    }
  },
  computed: {
    status() {
      return this.$route.query.index;
    },
    start() {
      return this.$route.query.start;
    },
    end() {
      return this.$route.query.end;
    },
    row() {
      return this.$route.query.row;
    },
  },
  methods: {
    selecteda () {
      this.bData = []
      if (this.data1 === 'juli') {
        this.name.xName = '脉冲数'
        for (let item in this.TDAdata) {
          this.bData.push({
            value: item,
            label: Number(item) + 1
          })
        }
      } else {
        this.name.xName ='距离单元' 
        for (let item in this.TDAdata[0]){
          this.bData.push({
            value: item,
            label: Number(item) + 1
          })
        }
      }
    },
    selectedb () {
      this.eData = []
      if (this.data1 === 'juli') {
        this.eData = this.TDAdata[this.data2]
      } else {
        for (let i in this.TDAdata) {
          this.eData.push(this.TDAdata[i][this.data2])
        }
      }
    },
    // 从模版进入特征详情页 '1-3'代表'特征1-3'
    async initFeatureData(currentTableStatus = this.currentTableStatus) {
      let id = this.$route.query.row.id
      let res = await api.getJEMByTemplateId({id})
      let row = res.data || {}
      // 给模版跳转的特征详情赋值
      let infos = this.columnsMap[this.end];
      infos = infos.filter((o) => o.key);
      this.nData = infos.map((o) => {
        o.value = row[o.key] || "--";
        o.label = o.title;
        return o;
      });
    },
  },
  mounted () {
    api.getJemAnalysTDA({
      id: this.$route.query.row.id
    }).then(({ data }) => {

      this.TDAdata = data
    })
    this.nData = this.columnsMap[this.end];

    if (this.status.includes("m_f")) {
      this.initFeatureData();
    } else {
      let row = this.$route.query.row
      // 给模版跳转的特征详情赋值
      let infos = this.columnsMap[this.end];
      infos = infos.filter((o) => o.key);
      this.nData = infos.map((o) => {
        o.value = row[o.key] || "--";
        o.label = o.title;
        return o;
      });
    }

    switch (this.$route.query.index) {
      case 'm4':
        api.getJemtzAnalysisArray5({
          id: this.$route.query.row.id
        }).then(({ data }) => {

          this.eData = data
        })
        break
      case 'f4':
        api.getJemtzAnalysisArray9({
          id: this.$route.query.row.id
        }).then(({ data }) => {

          this.eData = data
        })
        break
    }
  }
}
</script>

<style lang="" scoped>
  .echarts-area {
    width: 100%;
    /* height: 430px; */
    border: 1px solid #efefef;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: relative;
  }
  .select-box{
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10
  }
  .data-area {
    width: 100%;
    /* padding: 20px 10px 0; */
    margin: 10px;
    box-sizing: border-box;
  }

  .data-area1 {
    width: 100%;
    /*padding: 20px 10px 0;*/
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  img {
    display: block;
    width: 100%;
    height: 300px;
  }

  .i {
    /*width: 100%;*/
    height: 32px;
    background: #f3f3f3;
    padding-left: 10px;
    line-height: 32px;
    color: #333;
    flex: 1;
  }

  .border {
    border: 1px solid #e3e3e3;
  }

  .border-r {
    border-radius: 4px;
  }

  .flex_box{
    width: 48%;
    display: flex;
    margin: 10px 0;
  }
</style>

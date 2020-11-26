<template>
  <div class="body">
    <div style="text-align: right;height: 0;position: relative;z-index: 99;">
      <Select v-model="typeValue" style="width: 100px;margin: 20px;text-align: left" @on-change="init">
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
       <Select v-model="currentValue" style="width: 150px;margin: 20px;text-align: left" @on-change="init">
        <Option v-for="item in analyList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="container-header">
      <h3>数据分析</h3>
    </div>
    <div class="container-content">
      <!-- 顶部部分 -->
      <div class="top">
        <div class="count-share w2">
          <div class="com-count-title">折线图</div>
          <div class="com-screen-content">
            <echarts-line :eData="eData" :name="name" :smooth="false" style="height: 280px;"></echarts-line>
          </div>
          <span class="left-top"></span>
          <span class="right-top"></span>
          <span class="left-bottom"></span>
          <span class="right-bottom"></span>
        </div>
        <div class="count-share w2">
          <div class="com-count-title">柱形图</div>
          <div class="com-screen-content">
            <echarts-bar :eData="barData" style="height: 280px;"></echarts-bar>
          </div>
          <span class="left-top"></span>
          <span class="right-top"></span>
          <span class="left-bottom"></span>
          <span class="right-bottom"></span>
        </div>

      </div>
      <div class="mid">
        <div class="count-share w2">
          <div class="com-count-title">饼状图</div>
          <div class="com-screen-content">
            <echarts-pie :eData="pieData" style="height: 280px;">
            </echarts-pie>
          </div>
          <span class="left-top"></span>
          <span class="right-top"></span>
          <span class="left-bottom"></span>
          <span class="right-bottom"></span>
        </div>
        <div class="count-share w2">
          <div class="com-count-title">雷达图</div>
          <div class="com-screen-content">
            <echartsRadar style="height: 280px;"></echartsRadar>
          </div>
          <span class="left-top"></span>
          <span class="right-top"></span>
          <span class="left-bottom"></span>
          <span class="right-bottom"></span>
        </div>
      </div>

      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import * as api from '../../../api/app.js'
import echartsLine from '../../../components/Echarts/echartsLine.vue'
import echartsRadar from '../../../components/Echarts/echartsRadar.vue'
import echartsBar from '../../../components/Echarts/echartsBar.vue'
import echartsPie from '../../../components/Echarts/echartPie.vue'
export default {
  components: {
    echartsLine,
    echartsBar,
    echartsPie,
    echartsRadar
  },
  data () {
    return {
      eData: undefined,
      barData: undefined,
      pieData: undefined,
      currentValue: 'jz',
      name:{
        zName: '数值',
      },
      analyList: [
        {
          label: '均值',
          value: 'jz'
        },
        {
          label: '极小值',
          value: 'jxz'
        },
        {
          label: '极大值',
          value: 'jdz'
        },
        {
          label: '极差',
          value: 'jc'
        },
        {
          label: '标准差',
          value: 'bzc'
        },
        {
          label: '变异系数',
          value: 'byxs'
        },
        {
          label: '平滑度',
          value: 'phd'
        },
        {
          label: '标准偏度系数',
          value: 'bzpdxs'
        },
        {
          label: '标准峰度系数',
          value: 'bzfdxs'
        },
        {
          label: '熵',
          value: 's'
        },
        {
          label: '像长特征',
          value: 'xctz'
        },
        {
          label: '船长特征',
          value: 'cctz'
        },
        {
          label: '对称性特征',
          value: 'dcxtz'
        },
        {
          label: '离散性特征',
          value: 'lsxtz'
        },
        {
          label: '中心矩特征',
          value: 'zxjtz'
        },
        {
          label: '扩展中心矩特征',
          value: 'kzzxtz'
        },
        {
          label: '峰堆特征',
          value: 'fdtz'
        },
        {
          label: '散射点数量',
          value: 'ssdsl'
        }
      ],
      typeValue: '0',
      typeList: [
        {
          label: '海面',
          value: '0'
        },
        {
          label: '空中',
          value: '1'
        },
      ]
    }
  },

mounted:function(){
      this.init()
    },
  methods: {
    init() {
      let index = this.$route.name.slice(-1) === undefined ? 1 : this.$route.name.slice(-1)
      api.getCommonAnalysisArray1({
        id: index,
        type: this.typeValue,
        tzsx: this.currentValue
      }).then(({ data }) => {

        this.eData = data

      })
      api.getCommonAnalysisArray2({
        id: index,
        type: this.typeValue,
        tzsx: this.currentValue
      }).then(({ data }) => {

        this.barData = data
      })
      api.getCommonAnalysisArray3({
        id: index,
        type: this.typeValue,
        tzsx: this.currentValue
      }).then(({ data }) => {

        this.pieData = data

      })
    }
  }
}
</script>
<style scoped>
  @import url("../../../assets/css/test-1920.css");
</style>

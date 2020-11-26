<template>
  <div class="body">
    <div class="container-header">
      <div class="select-box">
        <i-select v-model="data1" style="width: 200px" @on-change="selecteda">
          <i-option v-for="(item,index) in nData" :value="item.value" :key="index">{{ item.title }}</i-option>
        </i-select>
      </div>
      <h3>单条数据分析</h3>
    </div>
    <div class="container-content">
      <!-- 顶部部分 -->
      <div class="top">
        <div class="count-share w2">
          <div class="com-count-title">折线图</div>
          <div class="com-screen-content">
            <echarts-line :eData="eData" :smooth="false" style="height: 280px;"></echarts-line>
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
import * as api from '@/api/app.js'
import echartsLine from '@/components/Echarts/echartsLine.vue'
import echartsRadar from '@/components/Echarts/echartsRadar.vue'
import echartsBar from '@/components/Echarts/echartsBar.vue'
import echartsPie from '@/components/Echarts/echartPie.vue'
import moban from './moban.js'
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
      data1: '',
      nData: []
    }
  },
  mounted () {
    let nameIndex = this.$route.query.index.slice(-1)
    let nameArr = moban.data().columnsMap
    this.nData = nameArr[nameIndex]
    let lData = this.$route.query.row
    for (let item in this.nData) {
      this.nData[item].value = lData[this.nData[item].key]
      this.nData = this.nData.filter(({ title }) => !['id', '操作', '序号', undefined].includes(title))
    }
    // let index = this.$route.name.slice(-1) === undefined ? 1 : this.$route.name.slice(-1)
    let id = this.$route.query.row.id
    switch (this.$route.query.index) {
      case 'm1':
        api.getHrrpTemplateHight({id}).then(({ data }) => {
          this.eData = data
        })
        api.getHrrpTemplatePieChart({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getHrrpTemplateBarChart({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'f1':
        api.getHrrpTemplateArray6({id}).then(({ data }) => {
          this.eData = data
        })
        api.getHrrpTemplateArray7({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getHrrpTemplateArray8({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'm2':
        api.getKdtzAnalysisArray2({id}).then(({ data }) => {
          this.eData = data
        })
        api.getKdtzAnalysisArray3({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getKdtzAnalysisArray4({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'f2':
        api.getKdtzAnalysisArray6({id}).then(({ data }) => {
          this.eData = data
        })
        api.getKdtzAnalysisArray7({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getKdtzAnalysisArray8({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'm3':
        api.getZdtzAnalysisArray2({id}).then(({ data }) => {
          this.eData = data
        })
        api.getZdtzAnalysisArray3({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getZdtzAnalysisArray4({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'f3':
        api.getZdtzAnalysisArray6({id}).then(({ data }) => {
          this.eData = data
        })
        api.getZdtzAnalysisArray7({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getZdtzAnalysisArray8({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'm4':
        api.getJemtzAnalysisArray2({id}).then(({ data }) => {
          this.eData = data
        })
        api.getJemtzAnalysisArray3({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getJemtzAnalysisArray4({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'f4':
        api.getJemtzAnalysisArray6({id}).then(({ data }) => {
          this.eData = data
        })
        api.getJemtzAnalysisArray7({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getJemtzAnalysisArray8({id}).then(({ data }) => {
          this.barData = data
        })
        break

      case 'f5':
        api.getdhjTZAnalysisArray1({id}).then(({ data }) => {
          this.eData = data
        })
        api.getdhjTZAnalysisArray2({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getdhjTZAnalysisArray3({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'f6':
        api.getAisAnalysisArray1({id}).then(({ data }) => {
          this.eData = data
        })
        api.getAisAnalysisArray2({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getAisAnalysisArray3({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'f7':
        api.getAdsBTZAnalysisArray1({id}).then(({ data }) => {
          this.eData = data
        })
        api.getAdsBTZAnalysisArray2({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getAdsBTZAnalysisArray3({id}).then(({ data }) => {
          this.barData = data
        })
        break
      case 'f8':
        api.getGpsTzAnalysisArray1({id}).then(({ data }) => {
          this.eData = data
        })
        api.getGpsTzAnalysisArray2({id}).then(({ data }) => {
          this.pieData = data
        })
        api.getGpsTzAnalysisArray3({id}).then(({ data }) => {
          this.barData = data
        })
        break
    }
  },
  methods: {
    selecteda () {

    }
  }
}
</script>
<style scoped>
  @import url("../../../assets/css/test-1920.css");
  .select-box{
    position: absolute;
    top: 30px;
    left: 28px;
    z-index: 10;
  }
</style>

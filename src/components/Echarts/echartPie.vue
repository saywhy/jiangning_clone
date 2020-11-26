<template>
  <div ref="dom" class="charts"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'hello',
  props: ['eData'],
  data () {
    return {}
  },
  mounted () {
    setTimeout(() => {
      this.draw()
    })
  },
  watch: {
    eData () {
      this.draw()
    }
  },
  methods: {
    draw () {
      // 绘制图表
      let emptyArr = [0, 0, 0, 0, 0, 0, 0]
      let myChart = echarts.init(this.$refs.dom)
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}:         {c} ({d}%)'
        },
        color: ['#8fc31f', '#ffc72b', '#f35833', '#00ccff', '#ffcc00', '#f5e965', '#a74faf', '#ff9668', '#00d386'],

        series: [{
          name: '资源总量构成',
          type: 'pie',
          radius: '60%',
          center: ['50%', '50%'],
          data: this.$props.eData !== undefined ? this.$props.eData : emptyArr,
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{c} ({d}%)',
                fontSize: 14 // 文字的字体大小
              }
            },
            labelLine: {
              show: true
            }
          }
        }]
      }
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>

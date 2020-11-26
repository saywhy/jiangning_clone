<template>
  <div ref="dom" class="charts"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
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
      let emptyData = [[0, 1, 1323], [0, 2, 123], [0, 3, 235], [0, 4, 759], [1, 1, 96], [1, 2, 123], [1, 3, 43], [2, 2, 123]]
      // 绘制图表
      let data = this.$props.eData !== undefined ? this.$props.eData : emptyData
      let tData = []
      for (let x in data) {
        for (let y in data) {
          tData.push(Number(x), Number(y), data[x][y])
        }
      }
      tData = [[0, 1, 1323], [0, 2, 123], [0, 3, 235], [0, 4, 759], [1, 1, 96], [1, 2, 123], [1, 3, 43], [2, 2, 123]]
      let myChart = echarts.init(this.$refs.dom)
      let option = {
        grid3D: {},
        tooltip: {},
        xAxis3D: {
          type: 'category',
          name: '距离单元'
        },
        yAxis3D: {
          type: 'category',
          name: '脉冲数'
        },
        zAxis3D: {
          name: '幅度值'
        },
        visualMap: {
          max: 1e8,
          dimension: 'Population'

        },
        series: [
          {
            type: 'bar3D',
            // symbolSize: symbolSize,
            shading: 'lambert',
            encode: {
              x: 'Year',
              y: 'Country',
              z: 'Life Expectancy',
              tooltip: [0, 1, 2, 3, 4]
            },
            data: tData
          }
        ]
      }
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>

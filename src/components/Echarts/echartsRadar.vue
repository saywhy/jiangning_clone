<template>
  <div ref="dom" class="charts"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'hello',
  data () {
    return {}
  },
  mounted () {
    setTimeout(() => {
      this.draw()
    })
  },
  watch: {
    // eData () {
    //   this.draw()
    // }
  },
  methods: {
    draw () {
      let dataBJ = [
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21]
      ]

      let dataGZ = [
        [70, 69, 120, 1.198, 65, 36, 13],
        [77, 105, 178, 2.549, 64, 16, 14],
        [109, 68, 87, 0.996, 74, 29, 15],
        [73, 68, 97, 0.905, 51, 34, 16],
        [54, 27, 47, 0.592, 53, 12, 17],
        [51, 61, 97, 0.811, 65, 19, 18],
        [91, 71, 121, 1.374, 43, 18, 19],
        [73, 102, 182, 2.787, 44, 19, 20],
        [73, 50, 76, 0.717, 31, 20, 21],
        [84, 94, 140, 2.238, 68, 18, 22]
      ]

      let dataSH = [
        [116, 87, 131, 1.47, 84, 40, 14],
        [108, 80, 121, 1.3, 85, 37, 15],
        [134, 83, 167, 1.16, 57, 43, 16],
        [79, 43, 107, 1.05, 59, 37, 17],
        [71, 46, 89, 0.86, 64, 25, 18],
        [97, 71, 113, 1.17, 88, 31, 19],
        [84, 57, 91, 0.85, 55, 31, 20],
        [87, 63, 101, 0.9, 56, 41, 21],
        [104, 77, 119, 1.09, 73, 48, 22],
        [87, 62, 100, 1, 72, 28, 23],
        [168, 128, 172, 1.49, 97, 56, 24]
      ]

      let lineStyle = {
        normal: {
          width: 1,
          opacity: 0.5
        }
      }
      let legendData = ['北京', '上海', '广州']
      let indicatorData = [{
        name: 'AQI',
        max: 300
      },
      {
        name: 'PM2.5',
        max: 250
      },
      {
        name: 'PM10',
        max: 300
      },
      {
        name: 'CO',
        max: 5
      },
      {
        name: 'NO2',
        max: 200
      },
      {
        name: 'SO2',
        max: 100
      }
      ]
      let myChart = echarts.init(this.$refs.dom)
      let option = {
        legend: {
          top: 5,
          right: 10,
          data: legendData,
          itemGap: 1,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          selectedMode: 'single'
        },
        radar: {
          indicator: indicatorData,
          shape: 'circle',
          splitNumber: 5,
          name: {
            textStyle: {
              color: 'rgb(238, 197, 102)'
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.2)',
                'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
            }
          }
        },
        series: [{
          name: '北京',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataBJ,
          symbol: 'none',
          itemStyle: {
            color: '#F9713C'
          },
          areaStyle: {
            opacity: 0.1
          }
        },
        {
          name: '上海',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataSH,
          symbol: 'none',
          itemStyle: {
            color: '#B3E4A1'
          },
          areaStyle: {
            opacity: 0.05
          }
        },
        {
          name: '广州',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataGZ,
          symbol: 'none',
          itemStyle: {
            color: 'rgb(238, 197, 102)'
          },
          areaStyle: {
            opacity: 0.05
          }
        }
        ]
      }

      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    genData (len, offset) {
      let lngRange = [-10.781327, 131.48]
      let latRange = [18.252847, 52.33]

      let arr = new Float32Array(len * 2)
      let off = 0

      for (let i = 0; i < len; i++) {
        let x = +Math.random() * 10
        let y = +Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random() + (offset || 0) / 10
        arr[off++] = x
        arr[off++] = y
      }
      return arr
    }
  }
}
</script>
<style scoped></style>

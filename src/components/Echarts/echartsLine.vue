<template>
  <div ref="dom" class="charts"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echartsLine',
  props: ['smooth', 'eData', 'name'],
  data () {
    return {
    }
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
      let myChart = echarts.init(this.$refs.dom)

      let emptyArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let name = this.$props.name === undefined ? {x: '', z: ''} : this.$props.name;
      let xData = []
      this.$props.eData=eval(this.$props.eData)
      if (this.$props.eData === undefined) {
        xData = [1, 2, 3, 4, 5, 6, 7]
      } else {
        for (let i = 0; i < this.$props.eData.length; i++) {
          xData.push(i)
        }
      }
      // 绘制图表
      let option = {

        tooltip: {
          trigger: 'axis',
          formatter: function (params, ticket, callback) {
            let res = ''
            for (let i = 0, l = params.length; i < l; i++) {
              res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>'
            }
            return res
          },
          transitionDuration: 0,
          backgroundColor: 'rgba(83,93,105,0.8)',
          borderColor: '#535b69',
          borderRadius: 8,
          borderWidth: 2,
          padding: [5, 10],
          axisPointer: {
            type: 'line',
            lineStyle: {
              type: 'dashed',
              color: '#ffff00'
            }
          }
        },
        // legend: {
        //   icon: 'circle',
        //   itemWidth: 8,
        //   itemHeight: 8,
        //   itemGap: 10,
        //   top: '5',
        //   right: '10',
        //   data: ['数据总量', '共享次数', '更新量'],
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#a0a8b9'
        //   }
        // },
        grid: {
          top: '46',
          left: '13%',
          right: '6%',
          bottom: '15%',
          containLabel: false
        },
        xAxis: [{
          name: name.xName,
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            interval: 0,
            fontSize: 14
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#a0a8b9'
            }
          },
          axisTick: {
            show: true
          },
          splitLine: {
            show: this.$props.smooth,
            lineStyle: {
              color: '#2b3646'
            }
          },
          data: xData,
          offset: 10
        }],
        yAxis: [{
          name: name.yName,
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: '#a0a8b9'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#2b3646'
            }
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: name.zName === undefined ? '幅度值': name.zName,
          type: 'line',
          smooth: this.$props.smooth,
          showSymbol: true,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          label: {
            normal: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#ffc72b',
                fontSize: 10
              }
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: '#1cc840'
            }
          },
          data: this.$props.eData !== undefined ? this.$props.eData : emptyArr
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

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
      let emptyArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      // 绘制图表
      let myChart = echarts.init(this.$refs.dom)
      let XData = []
      if (this.$props.eData === undefined) {
        XData = [1, 2, 3, 4, 5, 6, 7]
      } else {
        // for (let i = 0; i < this.$props.eData.length; i++) {
        //   XData.push(i)
        // }
        // XData=Object.keys(this.$props.eData)
          let tempData =  this.$props.eData
          for(let i in tempData){
            XData.push(tempData[i].name)
            }

      }
      let option = {
        backgroundColor: '',
        grid: {
          top: '46',
          left: '13%',
          right: '6%',
          bottom: '15%',
          containLabel: false
        },
        xAxis: {
			type: 'category',
			boundaryGap: false,
			axisLabel: {
				interval: 0,
				fontSize:10
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#a0a8b9'
				}
			},
			axisTick: {
				show: false
			},
			data: XData,
      offset: 10
        },
		
        //   axisTick: {
        //     show: true
        //   },
        //   splitLine: {
        //     show: false
        //   },
        //   splitArea: {
        //     show: false
        //   },
        //   data: XData,
        //   axisLabel: {
        //     formatter: function (value) {
        //       var ret = '' // 拼接加\n返回的类目项
        //       var maxLength = 1 // 每项显示文字个数
        //       var valLength = value.length // X轴类目项的文字个数
        //       var rowN = Math.ceil(valLength / maxLength) // 类目项需要换行的行数
        //       if (rowN > 3) // 如果类目项的文字大于3,
        //       {
        //         for (var i = 0; i < rowN; i++) {
        //           var temp = '' // 每次截取的字符串
        //           var start = i * maxLength // 开始截取的位置
        //           var end = start + maxLength // 结束截取的位置
        //           // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
        //           temp = value.substring(start, end) + '\n'
        //           ret += temp // 凭借最终的字符串
        //         }
        //         return ret
        //       } else {
        //         return value
        //       }
        //     },
        //     lineHeight: 30,
        //     interval: 0,
        //     fontSize: 14,
        //     fontWeight: 100,
        //     textStyle: {
        //       color: '#9faeb5'

        //     }
        //   },
        //   axisLine: {
        //     lineStyle: {
        //       color: '#4d4d4d'
        //     }
        //   }
        // },

        yAxis: {
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#9faeb5',
              fontSize: 16
            }
          },
          axisLine: {
            lineStyle: {
              color: '#4d4d4d'
            }
          }
        },
        'tooltip': {
          'trigger': 'axis',
          transitionDuration: 0,
          backgroundColor: 'rgba(83,93,105,0.8)',
          borderColor: '#535b69',
          borderRadius: 8,
          borderWidth: 2,
          padding: [5, 10],
          formatter: function (params, ticket, callback) {
            var res = ''
            for (var i = 0, l = params.length; i < l; i++) {
              res += '' + params[i].seriesName + ' : ' + params[i].value + '<br>'
            }
            return res
          },
          axisPointer: {
            type: 'line',
            lineStyle: {
              type: 'dashed',
              color: '#ffff00'
            }
          }
        },
        series: [{
          name: '数量',
          type: 'bar',
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#00d386' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0076fc' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              barBorderRadius: 15
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#ffc72b',
                fontSize: 10
              }
            }
          },
          data: this.$props.eData !== undefined ? this.$props.eData : emptyArr,
          barWidth: 16
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

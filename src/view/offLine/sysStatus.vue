<template>
  <div class="body">
    <div class="container-header">
      <h3>系统状态</h3>
    </div>
    <div class="container-content">
      <div class="top">
        <div class="count-share w2">
          <div class="com-count-title">CPU使用情况 %：</div>
          <div>
            <canvas ref="dom1" width="500" height="300"></canvas>
          </div>
        </div>
        <div class="count-share w2">
          <div class="com-count-title">内存使用情况 MB：</div>
          <div>
            <canvas ref="dom2" width="500" height="300"></canvas>
          </div>
        </div>
      </div>
      <div class="mid">
        <div class="count-share w2">
          <div class="com-count-title">磁盘使用情况 %：</div>
          <div>
            <canvas ref="dom3" width="500" height="300"></canvas>
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import { systemLog as getData } from "@/api/app";
export default {
  name: "sysStatus",
  data() {
    return {
      data1: [],
      data2: [],
      data3: [],
      data4: [],
    };
  },
  computed: {
    option1() {
      return {
        title: {
          text: "",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#2B3646"],
              width: 1,
              type: "solid",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#AFAFAF",
              width: 1,
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, '50%'],
          data: [0, 50, 100],
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#2B3646"],
              width: 1,
              type: "solid",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#AFAFAF",
            },
          },
        },
        series: [
          {
            data: this.data1,
            type: "line",
            smooth: true,
          },
        ],
      };
    },
    option2() {
      return {
        title: {
          text: "",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#2B3646"],
              width: 1,
              type: "solid",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#AFAFAF",
              width: 1,
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, '50%'],
          data: [0, 500, 1024],
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#2B3646"],
              width: 1,
              type: "solid",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#AFAFAF",
            },
          },
        },
        series: [
          {
            data: this.data2,
            type: "line",
            smooth: true,
          },
        ],
      };
    },
    option3() {
      return {
        title: {
          text: "",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },
        visualMap: {
          show: false,
          min: 0,
          max: 100,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#2B3646"],
              width: 1,
              type: "solid",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#AFAFAF",
              width: 1,
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, '50%'],
          data: [0, 50, 100],
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#2B3646"],
              width: 1,
              type: "solid",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#AFAFAF",
            },
          },
        },
        series: [
          {
            data: this.data3,
            type: "line",
            smooth: true,
          },
        ],
      };
    },
  },
  mounted() {

    
    this.initOption();
    this.initEchart(1);
    this.initEchart(2);
    this.initEchart(3);
  },
  methods: {

    async initOption() {
      let _data = [21, 32, 23, 34, 23, 32, 21, 30];
      let res = await getData();

        // let _data = [2, 3, 1, 27, 23, 12, 2, 11];
        // let _data = [200, 180, 131, 34, 23, 32, 21, 30];
        // let _data = [21, 32, 23, 34, 23, 32, 21, 30];
      // let res = { data: {} };
      // let data = res.getData || {};
      this.data1 = res.data.data1 || _data;
      this.data2 = res.data.data2 || _data;
      this.data3 = res.data.data3 || _data;
    },
    initEchart(i = 1) {
      let myChart = echarts.init(this.$refs[`dom${i}`]);
      myChart.setOption(this[`option${i}`]);
      setInterval(() => {
        // 数据前移
        let first = this[`data${i}`].shift()
        let last = first + Math.random(0)
        this[`data${i}`].push(last)
        // 更新试图
        myChart.setOption({
          series: [
            {
              type: "line",
              data: this[`data${i}`],
              smooth: true,
            },
          ],
        });
      }, 1500);
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/test-1920.css");
</style>

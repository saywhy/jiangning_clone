<template>
  <div>
    <div
      style="text-align: right;position: relative;z-index: 99;"
      v-if="$route.query.end != '4' && $route.query.index.includes('f')"
    >
      <Select
        v-model="currentTableStatusValue"
        style="width: 200px;margin: 20px;text-align: left"
        @on-change="initGraph"
      >
        <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>

    <div class="echarts-area">
      <echartsLine :eData="eData" :smooth="true" style="height: 430px;"></echartsLine>
    </div>

    <br />
    <div style="display: flex">
      <EditForm
        :infos="infos"
        :name="name"
        v-if="infos.length"
        operateType="view"
        :submitShow="false"
      />
      <div>
        <img :src="imgSrc" alt="图片" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import * as api from "@/api/app.js";
import echartsLine from "@/components/Echarts/echartsLine.vue";
import echartsRadar from "@/components/Echarts/echart3D.vue";
import EditForm from "@/components/EditForm/index";
import imgSrc from "./images/bg.jpg";
import featureColumnsMap from "./featureData.js";

export default {
  components: {
    echartsLine,
    echartsRadar,
    EditForm,
  },
  name: "featureView",
  mixins: [featureColumnsMap],
  data() {
    return {
      eData: undefined,
      name: {
        zName: "幅度值",
      },
      infos: [],
      imgSrc,
      currentTableStatusValue: "",
      currentTableStatus: "",
      typeList: [
        {
          label: "小波变换",
          value: "xbbh",
        },
        {
          label: "傅里叶变换",
          value: "flybh",
        },
        {
          label: "目标包络",
          value: "mbbl",
        },
      ],
    };
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
  async mounted() {
    this.currentTableStatus = localStorage.getItem("status");
    if (this.status.includes("m_f")) {
      this.initFeatureData();
    } else {
      this.infos = this.$route.params.infos;
    }
    this.initGraph();
  },
  watch: {
    currentTableStatus(v) {
      this.initGraph(v);
    },
  },
  methods: {
    // 从模版进入特征详情页 '1-3'代表'特征1-3'
    async initFeatureData(currentTableStatus = this.currentTableStatus) {
      let id = this.$route.query.row.id
      let res = ''
      switch (this.end) {
        case "1":
          res = await api.getTzData({id})
          break;
        case "2":
          res = await api.getTzData({id})
          break;
        case "3":
          res = await api.getTzData({id})
          break;
      }
      let row = res.data || {}
      // 给模版跳转的特征详情赋值
      let infos = this.columnsMap[this.end];
      infos = infos.filter((o) => o.key);
      this.infos = infos.map((o) => {
        o.value = row[o.key] || "--";
        o.label = o.title;
        return o;
      });
    },
    // 初始化数据图
    initGraph(currentTableStatus = this.currentTableStatus) {
      console.log("当前tab状态: ", this.currentTableStatus);

      let id = this.$route.query.row.id;

      if (
        this.$route.query.feature !== "feature" &&
        this.$route.query.hasFeature
      ) {
        if (this.currentTableStatus === "sea") {
          api.getHrrpTemplateArray10({ id: id }).then(({ data }) => {
            this.eData = data;
          });
        } else {
          api.getHrrpTemplateArray11({ id: id }).then(({ data }) => {
            this.eData = data;
          });
        }
        return;
      }
      if (this.$route.query.feature !== "feature") {
        id = this.$route.query.row.templateId;
      }
      switch (this.$route.query.index) {
        case "m_f1":
          if (this.currentTableStatusValue === "xbbh") {
            api.getHrrpTemplateArray12({ id: id }).then(({ data }) => {
              this.eData = data;
            });
          } else if (this.currentTableStatusValue === "flybh") {
            api.getHrrpTemplateArray13({ id: id }).then(({ data }) => {
              this.eData = data;
            });
          } else {
            api.getHrrpTemplateArray14({ id: id }).then(({ data }) => {
              this.eData = data;
            });
          }

          break;
        case "f1":
          if (this.currentTableStatusValue === "xbbh") {
            api.getHrrpTemplateArray12({ id: id }).then(({ data }) => {
              this.eData = data;
            });
          } else if (this.currentTableStatusValue === "flybh") {
            api.getHrrpTemplateArray13({ id: id }).then(({ data }) => {
              this.eData = data;
            });
          } else {
            api.getHrrpTemplateArray14({ id: id }).then(({ data }) => {
              this.eData = data;
            });
          }
          break;
        case "m_f2":
          api.getKdtzAnalysisArray5({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
        case "f2":
          api.getKdtzAnalysisArray5({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
        case "m_f3":
          api.getZdtzAnalysisArray5({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
        case "f3":
          api.getZdtzAnalysisArray9({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
        case "f5":
          api.getdhjTZAnalysisArray4({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
        case "f6":
          api.getAisAnalysisArray4({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
        case "f7":
          api.getAdsBTZAnalysisArray4({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
        case "f8":
          api.getGpsTzAnalysisArray4({ id: id }).then(({ data }) => {
            this.eData = data;
          });
          break;
      }
    },
  },
};
</script>

<style lang="" scoped>
.echarts-area {
  width: 100%;
  border: 1px solid #efefef;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.data-area {
  width: 100%;
  padding: 20px 10px 0;
}
.data-area1 {
  width: 100%;
  padding: 20px 10px 0;
}
img {
  display: block;
  width: 100%;
  height: 300px;
}
.i {
  width: 100%;
  height: 32px;
  background: #f3f3f3;
  padding-left: 10px;
  line-height: 32px;
  color: #333;
}
.border {
  border: 1px solid #e3e3e3;
}
.border-r {
  border-radius: 4px;
}
</style>

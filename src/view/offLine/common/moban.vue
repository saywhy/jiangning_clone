<template>
  <div>
    <div class="checkTable" v-if="index != '4'">
      <RadioGroup v-model="currentTableStatus" type="button">
        <Radio label="sea">海面</Radio>
        <Radio label="sky">空中</Radio>
      </RadioGroup>
    </div>
    <SearchAndTable
      :searchData="searchDataMap[index+(index !='4' ?  currentTableStatus: '')]"
      :operateData="operateData"
      :columns="columnsMap[index+(index !='4' ?  currentTableStatus: '')]"
      :getTableData="getTableData"
      @on-selection-change="onSelection"
      @tableParam="updateTableParam"
      ref="table"
    />
    <Dialog
      title="新增"
      :show="dialogShow"
      @ok="$refs.EditForm.submit()"
      @cancel="dialogShow = false"
    >
      <EditForm
        :infos="infos[index + (index !='4' ?  currentTableStatus: '')]"
        v-if="dialogShow"
        :submitShow="false"
        ref="EditForm"
        @submit="add"
      />
    </Dialog>
    <Dialog
      title="编辑"
      :show="dialogEditShow"
      @ok="$refs.EditForm2.submit()"
      @cancel="dialogEditShow = false"
    >
      <EditForm
        :infos="editInfos[index + (index !='4' ?  currentTableStatus: '')]"
        v-if="dialogEditShow"
        :submitShow="false"
        ref="EditForm2"
        @submit="edit"
      />
    </Dialog>
    <Dialog
      :show="dialogDelShow"
      @ok="del"
      title="提示"
      width="500"
      content="确认删除？"
      @cancel="dialogDelShow = false"
    ></Dialog>
    <Dialog
      :show="dialogExpShow"
      @ok="exportFn"
      title="提示"
      width="500"
      content="确认导出？"
      @cancel="dialogExpShow = false"
    ></Dialog>
    <a :href="aHref" :download="aDownload"></a>
    <importDialog :show="dialogImportShow" @close="dialogImportShow = false" :uploadFn="uploadFn" />
  </div>
</template>

<script>
import SearchAndTable from "@/components/SearchAndTable/index";
import EditForm from "@/components/EditForm/index";
import Dialog from "@/components/Dialog/index";
import Dropdown from "./Dropdown";
import importDialog from "./importDialog";
import moban from "./moban.js";
import {
  // 列表接口
  // userList as getTableData1sea,
  // userList as getTableData1sky,
  // userList as getTableData2sea,
  // userList as getTableData2sky,
  // userList as getTableData3sea,
  // userList as getTableData3sky,
  // userList as getTableData4,
  HRRPTemplateList as getTableData1sea,
  HRRPSkyTemplateList as getTableData1sky,
  kdRCSTemplateList as getTableData2sea,
  kdRCSTemplateList as getTableData2sky,
  zdRCSTemplateList as getTableData3sea,
  zdRCSTemplateList as getTableData3sky,
  JEMTemplateList as getTableData4,
  // userList as getTableData5,
  // userList as getTableData6,
  // userList as getTableData7,
  // userList as getTableData8,
  // 添加接口
  HRRPTemplateAddOrUpdate as userAdd1sea,
  HRRPSkyTemplateAddOrUpdate as userAdd1sky,
  kdRCSTemplateAddOrUpdate as userAdd2sea,
  kdRCSTemplateAddOrUpdate as userAdd2sky,
  zdRCSTemplateAddOrUpdate as userAdd3sea,
  zdRCSTemplateAddOrUpdate as userAdd3sky,
  JEMTemplateAddOrUpdate as userAdd4,
  // userAdd as userAdd5,
  // userAdd as userAdd6,
  // userAdd as userAdd7,
  // userAdd as userAdd8,
  // 编辑接口
  HRRPTemplateAddOrUpdate as userEdit1sea,
  HRRPSkyTemplateAddOrUpdate as userEdit1sky,
  kdRCSTemplateAddOrUpdate as userEdit2sea,
  kdRCSTemplateAddOrUpdate as userEdit2sky,
  zdRCSTemplateAddOrUpdate as userEdit3sea,
  zdRCSTemplateAddOrUpdate as userEdit3sky,
  JEMTemplateAddOrUpdate as userEdit4,
  // userAdd as userEdit5,
  // userAdd as userEdit6,
  // userAdd as userEdit7,
  // userAdd as userEdit8,
  HRRPTemplateDel as userDel1sea,
  HRRPSkyTemplateDel as userDel1sky,
  kdRCSTemplateDel as userDel2sea,
  kdRCSTemplateDel as userDel2sky,
  zdRCSTemplateDel as userDel3sea,
  zdRCSTemplateDel as userDel3sky,
  JEMTemplateDel as userDel4,
  userDel,
  uploadImg,
  baseUrl,
} from "@/api/app";
export default {
  name: "moban",
  mixins: [moban],
  components: {
    SearchAndTable,
    Dialog,
    EditForm,
    importDialog,
  },
  data() {
    return {
      currentTableStatus: "sea",
      tableParam: {},
    };
  },
  computed: {
    aHref() {
      let row = this.currentInfo;
      return `${baseUrl}/file/downloadFile?path=${encodeURIComponent(
        row.outPath
      )}`;
    },
    aDownload() {
      return new Date().getTime() + ".dwg";
    },
  },
  created() {
    this.index = this.$route.name.slice(-1);
    localStorage.setItem("status", this.currentTableStatus);
  },
  watch: {
    currentTableStatus(v) {
      localStorage.setItem("status", v);
      this.$refs.table.search();
    },
  },
  methods: {
    async getTableData(page, size) {
      if (!sessionStorage.getItem("userInfo")) {
        this.$router.push("/login");
        return;
      }
      let MAP = {
        "1sea": getTableData1sea,
        "1sky": getTableData1sky,
        "2sea": getTableData2sea,
        "2sky": getTableData2sky,
        "3sea": getTableData3sea,
        "3sky": getTableData3sky,
        4: getTableData4,
        // 5: getTableData5,
        // 6: getTableData6,
        // 7: getTableData7,
        // 8: getTableData8,
      };
      let status = this.index != "4" ? this.currentTableStatus : "";
      let res = await MAP[this.index + status](page, size);
      // if (res.message) {
      //   this.$router.push('/login')
      // }
      if (res.data) {
        let { content: data, total, ...resData } = res.data;
        return { data, total, ...resData };
      } else {
        this.$Message.error(res.message);
        return { data: [], total: 0 };
      }
    },
    onSelection(arr) {
      this.currentInfos = arr;
    },
    async del(v) {
      let MAP = {
        "1sea": userDel1sea,
        "1sky": userDel1sky,
        "2sea": userDel2sea,
        "2sky": userDel2sky,
        "3sea": userDel3sea,
        "3sky": userDel3sky,
        4: userDel4,
        // 5: userAdd5,
        // 6: userAdd6,
        // 7: userAdd7,
        // 8: userAdd8,
      };
      if (v) {
        let idList = this.currentInfos.map((o) => o.id);
        let status = this.index != "4" ? this.currentTableStatus : "";
        let res = await MAP[this.index + status]({ idList });
        if (res.data) {
          this.$refs.table.search();
          this.$Message.success("删除成功！");
        } else {
          this.$Message.error(res.message);
        }
        this.dialogDelShow = false;
      }
    },
    async add(v) {
      let MAP = {
        "1sea": userAdd1sea,
        "1sky": userAdd1sky,
        "2sea": userAdd2sea,
        "2sky": userAdd2sky,
        "3sea": userAdd3sea,
        "3sky": userAdd3sky,
        4: userAdd4,
        // 5: userAdd5,
        // 6: userAdd6,
        // 7: userAdd7,
        // 8: userAdd8,
      };
      if (v) {
        let status = this.index != "4" ? this.currentTableStatus : "";
        let res = await MAP[this.index + status](v);
        this.dialogShow = false;
        if (res.data) {
          this.$refs.table.search();
          this.$Message.success("添加成功！");
        } else {
          this.$Message.error(res.message);
        }
      }
    },
    async edit(v) {
      let MAP = {
        "1sea": userEdit1sea,
        "1sky": userEdit1sky,
        "2sea": userEdit2sea,
        "2sky": userEdit2sky,
        "3sea": userEdit3sea,
        "3sky": userEdit3sky,
        4: userEdit4,
        // 5: userEdit5,
        // 6: userEdit6,
        // 7: userEdit7,
        // 8: userEdit8,
      };
      if (v) {
        let id = this.currentInfo.id;
        let status = this.index != "4" ? this.currentTableStatus : "";
        let res = await MAP[this.index + status]({
          ...v,
          id,
        });
        this.dialogEditShow = false;
        if (res.data) {
          this.$refs.table.search();
          this.$Message.success("编辑成功！");
        } else {
          this.$Message.error(res.message);
        }
      }
    },
    async uploadFn(param) {
      param.typeStatusOrder = this.currentTableStatus === "sky" ? 1 : 0;
      return uploadImg(param);
    },
    exportFn() {
      this.$refs.a.click();
    },
    exportData() {
      if(this.index !== '1') {
        let filename = `${this.$route.meta.name}`;
        this.$refs.table.exportData({
          filename,
        });
        return
      }
      let status = this.index != "4" ? this.currentTableStatus : "";
      let link = document.createElement("a");
      link.style.display = "none";

      if (this.index === "1") {
        if (status === "sea") {
            if(this.tableParam.ldbh !== null){
          link.href =
            `${baseUrl}/HRRPTemplate/export` 
            }else{
          link.href =
            `${baseUrl}/HRRPTemplate/export?gr=` +
            this.tableParam.gr +
            "&hk=" +
            this.tableParam.hk +
            "&ldh=" +
            this.tableParam.ldh +
            "&ph=" +
            this.tableParam.ph;
          if (this.tableParam.sj1 !== null) {
            +"&sj1=" + this.tableParam.sj1 + "&sj2=" + this.tableParam.sj2;
          }
          }
        } else if (status === "sky") {

          if(this.tableParam.ldbh !== null){
          link.href =`${baseUrl}/HRRPSkyTemplate/export` 
          }else{
          link.href =
            `${baseUrl}/HRRPSkyTemplate/export?gr=` +
            this.tableParam.gr +
            "&hk=" +
            this.tableParam.hk +
            "&ldh=" +
            this.tableParam.ldh +
            "&ph=" +
            this.tableParam.ph;
          if (this.tableParam.sj1 !== null) {
            +"&sj1=" + this.tableParam.sj1 + "&sj2=" + this.tableParam.sj2;
            }
          }
        }
      }
      document.body.appendChild(link);
      link.click();
    },
    updateTableParam(v) {
      this.tableParam = v;
      console.log("当前参数：", v);
    },
  },
};
</script>

<style lang="" scoped>
.checkTable {
  text-align: right;
  text-align: right;
  margin-bottom: 10px;
  padding-right: 21px;
}
</style>

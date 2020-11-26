<template>
  <div>
    <div class="checkTable" v-if="index != '4'">
      <RadioGroup v-model="currentTableStatus" type="button">
        <Radio label="sea">海面</Radio>
        <Radio label="sky">空中</Radio>
      </RadioGroup>
    </div>
    <SearchAndTable
      :searchData="searchDataMap[index]"
      :operateData="operateData"
      :columns="columnsMap[index]"
      :getTableData="getTableData"
      @on-selection-change="onSelection"
      @tableParam="updateTableParam"
      :param="index != '4' ? { type: currentTableStatus === 'sea' ? '0' : '1' } : {}"
      ref="table"
    />
    <Dialog
      title="新增"
      :show="dialogShow"
      @ok="$refs.EditForm.submit()"
      @cancel="dialogShow = false"
    >
      <EditForm
        :infos="infos[index]"
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
        :infos="editInfos[index]"
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
    <importDialog :show="dialogImportShow" @close="dialogImportShow = false" :uploadFn="uploadFn" />
  </div>
</template>

<script>
import SearchAndTable from "@/components/SearchAndTable/index";
import EditForm from "@/components/EditForm/index";
import Dialog from "@/components/Dialog/index";
import Dropdown from "./Dropdown";
import importDialog from "./importDialog";
import featureData from "./featureData.js";
import {
  // 列表接口
  // userList as getTableData1,
  // userList as getTableData2,
  // userList as getTableData3,
  // userList as getTableData4,
  // userList as getTableData5,
  // userList as getTableData6,
  // userList as getTableData7,
  // userList as getTableData8,
  HRRPList as getTableData1,
  kdRCSList as getTableData2,
  zdRCSList as getTableData3,
  JEMList as getTableData4,
  DHJList as getTableData5,
  AISList as getTableData6,
  ADSBList as getTableData7,
  GPSList as getTableData8,
  // 添加接口
  HRRPAddOrUpdate as userAdd1,
  kdRCSAddOrUpdate as userAdd2,
  zdRCSAddOrUpdate as userAdd3,
  JEMAddOrUpdate as userAdd4,
  DHJAddOrUpdate as userAdd5,
  AISAddOrUpdate as userAdd6,
  ADSBAddOrUpdate as userAdd7,
  GPSAddOrUpdate as userAdd8,
  // 编辑接口
  HRRPAddOrUpdate as userEdit1,
  kdRCSAddOrUpdate as userEdit2,
  zdRCSAddOrUpdate as userEdit3,
  JEMAddOrUpdate as userEdit4,
  DHJAddOrUpdate as userEdit5,
  AISAddOrUpdate as userEdit6,
  ADSBAddOrUpdate as userEdit7,
  GPSAddOrUpdate as userEdit8,
  // 删除接口
  HRRPDel as userDel1,
  kdRCSDel as userDel2,
  zdRCSDel as userDel3,
  JEMDel as userDel4,
  DHJDel as userDel5,
  AISDel as userDel6,
  ADSBDel as userDel7,
  GPSDel as userDel8,
  userDel,
  uploadImg,
  baseUrl,
} from "@/api/app";
export default {
  name: "featureData",
  mixins: [featureData],
  components: {
    SearchAndTable,
    Dialog,
    EditForm,
    importDialog,
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
  data() {
    return {
      currentTableStatus: "sea",
      tableParam: {},
    };
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
        1: getTableData1,
        2: getTableData2,
        3: getTableData3,
        4: getTableData4,
        5: getTableData5,
        6: getTableData6,
        7: getTableData7,
        8: getTableData8,
      };
      let res = await MAP[this.index](page, size);
      // if (res.message) {
      //   this.$router.push("/login");
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
        1: userDel1,
        2: userDel2,
        3: userDel3,
        4: userDel4,
        5: userDel5,
        6: userDel6,
        7: userDel7,
        8: userDel8,
      };
      if (v) {
        let idList = this.currentInfos.map((o) => o.id);
        let res = await MAP[this.index]({ idList });
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
        1: userAdd1,
        2: userAdd2,
        3: userAdd3,
        4: userAdd4,
        5: userAdd5,
        6: userAdd6,
        7: userAdd7,
        8: userAdd8,
      };
      if (v) {
        let res = await MAP[this.index](v);
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
        1: userEdit1,
        2: userEdit2,
        3: userEdit3,
        4: userEdit4,
        5: userEdit5,
        6: userEdit6,
        7: userEdit7,
        8: userEdit8,
      };
      if (v) {
        let id = this.currentInfo.id;
        let res = await MAP[this.index]({
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
      let status = this.index != "4" ? this.currentTableStatus : "";

      if (this.index !== "1") {
        let filename = `${this.$route.meta.name}`;
        this.$refs.table.exportData({
          filename,
        });
        return;
      }
      let link = document.createElement("a");
      link.style.display = "none";
      if (this.index === "1") {
        if(status === 'sea'){
         if(this.tableParam.ldbh !== undefined){
        link.href =
          `${baseUrl}/hrrptz/export?type=0&ldbh=` +
          this.tableParam.ldbh +
          "&ph=" +
          this.tableParam.ph;
        if (this.tableParam.sj1 !== null) {
          +"&sj1=" + this.tableParam.sj1 + "&sj2=" + this.tableParam.sj2;
        }
      }else{
         link.href = `${baseUrl}/hrrptz/export?type=0` 
      }
      }else{
        if(this.tableParam.ldbh !== undefined){
        link.href =
          `${baseUrl}/hrrptz/export?type=1&ldbh=` +
          this.tableParam.ldbh +
          "&ph=" +
          this.tableParam.ph;
        if (this.tableParam.sj1 !== null) {
          +"&sj1=" + this.tableParam.sj1 + "&sj2=" + this.tableParam.sj2;
        }
      }else{
         link.href = `${baseUrl}/hrrptz/export?type=1` 
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

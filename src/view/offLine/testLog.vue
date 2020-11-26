<template>
  <div>
    <Spin fix v-if="spinShow"></Spin>

    <div>
      <Button type="primary" @click="Loading1">测试上传5G</Button>
      {{data1}}
    </div>
    <br />
    <div style="padding:10px 0">
      <Button type="primary" @click="Loading2">测试多文件上传</Button>
      {{data2}}
    </div>
    <importDialog :show="dialogImportShow" @close="dialogImportShow = false" :title="上传" :uploadFn="uploadFn" />
  </div>
</template>

<script>
import SearchAndTable from "@/components/SearchAndTable/index";
import EditForm from "@/components/EditForm/index";
import { uploadListFile as getTableData, uploadImg } from "@/api/app";
import importDialog from './common/importDialog'

export default {
  name: "sysLog",
  components: {
    SearchAndTable,
    EditForm,
    importDialog
  },
  data() {
    return {
      spinShow: false,
      data1: "",
      data2: "",
      dialogImportShow: false
    };
  },
  methods: {
    async Loading1() {
      // alert("测试1")
      this.data1 = res.data;
      this.dialogImportShow = true;
    },
    async Loading2() {
      this.spinShow = true;
      let res = await getTableData({});
      this.data2 = res.data;
      this.spinShow = false;
    },
    async uploadFn(param) {
      param.typeStatus = '9'
      return uploadImg(param);
    },
  },
};
</script>

<style lang="" scoped>
</style>

<template>
  <div>
    <SearchAndTable
      :searchData="searchData"
      :operateData="operateData"
      :columns="columns"
      :getTableData="getTableData"
      @on-selection-change="onSelection"
      ref="table"
    />
    <Dialog
      title="新增用户"
      :show="dialogShow"
      @ok="$refs.EditForm.submit()"
      @cancel="dialogShow = false"
    >
      <EditForm :infos="infos" v-if="dialogShow" :submitShow="false" ref="EditForm" @submit="add" />
    </Dialog>
    <Dialog
      title="编辑用户"
      :show="dialogEditShow"
      @ok="$refs.EditForm2.submit()"
      @cancel="dialogEditShow = false"
    >
      <EditForm
        :infos="editInfos"
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
  </div>
</template>

<script>
import SearchAndTable from "@/components/SearchAndTable/index";
import EditForm from "@/components/EditForm/index";
import Dialog from "@/components/Dialog/index";
import { userList as getTableData, userAdd, userDel } from "@/api/app";
export default {
  name: "userManage",
  components: {
    SearchAndTable,
    Dialog,
    EditForm,
  },
  data() {
    return {
      dialogShow: false,
      dialogDelShow: false,
      dialogEditShow: false,
      currentInfo: {},
      currentInfos: [],
      searchData: [
        // {
        //   label: '用户名',
        //   labelWidth: 90,
        //   key: 'title'
        // },
        {
          label: "账号",
          labelWidth: 90,
          key: "userName",
        },
        // ,
        // {
        //   label: '用户类型',
        //   labelWidth: 120,
        //   key: 'title',
        //   type: 'select',
        //   list: [{value: '', label: '全部'},
        //          {value: 0, label: '管理员'},
        //          {value: 0, label: '管理员'},],
        //   colSpan: '12'
        // },
        // {
        //   label: '创建时间',
        //   labelWidth: 120,
        //   key: 'startTime,endTime',
        //   type: 'date'
        // }
      ],
      operateData: [
        {
          label: "新增",
          click: () => (this.dialogShow = true),
        },
        {
          label: "删除",
          click: () => {
            this.dialogDelShow = true;
          },
        },
        // ,
        // {
        //   label: '导入',
        //   click: () => {}
        // },
        // {
        //   label: '导出',
        //   click: () => {}
        // }
      ],
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "序号",
          type: "index",
          width: 70,
          align: "center",
        },
        // {
        //   title: "用户id",
        //   align: "center",
        //   minWidth: 120,
        //   key: "id",
        // },
        {
          title: "账号",
          align: "center",
          minWidth: 120,
          key: "userName",
        },
        // {
        //   title: '用户名',
        //   align: 'center',
        //   minWidth: 120,
        //   key: 'name'
        // },
        {
          title: "手机号",
          align: "center",
          minWidth: 120,
          key: "phone",
        },
        // {
        //   title: '创建时间',
        //   align: 'center',
        //   minWidth: 150,
        //   key: 'createTime'
        // },
        {
          title: "角色",
          align: "center",
          minWidth: 150,
          key: "roleName",
        },
        {
          title: "性别",
          align: "center",
          minWidth: 150,
          key: "sexName",
        },
        {
          title: "操作",
          align: "center",
          fixed: "right",
          width: 120,
          render: (h, { row }) =>
            h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row;
                      this.dialogEditShow = true;
                      this.editInfos = this.editInfos.map((o) => {
                        o.value = row[o.key] || "";
                        return o;
                      });
                    },
                  },
                },
                "编辑"
              ),
            ]),
        },
      ],
      infos: [
        // {
        //   label: '姓名',
        //   key: 'name',
        //   rules: true
        // },
        {
          label: "账号",
          key: "userName",
          rules: true,
        },
        {
          label: "密码",
          key: "passWord",
          rules: true,
        },
        {
          label: "手机号",
          key: "phone",
          rules: true,
        },
        {
          label: "性别",
          key: "sex",
          type: "select",
          list: [
            { value: "M", label: "男" },
            { value: "F", label: "女" },
          ],
          rules: true,
        },
        {
          label: "角色",
          key: "role",
          type: "select",
          list: [
            { value: "0", label: "管理员" },
            { value: "1", label: "用户" },
          ],
          rules: true,
        },
      ],
      editInfos: [
        // {
        //   label: '姓名',
        //   key: 'name',
        //   rules: true
        // },
        {
          label: "账号",
          key: "userName",
          value: "",
          rules: true,
        },
        {
          label: "密码",
          key: "passWord",
          value: "",
          rules: true,
        },
        {
          label: "手机号",
          key: "phone",
          value: "",
          rules: true,
        },
        {
          label: "性别",
          key: "sex",
          value: "",
          type: "select",
          list: [
            { value: "M", label: "男" },
            { value: "F", label: "女" },
          ],
          rules: true,
        },
        {
          label: "角色",
          key: "role",
          value: "",
          type: "select",
          list: [
            { value: 0, label: "管理员" },
            { value: 1, label: "用户" },
          ],
          rules: true,
        },
      ],
    };
  },
  methods: {
    async getTableData(page, size) {
      if (!sessionStorage.getItem("userInfo")) {
        this.$router.push("/login");
        return;
      }
      let res = await getTableData(page, size);
      // if (res.message) {
      //   this.$router.push("/login");
      // }
      if (res.data) {
        let { content: data, total, ...resData } = res.data
        return { data, total, ...resData }
      } else {
        this.$Message.error(res.message);
        return { data: [], total: 0 };
      }
    },
    async del() {
      let idList = this.currentInfos.map((o) => o.id);
      let res = await userDel({ idList });
      if (res.data) {
        this.$refs.table.search();
        this.$Message.success("删除成功！");
      } else {
        this.$Message.error(res.message);
      }
      this.dialogDelShow = false;
    },
    async add(v) {
      if (v) {
        let res = await userAdd(v);
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
      if (v) {
        let id = this.currentInfo.id;
        let res = await userAdd({
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
    onSelection(arr) {
      this.currentInfos = arr;
    },
  },
};
</script>

<style lang="" scoped>
</style>

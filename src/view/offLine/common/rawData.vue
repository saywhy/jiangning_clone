<template>
  <div>
    <SearchAndTable
      :searchData="searchData"
      :operateData="operateData"
      :columns="columns"
      :getTableData="getTableData"
      ref="table"
    />
    <Dialog title="新增用户" :show="dialogShow" @ok="$refs.EditForm.submit()" @cancel="dialogShow = false">
      <EditForm :infos="infos" v-if="dialogShow" :submitShow="false" ref="EditForm" @submit="add" />
    </Dialog>
    <Dialog :show="dialogDelShow" @ok="del" title="提示" width="500" content="确认删除？" @cancel="dialogDelShow = false"></Dialog>
  </div>
</template>

<script>
import SearchAndTable from '@/components/SearchAndTable/index'
import EditForm from '@/components/EditForm/index'
import Dialog from '@/components/Dialog/index'
import Dropdown from './Dropdown'
import { userList as getTableData, userAdd, userDel } from '@/api/app'
export default {
  name: 'rawData',
  components: {
    SearchAndTable,
    Dialog,
    EditForm
  },
  data () {
    return {
      dialogShow: false,
      dialogDelShow: false,
      currentInfo: {},
      searchData: [
        {
          label: '用户名',
          labelWidth: 90,
          key: 'title'
        }
      ],
      operateData: [
        {
          label: '新增',
          click: () => (this.dialogShow = true)
        },
        {
          label: '删除',
          click: () => {}
        },
        {
          label: '导入',
          click: () => {}
        },
        {
          label: '导出',
          click: () => {}
        }
      ],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '序号',
          type: 'index',
          width: 70,
          align: 'center'
        },
        {
          title: '用户id',
          align: 'center',
          minWidth: 120,
          key: 'id'
        },
        {
          title: '账号',
          align: 'center',
          minWidth: 120,
          key: 'userName'
        },
        {
          title: '用户名',
          align: 'center',
          minWidth: 120,
          key: 'name'
        },
        {
          title: '创建人',
          align: 'center',
          minWidth: 120,
          key: 'createName'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 150,
          key: 'createTime'
        },
        {
          title: '角色',
          align: 'center',
          minWidth: 150,
          key: 'typeName'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 220,
          render: (h, { row }) =>
            h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.currentInfo = row
                      this.dialogDelShow = true
                    }
                  }
                },
                '编辑'
              ),
              h(Dropdown)
            ])
        }
      ],
      infos: [
        {
          label: '姓名',
          key: 'name',
          rules: true
        },
        {
          label: '账号',
          key: 'userName',
          rules: true
        },
        {
          label: '密码',
          key: 'passWord',
          rules: true
        },
        {
          label: '角色',
          key: 'type',
          type: 'select',
          list: [{value: 0, label: '用户'}, {value: 1, label: '管理员'}],
          rules: true
        }
      ]
    }
  },
  methods: {
    async getTableData (page, size) {
      if (!sessionStorage.getItem('userInfo')) {
        this.$router.push('/login')
        return
      }
      let res = await getTableData(page, size)
      // if (res.message) {
      //   this.$router.push('/login')
      // }
      if (res.data) {
        let { content: data, total, ...resData } = res.data
        return { data, total, ...resData }
      } else {
        this.$Message.error(res.message)
        return { data: [], total: 0 }
      }
    },
    async del () {
      let { id } = this.currentInfo
      let res = await userDel({ id })
      if (res.data) {
        this.$refs.table.search()
        this.$Message.success('删除成功！')
      } else {
        this.$Message.error(res.message)
      }
      this.dialogDelShow = false
    },
    async add (v) {
      if (v) {
        let res = await userAdd(v)
        this.dialogShow = false
        if (res.data) {
          this.$refs.table.search()
          this.$Message.success('添加成功！')
        } else {
          this.$Message.error(res.message)
        }
      }
    }
  }
}
</script>

<style lang="" scoped>
</style>

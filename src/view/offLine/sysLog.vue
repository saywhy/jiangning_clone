<template>
  <div>
    <SearchAndTable
      :searchData="searchData"
      :operateData="operateData"
      :columns="columns"
      :getTableData="getTableData"
      ref="table"
    />
  </div>
</template>

<script>
import SearchAndTable from '@/components/SearchAndTable/index'
import EditForm from '@/components/EditForm/index'
import { userLog as getTableData } from '@/api/app'
export default {
  name: 'sysLog',
  components: {
    SearchAndTable,
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
        },
      ],
      operateData: [],
      columns: [
        {
          title: '序号',
          type: 'index',
          width: 70,
          align: 'center'
        },
        {
          title: '账号',
          align: 'center',
          minWidth: 120,
          key: 'userAccount'
        },
        {
          title: '登录时间',
          align: 'center',
          minWidth: 120,
          key: 'date'
        },
        {
          title: '类型',
          align: 'center',
          minWidth: 120,
          key: 'typeName'
        },
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
          list: [
            { value: 0, label: '用户' },
            { value: 1, label: '管理员' }
          ],
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
    }
  }
}
</script>

<style lang="" scoped>
</style>

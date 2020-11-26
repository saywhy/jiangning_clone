<template>
  <div>
    <SearchAndTable
      :searchData="searchData"
      :operateData="[]"
      :columns="columns"
      :getTableData="getTableData"
      ref="table"
    />
    <Dialog :show="dialogShow" @ok="dialogShow = false" @cancel="dialogShow = false">
      <EditForm :infos="infos" :submitShow="false" />
      <div style="padding: 0 10px">
        <Button type="primary">下载</Button>
      </div>
    </Dialog>
  </div>
</template>

<script>
import SearchAndTable from '@/components/SearchAndTable/index'
import EditForm from '@/components/EditForm/index'
import Dialog from '@/components/Dialog/index'
import { historyList as getTableData, baseUrl } from '@/api/app'
export default {
  name: 'historyManage',
  components: {
    SearchAndTable,
    Dialog,
    EditForm
  },
  data () {
    return {
      dialogShow: false,
      currentInfo: {},
      searchData: [
        {
          label: '标题',
          labelWidth: 60,
          key: 'title'
        },
        // {
        //   label: '创建人',
        //   labelWidth: 90,
        //   key: 'createName'
        // },
        {
          label: '创建时间',
          labelWidth: 90,
          key: 'startTime,endTime',
          type: 'date'
        }
      ],
      columns: [
        {
          title: '用户id',
          align: 'center',
          minWidth: 120,
          key: 'id'
        },
        {
          title: '标题',
          align: 'center',
          minWidth: 120,
          key: 'title'
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
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 120,
          render: (h, { row }) =>
            h('a',
              {
                attrs: {
                  href: `${baseUrl}/file/downloadFile?path=${encodeURIComponent(row.outPath)}`,
                  download: new Date().getTime() + '.dwg'
                }
              },
              [
                h(
                  'Button',
                  {
                    props: {
                      type: 'primary',
                      size: 'small'
                    }
                  },
                  '重新下载'
                )
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
          label: '手机号',
          key: 'phone',
          rules: true
        }
      ]
    }
  },
  methods: {
    async getTableData (page, size) {
      let res = await getTableData(page, size)
      if (res.data) {
        let { content: data, total } = res.data
        return { data, total }
      } else {
        this.$Message.error(res.message)
        return { data: [], total: 0 }
      }
    }
  }
}
</script>

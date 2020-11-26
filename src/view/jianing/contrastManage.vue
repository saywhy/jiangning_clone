<template>
  <div>
    <SearchAndTable
      :searchData="searchData"
      :operateData="operateData"
      :columns="columns"
      :getTableData="getTableData"
      ref="table"
    />
    <Dialog  title="新增图标" :show="dialogShow" @ok="$refs.EditForm.submit()" @cancel="dialogShow = false">
      <EditForm :infos="infos" :submitShow="false" v-if="dialogShow" ref="EditForm" @submit="add" />
    </Dialog>
    <Dialog title="删除图标"
      :show="dialogDelShow"
      @ok="del"
      width="500"
      content="确认删除？"
      @cancel="dialogDelShow = false"
    ></Dialog>
    <Dialog
      :show="dialogViewShow"
      @ok="dialogViewShow = false"
      :cancelBtn="false"
      confirmText="关闭"
      title="文件详情"
    >
      <img :src="'imgUrl'" style="width: 100%" />
    </Dialog>
  </div>
</template>

<script>
import SearchAndTable from '@/components/SearchAndTable/index'
import EditForm from '@/components/EditForm/index'
import Dialog from '@/components/Dialog/index'
import {
  contrastList as getTableData,
  contrastAdd,
  contrastDel,
  uploadImg,
  downImg
} from '@/api/app'
export default {
  name: 'contrastManage',
  components: {
    SearchAndTable,
    Dialog,
    EditForm
  },
  data () {
    return {
      dialogShow: false,
      dialogDelShow: false,
      dialogViewShow: false,
      currentInfo: {},
      searchData: [
        {
          label: '标题',
          labelWidth: 90,
          key: 'title'
        }
      ],
      operateData: [
        {
          label: '新增',
          click: () => (this.dialogShow = true)
        }
      ],
      columns: [
        {
          title: 'id',
          align: 'center',
          minWidth: 60,
          key: 'id'
        },
        {
          title: '标题',
          align: 'center',
          minWidth: 100,
          key: 'title'
        },
        {
          title: 'GE图标形状',
          align: 'center',
          minWidth: 200,
          render: (h, { row }) => h('div', [
            h('img', {
              attrs: {
                src: row.originalUrl
              },
              style: {
                width: '100%'
              }
            })
          ])
        },
        {
          title: '输出图块形状',
          align: 'center',
          minWidth: 200,
          render: (h, { row }) => h('div', [
            h('img', {
              attrs: {
                src: row.generateUrl
              },
              style: {
                width: '100%'
              }
            })
          ])
        },
        {
          title: '备注',
          align: 'center',
          minWidth: 100,
          key: 'remark'
        },
        {
          title: '创建时间',
          align: 'center',
          minWidth: 100,
          key: 'createTime'
        },
        {
          title: '创建人',
          align: 'center',
          minWidth: 100,
          key: 'createName'
        },
        {
          title: '操作',
          align: 'center',
          fixed: 'right',
          width: 100,
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
                '删除'
              )
            ])
        }
      ],
      infos: [
        {
          label: '标题',
          key: 'title',
          rules: true
        },
        {
          label: '备注',
          key: 'remark',
          rules: true
        },
        {
          label: 'GE图标形状',
          key: 'original',
          type: 'upload',
          labelWidth: 150,
          uploadFn: uploadImg,
          multiple: false,
          rules: true
        },
        {
          label: '输出图块形状',
          key: 'generate',
          type: 'upload',
          uploadFn: uploadImg,
          multiple: false,
          labelWidth: 150,
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
        this.downImgs(data)
        return { data, total }
      } else {
        this.$Message.error(res.message)
        return { data: [], total: 0 }
      }
    },
    async downImgs (data) {

      data.map((o, i) => {
        downImg({ path: o.generate }).then(url => {
          o.generateUrl = url
          data.splice(i, 1, o)
          this.$refs.table.tableData = data
        })
        downImg({ path: o.original }).then(url => {
          o.originalUrl = url
          data.splice(i, 1, o)
          this.$refs.table.tableData = data
        })
      })
    },
    async del () {
      let { id } = this.currentInfo
      let res = await contrastDel({ id })
      if (res.data) {
        this.$refs.table.search()
        this.$Message.success('删除成功！')
      } else {
        this.$Message.error(res.message)
      }
      this.dialogDelShow = false
    },
    async add (v) {
      v.original = v.original[0].data
      v.generate = v.generate[0].data

      if (v) {
        let res = await contrastAdd(v)
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

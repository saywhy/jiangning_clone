<template>
  <div>
    <EditForm
      :infos="infos"
      :operateType="operateType"
      :submitText="submitText"
      :submitShow="false"
    />
  </div>
</template>

<script>
import EditForm from '@/components/EditForm/index'
export default {
  name: 'kmlManage',
  components: {
    EditForm
  },
  data () {
    return {
      operateType: 'edit',
      submitText: '上传',
      infos: [
        // {
        //   label: '姓名',
        //   key: 'name',
        //   value: 'ziChin',
        //   colSpan: 24,
        //   rules: true
        // },
        {
          label: '上传图片',
          key: 'fileList',
          type: 'upload',
          fileType: ['.kml'],
          multiple: true,
          value: []
        }
      ]
    }
  }
}
</script>

<style lang="" scoped>
</style>

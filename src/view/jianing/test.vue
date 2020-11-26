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
    return {}
  }
}
</script>

<style lang="" scoped>
</style>

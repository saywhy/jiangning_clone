<template>
  <div>
    <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
      <DatePicker
        style="width: 100%"
        type="date"
        split-panels
        clearable
        :placeholder="placeholder ? placeholder : '请选择时间'"
        :size="size"
        :disabled="disabled"
        @on-change="onChange"
        format="yyyy-MM-dd"
        :value="currentValue"
      ></DatePicker>
    </FormItem>
  </div>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'DateItem2',
  mixins: [commonItem],
  methods: {
    onChange (d) {
      let first = new Date(d+" 00:00:00").getTime() 
      this.$emit('input', first)
    }
  }
}
</script>

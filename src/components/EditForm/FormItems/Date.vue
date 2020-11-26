<template>
  <div>
    <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
      <DatePicker
        style="width: 100%"
        type="daterange"
        split-panels
        clearable
        :placeholder="placeholder ? placeholder : '请选择时间'"
        :size="size"
        :disabled="disabled"
        @on-change="onChange"
        format="yyyy-MM-dd"
      ></DatePicker>
    </FormItem>
  </div>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'DateItem',
  mixins: [commonItem],
  methods: {
    onChange (d) {
      let [first, last] = d
      first = new Date(first+" 00:00:00").getTime()
      last = new Date(last+" 23:59:59").getTime()
      this.$emit('input', [first, last])
    }
  }
}
</script>

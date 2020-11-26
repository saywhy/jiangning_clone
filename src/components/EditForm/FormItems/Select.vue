<template>
  <div>
    <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
      <Select
        :placeholder="placeholder ? placeholder : '请选择'"
        :disabled="disabled"
        v-model="currentValue"
        :size="size"
      >
        <Option
          v-for="(item,index) in list"
          :value="item.value"
          :label="item.label"
          :key="index"
        >{{item.label}}</Option>
      </Select>
    </FormItem>
  </div>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'SelectItem',
  mixins: [commonItem]
}
</script>

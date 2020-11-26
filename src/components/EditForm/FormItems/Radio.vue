<template>
  <FormItem
    class="customed-radio-group"
    :label="label"
    :prop="prop"
    :label-width="labelWidth"
    :rules="rules"
  >
    <RadioGroup v-model="currentValue" :size="size">
      <Radio
        v-for="(item,i) in list"
        :label="item.value"
        :disabled="disabled"
        :key="i"
        :size="size"
      >{{item.label}}</Radio>
    </RadioGroup>
  </FormItem>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'RadioItem',
  mixins: [commonItem]
}
</script>

<style lang="css">
.customed-radio-group div.ivu-radio-group {
  font-size: 0;
}
.customed-radio-group .ivu-form-item-content {
  font-size: 0;
}
.customed-radio-group .ivu-form-item-error-tip {
  font-size: 12px;
}
</style>

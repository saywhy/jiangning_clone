<template>
  <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <CheckboxGroup v-model="currentValue" :size="size">
      <Checkbox
        v-for="(item,i) in list"
        :disabled="disabled"
        :label="item.value"
        :key="i"
        :size="size"
      >{{item.label}}</Checkbox>
    </CheckboxGroup>
  </FormItem>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'CheckboxItem',
  mixins: [commonItem]
}
</script>

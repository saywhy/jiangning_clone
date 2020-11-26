<template>
  <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <i-input
      type="textarea"
      v-model="currentValue"
      :placeholder="placeholder ? placeholder : `请填写${text}`"
      :autosize="{minRows: minRows || 2, maxRows: maxRows || 4}"
      :size="size"
    ></i-input>
  </FormItem>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'TextareaItem',
  mixins: [commonItem],
  props: {
    minRows: {
      type: Number
    },
    maxRows: {
      type: Number
    }
  }
}
</script>

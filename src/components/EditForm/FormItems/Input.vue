<template>
  <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <i-input
      :type="type"
      :placeholder="placeholder ? placeholder : `请输入${text}`"
      v-model="currentValue"
      :disabled="disabled"
      :size="size"
      :clearable="clearable"
      @keyup.enter.native="$emit('on-enter')"
      @on-clear="$emit('on-clear')"
    ></i-input>
  </FormItem>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'InputItem',
  mixins: [commonItem],
  computed: {
    type () {
      let o = this.info
      let type = o.type === 'input' ? 'text' : o.type
      return type
    }
  }
}
</script>

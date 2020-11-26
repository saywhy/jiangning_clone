<template>
  <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <slot></slot>
  </FormItem>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'slotItem',
  mixins: [commonItem]
}
</script>

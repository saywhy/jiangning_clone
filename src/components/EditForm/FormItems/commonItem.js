export default {
  props: {
    info: {
      type: Object
    },
    model: {
      type: Object
    },
    size: {
      type: String
    },
    value: {
      type: [String, Number, Array, Object]
    },
    operateType: {
      type: String
    }
  },
  computed: {
    text () { // String 传入的label值
      let {
        label: text
      } = this.info
      return text
    },
    label () { // String 表单元素的label值
      let {
        label: text
      } = this.info
      return text && `${text}：`
    },
    keyName () { // String key值
      return this.info.key
    },
    prop () { // String key值
      return this.info.key
    },
    labelWidth () { // Number 表单元素的label宽度
      return this.info.labelWidth
    },
    rules () {
      let {
        pattern,
        rules,
        label
      } = this.info
      if (rules === true) {
        return pattern ? [{
          required: true,
          message: `请输入${label}`
        }, {
          message: `请输入正确${label}`,
          pattern
        }] : [{
          required: true,
          message: `请输入${label}`
        }]
      } else if (Array.isArray(rules)) {
        return rules
      }
      return []
    },
    list () { // Array 用于select、radio、文本显示等
      let {
        list
      } = this.info
      // 回显时对checkbox、radio、select操作
      if (this.operateType === 'view') {
        list = list.filter(o => Array.isArray(this.value) ? this.value.includes(o.value) : this.value === o.value)
      }
      return list
    },
    disabled () { // 禁用
      let {
        disabled = false
      } = this.info
      return disabled
    },
    placeholder () { // Sring 暗纹
      let {
        placeholder
      } = this.info
      return this.operateType === 'view' ? ' ' : placeholder
    },
    clearable () {
      let {
        clearable = false
      } = this.info
      return clearable
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (value) {
      this.$emit('input', value) // 提供v-model
    }
  }
}


<template>
  <div style="position: relative">
    <Form
      ref="form"
      :model="param"
      :rules="rules"
      :label-width="labelWidth"
      :label-position="labelPosition"
      class="customed-edit-form"
      :class="{ search: operateType === 'search', view: operateType === 'view' }"
      :size="size"
    >
      <Row>
        <i-col
          span="24"
          style="text-align: right"
          v-if="submitShow && submitPosition === 'top'"
          class="submit-col"
        >
          <Button type="primary" :size="size" @click.prevent="submit">{{submitText}}</Button>
        </i-col>

        <template v-for="(info,i) in infos">
          <i-col
            class="form-col"
            :key="i"
            :class-name="`col-${info.key}`"
            :span="info.colSpan ? info.colSpan : info.type === 'hr' ? '24' : '12'"
            :style="info.style"
          >
            <components
              :is="`${info.type || 'input'}-item`"
              :info="info"
              :size="info.size || size"
              v-if="linkingHandler(info, param)"
              v-model="param[info.key]"
              :model="param"
              :operateType="operateType"
              @on-enter="$emit('on-enter', param)"
              @on-clear="$emit('on-clear', param)"
              @update="v => spinShow = v"
            >
              <slot :name="info.key" :info="info"></slot>
            </components>
          </i-col>
        </template>

        <i-col
          span="24"
          style="text-align: right;padding: 0 10px"
          v-if="submitShow && submitPosition === 'bottom'"
          class="submit-col"
        >
          <Button
            v-if="submitShape"
            type="primary"
            :size="size"
            @click.prevent="submit"
            :long="submitLong"
            shape="circle"
          >{{submitText}}</Button>
          <Button
            v-else
            type="primary"
            :size="size"
            @click.prevent="submit"
            :long="submitLong"
          >{{submitText}}</Button>
        </i-col>
      </Row>
    </Form>
    <Spin fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
import components from './register'
import { infos, rules } from './mock'

export default {
  components,
  props: {
    // 显示类型：编辑edit、查看view、表格搜索search
    operateType: {
      type: String,
      default: 'edit'
    },
    infos: {
      type: Array,
      default: () => infos
    },
    rules: {
      type: Object,
      default: () => rules
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    size: {
      type: String,
      default: 'default'
    },
    // 是否有提交按钮
    submitShow: {
      type: Boolean,
      default: true
    },
    // 表单做表格搜索栏时的，一般search按钮为top
    submitPosition: {
      type: String,
      default: 'bottom'
    },
    // 提交按钮的文字内容
    submitText: {
      type: String,
      default: '提交'
    },
    // 提交按钮的长度是否为100%
    submitLong: {
      type: Boolean,
      default: false
    },
    // 提交按钮的形状
    submitShape: {
      type: String,
      default: '' // 为真时默认circle
    }
  },
  data () {
    // 初始化disabled、param
    const setParam = (infos, param = {}) => {
      infos.map(o => {
        let { key, value, disabled = false, type } = o
        if (type !== 'hr') {
          param[key] = value || (type === 'checkbox' ? [] : '')
          o.disabled = disabled
        }
      })
      return param
    }
    return {
      param: setParam(this.infos),
      spinShow: false
    }
  },
  methods: {
    // 表单只做展现、校验，提交后的业务逻辑交还给父级
    async submit () {
      let result = await new Promise(resolve => {
        this.$refs.form.validate(valid => resolve(valid))
      })

      if (result) {
        // 处理不显示的表单项参数
        let param = JSON.parse(JSON.stringify(this.param))
        this.infos.map(o => {
          if (!this.linkingHandler(o, this.param)) {
            delete param[o.key]
          }
        })
        this.$emit('submit', param)
        return param
      }
      this.$emit('submit', false)
      return false
    },
    // 表单重置
    resetFields () {
      this.$refs.form.resetFields()
    },
    // 联动表单项的显隐和是否禁用
    linkingHandler (o, param) {
      if (o.linking) {
        return this.doLinking(o, param)
      }
      return true
    },
    doLinking (o, param) {
      let { key, value, linkingType } = o.linking
      if (linkingType === 'hidden' || linkingType === 'show') {
        let hidden = true
        // 联动：某一项的多个值对本项的显隐控制
        if (Array.isArray(value)) {
          hidden = Array.isArray(param[key])
            ? param[key].some(o => value.includes(o))
            : value.includes(param[key])
          // 联动：某一项的单个值对本项的显隐控制
        } else {
          hidden = Array.isArray(param[key])
            ? param[key].includes(value)
            : param[key] === value
        }
        return linkingType === 'hidden' ? !hidden : hidden
      }
      // 如果是回显状态，则不需要禁用显示
      if (this.operateType !== 'view') {
        /**
         * 这里必须在infos里初始化disabled，否则无效
         * 原因：xxx
         */
        if (linkingType === 'disabled' || linkingType === 'undisabled') {
          // 联动：某一项的多个值对本项的禁用控制
          if (Array.isArray(value)) {
            let disabled = Array.isArray(param[key])
              ? param[key].some(o => value.includes(o))
              : value.includes(param[key])
            o.disabled = linkingType === 'disabled' ? disabled : !disabled
            // 联动：某一项的单个值对本项的禁用控制
          } else {
            let disabled = Array.isArray(param[key])
              ? param[key].includes(value)
              : param[key] === value
            o.disabled = linkingType === 'disabled' ? disabled : !disabled
          }
        }
      } else {
        o.disabled = false
      }
      return true
    }
  }
}
</script>

<style lang="css" scoped>
/* 默认样式 */
.customed-edit-form {
  box-sizing: border-box;
  padding-right: 10px;
  text-align: left;
}
.customed-edit-form .form-col {
  box-sizing: border-box;
  padding-right: 10px;
}
/* 表单做表格搜索栏时的样式 */
.customed-edit-form.search {
  padding-right: 80px;
}
.customed-edit-form.search .form-col {
  width: auto;
}
.customed-edit-form.search .submit-col {
  margin-right: -60px;
  position: relative;
  height: 0;
  width: auto;
  float: none;
}
/* 表单回显时的样式：
  1、input、textarea、select的边框去掉
  2、阻止date、select等子项的下拉事件，阻止input、textarea等子项的获取焦点事件
  3、隐藏checkbox、radio、upload等子项的icon
*/
/deep/ .customed-edit-form.view input,
/deep/ .customed-edit-form.view textarea,
/deep/ .customed-edit-form.view .ivu-select-selection {
  border-color: transparent;
}
/deep/ .customed-edit-form.view label,
/deep/ .customed-edit-form.view .ivu-date-picker,
/deep/ .customed-edit-form.view .ivu-select,
/deep/ .customed-edit-form.view input,
/deep/ .customed-edit-form.view .ivu-input-wrapper,
/deep/ .customed-edit-form.view textarea {
  pointer-events: none;
  resize: none;
}
/deep/ .customed-edit-form.view label .ivu-radio-inner,
/deep/ .customed-edit-form.view label .ivu-checkbox-inner,
/deep/ .customed-edit-form.view .ivu-input-suffix,
/deep/ .customed-edit-form.view .ivu-select-arrow,
/deep/ .customed-edit-form.view .ivu-upload.ivu-upload-drag {
  visibility: hidden;
  pointer-events: none;
}
</style>

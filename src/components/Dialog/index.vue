
<template>
  <Modal
    :value="show"
    :title="title"
    :width="width"
    :loading="loading"
    :closable="closable"
    :footer-hide="false"
    @input="cancel"
    @on-ok="ok"
    @on-cancel="cancel"
    :mask-closable="maskClosable"
  >
    <p v-text="content"></p>
    <slot></slot>
    <slot name="content"></slot>
    <Spin size="large" fix v-if="spinShow"></Spin>
    <div slot="footer">
      <Button @click="cancel" v-if="cancelBtn" v-text="cancelText"></Button>
      <Button
        type="primary"
        @click="ok"
        v-if="confirmBtn"
        :disabled="(countTime > 0 || confirmDisabled) ? true : false"
      >
        {{confirmText}}
        <span v-if="countTime">({{countTime}}s)</span>
      </Button>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: 'title'
    },
    content: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '800'
    },
    params: {
      type: Object,
      default: Object
    },
    closable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: true
    },
    spinShow: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    confirmBtn: {
      type: Boolean,
      default: true
    },
    cancelBtn: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmDisabled: {
      type: Boolean,
      default: false
    },
    countDown: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      reason: '',
      countTime: 0,
      timer: null
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel', false)
    },
    ok () {
      this.$emit('ok', this.params)
    }
  },
  watch: {
    show (v) {
      if (v && this.countDown > 0) {
        this.countTime = this.countDown
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          if (this.countTime <= 0) {
            this.countTime = 0
            clearInterval(this.timer)
            return
          }
          this.countTime--
        }, 1000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vertical-center-modal .ivu-modal {
  top: 0;
}
</style>

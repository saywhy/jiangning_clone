<template>
  <div class="hr-box">
    <div v-if="position !== 'bottom'">{{text}}</div>
    <div class="hr"></div>
    <div class="hr-bottom" v-if="position === 'bottom'">{{text}}</div>
  </div>
</template>

<script>
import commonItem from './commonItem'
export default {
  name: 'HrItem',
  mixins: [commonItem],
  computed: {
    position () {
      return this.info.position
    }
  }
}
</script>

<style lang="css" scoped>
.hr-box {
  font-weight: 700;
  margin: 15px 0;
  padding-left: 8px;
  overflow: hidden;
}
.hr {
  height: 1px;
  background: #dddee1;
  margin: 15px 0;
  margin-left: -8px;
}
.hr-bottom {
  margin-bottom: 20px;
}
</style>

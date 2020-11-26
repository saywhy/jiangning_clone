<template>
  <div>
    <div class="echarts-area">
      <echartsLine :eData="eData" :smooth="true" style="height: 280px;"></echartsLine>
    </div>

    <br>
    <EditForm :infos="infos" v-if="infos.length" operateType="view" :submitShow="false" />
    <br>

    <!--
    <div class="data-area">
      <Row :gutter="16">
        <i-col span="12">
          <i-form label-position="left" :label-width="60">
            <Form-item label="数据一">
              <div class="i border border-r">数据测试</div>
            </Form-item>
            <Form-item label="数据二">
              <div class="i border border-r">数据测试</div>
            </Form-item>
            <Form-item label="数据三">
              <div class="i border border-r">数据测试</div>
            </Form-item>
          </i-form>
        </i-col>
        <i-col span="12">
          <i-form label-position="left" :label-width="60">
            <Form-item label="数据一">
              <div class="i border border-r">数据测试</div>
            </Form-item>
            <Form-item label="数据二">
              <div class="i border border-r">数据测试</div>
            </Form-item>
            <Form-item label="数据三">
              <div class="i border border-r">数据测试</div>
            </Form-item>
          </i-form>
        </i-col>
      </Row>
       -->
    </div>
  </div>
</template>

<script>
import * as api from '../../../api/app.js'
import echartsLine from '../../../components/Echarts/echartsLine.vue'
import moban from './moban'
import EditForm from '@/components/EditForm/index'
export default {
  components: {
    echartsLine,
    EditForm
  },
  name: 'featureView',
  data () {
    return {
      eData: undefined,
      nData: null,
      infos: []
    }
  },
  mounted () {
    this.infos = this.$route.params.infos

    let nameIndex = this.$route.query.index.slice(-1)

    let nameArr = moban.data().columnsMap
    if (this.$route.query.index.slice(-1) === '4') {
      this.nData = nameArr[nameIndex]
    } else {
      this.nData = nameArr[nameIndex + 'sea']
    }

    let lData = this.$route.query.row
    for (let item in this.nData) {
      this.nData[item].value = lData[this.nData[item].key]
      this.nData = this.nData.filter(({ title }) => !['id', '操作', '序号', undefined].includes(title))
    }

    switch (this.$route.query.index) {
      case 'm1':
        api.getHrrpTemplateArray1({
          id: this.$route.query.row.id
        }).then(({ data }) => {

          this.eData = data
        })
        break
      case 'm2':
        api.getKdtzAnalysisArray1({
          id: this.$route.query.row.id
        }).then(({ data }) => {

          this.eData = data
        })
        break
      case 'm3':
        api.getZdtzAnalysisArray1({
          id: this.$route.query.row.id
        }).then(({ data }) => {

          this.eData = data
        })
        break
      case 'm4':
        api.getJemtzAnalysisArray1({
          id: this.$route.query.row.id
        }).then(({ data }) => {

          this.eData = data
        })
        break
    }
  }
}
</script>

<style lang="" scoped>
  .echarts-area {
    width: 100%;
    height: 300px;
    border: 1px solid #efefef;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .data-area {
    width: 100%;
    padding: 20px 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .i {
    width: 100%;
    height: 32px;
    background: #f3f3f3;
    padding-left: 10px;
    line-height: 32px;
    color: #333;
    flex: 1;
  }

  .border {
    border: 1px solid #e3e3e3;
  }

  .border-r {
    border-radius: 4px;
  }

  .flex_box{
    width: 45%;
    display: flex;
    margin: 10px 0;
  }
</style>

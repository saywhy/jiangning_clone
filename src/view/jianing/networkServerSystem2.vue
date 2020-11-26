<template>

  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
    <FormItem label="工程编号" prop="value1" :label-width="100">
      <i-input v-model="formValidate.value1" placeholder="图号" style="width: 400px"></i-input>
    </FormItem>
    <FormItem label="绘图日期" :label-width="100">
           <FormItem prop="value2">
                 <DatePicker type="month" placeholder="绘图日期" v-model="formValidate.value2" :editable="false"></DatePicker>
            </FormItem>
      </FormItem>
    <FormItem :label-width="440">
      <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
    </FormItem>
    <div style="overflow:auto">
      <div class="note" :style="note" style="width: 2250px;height:1300px">
        <div style="width: 2250px;height: 50px">
          <div style="width: 2000px;height: 27px"></div>
          <FormItem label prop="value21" :label-width="1905">
            <i-input
              v-model="formValidate.value21"
              placeholder="小区名称"
              style="width: 220px"
              size="large"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2000px;height: 0px">
          <FormItem label prop="value3" :label-width="180">
            <i-input
              v-model="formValidate.value3"
              placeholder="基站名称"
              style="width: 140px"
              size="large"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2000px;height: 293px">
          <FormItem label prop="value5" :label-width="380">
            <i-input
              v-model="formValidate.value5"
              placeholder="ODF"
              style="width: 120px"
              size="large"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 35px">
          <FormItem label prop="value14" :label-width="1735">
            <i-input v-model="formValidate.value14" placeholder="距离" style="width: 70px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value15" :label-width="896">
            <i-input v-model="formValidate.value15" placeholder="新增交接箱以新增开头" style="width: 160px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 30px">
          <FormItem label prop="value4" :label-width="1275">
            <i-input v-model="formValidate.value4" placeholder="新增交接箱以新增开头" style="width: 160px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value6" :label-width="1723">
            <i-input v-model="formValidate.value6" placeholder="数量" style="width: 60px"></i-input>
          </FormItem>
        </div>
        <div style="width: 1250px;height: 0px">
          <FormItem label prop="value16" :label-width="650">
            <i-input v-model="formValidate.value16" placeholder="光缆型号新增以新增开头" style="width: 170px"></i-input>
          </FormItem>
        </div>
        <div style="width: 1250px;height: 23px">
          <FormItem label prop="value7" :label-width="1020">
            <i-input v-model="formValidate.value7" placeholder="光缆型号新增以新增开头" style="width: 170px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 30px">
          <FormItem label prop="value4" :label-width="1520">
            <i-input
              v-model="formValidate.value4"
              placeholder="小区名称"
              style="width: 190px"
              size="large"
              :disabled="true"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 3px">
          <FormItem label prop="value17" :label-width="657">
            <i-input v-model="formValidate.value17" placeholder="光缆距离" style="width: 82px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 15px">
          <FormItem label prop="value8" :label-width="1040">
            <i-input v-model="formValidate.value8" placeholder="光缆距离" style="width: 82px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height:0px">
          <FormItem label prop="city2" :label-width="895">
            <Select v-model="formValidate.city2" placeholder="请选择" style="width: 104px">
              <Option value="jkjjx">架空交接箱</Option>
              <Option value="ldjjx">落地交接箱</Option>
            </Select>
          </FormItem>
        </div>
        <div style="width: 2250px;height:107px">
          <FormItem label prop="city" :label-width="1276">
            <Select v-model="formValidate.city" placeholder="请选择" style="width: 104px">
              <Option value="jkjjx">架空交接箱</Option>
              <Option value="ldjjx">落地交接箱</Option>
            </Select>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 328px">
          <FormItem label prop="value9" :label-width="1595">
            <i-input
              v-model="formValidate.value9"
              placeholder="比例"
              style="width: 83px"
              size="large"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value3" :label-width="178">
            <i-input
              v-model="formValidate.value3"
              placeholder="基站名称"
              style="width: 100px"
              :disabled="true"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value15" :label-width="508">
            <i-input
              v-model="formValidate.value15"
              placeholder="光交名称"
              style="width: 130px"
              :disabled="true"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value4" :label-width="863">
            <i-input
              v-model="formValidate.value4"
              placeholder="光交名称"
              style="width: 130px"
              :disabled="true"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 76px">
          <FormItem label prop="value13" :label-width="1232">
            <i-input v-model="formValidate.value13" placeholder="光交名称" style="width: 130px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value9" :label-width="940">
            <i-input
              v-model="formValidate.value9"
              placeholder="比例"
              style="width: 55px"
              size="small"
              :disabled="true"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 38px">
          <FormItem label prop="value10" :label-width="1250">
            <i-input
              v-model="formValidate.value10"
              placeholder="比例"
              style="width: 55px"
              size="small"
            ></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 73px">
          <FormItem label prop="value11" :label-width="685">
            <i-input v-model="formValidate.value11" placeholder="距离" style="width: 80px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value18" :label-width="476">
            <i-input v-model="formValidate.value18" placeholder style="width: 30px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 0px">
          <FormItem label prop="value19" :label-width="796">
            <i-input v-model="formValidate.value19" placeholder style="width: 30px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;height: 102px">
          <FormItem label prop="value20" :label-width="1184">
            <i-input v-model="formValidate.value20" placeholder style="width: 30px"></i-input>
          </FormItem>
        </div>
        <div style="width: 2250px;">
          <FormItem label prop="value12" :label-width="696">
            <i-input v-model="formValidate.value12" placeholder="损耗" style="width: 72px"></i-input>
          </FormItem>
        </div>
      </div>
    </div>
      <Spin fix v-if="spinShow">
         <Icon type="ios-loading" size="18" class="demo-spin-icon-load"> </Icon>
              <div>正在生成中...</div>
      </Spin>
  </Form>
</template>
<script>
import {baseUrl} from '@/api/app'

export default {
  data () {
    return {
      formValidate: {
        value1: '',
        value2: '',
        city: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: '',
        value15: '',
        value16: '',
        value17: '',
        value18: '',
        value19: '',
        value20: '',
        value21: '',
        city2: ''
      },
      spinShow: false,
      note: {
        backgroundImage: 'url(' + require('../../assets/2.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '2250px 1300px',
        marginTop: '0px',
        overflow: 'auto'
      },
      ruleValidate: {
        value1: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value2: [{required: true, type: 'date', message: '输入不能为空', trigger: 'change'}],
        value3: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value4: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value5: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value6: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value7: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value8: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value9: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value10: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value11: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value12: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value13: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value14: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        city: [{required: true, message: '选择不能为空', trigger: 'change'}],
        value15: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value16: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value17: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value18: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value19: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value20: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        value21: [{required: true, message: '输入不能为空', trigger: 'blur', whitespace: true}],
        city2: [{required: true, message: '选择不能为空', trigger: 'change'}]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let date = new Date(this.formValidate.value2)
          let originalDate = this.formValidate.value2
          this.formValidate.value2 = date.getFullYear() + '.' + this.checkTime(date.getMonth() + 1)
          this.downloadFile(JSON.stringify(this.formValidate))
          this.handleSpinShow()
          this.formValidate.value2 = originalDate
        } else {
          this.$Message.error('内容未填写完整!')
        }
      })
    },
    downloadFile (param) {
      let link = document.createElement('a')
      link.style.display = 'none'
      link.href = `${baseUrl}/netWorkSystem/uploadAction?params=` + encodeURI(param)
      document.body.appendChild(link)
      link.click()
    },
    handleSpinShow () {
      // this.$Spin.show()
      // setTimeout(() => {
      //   this.$Spin.hide()
      // }, 7000)
    },
    checkTime (i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    }
  }
}
</script>
<style lang="" scoped>
 .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
}
</style>

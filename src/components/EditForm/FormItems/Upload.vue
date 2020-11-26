<template>
  <div>
    <FormItem
      v-if="fileType === `img`"
      :label="label"
      :prop="prop"
      :label-width="labelWidth"
      :rules="rules"
    >
      <template v-if="currentValue && currentValue.length">
        <template>
          <div class="demo-upload-list" v-for="(item, i) in currentValue" :key="i">
            <img :src="item.url" />
            <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline" @click.native="handleView(item.name, item.url || item)"></Icon>
              <Icon
                type="ios-trash-outline"
                v-show="operateType !== 'view'"
                @click.native="handleRemove(item)"
              ></Icon>
            </div>
          </div>
        </template>
      </template>

      <Upload
        ref="upload"
        :before-upload="beforeUpload"
        :max-size="500"
        :show-upload-list="false"
        :format="['jpg','jpeg','png']"
        accept=".jpg,.jpeg,.png"
        :multiple="multiple"
        type="drag"
        action
        style="display: inline-block;width:68px;"
      >
        <div style="width: 68px;height:68px;line-height: 68px;">
          <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload>

      <Modal title="View Image" v-model="visible">
        <img :src="imgUrl" v-if="visible" style="width: 100%" />
      </Modal>
    </FormItem>
    <div v-else>
      <FormItem
        label="标题："
        prop="title"
        style="width:500px"
        :label-width="labelWidth"
      >
        <i-input v-model="fileName"></i-input>
      </FormItem>
      <FormItem :label="label" :prop="prop" :label-width="labelWidth" :rules="rules"  style="width:500px">
        <Upload
          type="drag"
          ref="upload"
          :before-upload="beforeUpload"
          :max-size="20480"
          :show-upload-list="false"
          :format="fileType"
          :multiple="multiple"
          :accept="fileType.join(',')"
          style="width: 400px"
          action
          @click.native="() => clearFiles"
        >
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖拽文件上传</p>
          </div>
        </Upload>
        <div v-if="fileList.length">
          上传文件:
          <span
            v-for="(o, index) in fileList"
            :key="index"
            style="padding-right: 10px"
          >{{ o.name }}</span>
        </div>
           <div style="text-align: right;margin-top: 15px">
          <Button @click="clearFiles" type="error">清除</Button>
           </div>
        <div style="text-align: right;margin-top: 10px">
          <Button @click="uploadFileList" type="primary">上传</Button>
        </div>
      </FormItem>
    </div>
    <Spin  size="large" fix v-if="spinShow">
       <Icon type="ios-loading" size="18" class="demo-spin-icon-load"> </Icon>
                <div>正在生成中...</div>
     </Spin>
  </div>

</template>

<script>
import commonItem from './commonItem'
import { getFileUrl, defaultBase64 } from './../utils'
import { uploadKlm } from '@/api/app'

const defaultUploadFn = file => {
  let result = new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          data: { url: defaultBase64 },
          success: true,
          message: ''
        }),
      1000
    )
  )
  return result
}
export default {
  name: 'UploadItem',
  mixins: [commonItem],
  data () {
    return {
      showImg: false,
      fileName: '',
      fileList: [],
      spinShow: false,
      currentFileList: new FormData(),
      imgName: '',
      imgUrl: '',
      visible: false
    }
  },
  computed: {
    // 是否为多选
    multiple () {
      let { multiple = false } = this.info
      return multiple
    },
    // 传入的上传方法
    uploadFn () {
      let { uploadFn = defaultUploadFn } = this.info
      return uploadFn
    },
    // 上传文件类型(默认上传图片)
    fileType () {
      let { fileType = 'img' } = this.info
      return fileType
    },
    // 传入的额外参数
    extraParam () {
      let { extraParam = {} } = this.info


      return extraParam
    }
  },
  methods: {
    // 这里处理上传交互
    beforeUpload (file) {
      this.uploadFile(file)
      return false
    },
    async uploadFile (file) {
      if (this.fileType === 'img') {
        let url = getFileUrl(file)
        this.$emit('update', true)
        let { success, data, message } = await this.uploadFn(file)
        this.$emit('update', false)
        if (success || data) {
          this.$Message.success(message || '上传成功！')
          this.fileList.push({ url, name: file.name })
          this.currentValue = []
          this.currentValue.push({ data, url, name: file.name })
          this.$emit('input', this.currentValue)
        } else {
          this.$Message.error(message || '上传失败！')
        }
      } else {
        let name = file.name
        let suffix = name.split('.')
        suffix = `.${suffix[suffix.length - 1]}`
        if (!this.fileType.includes(suffix)) {
          this.$Message.error(`文件格式错误，请上传${this.fileType}格式的文件`)
          return
        }
        this.fileList.push({ name })
        this.currentFileList.append('fileList', file) // 第一个参数是后台读取的请求key值
        this.$emit('input', this.fileList)
      }
    },
    uploadFileList () {
      if (!this.fileName) {
        this.$Message.error('请填写标题！')
        return
      }
      if (!this.fileList.length) {
        this.$Message.error('请选择文件！')
        return
      }
      if (this.fileList.length > '1') {
        this.$Message.error('只支持同时上传一个文件')
        return
      }
      this.spinShow = true
      this.currentFileList.append('title', this.fileName)
      if (Object.keys(this.extraParam).length) {
        Object.keys(this.extraParam).map(o => {
          this.currentFileList.append(o, JSON.stringify(this.extraParam[o]))
        })
      }
      uploadKlm(this.currentFileList)
        .then(res => {
          this.spinShow = false

          this.showImg = true
          if (res.type === 'application/force-download') {
            this.$Message.success('上传成功')
            let blob = new Blob([res])

            let objectUrl = URL.createObjectURL(blob)
            let a = document.createElement('a')
            document.body.appendChild(a)
            a.style = 'display: none'
            a.href = objectUrl
            a.download = new Date().getTime() + '.dwg'
            a.click()
          } else {

            var blobReader = new Response(res).json()
            blobReader.then(msg => {

              this.$Message.error({
                content: msg.message,
                duration: 10
              })

            })
          }
          this.currentFileList = new FormData()
          this.fileList = []
        })
        .catch(res => {
          this.spinShow = false
          this.$Message.error(res)
        })
    },
    clearFiles () {
      this.fileList = []
      this.currentFileList = new FormData()
      this.$Message.success('清除成功！')
    },
    handleView (name, url) {
      this.imgName = name
      this.imgUrl = url
      this.visible = true
    },
    handleRemove (file) {
      this.currentValue.splice(this.currentValue.indexOf(file), 1)
      this.$emit('input', this.currentValue)
    }
  },
  created () {
    this.currentValue = this.value || []
  }
}
</script>

<style>
.demo-upload-list {
  display: inline-block;
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
 .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
}
</style>

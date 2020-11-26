<template>
  <div>
    <!-- <background /> -->
    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>
      <video :style="fixStyle" autoplay muted loop class="fillWidth" v-on:canplay="canplay">
        <source src="./bg/xuanchuan.mp4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。

      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" src="PATH_TO_JPEG" alt="">
      </div>
      <div class="container">
        <Card class="card" :dis-hover="true" :shadow="true" >
          <div class="title">离线目标特征库管理系统</div>
          <EditForm
            :infos="infos"
            submitLong
            submitShape="circle"
            @submit="submit"
            :submitShow="false"
            ref="edit"
          />
          <div style="text-align: center">
            <Button class="login-btn" type="primary" @click="loginFn">登录</Button>
          </div>
        </Card>
      </div>
    </div>
    </div>
</template>

<script>
import EditForm from '@/components/EditForm/index'
import { login } from '@/api/app'
// import background from './background'
export default {
  name: 'login',
  components: {
    EditForm
  },
  data () {
    return {
      vedioCanPlay: false,
      fixStyle: '',
      infos: [
        {
          label: '用户名',
          value: '',
          key: 'userName',
          rules: true,
          colSpan: 24
        },
        {
          label: '密码',
          value: '',
          key: 'passWord',
          type: 'password',
          rules: true,
          colSpan: 24
        }
      ]
    }
  },
  methods: {
    async submit (v) {
      if (v) {
        let { data, message } = await login(v)
        if (message) {
          this.$Message.error(message)
        } else {
          sessionStorage.setItem('userInfo', JSON.stringify(data))
          this.$router.push('/')
        }
      }
    },
    loginFn () {
      let edit = this.$refs.edit

      edit.submit()
    },
    canplay () {
      this.vedioCanPlay = true
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.container {
  /*background: url(../../assets/images/shouye.gif) no-repeat;*/
  /* background-size: cover;*/
  /* background-color: #2d8cf0; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  position: relative;
  z-index: 2;
  overflow: hidden;
}
.container .card {
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.16);
  background-color: #eaf9ff;
  width: 400px;
  padding: 15px 20px;
}
.title {
  font-size: 22px;
  padding-bottom: 28px;
  color: #0091e6;
  text-align: center;
}
.login-btn {
  background: #0091e6;
  border: none;
  outline: none;
  padding: 8px 30px;
  cursor: pointer;
  color: #fff;
  font-size: 0.9em;
  border-radius: 0.3em;
  transition: 0.5s all;
  font-weight: 600;
  margin: 0 auto;
}

.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
  /*top: -10px;*/
  height: calc(100%);
  width: 100%;
  object-fit:fill;
}

.video-container .filter {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  background: rgba(255, 255, 255, 0);
}
</style>

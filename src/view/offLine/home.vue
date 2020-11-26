<template>
  <div class="container">
    <background />
    <br>
    <br>
    <Row :gutter="16">
      <i-col span="6">
        <div class="box" @click="jump('/moban1')">
          <i class=""></i>
          <div class="font-main">宽带HRRP数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
      <i-col span="6">
        <div class="box" @click="jump('/moban2')">
          <i class=""></i>
          <div class="font-main">宽带RCS数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
      <i-col span="6">
        <div class="box" @click="jump('/moban3')">
          <i class=""></i>
          <div class="font-main">窄带RCS数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
      <i-col span="6">
        <div class="box" @click="jump('/moban4')">
          <i class=""></i>
          <div class="font-main">JEM数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
    </Row>
    <br>
    <Row :gutter="16">
      <i-col span="6">
        <div class="box" @click="jump('/featureData5')">
          <i class=""></i>
          <div class="font-main">点航迹数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
      <i-col span="6">
        <div class="box" @click="jump('/featureData6')">
          <i class=""></i>
          <div class="font-main">AIS数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
      <i-col span="6">
        <div class="box" @click="jump('/featureData7')">
          <i class=""></i>
          <div class="font-main">ADS-B数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
      <i-col span="6">
        <div class="box" @click="jump('/featureData8')">
          <i class=""></i>
          <div class="font-main">GPS数据</div>
          <div class="font-sub">模板数据、特征数据、特征分析数据</div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>

import background from '@/view/layout/background'

export default {
  name: 'home',
  components: {
    background
  },
  data () {
    return {

    }
  },
  methods: {
    jump (pathc) {
      this.$router.push({
        path: pathc
      })
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 0 10%;
    height: calc(100% + 92px);
    position: relative;
    background-color: rgba(187,205,250,.1);
    margin-left: -22px;
    margin-top: -22px;
    margin-right: -30px;
    overflow: hidden;
    /* background: url(../../assets/images/shouye.gif) no-repeat;
    background-size: cover; */
    /*background: blue;*/
  }

  .box {
    width: 100%;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px 4px rgba(164, 185, 241, 0.3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .font-main {
    font-size: 20px;
    color: #666;
    font-weight: bold;
  }

  .font-sub {
    font-size: 14px;
    color: #666;
  }

  .box:hover {
    background: #515a6e;
    color: #fff;
    cursor: pointer;

  }

  .box:hover .font-main {
    color: #fff;

  }

  .box:hover .font-sub {
    color: #fff;

  }
</style>

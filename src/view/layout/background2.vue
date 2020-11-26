<template>
  <div class="bg-container">
    <video
      id="bgVideo"
      :src="src"
      height="130%"
      style="margin-top: -146px"
      autoplay
      muted
      loop
    ></video>
    <!-- <video id="bgVideo" height="0" width="0" :src="src" autoplay muted loop></video>
    <canvas id="bgCanvas" class="bgCanvas" width="1920" height="1080"></canvas> -->
  </div>
</template>

<script>
import src from './bg/xuanchuan720p.mp4.mp4';
export default {
  data() {
    return {
      src,
    };
  },
  mounted() {
    // this.initCanvas()
  },
  methods: {
    initCanvas() {
      let v = document.getElementById("bgVideo");
      let c = document.getElementById("bgCanvas");
      let ctx = c.getContext("2d");
      let width = document.body.offsetWidth;
      let height = document.body.offsetHeight + 290;
      //每20毫秒画一次图
      v.addEventListener(
        "play",
        () =>
          setInterval(() => {
            ctx.drawImage(v, 0, -140, width, height);
          }, 20),
        false
      );
    },
  },
};
</script>

<style>
.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* background: url("./bg/waterDaytime.jpg") no-repeat;
  background-size: cover; */
  /* background: linear-gradient(
    to top,
    rgb(255, 255, 255) 55%,
    rgb(110, 215, 255) 80%,
    rgb(75, 100, 255) 130%
  ); */
  min-height: 440px;
}

.bgCanvas {
  opacity: 1;
}
</style>

<template>
  <div class="bg-container">
    <div id="container">
      <div id="water"></div>
      <div class="bird bird1"></div>
      <div class="bird bird2"></div>
      <div class="bird bird3"></div>
    </div>
  </div>
</template>

<script>
import imgFog from "./bg/fog3.png";
import imgBird from "./bg/bird.png";
import imgWater from "./bg/waterDaytime.jpg";
export default {
  data() {
    return {};
  },
  mounted() {
     let c = document.getElementById('container'),
      water = document.getElementById('water'),
      n = 55;

    new TimelineMax()
      .set(c, {
        minWidth: 3200,
        width: '200%',
        height: '100%',
        backgroundImage: `url(${imgFog})`
      }, 0)
      .set(water, {
        width: '110%',
        height: 300,
        left: '-20%',
        bottom: -50,
        perspective: 500
      }, 0)
      .set('.bird', {
        width: 60,
        left: -60,
        height: 60,
        backgroundImage: `url(${imgBird})`
      }, 0)
      .set('.bird1', {
        scale: 0.7,
        top: 130
      }, 0)
      .set('.bird2', {
        scale: 0.65,
        top: 67
      }, 0)
      .set('.bird3', {
        scale: 0.6,
        top: 89
      }, 0)
      .set('.cView', {
        transformOrigin: '0 100%',
        rotation: -90
      }, 0)
      .from(c, 1, {
        opacity: 0,
        ease: Power1.easeInOut
      }, 0)
      .from(c, 15, {
        backgroundPosition: '0px 999px',
        repeat: -1,
        ease: Power0.easeNone
      }, 0)
      .staggerFrom('.bird', 0.65, {
        backgroundPosition: '0px -840px',
        ease: SteppedEase.config(14),
        repeat: 40
      }, 0.2, 0)
      .staggerFrom('.bird', 20, {
        x: 2800,
        cycle: {
          y: [-10, 125, 53]
        },
        rotation: 1,
        ease: Power0.easeNone
      }, -0.4, 0)
      .call(function () {
        moveTL.progress(0.5)
      }, null, null, 0);


    for (let i = 0; i < n; i++) {

      let b = document.createElement('div');
      b.className += 'box';
      water.appendChild(b);

      new TimelineMax()
        .set(b, {
          width: '100%',
          height: 50,
          y: i * 6.5,
          // opacity:0.5,
          backgroundImage: `url(${imgWater})`,
          backgroundPosition: '0px -' + String(i * 5) + "px",
          transformOrigin: '50% 0%'
        }, 0)
        .to(b, 2, {
          y: '-=' + String(2 * (i / n * 60)),
          scaleX: 0.95 + i / n * 0.2,
          scaleY: 2 - i / n,
          // opacity:1-i/n,
          rotation: 0.01,
          yoyo: true,
          repeat: -1,
          ease: Sine.easeInOut
        }, i / n)
        .to(b, 2.6, {
          x: '-=' + String(100 * (i / n * 2)),
          yoyo: true,
          repeat: -1,
          ease: Sine.easeInOut
        }, i / n)
    }

    let moveTL = new TimelineMax({
        paused: true
      })
      .to(c, 1, {
        x: '-=1200',
        ease: Power0.easeNone
      }, 0)
      .to('.cView', 1, {
        rotation: 0,
        ease: Power0.easeNone
      }, 0);

    window.addEventListener('mousemove', function (e) {
      TweenMax.to(moveTL, 1, {
        progress: e.clientX / window.innerWidth
      })
    });
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
  background: linear-gradient(
    to top,
    rgb(255, 255, 255) 55%,
    rgb(110, 215, 255) 80%,
    rgb(75, 100, 255) 130%
  );
  min-height: 440px;

}

.bg-container * {
  position: absolute;
  user-select: none;
}
</style>
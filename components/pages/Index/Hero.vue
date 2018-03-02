<template>
  <div class="p-hero">
    <div class="p-hero--slogan">
      <div class="p-hero--slogan_bg"></div>
      <div class="p-hero--slogan_text_wrapper">
        <div class="p-hero--slogan_text"><span>Webのこれからを語り合う</span></div>
        <div class="p-hero--slogan_text">
          <span></span>
          <span>「作る」</span>
          <span>「伝える」</span>
          <span>「語り合う」</span></div>
      </div>
    </div>
    <div class="p-hero--bgImg"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-hero {
  margin-bottom: 40px;
  height: 340px;
  background-color: #fff;
  position: relative;

  @include desktop() {
    margin-bottom: 60px;
    max-width: 1920px;
    height: 800px;
    background-size: cover;
  }

  &::after {
    // border
    display: inline-block;
    content: "";
    width: 2px;
    height: 70px;
    background: #c3504f;
    position: relative;
    left: 50%;
    top: 310px;
    transform: translateX(-1px);
    animation: border_sp 0.5s ease 4.5s alternate both running;
    @include desktop() {
      height: 140px;
      animation: border_pc 0.5s ease 4.5s alternate both running;
      top: 740px;
    }
    @keyframes border_sp {
      0% {
        height: 0;
      }
      100% {
        height: 70px;
      }
    }
    @keyframes border_pc {
      0% {
        height: 0;
      }
      100% {
        height: 140px;
      }
    }
  }

  &--slogan {
    z-index: 100;
    display: inline-block;
    width: 90%;
    max-width: 62vw;
    color: white;
    font-size: 1.5rem;
    border-radius: 0 6px 6px 0;
    text-align: left;
    position: absolute;
    left: 0;
    top: 60%;
    transform: translateY(calc(-100px / 2));

    @include desktop {
      width: 40vw;
      max-width: 900px;
      font-size: 3rem;
      line-height: 8rem;
      top: 60%;
      transform: translateY(calc(-330px / 2));
    }

    @keyframes slogan {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }

    &_bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(195, 80, 79, 0.9);
      border-radius: 0 6px 6px 0;
      animation: slogan 1s cubic-bezier(0.4, 0.2, 0, 1) 1s 1 alternate both
        running;
      z-index: -1;
    }

    &_text_wrapper {
      padding: 2.5rem 1rem 2rem;
      padding-left: 10%;
      @include desktop {
        padding: 60px 30px 80px 12vw;
      }
    }
    &_text {
      margin-bottom: 1rem;
      font-weight: bold;
      perspective: 250px;
      @include desktop() {
        line-height: 84px;
        font-family: YuGothic, serif;
        font-size: 30px;
        letter-spacing: 4px;
        color: #ffffff;
      }
      span {
        display: inline-block;
        transform-origin: 50% 50% -10px;
        letter-spacing: 1px;
      }
      span:nth-child(1) {
        animation: slogan_text 0.8s cubic-bezier(0.4, 0.2, 0, 1) 2s 1 alternate
          both running;
      }
      span:nth-child(2) {
        animation: slogan_text 0.6s cubic-bezier(0.4, 0.2, 0, 1) 2.8s 1
          alternate both running;
      }
      span:nth-child(3) {
        animation: slogan_text 0.6s cubic-bezier(0.4, 0.2, 0, 1) 3.4s 1
          alternate both running;
      }
      span:nth-child(4) {
        animation: slogan_text 0.6s cubic-bezier(0.4, 0.2, 0, 1) 4s 1 alternate
          both running;
      }
      @keyframes slogan_text {
        0% {
          transform: rotateX(88deg);
        }
        100% {
          transform: rotateX(0deg);
        }
      }
    }
  }
  &--bgImg {
    width: 100%;
    height: 100%;
    background-image: url("/images/brand_top.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    animation: hero_bg_img 2s cubic-bezier(0.4, 0.2, 0, 1) 0s 1 alternate both
      running;
    position: absolute;
    top: 0;
    right: 0;

    /*@keyframes hero_bg_img {*/
    /*from {*/
    /*opacity: 0;*/
    /*background-position: 100% 100%;*/
    /*}*/
    /*to {*/
    /*opacity: 1;*/
    /*background-position: 100% 50%;*/
    /*}*/
    /*}*/

    @include desktop() {
      width: 90vw;
      background-position: center;
      background-size: cover;
    }
  }
}
</style>

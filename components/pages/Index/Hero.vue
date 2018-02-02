<template>
  <div class="p-hero">
    <!--<img src="/img/moc/1200x600.png" class="p-hero&#45;&#45;background">-->
    <div class="p-hero--slogan">
      <div class="p-hero--slogan_bg"></div>
      <div class="p-hero--slogan_text_wrapper">
        <div class="p-hero--slogan_text"><span>Webのこれからを語り合う</span></div>
        <div class="p-hero--slogan_text"><span></span><span>「作る」</span><span>「伝える」</span><span>「語り合う」</span></div>
      </div>
    </div>
    <div class="p-hero--border"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/layout/_layout.scss";
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-hero{
    @include c-container;
    margin-bottom: 60px;
    padding-top: 8rem;
    padding-bottom: 10em;
    height: 30rem;
    background-color: #fff;
    background-image: url("/images/brand_top.jpg");
    background-position: 100% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    animation: hero_bg_img 1s cubic-bezier(.4, .2, 0, 1) 0s 1 alternate both running;
    position: relative;

    &::after {
      display: inline-block;
      content: "";
      width: 2px;
      height: 70px;
      background: #c2504f;
      position: absolute;
      left: 50%;
      bottom: -35px;
      transform: translateX(-1px);
      @include desktop() {
        width: 3px;
        height: 160px;
        bottom: -60px;
      }
    }

    @keyframes hero_bg_img {
      from {
        opacity: 0;
        background-position: 100% 100%;
      }
      to {
        opacity: 1;
        background-position: 100% 50%;
      }
    }

    @include desktop(){
      background-size: 90%;
      padding-top: 30rem;
      height: 70rem;
    }

    &--inner{
      @include c-containerInner
    }

    &--slogan{
      //display: absolute;
      position: relative;
      color: white;
      font-size: 1.5rem;
      width: 80%;
      margin-top:3rem;
      border-radius: 0 6px 6px 0;
      text-align: left;
      z-index: 1;
      &_bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(195,80,79,0.9);
        animation: slogan 1s cubic-bezier(.4, .2, 0, 1) 1s 1 alternate both running;
        z-index: -1;
      }
      @keyframes slogan {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }

      &_text_wrapper {
        padding: 2.5rem 1rem 2rem;
        padding-left: 10%;
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
          color: #FFFFFF;
        }
        span {
          display: inline-block;
          transform-origin: 50% 50% -10px;
        }
        span:nth-child(1) {
          animation: slogan_text .8s cubic-bezier(.4, .2, 0, 1) 2s 1 alternate both running;
        }
        span:nth-child(2) {
          animation: slogan_text .6s cubic-bezier(.4, .2, 0, 1) 2.8s 1 alternate both running;
        }
        span:nth-child(3) {
          animation: slogan_text .6s cubic-bezier(.4, .2, 0, 1) 3.4s 1 alternate both running;
        }
        span:nth-child(4) {
          animation: slogan_text .6s cubic-bezier(.4, .2, 0, 1) 4s 1 alternate both running;
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
      @include desktop(){
        font-size: 3rem;
        line-height: 8rem;
      }
    }
  }
</style>

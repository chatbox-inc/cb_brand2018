<template>
  <div class="p-hero">
    <!--<img src="/img/moc/1200x600.png" class="p-hero&#45;&#45;background">-->
    <div class="p-hero--slogan">
      <div class="p-hero--slogan_text">Webのこれからを語り合う</div>
      <div class="p-hero--slogan_text">「作る」「伝える」「語り合う」</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/layout/_layout.scss";
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-hero{
    @include c-container;
    background: url("/images/brand_top.jpg");
    background-position: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 30rem;
    padding-top: 8rem;
    padding-bottom: 10em;

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
      color: white;
      font-size: 1.5rem;
      width: 80%;
      margin-top:3rem;
      padding: 2rem 1rem;
      border-radius: 0 6px 6px 0;
      background-color: rgba(195,80,79,0.9);
      text-align: left;
      &_text {
        line-height: 84px;
        font-family: YuGothic, serif;
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 4px;
        color: #FFFFFF;
      }
      @include desktop(){
        font-size: 3rem;
        line-height: 8rem;
      }

    }
  }
</style>

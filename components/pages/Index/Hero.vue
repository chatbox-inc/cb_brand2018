<template>
  <div class="p-hero">
    <!--<img src="/img/moc/1200x600.png" class="p-hero&#45;&#45;background">-->
    <div class="p-hero--slogan">
      <div class="">Webのこれからを語り合う</div>
      <div class="">「作る」「伝える」「語り合う」</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-hero{
    @include c-container;
    background: url("/img/moc/1200x600.png");
    background-position: center;
    height: 30rem;
    padding-top: 8em;
    padding-bottom: 10em;

    &--inner{
      @include c-containerInner
    }

    &--slogan{
      //display: absolute;
      color: white;
      font-size: 1.5rem;
      width: 80%;
      margin-top:3em;
      padding: 2em 1em;
      border-radius: 0 6px 6px 0;
      background-color: #C3504F;
      text-align: left;
      &_text {
        line-height: 84px;
        font-family: YuGothic, serif;
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 4px;
        color: #FFFFFF;
      }
    }
  }
</style>

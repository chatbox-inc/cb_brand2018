<template>
  <div class="p-header" id="top">
    <div class="p-header--triangle"></div>
    <div class="p-header--logoArea">
        <img class="p-header--logoImg" src="/images/logo.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  @import "~assets/scss/layout/_layout.scss";
  .p-header{
    &--triangle{
      z-index: 100;
      position: fixed;
      top: 0;
      left: 0;
      border: 30px solid transparent;
      border-top: 30px solid #c2504f;
      border-left: 30px solid #c2504f;
      &::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("/images/icon_chatbox-white.svg") no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        top: -24px;
        left: -24px;
        @include desktop() {
          width: 30px;
          height: 30px;
          top: -33px;
          left: -38px;
        }
      }
      @include desktop(){
        border: 50px solid transparent;
        border-top: 50px solid #c2504f;
        border-left: 50px solid #c2504f;
      }
    }
    &--logoArea{
      width:100%;
      height: 60px;
      text-align: center;
      @include desktop {
        width: 100%;
        height: 170px;
      }
    }
    &--logoImg{
      display: inline-block;
      margin-top : 15px;
      width: auto;
      height: 50%;

      @include desktop(){
        display: inline-block;
        width: auto;
        height: 40%;
        margin-top: 40px;
      }
    }
  }
</style>

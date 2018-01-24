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
        top: -20px;
        left: -25px;
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
    &--logoImg{
      display: block;
      width: 13rem;
      margin: 0 auto;
      @include desktop(){
        width: 23rem;
      }
    }
  }
</style>

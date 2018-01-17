<template>
  <div class="p-header">
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
      border: 40px solid transparent;
      border-top: 40px solid #c2504f;
      border-left: 40px solid #c2504f;
      &::after {
        content: "";
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url("/images/icon_chatbox-white.svg") no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        top: -30px;
        left: -30px;
      }
      @include desktop(){
        border: 50px solid transparent;
        border-top: 50px solid #c2504f;
        border-left: 50px solid #c2504f;
      }
    }
    &--logoArea{
      padding-top: 10px;

    }
    &--logoImg{
      display: block;
      width: 18rem;
      margin: 0 auto;
      @include desktop(){
        width: 23rem;
      }
    }
  }
</style>

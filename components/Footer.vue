<template>
  <div class="p-footerArea">
    <div class="p-footer--pageTop">
      <a href="#top" v-smooth-scroll>
        <img class="p-footer--pageTopImg" src="/images/pagetop.svg" alt="">
      </a>
    </div>
    <div class="p-footer">
      <div class="p-footer--inner">
        <nav class="p-navi">
          <a class="p-navi--link" href="/">chatboxについて</a>
          <a class="p-navi--link" href="/">サービス</a>
          <a class="p-navi--link" href="/">メンバー</a>
          <a class="p-navi--link" href="/contact">お問い合わせ</a>
        </nav>
        <div class="p-footer--body">
          <div class="p-footer--icon"></div>
          <div class="p-footer--copyright">Copyright © chatbox.inc All Rights Reserved.</div>
          <div class="p-footer--sns">
            <i class="fa fa-instagram p-footer--instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook p-footer--facebook" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <!--仮-->
    <script src="https://use.fontawesome.com/c086a26845.js"></script>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  @import "~assets/scss/object/component/_button.scss";

  .p-footerArea{
    margin-top: 10rem;
    border-top: 2px solid #C3504F;
    background-color: #FAF7F7;
    @include desktop() {
      margin-top: 0;
    }
  }

  .p-footer{
    @include c-container;
    color: #B43B3E;
    padding-bottom: 1rem;
    &--pageTop {
      position: relative;
    }
    &--pageTopImg {
      width: 20px;
      height: auto;
      position: absolute;
      bottom : 20px;
      right: 20px;
      @include desktop() {
        bottom: 100px;
        right: 150px;
      }
    }
    &--body{
      display: flex;
      font-size: 1rem;
      align-items: center;
      padding: 1rem 0;
      justify-content: flex-start;
    }
    &--icon{
      display: inline-block;
      margin-right: 10px;
      width: 2.2rem;
      height: 2.2rem;
      background-image: url("~static/images/icon_chatbox.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &--copyright {
      display: inline-block;
    }
    &--sns {
      display: inline-block;
      margin-left: auto;
      font-size: 2.3rem;
    }
    &--instagram {
      display: inline-block;
      margin-right: 20px;
    }
  }
  .p-navi{
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid rgba(195,80,79,0.5);
    letter-spacing: 1px;
    @include desktop{
      justify-content: flex-start;
    }
    &--link{
      text-decoration: none;
      padding: 1.2rem 0;
      color: inherit;
      @include desktop{
        padding-top: 3rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
      }
    }
  }
</style>

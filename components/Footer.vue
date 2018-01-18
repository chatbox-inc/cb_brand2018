<template>
  <div class="p-footerArea">
    <div class="p-footer--pageTop">
      <a href="">
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
          <div class="p-footer--instagram"><i class="fa fa-instagram" aria-hidden="true"></i></div>
          <div class="p-footer--facebook"><i class="fa fa-facebook" aria-hidden="true"></i></div>
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
    margin-top: 18rem;
    border-top: 2px solid #C3504F;
    background-color: #FAF7F7;
  }

  .p-footer{
    @include c-container;
    color: #B43B3E;
    margin-bottom: 2rem;
    padding-bottom: 10rem;
    &--pageTop {
      position: relative;
    }
    &--pageTopImg {
      position: absolute;
      right: 10%;
      bottom: 100px;
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
      width: 1.4rem;
      height: 1.4rem;
      font-size: 1.4rem;
      background-image: url("~static/images/icon_chatbox.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .p-navi{
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(195,80,79,0.5);
    display: flex;
    justify-content: space-between;
    @include desktop{
      justify-content: flex-start;
    }
    &--link{
      text-decoration: none;
      padding: 1rem 0;
      color: inherit;
      @include desktop{
        padding-top: 3rem;
        padding-bottom: 2rem;
        padding-right: 2rem;
      }
    }
  }
</style>

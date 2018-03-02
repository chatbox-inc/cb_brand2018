<template>
    <!--TOOD ナビゲーションメニュー　リリース後実装-->
    <div class="p-navigationArea sticky">
        <div class="p-navigation">
            <nav class="p-navigation--inner">
                <a class="p-navigation--link" href="">
                    <span class="p-navigation--char active">TOP</span>
                    <span class="p-navigation--dot show">・</span>
                </a>
                <a class="p-navigation--link" href="">
                    <span class="p-navigation--char">CREATION</span>
                    <span class="p-navigation--dot">・</span>
                </a>
                <a class="p-navigation--link" href="">
                    <span class="p-navigation--char">TALKING</span>
                    <span class="p-navigation--dot">・</span>
                </a>
                <a class="p-navigation--link" href="">
                    <span class="p-navigation--char">ENJOY</span>
                    <span class="p-navigation--dot">・</span>
                </a>
                <a class="p-navigation--link" href="">
                    <span class="p-navigation--char">CONTACT</span>
                    <span class="p-navigation--dot">・</span>
                </a>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/layout/_layout.scss";

.p-navigationArea {
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  margin-top: 100px;
  padding-top: 10px;
  background: #fff;
  @include desktop() {
    display: block;
  }
}
.p-navigation {
  @include c-container;
  &--inner {
    display: flex;
    justify-content: flex-start;
  }
  &--link {
    display: block;
    margin-right: 40px;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    a {
      font-size: 2px;
    }
  }
  &--char {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #da9695;
  }
  &--dot {
    display: none;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: #c3504f;
  }
}
.active {
  color: #c3504f;
}
.show {
  display: inline;
}
.sticky {
  @include desktop() {
    position: -webkit-sticky;
    position: sticky;
  }
}
</style>

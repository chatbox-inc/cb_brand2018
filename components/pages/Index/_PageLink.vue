<template>
  <div class="p-link">
    <div class="p-link--inner">
      <a :href="link.href">
        <div class="p-link--contents">
          <div class="p-link--image" :style="imgStyle"></div>
          <div class="p-link--link">{{link.title}}
            <div class="p-link--icon"></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      link: Object
    },
    computed: {
      imgStyle () {
        return {
          backgroundImage: `url('${this.link.image}')`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/layout/_layout.scss";
  @import "~assets/scss/object/component/_container.scss";
  .p-link{
    background: #C3504F;
    @include c-container;
    padding: 1.5rem 0;
    @include desktop(){
      background: transparent;
    }
    &--inner{
      @include c-containerInner;
    }
    &--contents{
      display: flex;
      align-items: center;
      background: #fff;
      @include desktop(){
        border: 1px solid #C3504F;
        margin-right: 10px;
        -webkit-box-shadow: 10px 10px 0 0 #C3504F;
        box-shadow: 10px 10px 0 0 #C3504F;
      }
    }
    &--image{
      width: 12rem;
      height: 10rem;
      background-size: cover;
      background-position: center;
      @include desktop(){
        width: 45rem;
        height: 15rem;
      }
    }
    a {
      text-decoration: none;
    }
    &--link{
      font-family: YuGothic, serif;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 2px;
      color: #C3504F;
      @include desktop(){
        text-align: center;
        width: 100%;
        font-size: 2.5rem;
      }
    }
    &--icon{
      display: inline-block;
      width: 3rem;
      height: 3rem;
      font-size: 1.4rem;
      background-image: url("~static/images/icon_externalLink.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
</style>

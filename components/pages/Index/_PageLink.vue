<template>
  <div class="p-link">
    <div class="p-link--inner">
      <div class="p-link--contents">
        <div class="p-link--image" :style="imgStyle"></div>
        <a class="p-link--link" :href="link.href">{{link.title}}</a>
      </div>
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
    &--link{
      text-decoration: none;
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
  }
</style>

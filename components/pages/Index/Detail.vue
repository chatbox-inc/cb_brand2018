<template>
  <div :class="{
      'is-colored': this.coloredCover
    }">
    <div class="p-detail--titleArea">
      <div class="p-detail">
        <div class="p-detail--inner">
          <h1 class="p-detail--title">{{messages.title}}</h1>
        </div>
      </div>
    </div>
    <div class="p-detail--mainArea">
      <div class="p-detail">
        <div class="p-detail--inner">
          <div class="p-detail--content1">
            <h2 class="p-detail--subtitle">{{messages.subtitle}}</h2>
            <p class="p-detail--body">{{messages.message}}</p>
            <div class="p-detail--image" v-if='image1' :style="imageStyle1"></div>
          </div>
          <div class="p-detail--content2">
            <div class="p-detail--image2" v-if='image2' :style="imageStyle2"></div>
            <div class="p-detail--tags">
              <p class="p-detail--tagItem">Web制作</p>
              <p class="p-detail--tagItem">技術顧問</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-detail--linkArea">
      <page-link v-if="messages.link" :link="messages.link"></page-link>
    </div>
  </div>
</template>

<script>
  import PageLink from './_PageLink.vue'
  export default {
    props: {
      messages: Object,
      coloredCover: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        image1: null,
        image2: null
      }
    },
    components: {
      PageLink
    },
    computed: {
      imageStyle1 () {
        if (this.image1) {
          return {
            backgroundImage: `url('${this.image1}')`
          }
        } else {
          return {}
        }
      },
      imageStyle2 () {
        if (this.image2) {
          return {
            backgroundImage: `url('${this.image2}')`
          }
        } else {
          return {}
        }
      }
    },
    async mounted () {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      this.image1 = this.messages.image1
      this.image2 = this.messages.image2
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";


  .p-detail{
    @include c-container;
    &--titleArea{
      margin-top:4.0rem;
    }
    &--inner{
      @include c-containerInner;
      @include desktop{
        display: flex;
      }
    }
    &--title{
      @include c-title
    }
    &--content1{
      @include desktop(){
        width: 50%;
      }
    }
    &--subtitle{
      @include c-caption
    }
    &--body{
      @include c-sentence;
      padding: 10px;
    }
    &--image{
      height: 20rem;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 1rem;
    }
    &--content2{
      display: flex;
      @include desktop(){
        display: block;
        width: 50%;
      }
    }
    &--image2{
      height: 20rem;
      width: 60%;
      background-size: cover;
      background-position-y: 50%;
      background-repeat: no-repeat;
      margin: 1rem;
      @include desktop(){
        height: 70rem;
        width: 100%;
      }
    }
    &--tags{
      display: flex;
      width: 40%;
      justify-content: center;
      flex-wrap: wrap;
      @include desktop(){
        width: 100%;
      }

    }
    &--tagItem{
      writing-mode: vertical-rl;
      color: #C3504F;
      font-weight: bold;
      margin: 3rem 1rem;
      height: 20rem;
    }
  }
  //画像の順番とかも無理あるかも Talking だけ別コンポーネントも検討
  .is-colored{
    .p-detail{
      &--titleArea{
        background: linear-gradient(#fff 50%, #FAF7F7 50%);
      }
      &--mainArea{
        background:#FAF7F7;
      }
      &--linkArea{
        background: linear-gradient(#FAF7F7 50%,#fff 50%);
      }
    }
  }
</style>

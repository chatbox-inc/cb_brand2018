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
          <h2 class="p-detail--subtitle">{{messages.subtitle}}</h2>
          <p class="p-detail--body">{{messages.message}}</p>
          <div class="p-detail--image" :style="{backgroundImage: `url('${messages.image1}')`}"></div>
          <br>
          <div class="p-detail--image" :style="{backgroundImage: `url('${messages.image2}')`}"></div>
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
    components: {
      PageLink
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";


  .p-detail{
    @include c-container;
    &--inner{
      @include c-containerInner;
    }
    &--title{
      @include c-title
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
    }
  }
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

<template>
  <div class="p-greeting">
    <div class="p-greeting--title">
      {{messages.title}}
    </div>
    <div class="p-greeting--body">
      <div class="p-greeting--bodyInner">
        <div class="p-greeting--contents">
          <h2 class="p-greeting--bodyTitle">
            {{messages.subtitle}}
          </h2>
          <div class="p-greeting--bodyMessage">{{messages.message}}</div>
        </div>
      </div>
    </div>
    <page-link v-if="messages.link" :link="messages.link" ></page-link>
  </div>
</template>

<script>
  import PageLink from './_PageLink.vue'
  export default {
    props: {
      messages: Object
    },
    components: {
      PageLink
    }
  }

</script>

<style lang="scss" scoped>
   @import "~assets/scss/layout/_layout.scss";
   @import "~assets/scss/object/component/_container.scss";
   @import "~assets/scss/object/component/_title.scss";
  .p-greeting{
    @include c-container;
    margin-top: 2.0rem;
    &--title{
      @include c-containerInner;
      @include c-title;
      font-size: 2rem;
      margin-bottom: 10px;
    }
    &--body{
      background: url("/images/intro01.jpg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &--bodyInner{
      @include c-containerInner;
      padding-top: 8rem;
      @include desktop(){
        padding-top: 0;
        display: flex;
        justify-content: flex-end;
      }
    }
    &--contents{
      @include desktop(){
        position: relative;
        right:0;
        width: 355px;
      }

    }
    &--bodyTitle{
      @include c-caption;
      background: white;
      padding: 10px;
      @include desktop(){
        background: transparent;
      }
    }
    &--bodyMessage{
      @include c-sentence;
      background: white;
      padding: 10px;
      @include desktop(){
        background: transparent;
      }
    }
  }
</style>

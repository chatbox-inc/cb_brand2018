<template>
  <div class="p-greeting">
    <div class="p-greeting--title">
      {{messages.title}}
    </div>
    <div class="p-greeting--body" :style="imageStyle1">
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
        data () {
            return {
                image1: null
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
            }
        },
        async mounted () {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            })
            this.image1 = this.messages.image1
        }
    }

</script>

<style lang="scss" scoped>
  @import "~assets/scss/layout/_layout.scss";
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";
  .p-greeting{
    @include c-container;
    @include desktop() {
      margin-top: 100px;
    }
    margin-top: 2.0rem;
    &--title{
      @include c-title;
      margin-bottom: 10px;
    }
    &--body{
      background-repeat: no-repeat;
      background-size: contain;
    }
    &--bodyInner{
      padding-top: 110px;

      @include desktop(){
        padding-top: 0;
        display: flex;
        justify-content: flex-end;
      }
    }
    &--contents{
      padding: 2.5rem;
      box-sizing: border-box;
      background: white;
      @include desktop(){
        padding: 40px 0;
        padding-left: 100px;
        width: 450px;
        background: linear-gradient(left, rgba(252,252,252,0) 0%, rgba(254,254,254,0.4) 20%, rgba(255,255,255,0.45) 25%, rgba(255,255,255,0.81) 61%, rgba(255,255,255,1) 80%);
        position: relative;
        right:0;
      }

    }
    &--bodyTitle{
      @include c-caption;
      padding-top: 0;
      @include desktop(){
        background: transparent;
      }
    }
    &--bodyMessage{
      @include c-sentence;
      background: white;
      @include desktop(){
        background: transparent;
      }
    }
  }
</style>

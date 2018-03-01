<template>
  <section class="container">
    <page-hero></page-hero>
    <page-message :messages="messages.greeting"></page-message>
    <page-detail :messages="messages.creation"></page-detail>
    <page-detail :messages="messages.talking" :coloredCover="false"></page-detail>
    <page-detail :messages="messages.enjoy"></page-detail>
    <page-aboutus></page-aboutus>
    <page-message :messages="messages.member"></page-message>
    <page-contact></page-contact>
  </section>
</template>

<script>
  import PageHero from '~/components/pages/Index/Hero.vue'
  import PageMessage from '~/components/pages/Index/Message.vue'
  import PageDetail from '~/components/pages/Index/Detail.vue'
  import PageAboutus from '~/components/pages/Index/AboutUs.vue'
  import PageContact from '~/components/pages/Index/Contact.vue'

  export default {
    components: {
      PageHero,
      PageMessage,
      PageDetail,
      PageAboutus,
      PageContact
    },
    data () {
      return {}
    },
    computed:{
      messages(){
        return this.$store.state.messages;
      }
    },
    mounted () {
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
  }
</script>

<style lang="scss">
  @import "~assets/scss/app.scss";
</style>

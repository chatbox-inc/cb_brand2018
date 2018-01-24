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
//  import PageHeader from '~/components/pages/Index/Header.vue'
  import PageHero from '~/components/pages/Index/Hero.vue'
  import PageMessage from '~/components/pages/Index/Message.vue'
  import PageDetail from '~/components/pages/Index/Detail.vue'
  import PageAboutus from '~/components/pages/Index/AboutUs.vue'
  import PageContact from '~/components/pages/Index/Contact.vue'
//  import PageFooter from '~/components/pages/Index/Footer.vue'

  export default {
    components: {
//      PageHeader,
      PageHero,
      PageMessage,
      PageDetail,
      PageAboutus,
      PageContact,
//      PageFooter
    },
    data () {
      return {
        online: true,
        messages: {
          greeting: {
            title: 'We are thinking about Web',
            subtitle: '作るだけなく、伝え語り合う会社でありたい',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
          },
          creation: {
            title: 'Creation',
            subtitle: '高い技術力を活かしたWeb制作',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/creation01.jpg',
            image2: '/images/creation02.jpg',
            link: {
              image: '/images/creation01.jpg',
              href: '',
              title: 'Web制作を詳しく見る'
            }
          },
          talking: {
            title: 'Talking',
            subtitle: '技術豊富なスタッフがお客様の開発現場に直接訪問',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/talking01.jpg',
            image2: '/images/talking02.jpg',
            link: {
              image: '/images/enjoy01.jpg',
              href: '',
              title: '技術顧問を詳しく見る'
            }
          },
          enjoy: {
            title: 'Enjoy',
            subtitle: 'IT系イベントの運営・支援を通じて、高い技術力を維持',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/enjoy01.jpg',
            image2: '/images/enjoy02.jpg',
            link: {
              image: '/images/enjoy01.jpg',
              href: '',
              title: 'イベント・スクールを詳しく見る'
            }
          },
          member: {
            title: 'Member',
            subtitle: 'chatboxで働く個性的なメンバー',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            link: {
              image: '/images/enjoy01.jpg',
              href: '',
              title: 'メンバーを詳しく見る'
            }
          }
        }
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style lang="scss">
  @import "~assets/scss/app.scss";
</style>

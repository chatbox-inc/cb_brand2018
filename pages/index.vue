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
      return {
        online: true,
        messages: {
          greeting: {
            title: 'We are thinking about Web',
            subtitle: '作るだけなく、伝え語り合う会社でありたい',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/message_photo01.jpg'
          },
          creation: {
            title: 'Creation',
            subtitle: '高い技術力を活かしたWeb制作',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/creation_photo01.jpg',
            image2: '/images/creation_photo02.jpg',
            link: {
              image: '/images/creation_btn.jpg',
              href: '',
              title: 'Web制作について'
            },
            tags: {
                tagItem1: 'Webページ制作',
                tagItem2: 'Webシステム制作'
            }
          },
          talking: {
            title: 'Talking',
            subtitle: '技術豊富なスタッフがお客様の開発現場に直接訪問',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/talking_photo01.jpg',
            image2: '/images/talking_photo02.jpg',
            link: {
              image: '/images/talking_btn.jpg',
              href: '',
              title: '技術顧問について'
            },
            tags: {
                tagItem1: '社員研修',
                tagItem2: '技術顧問'
            }
          },
          enjoy: {
            title: 'Enjoy',
            subtitle: 'IT系イベントの運営・支援を通じて、高い技術力を維持',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/enjoy_photo01.jpg',
            image2: '/images/enjoy_photo02.jpg',
            link: {
              image: '/images/enjoy_btn.jpg',
              href: '',
              title: 'イベント・スクールについて'
            },
            tags: {
                tagItem1: 'スクール',
                tagItem2: 'イベント'
            }
          },
          member: {
            title: 'Member',
            subtitle: 'chatboxで働く個性的なメンバー',
            message: 'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。',
            image1: '/images/member_photo01.jpg',
            link: {
              image: '/images/member_btn.jpg',
              href: '',
              title: 'メンバーについて'
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

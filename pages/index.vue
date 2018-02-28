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
            message: `
chatbox の基本精神は「Webのこれからを語り合う」
インターネットと人の繋がりを、より良くするため、それぞれのWeb制作のあり方について真摯に語り合いたい。
身の回りにありふれたWebだからこそ、そこにしか無い、そこだけのWebの形を。
現場と、お客様と、ユーザーと一緒に考えていくのが chatbox のWeb制作のあり方です。
            `,
            image1: '/images/message_photo01.jpg'
          },
          creation: {
            title: 'Creation',
            subtitle: '高い技術力を活かしたWeb制作',
            message: `
chatbox の強みは高い技術力。
豊富な制作実績に加え、様々なイベント・セミナーでの登壇・レクチャーなど、
「これからのWeb」を作り続けるための技術的な革新は
技術を学び、実践し、人に教えるといった技術革新のためのサイクルが社内文化として強く根付いています。
それぞれのWeb制作の現場のニーズに、一番フィットする提案と解決ができるよう、
たくさんのカードを生み出すのが、chatboxの技術力です。
            `,
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
            message: `
chatbox は、制作だけでなく、技術顧問と言うかたちで他の制作会社の品質向上を応援しています。
制作現場での技術的な不安や悩みを解決するメンターだけでなく、制作現場における技術選択のサポートや、
制作体制の業務フロー改善、要求・要件定義のサポートなど包括的な制作現場のサポートで「Webのこれから」を現場に定着させていきます。

            `, image1: '/images/talking_photo01.jpg',
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
            message: `
高い技術力を継続的に維持し続けるための仕組み作りといて、
chatboxでは、毎月様々な技術系のセミナー・イベントを開催しています。
[関西フロントエンドUG]()や[Laravel.Osaka]()などの各種コミュニティ活動や、
有料のセミナー・イベント[Lec Cafe]() など、定期的にイベントを開催し、
多くのクリエイターの方に参加頂いています。

常に現場から必要とされる最新技術を取り入れ、実践し、人に伝える。
「Webのこれからを」考える chatbox になくてはならない活動です。
            `,
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
            message: `
chatbox は「学びのプラットフォーム」を目指して、社内環境づくりに取り組んでいます。
自由な就業環境や、様々なセミナー受講、学習プログラム等で、個々のスタッフのスキルアップを応援します。
それぞれが自発的な学習を通じて「Webのこれからを語り合う」。chatboxの大切にしたい考え方は
            `,
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

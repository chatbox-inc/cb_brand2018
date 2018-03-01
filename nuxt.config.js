module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    titleTemplate: '株式会社chatbox',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'Meta description' },
        { property: 'og:title', content: 'title' }, // TODO content内変更
        { property: 'og:image', content: 'https://chatbox-inc.com/ogp.jpg' },
        { property: 'og:url', content: 'https://chatbox-inc.com/' },
        { property: 'og:description', content: 'description'}, // TODO content内変更
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@chatbox_inc' },
        { name: 'twitter:creator', content: '@chatbox_inc' },
        { name: 'twitter:title', content: 'title' }, // TODO content内変更
        { name: 'twitter:description', content: 'discription' }, // TODO content内変更
        { name: 'twitter:image', content: 'https://chatbox-inc.com/images/ogp.jpg' },
    ],
    link: [
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel:'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
        { rel:'apple-touch-icon-precomposed', href: 'https://chatbox-inc.com/'}
    ]
  },
  css: [ ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    // '@nuxtjs/pwa'
  ],
  plugins: [
    '~/plugins/vue-smooth-scroll'
  ]
}

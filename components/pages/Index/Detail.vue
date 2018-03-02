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
            <div class="p-detail--body" v-html="markdown"></div>
            <div class="p-detail--image" v-if='image1' :style="imageStyle1"></div>
          </div>
          <div class="p-detail--content2">
            <div class="p-detail--image2" v-if='image2' :style="imageStyle2"></div>
            <div class="p-detail--tags">
              <p class="p-detail--tagItem">{{messages.tags.tagItem1}}</p>
              <p class="p-detail--tagItem">{{messages.tags.tagItem2}}</p>
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
import PageLink from "./_PageLink.vue";
import marked from "marked";

export default {
  props: {
    messages: Object,
    coloredCover: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      image1: null,
      image2: null
    };
  },
  components: {
    PageLink
  },
  computed: {
    imageStyle1() {
      if (this.image1) {
        return {
          backgroundImage: `url('${this.image1}')`
        };
      } else {
        return {};
      }
    },
    imageStyle2() {
      if (this.image2) {
        return {
          backgroundImage: `url('${this.image2}')`
        };
      } else {
        return {};
      }
    },
    markdown() {
      const renderer = new marked.Renderer()

      renderer.link = (href, title, text) => {
        return '<a target="_blank" href="' + href + '" title="' + title + '">' + text + '</a>'
      }

      return marked(this.messages.message, {
        sanitize: true,
        renderer: renderer
      })
    }
  },
  async mounted() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    this.image1 = this.messages.image1;
    this.image2 = this.messages.image2;
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";

.p-detail {
  @include c-container;

  &--titleArea {
    padding: 0.5rem 0;
  }
  &--inner {
    @include desktop {
      display: flex;
      justify-content: space-between;
    }
  }
  &--title {
    @include c-title;
  }
  &--mainArea {
    @include desktop {
      padding-bottom: 50px;
    }
  }
  &--content1 {
    @include desktop() {
      width: 50%;
      justify-content: space-between;
    }
  }
  &--subtitle {
    @include c-caption;
    @include desktop {
      padding-top: 0;
      margin-bottom: 3rem;
    }
  }
  &--body {
    @include c-sentence;
    margin-bottom: 3rem;
    width: 100%;
    @include desktop {
      margin-bottom: 50px;
    }
  }
  &--image {
    margin-bottom: 1rem;
    height: 20rem;
    background-size: cover;
    background-repeat: no-repeat;
    @include desktop() {
      height: 32rem;
    }
  }
  &--content2 {
    display: flex;
    @include desktop() {
      display: block;
      width: 45%;
    }
  }
  &--image2 {
    margin-bottom: 1rem;
    height: 20rem;
    width: 60%;
    background-size: cover;
    background-position-y: 50%;
    background-repeat: no-repeat;
    @include desktop() {
      height: 500px;
      width: 100%;
    }
  }
  &--tags {
    display: flex;
    width: 40%;
    justify-content: center;
    flex-wrap: wrap;
    @include desktop() {
      width: 100%;
      justify-content: start;
    }
  }
  &--tagItem {
    margin: 0.5rem 1rem;
    height: 20rem;
    color: #c3504f;
    font-weight: bold;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-feature-settings: "pkna";
    font-size: 1.2rem;
    letter-spacing: 2px;
    @include desktop {
      font-size: 1.7rem;
    }
  }
  &--linkArea {
    @include desktop {
      margin-bottom: 80px;
    }
  }
}
//画像の順番とかも無理あるかも Talking だけ別コンポーネントも検討
.is-colored {
  @include desktop() {
    margin-top: 40px;
  }
  .p-detail {
    &--titleArea {
      background: linear-gradient(#fff 50%, #faf7f7 50%);
    }
    &--mainArea {
      background: #faf7f7;
    }
    &--linkArea {
      background: linear-gradient(#faf7f7 50%, #fff 50%);
    }
  }
}
</style>

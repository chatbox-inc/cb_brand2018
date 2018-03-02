<template>
  <div class="p-link">
    <div class="p-link--inner">
      <a :href="link.href" target="_blank">
        <div class="p-link--contents">
          <div class="p-link--image" :style="imgStyle"></div>
          <div class="p-link--linkWrapper">
            <div class="p-link--link">
              <span>{{link.title}}</span>
            </div>
            <div class="p-link--icon"></div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: Object
  },
  computed: {
    imgStyle() {
      return {
        backgroundImage: `url('${this.link.image}')`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
.p-link {
  background: #c3504f;
  @include c-container;
  padding: 1.5rem 0;
  margin-bottom: 40px;
  @include desktop() {
    background: transparent;
  }
  &--inner {
    @include c-container;
    @include desktop {
      max-width: 800px;
    }
  }
  &--contents {
    display: flex;
    align-items: center;
    background: #fff;
    position: relative;
    @include desktop() {
      border: 1px solid #c3504f;
      margin-right: 10px;
      box-shadow: 7px 7px 0 0 #c3504f;
      transition: all 0.3s;
    }
    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 3px 3px 0 0 #c3504f;
      transition: all 0.3s;
    }
  }
  &--image {
    width: 12rem;
    height: 80px;
    background-size: cover;
    background-position: center;
    @include desktop() {
      width: 30%;
      height: 140px;
    }
  }
  a {
    text-decoration: none;
  }
  &--linkWrapper {
    margin: 0 auto;
  }
  &--link {
    width: 140px;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: #c3504f;
    line-height: 1.5;
    @include desktop() {
      text-align: center;
      width: 100%;
      font-size: 2.5rem;
    }
  }
  &--icon {
    content: "";
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background-image: url("~static/images/icon_externalLink.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-0.8rem);
    @include desktop {
      width: 2.2rem;
      height: 2.2rem;
      transform: translateY(-1.1rem);
      right: 2rem;
    }
  }
}
</style>

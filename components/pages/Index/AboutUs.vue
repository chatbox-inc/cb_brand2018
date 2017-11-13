<template>
  <div class="p-about">
    <div class="p-about--inner">
      <h1 class="p-about--title">About Us</h1>
      <div class="p-about--image"></div>
      <table class="p-abouTable">
        <tbody>
          <tr class="p-aboutTable--row" v-for="i in info">
            <th class="p-aboutTable--header">{{i.label}}</th>
            <td class="p-aboutTable--data">{{i.data}}</td>
          </tr>
        </tbody>
      </table>
      <div class="p-placement">
        <h2 class="p-placement--title">Placement</h2>
        <div class="p-placement--sentence">
          <div class="">株式会社chatbox</div>
          <div class="">〒541-0057</div>
          <div class="">大阪市中央区北久宝寺町1-4-11 la Suite 4F</div>
        </div>
        <div class="p-placement--route">
          <div class="">大阪市営地下鉄「堺筋本町」駅 3号出入口より徒歩10分</div>
          <div class="">大阪市営地下鉄「本町」駅 11号出入口より徒歩15分</div>
          <div class="">大阪市営地下鉄「松屋町」駅 1号出入口より徒歩15分</div>
        </div>
        <a class="p-placement--button" href="#">Google Mapで開く ></a>
        <div class="p-placement--map"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        info: [
          {label: '会社名', data: '株式会社 chatbox'},
          {label: '代表', data: '後藤 知宏'},
          {label: '所在地', data: '〒 541-0057 大阪市中央区北久宝寺町1-4-11 la Suite 4F'},
          {label: '設立', data: '2014年 10月 02日'},
          {label: '事業内容', data: 'Web制作 / IT教育'},
          {label: '従業員数', data: '4名'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-about{
    @include c-container;
    &--title{
      @include c-title
    }
    &--image{
      height: 20rem;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .p-aboutTable{
    &--header{
      width: 6rem;
      text-align: left;
      font-weight: bold;
    }
    &--data{
      padding-left: 30px;
    }
  }

  .p-placement{
    &--title{
      @include c-subTitle;
    }
    &--sentence{
      font-weight: bold;
      margin-bottom: 2rem;
    }
    &--map{
      height: 20rem;
    }

  }
  .p-detail{
    &.is-colored &--titleArea{
      background: linear-gradient(#fff 50%, #FAF7F7 50%);
      background-size: 100% 50px;
    }
    &.is-colored &--mainArea{
      background:#FAF7F7;
    }
  }
</style>

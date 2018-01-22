<template>
  <div class="p-about">
    <div class="p-about--inner">
      <h1 class="p-about--title">About Us</h1>
      <div class="p-about--imageWrapper">
        <div class="p-about--image"  v-bind:style="aboutImage"></div>
      </div>
      <table class="p-abouTable">
        <tbody>
          <tr class="p-aboutTable--row" v-for="i in info">
            <th class="p-aboutTable--header">{{i.label}}</th>
            <td class="p-aboutTable--data">{{i.data}}</td>
          </tr>
        </tbody>
      </table>
      <div class="p-placement">
        <div class="p-placement--box">
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
        <a class="p-placement--button" href="#">Google Mapで開く　　></a>
        </div>
        <iframe class="p-placement--map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.0041797124945!2d135.50695531523166!3d34.67984398043977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e723237eaaab%3A0x7d8bc4d8a57d77bc!2z5qCq5byP5Lya56S-Y2hhdGJveA!5e0!3m2!1sja!2sjp!4v1516262751239" frameborder="0" allowfullscreen></iframe>
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
          {label: '従業員数', data: '4名'}
        ],
        aboutImage: {
          backgroundImage: `url("/images/about01.jpg")`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-about{
    @include c-container;
    margin-top:4.0rem;
    /*margin-bottom: 100px;*/
    &--title{
      @include c-title
    }
    &--imageWrapper {
      position: relative;
      margin-bottom:40px;
      width: 100%;
    }
    &--imageWrapper:before {
      content:"";
      display: block;
      padding-top: 30%;
    }
    &--image{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .p-aboutTable{
    &--header{
      width: 8rem;
      text-align: left;
      font-weight: bold;
      padding:6px
    }
    &--data{
      padding-left: 30px;
    }
  }

  .p-placement{
    margin-top: 20px;
    &--box{
      display: inline-block;
    }
    &--title{
      @include c-subTitle;
      font-size: 2.0rem;
      margin:0 0 10px 0;
    }
    &--sentence{
      font-weight: bold;
      margin-bottom: 2rem;
      line-height: 25px;
      font-size: 1.3rem;
    }
    &--map{
      display: inline-block;
      width: 100%;
      height: 400px;
      margin-top: 40px;
      border: 0;
    }
    &--route{
      line-height: 20px;
      margin-bottom: 40px;
    }
    &--button{
      margin-top: 40px;
      padding:18px 30px 18px 50px;
      border-radius: 10px;
      color: #FFF;
      font-weight: bold;
      background:#C3504F;
      text-decoration: none;
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

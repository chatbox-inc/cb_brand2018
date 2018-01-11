<template>
  <div class="p-about">
    <div class="p-about--inner">
      <h1 class="p-about--title">About Us</h1>
      <div class="p-about--image"  v-bind:style="aboutImage"></div>
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
        <div class="p-placement--map" v-bind:style="PlacementImage"></div>
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
        },
        PlacementImage: {
          backgroundImage: `url("/img/moc/700x600_GoogleMap.png")`
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
    margin-bottom: 100px;
    &--title{
      @include c-title
    }
    &--image{
      margin-bottom:40px;
      height: 28rem;
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
    margin-top:60px;
    &--box{display: inline-block;

    }
    &--title{
      @include c-subTitle;
      font-size: 40px;
      margin:0 0 30px 0;
    }
    &--sentence{
      font-weight: bold;
      margin-bottom: 2rem;
      line-height: 40px;
      font-size: 18px;
    }
    &--map{
      height: 400px;
      width: 450px;
      margin-left: 60px;
      display: inline-block;

    }
    &--route{
      line-height: 40px;
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

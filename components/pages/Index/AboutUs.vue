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
          <div class="">〒541-0059</div>
          <div class="">大阪府大阪市中央区博労町1-2-17
            <br>
            Briq SHINSO BLDG 403
          </div>
        </div>
        <div class="p-placement--route">
          <div class="">大阪市営地下鉄「堺筋本町」駅 3号出入口より徒歩10分</div>
          <div class="">大阪市営地下鉄「本町」駅 11号出入口より徒歩15分</div>
          <div class="">大阪市営地下鉄「松屋町」駅 1号出入口より徒歩15分</div>
        </div>
        <a class="p-placement--button" href="https://goo.gl/maps/LLuR2E8Nwos" target="_blank">Google Mapで開く</a>
        </div>
        <div class="p-placement--map" id="map"></div>
      </div>
    </div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQhqThDuP7ZVFZhwasR32oufVOo4xqHxc"></script>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        info: [
          {label: '会社名', data: '株式会社 chatbox'},
          {label: '代表', data: '後藤 知宏'},
          {label: '設立', data: '2014年 10月 02日'},
          {label: '事業内容', data: 'Web制作 / IT教育'},
          {label: '従業員数', data: '4名'}
        ],
        aboutImage: {
          backgroundImage: `url("/images/about_photo01.jpg")`
        }
      }
    },
    mounted() {
      const latLng = {lat: 34.678718, lng: 135.509419}

      const map = new google.maps.Map(document.getElementById('map'), {
        center: latLng,
        zoom: 16
      })

      const marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'chatbox is here!',
        animation: google.maps.Animation.BOUNCE,
        icon: {
          url: '/images/google_maps.svg',
          scaledSize: new google.maps.Size(80, 100)
        },
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  .p-about{
    @include c-container;
    margin-bottom: 40px;
    @include desktop() {
      margin-top: 100px;
    }
    margin-top:4.0rem;
    &--title{
      @include c-title;
      margin-bottom: 2rem;
    }
    &--imageWrapper {
      position: relative;
      margin-bottom:10px;
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
    margin-bottom: 40px;
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
    @include desktop() {
      display: flex;
    }
    &--box{
      display: inline-block;
      @include desktop() {
        width: 100%;
      }
    }
    &--title{
      @include c-subTitle;
      @include desktop() {
        font-size: 4rem;
      }
    }
    &--sentence{
      font-weight: bold;
      margin-bottom: 2rem;
      line-height: 25px;
      font-size: 1.3rem;
      @include desktop() {
        font-size: 1.7rem;
        line-height: 35px;
      }
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
      margin-bottom: 20px;
      @include desktop() {
        line-height: 35px;
        margin-bottom: 40px;
      }
    }
    &--button{
      display: inline-block;
      padding: 1.5rem 3rem;
      border-radius: 4px;
      color: #FFF;
      font-weight: bold;
      background:#C3504F;
      text-decoration: none;
      position:relative;
      transition: all .5s;
      &:hover {
        opacity: .8;
        transition: all .5s;
        &::before {
          right: .2rem;
          transition: all .5s;
        }
      }
    }
    &--button::before {
      content: "";
      display: inline-block;
      width: 1.4rem;
      height: 1.4rem;
      font-size: 1.4rem;
      background-image: url("/images/icon_arrow-white.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      right: .7rem;
      top: 50%;
      transform: translateY(-50%);
      transition: all .5s;
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

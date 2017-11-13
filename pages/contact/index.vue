<template>
  <div class="">
    <div class="c-contact_container c_content_center">
      <div class="c-container">
        <h1 class="c-title">Contact</h1>
        <div class="c-contact_sub_info">
          Web制作にまつわるお悩み、ご相談はお気軽にchatboxまで。


        </div>
      </div>

      <div class="c-container">
        <h2 class="p-intro">
          各種お問い合わせ
      </h2>
        <div class="c-container">
          <p class="c-contact_sub_info">
            各種お問い合わせをご用意しております。お気軽にご利用ください。
            Webからのお問い合わせは以下のフォームをご利用ください。
          </p>
        </div>
      </div>
      <div class="c-container">
        <div class="c_border_content c_content_center">
          <div class="contact_box">
            <div class="c_contact_sns_box">
              <div class="ttl">
                SNSチャットツールからのお問い合わせ

              </div>
              <div class="c-link">
                <a class="c-btn_base" href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>Facebookからメッセージを送る</a>
              </div>
              <div class="c-link">
                <a class="c-btn_base" href="#">Chatworkからコンタクトを送る</a>
              </div>
            </div>
            <div class="c_contact_tel_box">
              <div class="c_border"></div>
              <div class="ttl">電話でのお問い合わせ</div>
              <div class="c_modal_text_number ">050-3555-1212</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p_form_box">
        <div class="c-container">
          <h2 class="p-intro">
            フォームからのお問い合わせ
        </h2>
          <div class="c-contact_sub_info">Webからお問い合わせ出来ます。<br/>
            以下の中からお問い合わせ内容を選択し、フォームを入力してください。


          </div>
        </div>
        <div class="p-contact_check">
          <div class="c-link">
            <label class="c-link_anchor current">
              <input type="checkbox" name="checkbox01[]" class="checkbox01-input" checked="checked">
              <span class="checkbox01-parts">Web制作</span>
            </label>
            <label class="c-link_anchor">
              <input type="checkbox" name="checkbox01[]" class="checkbox01-input">
              <span class="checkbox01-parts">技術顧問</span>
            </label>
            <label class="c-link_anchor">
              <input type="checkbox" name="checkbox01[]" class="checkbox01-input">
              <span class="checkbox01-parts">イベント</span>
            </label>
            <label class="c-link_anchor">
              <input type="checkbox" name="checkbox01[]" class="checkbox01-input">
              <span class="checkbox01-parts">その他</span>
            </label>
          </div>
          <p class="c_modal_text">Web制作に関するお問い合わせは、見積もり相談にも対応しておりますので内容にその旨を記述いただきご連絡ください。</p>
        </div>
        <div class="p-contact">
          <div class="p_form">
            <dl>
              <dt>名前</dt>
              <dd>
                <input type="text" name="">
              </dd>
              <dt>E-mail</dt>
              <dd>
                <input type="text" name="">
              </dd>
              <dt>件名</dt>
              <dd>
                <input type="text" name="">
              </dd>
              <dt>内容</dt>
              <dd>
                <textarea name="#" rows="4" cols="40"></textarea>
              </dd>
            </dl>
          </div>
        </div>

      </div>
      <div class="p-contact">
        <div class="submit">
          <a class="c-btn_base" href="#">送信する</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/object/component/_container.scss";
  @import "~assets/scss/object/component/_title.scss";

  a:link{
    text-decoration: none;
  }
  .c_clear{
    clear: both;
  }
  /* css checkbox01 */
  .checkbox01-input{
    display: none;
  }
  .checkbox01-parts{
    padding-left: 26%;
    position:relative;
    margin-right: 30%;
  }
  .current{
    .checkbox01-parts::before{
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      border: 1px solid #FFFFFF;
      background-color: #FFFFFF;
      border-radius: 4px;
    }
  }
  .checkbox01-parts::before{
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border: 1px solid #C3504F;
    background-color: #FFFFFF;
    border-radius: 4px;

  }
  .current{
    .checkbox01-input:checked + .checkbox01-parts{
      color: #FFFFFF;
    }
  }

  .checkbox01-input:checked + .checkbox01-parts{
    color: #C3504F;
  }
  .checkbox01-input:checked + .checkbox01-parts::after{
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 5px;
    width: 7px;
    height: 14px;
    transform: rotate(40deg);
    border-bottom: 3px solid #C3504F;
    border-right: 3px solid #C3504F;
  }


  /* content */

  .c-contact_sub_info{
    margin-bottom: 7%;
  }
  .c-contact_container{
    padding: 0 2%;
  }
  .c_border_content{
    border: 1px solid #C3504F;
  }
  .c_border{
    border: 1px solid #C3504F;
  }
  .c_modal_text{
    color: #C3504F;
  }
  .c_modal_text_number{
    font-family: YuGothic;
    font-size:3rem;
    font-weight: bold;
    color: #C3504F;
  }
  /* contact */
  .contact_box{
    overflow: auto;
    padding: 5% 3% 2%;
    .c_border{
      margin-bottom: 3%;
    }
    .ttl{
      font-weight: 600;
      margin-bottom: 3%;
    }
  }
  .c-contactContainer{
    line-height: 1.6;
    padding: 0 14px;

    .p-intro{
      margin-top: 64px;
    }
  }
  .c_content_center{
    text-align: center;
  }

  /* button */
  .c-btn_base{
    background-color: #C3504F;
    color: #FFFFFF;
    padding: 7%;
    border-radius: 7px;
    display: block;
    box-sizing: border-box;
    margin-bottom: 3%;
    width: 100%;
  }
  i{
    margin-right: 3%;
  }


  /* contact */
  .contact_sub{
    margin-bottom: 87px;
  }
  .p-contact_check{
  }
  .p_form_box{
    .c-link_anchor{
      border: 1px solid #C3504F;
      border-radius: 7px;
      color: #c3504f;
      margin: 1% 0;
      padding: 3% 16%;
      display: inline-block;
      width: 16%;
      white-space: nowrap;
      font-size: 100%;
    }
    .current{
      background-color: #C3504F;
      color: #FFFFFF;
    }
  }
  .p-contact{
    text-align: left;

  }
  .p_form{
    margin-top: 7%;
    dt{
      margin-bottom: 1%;
    }
    dd{
      margin-bottom: 3%;
    }
    input,textarea{
      border: 1px solid #cacaca;
      padding: 2%;
      width: 100%;
      box-sizing: border-box;
      line-height: 1.2;
      font-size: 120%;
    }
  }
  .submit{
    text-align: center;
    width: 100%;
    font-size: 2rem;

  }
  .submit::after{
    font-family: 'FontAwesome';
    content: "\f054";
    position: absolute;
    top: 50%;
    right: 9%;
    margin-top: -12px;
    color: #FFFFFF;

  }
  /* pc */
  @media screen and (min-width: 768px) {
    .contact_box{
      overflow: hidden;
      .c_border {
        border-style: none;
      }
      .c_contact_sns_box{
        width: 60%;
        float: left;
      }
      .c-link{
        width: 48%;
        float: left;
        margin-right: 1%;
        a{
          padding: 5% 10%;
        }
        &:first-child{
          margin-left: 3%;
        }
      }
      .c_contact_tel_box{
        border-left: 1px solid #C3504F;
        width: 34%;
        float: left;
        margin-left: 3%;
        padding-bottom: 5%;
        .c_modal_text_number{
          font-size: 3rem;
        }
      }
    }
    .p-contact_check{
      .c-link{
        width: 55%;
        margin: 0 auto;
      }
    }
    .p_form{
      margin-top: 7%;
      dt{
        margin-bottom: 1%;
        width: 10%;
        float: left;
        clear: both;
        text-align: right;
        margin-right: 3%;
      }
      dd{
        margin-bottom: 3%;
        width: 80%;
        float: left;
      }
      input,textarea{
        border: 1px solid #cacaca;
        padding: 2%;
        width: 100%;
        box-sizing: border-box;
        line-height: 1.2;
        font-size: 80%;
      }
    }
    .p-contact{
      text-align: center;
      .submit{
        width: 30%;
        margin: 0 auto;
        display: inline-block;
        position: relative;
      }
    }
  }


</style>

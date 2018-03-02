<template>
    <section class="p-modalForm" v-bind:class="{ 'is-active': isModalActive }">
        <div class="p-modalForm__inner">
            <div class="p-modalForm__contets" v-bind:class="{ 'is-active': confirmation() }">
                <h2 class="p-modalForm__contetsTitle">送信確認</h2>
                <p class="p-modalForm__contetsDescription">
                    フォームの内容を送信します。<br>
                    よろしければ、送信ボタンを押してください。
                </p>
                <div class="p-modalForm__contetsAction">
                    <a class="p-modalForm__contetsActionButtonSubmit" @click="send()">送信</a>
                    <a class="p-modalForm__contetsActionButtonClose" @click="back()">戻る</a>
                </div>
            </div>
            <div class="p-modalForm__contets" v-bind:class="{ 'is-active': complete }">
                <h2 class="p-modalForm__contetsTitle">送信完了</h2>
                <p class="p-modalForm__contetsDescription">
                    ご連絡ありがとうございます。<br><br>
                    自動で確認メール送信しております、ご確認ください。<br>
                    3営業日以内にご連絡をさせていただきます。
                </p>
                <div class="p-modalForm__contetsAction">
                    <a class="p-modalForm__contetsActionButtonClose" @click="close()">閉じる</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
  props: ["isModalActive", "message"],
  data() {
    return {
      complete: false
    };
  },
  methods: {
    send() {
      console.log(this.message);
      axios(
        {
          url:
            "https://vh6zjd2it0.execute-api.us-east-1.amazonaws.com/dev/chatbox/contact",
          method: "POST",
          crossDomain: true,
          data: JSON.stringify({
            message: this.message
          })
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => {
          console.log(response.data);
          this.$emit("sent");
        })
        .catch(error => {
          console.log(error.response);
        });

      this.complete = true;
    },
    back() {
      this.$emit("close");
    },
    close() {
      this.complete = false;
      this.$emit("close");
    },
    confirmation() {
      if (this.isModalActive && this.complete === false) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_title.scss";
@import "~assets/scss/object/component/_button.scss";
.p-modalForm.is-active {
  opacity: 1;
  z-index: 10000;
  transition: all 0.5s 0.3s;
  visibility: visible;
}
.p-modalForm__contets.is-active {
  opacity: 1;
  transform: translate(-50%, 0);
  transition: all 0.8s;
  z-index: 11000;
  visibility: visible;
  position: absolute;
  top: 0;
  left: 50%;
}

.p-modalForm {
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: fixed;
  top: 0;
  transition: all 0.5s 0.5s;
  opacity: 0;
  visibility: hidden;

  &__inner {
    @include c-container;
    text-align: center;
  }
  &__contets {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 10px;
    margin-top: 20vh;
    padding: 40px 30px;
    min-width: 100%;
    box-sizing: border-box;
    background: #fff;
    transform: translate(-50%, -25%);
    opacity: 0;
    transition: all 0.5s;
    @include desktop() {
      min-width: 600px;
      max-width: 600px;
      margin-top: 20vh;
    }
  }
  &__contetsTitle {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    @include desktop {
      margin-bottom: 20px;
    }
  }
  &__contetsDescription {
    line-height: 1.4;
    margin-bottom: 20px;
    @include desktop {
      margin-bottom: 30px;
    }
  }
  &__contetsAction {
    display: flex;
    justify-content: center;
  }
  &__contetsActionButtonSubmit {
    display: inline-block;
    margin-right: 20px;
    border-radius: 4px;
    padding: 1.5rem 0;
    width: 40%;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: normal;
    background: #c3504f;
    text-decoration: none;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.5s;
    @include desktop {
      max-width: 160px;
    }
    &:hover {
      opacity: 0.7;
      transition: all 0.5s;
    }
  }
  &__contetsActionButtonClose {
    display: inline-block;
    border-radius: 4px;
    border: solid 1px #c3504f;
    padding: 1.5rem 0;
    width: 40%;
    box-sizing: border-box;
    text-align: center;
    color: #c3504f;
    font-size: 1.5rem;
    font-weight: normal;
    background: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.5s;
    @include desktop {
      max-width: 160px;
    }
    &:hover {
      background: rgba(195, 80, 79, 0.1);
      transition: all 0.5s;
    }
  }
}
</style>

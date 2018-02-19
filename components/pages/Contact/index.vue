<template>
    <section class="p-contact">
        <modal-form :isActive="isActive"></modal-form>
        <div class="p-contact__inner">
            <div class="p-contact__heading">
                <h2 class="p-contact__headingTitle">Contact</h2>
                <span class="p-contact__headingIntro">Web制作にまつわるお悩み、ご相談はお気軽にchatboxまで。</span>
            </div>
        </div>
        <div class="p-contact__ohter">
            <div class="p-contact__inner">
                <div class="p-contact__ohterHeading">
                    <h3 class="p-contact__ohterHeadingTitle">各種お問合わせ</h3>
                    <span class="p-contact__ohterHeadingIntro">各種お問い合わせをご用意しております。お気軽にご利用ください。</span>
                </div>
                <div class="p-contact__ohterContents">
                    <div class="p-contact__ohterContentsChat">
                        <span class="p-contact__ohterContentsChatTitle">SNS、チャットツールからお問合わせ</span>
                        <div class="p-contact__ohterButtons">
                            <a href="https://www.facebook.com/chatbox.inc/" class="p-contact__ohterButtonFacebook">
                                Facebookから<br>
                                メッセージを送る
                            </a>
                            <a href="https://chatwork.com/g/chatbox-inc" class="p-contact__ohterButtonTwitter">
                                ChatWorkから<br>
                                メッセージを送る
                            </a>
                        </div>
                    </div>
                    <div class="p-contact__ohterContentsTel">
                        <span class="p-contact__ohterContentsTelTitle">お電話でのお問合わせ</span>
                        <a class="p-contact__ohterContentsTelNumber">050-3555-1212</a>
                        <span class="p-contact__ohterContentsInfo">24時間対応：メッセージ預かり</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-contact__form">
            <div class="p-contact__inner">
                <div class="p-contact__formHeading">
                    <h3 class="p-contact__formHeadingTitle">フォームでのお問い合わせ</h3>
                    <span class="p-contact__formHeadingIntro">Webからお問い合わせ出来ます。
                        <br>以下の中からお問い合わせ内容を選択し、フォームを入力してください。
                    </span>
                </div>
                <form class="p-contact__formContact">
                    <div class="p-contact__contentWrapper">
                        <div :class="contactContentClass(item.id)" v-for="item in items" @click="changeSubject(item.id) + changeInfo(item)">
                            <input type="radio" :id="item.id" :name="item.name" :value="item.id" v-model="message.subject" class="p-contact__checkBox">
                            <label :for="item.id" class="p-contact__checkBoxLabel">{{ item.title }}</label>
                        </div>
                    </div>
                    <div class="p-contact__comment">{{ info }}</div>
                    <div class="p-contact__textBoxWrapper">
                        <label for="name" class="p-contact__textBoxLabel">名前</label>
                        <input type="text" id="name" name="name" class="p-contact__textBox" required v-model="message.name">
                    </div>
                    <div class="p-contact__textBoxWrapper">
                        <label for="email" class="p-contact__textBoxLabel">E-mail</label>
                        <input type="email" id="email" name="email" class="p-contact__textBox" required v-model="message.email">
                    </div>
                    <div class="p-contact__textBoxWrapper">
                        <label for="title" class="p-contact__textBoxLabel">件名</label>
                        <input type="text" id="title" name="title" class="p-contact__textBox" required v-model="message.title">
                    </div>
                    <div class="p-contact__textAreaWrapper">
                        <label for="content" class="p-contact__textAreaLabel">内容</label>
                        <textarea id="content" name="content" class="p-contact__textArea" required v-model="message.body"></textarea>
                    </div>
                    <button type="button" class="p-contact__submit" @click="confirm()">送信する</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import ModalForm from './ModalForm.vue'

    export default {
        components: {
            ModalForm: ModalForm
        },
        data() {
            return {
                items: [
                    {
                        title: 'Web制作',
                        id: 'web',
                        name: 'web',
                        description: 'Web制作に関するお問い合わせでは、見積り相談にも対応しておりますので内容にその旨を記述いただきご連絡ください。'
                    },
                    {
                        title: '技術顧問',
                        id: 'advise',
                        name: 'advise',
                        description: 'foo'
                    },
                    {
                        title: 'イベント',
                        id: 'event',
                        name: 'event',
                        description: 'bar'
                    },
                    {
                        title: 'その他',
                        id: 'etc',
                        name: 'etc',
                        description: 'baz'
                    },
                ],
                message: {
                    subject: '',
                    title: '',
                    name: '',
                    email: '',
                    body: '',
                },
                isActive: {
                    background: '',
                    confirm: '',
                },
                info: ''
            }
        },
        methods: {
            contactContentClass(value){
                return {
                    "p-contact__content":true,
                    "is-active": this.message.subject === value
                }
            },
            changeSubject(value){
                this.message.subject = value
            },
            changeInfo(item) {
                this.info = item.description
            },
            sendMail() {
                axios({
                    url: 'https://vh6zjd2it0.execute-api.us-east-1.amazonaws.com/dev/chatbox/contact',
                    method: "POST",
                    crossDomain: true,
                    data: JSON.stringify({
                        message: this.message
                    })
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log(error.response)
                    })
            },
            confirm() {
                this.isActive.background = 'is-active'
                this.isActive.confirm = 'is-active'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/scss/layout/_layout.scss";
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";
    @import "~assets/scss/object/component/_button.scss";

    .p-contact {
        &__inner {
            @include c-container;
        }
        &__heading {
            margin-bottom: 50px;
            text-align: center;
        }
        &__headingTitle{
            @include c-title;
            margin-bottom: 20px;
            text-align: center;
        }
        &__headingIntro {
            letter-spacing: 4px;
            display: inline-block;
            font-size: 1.5rem;
            @include desktop {
                font-size: 1.6rem;
            }
        }
        &__ohter {
            padding: 30px 0 40px;
            background: #FAF7F7;
            margin-bottom: 40px;
            @include desktop {
                padding: 50px 0 70px;
                margin-bottom: 80px;
            }
        }
        &__ohterHeading {
            text-align: center;
            margin-bottom: 15px;
            @include desktop {
                margin-bottom: 30px;
            }
        }
        &__ohterHeadingTitle {
            margin-bottom: 25px;
            font-size: 1.7rem;
            font-weight: bold;
            letter-spacing: 3px;
            @include desktop {
                margin-bottom: 30px;
                font-size: 2rem;
            }
        }
        &__ohterHeadingIntro {
            line-height: 1.8;
        }
        &__ohterButtons {
            display: flex;
            flex-wrap: wrap;
            padding: 0 20px;
            justify-content: space-between;

            @include desktop {
                flex-wrap: nowrap;
            }
        }
        &__ohterButtonFacebook {
            @include c-contactButton(facebook);
            margin-bottom: 20px;
            @include desktop {
                margin-bottom: 0;
            }
        }
        &__ohterButtonTwitter {
            @include c-contactButton(chatwork);
            margin-bottom: 40px;
            @include desktop {
                margin-bottom: 0;
            }
        }
        &__ohterContents {
            display: flex;
            flex-wrap: wrap;
            border: 1px solid #c3504f;
            padding: 40px 20px;
            box-sizing: border-box;
            background: #fff;
            @include desktop {
                flex-wrap: nowrap;
            }
        }
        &__ohterContentsChat {
            display: inline-block;
            margin-bottom: 40px;
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #c3504f;
            text-align: center;

            @include desktop {
                width: 60%;
                border-right: 1px solid #c3504f;
                border-bottom: none;
                margin-bottom: 0;
            }
        }
        &__ohterContentsChatTitle {
            display: inline-block;
            margin-bottom: 3rem;
            letter-spacing: 2px;
            font-weight: bold;
            font-size: 1.3rem;
            @include desktop {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }
        }

        &__ohterContentsTel {
            display: inline-block;
            width: 100%;
            text-align: center;

            @include desktop {
                width: 40%;
            }
        }

        &__ohterContentsTelTitle {
            display: inline-block;
            margin-bottom: 2rem;
            letter-spacing: 2px;
            font-weight: bold;
            font-size: 1.3rem;
            @include desktop {
                font-size: 1.5rem;
            }
        }
        &__ohterContentsTelNumber {
            display: block;
            margin-bottom: 2rem;
            color: #c3504f;
            font-size: 3.5rem;
            line-height: 1.5;
        }
        &__ohterContentsTelInfo {
            display: inline-block;
        }
        &__form {
            text-align: center;
        }
        &__formHeading {
            text-align: center;
            margin-bottom: 30px;
        }
        &__formHeadingTitle {
            margin-bottom: 25px;
            font-size: 1.7rem;
            font-weight: bold;
            letter-spacing: 3px;
            @include desktop {
                margin-bottom: 30px;
                font-size: 2rem;
            }
        }
        &__formHeadingIntro {
            line-height: 1.8;
        }
        &__contentWrapper {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
        }

        &__content {
            display: inline-block;
            width: 45%;
            max-width: 45%;
            height: 60px;
            margin-bottom: 20px;
            border: 1px solid #C3504F;
            border-radius: 5px;
            color: #C3504F;
            text-align: left;
            line-height: 60px;
            transition: all 0.3s;
            cursor: pointer;
            position: relative;
            @include desktop {
                max-width: 270px;
            }

            &::before {
                display: inline-block;
                content: "";
                width: 20px;
                height: 20px;
                border: 1px solid rgba(195,80,79,.5);
                background: #FAF7F7;
                position: absolute;
                top: 50%;
                left: 15px;
                transform: translateY(-10px);
            }
            &::after {
                display: inline-block;
                content: "";
                width: 18px;
                height: 18px;
                background: url("/images/icon_check-mute.svg") no-repeat;
                background-size: contain;
                background-position: center;
                position: absolute;
                top: 50%;
                left: 17px;
                transform: translateY(-9px);
            }

            &:nth-child(odd) {
                margin-right: 10px;
            }

            &:nth-child(even) {
                margin-left: 10px;
            }

            &:hover {
                background: #C3504F;
                color: #fff;
            }

            @include desktop() {
                margin-bottom: 30px;

                &:nth-child(odd) {
                    margin-right: 15px;
                }

                &:nth-child(even) {
                    margin-left: 15px;
                }
            }
        }

        &__content.is-active {
            background: #C3504F;
            color: #fff;
            &::after {
                display: inline-block;
                content: "";
                width: 18px;
                height: 18px;
                background: url("/images/icon_check.svg") no-repeat;
                background-size: contain;
                background-position: center;
                position: absolute;
                top: 50%;
                left: 17px;
                transform: translateY(-9px);
            }
        }
        &__checkBox {
            display: none;
            margin-left: 15px;
        }

        &__checkBoxLabel {
            margin-left: 55px;
        }

        &__comment {
            width: 100%;
            height: 30px;
            color: #c3504f;
            line-height: 1.8;
            margin-bottom: 30px;
            @include desktop {
                margin-bottom: 80px;
            }
        }

        &__textBoxWrapper, &__textAreaWrapper {
            margin-bottom: 20px;
            text-align: left;
            @include desktop() {
                text-align: center;
                margin-right: 80px;
            }
        }
        &__textBoxLabel, &__textAreaLabel {
            display: inline-block;
            margin-bottom: 5px;
            min-width: 100px;
            @include desktop() {
                width: 50px;
                margin-bottom: 0;
                margin-right: 30px;
                text-align: right;
            }
        }

        &__textAreaLabel {
            vertical-align: top;
        }

        &__textBox {
            width: 100%;
            padding: 1.6rem;
            max-width: 550px;
            height: 30px;
            box-sizing: border-box;
            background: #FAF7F7;
            border: 1px solid #ccc;
            outline: none;
        }

        &__textArea {
            border: 1px solid #ccc;
            padding: 1.6rem;
            width: 100%;
            max-width: 550px;
            height: 200px;
            box-sizing: border-box;
            background: #FAF7F7;
            resize: none;
            outline: none;
        }

        &__submit {
            display: inline-block;
            margin-bottom: 10px;
            padding: 2rem 1rem;
            width:100%;
            text-align: center;
            border-radius: 4px;
            border: 0;
            color: #FFF;
            font-size: 1.5rem;
            font-weight: bold;
            background:#C3504F;
            text-decoration: none;
            position:relative;
            transition: all .5s;
            outline: none;
            cursor: pointer;
            @include desktop {
                font-size: 1.5rem;
                line-height: 1.5;
                font-weight: normal;
                width: 45%;
                letter-spacing: 2px;
            }
            &:hover {
                opacity: .8;
                transition: all .5s;
                &::before {
                    right: .2rem;
                    transition: all .5s;
                }
            }
            &::before {
                content: "";
                display: inline-block;
                width: 1.4rem;
                height: 1.4rem;
                background-image: url("/images/icon_arrow-white.svg");
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                position: absolute;
                right: .7rem;
                top: 50%;
                transform: translateY(-50%);
                transition: all .5s;
                @include desktop {
                    width: 2rem;
                    height: 2rem;
                    right: 1rem;
                }
            }
        }
    }
</style>

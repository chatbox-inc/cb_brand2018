<template>
    <section class="p-contact">
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
                        <div class="p-contact__content" v-for="item in items">
                            <input type="checkbox" :id="item.id" :name="item.name" class="p-contact__checkBox">
                            <label :for="item.id" class="p-contact__checkBoxLabel">{{ item.title }}</label>
                        </div>
                    </div>
                    <div class="p-contact__comment">Web制作に関するお問い合わせでは、見積り相談にも対応しておりますので内容にその旨を記述いただきご連絡ください。</div>
                    <div class="p-contact__textBoxWrapper">
                        <label for="name" class="p-contact__textBoxLabel">名前</label>
                        <input type="text" id="name" name="name" class="p-contact__textBox" required v-model="message.name">
                    </div>
                    <div class="p-contact__textBoxWrapper">
                        <label for="email" class="p-contact__textBoxLabel">E-mail</label>
                        <input type="text" id="email" name="email" class="p-contact__textBox" required v-model="message.email">
                    </div>
                    <div class="p-contact__textBoxWrapper">
                        <label for="title" class="p-contact__textBoxLabel">件名</label>
                        <input type="text" id="title" name="title" class="p-contact__textBox" required v-model="message.title">
                    </div>
                    <div class="p-contact__textAreaWrapper">
                        <label for="content" class="p-contact__textAreaLabel">内容</label>
                        <textarea id="content" name="content" class="p-contact__textArea" required v-model="message.body"></textarea>
                    </div>
                    <button type="submit" class="p-contact__submit" @click="sendMail()">送信する</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                items: [
                    {
                        title: 'Web制作',
                        id: 'web',
                        name: 'web'
                    },
                    {
                        title: '技術顧問',
                        id: 'advise',
                        name: 'advise'
                    },
                    {
                        title: 'イベント',
                        id: 'event',
                        name: 'event'
                    },
                    {
                        title: 'その他',
                        id: 'etc',
                        name: 'etc'
                    },
                ],
                message: {
                    title: '',
                    name: '',
                    email: '',
                    body: '',
                }
            }
        },
        methods: {
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
        font-size: 1.6rem;
        &__inner {
            @include c-container;
        }
        &__heading {
            margin-bottom: 50px;
            text-align: center;
        }
        &__headingTitle{
            @include c-title;
            margin-bottom: 40px;
            text-align: center;
        }
        &__headingIntro {
            letter-spacing: 3px;
            display: inline-block;
        }
        &__ohter {
            padding: 50px 0 70px;
            background: #FAF7F7;
            margin-bottom: 80px;
        }
        &__ohterHeading {
            text-align: center;
            margin-bottom: 30px;
        }
        &__ohterHeadingTitle {
            margin-bottom: 30px;
            font-size: 2rem;
            font-weight: bold;
            letter-spacing: 3px;
        }
        &__ohterHeadingIntro {
            line-height: 1.8;
        }
        &__ohterButtons {
            display: flex;
            padding: 0 20px;
            justify-content: space-between;
        }
        &__ohterButtonFacebook {
            @include c-contactButton(facebook);
        }
        &__ohterButtonTwitter {
            @include c-contactButton(chatwork);
        }
        &__ohterContents {
            display: flex;
            border: 1px solid #c3504f;
            padding: 40px 20px;
            box-sizing: border-box;
            background: #fff;
        }
        &__ohterContentsChat {
            display: inline-block;
            border-right: 1px solid #c3504f;
            width: 60%;
            text-align: center;
        }
        &__ohterContentsChatTitle {
            display: inline-block;
            margin-bottom: 2rem;
            letter-spacing: 2px;
            font-weight: bold;
        }

        &__ohterContentsTel {
            display: inline-block;
            width: 40%;
            text-align: center;
        }

        &__ohterContentsTelTitle {
            display: inline-block;
            margin-bottom: 2rem;
            letter-spacing: 2px;
            font-weight: bold;
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
            margin-bottom: 30px;
            font-size: 2rem;
            font-weight: bold;
            letter-spacing: 3px;
        }
        &__formHeadingIntro {
            line-height: 1.8;
        }
        &__textbox {
            height: 40px;
            width: 540px;
            border: 1px solid #CCCCCC;
            background-color: #FAF7F7;
        }
        &__textarea {
            height: 200px;
            width: 540px;
            border: 1px solid #CCCCCC;
            background-color: #FAF7F7;
            resize: none;
        }

        &__contentWrapper {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
        }

        &__content {
            display: inline-block;
            width: 40%;
            max-width: 270px;
            height: 60px;
            margin-bottom: 20px;
            border: 1px solid #C3504F;
            border-radius: 5px;
            color: #C3504F;
            text-align: left;
            line-height: 60px;
            transition: all 0.3s;

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

        &__checkBox {
            margin-left: 15px;
        }

        &__checkBoxLabel {
            margin-left: 15px;
        }

        &__comment {
            width: 100%;
            color: #c3504f;
            margin-bottom: 30px;
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
            max-width: 550px;
            height: 30px;
            padding-left: 5px;
            background: #f7f7f7;
            border: 1px solid #ccc;
            outline: none;
        }

        &__textArea {
            width: 100%;
            max-width: 550px;
            height: 200px;
            padding-left: 5px;
            padding-top: 5px;
            background: #f7f7f7;
            border: 1px solid #ccc;
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

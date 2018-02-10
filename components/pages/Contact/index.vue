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
                    <!--TODO ココからコーディング-->
                </form>
            </div>
        </div>
    </section>
</template>

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
    }

</style>

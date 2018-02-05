<template>
    <div class="u-container">
        <div class="p-form_box">
            <div class="u-container">
                <h2 class="p-intro">
                    フォームからのお問い合わせ
                </h2>
                <div class="c-contact_sub_info">Webからお問い合わせ出来ます。<br/>
                    以下の中からお問い合わせ内容を選択し、フォームを入力してください。
                </div>
            </div>
            <div class="p-contact_check">
                <div class="c-link">
                    <div class="c-link_anchor current">
                        <label class="c-link_label">
                            <input type="checkbox" name="checkbox01[]" class="checkbox01-input" checked>
                        </label>
                        <span class="checkbox01-parts">Web制作</span>
                    </div>
                    <div class="c-link_anchor">
                        <label class="c-link_label">
                            <input type="checkbox" name="checkbox01[]" class="checkbox01-input">
                        </label>
                        <span class="checkbox01-parts">技術顧問</span>
                    </div>
                    <div class="c-link_anchor">
                        <label class="c-link_label">
                            <input type="checkbox" name="checkbox01[]" class="checkbox01-input">
                        </label>
                        <span class="checkbox01-parts">イベント</span>
                    </div>
                    <div class="c-link_anchor">
                        <label class="c-link_label">
                            <input type="checkbox" name="checkbox01[]" class="checkbox01-input">
                        </label>
                        <span class="checkbox01-parts">その他</span>
                    </div>
                </div>
                <p class="c_modal_text">Web制作に関するお問い合わせは、見積もり相談にも対応しておりますので内容にその旨を記述いただきご連絡ください。</p>
            </div>
            <div class="p-contact">
                <div class="p-form">
                    <div class="p-form_wrapper">
                        <label class="p-form_label">名前</label>
                        <input type="text" name="" class="p-form_textBox">
                    </div>
                    <div class="p-form_wrapper">
                        <label class="p-form_label">E-mail</label>
                        <input type="text" name="" class="p-form_textBox">
                    </div>
                    <div class="p-form_wrapper">
                        <label class="p-form_label">件名</label>
                        <input type="text" name="" class="p-form_textBox">
                    </div>
                    <div class="p-form_wrapper">
                        <label class="p-form_label">内容</label>
                        <textarea name="#" rows="4" cols="40" class="p-form_textArea"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-contact p-contact_submit">
            <div class="p-btn_baseWrapper">
                <a class="c-btn_base" href="#">
                    <span>送信する</span>
                    <i class="fas fa-angle-right c-icon_arrow"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";
    @import "~assets/scss/object/component/_button.scss";

    .c-link_label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        margin-left: 20px;
        margin-top: 25px;
        border: 1px solid #B3B3B3;
        background: #fff;
        overflow: hidden;
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        &:after {
            content: '';
            position: absolute;
            top: 40%;
            left: 5px;
            display: block;
            margin-top: -8px;
            width: 14px;
            height: 21px;
            border-right: 3px solid #4B4B4B;
            border-bottom: 3px solid #4B4B4B;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            z-index: 1;
        }
    }

    .chatbox01 {
        &-input {
            -moz-appearance: none;
            -webkit-appearance: none;
            margin: 0;
            padding: 0;
            position: absolute;
            width: 40px;
            height: 40px;
            left: -40px;
            box-shadow: 39px 0px #FFF;
            z-index: 2;
            &:checked {
                box-shadow: none;
            }
            &:checked:focus {
                box-shadow: 39px 0px #666;
                opacity: 0.1;
            }
            &:focus {
                box-shadow: 39px 0px #EEE;
            }
        }
        &-parts {}
    }

    .p-form {
        margin-top: 7%;
        @include desktop() {
            width: 50%;
            margin: 0 auto;
        }
        &_label {
            margin-bottom: 1%;
            color: #393739;
            font-family: YuGothic;
            font-size: 2.4rem;
            font-weight: 500;
            line-height: 3.6rem;
            @include desktop() {
                font-size: 16px;
            }
        }
        &_textBox {
            border: 1px solid #CCCCCC;
            background-color: #FAF7F7;
            padding: 2%;
            width: 100%;
            height: 9rem;
            box-sizing: border-box;
            line-height: 1.2;
            font-size: 120%;
            @include desktop() {
                height: 40px;
            }
        }
        &_textArea {
            border: 1px solid #CCCCCC;
            background-color: #FAF7F7;
            padding: 2%;
            width: 100%;
            height: 300px;
            box-sizing: border-box;
            line-height: 1.2;
            font-size: 120%;
            resize: none;
        }
        &_box {
            padding: 5rem 2rem;
        }
    }

    .contact {
        &_sub {
            margin-bottom: 87px;
        }
        &_check {
        }
    }

    .p-intro {
        color: #393739;
        font-family: YuGothic;
        font-size: 3rem;
        font-weight: bold;
        letter-spacing: .4rem;
        line-height: 4.5rem;
        text-align: center;
        @include desktop() {
            font-size: 20px;
            padding: 0;
        }
    }
    .c-contact_sub_info {
        color: #393739;
        font-family: YuGothic;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 4.8rem;
        text-align: center;
        padding-top: 3rem;
        @include desktop() {
            font-size: 16px;
        }
    }
    .c-link {
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        @include desktop() {
            width: 600px;
            margin: 0 auto;
            margin-top: 30px;
            margin-bottom: 30px;
        }
        &_anchor {
            border: 1px solid #C3504F;
            border-radius: 7px;
            color: #c3504f;
            height: 9rem;
            line-height: 9rem;
            font-weight: bold;
            margin: 1rem;
            box-sizing: border-box;
            white-space: nowrap;
            font-size: 2.4rem;
            width: 45%;
            @include desktop() {
                width: 250px;
                height: 50px;
            }
        }
    }
    .current {
        background-color: #C3504F;
        color: #FFFFFF;
    }
    .c_modal_text {
        color: #B43B3E;
        font-family: YuGothic;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 4.8rem;
        text-align: center;
        @include desktop() {
            font-size: 16px;
        }
    }

    .p-contact {
        text-align: left;
        &_submit {
            padding: 5rem 2rem;
            margin-bottom: 10rem;
        }
        @include desktop() {
            margin-top: 30px;
        }
    }

    .p-btn_baseWrapper {
        text-align: center;
        width: 100%;
        height: 12rem;
        font-size: 2rem;
        border-radius: 6px;
        background-color: #C3504F;
        @include desktop() {
            width: 20%;
            height: 50px;
            margin: 0 auto;
        }
        &::after {
            font-family: 'FontAwesome';
            content: "\f054";
            position: absolute;
            top: 50%;
            right: 9%;
            margin-top: -12px;
            color: #FFFFFF;
        }
    }
    i {
        margin-right: 3%;
    }

    .c-btn_base {
        color: #FFFFFF;
        font-family: YuGothic;
        font-size: 3rem;
        font-weight: bold;
        letter-spacing: 2px;
        line-height: 12rem;
        text-decoration: none;
        @include desktop() {
            line-height: 50px;
            font-size: 16px;
        }
    }
</style>
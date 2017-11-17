<template>
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
</template>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";
    @import "~assets/scss/object/component/_button.scss";

    .contact_box {
        overflow: auto;
        padding: 5% 3% 2%;
        .c_border {
            margin-bottom: 3%;
        }
        .ttl {
            font-weight: 600;
            margin-bottom: 3%;
        }
    }

    .c-contactContainer {
        line-height: 1.6;
        padding: 0 14px;

        .p-intro {
            margin-top: 64px;
        }
    }

    .c_content_center {
        text-align: center;
    }
    .c-contact_sub_info {
        margin-bottom: 7%;
    }

    .c-contact_container {
        padding: 0 2%;
    }

    .c_border_content {
        border: 1px solid #C3504F;
    }

    .c_border {
        border: 1px solid #C3504F;
    }

    .c_modal_text {
        color: #C3504F;
    }

    .c_modal_text_number {
        font-family: YuGothic;
        font-size: 3rem;
        font-weight: bold;
        color: #C3504F;
    }
    .checkbox01-input {
        display: none;
    }

    .checkbox01-parts {
        padding-left: 26%;
        position: relative;
        margin-right: 30%;
    }

    .current {
        .checkbox01-parts::before {
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

    .checkbox01-parts::before {
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

    .current {
        .checkbox01-input:checked + .checkbox01-parts {
            color: #FFFFFF;
        }
    }

    .checkbox01-input:checked + .checkbox01-parts {
        color: #C3504F;
    }

    .checkbox01-input:checked + .checkbox01-parts::after {
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
</style>

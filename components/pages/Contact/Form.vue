<template>
    <div class="c-container">
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
</template>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";
    @import "~assets/scss/object/component/_button.scss";

    .p_form {
        margin-top: 7%;
        dt {
            margin-bottom: 1%;
        }
        dd {
            margin-bottom: 3%;
        }
        input, textarea {
            border: 1px solid #cacaca;
            padding: 2%;
            width: 100%;
            box-sizing: border-box;
            line-height: 1.2;
            font-size: 120%;
        }
    }
    .contact_sub {
        margin-bottom: 87px;
    }

    .p-contact_check {
    }

    .p_form_box {
        .c-link_anchor {
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
        .current {
            background-color: #C3504F;
            color: #FFFFFF;
        }
    }

    .p-contact {
        text-align: left;

    }

    .submit {
        text-align: center;
        width: 100%;
        font-size: 2rem;

    }

    .submit::after {
        font-family: 'FontAwesome';
        content: "\f054";
        position: absolute;
        top: 50%;
        right: 9%;
        margin-top: -12px;
        color: #FFFFFF;

    }


    i {
        margin-right: 3%;
    }

</style>
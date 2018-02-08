<template>
    <div class="c-container">
        <h2 class="p-intro">
            各種お問い合わせ
        </h2>
        <p class="p-intro--contact_sub_info">
            各種お問い合わせをご用意しております。お気軽にご利用ください。Webからのお問い合わせは以下のフォームをご利用ください。
        </p>
    </div>
</template>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";
    @import "~assets/scss/object/component/_button.scss";

    .p-intro {
        text-align: center;
        color: #393739;
        font-size: 1.3em;
        font-weight: bold;
        letter-spacing: .1em;
        line-height: 45px;
        padding-top: 1em;
        @include desktop() {
            font-size: 21px;
        }
        @media screen and (min-width: 768px) {
            font-size: 21px;
        }
        &--contact_sub_info {
            text-align: center;
            color: #393739;
            font-size: 1em;
            font-weight: 500;
            line-height: 2.5;
            padding: 1rem 2rem;
            @include desktop() {
                font-size: 16px;
                width: 540px;
                margin: 0 auto;
            }
            @media screen and (min-width: 768px) {
                font-size: 1.1em;
                line-height: 2em;
                width: 43%;
            }
        }
    }

</style>


<template>
    <div class="c-container">
        <h2 class="p-intro">
            各種お問い合わせ
        </h2>
        <p class="p-intro--contact_sub_info">
            各種お問い合わせをご用意しております。お気軽にご利用ください。
            Webからのお問い合わせは以下のフォームをご利用ください。
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
        font-family: YuGothic;
        font-size: 3.0rem;
        font-weight: bold;
        letter-spacing: 4px;
        line-height: 45px;
        padding-top: 3rem;
        @include desktop() {
            font-size: 20px;
        }
        &--contact_sub_info {
            text-align: center;
            color: #393739;
            font-size: 2.4rem;
            font-weight: 500;
            line-height: 4.8rem;
            padding: 1rem 2rem;
            @include desktop() {
                font-size: 16px;
                width: 540px;
                margin: 0 auto;
            }
        }
    }

</style>


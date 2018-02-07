<template>
    <div class="p-contact">
        <h1 class="p-contact--title">Contact</h1>
        <div class="p-contact--sub_info">
            Web制作にまつわるお悩み、ご相談はお気軽にchatboxまで。
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";
    @import "~assets/scss/object/component/_button.scss";

    .p-contact{
        @include c-container;
        margin-bottom: 2rem;
        @include desktop(){
            margin-top: 4rem;
        }
        &--title{
            @include c-title;
            font-size: 5rem;
            text-align: center;
        }
        &--sub_info{
            font-family:"YuGothic";
            font-size: 2.4rem;
            padding: .5rem 2rem;
            letter-spacing: .6rem;
            color: #2B292B;
            line-height: 5.5rem;
            text-align: center;
            @include desktop() {
                font-size: 16px;
            }
        }
    }
</style>

<template>
    <section class="p-modalConfirm">
        <div class="p-modalConfirm__inner">
            <div class="p-modalConfirm__contets">
                <h2 class="p-modalConfirm__ttl">確認</h2>
                <p class="p-modalConfirm__texts">フォームの内容を送信します。<br>
                    よろしければ、送信ボタンを押してください。</p>
                <div class="p-modalConfirm__btn">
                    <a href="#" class="p-modalConfirm__form">送信</a>
                    <a href="#" class="p-modalConfirm__back">戻る</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
    @import "~assets/scss/layout/_layout.scss";
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";
    @import "~assets/scss/object/component/_button.scss";

    .p-modalConfirm {
        z-index: 1000000;
        background: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        &__inner  {
            @include c-container;
            position: relative;
            top: 35%;
            text-align: center;
        }
        &__contets {
            display: inline-block;
            margin: 0 auto;
            padding: 30px;
            min-width: 500px;
            /*height: 540px;*/
            background: #fff;
            border-radius: 10px;
        }
        &__ttl{
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 5%;
        }
        &__texts{
            line-height: 2;
            margin-bottom: 5%;
        }
        &__form,&__back{
            display: inline-block;
            padding: 1.5rem;
            width: 40%;
            max-width: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-align: center;
            border-radius: 4px;
            color: #C3504F;
            font-size: 1.5rem;
            font-weight: bold;
            border:  1px solid #C3504F;
            background: #FFF;
            text-decoration: none;
            &:hover {
                color: #FFF;
                background-color: #C3504F;
            }
        }
        &__form{
            margin-right: 3%;
            display: inline-block;
        }
    }

</style>

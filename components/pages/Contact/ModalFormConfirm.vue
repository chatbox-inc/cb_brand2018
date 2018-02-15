<template>
    <section class="p-modalConfirm">
        <div class="p-modalConfirm__inner">
            <div class="p-modalConfirm__contets">
                <p>ココからコーディングをお願いします。</p>
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
        }
        &__contets {
            display: inline-block;
            margin: 0 auto;
            padding: 30px;
            min-width: 500px;
            background: #fff;
        }
    }

</style>

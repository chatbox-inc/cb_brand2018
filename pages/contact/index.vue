<template>
    <section class="container">
        <page-contact></page-contact>
    </section>
</template>

<script>

    import PageContact from '~/components/pages/Contact/index.vue'

    export default {
        components: {
            PageContact
        }
//    mounted () {
//      new WOW().init()
//    }
    }

</script>

<style lang="scss">
    @import "~assets/scss/app.scss";
</style>

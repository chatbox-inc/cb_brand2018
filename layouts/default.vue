<template>
  <div id="layout">
    <page-header></page-header>
    <nuxt/>
    <page-footer></page-footer>
  </div>
</template>


<script>
  import ModalForm from '~/components/pages/Contact/ModalForm.vue'
  import PageHeader from '~/components/Header.vue'
  import PageFooter from '~/components/Footer.vue'

  export default {
    components: {
      ModalForm,
      PageHeader,
      PageFooter
    },
    data () {
      return {}
    }
  }
</script>


<style lang="scss">
</style>

<template>
  <div id="layout">
    <modal-form-confirm></modal-form-confirm>
    <page-header></page-header>
    <nuxt/>
    <page-footer></page-footer>
  </div>
</template>


<script>
  import ModalFormConfirm from '~/components/pages/Contact/ModalFormConfirm.vue'
  import PageHeader from '~/components/Header.vue'
  import PageFooter from '~/components/Footer.vue'

  export default {
    components: {
      ModalFormConfirm,
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

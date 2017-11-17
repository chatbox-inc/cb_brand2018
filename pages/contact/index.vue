<template>
    <section class="container">
        <page-title></page-title>
        <page-info></page-info>
        <page-contact-box></page-contact-box>
        <page-form></page-form>
    </section>
</template>

<script>

  import PageContactBox from '~/components/pages/Contact/Info.vue'
  import PageTitle from '~/components/pages/Contact/Title.vue'
  import PageInfo from '~/components/pages/Contact/Info.vue'
  import PageForm from '~/components/pages/Contact/Form.vue'

  export default {
    components: {
      PageTitle,
      PageContactBox,
      PageInfo,
      PageForm
    }
  }

</script>

<style lang="scss" scoped>
    @import "~assets/scss/object/component/_container.scss";
    @import "~assets/scss/object/component/_title.scss";

    a:link {
        text-decoration: none;
    }

    .c_clear {
        clear: both;
    }

    /* css checkbox01 */
    /* content */
    /* contact */
    /* button */
    /* contact */
    /* pc */
    @media screen and (min-width: 768px) {
        .contact_box {
            overflow: hidden;
            .c_border {
                border-style: none;
            }
            .c_contact_sns_box {
                width: 60%;
                float: left;
            }
            .c-link {
                width: 48%;
                float: left;
                margin-right: 1%;
                a {
                    padding: 5% 10%;
                }
                &:first-child {
                    margin-left: 3%;
                }
            }
            .c_contact_tel_box {
                border-left: 1px solid #C3504F;
                width: 34%;
                float: left;
                margin-left: 3%;
                padding-bottom: 5%;
                .c_modal_text_number {
                    font-size: 3rem;
                }
            }
        }
        .p-contact_check {
            .c-link {
                width: 55%;
                margin: 0 auto;
            }
        }
        .p_form {
            margin-top: 7%;
            dt {
                margin-bottom: 1%;
                width: 10%;
                float: left;
                clear: both;
                text-align: right;
                margin-right: 3%;
            }
            dd {
                margin-bottom: 3%;
                width: 80%;
                float: left;
            }
            input, textarea {
                border: 1px solid #cacaca;
                padding: 2%;
                width: 100%;
                box-sizing: border-box;
                line-height: 1.2;
                font-size: 80%;
            }
        }
        .p-contact {
            text-align: center;
            .submit {
                width: 30%;
                margin: 0 auto;
                display: inline-block;
                position: relative;
            }
        }
    }
</style>

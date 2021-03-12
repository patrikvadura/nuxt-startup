<template>
  <b-row :id="id" class="flex-column">
    <div class="pb-2 mb-2 border-bottom">
      <h3>
        {{ categoryItemTitle }}
      </h3>
    </div>

    <template v-if="categoryItem.length > 1">
      <b-row cols-md="5" cols="2" class="mx-0 pb-2 mb-2 border-bottom">
        <div v-for="item in categoryItem" :key="item.title">
          <b-col class="downloads__item d-flex flex-column align-content-center">
            <CustomImage :image="item.image" />

            <div class="products__item--meta pt-2 d-flex flex-row">
              <p
                class="pr-1 font-weight-bold"
                v-html="$t('global.code') + ' ' + item.code"
              />

              <p
                v-html="$t('global.catalogPage') + ' ' + item.catalogPage"
              />
            </div>
          </b-col>
        </div>
      </b-row>
    </template>

    <template v-else>
      <b-row>
        <b-col cols="12">
          <h5 class="mt-1">
            {{ $t('global.noDownload') }}
          </h5>
        </b-col>
      </b-row>
    </template>
  </b-row>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true, default: '' },
    category: { type: String, required: true, default: '' }
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/downloads.json'),
      en: require('~/locales/en/downloads.json')
    }
  },

  computed: {
    categoryItem () {
      return this.$t(`downloads.schemes.${this.category}.items`)
    },

    categoryItemTitle () {
      return this.$t(`downloads.schemes.${this.category}.title`)
    }
  }
}
</script>

<style lang="scss" scoped>
.downloads {
  &__item {
    &--meta {
      p {
        font-size: $sm-font-size - .1;
      }
    }
  }
}
</style>

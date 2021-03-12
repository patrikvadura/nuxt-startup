<template>
  <div>
    <HeroBasic
      image="terms-and-conditions"
      :title="$t('terms.title')"
    />

    <template v-if="content.length > 1">
      <b-container class="terms d-flex justify-content-center">
        <b-row cols="1">
          <b-col>
            <div v-html="content" />
          </b-col>

          <b-col class="mt-5 d-flex justify-content-center">
            <CustomButton :title="$t('global.showMore')" @click="limit = null" />
          </b-col>
        </b-row>
      </b-container>
    </template>

    <template v-else>
      <b-container class="terms__noContent">
        <b-row>
          <h4>
            {{ $t('global.noTerms') }}
          </h4>
        </b-row>
      </b-container>
    </template>
  </div>
</template>

<script>
export default {
  components: {
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/terms.json'),
      en: require('~/locales/en/terms.json')
    }
  },

  data () {
    return {
      object: this.$t('terms.content'),
      limit: 2000
    }
  },

  computed: {
    description () {
      return this.$t('global.metaDescription').substring(0, 67)
    },
    content () {
      return this.limit ? this.object.substring(0, this.limit) : this.object
    }
  },

  head () {
    return {
      title: this.$t('terms.title') + ' | NIOB FLUID s.r.o.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description + '...'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.terms {
  padding: $spacer-xl 0;

  @include media-breakpoint-down(sm) {
    padding: $spacer-xl - 1 $spacer-lg;
  }

  ::v-deep h2 {
    padding-top: $spacer-xl - 1;
    font-size: $h3-font-size;
    font-weight: $font-weight-bold;
    color: $primary;

    &:first-child {
      padding-top: 0;
    }
  }

  ::v-deep p,
  ::v-deep ol li {
    text-align: justify;
  }

  &__noContent {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: $spacer-xl + 2 0;

    @include media-breakpoint-down(sm) {
      padding: $spacer-xl + 2 $spacer-lg;
    }
  }
}
</style>

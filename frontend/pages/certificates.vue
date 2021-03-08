<template>
  <div>
    <HeroBasic
      image="certicicates_header"
      :title="$t('certificates.title')"
    />

    <b-container class="certificates">
      <div v-for="item in $t('certificates.certificates')" :key="item.image">
        <b-row class="certificates__item align-items-center">
          <b-col md="2" cols="3">
            <CustomImage :image="item.image" folder="certificates" />
          </b-col>

          <b-col md="10" cols="9">
            <h4 v-html="item.title" />

            <div class="d-flex flex-row">
              <CustomButton
                v-if="item.fileCZ.length > 1"
                :title="$t('certificates.versionCZ')"
                :href="'/certificates/' + item.fileCZ + '.pdf'"
                class="certificates__item--action"
              />

              <CustomButton
                v-if="item.fileEN.length > 1"
                :title="$t('certificates.versionEN')"
                :href="'/certificates/' + item.fileEN + '.pdf'"
                class="certificates__item--action"
              />

              <CustomButton
                v-if="item.fileDE.length > 1"
                :title="$t('certificates.versionDE')"
                :href="'/certificates/' + item.fileDE + '.pdf'"
                class="certificates__item--action"
              />

              <CustomButton
                v-if="item.fileRU.length > 1"
                :title="$t('certificates.versionRU')"
                :href="'/certificates/' + item.fileRU + '.pdf'"
                class="certificates__item--action"
              />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  computed: {
    description () {
      return this.$t('global.metaDescription').substring(0, 67)
    }
  },

  head () {
    return {
      title: this.$t('certificates.title') + ' | NIOB FLUID s.r.o.',
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
.certificates {
  padding: $spacer-xl 0;

  @include media-breakpoint-down(sm) {
    padding: $spacer-xl - 1 $spacer-lg;
  }

  &__item {
    padding-bottom: $spacer-xl - 1;
    margin-bottom: $spacer-xl - 1;
    border-bottom: $border-light;

    h4 {
      font-weight: $font-weight-bold;
      color: $primary;
    }

    &--action {
      margin: $spacer-lg $spacer 0 0;
    }
  }
}
</style>

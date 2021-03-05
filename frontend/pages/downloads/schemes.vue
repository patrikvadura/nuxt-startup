<template>
  <div class="downloads">
    <HeroBasic
      image="hero_niob_03"
      :title="$t('downloads.schemes.title')"
    />

    <b-container class="downloads__content">
      <DownloadItemSchemes :id="$t('downloads.schemes.02.code')" category="02" />

      <DownloadItemSchemes :id="$t('downloads.schemes.03.code')" category="03" />

      <b-row class="downloads__footer">
        <b-col cols="12" class="d-flex flex-column flex-md-row justify-content-center">
          <CustomButton
            :title="$t('global.goBack')"
            onclick="history.back(-1)"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    HeroBasic: () => import('~/components/hero/HeroBasic'),
    DownloadItemSchemes: () => import('~/components/downloads/DownloadItemSchemes')
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/downloads.json'),
      en: require('~/locales/en/downloads.json')
    }
  },

  head () {
    return {
      title: this.$t('downloads.info.title') + ' | NIOB FLUID s.r.o.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.downloads {
  &__content {
    padding: $spacer-xl 0;

    @include media-breakpoint-down(sm) {
      padding: $spacer-xl - 1;
    }

    h3 {
      color: $primary;
    }
  }

  &__footer {
    padding-top: $spacer-xl;
    display: block;

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      padding: $spacer-lg;
    }
  }
}
</style>

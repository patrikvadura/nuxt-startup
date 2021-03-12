<template>
  <div class="downloads">
    <HeroBasic
      image="hero_niob_03"
      :title="$t('downloads.info.title')"
    />

    <b-container class="downloads__content">
      <b-row id="conversion-tables" class="flex-column">
        <div class="pb-2 mb-2 border-bottom">
          <h3>
            {{ $t('downloads.info.tables.title') }}
          </h3>
        </div>

        <div v-for="item in $t('downloads.info.tables.items')" :key="item.title">
          <b-row class="mx-0 pb-2 mb-2 border-bottom">
            <b-col md="6" cols="12" class="d-flex flex-row align-content-center">
              <h5 class="mt-1">
                {{ item.title }}
              </h5>
            </b-col>

            <b-col md="6" cols="12" class="d-flex flex-row align-content-center justify-content-start justify-content-md-end">
              <CustomButton :title="$t('global.show')" :href="localePath(item.url)" gray />

              <CustomButton
                :title="$t('global.download')"
                :href="'/tables/pdf/' + item.urlDownload + '.pdf'"
                download
                class="ml-1"
              />
            </b-col>
          </b-row>
        </div>
      </b-row>

      <b-row id="tech-information" class="pt-5 flex-column">
        <div class="pb-2 mb-2 border-bottom">
          <h3>
            {{ $t('downloads.info.info.title') }}
          </h3>
        </div>

        <template v-if="$t('downloads.info.info.items').length > 1">
          <div v-for="item in $t('downloads.info.info.items')" :key="item.title">
            <b-row class="mx-0 pb-2 mb-2 border-bottom">
              <b-col md="6" cols="12" class="d-flex flex-row align-content-center">
                <h5 class="mt-1">
                  {{ item.title }}
                </h5>
              </b-col>

              <b-col md="6" cols="12" class="d-flex flex-row align-content-center justify-content-start justify-content-md-end">
                <CustomButton :title="$t('global.show')" :href="localePath(item.url)" gray />

                <CustomButton :title="$t('global.download')" :href="item.urlDownload" download class="ml-1" />
              </b-col>
            </b-row>
          </div>
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
    HeroBasic: () => import('~/components/hero/HeroBasic')
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
    margin-top: $spacer-xl;
    padding-top: $spacer-xl;
    border-top: 1px solid rgba(0, 0, 0, .1);
    display: block;

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      padding: $spacer-lg;
    }
  }
}
</style>

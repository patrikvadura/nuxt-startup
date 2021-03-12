<template>
  <div class="downloads">
    <HeroBasic
      image="hero_niob_03"
      :title="$t('downloads.lists.title')"
    />

    <b-container class="downloads__content">
      <b-row class="flex-column">
        <div class="pb-2 mb-2 border-bottom">
          <h4>
            {{ $t('downloads.lists.title') }}
          </h4>
        </div>

        <div v-for="item in $t('downloads.lists.items')" :key="item.title">
          <a :href="item.url">
            <CustomIcon name="arrow-down-circle-fill" color="#0a6ace" class="mr-1" bootstrap />
            {{ item.title }}
          </a>
        </div>
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
    padding: 4rem 0;

    @include media-breakpoint-down(sm) {
      padding: 3rem;
    }

    a {
      color: $typo;

      ::v-deep .custom-icon {
        transform: translateY(.2rem);
      }
    }

    h4 {
      color: $primary;
    }
  }

  &__footer {
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 1px solid rgba(0, 0, 0, .1);
    display: block;

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      padding: 2rem 2rem;
    }
  }
}
</style>

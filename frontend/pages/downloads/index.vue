<template>
  <div class="downloads">
    <HeroBasic
      image="download"
      :title="$t('downloads.title')"
    />

    <b-container class="downloads__content">
      <b-row cols-md="3" cols="1">
        <b-col class="d-flex justify-content-center align-items-center">
          <div class="downloads__content--item">
            <CustomIcon name="book-half" scale="2" background bootstrap />

            <nuxt-link :to="localePath('/downloads/' + 'catalog')">
              <h4>
                {{ $t('downloads.catalog.title') }}
              </h4>
            </nuxt-link>
          </div>
        </b-col>

        <b-col class="d-flex justify-content-center align-items-center">
          <div class="downloads__content--item">
            <CustomIcon name="calculator-fill" scale="2" background bootstrap />

            <nuxt-link :to="localePath('/downloads/' + 'info')">
              <h4>
                {{ $t('downloads.info.title') }}
              </h4>
            </nuxt-link>
          </div>
        </b-col>

        <b-col class="d-flex justify-content-center align-items-center">
          <div class="downloads__content--item">
            <CustomIcon name="card-checklist" scale="2" background bootstrap />

            <nuxt-link :to="localePath('/downloads/' + 'schemes')">
              <h4>
                {{ $t('downloads.schemes.title') }}
              </h4>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="downloads__content--footer">
          <div class="pr-2">
            <CustomIcon name="chat-dots-fill" scale="2" color="#00a6eb" bootstrap />
          </div>

          <nuxt-link :to="localePath('/contact')">
            <h3>
              {{ $t('downloads.footer') }}
            </h3>
          </nuxt-link>
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
      title: this.$t('downloads.title') + ' | NIOB FLUID s.r.o.',
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
      padding: $spacer-md;
    }

    &--item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: $spacer-lg + $spacer;
      width: 100%;
      background: $black-05;

      @include border-radius($spacer-md);

      @include media-breakpoint-down(sm) {
        margin: $spacer 0;
        padding: $spacer-lg;
      }

      h4 {
        margin-top: $spacer-md;
        font-weight: 700;
      }
    }

    &--footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: $spacer-xl + 1;
      padding: 0 $spacer-lg;

      @include media-breakpoint-down(sm) {
        flex-direction: column;
        justify-content: center;
        margin-top: $spacer-lg;
      }

      h3 {
        font-weight: $font-weight-bold;

        @include media-breakpoint-down(sm) {
          padding-top: $spacer-md;
        }
      }
    }
  }
}
</style>

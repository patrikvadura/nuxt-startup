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
            <CustomIcon name="card-checklist" scale="2" background bootstrap />

            <nuxt-link :to="localePath('/downloads/' + 'lists')">
              <h4>
                {{ $t('downloads.lists.title') }}
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
    padding: 4rem 0;

    @include media-breakpoint-down(sm) {
      padding: 1rem;
    }

    &--item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2.5rem;
      width: 100%;
      background: rgba(0, 0, 0, .05);

      @include border-radius(1rem);

      @include media-breakpoint-down(sm) {
        margin: .5rem 0;
        padding: 2rem;
      }

      h4 {
        margin-top: 1rem;
        font-weight: 700;
      }
    }

    &--footer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: 5rem;
      padding: 0 2rem;

      @include media-breakpoint-down(sm) {
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
      }

      h3 {
        font-weight: 700;

        @include media-breakpoint-down(sm) {
          padding-top: 1rem;
        }
      }
    }
  }
}
</style>

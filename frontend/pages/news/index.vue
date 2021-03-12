<template>
  <div class="news">
    <HeroBasic
      video="https://st3.depositphotos.com/1040130/13520/v/600/depositphotos_135207336-stock-video-technical-equipment-at-diary-plant.mp4"
      :title="$t('news.title')"
    />

    <template v-if="numberItems.length > 0">
      <b-container class="news__content">
        <b-row>
          <div
            v-for="post in numberItems"
            :key="post.id"
            class="news__content--item"
          >
            <b-col cols="12">
              <div class="d-flex justify-content-start justify-content-md-end">
                <h5>
                  {{ $t('global.newestArticle') }}
                </h5>
              </div>

              <div class="d-flex flex-row align-items-center">
                <div class="news__content--image">
                  <CustomImage :image="post.preview" folder="fakeapi/products" grayscale />
                </div>

                <div>
                  <nuxt-link :to="localePath('/news/' + post.id)">
                    <h3>
                      {{ post.title }}
                    </h3>
                  </nuxt-link>

                  <span>
                    {{ post.category }}
                  </span>

                  <p v-html="post.content.substring(0, 150)" />

                  <nuxt-link :to="localePath('/news/' + post.id)">
                    <CustomButton :title="$t('global.showMore')" gray />
                  </nuxt-link>
                </div>
              </div>
            </b-col>
          </div>
        </b-row>

        <b-row class="news__content--showMore justify-content-center">
          <CustomButton :title="$t('global.showMore')" @click="limit = null" />
        </b-row>
      </b-container>
    </template>

    <template v-else>
      <b-container class="news__noContent">
        <b-row>
          <h4>
            {{ $t('global.noNews') }}
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
      cs: require('~/locales/cs/news.json'),
      en: require('~/locales/en/news.json')
    }
  },

  data () {
    return {
      object: this.$t('news.posts'),
      limit: 5
    }
  },

  computed: {
    numberItems () {
      return this.limit ? this.object.slice(0, this.limit) : this.object
    }
  },

  head () {
    return {
      title: this.$t('news.title') + ' | NIOB FLUID s.r.o.',
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
.news {
  &__content {
    padding: $spacer-xl 0;

    @include media-breakpoint-down(sm) {
      padding: 0 0 $spacer-xl - 1 0;
    }

    &--item {
      margin-top: $spacer-xl - 1;
      padding: 0 $spacer-lg;

      @include media-breakpoint-down(sm) {
        padding: 0 $spacer-lg;
      }

      h2 {
        padding-bottom: $spacer-md;
      }

      h5 {
        display: none;
      }

      span {
        line-height: $line-height-md;
        font-weight: $font-weight-bold;
      }

      &:first-child {
        margin-top: 0;
        padding: $spacer-xl - 1 $spacer-lg;
        background: $black-05;

        @include border-radius($spacer-md);

        @include media-breakpoint-down(sm) {
          padding: $spacer-lg;

          @include border-radius(0);
        }

        h5 {
          padding-bottom: $spacer;
          display: block;
          color: $primary;

          @include media-breakpoint-down(sm) {
            padding-bottom: $spacer-md;
          }
        }
      }
    }

    &--showMore {
      padding-top: $spacer-xl + 1;
    }

    &--image {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: $spacer-lg - $spacer;
      padding: $spacer;
      width: $spacer-xxl;
      height: $spacer-xxl;
      background: $white;
      object-fit: contain;

      @include border-radius($spacer);

      @include media-breakpoint-down(sm) {
        display: none;
      }

      ::v-deep img {
        width: $spacer-xxl;
        height: $spacer-xxl;
        object-fit: contain;

        @include media-breakpoint-down(sm) {
          height: $spacer-xxl + 5;
        }
      }
    }
  }

  &__noContent {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: $spacer-xxl - 4 0;

    @include media-breakpoint-down(sm) {
      padding: $spacer-xxl - 4 $spacer-lg;
    }
  }
}
</style>

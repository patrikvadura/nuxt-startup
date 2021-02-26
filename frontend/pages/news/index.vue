<template>
  <div class="news">
    <HeroBasicVideo
      video="https://st3.depositphotos.com/1040130/13520/v/600/depositphotos_135207336-stock-video-technical-equipment-at-diary-plant.mp4"
      :title="$t('news.title')"
    />

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
                  <CustomButton :title="$t('global.showMore')" />
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
  </div>
</template>

<script>
export default {
  components: {
    HeroBasicVideo: () => import('~/components/hero/HeroBasicVideo')
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
    padding: 4rem 0;

    @include media-breakpoint-down(sm) {
      padding: 0 0 3rem 0;
    }

    &--item {
      margin-top: 3rem;
      padding: 0 2rem;

      @include media-breakpoint-down(sm) {
        padding: 0 2rem;
      }

      h2 {
        padding-bottom: 1rem;
      }

      h5 {
        display: none;
      }

      span {
        line-height: 2rem;
        font-weight: 500;
      }

      &:first-child {
        margin-top: 0;
        padding: 3rem 2rem;
        background: rgba(0, 0, 0, .05);

        @include border-radius(1rem);

        @include media-breakpoint-down(sm) {
          padding: 2rem 2rem;

          @include border-radius(0);
        }

        h5 {
          padding-bottom: 1rem;
          display: block;
          color: $primary;
        }
      }
    }

    &--showMore {
      padding-top: 5rem;
    }

    &--image {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1.5rem;
      padding: .5rem;
      width: 10rem;
      height: 10rem;
      background: #fff;
      object-fit: contain;

      @include border-radius(.5rem);

      @include media-breakpoint-down(sm) {
        display: none;
      }

      ::v-deep img {
        width: 10rem;
        height: 10rem;
        object-fit: contain;

        @include media-breakpoint-down(sm) {
          height: 15rem;
        }
      }
    }
  }
}
</style>

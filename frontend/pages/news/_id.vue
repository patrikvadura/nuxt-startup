<template>
  <div class="products">
    <HeroBasicVideo
      video="https://st3.depositphotos.com/1040130/13520/v/600/depositphotos_135207336-stock-video-technical-equipment-at-diary-plant.mp4"
      :title="post.title"
    />

    <b-container class="products__content">
      <b-row>
        <b-col md="7" cols="12">
          <p class="products__content--perex" v-html="post.perex" />
          <p v-html="post.content" />
        </b-col>

        <b-col md="5" cols="12" class="products__content--image">
          <CustomImage :image="post.preview" folder="fakeapi/products" />
        </b-col>
      </b-row>

      <b-row class="products__footer">
        <b-col cols="12" class="d-flex flex-column flex-md-row justify-content-center">
          <CustomButton
            :title="$t('global.goHome')"
            :href="localePath('/')"
            class="mr-0 mr-md-2"
            secondary
          />

          <CustomButton
            :title="$t('global.backNews')"
            :href="localePath('/news')"
            class="mt-2 mt-md-0"
          />
        </b-col>
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
      id: this.$route.params.id
    }
  },

  computed: {
    post () {
      return this.$t('news.posts').find(post => post.id === this.id)
    },

    description () {
      return this.post.content.substring(0, 67)
    }
  },

  head () {
    return {
      title: this.post.title + ' | News' + ' | NIOB FLUID s.r.o.',
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

<style lang="scss">
.products {
  &__content {
    padding: 4rem 0;

    @include media-breakpoint-down(sm) {
      padding: 3rem 2rem;
    }

    b {
      color: $primary;
    }

    &--perex {
      font-size: 1.2rem;
    }

    &--image {
      display: flex;
      justify-content: center;
      align-items: center;

      @include media-breakpoint-down(sm) {
        margin-top: 2rem;
      }

      img {
        width: auto;
        height: 20rem;

        @include media-breakpoint-down(sm) {
          height: 15rem;
        }
      }
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

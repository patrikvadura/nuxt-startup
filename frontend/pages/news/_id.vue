<template>
  <div class="news">
    <HeroBasic
      video="https://st3.depositphotos.com/1040130/13520/v/600/depositphotos_135207336-stock-video-technical-equipment-at-diary-plant.mp4"
      :title="post.title"
    />

    <b-container class="news__content">
      <b-row>
        <b-col md="7" cols="12">
          <p
            class="products__content--perex"
            v-html="post.perex"
          />
          <p
            v-html="post.content"
          />
        </b-col>

        <b-col md="5" cols="12" class="news__content--image">
          <CustomImage
            :image="post.preview"
            folder="fakeapi/products"
          />
        </b-col>
      </b-row>

      <NewsTable
        :title="post.info.title"
        :code="post.info.code"
        :scheme="post.scheme"
        :table="post.info.table"
        :table-fields="post.info.fields"
        :catalog="post.info.catalog"
        :catalog-page="post.info.catalogPage"
      />

      <b-row class="news__footer">
        <b-col cols="12" class="d-flex flex-column flex-md-row justify-content-center">
          <CustomButton
            :title="$t('global.goHome')"
            :href="localePath('/')"
            class="mr-0 mr-md-2"
            gray
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
    HeroBasic: () => import('~/components/hero/HeroBasic'),
    NewsTable: () => import('~/components/news/NewsTable')
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

<style lang="scss" scoped>
.news {
  &__content {
    padding: $spacer-xl 0;

    @include media-breakpoint-down(sm) {
      padding: $spacer-xl - 1 $spacer-lg;
    }

    b {
      color: $primary;
    }

    &--perex {
      font-size: $h5-font-size;
    }

    &--image {
      display: flex;
      justify-content: center;
      align-items: center;

      @include media-breakpoint-down(sm) {
        margin-top: $spacer-lg;
      }

      img {
        width: auto;
        height: $spacer-xxl * 2;

        @include media-breakpoint-down(sm) {
          height: $spacer-xxl + 5;
        }
      }
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

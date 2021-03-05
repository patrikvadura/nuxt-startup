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

      <b-row class="news__info">
        <b-col v-if="post.info.title.length > 1" cols="12" class="pb-3">
          <h4>
            {{ post.info.title }}
            <span class="pl-1 ml-1 border-left">
              {{ post.info.code }}
            </span>
          </h4>
        </b-col>
        <b-col md="4" cols="12">
          <CustomImage :image="post.scheme" folder="news/schemes" />
        </b-col>

        <b-col md="8" cols="12">
          <b-table
            :items="post.info.table"
            :fields="post.info.fields"
          />
        </b-col>

        <b-col cols="12" class="news__info--footer pt-3 d-flex justify-content-center">
          <h4
            v-if="post.info.catalog.length > 1 || post.info.catalogPage.length > 1"
            secondary
            v-html="$t('global.productWhereFind') + ' : ' + post.info.catalog + ' / ' + $t('global.catalogPage') + ' ' + post.info.catalogPage"
          />
        </b-col>
      </b-row>

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

  &__info {
    h4 {
      span {
        margin-left: $spacer-md;
        padding-left: $spacer-md;
        border-left: 1px solid rgba(0, 0, 0, .1);
        color: $primary;
        font-weight: $font-weight-bold;
      }
    }

    &--footer {
      h4 {
        color: $primary;
        font-weight: $font-weight-bold;
      }
    }

    ::v-deep .table thead th {
      vertical-align: bottom;
      background: $primary;
      color: $white;
      border: none;
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

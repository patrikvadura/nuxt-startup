<template>
  <div class="products">
    <HeroBasicVideo
      video="https://st3.depositphotos.com/1040130/13520/v/600/depositphotos_135207336-stock-video-technical-equipment-at-diary-plant.mp4"
      :title="post.title"
    />

    <b-container class="products__content">
      <b-row>
        <b-col md="7" cols="12">
          <p v-html="post.content" />
        </b-col>

        <b-col md="5" cols="12" class="products__content--image">
          <CustomImage :image="post.preview" folder="fakeapi/products" />
        </b-col>
      </b-row>

      <b-row class="products__footer">
        <b-col md="3" cols="12" class="products__footer--item">
          <h4>
            {{ $t('global.downloadCatalog') }}
          </h4>
          <nuxt-link :to="localePath(post.downloadItem)">
            <CustomButton :title="$t('global.download')" />
          </nuxt-link>
        </b-col>

        <b-col md="3" cols="12" class="products__footer--item">
          <h4>
            {{ $t('global.techTables') }}
          </h4>
          <div v-html="post.tables" />
        </b-col>

        <b-col md="3" cols="12" class="products__footer--item">
          <h4>
            {{ $t('global.techInfo') }}
          </h4>
          <div v-html="post.info" />
        </b-col>

        <b-col md="3" cols="12" class="products__footer--item">
          <h4>
            {{ $t('global.techSchemes') }}
          </h4>
          <div v-html="post.schemes" />
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
      cs: require('~/locales/cs/products.json'),
      en: require('~/locales/en/products.json')
    }
  },

  data () {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    post () {
      return this.$t('products.posts').find(post => post.id === this.id)
    },

    description () {
      return this.post.content.substring(0, 67)
    }
  },

  head () {
    return {
      title: this.post.title + ' | NIOB FLUID s.r.o.',
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

    &--item {
      padding-left: 2rem;
      border-right: 1px solid rgba(0, 0, 0, .1);

      @include media-breakpoint-down(sm) {
        margin: 1rem 0;
        padding-left: 1rem;
        text-align: center;
        border-right: none;
      }

      h4 {
        color: $primary;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>

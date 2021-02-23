<template>
  <div class="products">
    <HeroBasicVideo
      video="https://st3.depositphotos.com/1040130/13520/v/600/depositphotos_135207336-stock-video-technical-equipment-at-diary-plant.mp4"
      :title="post.title"
    />

    <b-container class="products__content">
      <b-row>
        <b-col cols="7">
          <div v-html="post.content" />
        </b-col>

        <b-col cols="5" class="products__content--image">
          <CustomImage :image="post.preview" folder="fakeapi/products" />
        </b-col>
      </b-row>

      <b-row class="products__footer">
        <b-col class="products__footer--item">
          <h4>
            {{ $t('global.downloadCatalog') }}
          </h4>
          <div v-html="post.downloadItem" />
        </b-col>

        <b-col class="products__footer--item">
          <h4>
            {{ $t('global.techTables') }}
          </h4>
          <div v-html="post.tables" />
        </b-col>

        <b-col class="products__footer--item">
          <h4>
            {{ $t('global.techInfo') }}
          </h4>
          <div v-html="post.info" />
        </b-col>

        <b-col class="products__footer--item">
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

    b {
      color: $primary;
    }

    &--image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: auto;
        height: 20rem;
      }
    }
  }

  &__footer {
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 1px solid rgba(0, 0, 0, .1);

    &--item {
      margin-right: 1rem;
      border-right: 1px solid rgba(0, 0, 0, .1);

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

<template>
  <div class="products">
    <HeroBasic
      :image="post.hero"
      :title="post.title"
    />

    <b-container class="products__content">
      <b-row>
        <b-col md="7" cols="12">
          <p v-html="post.content" />
        </b-col>

        <b-col md="5" cols="12" class="products__content--image">
          <CustomImage :image="post.preview" folder="products" />
        </b-col>
      </b-row>

      <b-row class="products__footer">
        <b-col md="3" cols="12" class="products__footer--item">
          <h4>
            {{ $t('global.downloadCatalog') }}
          </h4>

          <ProductsDownload
            :czech="post.downloadItem.czech"
            :english="post.downloadItem.english"
            :german="post.downloadItem.german"
            :russian="post.downloadItem.russian"
          />
        </b-col>

        <template v-if="post.tables.length > 0">
          <b-col md="3" cols="12" class="products__footer--item">
            <h4>
              {{ $t('global.techTables') }}
            </h4>
            <div
              v-for="table in post.tables"
              :key="table.title"
            >
              <nuxt-link :to="localePath(table.url)">
                {{ table.title }}
              </nuxt-link>
            </div>
          </b-col>
        </template>

        <template v-if="post.info.length > 0">
          <b-col md="3" cols="12" class="products__footer--item">
            <h4>
              {{ $t('global.techInfo') }}
            </h4>
            <div
              v-for="info in post.info"
              :key="info.title"
            >
              <nuxt-link :to="localePath(info.url)">
                {{ info.title }}
              </nuxt-link>
            </div>
          </b-col>
        </template>

        <template v-if="post.schemes.length > 0">
          <b-col md="3" cols="12" class="products__footer--item">
            <h4>
              {{ $t('global.techSchemes') }}
            </h4>
            <div
              v-for="schemes in post.schemes"
              :key="schemes.title"
            >
              <nuxt-link :to="localePath(schemes.url)">
                {{ schemes.title }}
              </nuxt-link>
            </div>
          </b-col>
        </template>
      </b-row>

      <b-row class="products__actions">
        <b-col cols="12" class="d-flex flex-column flex-md-row justify-content-center">
          <CustomButton
            :title="$t('global.goBack')"
            gray
            onclick="history.back(-1)"
            class="mr-0 mr-md-2"
          />

          <CustomButton
            :title="$t('global.goHome')"
            :href="localePath('/')"
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
    ProductsDownload: () => import('~/components/products/ProductsDownload')
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

<style lang="scss" scoped>
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

  &__actions {
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

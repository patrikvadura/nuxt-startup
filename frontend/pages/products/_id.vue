<template>
  <div class="products">
    <HeroBasic
      :image="post.hero"
      :title="post.title"
      :before="post.before"
      :after="post.after"
      :href-before="post.hrefBefore"
      :href-after="post.hrefAfter"
    />

    <b-container class="products__content">
      <b-row>
        <b-col md="7" cols="12">
          <p v-if="post.content.length > 1" v-html="post.content" />
          <p v-else v-html="$t('global.noText')" />
        </b-col>

        <b-col md="5" cols="12" class="products__content--image">
          <CustomImage :image="post.preview" folder="products" lightbox />
        </b-col>
      </b-row>

      <template v-if="post.gallery">
        <div class="products__gallery">
          <h4>
            {{ $t('global.gallery') }}
          </h4>

          <b-row cols-md="5" cols="12">
            <div v-for="gallery in post.gallery" :key="gallery.image">
              <b-col>
                <CustomImage
                  :image="gallery.image"
                  folder="products"
                  lightbox
                />

                <div class="products__gallery--badge">
                  <CustomBadge
                    v-if="gallery.code.length > 1"
                    :title="$t('global.code') + ' ' + gallery.code"
                  />

                  <CustomBadge
                    v-if="gallery.catalog.length > 1 || gallery.catalogPage.length > 1"
                    :title="gallery.catalog + ' / ' + $t('global.catalogPage') + ' ' + gallery.catalogPage"
                    secondary
                  />
                </div>
              </b-col>
            </div>
          </b-row>
        </div>
      </template>

      <b-row class="products__footer">
        <b-col md="3" cols="12" class="products__footer--item">
          <h4>
            {{ $t('global.catalog') }} <span>{{ post.title }}</span> {{ $t('global.forDownload') }}
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
              v-for="table in post.tables.slice(0,3)"
              :key="table.title"
            >
              <nuxt-link :to="localePath('/downloads/info#' + table.url)">
                {{ table.title }}
              </nuxt-link>
            </div>

            <nuxt-link :to="localePath('/downloads/info#conversion-tables')">
              <span>
                {{ $t('global.showMore') }}
              </span>
            </nuxt-link>
          </b-col>
        </template>

        <template v-if="post.info.length > 0">
          <b-col md="3" cols="12" class="products__footer--item">
            <h4>
              {{ $t('global.techInfo') }}
            </h4>
            <div
              v-for="info in post.info.slice(0,3)"
              :key="info.title"
            >
              <nuxt-link :to="localePath('/downloads/info#' + info.url)">
                {{ info.title }}
              </nuxt-link>
            </div>

            <nuxt-link :to="localePath('/downloads/info#tech-information')">
              <span>
                {{ $t('global.showMore') }}
              </span>
            </nuxt-link>
          </b-col>
        </template>

        <b-col md="3" cols="12" class="products__footer--item">
          <h4>
            {{ $t('global.techSchemes') }}
          </h4>

          <nuxt-link :to="localePath('/downloads/schemes#' + id)">
            <CustomButton :title="$t('global.show')" />
          </nuxt-link>
        </b-col>
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
    padding: $spacer-xl 0;

    @include media-breakpoint-down(sm) {
      padding: $spacer-xl - 1 $spacer-lg;
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
        height: $spacer-xl * 5;

        @include media-breakpoint-down(sm) {
          height: $spacer-xl * 4;
        }
      }
    }
  }

  &__gallery {
    margin-top: $spacer-xl - 1;
    padding: $spacer-lg;
    background: $black-05;

    h4 {
      margin-bottom: $spacer-md;
      color: $primary;
    }

    &--badge {
      position: absolute;
      bottom: 0;
      left: $spacer-md;
      padding: $spacer;
    }
  }

  &__footer {
    margin-top: $spacer-xl;
    padding-top: $spacer-xl;
    border-top: 1px solid $black-10;

    &--item {
      padding-left: $spacer-lg;
      border-right: 1px solid $black-10;

      @include media-breakpoint-down(sm) {
        margin: $spacer-md 0;
        padding-left: $spacer-md;
        text-align: center;
        border-right: none;
      }

      h4 {
        color: $primary;
        line-height: $line-height-base;
        padding-bottom: 1rem;
      }

      span {
        font-weight: $font-weight-bold;
      }

      a {
        span {
          font-weight: $font-weight-bold;
          line-height: $line-height-lg;
        }
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  &__actions {
    margin-top: $spacer-xl;
    padding-top: $spacer-xl;
    border-top: 1px solid $black-10;
    display: block;

    @include media-breakpoint-down(sm) {
      display: flex;
      flex-direction: column;
      padding: $spacer-lg;
    }
  }
}
</style>

<template>
  <b-row class="news-table">
    <b-col v-if="title.length > 1" cols="12" class="pb-3">
      <h4>
        {{ title }}
        <span class="pl-1 ml-1 border-left">
          {{ code }}
        </span>
      </h4>
    </b-col>
    <b-col md="4" cols="12">
      <CustomImage :image="scheme" folder="news/schemes" lightbox />
    </b-col>

    <b-col md="8" cols="12">
      <b-table
        :items="table"
        :fields="tableFields"
      />
    </b-col>

    <b-col cols="12" class="news-table__footer pt-5 d-flex justify-content-center">
      <CustomButton
        v-if="catalog.length > 1 || catalogPage.length > 1"
        :href="'/catalog/'+ catalog + '.pdf#page=' + catalogPage "
        :title="$t('global.showInCatalog')"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    code: {
      type: String,
      required: false,
      default: ''
    },
    scheme: {
      type: String,
      required: false,
      default: ''
    },
    table: {
      type: String,
      required: false,
      default: ''
    },
    tableFields: {
      type: String,
      required: false,
      default: ''
    },
    catalog: {
      type: String,
      required: false,
      default: ''
    },
    catalogPage: {
      type: String,
      required: false,
      default: ''
    }
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/news.json'),
      en: require('~/locales/en/news.json')
    }
  }
}
</script>

<style lang="scss" scoped>
.news-table {
  margin-top: $spacer-xl;
  padding-top: $spacer-xl;
  border-top: $border-light;

  h4 {
    span {
      margin-left: $spacer-md;
      padding-left: $spacer-md;
      border-left: $border-light;
      color: $primary;
      font-weight: $font-weight-bold;
    }
  }

  img {
    width: auto;
    height: $spacer-xxl * 2.5;
  }

  &__footer {
    h4 {
      padding-top: $spacer-lg;
      color: $primary;
      font-weight: $font-weight-bold;
    }
  }

  ::v-deep .table {
    text-align: center;

    thead {
      vertical-align: bottom;
      background: $primary;
      color: $white;
      border: none;
    }

    td {
      padding: $spacer-sm;
      border: $border-light;
    }
  }
}
</style>

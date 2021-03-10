<template>
  <b-row class="tables-table">
    <b-col cols="12">
      <b-table
        :items="table"
        :fields="tableFields"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    table: {
      type: String,
      required: false,
      default: ''
    },
    tableFields: {
      type: String,
      required: false,
      default: ''
    }
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/tables.json'),
      en: require('~/locales/en/tables.json')
    }
  }
}
</script>

<style lang="scss" scoped>
.tables-table {
  @include media-breakpoint-down(sm) {
    overflow-x: scroll;
  }

  ::v-deep .table {
    text-align: center;
    font-size: $base-font-size;

    thead {
      vertical-align: middle;
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

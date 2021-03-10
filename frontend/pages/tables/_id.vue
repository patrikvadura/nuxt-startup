<template>
  <div class="table">
    <HeroBasic
      image="hero_niob_03"
      :title="post.title"
    />

    <b-container class="table__content">
      <b-row>
        <b-col v-if="post.description.length > 1" cols="12" class="pb-3 mb-3 border-bottom">
          <p v-html="post.description" />
        </b-col>

        <b-col cols="12">
          <TablesTable
            :table="post.table"
            :table-fields="post.fields"
          />
        </b-col>

        <b-col v-if="post.note.length > 1" cols="12" class="pt-3 mt-3 border-top">
          <p v-html="post.note" />
        </b-col>
      </b-row>

      <b-row class="table__actions">
        <b-col cols="12" class="d-flex flex-column flex-md-row justify-content-center">
          <CustomButton
            :title="$t('global.goBack')"
            gray
            onclick="history.back(-1)"
            class="mr-0 mr-md-2"
          />

          <CustomButton
            :title="$t('global.download') + ' ' + '.xls'"
            :href="'/tables/xls/' + post.filename + '.xls'"
            class="mr-0 mr-md-2 mt-2 mt-md-0"
            download
          />

          <CustomButton
            :title="$t('global.download') + ' ' + '.pdf'"
            :href="'/tables/pdf/' + post.filename + '.pdf'"
            class="mt-2 mt-md-0"
            download
            secondary
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
    TablesTable: () => import('~/components/tables/TablesTable')
  },

  i18n: {
    messages: {
      cs: require('~/locales/cs/tables.json'),
      en: require('~/locales/en/tables.json')
    }
  },

  data () {
    return {
      id: this.$route.params.id
    }
  },

  computed: {
    post () {
      return this.$t('tables.tables').find(post => post.id === this.id)
    },

    description () {
      return this.$t('global.metaDescription').substring(0, 67)
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
.table {
  &__content {
    padding: $spacer-xl 0;

    @include media-breakpoint-down(sm) {
      padding: $spacer-xl - 1 $spacer-lg;
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

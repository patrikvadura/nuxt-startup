<template>
  <div class="products-download">
    <b-row id="header">
      <b-col cols="12">
        <b-row cols="4">
          <b-col class="products-download__item">
            {{ $t('global.header.navLinks.catalogs.table.czechShortcut') }}
          </b-col>

          <b-col class="products-download__item">
            {{ $t('global.header.navLinks.catalogs.table.englishShortcut') }}
          </b-col>

          <b-col class="products-download__item">
            {{ $t('global.header.navLinks.catalogs.table.germanShortcut') }}
          </b-col>

          <b-col class="products-download__item">
            {{ $t('global.header.navLinks.catalogs.table.russianShortcut') }}
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row
      id="content"
    >
      <b-col cols="12">
        <b-row cols="4">
          <b-col class="products-download__item">
            <a :href="czech">
              <template v-if="czech.length > 6">
                <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
              </template>

              <template v-else>
                <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
              </template>
            </a>
          </b-col>

          <b-col class="products-download__item">
            <a :href="english">
              <template v-if="english.length > 6">
                <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
              </template>

              <template v-else>
                <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
              </template>
            </a>
          </b-col>

          <b-col class="products-download__item">
            <a :href="german">
              <template v-if="german.length > 6">
                <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
              </template>

              <template v-else>
                <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
              </template>
            </a>
          </b-col>

          <b-col class="products-download__item">
            <a :href="russian">
              <template v-if="russian.length > 6">
                <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
              </template>

              <template v-else>
                <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
              </template>
            </a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    czech: {
      type: String,
      required: true,
      default: ''
    },
    english: {
      type: String,
      required: false,
      default: ''
    },
    german: {
      type: String,
      required: false,
      default: ''
    },
    russian: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.products-download {
  padding: 0;

  #header {
    .products-download__item {
      font-weight: 600;
    }
  }

  #content {
    .products-download__item {
      padding-top: .5rem;
    }
  }
}
</style>

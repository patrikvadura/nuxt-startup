<template>
  <div class="downloads">
    <HeroBasic
      image="hero_niob_01"
      :title="$t('downloads.catalog.title')"
    />

    <b-container class="downloads__content">
      <b-row id="header">
        <b-col cols="5">
          <div class="downloads__content--item">
            <div>
              {{ $t('global.header.navLinks.catalogs.table.title') }}
            </div>
          </div>
        </b-col>

        <b-col cols="7">
          <b-row cols="4">
            <b-col class="downloads__content--item d-flex justify-content-center">
              <div>
                <template v-if="!$device.isMobile">
                  {{ $t('global.header.navLinks.catalogs.table.czech') }}
                </template>

                <template v-else>
                  {{ $t('global.header.navLinks.catalogs.table.czechShortcut') }}
                </template>
              </div>
            </b-col>

            <b-col class="downloads__content--item d-flex justify-content-center">
              <div>
                <template v-if="!$device.isMobile">
                  {{ $t('global.header.navLinks.catalogs.table.english') }}
                </template>

                <template v-else>
                  {{ $t('global.header.navLinks.catalogs.table.englishShortcut') }}
                </template>
              </div>
            </b-col>

            <b-col class="downloads__content--item d-flex justify-content-center">
              <div>
                <template v-if="!$device.isMobile">
                  {{ $t('global.header.navLinks.catalogs.table.german') }}
                </template>

                <template v-else>
                  {{ $t('global.header.navLinks.catalogs.table.germanShortcut') }}
                </template>
              </div>
            </b-col>

            <b-col class="downloads__content--item d-flex justify-content-center">
              <div>
                <template v-if="!$device.isMobile">
                  {{ $t('global.header.navLinks.catalogs.table.russian') }}
                </template>

                <template v-else>
                  {{ $t('global.header.navLinks.catalogs.table.russianShortcut') }}
                </template>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row
        v-for="item in $t('global.header.navLinks.catalogs.table.content')"
        id="content"
        :key="item.id"
      >
        <b-col cols="5">
          <div class="megamenu__dropdown--item">
            <div>
              {{ item.title }}
            </div>
          </div>
        </b-col>

        <b-col cols="7">
          <b-row cols="4">
            <b-col class="downloads__content--item d-flex justify-content-center">
              <a :href="item.czech">
                <template v-if="item.czech.length > 6">
                  <CustomIcon name="arrow-down-circle-fill" color="#0a6ace" bootstrap />
                </template>

                <template v-else>
                  <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                </template>
              </a>
            </b-col>

            <b-col class="downloads__content--item d-flex justify-content-center">
              <a :href="item.english">
                <template v-if="item.english.length > 6">
                  <CustomIcon name="arrow-down-circle-fill" color="#0a6ace" bootstrap />
                </template>

                <template v-else>
                  <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                </template>
              </a>
            </b-col>

            <b-col class="downloads__content--item d-flex justify-content-center">
              <a :href="item.german">
                <template v-if="item.german.length > 6">
                  <CustomIcon name="arrow-down-circle-fill" color="#0a6ace" bootstrap />
                </template>

                <template v-else>
                  <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                </template>
              </a>
            </b-col>

            <b-col class="downloads__content--item d-flex justify-content-center">
              <a :href="item.russian">
                <template v-if="item.russian.length > 6">
                  <CustomIcon name="arrow-down-circle-fill" color="#0a6ace" bootstrap />
                </template>

                <template v-else>
                  <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                </template>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="downloads__footer">
        <b-col cols="12" class="d-flex flex-column flex-md-row justify-content-center">
          <CustomButton
            :title="$t('global.goBack')"
            onclick="history.back(-1)"
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
      cs: require('~/locales/cs/downloads.json'),
      en: require('~/locales/en/downloads.json')
    }
  },

  head () {
    return {
      title: this.$t('downloads.catalog.title') + ' | NIOB FLUID s.r.o.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.downloads {
  &__content {
    padding: 4rem 0;

    @include media-breakpoint-down(sm) {
      padding: 3rem;
    }

    #header {
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      font-size: 1.2rem;
      font-weight: 700;
      color: $primary;

      .downloads__content--item {
        padding: 0;
      }
    }

    #content {
      align-items: center;
      font-size: 1rem;

      ::v-deep .custom-icon {
        font-size: 1.2rem;
      }

      .downloads__content--item {
        padding: 1rem 0;
      }
    }
  }

  &__footer {
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

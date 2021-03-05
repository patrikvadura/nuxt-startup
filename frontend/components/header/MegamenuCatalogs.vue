<template>
  <div class="megamenu">
    <template v-if="$device.isDesktop">
      <!-- <div @mouseover="onOver" @mouseleave="onLeave"> -->
      <div>
        <b-dropdown
          ref="dropdown"
          variant="link"
          toggle-class="text-decoration-none"
          right
          no-caret
        >
          <template #button-content>
            <b-nav-item active-class="active">
              {{ $t('global.header.navLinks.catalogs.title') }}
            </b-nav-item>
          </template>

          <b-row id="header">
            <b-col cols="4">
              <div class="megamenu__dropdown--item">
                <div>
                  {{ $t('global.header.navLinks.catalogs.table.title') }}
                </div>
              </div>
            </b-col>

            <b-col cols="8">
              <b-row cols="4">
                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.czech') }}
                  </div>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.russian') }}
                  </div>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.english') }}
                  </div>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.german') }}
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
            <b-col cols="4">
              <div class="megamenu__dropdown--item">
                <div>
                  {{ item.title }}
                </div>
              </div>
            </b-col>

            <b-col cols="8">
              <b-row cols="4">
                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.czech">
                    <CustomIcon
                      :name="item.czech.length > 6 ? 'check-circle-fill' : 'x-circle-fill'"
                      :color="item.czech.length > 6 ? '#0a6ace' : 'rgba(0, 0, 0, .2)'"
                      bootstrap
                    />
                  </a>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.russian">
                    <CustomIcon
                      :name="item.russian.length > 6 ? 'check-circle-fill' : 'x-circle-fill'"
                      :color="item.russian.length > 6 ? '#0a6ace' : 'rgba(0, 0, 0, .2)'"
                      bootstrap
                    />
                  </a>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.english">
                    <CustomIcon
                      :name="item.english.length > 6 ? 'check-circle-fill' : 'x-circle-fill'"
                      :color="item.english.length > 6 ? '#0a6ace' : 'rgba(0, 0, 0, .2)'"
                      bootstrap
                    />
                  </a>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.german">
                    <CustomIcon
                      :name="item.german.length > 6 ? 'check-circle-fill' : 'x-circle-fill'"
                      :color="item.german.length > 6 ? '#0a6ace' : 'rgba(0, 0, 0, .2)'"
                      bootstrap
                    />
                  </a>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-dropdown>
      </div>
    </template>

    <template v-else>
      <b-dropdown variant="link" toggle-class="text-decoration-none" block>
        <template #button-content>
          <b-nav-item active-class="active">
            {{ $t('global.header.navLinks.catalogs.title') }}
          </b-nav-item>
        </template>

        <b-row>
          <b-col cols="12">
            <div class="megamenu__dropdown--item">
              <nuxt-link :to="localePath('/downloads/catalog')" class="bold">
                {{ $t('global.catalogs') }}
              </nuxt-link>
            </div>
          </b-col>

          <b-col cols="12">
            <div class="megamenu__dropdown--item">
              <a href="catalog/00_niob_fluid_komplet.pdf" download class="bold">
                {{ $t('global.completCatalog') }}
              </a>
            </div>
          </b-col>
        </b-row>
      </b-dropdown>
    </template>
  </div>
</template>

<script>
export default {
  /*
    methods: {
      onOver () {
        this.$refs.dropdown.visible = true
      },
      onLeave () {
        this.$refs.dropdown.visible = false
      }
    }
   */
}
</script>

<style lang="scss" scoped>
.megamenu {
  &__dropdown {
    &--item {
      padding: $spacer-sm;
      border-radius: $spacer-md;

      @include media-breakpoint-down(sm) {
        white-space: normal;
      }
    }
  }

  ::v-deep .btn-link {
    padding: 0;
    color: $typo;
    font-size: $base-font-size;
    font-weight: $font-weight-bold;
    text-decoration: none;

    @include media-breakpoint-down(sm) {
      padding: 0;
      color: $typo;
      font-size: $sm-font-size;
      font-weight: $font-weight-bold;
      text-decoration: none;
      max-height: $spacer-xl - 1;
    }
  }

  ::v-deep.dropdown-toggle::after {
    display: inline;
    width: $spacer-sm;
    height: $spacer-sm;
    transform: translateY(- $spacer-md);
    color: $black-25;
    vertical-align: 0;
  }

  ::v-deep .dropdown-menu {
    @include media-breakpoint-up(lg) {
      position: absolute;
      right: 0;
      padding: $spacer-xl - 1;
      min-width: 40vw;
      background: $white-90;
      border: none;
      transform: translateX(0) translateY(- $spacer-xxl * 10);

      @include shadow (.2);
      @include blur ($spacer);
      @include border-radius($spacer-md);
      @include transition-opacity (.5s);
    }

    @include media-breakpoint-down(sm) {
      text-align: center;
      border: none;
    }

    a {
      @include media-breakpoint-down(sm) {
        font-size: $sm-font-size !important;
        font-weight: $font-weight-base !important;
      }
    }

    .bold {
      font-weight: $font-weight-bold !important;
    }
  }

  ::v-deep .dropdown.show .dropdown-menu {
    @include media-breakpoint-up(lg) {
      transform: translateX(0) translateY(- $spacer-sm);

      @include transition-opacity-after;
    }
  }

  ::v-deep .dropdown-item {
    &:hover {
      color: $primary;
      background: $black-05;

      @include border-radius($spacer);
    }
  }
}

#header,
#header-mobile {
  margin-top: - $spacer-md;
  margin-bottom: $spacer-md;

  .megamenu__dropdown--item {
    padding-bottom: $spacer-md;
    color: $primary;
    font-weight: $font-weight-bold;

    @include media-breakpoint-down(sm) {
      padding-bottom: 0;
    }
  }
}

#content,
#content-mobile {
  .megamenu__dropdown--item {
    color: $typo;
    font-size: $sm-font-size;
    font-weight: $font-weight-base;

    @include media-breakpoint-down(sm) {
      padding-bottom: $spacer-sm;
      font-size: $sm-font-size;
    }

    a {
      font-size: $spacer-md;

      @include media-breakpoint-down(sm) {
        margin-top: $spacer-sm;
        font-size: $sm-font-size;
      }
    }
  }
}
</style>

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
              {{ $t('global.header.navLinks.tech.title') }}
            </b-nav-item>
          </template>
          <b-row cols="1">
            <b-col>
              <div class="megamenu__dropdown--item">
                <nuxt-link :to="localePath('contact')" active-class="active">
                  {{ $t('global.header.navLinks.tech.category.tables.title') }}
                </nuxt-link>

                <p>
                  {{ $t('global.header.navLinks.tech.category.tables.description') }}
                </p>
              </div>
            </b-col>

            <b-col>
              <div class="megamenu__dropdown--item">
                <nuxt-link :to="localePath('contact')" active-class="active">
                  {{ $t('global.header.navLinks.tech.category.info.title') }}
                </nuxt-link>

                <p>
                  {{ $t('global.header.navLinks.tech.category.info.description') }}
                </p>
              </div>
            </b-col>

            <b-col>
              <div class="megamenu__dropdown--item">
                <nuxt-link :to="localePath('contact')" active-class="active">
                  {{ $t('global.header.navLinks.tech.category.schemes.title') }}
                </nuxt-link>

                <p>
                  {{ $t('global.header.navLinks.tech.category.schemes.description') }}
                </p>
              </div>
            </b-col>
          </b-row>
        </b-dropdown>
      </div>
    </template>

    <template v-else>
      <b-dropdown variant="link" toggle-class="text-decoration-none" block>
        <template #button-content>
          <b-nav-item active-class="active">
            {{ $t('global.header.navLinks.tech.title') }}
          </b-nav-item>
        </template>

        <b-dropdown-item id="tables">
          <nuxt-link :to="localePath('contact')" class="bold">
            {{ $t('global.header.navLinks.tech.category.tables.title') }}
          </nuxt-link>
        </b-dropdown-item>

        <b-dropdown-item id="info" class="pt-1">
          <nuxt-link :to="localePath('contact')" active-class="active" class="bold">
            {{ $t('global.header.navLinks.tech.category.info.title') }}
          </nuxt-link>
        </b-dropdown-item>

        <b-dropdown-item id="schemes" class="pt-1">
          <nuxt-link :to="localePath('contact')" active-class="active" class="bold">
            {{ $t('global.header.navLinks.tech.category.schemes.title') }}
          </nuxt-link>
        </b-dropdown-item>
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
      padding: $spacer-md;
      border-radius: $spacer-md;

      a {
        font-size: $spacer-md;
        line-height: $spacer-md;
        font-weight: $font-weight-bold;
        color: $primary;

        &:active {
          color: $primary;
        }
      }
    }

    &--subitem {
      font-size: $sm-font-size;
      font-weight: $font-weight-base;
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
      font-size: $spacer-md;
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
      padding: $spacer-lg;
      min-width: 25vw;
      background: $white-90;
      border: none;
      transform: translateX(0) translateY(- $spacer-xxl * 5);

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
        white-space: normal !important;
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
</style>

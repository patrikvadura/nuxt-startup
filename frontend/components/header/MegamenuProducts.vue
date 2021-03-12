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
              {{ $t('global.header.navLinks.products.title') }}
            </b-nav-item>
          </template>
          <b-row cols-xl="4" cols-lg="3">
            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <CustomImage :image="$t('global.header.navLinks.products.category.02.image')" folder="megamenu" />

                <div>
                  <nuxt-link :to="localePath($t('global.header.navLinks.products.category.02.link'))">
                    {{ $t('global.header.navLinks.products.category.02.title') }}
                  </nuxt-link>
                  <div
                    v-for="item in $t('global.header.navLinks.products.category.02.items')"
                    :key="item.id"
                    class="megamenu__dropdown--subitem"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <CustomImage :image="$t('global.header.navLinks.products.category.03.image')" folder="megamenu" />

                <div>
                  <nuxt-link :to="localePath($t('global.header.navLinks.products.category.03.link'))">
                    {{ $t('global.header.navLinks.products.category.03.title') }}
                  </nuxt-link>
                  <div
                    v-for="item in $t('global.header.navLinks.products.category.03.items')"
                    :key="item.id"
                    class="megamenu__dropdown--subitem"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <CustomImage :image="$t('global.header.navLinks.products.category.04.image')" folder="megamenu" />

                <div>
                  <nuxt-link :to="localePath($t('global.header.navLinks.products.category.04.link'))">
                    {{ $t('global.header.navLinks.products.category.04.title') }}
                  </nuxt-link>
                  <div
                    v-for="item in $t('global.header.navLinks.products.category.04.items')"
                    :key="item.id"
                    class="megamenu__dropdown--subitem"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <CustomImage :image="$t('global.header.navLinks.products.category.05.image')" folder="megamenu" />

                <div>
                  <nuxt-link :to="localePath($t('global.header.navLinks.products.category.05.link'))">
                    {{ $t('global.header.navLinks.products.category.05.title') }}
                  </nuxt-link>
                  <div
                    v-for="item in $t('global.header.navLinks.products.category.05.items')"
                    :key="item.id"
                    class="megamenu__dropdown--subitem"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <CustomImage :image="$t('global.header.navLinks.products.category.06.image')" folder="megamenu" />

                <div>
                  <nuxt-link :to="localePath($t('global.header.navLinks.products.category.06.link'))">
                    {{ $t('global.header.navLinks.products.category.06.title') }}
                  </nuxt-link>
                  <div
                    v-for="item in $t('global.header.navLinks.products.category.06.items')"
                    :key="item.id"
                    class="megamenu__dropdown--subitem"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <CustomImage :image="$t('global.header.navLinks.products.category.07.image')" folder="megamenu" />

                <div>
                  <nuxt-link :to="localePath($t('global.header.navLinks.products.category.07.link'))">
                    {{ $t('global.header.navLinks.products.category.07.title') }}
                  </nuxt-link>
                  <div
                    v-for="item in $t('global.header.navLinks.products.category.07.items')"
                    :key="item.id"
                    class="megamenu__dropdown--subitem"
                  >
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <CustomImage :image="$t('global.header.navLinks.products.category.08.image')" folder="megamenu" />

                <div>
                  <nuxt-link :to="localePath($t('global.header.navLinks.products.category.08.link'))">
                    {{ $t('global.header.navLinks.products.category.08.title') }}
                  </nuxt-link>
                  <div
                    v-for="item in $t('global.header.navLinks.products.category.08.items')"
                    :key="item.id"
                    class="megamenu__dropdown--subitem"
                  >
                    {{ item.title }}
                  </div>
                </div>
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
            {{ $t('global.header.navLinks.products.title') }}
          </b-nav-item>
        </template>
        <div class="d-flex flex-column">
          <b-dropdown-item>
            <nuxt-link
              :to="localePath($t('global.header.navLinks.products.category.02.link'))"
              active-class="active"
              class="bold"
            >
              {{ $t('global.header.navLinks.products.category.02.title') }}
            </nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <nuxt-link
              :to="localePath($t('global.header.navLinks.products.category.03.link'))"
              active-class="active"
              class="bold"
            >
              {{ $t('global.header.navLinks.products.category.03.title') }}
            </nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <nuxt-link
              :to="localePath($t('global.header.navLinks.products.category.04.link'))"
              active-class="active"
              class="bold"
            >
              {{ $t('global.header.navLinks.products.category.04.title') }}
            </nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <nuxt-link
              :to="localePath($t('global.header.navLinks.products.category.05link'))"
              active-class="active"
              class="bold"
            >
              {{ $t('global.header.navLinks.products.category.05.title') }}
            </nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <nuxt-link
              :to="localePath($t('global.header.navLinks.products.category.06.link'))"
              active-class="active"
              class="bold"
            >
              {{ $t('global.header.navLinks.products.category.06.title') }}
            </nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <nuxt-link
              :to="localePath($t('global.header.navLinks.products.category.07.link'))"
              active-class="active"
              class="bold"
            >
              {{ $t('global.header.navLinks.products.category.07.title') }}
            </nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <nuxt-link
              :to="localePath($t('global.header.navLinks.products.category.08.link'))"
              active-class="active"
              class="bold"
            >
              {{ $t('global.header.navLinks.products.category.08.title') }}
            </nuxt-link>
          </b-dropdown-item>
        </div>
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
        line-height: $line-height-xs;
        font-weight: $font-weight-bold;
        color: $primary;

        &:active {
          color: $primary;
        }
      }

      ::v-deep img {
        width: auto;
        height: $spacer-xl + 2;
        padding-right: $spacer-md;
      }
    }

    &--subitem {
      font-size: $sm-font-size;
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
      font-size: $h5-font-size;
      font-weight: $font-weight-bold;
      text-decoration: none;
      max-height: $spacer-xl - 1;
    }
  }

  ::v-deep.dropdown-toggle::after {
    @include media-breakpoint-down(md) {
      display: inline;
      width: $spacer-xs;
      height: $spacer-xs;
      transform: translateY(- $spacer-md);
      color: $black-25;
      vertical-align: 0;
    }
  }

  ::v-deep .dropdown-menu {
    @include media-breakpoint-up(lg) {
      position: absolute;
      right: - $spacer-xxl * 2;
      padding: $spacer-lg;
      min-width: 65vw;
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
        font-weight: $base-font-size !important;
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

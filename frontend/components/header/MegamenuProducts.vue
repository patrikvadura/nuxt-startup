<template>
  <div class="megamenu">
    <template v-if="$device.isDesktop">
      <div @mouseover="onOver" @mouseleave="onLeave">
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
          <b-row cols-lg="4">
            <b-col>
              <div class="d-flex flex-row megamenu__dropdown--item">
                <img src="~/assets/images/megamenu/niob_fluid_katalog_02.jpg" alt="Spojovacví armatury">

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
                <img src="~/assets/images/megamenu/niob_fluid_katalog_03.jpg" alt="Spojovacví armatury">

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
                <img src="~/assets/images/megamenu/niob_fluid_katalog_04.jpg" alt="Spojovacví armatury">

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
                <img src="~/assets/images/megamenu/niob_fluid_katalog_05.jpg" alt="Spojovacví armatury">

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
                <img src="~/assets/images/megamenu/niob_fluid_katalog_06.jpg" alt="Spojovacví armatury">

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
                <img src="~/assets/images/megamenu/niob_fluid_katalog_07.jpg" alt="Spojovacví armatury">

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
                <img src="~/assets/images/megamenu/niob_fluid_katalog_08.jpg" alt="Spojovacví armatury">

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
        <b-dropdown-item>
          <div class="d-flex flex-column">
            <nuxt-link :to="localePath($t('global.header.navLinks.products.category.02.link'))">
              {{ $t('global.header.navLinks.products.category.02.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath($t('global.header.navLinks.products.category.03.link'))">
              {{ $t('global.header.navLinks.products.category.03.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath($t('global.header.navLinks.products.category.04.link'))">
              {{ $t('global.header.navLinks.products.category.04.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath($t('global.header.navLinks.products.category.05.link'))">
              {{ $t('global.header.navLinks.products.category.05.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath($t('global.header.navLinks.products.category.06.link'))">
              {{ $t('global.header.navLinks.products.category.06.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath($t('global.header.navLinks.products.category.07.link'))">
              {{ $t('global.header.navLinks.products.category.07.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath($t('global.header.navLinks.products.category.08link'))">
              {{ $t('global.header.navLinks.products.category.08.title') }}
            </nuxt-link>
          </div>
        </b-dropdown-item>
      </b-dropdown>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    onOver () {
      this.$refs.dropdown.visible = true
    },
    onLeave () {
      this.$refs.dropdown.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.megamenu {
  &__dropdown {
    &--item {
      padding: 1rem;
      border-radius: 1rem;

      a {
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 600;
        color: $primary;

        &:active {
          color: $primary;
        }
      }

      img {
        height: 5rem;
        padding-right: 1rem;
      }
    }

    &--subitem {
      font-size: .8rem;
    }
  }

  ::v-deep .btn-link {
    padding: 0;
    color: $typo;
    font-size: .9rem;
    font-weight: 700;
    text-decoration: none;

    @include media-breakpoint-down(sm) {
      padding: 0;
      color: $typo;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      max-height: 3rem;
    }
  }

  ::v-deep.dropdown-toggle::after {
    display: inline;
    width: .25rem;
    height: .25rem;
    transform: translateY(-1rem);
    color: rgba(0, 0, 0, .3);
    vertical-align: 0;
  }

  ::v-deep .dropdown-menu {
    @include media-breakpoint-up(lg) {
      position: absolute;
      right: 0;
      padding: 2rem;
      min-width: 80vw;
      background: rgba(255, 255, 255, .9);
      border: none;

      @include shadow (.2);
      @include blur (.5rem);
      @include border-radius(1rem);
      @include transition-slide (.5s, 25%, -50rem);
    }

    @include media-breakpoint-down(sm) {
      text-align: center;
      border: none;
    }

    a {
      @include media-breakpoint-down(sm) {
        font-size: .8rem !important;
        font-weight: 400 !important;
      }
    }
  }

  ::v-deep .dropdown.show .dropdown-menu {
    @include media-breakpoint-up(lg) {
      @include transition-slide-after (25%, -.25rem);
    }
  }
}
</style>

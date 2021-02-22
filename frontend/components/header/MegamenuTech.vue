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
              {{ $t('global.header.navLinks.tech.title') }}
            </b-nav-item>
          </template>
          <b-row cols-lg="3">
            <b-col>
              <div class="megamenu__dropdown--item">
                <nuxt-link :to="localePath('contact')" active-class="active">
                  {{ $t('global.header.navLinks.tech.category.tables.title') }}
                </nuxt-link>
                <div
                  v-for="item in $t('global.header.navLinks.tech.category.tables.items')"
                  :key="item.id"
                  class="megamenu__dropdown--subitem"
                >
                  {{ item.title }}
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="megamenu__dropdown--item">
                <nuxt-link :to="localePath('contact')" active-class="active">
                  {{ $t('global.header.navLinks.tech.category.info.title') }}
                </nuxt-link>
                <div
                  v-for="item in $t('global.header.navLinks.tech.category.info.items')"
                  :key="item.id"
                  class="megamenu__dropdown--subitem"
                >
                  {{ item.title }}
                </div>
              </div>
            </b-col>

            <b-col>
              <div class="megamenu__dropdown--item">
                <nuxt-link :to="localePath('contact')" active-class="active">
                  {{ $t('global.header.navLinks.tech.category.schemes.title') }}
                </nuxt-link>
                <div
                  v-for="item in $t('global.header.navLinks.tech.category.schemes.items')"
                  :key="item.id"
                  class="megamenu__dropdown--subitem"
                >
                  {{ item.title }}
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
            {{ $t('global.header.navLinks.tech.title') }}
          </b-nav-item>
        </template>
        <b-dropdown-item>
          <div id="tables">
            <nuxt-link :to="localePath('contact')">
              {{ $t('global.header.navLinks.tech.category.tables.title') }}
            </nuxt-link>
            <div
              v-for="item in $t('global.header.navLinks.tech.category.tables.items')"
              :key="item.id"
              class="megamenu__dropdown--subitem"
            >
              {{ item.title }}
            </div>
          </div>

          <div id="info" class="pt-3">
            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.tech.category.info.title') }}
            </nuxt-link>
            <div
              v-for="item in $t('global.header.navLinks.tech.category.info.items')"
              :key="item.id"
              class="megamenu__dropdown--subitem"
            >
              {{ item.title }}
            </div>
          </div>

          <div id="schemes" class="pt-3">
            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.tech.category.schemes.title') }}
            </nuxt-link>
            <div
              v-for="item in $t('global.header.navLinks.tech.category.schemes.items')"
              :key="item.id"
              class="megamenu__dropdown--subitem"
            >
              {{ item.title }}
            </div>
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
    }
  }

  ::v-deep .dropdown-menu {
    @include media-breakpoint-up(lg) {
      position: absolute;
      right: 0;
      padding: 2rem;
      min-width: 50vw;
      background: rgba(255, 255, 255, .7);
      -webkit-backdrop-filter: blur(.5rem);
      backdrop-filter: blur(.5rem);
      box-shadow: 2px 2px 1rem .5rem rgba(0, 0, 0, .05);
      border-radius: 1rem;
      border: none;
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
}
</style>

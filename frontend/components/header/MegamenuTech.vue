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

        <b-dropdown-item id="tables">
          <nuxt-link :to="localePath('contact')" class="bold">
            {{ $t('global.header.navLinks.tech.category.tables.title') }}
          </nuxt-link>
          <div
            v-for="item in $t('global.header.navLinks.tech.category.tables.items')"
            :key="item.id"
            class="megamenu__dropdown--subitem"
          >
            {{ item.title }}
          </div>
        </b-dropdown-item>

        <b-dropdown-item id="info" class="pt-3">
          <nuxt-link :to="localePath('contact')" active-class="active" class="bold">
            {{ $t('global.header.navLinks.tech.category.info.title') }}
          </nuxt-link>
          <div
            v-for="item in $t('global.header.navLinks.tech.category.info.items')"
            :key="item.id"
            class="megamenu__dropdown--subitem"
          >
            {{ item.title }}
          </div>
        </b-dropdown-item>

        <b-dropdown-item id="schemes" class="pt-3">
          <nuxt-link :to="localePath('contact')" active-class="active" class="bold">
            {{ $t('global.header.navLinks.tech.category.schemes.title') }}
          </nuxt-link>
          <div
            v-for="item in $t('global.header.navLinks.tech.category.schemes.items')"
            :key="item.id"
            class="megamenu__dropdown--subitem"
          >
            {{ item.title }}
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
    },
    closeMenu () {
      this.open = false
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
      font-weight: 400;
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
      min-width: 50vw;
      background: rgba(255, 255, 255, .9);
      border: none;
      transform: translateX(0) translateY(-50rem);

      @include shadow (.2);
      @include blur (.5rem);
      @include border-radius(1rem);
      @include transition-opacity (.5s);
    }

    @include media-breakpoint-down(sm) {
      text-align: center;
      border: none;
    }

    a {
      @include media-breakpoint-down(sm) {
        font-size: .8rem !important;
        font-weight: 400 !important;
        white-space: normal !important;
      }
    }

    .bold {
      font-weight: 700 !important;
    }
  }

  ::v-deep .dropdown.show .dropdown-menu {
    @include media-breakpoint-up(lg) {
      transform: translateX(0) translateY(-.25rem);

      @include transition-opacity-after;
    }
  }

  ::v-deep .dropdown-item {
    &:hover {
      color: $primary;
      background: rgba(0, 0, 0, .02);

      @include border-radius(.5rem);
    }
  }
}
</style>

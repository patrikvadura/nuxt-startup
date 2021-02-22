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
              {{ $t('global.header.navLinks.catalogs.title') }}
            </b-nav-item>
          </template>

          <b-row id="header">
            <b-col cols="5">
              <div class="megamenu__dropdown--item">
                <div>
                  {{ $t('global.header.navLinks.catalogs.table.title') }}
                </div>
              </div>
            </b-col>

            <b-col cols="7">
              <b-row cols="3">
                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.cs') }}
                  </div>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.en') }}
                  </div>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.de') }}
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
                <nuxt-link :to="localePath('contact')" active-class="active">
                  {{ item.title }}
                </nuxt-link>
              </div>
            </b-col>

            <b-col cols="7">
              <b-row cols="3">
                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <nuxt-link :to="localePath('contact')">
                    <CustomIcon :name="item.cs" color="#0a6ace" bootstrap />
                  </nuxt-link>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <nuxt-link :to="localePath('contact')">
                    <CustomIcon :name="item.en" color="rgba(0,0,0,.2)" bootstrap />
                  </nuxt-link>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <nuxt-link :to="localePath('contact')">
                    <CustomIcon :name="item.de" color="#0a6ace" bootstrap />
                  </nuxt-link>
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
        <b-dropdown-item>
          <div class="d-flex flex-column">
            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.products.category.02.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.products.category.03.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.products.category.04.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.products.category.05.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.products.category.06.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" active-class="active">
              {{ $t('global.header.navLinks.products.category.07.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" active-class="active">
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
    },

    icon () {
      if (this.item.en === 1) {
        this.answer = 'check-circle-fill'
      } else {
        this.answer = 'x-circle-fill'
      }
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

#header {
  margin-bottom: 1rem;
}
</style>

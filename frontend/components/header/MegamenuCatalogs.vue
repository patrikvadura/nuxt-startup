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
              <b-row cols="4">
                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.czech') }}
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

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <div>
                    {{ $t('global.header.navLinks.catalogs.table.russian') }}
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
                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.czech">
                    <template v-if="item.czech.length > 6">
                      <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
                    </template>

                    <template v-else>
                      <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                    </template>
                  </a>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.english">
                    <template v-if="item.english.length > 6">
                      <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
                    </template>

                    <template v-else>
                      <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                    </template>
                  </a>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.german">
                    <template v-if="item.german.length > 6">
                      <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
                    </template>

                    <template v-else>
                      <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                    </template>
                  </a>
                </b-col>

                <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                  <a :href="item.russian">
                    <template v-if="item.russian.length > 6">
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

        <b-row id="header-mobile">
          <b-col cols="12">
            <b-row cols="4">
              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <div>
                  CS
                </div>
              </b-col>

              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <div>
                  EN
                </div>
              </b-col>

              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <div>
                  DE
                </div>
              </b-col>

              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <div>
                  RU
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row
          v-for="item in $t('global.header.navLinks.catalogs.table.content')"
          id="content-mobile"
          :key="item.id"
        >
          <b-col cols="12">
            <div class="megamenu__dropdown--item">
              <div>
                {{ item.title }}
              </div>
            </div>
          </b-col>

          <b-col cols="12">
            <b-row cols="4">
              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <b-dropdown-item :href="item.czech">
                  <template v-if="item.czech.length > 6">
                    <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
                  </template>

                  <template v-else>
                    <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                  </template>
                </b-dropdown-item>
              </b-col>

              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <b-dropdown-item :href="item.english">
                  <template v-if="item.english.length > 6">
                    <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
                  </template>

                  <template v-else>
                    <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                  </template>
                </b-dropdown-item>
              </b-col>

              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <b-dropdown-item :href="item.german">
                  <template v-if="item.german.length > 6">
                    <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
                  </template>

                  <template v-else>
                    <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                  </template>
                </b-dropdown-item>
              </b-col>

              <b-col class="megamenu__dropdown--item d-flex justify-content-center">
                <b-dropdown-item :href="item.russian">
                  <template v-if="item.russian.length > 6">
                    <CustomIcon name="check-circle-fill" color="#0a6ace" bootstrap />
                  </template>

                  <template v-else>
                    <CustomIcon name="x-circle-fill" color="rgba(0,0,0,.2)" bootstrap />
                  </template>
                </b-dropdown-item>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
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
      padding: .25rem;
      border-radius: 1rem;

      @include media-breakpoint-down(sm) {
        white-space: normal;
      }
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
      padding: 3rem;
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

#header,
#header-mobile {
  margin-top: -1rem;
  margin-bottom: 1rem;

  .megamenu__dropdown--item {
    padding-bottom: 1rem;
    color: $primary;
    font-weight: 600;

    @include media-breakpoint-down(sm) {
      padding-bottom: 0;
    }
  }
}

#content,
#content-mobile {
  .megamenu__dropdown--item {
    color: $typo;
    font-size: .8rem;
    font-weight: 600;

    @include media-breakpoint-down(sm) {
      padding-bottom: .25rem;
      font-size: .7rem;
    }

    a {
      font-size: 1rem;

      @include media-breakpoint-down(sm) {
        margin-top: .25rem;
        font-size: .6rem;
      }
    }
  }
}
</style>

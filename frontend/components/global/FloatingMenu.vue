<template>
  <div id="floating-menu">
    <div class="floating-menu">
      <div>
        <b-dropdown
          ref="dropdown"
          class="floating-menu__item"
          toggle-class="text-decoration-none"
          variant="link"
          dropleft
          no-caret
        >
          <template #button-content>
            <CustomIcon name="globe" bootstrap />
          </template>
          <div
            v-for="lang in $i18n.locales"
            :key="lang.code"
            :value="lang.code"
          >
            <b-dropdown-item :to="switchLocalePath(lang.code)">
              {{ lang.name }}
            </b-dropdown-item>
          </div>
        </b-dropdown>
      </div>

      <div class="floating-menu__item">
        <nuxt-link :to="localePath('/news')">
          <CustomIcon name="newspaper" bootstrap />
        </nuxt-link>
      </div>

      <div class="floating-menu__item">
        <a href="/catalog/00_niob_fluid_komplet.pdf">
          <CustomIcon name="book-half" bootstrap />
        </a>
      </div>

      <div>
        <b-dropdown
          ref="dropdown1"
          class="floating-menu__item"
          toggle-class="text-decoration-none"
          variant="link"
          dropleft
          no-caret
        >
          <template #button-content>
            <CustomIcon name="download" bootstrap />
          </template>
          <b-dropdown-item :to="localePath('/downloads/catalog')">
            {{ $t('global.catalogs') }}
          </b-dropdown-item>
          <b-dropdown-item href="/catalog/00_niob_fluid_komplet.pdf" download>
            {{ $t('global.completCatalog') }}
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('/downloads')">
            {{ $t('global.techLists') }}
          </b-dropdown-item>
          <b-dropdown-item :to="localePath('/downloads')">
            {{ $t('global.techInfo') }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#floating-menu {
  position: fixed;
  margin-top: 40vh;
  right: $spacer-md;
  width: $spacer-xl - 1;
  z-index: 1000;
}

.floating-menu {
  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: $spacer-xl - 1;
    height: $spacer-xl - 1;
    margin-bottom: $spacer;
    background: $secondary;

    @include shadow (.2);
    @include border-radius($spacer);

    &:hover {
      background: $secondary;
      transform: translateX(- $spacer);
      transition: all .3s ease-in-out;
      transition-delay: .1s;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    ::v-deep .btn {
      display: flex;
      align-items: center;
    }
  }

  ::v-deep .dropdown-menu {
    padding: $spacer;

    @include media-breakpoint-up(lg) {
      background: $white-90;
      border: none;
      transform: translateX($spacer-xxl * 2) translateY(0);

      @include shadow (.2);
      @include blur ($spacer);
      @include border-radius($spacer-md);
      @include transition-opacity (.5s);
    }

    a {
      font-size: .9rem;
      color: $primary;
      font-weight: 500;
    }

    .dropdown-item {
      &:hover {
        background: rgba(0, 0, 0, .05);

        @include border-radius(.5rem);
      }
    }
  }

  ::v-deep .dropdown.show .dropdown-menu {
    @include media-breakpoint-up(lg) {
      transform: translateX(0) translateY(0);

      @include transition-opacity-after;
    }
  }
}
</style>

<template>
  <div v-if="!$device.isMobile" id="floating-menu">
    <div class="floating-menu">
      <b-dropdown
        class="floating-menu__item"
        toggle-class="text-decoration-none"
        variant="link"
        dropleft
        no-caret
      >
        <template #button-content>
          <CustomIcon name="globe" color="#fff" bootstrap />
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

      <div class="floating-menu__item">
        <nuxt-link :to="localePath('/contact')">
          <CustomIcon name="book-half" color="#fff" bootstrap />
        </nuxt-link>
      </div>

      <div class="floating-menu__item">
        <nuxt-link :to="localePath('/download')">
          <CustomIcon name="download" color="#fff" bootstrap />
        </nuxt-link>
      </div>

      <!--
      <b-dropdown
        class="floating-menu__item"
        toggle-class="text-decoration-none"
        variant="link"
        dropleft
        no-caret
      >
        <template #button-content>
          <CustomIcon name="book-half" bootstrap />
        </template>
        <b-dropdown-item :to="localePath('/')">
          Kompletní katalog
        </b-dropdown-item>
      </b-dropdown>
      -->
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
  right: 1rem;
  width: 3rem;
  z-index: 1000;
}

.floating-menu {
  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin-bottom: .5rem;
    background: $primary;

    @include shadow (.2);
    @include border-radius(.5rem);

    &:hover {
      background: $secondary;
      transform: translateX(-.5rem);
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
}
</style>

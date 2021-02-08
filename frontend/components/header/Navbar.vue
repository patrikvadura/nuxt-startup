<template>
  <b-navbar
    id="scroll"
    toggleable="lg"
    class="navbar"
  >
    <b-navbar-brand :to="localePath('/')">
      <Logo
        class="navbar__logo"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" v-if="open" @click="closeMenu" />

    <b-navbar-toggle target="nav-collapse" v-else @click="openMenu" />

    <b-collapse
      id="nav-collapse"
      is-nav
      v-scroll-lock="open"
    >
      <b-navbar-nav class="ml-auto navbar__links">
        <b-nav-item
          :to="localePath('/')"
          active-class="active"
        >
          {{ $t('global.header.navLinks.products') }}
        </b-nav-item>

        <Megamenu class="d-none d-md-block" />

        <MegamenuMobile class="d-block d-md-none" />

        <b-nav-item
          :to="localePath('contact')"
          active-class="active"
        >
          {{ $t('global.header.navLinks.contact') }}
        </b-nav-item>

        <div class="navbar__lang">
          <b-form-select
            v-model="$i18n.locale"
          >
            <b-form-select-option
              v-for="lang in $i18n.locales"
              :key="lang.code"
              :value="lang.code"
            >
              {{ lang.name }}
            </b-form-select-option>
          </b-form-select>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  components: {
    Megamenu: () => import('~/components/header/Megamenu'),
    MegamenuMobile: () => import('~/components/header/MegamenuMobile')
  },

  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('scroll')
        const navClasses = navbar.classList
        if (document.documentElement.scrollTop >= 150) {
          if (navClasses.contains('resize') === false) {
            navClasses.toggle('resize')
          }
        } else if (navClasses.contains('resize') === true) {
          navClasses.toggle('resize')
        }
      })
    })
  },

  data () {
    return {
      open: false
    }
  },

  methods: {
    openMenu () {
      this.open = true
    },
    closeMenu () {
      this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  @include media-breakpoint-down(sm) {
    overflow: hidden;
  }

  &__logo {
    width: 10rem;
  }

  &__links {
    @include media-breakpoint-down(md) {
      margin: 2rem 0;
      padding: 1rem 2rem;
      text-align: center;

      @include border-radius (1rem);
    }
  }

  &__lang {
    margin-left: 1rem;

    @include media-breakpoint-down(md) {
      margin: 1rem 0 1rem 0;
    }

    ::v-deep .custom-select {
      text-align-last: center;
      margin: 0;
      padding: .25rem 1rem;
      background: $light;
      font-size: .9rem;
      font-weight: 600;
      color: $typo;
      border: none;
      cursor: pointer;

      @include border-radius (.5rem);

      &::after {
        color: $primary;
      }
    }

    option {
      text-align: center;
      color: $typo;
    }
  }

  ::v-deep .navbar {
    overflow-y: hidden;

    &-collapse {
      @include media-breakpoint-down(sm) {
        overflow-y: hidden;
        height: 100vh;
      }
    }

    &-nav .nav-link {
      color: $typo;
      font-size: .9rem;
      font-weight: 700;
      transition: all 300ms ease-in-out;

      &:hover,
      &.active {
        margin: 0 .25rem;
        padding: .5rem 1rem;
        background: $light;
        color: $primary;

        @include border-radius (.5rem);
      }

      &.active {
        color: $primary !important;
      }
    }

    &-toggler {
      padding: 1rem 1.25rem;
      background: $light;
      border: none;

      @include border-radius (.5rem);

      &:focus,
      &:hover {
        border: none;
        text-decoration: none;
      }

      &-icon {
        display: inline-block;
        width: 1.25rem;
        background-image: url('~assets/images/icons/white/burger.svg');
        vertical-align: middle;
      }
    }
  }

  ::v-deep .custom-button {
    margin-left: 1rem;

    @include media-breakpoint-down(md) {
      margin-top: 3rem;
      margin-left: 0;
    }

    .custom-button__title {
      @include media-breakpoint-down(md) {
        width: 100%;
      }
    }

    &:hover {
      background: $light;
    }
  }
}

.resize {
  .navbar__logo {
    width: 8rem;

    @include scrollHeader(.6s);
  }

  .navbar-toggler {
    padding: .75rem 1rem;
    background: $light;
    border: none;
  }
}

.lock-scroll {
  overflow: hidden;
}
</style>

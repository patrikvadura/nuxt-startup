<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col md="6" cols="12">
          <h3>{{ $t('global.footer.about.title') }}</h3>
          <p>{{ $t('global.footer.about.description') }}</p>
          <nuxt-link :to="localePath('/')" class="footer__more">
            {{ $t('global.showMore') }}
          </nuxt-link>
        </b-col>

        <b-col md="3" cols="12" class="pt-3 pt-md-0">
          <h3>{{ $t('contact.titleContact') }}</h3>
          <div
            v-for="item in $t('contact.contact')"
            :key="item.id"
            class="footer__contact"
          >
            <div class="footer__contact--item align-items-center">
              <CustomIcon :name="item.icon" bootstrap />
              {{ item.title }}
            </div>
          </div>
        </b-col>

        <b-col md="3" cols="12" class="pt-3 pt-md-0">
          <h3>{{ $t('global.footer.useful.title') }}</h3>
          <div
            v-for="item in $t('global.footer.useful.links')"
            :key="item.title"
            class="footer__useful"
          >
            <nuxt-link :to="localePath(item.url)" class="align-items-center">
              {{ item.title }}
            </nuxt-link>
          </div>
        </b-col>
      </b-row>

      <b-row cols="1" class="footer__credits">
        <b-col class="d-flex flex-column flex-md-row align-items-center">
          <div>&copy; {{ $t('global.footer.copyrightMessage') }}</div>
          <a href="https://www.s5.cz/" target="_blank">
            <img src="~/assets/images/brand/logo_S5_negative.svg" alt="STUDIO 5, v.o.s." class="pt-3 pt-md-0">
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem 0 2rem;
  background: $primary;
  color: #fff;

  @include media-breakpoint-down(sm) {
    text-align: center;
    padding: 3rem 2rem 4rem;
  }

  h3 {
    color: $secondary;
  }

  &__more {
    font-size: .8rem;
    font-weight: 700;
    color: $secondary;
    text-decoration: none;
  }

  &__contact {
    &--item {
      font-size: .9rem;
      font-weight: 600;
      line-height: 2rem;

      ::v-deep .custom-icon {
        margin-right: .5rem;
        transform: translateY(.2rem);
      }
    }
  }

  &__useful {
    a {
      font-size: .9rem;
      font-weight: 600;
      line-height: 2rem;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: $secondary;
      }
    }
  }

  &__credits {
    margin-top: 2rem;
    padding-top: 2rem;
    font-size: .8rem;
    border-top: 1px solid rgba(255, 255, 255, .2);

    img {
      margin-left: 1rem;
      width: 5rem;
      opacity: .75;
    }
  }
}
</style>

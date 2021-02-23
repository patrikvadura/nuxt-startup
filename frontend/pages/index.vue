<template>
  <div class="homepage">
    <CookieControl :locale="$i18n.locale" />

    <Hero />

    <ProductSlider />

    <b-container class="homepage__content">
      <b-row cols="3" class="py-5">
        <div
          v-for="item in $t('homepage.features')"
          :key="item.title"
        >
          <b-col class="homepage__features">
            <CustomIcon :name="item.icon" scale="2" background bootstrap />
            <h3>
              {{ item.title }}
            </h3>
            <p>
              {{ item.description }}
            </p>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import('~/components/hero/HeroVideo'),
    ProductSlider: () => import('~/components/homepage/ProductSlider')
  },

  data () {
    return {
      title: 'Výroba armatur z nerezové oceli | NiobFluid'
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Společnost NIOB FLUID s.r.o. je českým výrobcem armatur z nerezových ocelí pro potravinářský, chemický a farmaceutický průmysl. Výroba potravinářských ...'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.homepage {
  padding: 0;

  &__content {
    padding: 3rem 0 2rem;
  }

  &__features {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h3 {
      padding-top: 1rem;
      color: $primary;
    }
  }
}
</style>

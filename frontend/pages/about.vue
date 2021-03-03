<template>
  <div>
    <HeroBasic
      image="niob_building_foto"
      :title="$t('about.title')"
    />

    <b-container class="about">
      <b-row cols="1">
        <b-col>
          <p>{{ $t('about.description') }}</p>
        </b-col>
      </b-row>

      <b-row cols="3" class="pt-5">
        <b-col class="about__image">
          <CustomImage image="niob_building_foto" folder="hero" lightbox />
        </b-col>

        <b-col class="about__image">
          <CustomImage image="niob_building_foto" folder="hero" lightbox />
        </b-col>

        <b-col class="about__image">
          <CustomImage image="niob_building_foto" folder="hero" lightbox />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  computed: {
    description () {
      return this.$t('about.description').substring(0, 67)
    }
  },

  head () {
    return {
      title: this.$t('about.title') + ' | NIOB FLUID s.r.o.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description + '...'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding: 4rem 0;

  @include media-breakpoint-down(sm) {
    padding: 3rem;
  }

  &__image {
    object-fit: cover;
  }
}
</style>

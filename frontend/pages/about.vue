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

      <b-row cols-md="3" cols="1" class="pt-5">
        <div v-for="item in $t('about.gallery')" :key="item.image">
          <b-col class="about__image">
            <CustomImage :image="item.image" :folder="item.folder" lightbox />
          </b-col>
        </div>
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
  padding: $spacer-xl 0;

  @include media-breakpoint-down(sm) {
    padding: $spacer-xl - 1;
  }

  &__image {
    object-fit: cover;

    @include media-breakpoint-down(sm) {
      padding: $spacer $spacer-md;
    }
  }
}
</style>

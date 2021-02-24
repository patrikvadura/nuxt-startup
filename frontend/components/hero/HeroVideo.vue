<template>
  <b-container fluid class="p-0 m-0 hero">
    <video
      v-lazy-load
      src="https://st4.depositphotos.com/5265263/19876/v/600/depositphotos_198767068-stock-video-metal-factory-equipment-pipes-in.mp4"
      autoplay
      loop
      playsinline
      muted
    />

    <b-row cols="1" align-v="center" class="text-left hero__content overlay">
      <b-col
        class="px-4 text-center"
      >
        <div class="d-flex align-items-center flex-column">
          <h1>
            {{ $t('global.hero.title') }}
          </h1>
          <p>
            {{ $t('global.hero.description') }}
          </p>
          <div class="hero__actions d-flex align-items-center flex-md-row flex-column">
            <CustomButton
              :title="$t('global.hero.button_1')"
              :href="localePath('global')"
            />
            <CustomButton
              :title="$t('global.hero.button_2')"
              href="/catalog/00_niob_fluid_komplet.pdf"
              icon="book-half"
              class="ml-0 ml-md-1 mt-2 mt-md-0"
              light
              bootstrap
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      hero: [],
      error: null
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 0;
  position: relative;
  text-align: center;
  width: 100%;
  height: 60vh;
  object-fit: cover;

  @include media-breakpoint-down(sm) {
    width: 100%;
    height: 90vh;
  }

  video,
  img {
    background: $secondary;
    object-fit: cover;
    filter: blur(1px);
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 0;
    left: 0;

    @include media-breakpoint-down(sm) {
      width: 100%;
      height: 100%;
    }
  }

  @include media-breakpoint-down(lg) {
    padding: 0 3rem;
  }

  @include media-breakpoint-down(md) {
    padding: 1rem 3rem 4rem 3rem;
  }

  @include media-breakpoint-down(sm) {
    padding: 2rem 2rem 3rem 2rem;
  }

  .overlay {
    background: rgba(21, 34, 49, .8);
  }

  &__content {
    height: 60vh;

    @include media-breakpoint-down(sm) {
      height: 100%;
    }

    h1 {
      color: #fff;
      font-size: 4rem;

      @include media-breakpoint-down(sm) {
        font-size: 2.25rem;
        line-height: 2.5rem;
        padding-bottom: 2rem;
      }
    }

    p {
      padding-top: 2rem;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: #fff;

      @include media-breakpoint-down(sm) {
        padding-top: 1.5rem;
        font-size: 1.1rem;
        line-height: 1.5rem;
      }
    }
  }

  &__actions {
    padding-top: 2rem;
  }
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
}
</style>

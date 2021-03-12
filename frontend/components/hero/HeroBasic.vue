<template>
  <b-container
    fluid
    class="p-0 m-0 hero"
  >
    <template v-if="video">
      <video
        v-lazy-load
        :src="video"
        autoplay
        loop
        playsinline
        muted
      />
    </template>

    <template v-else>
      <CustomImage :image="image" :folder="folder" />
    </template>

    <b-row
      cols="1"
      align-v="center"
      class="text-left hero__content overlay"
    >
      <b-col
        class="px-4 text-center"
      >
        <div class="d-flex align-items-center flex-column">
          <h1>
            {{ title }}
          </h1>
        </div>

        <template v-if="before.length > 1 || after.length > 1">
          <div class="hero__actions d-flex flex-md-row flex-column align-items-center justify-content-center">
            <template v-if="before.length > 1">
              <CustomButton
                :title="before"
                :href="localePath('/products/' + hrefBefore)"
                icon="arrow-left-circle"
                class="mr-0 mr-md-1 mb-2 mb-md-0"
                light
              />
            </template>

            <template v-if="after.length > 1">
              <CustomButton
                :title="after"
                :href="localePath('/products/' + hrefAfter)"
                icon="arrow-right-circle"
                light
                right
              />
            </template>
          </div>
        </template>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    // default
    title: { type: String, required: false, default: '' },
    image: { type: String, required: false, default: '' },
    folder: { type: String, required: false, default: 'hero' },

    // buttons
    before: { type: String, required: false, default: '' },
    after: { type: String, required: false, default: '' },
    hrefBefore: { type: String, required: false, default: '' },
    hrefAfter: { type: String, required: false, default: '' },

    // atributes
    video: { type: String, required: false, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 0;
  position: relative;
  text-align: center;
  width: 100%;
  height: 40vh;
  object-fit: cover;
  z-index: 0;
  background: $secondary;

  @include media-breakpoint-down(sm) {
    width: 100%;
  }

  img,
  video {
    object-fit: cover;
    filter: blur(3px) grayscale(1);
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .25;

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
    background: rgba(0, 71, 152, .8);
  }

  &__content {
    height: 40vh;

    @include media-breakpoint-down(sm) {
      height: 100%;
    }

    h1 {
      color: #fff;
      font-size: 3rem;
      max-width: 50rem;

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
</style>

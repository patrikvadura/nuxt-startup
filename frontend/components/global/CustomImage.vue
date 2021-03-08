<template>
  <img
    ref="image"
    v-lazy-load
    :data-fancybox="image.length > 1 ? lightbox : null ? 'gallery': null"
    :href="image2x"
    :src="image1x"
    :srcset="`${image1x} 1x, ${image2x} 2x`"
    :alt="image"
    :width="width"
    :height="height"
    :class="classes"
  >
</template>

<script>
export default {
  props: {
    // default
    image: { type: String, required: false, default: '' },
    folder: { type: String, required: false, default: 'fakeapi' },
    href: { type: String, required: false, default: '' },

    // sizing
    width: { type: String, required: false, default: '100%' },
    height: { type: String, required: false, default: '100%' },

    // atributes
    lightbox: { type: Boolean, required: false, default: false },

    // effects
    grayscale: { type: Boolean, required: false, default: false },
    blur: { type: Boolean, required: false, default: false },
    shadow: { type: Boolean, required: false, default: false },
    brightness: { type: Boolean, required: false, default: false },
    contrast: { type: Boolean, required: false, default: false }
  },

  computed: {
    classes () {
      return {
        // atriburtes
        'atributes--pointer': this.lightbox,

        // effects
        'effect--grayscale': this.grayscale,
        'effect--blur': this.blur,
        'effect--shadow': this.shadow,
        'effect--brightness': this.brightness,
        'effect--contrast': this.contrast
      }
    },

    image1x () {
      return require(`~/assets/images/${this.image.length > 1 ? this.folder : 'other'}/${this.image.length > 1 ? this.image : 'noImage'}.jpg`)
    },
    image2x () {
      return require(`~/assets/images/${this.image.length > 1 ? this.folder : 'other'}/${this.image.length > 1 ? this.image : 'noImage'}@2x.jpg`)
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
}

// atriburtes
.atributes {
  &--pointer {
    cursor: pointer;
  }
}

// effects
.effect {
  &--grayscale {
    filter: grayscale(1);
  }

  &--blur {
    filter: blur(3px);
  }

  &--shadow {
    @include shadow (.5);
  }

  &--brightness {
    filter: brightness(150%);
  }

  &--contrast {
    filter: contrast(150%);
  }
}
</style>

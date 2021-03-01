<template>
  <b-button
    :id="id"
    :href="href"
    type="submit"
    class="custom-button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <template v-if="icon">
      <div class="custom-button__box">
        <template v-if="bootstrap">
          <b-icon
            class="custom-button__box--bicon"
            :icon="icon"
            :style="{ color: `#fff` }"
          />
        </template>

        <template v-else>
          <img
            :src="require(`~/assets/images/icons/white/${icon}.svg`)"
            title=""
            :alt="icon"
            class="custom-button__box--icon"
          >
        </template>

        <div class="custom-button__box--title">
          {{ title }}
        </div>
      </div>
    </template>

    <template v-else>
      <div class="custom-button__title">
        {{ title }}
      </div>
    </template>
  </b-button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    light: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    bootstrap: {
      type: Boolean,
      required: false,
      default: false
    },
    wide: {
      type: Boolean,
      required: false,
      default: false
    },
    wideTablet: {
      type: Boolean,
      required: false,
      default: false
    },
    wideMobile: {
      type: Boolean,
      required: false,
      default: false
    },
    height: {
      type: Boolean,
      required: false,
      default: false
    },
    heightTablet: {
      type: Boolean,
      required: false,
      default: false
    },
    heightMobile: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'custom-button': this.primary,
        'custom-button--secondary': this.secondary,
        'custom-button--light': this.light,
        'custom-button--wide': this.wide,
        'custom-button--wideTablet': this.wideTablet,
        'custom-button--wideMobile': this.wideMobile,
        'custom-button--height': this.height,
        'custom-button--heightTablet': this.heightTablet,
        'custom-button--heightMobile': this.heightMobile
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  line-height: 2.5rem;
  border: none;
  padding: .5rem;
  background: $primary;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  @include border-radius (.5rem);

  &:hover {
    background: $secondary;
  }

  &__box {
    display: inline-flex;
    align-items: center;
    padding: 0 .75rem;

    &--icon {
      display: inline-flex;
      width: 1rem;
    }

    &--bicon {
      display: inline-flex;
      width: 1rem;
    }

    &--title {
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
      padding-left: .5rem;
      color: #fff;
    }
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    padding: .5rem 1rem;
    color: #fff;
  }

  &--height {
    margin: .5rem 0 0 0;
    height: 3.5rem;
    line-height: 1.3rem;

    &Tablet {
      @include media-breakpoint-down(md) {
        margin: .5rem 0 0 0;
        height: 3.5rem;
        line-height: 1.3rem;
      }
    }

    &Mobile {
      @include media-breakpoint-down(sm) {
        margin: .5rem 0 0 0;
        height: 3.5rem;
        line-height: 1.3rem;
      }
    }
  }

  &--wide {
    margin: .5rem 0 0 0;
    width: 100%;

    .custom-button__title {
      width: 100%;
    }

    &Tablet {
      @include media-breakpoint-down(md) {
        margin: .5rem 0 0 0;
        width: 100%;
      }

      .custom-button__title {
        @include media-breakpoint-down(md) {
          width: 100%;
        }
      }
    }

    &Mobile {
      @include media-breakpoint-down(sm) {
        margin: .5rem 0 0 0;
        width: 100%;
      }

      .custom-button__title {
        @include media-breakpoint-down(md) {
          width: 100%;
        }
      }
    }
  }

  &--secondary {
    background: $secondary;

    .custom-button__title {
      color: #fff;
    }

    .custom-button__box--title {
      color: #fff;
    }

    &:hover {
      background: $primary;
    }
  }

  &--light {
    background: $lightWhite;

    .custom-button__title {
      color: #fff;

      &:hover {
        color: $primary;
      }
    }

    .custom-button__box--title {
      color: #fff;

      &:hover {
        color: #fff;
      }
    }

    &:hover {
      background: $secondary;
    }
  }
}
</style>

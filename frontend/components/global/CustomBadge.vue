<template>
  <div
    class="custom-badge"
    :class="classes"
  >
    <span>
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    white: {
      type: Boolean,
      required: false,
      default: false
    },
    success: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        'custom-badge--secondary': this.secondary,
        'custom-badge--white': this.white,
        'custom-badge--success': this.green
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-badge {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  border: none;
  padding: 0;
  background: $primary;

  @include border-radius ($spacer);

  span {
    padding: $spacer-sm $spacer;
    font-size: $sm-font-size;
    color: $white;
  }

  &--secondary {
    background: $secondary;
  }

  &--white {
    background: $white;

    @include shadow (.1);

    span {
      color: $black-75;
    }
  }

  &--success {
    background: $success;

    .custom-badge span {
      color: $white;
    }
  }
}
</style>

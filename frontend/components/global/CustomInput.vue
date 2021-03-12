<template>
  <div class="custom-input">
    <template v-if="textarea">
      <label v-if="label" :for="name" class="custom-input__label">
        {{ label }}
      </label>

      <div class="custom-input__textarea" :class="classes">
        <b-form-textarea
          :id="name"
          :name="name"
          :type="name"
          :placeholder="placeholder"
          :rows="rows"
          :max-rows="rows + 3"
          :disabled="disabled"
          :class="{ 'no-label': !label }"
          @focus="focused = true"
          @blur="focused = false"
          @keyup="$emit('keyup', $event)"
          @click="$emit('click', $event)"
        />
      </div>
    </template>

    <template v-else-if="file">
      <div class="custom-input__file">
        <b-form-file
          name="file"
          type="file"
          :placeholder="placeholder"
          :browse-text="$t('global.browseFile')"
        />
      </div>
    </template>

    <template v-else>
      <label v-if="label" :for="name" class="custom-input__label">
        {{ label }}
      </label>

      <div class="custom-input__input" :class="classes">
        <input
          :id="name"
          :name="name"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :class="{ 'no-label': !label }"
          @focus="focused = true"
          @blur="focused = false"
          @keyup="$emit('keyup', $event)"
          @click="$emit('click', $event)"
        >
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    // default
    name: { type: String, required: false, default: '' },
    type: { type: String, required: false, default: 'text' },
    label: { type: String, required: false, default: '' },
    placeholder: { type: String, required: false, default: '' },

    // atributes
    disabled: { type: Boolean, required: false, default: false },
    textarea: { type: Boolean, required: false, default: false },
    file: { type: Boolean, required: false, default: false },

    // sizing
    height: { type: Boolean, required: false, default: false },
    rows: { type: String, required: false, default: '3' }
  },

  data () {
    return {
      focused: false
    }
  },

  computed: {
    classes () {
      return {
        // atributes
        'custom-input__input--disabled': this.disabled,
        'custom-input__input--focused': this.focused,

        // sizing
        'custom-input__input--height': this.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-input {
  // default
  &__label {
    display: block;
    text-align: left;
    font-size: $base-font-size;
    font-weight: $font-weight-light;
    margin-left: $spacer;
  }

  &__input {
    display: flex;
    height: $spacer-lg;
    width: 100%;
    overflow: hidden;
    background: white;
    transition: all 3ms;

    @include shadow (.1);
    @include border-radius($spacer);

    input {
      width: 100%;
      height: $spacer-lg;
      line-height: $line-height-base;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $base-font-size;
      color: $gray;
      padding: 0 $spacer-md + $spacer-sm;
      border: 0;
      background: transparent;
    }

    &--focused {
      border: $spacer-xs solid $primary;

      input::-webkit-input-placeholder {
        opacity: .7;
        color: $gray-75;
      }

      input {
        border: 0;
        box-shadow: none;
        outline: 0;
        color: $gray;
      }
    }

    &--error {
      background: $error;
    }

    &--height {
      height: $spacer-xl;
      width: 100%;

      input {
        height: 100%;
        width: 100%;
      }
    }
  }

  &__file {
    padding-top: $spacer;

    ::v-deep .custom-file-label {
      position: absolute;
      height: $spacer-lg;
      font-size: $base-font-size;
      font-weight: $font-weight-base;
      line-height: $line-height-md;
      color: $gray-75;
      background: $white;
      border: none;
      cursor: pointer;
      overflow-y: hidden;

      @include shadow(.1);
      @include border-radius(.5rem);

      &::after {
        height: $spacer-lg;
        padding: $spacer $spacer-md;
        line-height: $line-height-base;
        color: $gray-75;
        font-weight: $font-weight-bold;
        background-color: $black-05;
      }
    }
  }

  &__textarea {
    display: flex;
    overflow: hidden;
    background: white;
    transition: all 3ms;

    @include border-radius($spacer);
    @include shadow(.1);

    textarea {
      white-space: nowrap;
      font-size: $base-font-size;
      color: $gray;
      padding: $spacer-md $spacer-md + $spacer-sm;
      border: 0;
      background: transparent;
    }

    &--focused {
      border: $spacer-xs solid $primary;

      input::-webkit-input-placeholder {
        opacity: .7;
        color: $gray-75;
      }
    }

    &--error {
      background: $error;
    }
  }

  &__error-message {
    color: $error;
    margin-top: $spacer;
  }
}

input::-webkit-input-placeholder {
  color: $gray-75;
}
</style>

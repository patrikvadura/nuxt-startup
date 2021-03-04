<template>
  <div class="success d-flex justify-content-center align-items-center">
    <div>
      <h2 class="pt-2 pt-md-5">
        {{ $t('contact.success') }}
      </h2>

      <div class="success__content">
        <div class="success__content--action">
          <CustomButton
            :title="$t('global.goBack')"
            gray
            onclick="history.back(-1)"
          />

          <CustomButton
            :title="$t('global.goHome')"
            :href="localePath('/')"
            class="ml-0 ml-md-1 mt-1 mt-md-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.success {
  min-height: 70vh;
  text-align: center;
  padding: 3rem 0;

  &__content {
    padding: 0;

    &--action {
      padding-top: 2rem;
      display: block;

      @include media-breakpoint-down(sm) {
        display: flex;
        flex-direction: column;
        padding: 2rem 3rem;
      }

      ::v-deep .custom-button {
        .custom-button__title {
          @include media-breakpoint-down(sm) {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

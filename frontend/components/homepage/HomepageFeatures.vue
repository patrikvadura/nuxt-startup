<template>
  <b-container class="features">
    <b-row cols-md="3" cols="1" class="py-5">
      <div
        v-for="item in $t('homepage.features')"
        :key="item.title"
      >
        <b-col class="features__item">
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
</template>

<script>
export default {
  name: 'HomepageFeatures'
}
</script>

<style lang="scss" scoped>
.features {
  padding: 3rem 0 2rem;

  @include media-breakpoint-down(sm) {
    padding: 0 3rem;
    transform: translateY(-3rem);
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @include media-breakpoint-down(sm) {
      margin-top: 2rem;
    }

    h3 {
      padding-top: 1rem;
      color: $primary;

      @include media-breakpoint-down(sm) {
        font-size: 1.3rem;
        line-height: 2rem;
      }
    }
  }
}
</style>

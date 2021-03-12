<template>
  <div class="contact-form">
    <b-row cols-md="4" cols="1">
      <b-col class="contact-form__item">
        <h4>
          {{ $t('contact.branches.01.title') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.branches.01.contact')" :key="item.title">
            <li v-html="item.title" />
          </div>
        </ul>
      </b-col>

      <b-col class="contact-form__item">
        <h4>
          {{ $t('contact.branches.02.title') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.branches.02.contact')" :key="item.title">
            <li v-html="item.title" />
          </div>
        </ul>
      </b-col>

      <b-col class="contact-form__item">
        <h4>
          {{ $t('contact.branches.03.title') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.branches.03.contact')" :key="item.title">
            <li v-html="item.title" />
          </div>
        </ul>
      </b-col>

      <b-col class="contact-form__item">
        <h4>
          {{ $t('contact.branches.04.title') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.branches.04.contact')" :key="item.title">
            <li v-html="item.title" />
          </div>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact-form {
  margin-top: 0;

  @include media-breakpoint-down(sm) {
    padding: 0 2rem;
  }

  &__item {
    @include media-breakpoint-down(sm) {
      margin-bottom: .5rem;
      padding: .5rem;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, .05);
    }

    h4 {
      color: $primary;

      @include media-breakpoint-up(md) {
        min-height: 4rem;
      }
    }

    ul {
      padding: 1rem 3rem 1rem 0;

      @include media-breakpoint-down(sm) {
        padding: 1rem 0;
      }

      li {
        list-style: none;
        font-size: .8rem;
        line-height: 1.5rem;
      }
    }
  }
}
</style>

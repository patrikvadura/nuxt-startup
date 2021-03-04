<template>
  <div class="contact-form">
    <b-row cols="2">
      <b-col md="5" cols="12">
        <h4>
          {{ $t('contact.titleAddress') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.address')" :key="item.title">
            <li v-html="item.title" />
          </div>
        </ul>

        <h4>
          {{ $t('contact.titleContact') }}
        </h4>

        <ul>
          <div v-for="item in $t('contact.contact')" :key="item.title">
            <li>
              <CustomIcon :name="item.icon" color="#0a6ace" bootstrap />
              {{ item.title }}
            </li>
          </div>
        </ul>
      </b-col>

      <b-col md="7" cols="12">
        <form
          name="contact"
          method="POST"
          action="form/Success"
          data-netlify="true"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <CustomInput
            :label="$t('contact.name')"
            name="name"
            type="name"
            rules="required"
            class="contact-form__input"
            wide
          />

          <CustomInput
            :label="$t('contact.email')"
            name="email"
            type="email"
            rules="required|email"
            class="contact-form__input"
          />

          <CustomInput
            placeholder="Váš soubor"
            file
            class="contact-form__input"
          />

          <CustomInput
            :label="$t('contact.message')"
            name="message"
            type="message"
            rules="required"
            class="contact-form__input"
            textarea
            rows="6"
          />

          <div data-netlify-recaptcha="true" />

          <CustomButton
            :title="$t('contact.send')"
            type="submit"
            class="contact-form__button"
          />
        </form>
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
  @include media-breakpoint-down(sm) {
    padding: 0 2rem;
  }

  h4 {
    color: $primary;

    @include media-breakpoint-down(sm) {
      text-align: center;
    }
  }

  form {
    width: 100%;
  }

  &__input {
    padding: .5rem 0;
  }

  &__file {
    margin: 1rem 0;
    padding: 0;
    width: 100%;
    display: inline-block;
    cursor: pointer;

    @include shadow(.1);
    @include border-radius(.5rem);

    ::v-deep label {
      background: $primary;
      color: white;
      padding: .5rem;
      font-family: sans-serif;
      border-radius: .3rem;
      cursor: pointer;
      margin-top: 1rem;
    }

    ::v-deep input::-webkit-file-upload-button {
      background: $primary;
      color: white;
      padding: .5rem;
      font-family: sans-serif;
      border-radius: .3rem;
      cursor: pointer;
      margin-top: 1rem;
    }
  }

  &__button {
    margin-top: 1rem;
  }

  ul {
    padding: 1rem 3rem 1rem 0;

    @include media-breakpoint-down(sm) {
      padding: 1rem 0;
      text-align: center;
    }

    li {
      list-style: none;
      font-size: .8rem;
      line-height: 1.5rem;

      ::v-deep .custom-icon {
        padding-right: .5rem;
        transform: translateY(.2rem);
      }
    }
  }
}
</style>

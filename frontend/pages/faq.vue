<template>
  <div>
    <HeroBasic
      image="faq"
      :title="$t('faq.title')"
    />

    <b-container class="faq">
      <b-row class="d-flex justify-content-center">
        <div class="accordion" role="tablist">
          <b-card
            v-for="question in numberItems"
            :key="question.id"
            no-body
            class="mb-1"
          >
            <b-card-header header-tag="header" class="p-1" role="tab">
              <CustomButton
                v-b-toggle="'question-' + question.id"
                :title="question.title"
                gray
                wide
                height-mobile
              />
            </b-card-header>
            <b-collapse
              :id="'question-' + question.id"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  {{ question.description }}

                  <span class="faq__answered">
                    {{ $t('faq.answeredBy') }}
                  </span>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>

        <CustomButton
          :title="$t('global.showMore')"
          class="mt-5"
          @click="limit = null"
        />
      </b-row>

      <b-row>
        <b-col class="faq__footer">
          <div class="pr-2">
            <CustomIcon
              name="chat-dots-fill"
              scale="2"
              color="#00a6eb"
              bootstrap
            />
          </div>

          <nuxt-link :to="localePath('/contact')">
            <h3>
              {{ $t('global.noFind') }}
            </h3>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  components: {
    HeroBasic: () => import('~/components/hero/HeroBasic')
  },

  data () {
    return {
      object: this.$t('faq.guestions'),
      limit: 5
    }
  },

  computed: {
    description () {
      return this.$t('global.metaDescription').substring(0, 67)
    },
    numberItems () {
      return this.limit ? this.object.slice(0, this.limit) : this.object
    }
  },

  head () {
    return {
      title: this.$t('faq.title') + ' | NIOB FLUID s.r.o.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description + '...'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  padding: 4rem 0;

  @include media-breakpoint-down(sm) {
    padding: 3rem 2rem;
  }

  &__answered {
    padding-top: 2rem;
    font-weight: 700;
    color: $primary;

    @include positionRight;
  }

  ::v-deep .card {
    border: none;

    &-header {
      background-color: #fff;
      border: none;
    }
  }

  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5rem;
    padding: 0 2rem;

    @include media-breakpoint-down(sm) {
      flex-direction: column;
      justify-content: center;
      margin-top: 2rem;
    }

    h3 {
      font-weight: 700;

      @include media-breakpoint-down(sm) {
        padding-top: 1rem;
      }
    }
  }
}
</style>

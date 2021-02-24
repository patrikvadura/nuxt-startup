<template>
  <div class="case py-5">
    <div id="hero-slides">
      <div id="slides-cont">
        <div class="d-none d-md-block">
          <div id="next" class="button" />

          <div id="prev" class="button" />
        </div>

        <div id="slides">
          <div v-for="item in $t('productSlider.items')" :key="item.id" class="d-inline-flex">
            <div class="slide">
              <CustomImage
                :image="item.preview"
                folder="fakeapi/products"
                grayscale
              />
              <div class="number">
                {{ item.id }}
              </div>
              <div class="body">
                <div class="category">
                  {{ item.category }}
                </div>
                <div class="headline">
                  {{ item.title }}
                </div>
                <a :href="localePath(item.href)">
                  <div class="link">
                    Zobrazit
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="next-catch" />

        <div id="prev-catch" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  i18n: {
    messages: {
      cs: require('~/locales/cs/productSlider.json'),
      en: require('~/locales/en/productSlider.json')
    }
  },

  mounted () {
    this.functionSlider()
  },

  methods: {
    functionSlider () {
      /* eslint-disable */
      let hero = document.getElementById('hero-slides');
      let slides = document.getElementById('slides');
      let next = [ 'next', 'next-catch' ].map(n => document.getElementById(n));
      let prev = [ 'prev', 'prev-catch' ].map(n => document.getElementById(n));
      let currentlyDemoing = true;
      let currentPage = 0;
      let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 1;
      let maxPageCount = () => slidesPerPage();
      function goToPage(pageNumber = 0) {
        currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
        console.log(currentPage);
        hero.style.setProperty('--page', currentPage);
      }
      next.forEach(n => n.addEventListener('click', () => goToPage(currentPage + 1)));
      prev.forEach(n => n.addEventListener('click', () => goToPage(currentPage - 1)));
      window.addEventListener('resize', () => {
        console.log(document.body.style.getPropertyValue('--slide-per-page'));
      });



      /*
      function sleep(time) {
        return new Promise(res => setTimeout(res, time));
      }

      async function demo() {
        let slides = slidesPerPage();
        let pageSeq_ = { 2: [ 1, 2, 3, 4, 5, 6 ] };
        let pageSeq = pageSeq_[slides] || pageSeq_[2];
        let slideSeq_ = { 2: [ 1, 2, 3, 4, 5, 6 ] };
        let slideSeq = slideSeq_[slides] || slideSeq_[2];
        goToPage(pageSeq[0]);
        await sleep(5000);
        goToPage(pageSeq[1]);
        await sleep(5000);
        goToPage(pageSeq[2]);
        await sleep(5000);
        goToPage(0);
        await sleep(5000);
        goToPage(pageSeq[0]);
        await sleep(5000);
        goToPage(pageSeq[1]);
        await sleep(5000);
        goToPage(pageSeq[2]);
        await sleep(5000);
        goToPage(0);
        await sleep(5000);
        goToPage(pageSeq[0]);
        await sleep(5000);
        goToPage(pageSeq[1]);
        await sleep(5000);
        goToPage(pageSeq[2]);
        await sleep(5000);
        goToPage(0);

        currentlyDemoing = true;
      }


      sleep(500).then(demo);
       */

      /* eslint-enable */
    }
  }
}
</script>

<style lang="scss" scoped>
$curve: cubic-bezier(.7, 0, .3, 1);

::-webkit-scrollbar {
  display: none;
}

#hero-slides {
  --slides-per-page: 3;
  --page: 0;

  height: 25rem;
  padding: 1.5rem 0;
  width: 100%;
  overflow: hidden;

  @include media-breakpoint-down(sm) {
    height: 22rem;
    padding: 1.5rem 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  #slides-cont {
    padding: 0;
    position: relative;
    // overflow: hidden;
    --button-height: 3rem;
    --button-spacing: .5rem;

    .button {
      width: var(--button-height);
      height: var(--button-height);
      color: #fff;
      background: $primary;
      position: absolute;
      left: 4rem;
      top: 10rem;
      z-index: 50;
      cursor: pointer;

      @include border-radius ($spacer);

      &::before,
      &::after {
        line-height: var(--button-height);
        position: absolute;
        margin-left: -.25rem;
        pointer-events: none;
        transform: scale(.75, 1.5);
        transition: 125ms ease-in-out;
      }

      &::before {
        left: 50%;
      }

      &::after {
        opacity: 0;
      }

      &:hover {
        &::before,
        &::after {
          transition: 250ms ease-in-out;
        }

        &::before {
          opacity: 0;
        }

        &::after {
          left: 50% !important;
          opacity: 1;
        }
      }
    }

    #next {
      margin-top: calc(-1 * (var(--button-height) + var(--button-spacing)));

      &::before,
      &::after {
        content: '>';
      }

      &::after {
        left: 30%;
      }

      &:hover::before {
        left: 70%;
      }
    }

    #prev {
      margin-top: var(--button-spacing);
      opacity: calc(var(--page) + .2);
      transition: 500ms opacity;

      &::before,
      &::after {
        content: '<';
      }

      &::after {
        left: 70%;
      }

      &:hover::before {
        left: 30%;
      }
    }

    #next-catch,
    #prev-catch {
      width: 10rem;
      height: 25rem;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 90;

      @include media-breakpoint-down(sm) {
        width: 10rem;
        display: none;
      }
    }

    #next-catch {
      right: -5rem;
    }

    #prev-catch {
      left: -5rem;
    }
  }

  #slides {
    --slides-height: 20rem;

    width: auto;
    height: var(--slides-height);
    padding: 0 2rem;
    white-space: nowrap;
    position: absolute;
    transform: translate3d(calc(var(--page) * -50rem), 0, 0);
    transition: 1500ms transform $curve;

    @include media-breakpoint-down(sm) {
      --slides-height: 18rem;

      left: -2rem;
      transform: translate3d(calc(var(--page) * -30rem), 0, 0);
    }

    .slide {
      display: inline-flex;
      position: relative;
      margin: 0 1rem;
      width: 20rem;
      height: var(--slides-height);
      color: #fff;
      background: #fff;
      white-space: normal;
      word-break: break-word;
      object-fit: cover;

      &:nth-child(odd),
      &:nth-child(even) {
        transform: translateX(35%);

        @include media-breakpoint-down(sm) {
          transform: translateX(20%);
        }
      }

      @include border-radius ($spacer);
      @include shadow (.35);

      @include media-breakpoint-down(sm) {
        width: 15rem;
      }

      img {
        object-fit: contain !important;
        width: 20rem;
        z-index: -1;

        @include border-radius ($spacer);
      }

      &::before {
        content: '';
        display: block;
        background: linear-gradient(180deg, rgba($primary, 0) 0%, rgba($secondary, 1) 100%);
        opacity: .7;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        @include border-radius ($spacer);
      }

      .number {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;

        &,
        &::before,
        &::after {
          vertical-align: middle;
        }

        &::before,
        &::after {
          display: inline-block;
          content: '';
          height: 1px;
          margin-top: -.25rem;
          background: #fff;
        }

        &::before {
          width: 0;
          margin-left: 0;
        }

        &::after {
          width: 2rem;
          margin-left: 1rem;
        }
      }

      .body {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        right: 2rem;

        @include media-breakpoint-down(sm) {
          bottom: 2rem;
          left: 1.5rem;
          right: 1.5rem;
        }
      }

      .category,
      .headline {
        position: relative;
        bottom: 0;
        text-align: center;
        cursor: default;

        @include media-breakpoint-down(sm) {
          bottom: 3rem;
        }
      }

      &::before,
      .number::before,
      .number::after,
      .category,
      .headline,
      .link {
        transition: 375ms $curve;
      }

      .category {
        font-size: 1rem;
        font-weight: 100;
        margin-bottom: .5rem;
        transition-delay: 60ms;

        @include media-breakpoint-down(sm) {
          display: none;
        }
      }

      .headline {
        font-family: $font-condensed;
        font-size: 1.8rem;
        line-height: 2.2rem;
        font-weight: 900;
        transition-delay: 50ms;

        @include media-breakpoint-down(sm) {
          font-size: 1.5rem;
        }
      }

      .link {
        display: inline-block;
        padding: .5rem 2rem;
        color: $primary;
        background: rgba(255, 255, 255, .8);
        font-size: 1rem;
        font-weight: 600;
        opacity: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 2rem;
        pointer-events: none;
        transition-delay: 25ms;

        @include border-radius ($spacer);

        @include media-breakpoint-down(sm) {
          text-align: center;
          width: 80%;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          opacity: 1;
          color: $secondary;
          background: rgba(255, 255, 255, .8);
          padding: .5rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          pointer-events: auto;
        }
      }

      &.hover,
      &:hover {
        &::before {
          opacity: 1;
          background: linear-gradient(180deg, rgba($primary, 0) 0%, rgba($primary, 1) 100%);
          transition: background .5s ease-in-out;
        }

        &::before,
        .number::before,
        .number::after,
        .category,
        .headline,
        .link {
          transition: 500ms $curve;
        }

        .number::before {
          width: 2rem;
          margin-right: 1rem;
        }

        .number::after {
          width: 0;
          margin-right: 0;
        }

        .category {
          transition-delay: 0;
          bottom: 3.5rem;
        }

        .headline {
          transition-delay: 100ms;
          bottom: 3.5rem;
        }

        .link {
          bottom: 0;
          opacity: 1;
          transition-delay: 250ms;
          pointer-events: auto;
        }
      }
    }
  }
}
</style>

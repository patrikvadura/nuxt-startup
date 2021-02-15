<template>
  <div class="footer">
    <b-container>
      <b-row cols-md="3" cols="1">
        <b-col>
          <h3>O nás</h3>
          <p>Společnost NIOB FLUID s.r.o. je českým výrobcem spojovacích a regulačních armatur z nerezových ocelí pro použití v potravinářském, chemickém a farmaceutickém průmysl. Výroba potravinářských armatur začala již v roce 1992</p>
          <a href="/">Zobrazit více</a>
        </b-col>

        <b-col>
          <h3>O nás</h3>
          <div class="footer__contact">
            <span class="footer__contact--item">
              <CustomIcon name="telephone-fill" bootstrap />
              +420 572 419 822-8
            </span>
          </div>
        </b-col>
      </b-row>

      <b-row cols="1" class="footer__credits">
        <b-col class="d-flex flex-row align-items-center">
          <div>&copy; NIOB FLUID s.r.o. Všechna práva vyhrazena. Vytvořilo</div>
          <img src="~/assets/images/brand/logo_S5_negative.svg" alt="STUDIO 5, v.o.s.">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem 0 2rem;
  background: $primary;
  color: #fff;

  h3 {
    color: $secondary;
  }

  &__credits {
    font-size: .8rem;

    img {
      margin-left: 1rem;
      width: 5rem;
      opacity: .75;
    }
  }
}
</style>

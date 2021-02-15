<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

export default {
  components: {
    Header: () => import('~/components/header/Header'),
    Footer: () => import('~/components/footer/Footer')
  }
}
</script>

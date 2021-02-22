<template>
  <div>
    <Header />
    <FloatingMenu />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

export default {
  components: {
    Header: () => import('~/components/header/Header'),
    Footer: () => import('~/components/footer/Footer'),
    FloatingMenu: () => import('~/components/global/FloatingMenu')
  }
}
</script>

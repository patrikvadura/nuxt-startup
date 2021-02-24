<template>
  <div>
    <Header />
    <FloatingMenu v-if="!$device.isMobile" class="d-none d-md-flex" />
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

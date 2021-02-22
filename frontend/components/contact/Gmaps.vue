<template>
  <div class="gmaps">
    <iframe
      src="https://www.google.com/maps/d/u/2/embed?mid=1TjM4gaEUzZ-PN8zPate6BurjNShB9rF3"
      width="100%"
      height="450"
    />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.gmaps {
  margin-bottom: -.5rem;
  width: 100%;
  height: 19rem;
  display: inline-block;
  overflow: hidden;

  iframe {
    position: relative;
    top: -3.5rem;
    border: none;
  }
}
</style>

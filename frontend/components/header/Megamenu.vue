<template>
  <div class="megamenu" @mouseover="onOver" @mouseleave="onLeave">
    <b-dropdown variant="link" toggle-class="text-decoration-none" ref="dropdown" no-caret>
      <template #button-content>
        <b-nav-item active-class="active">
          {{ $t('global.header.navLinks.tech.title') }}
        </b-nav-item>
      </template>
      <b-dropdown-item>
        <div
          v-for="item in $t('global.header.navLinks.tech.items')"
          :key="item.id"
        >
          <b-nav-item
            :to="localePath(item.href)"
            active-class="active"
          >
            {{ item.title }}
          </b-nav-item>
        </div>
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    onOver () {
      this.$refs.dropdown.visible = true
    },
    onLeave () {
      this.$refs.dropdown.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.megamenu {
  ::v-deep .btn-link {
    padding: 0;
    color: $typo;
    font-size: .9rem;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>

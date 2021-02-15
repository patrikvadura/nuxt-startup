<template>
  <div class="megamenu-mobile">
    <b-dropdown variant="link" toggle-class="text-decoration-none" block>
      <template #button-content>
        <b-nav-item active-class="active">
          {{ $t('global.header.navLinks.tech.title') }}
        </b-nav-item>
      </template>
      <b-dropdown-item>
        <div
          v-for="item in $t('global.header.navLinks.tech.items')"
          :key="item.id"
          class="sub"
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
}
</script>

<style lang="scss" scoped>
.megamenu-mobile {
  ::v-deep .btn-link {
    padding: 0;
    color: $typo;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
  }

  ::v-deep .dropdown-menu {
    text-align: center;
    border: none;

    a {
      font-size: .8rem !important;
      font-weight: 400 !important;
    }
  }
}

</style>

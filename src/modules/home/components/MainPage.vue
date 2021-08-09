<template>
  <NavMenu :tabs="tabsList">
    <router-view />
  </NavMenu>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'MainPage',
  components: { NavMenu },
  computed: {
    tabsList() {
      return [
        'Home','Users',
      ]
    }
  },
}
</script>

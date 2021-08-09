<template>
  <NavMenu :tabs="tabsList">
    <router-view />
  </NavMenu>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'HomePage',
  components: { NavMenu },
  computed: {
    tabsList() {
      return [
        'Main','Users',
      ]
    }
  },
}
</script>

<template>
  <div class="home-page">
    <div class="greeting">
      <h2>Hey, You logged in!</h2>
      <a @click="logout" href="">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHomePage',
  inject: ['authService'],
  methods: {
    logout() {
      this.authService.logout()
    },
  }
}
</script>

<style lang="scss" scoped>
  .home-page {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .greeting {
      text-align: center;
      margin-right: 100px;
    }
  }
</style>
<template>
  <div class="main-page">
    <div class="greeting">
      <h2>Hey, You logged in!</h2>
      <a @click="logout" href="">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMainPage',
  inject: ['authService'],
  methods: {
    logout() {
      this.authService.logout()
    },
  }
}
</script>

<style lang="scss" scoped>
  .main-page {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .greeting {
      text-align: center;
      margin-right: 100px;
    }
  }
</style>
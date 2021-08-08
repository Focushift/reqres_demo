<template>
  <div class="login-page">
    Login
    <form @submit.prevent="">
      <input v-model.trim="email" type="email" id="email" name="email" required autocomplete="login-password">
      <input v-model.trim="password" type="password" id="password" name="password" required autocomplete="login-password">
      <button @click="login" type="submit">
          Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LginPage',
  inject: ['authService'],
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      const { email, password } = this
      if (!email || !password) return
      this.authService.login({ email, password })
        .catch(error => alert(error))
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page {
    min-width: 300px;
    min-height: 300px;
    margin: auto;
    background-color: aqua;
  }
</style>
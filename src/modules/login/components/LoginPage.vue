<template>
  <div class="login-page">
    Login
    <form ref="loginForm" @submit.prevent="">
      <input type="email" v-model.trim="email" id="email" name="email" required autocomplete="login-password">
      <input type="password" v-model.trim="password" id="password" name="password" required autocomplete="login-password">
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
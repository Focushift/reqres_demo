<template>
  <div class="login-page">
    <div class="login-form">
      <form @submit.prevent="">
        <div class="form-inner">
          <div class="logo">
            <img alt="Vue logo" src="../../../assets/logo.png">
          </div>
          <FormInput v-model.trim="email" title="Username" type="email" formName="email" />
          <FormInput v-model.trim="password" title="Password" type="password" formName="password" />

          <FormButton @click="login" type="submit" block>
              Login
          </FormButton>
        </div>

        <div class="button-group">
          <FormButton type="reset">
            Cancel
          </FormButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput.vue'
import FormButton from '@/components/FormButton.vue'

export default {
  name: 'LginPage',
  inject: ['authService'],
  components: { FormInput, FormButton },
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
    display: flex;
    justify-content: center;

    .login-form {
      min-width: 500px;
      margin-top: 200px;
      background-color: lightgray;
      padding: 2px;
      .logo {
        display: flex;
        justify-content: center;
      }
      .form-inner {
        background-color: white;
        padding: 20px;
        > * {
          max-width: 440px;
        }
      }
      .button-group {
        padding: 20px;
      }
    }
  }
</style>
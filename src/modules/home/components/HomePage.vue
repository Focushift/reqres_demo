<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png">
  </div>
  <router-link to="/">Main</router-link>
  <router-link to="/users">Users</router-link>

  <router-view />
</template>

<script>

export default {
  name: 'HomePage',
}
</script>

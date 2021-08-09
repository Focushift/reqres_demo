<template>
  <div class="nav-panel">
    <ul>
      <router-link v-for="tab in tabs" :to="{ name: tab }" :key="tab" active-class="active">
        <li v-text="tab"></li>
      </router-link>
    </ul>
  </div>
  <div class="tab-view-block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  .nav-panel {
    border-bottom: 1px solid darkgray;
    ul {
      display: flex;
      flex-direction: row;
      margin-bottom: 0;
      a {
        text-decoration: none;
        color: black;
      }
      .active > li {
        color: white;
        background-color: #0d6efd;
      }
      li {
        list-style: none;
        border: 1px solid gray;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding: 10px 15px;
        margin-right: 5px;
        background-color: lightgray;
        &.active {
          color: white;
          background-color: #0d6efd;
        }
      }
    }
  }
</style>
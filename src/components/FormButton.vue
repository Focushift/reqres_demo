<template>
  <button @click="$emit('click')" :type="type" :class="{ 'block': block }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    block: Boolean,
  },
  emits: ['click'],
}
</script>

<style lang="scss" scoped>
  button {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &[type="submit"] {
      background-color: #157347;
      border-color: #146c43;
    }

    &[type="reset"] {
      background-color: #bb2d3b;
      border-color: #b02a37;
    }

    &.block {
      width: 100%;
    }
  }
</style>
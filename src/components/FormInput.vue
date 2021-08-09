<template>
  <div>
    <label v-if="title" v-text="title" :for="formName"></label>
    <input @input="$emit('update:modelValue', $event.target.value)" :type="type" :id="formName" :name="formName">
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    title: {
      type: String,
      default: '',
    },
    formName: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>
  div {
    margin-bottom: 1rem !important;

    label {
      display: inline-block;
      margin-bottom: .5rem;
      font-weight: bold;
    }

    input {
      display: block;
      width: 100%;
      padding: .375rem .75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
  }
</style>
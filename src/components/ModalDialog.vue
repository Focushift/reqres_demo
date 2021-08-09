<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal-dialog">
        <div class="header">
          Modal
          <button @click="$emit('close')" type="button" class="close" aria-label="close">X</button>
        </div>
        <div class="content">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'ModalDialog',
  emits: ['close'],
}
</script>

<style lang="scss" scoped>
  .modal {
    z-index: 1050;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    &-dialog {
      position: relative;
      margin: 300px auto;
      min-width: 300px;
      display: table;
      background-color: #fff;
      border: 1px solid rgb(95, 95, 95);
      border-radius: 6px;
      outline: 0;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      .header {
        padding: 5px;
        .close {
          float: right;
          cursor: pointer;
          border: 0;
          background-color: #fff;
        }
      }
      .content {
        border: 1px solid rgb(95, 95, 95);
        outline: 0;
        padding: 5px;
      }
    }
  }
</style>
<template>
  <div class="body">
    <div class="body-col">
      <slot name="body-left"></slot>
    </div>
    <div class="body-col fix">
      <slot name="body-center"></slot>
    </div>
    <div class="body-col">
      <slot name="body-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Body'
}
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  height: 1%;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  .body-col {
    width: auto;
    height: 100%;

    &.fix {
      width: 1%;
      flex: 1;
    }
  }
}
</style>
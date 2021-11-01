<template>
  <div class="block">{{comp.name}}</div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    comp: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  line-height: 1.2;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
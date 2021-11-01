<template>
  <div class="header">
    <div class="system">蓝色星球可视化大屏平台</div>
    <div class="header-tool">
      <slot name="header-tool"></slot>
    </div>
    <div class="header-status">

      <el-row>
        <el-button @click="$router.push('Mgt')">登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: #f4f4f4;
  position: relative;
  z-index: 10;
  margin: 0 0 -60px;
  transition: all 0.2s linear;

  &.cover {
    background: rgba(0, 0, 0, 0.4);
  }

  .system,
  .header-tool,
  .header-status {
    width: auto;
    height: 100%;
  }

  .system {
    width: auto;
    margin-right: 0;
  }

  .header-tool {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 16px;
  }
}
</style>
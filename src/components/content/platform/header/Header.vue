<template>
  <div class="header">
    <div class="header-left">
      <img src="~assets/images/logo.png"
           alt="logo">
      <span>蓝色星球可视化大屏平台</span>
    </div>
    <div class="header-center">

    </div>
    <div class="header-right">
      <user-status></user-status>
    </div>
  </div>
</template>

<script>
import UserStatus from './childComps/User';

export default {
  name: 'Header',
  components: {
    UserStatus
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 10px;

  .header-left,
  .header-center,
  .header-right {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .header-left {
    img {
      height: 42px;
      margin-right: 10px;
    }

    span {
      display: flex;
      align-items: center;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.9);
      font-size: 28px;
    }
  }

  .header-center {
    flex: 1;
    padding: 0 16px;
  }
}
</style>
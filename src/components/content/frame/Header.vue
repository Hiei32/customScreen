<template>
  <div class="header-frame frame">
    <div class="header">
      <div class="system">
        <img src="~assets/images/logo.png"
             title="蓝色星球"
             alt="">
        <span>蓝色星球可视化大屏平台</span>
      </div>
      <div class="navi-area">
        <navi></navi>
      </div>
      <div class="status-area">
        <login></login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from 'components/content/frame/Login'
import Navi from 'components/content/frame/Navi'

export default {
  name: 'Header',
  components: {
    Login,
    Navi,
  }
}
</script>

<style lang="scss" scoped>
.header-frame {
  width: 100%;
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  &.nor {
    background: #f4f4f4;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .header {
      height: 60px;
      border-bottom: 0;

      .system {
        img {
          width: 42px;
          height: 42px;
        }

        span {
          color: rgba(0, 0, 0, 0.8);
          font-size: 28px;
        }
      }
    }
  }

  .header {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    z-index: 10;
    transition: all 0.2s linear;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .system,
    .navi-area,
    .status-area {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    .system {
      width: auto;
      margin-right: 0;

      img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
        transition: all 0.2s linear;
      }

      span {
        display: flex;
        align-items: center;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.9);
        font-size: 32px;
        transition: all 0.2s linear;
      }
    }

    .navi-area {
      flex: 1;
      padding: 0 16px;
    }
  }
}
</style>
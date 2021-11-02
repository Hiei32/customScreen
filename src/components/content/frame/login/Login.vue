<template>
  <div class="login">
    <div class="login-btn"
         @click="loginOpen()">登录</div>
    <div class="resgister-btn"
         @click="$router.push('Reg')">注册</div>
    <teleport to="body">
      <login-window @loginClose="loginClose"
                    v-if="isLogin"></login-window>
    </teleport>
  </div>
</template>

<script>
import LoginWindow from './childComps/LoginWindow.vue'

export default {
  name: "Login",
  components: {
    LoginWindow
  },
  data () {
    return {
      isLogin: false,
    }
  },
  methods: {
    loginOpen () {
      this.isLogin = true;
    },
    loginClose () {
      this.isLogin = false;
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: rgb(0, 130, 255);
$blue-hover: rgb(0, 180, 255);

.login {
  height: 32px;
  display: flex;
  flex-direction: row;

  .login-btn,
  .resgister-btn {
    min-width: 80px;
    height: 100%;
    padding: 0 16px;
    font-size: 16px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    cursor: pointer;
    transition: all 0.1s linear;
  }

  .login-btn {
    background: $blue;
    color: #fff;

    &:hover {
      background: $blue-hover;
    }
  }

  .resgister-btn {
    border: 1px solid $blue;
    color: $blue;

    &:hover {
      border-color: $blue-hover;
      color: $blue-hover;
    }
  }
}
</style>
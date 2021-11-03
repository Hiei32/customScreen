<template>
  <div class="login-window">
    <div class="shadow"></div>
    <div class="login-frame">
      <h1>用户登录</h1>
      <div class="login-input">
        <el-input type="text"
                  v-model="form.account"
                  placeholder="用户名/手机号/邮箱" />
        <i></i>
      </div>
      <div class="login-input">
        <el-input type="password"
                  v-model="form.password"
                  placeholder="登录密码" />
      </div>
      <el-button type="primary"
                 round
                 @click="login()"
                 :loading="isLoading"
                 class="login-btn">登录</el-button>
      <div class="login-link">
        <span>立即注册</span>
        <span>忘记密码</span>
      </div>
      <div class="login-border"></div>
      <div class="login-other-group">
        <div class="login-other">
          <el-tooltip class="item"
                      effect="dark"
                      content="QQ帐号登录"
                      placement="top">
            <img src="~assets/images/icons/icon-qq.svg"
                 alt="QQ">
          </el-tooltip>
          <el-tooltip class="item"
                      effect="dark"
                      content="微信帐号登录"
                      placement="top">
            <img src="~assets/images/icons/icon-wx.svg"
                 alt="微信">
          </el-tooltip>
          <el-tooltip class="item"
                      effect="dark"
                      content="新浪微博帐号登录"
                      placement="top">
            <img src="~assets/images/icons/icon-sina.svg"
                 alt="新浪">
          </el-tooltip>
        </div>
      </div>
      <div class="login-footer">
        当前版本：<span>V1.0</span>
      </div>
    </div>
    <div class="login-close"
         @click="loginClose()"></div>
  </div>
</template>

<script>
import { getDemo } from 'network/getData';

export default {
  name: "LoginWindow",
  data () {
    return {
      isLoading: false,
      form: {
        account: "",
        password: ""
      },
      user: {}
    }
  },
  methods: {
    loginClose () {
      this.$emit('loginClose');
    },
    login () {
      let self = this;
      self.isLoading = true;
      getDemo().then((res) => {
        let user = { "name": res.name, "head": res.head }
        this.$store.commit('login', user);
        setTimeout(() => {
          self.loginClose();
          self.$router.push('Mgt');
        }, 400)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: rgb(0, 130, 255);
$blue-hover: rgb(0, 180, 255);

.login-window {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .shadow {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-frame {
    width: 420px;
    height: auto;
    position: relative;
    z-index: 10;
    background: #fafafa;
    padding: 42px 64px 72px;
    border-radius: 24px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    margin-bottom: 24px;

    h1 {
      width: 100%;
      line-height: 1;
      float: left;
      margin-bottom: 24px;
      color: rgba(0, 0, 0, 0.8);
      text-align: center;
      font-size: 24px;
    }

    .login-input {
      width: 100%;
      float: left;
      padding: 0 4px;
      margin-bottom: 16px;
    }

    .login-btn {
      width: 100%;
      float: left;
      margin-bottom: 16px;
    }

    .login-border {
      width: 100%;
      height: 1px;
      float: left;
      background: rgba(0, 0, 0, 0.1);
      margin: 8px 0 24px;
    }

    .login-other-group {
      width: 100%;
      float: left;

      .login-other {
        width: 100%;
        float: left;
        display: flex;
        flex-direction: row;
        justify-content: center;

        img {
          width: 32px;
          height: 32px;
          cursor: pointer;
          margin: 0 10px;
        }
      }
    }

    .login-link {
      width: 100%;
      display: flex;
      flex-direction: row;
      float: left;
      justify-content: center;
      margin-bottom: 16px;

      span {
        height: 30px;
        padding: 0 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        position: relative;

        &:hover {
          color: $blue;
        }

        &:before {
          content: "";
          height: 14px;
          width: 1px;
          position: absolute;
          right: 0;
          top: 8px;
          background: rgba(0, 0, 0, 0.1);
        }

        &:last-child {
          &:before {
            display: none;
          }
        }
      }
    }

    .login-footer {
      width: 100%;
      height: 32px;
      background: rgba(0, 0, 0, 0.04);
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 24px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: rgba(0, 0, 0, 0.4);

      span {
        cursor: pointer;
        font-size: inherit;

        &:hover {
          color: $blue;
        }
      }
    }
  }

  .login-close {
    width: 40px;
    height: 40px;
    border: 2px solid #aaa;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 10;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: all 0.1s linear;

    &:before,
    &:after {
      content: "";
      width: 20px;
      height: 2px;
      background: #aaa;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -1px -10px;
      transition: all 0.1s linear;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      border-color: #eee;

      &:before,
      &:after {
        background: #eee;
      }
    }
  }
}
</style>
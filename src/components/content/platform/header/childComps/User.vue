<template>
  <div class="user-info">
    <img :src="$store.state.userInfo.head||defaultHead"
         alt="head">
    <div class="user-name">
      <span>{{$store.state.userInfo.name}}</span>
      <ul>
        <li><i class="icomoon-key"></i>修改密码</li>
        <li @click="logout()"><i class="icomoon-switch"></i>退出平台</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      defaultHead: require("assets/images/frame/default-head.svg"),
    }
  },
  methods: {
    logout () {
      this.$store.commit("logout");
      this.$router.replace('/Home');
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  height: 50px;
  display: flex;
  flex-direction: row;
  margin: 5px 10px;
  align-items: center;
  cursor: pointer;

  &:hover {
    img {
      box-shadow: 0 0 4px rgba(255, 255, 255, 0.2);
    }

    .user-name {
      span {
        color: #fff;
        text-shadow: 0 0 4px rgba(255, 255, 255, 0.1);

        &:after {
          border-top-color: rgba(255, 255, 255, 0.6);
        }
      }
    }

    ul {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #fff;
    margin-right: 10px;
  }

  .user-name {
    position: relative;
    height: inherit;
    z-index: 1000;

    span {
      height: inherit;
      font-size: 16px;
      display: flex;
      align-items: center;
      color: rgba(255, 255, 255, 0.9);
      flex-direction: row;

      &:after {
        content: "";
        border-top: 5px solid rgba(255, 255, 255, 0.4);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        margin-left: 8px;
      }
    }
  }

  ul {
    width: 100%;
    min-width: 120px;
    max-width: 180px;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 995;
    padding: 4px;
    background: rgb(27, 38, 59);
    border-radius: 6px;
    list-style: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-20px);
    transition: all 0.2s linear;

    li {
      width: 100%;
      height: 32px;
      float: left;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
      border-radius: 4px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
      }

      i {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
        opacity: 0.5;
        margin-right: 4px;
        font-style: normal;
        font-size: 16px;
      }
    }
  }
}
</style>
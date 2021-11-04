<template>
  <div class="mgt">
    <div class="mgt-header-bg"></div>
    <div class="mgt-header">
      <frame-header></frame-header>
    </div>
    <div class="mgt-navi-group">
      <div class="mgt-navi"
           v-for="(n,i) in navi"
           :key="i"
           @click="pageChange(i)"
           :class="{'active':currentIndex==i}"><i :class="n.icon"></i>{{n.name}}</div>
    </div>
    <div class="mgt-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import FrameHeader from 'components/content/platform/header/Header'
import Frame from 'components/content/platform/frame/Frame'

export default {
  name: "Mgt",
  components: {
    FrameHeader,
    Frame
  },
  data () {
    return {
      currentIndex: 0,
      navi: [{
        name: "项目管理",
        path: "ProjectsMgt",
        icon: "icomoon-list"
      }, {
        name: "空间管理",
        path: "SpaceMgt",
        icon: "icomoon-codepen"
      }, {
        name: "大屏市场",
        path: "Market",
        icon: "icomoon-display"
      }]
    }
  },
  methods: {
    pageChange (i) {
      let self = this;
      self.currentIndex = i;
      self.$router.push(self.navi[i].path);
    }
  }
}
</script>

<style lang="scss" scoped>
.mgt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mgt-header-bg {
  width: 100%;
  height: 120px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-image: url("~assets/images/frame/header-01.jpg");
}

.mgt-header {
  width: 100%;
  height: 60px;
}

.mgt-navi-group {
  width: 100%;
  height: 60px;

  .mgt-navi {
    padding: 0 100px;
    height: inherit;
    float: left;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    margin-left: -50px;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    z-index: 1;
    transition: all 0.1s linear;

    &:before,
    &:after {
      content: "";
      height: 60px;
      width: 50%;
      position: absolute;
      z-index: -1;
      top: 0;
      background-image: url("~assets/images/frame/mgt-navi.png");
      background-repeat: no-repeat;
      background-position-x: -400%;
      transition: all 0.2s linear;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
      transform: scaleX(-1);
    }

    &:hover {
      color: #fff;
    }

    &.active {
      color: #fff;
      z-index: 5;

      &:before,
      &:after {
        background-position-x: 0;
      }
    }

    i {
      width: 24px;
      height: 24px;
      color: inherit;
      font-size: 18px;
      font-style: normal;
      margin-right: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }
  }
}

.mgt-body {
  width: 100%;
  height: 1%;
  flex: 1;
}
</style>
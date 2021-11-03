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
           :class="{'active':currentIndex==i}">{{n.name}}</div>
    </div>
    <frame>
      <template #center>
        <el-scrollbar>
          <router-view></router-view>
          1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>
        </el-scrollbar>
      </template>
    </frame>
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
        path: "ProjectsMgt"
      }, {
        name: "空间管理",
        path: "SpaceMgt"
      }, {
        name: "大屏市场",
        path: "Market"
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
    padding: 0 40px;
    height: inherit;
    float: left;
    color: rgba(255, 255, 255, 0.9);

    &.active {
      color: #fff;
    }
  }
}
</style>
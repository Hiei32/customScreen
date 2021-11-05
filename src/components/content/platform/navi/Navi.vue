<template>
  <div class="navi">
    <el-scrollbar>
      <div class="navi-group"
           v-for="(p,pi) in navi"
           :key="pi">
        <div class="navi-parent"
             :class="{'active': currentNavi==`navi-${pi}`,'nocur':!p.path}"
             @click="naviChange(p,pi)">
          <i :class="p.icon"></i>
          <span>{{p.name}}</span>
        </div>
        <div class="navi-children"
             v-if="p.children">
          <div class="navi-child"
               v-for="(c,ci) in p.children"
               :key="ci"
               :class="{'active': currentNavi==`navi-${pi}-${ci}`}"
               @click="naviChange(c,pi,ci)">{{c.name}}</div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { getNavi } from 'network/getData'

export default {
  name: "Navi",
  data () {
    return {
      navi: "",
      currentNavi: 'navi-0-0'
    }
  },
  mounted () {
    this.getNaviFn();
  },
  methods: {
    getNaviFn () {
      let self = this;
      getNavi().then((res) => {
        console.log(res.list)
        self.navi = res.list;
      })
    },
    naviChange (item, pi, ci) {
      if (!item.path) return
      let _c = ci != undefined ? `-${ci}` : ``;
      this.currentNavi = `navi-${pi}${_c}`
      if (item.path == '/Mgt') this.currentNavi = 'navi-0-0';
      this.$router.push(item.path);
    }
  }
}
</script>

<style lang="scss" scoped>
.navi {
  width: 150px;
  height: calc(100vh - 60px);
  background: rgba(255, 255, 255, 0.04);

  .navi-group {
    width: 100%;
    float: left;
    margin-top: 12px;

    .navi-parent {
      width: 100%;
      height: 32px;
      float: left;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      transition: all 0.1s linear;
      color: rgba(255, 255, 255, 0.8);

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
      }

      &.active {
        background: rgba(30, 170, 255, 1);
        color: #fff;
      }

      &.nocur {
        cursor: default;

        &:hover {
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      i {
        width: 20px;
        height: 20px;
        font-style: normal;
        color: inherit;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px 0 12px;
        font-size: 16px;
      }

      span {
        width: 1%;
        flex: 1;
        font-size: 16px;
        font-weight: bold;
        color: inherit;
      }

      p {
        width: 20px;
        height: 20px;
        margin: 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
          content: "";
          width: 9px;
          height: 9px;
          border-right: 2px solid rgba(255, 255, 255, 0.2);
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          display: block;
          transform: rotate(45deg);
          margin: -4px 0 0;
        }
      }
    }

    .navi-children {
      width: 100%;
      float: left;

      .navi-child {
        width: 100%;
        float: left;
        padding-left: 40px;
        line-height: 28px;
        font-size: 14px;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.6);
        transition: all 0.1s linear;

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }

        &.active {
          background: rgba(30, 170, 255, 1);
          color: #fff;
        }
      }
    }
  }
}
</style>
<template>
  <div class="navi-group">
    <div class="navi"
         v-for="(n,i) in naviList"
         :key="i"
         :class="{'active':currentNavi==i}"
         @click="getNav(i)">{{n.name}}</div>
  </div>
</template>

<script>
export default {
  name: "Navi",
  data () {
    return {
      currentNavi: 0,
      naviList: [{
        name: "首页",
        router: "Index"
      }, {
        name: "案例预览",
        router: "Cases",
      }]
    }
  },
  methods: {
    getNav (i) {
      let router = `/${this.naviList[i].router}`;
      this.currentNavi = i;
      this.$router.replace(router);
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: rgb(0, 180, 255);

.navi-group {
  display: flex;
  flex-direction: row;
  margin: 0 24px;
  height: 100%;

  .navi {
    font-size: 20px;
    color: #999;
    padding: 0 16px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    transition: all 0.1s linear;

    &:hover {
      color: $blue;
    }

    &.active {
      color: $blue;

      &:before {
        content: "";
        width: 40%;
        height: 4px;
        background: $blue;
        border-radius: 2px;
        position: absolute;
        bottom: -2px;
        left: 30%;
      }
    }
  }
}
</style>
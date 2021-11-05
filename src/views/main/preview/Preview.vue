<template>
  <frame>
    <template #body-left>
      <layers :comps="screen.components"></layers>
    </template>
    <template #body-center>
      <stage :comps="screen.components"
             @changeStyle="changeStyle"></stage>
    </template>
    <template #body-right>
      <config></config>
    </template>
  </frame>
</template>

<script>
import FrameHeader from 'components/content/platform/header/Header';
import Frame from 'components/content/platform/frame/Frame';
import ToolNav from 'components/content/tools/ToolNav';
import Layers from 'components/content/tools/layers/Layers';
import Stage from 'components/content/tools/stage/Stage';
import Config from 'components/content/tools/config/Config';
import { getComps } from 'network/getData';

export default {
  name: 'Preview',
  components: {
    FrameHeader,
    Frame,
    ToolNav,
    Layers,
    Stage,
    Config,
  },
  data () {
    return {
      screen: ""
    }
  },
  created () {
    this.getCompsFn();
  },
  methods: {
    getCompsFn () {
      getComps().then((res) => {
        this.screen = res;
      }).catch((err) => {
        console.log('数据获取失败')
      })
    },
    changeStyle (i, style) {
      this.screen.components[i].style = style;
    }
  }
}
</script>

<style lang="scss" scoped>
.frame {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
<template>
  <div class="frame">
    <frame-header>
      <template #header-tool>
        <tool-nav></tool-nav>
      </template>
    </frame-header>
    <frame-body>
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
    </frame-body>
  </div>
</template>

<script>
import FrameHeader from 'components/content/frame/Header';
import FrameBody from 'components/content/frame/Body';
import ToolNav from 'components/content/tools/ToolNav';
import Layers from 'components/content/tools/layers/Layers';
import Stage from 'components/content/tools/stage/Stage';
import Config from 'components/content/tools/config/Config';
import { getComps } from 'network/getData';

export default {
  name: 'Preview',
  components: {
    FrameHeader,
    FrameBody,
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
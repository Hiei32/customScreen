<template>
  <div>
    <frame-header>
      <template #header-tool>
        <tool-nav></tool-nav>
      </template>
    </frame-header>
    <frame>
      <template #left>
        <navi></navi>
      </template>
      <template #center>
        <router-view></router-view>
      </template>
    </frame>
  </div>
</template>

<script>
import FrameHeader from 'components/content/platform/header/Header'
import Frame from 'components/content/platform/frame/Frame'
import Navi from 'components/content/platform/navi/Navi'

export default {
  name: 'Main',
  components: {
    FrameHeader,
    Frame,
    Navi,
  }
}
</script>

<style lang="scss" scoped>
</style>
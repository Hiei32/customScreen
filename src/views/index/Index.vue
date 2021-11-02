<template>
  <div>
    <frame-header :class="{'nor':!isCoverSwiper}"></frame-header>
    <div class="index">
      <el-scrollbar ref="scrollbar">
        <router-view></router-view>
        <frame-footer></frame-footer>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import FrameHeader from 'components/content/frame/Header'
import FrameFooter from 'components/content/frame/Footer'

export default {
  name: 'Index',
  components: {
    FrameHeader,
    FrameFooter,
  },
  data () {
    return {
      isCoverSwiper: true
    }
  },
  mounted () {
    this.handleScroll()
  },
  methods: {
    handleScroll () {
      let self = this;
      let scrollbarEl = self.$refs.scrollbar.wrap,
        vh = document.querySelector('body').clientHeight - 80;
      scrollbarEl.onscroll = () => {
        if (scrollbarEl.scrollTop > vh) self.isCoverSwiper = false
        else self.isCoverSwiper = true
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  background: #fafafa;
}
</style>
<template>
  <div class="index">
    <frame-header :class="{'cover':isCoverSwiper}"></frame-header>
    <el-scrollbar ref="scrollbar">
      <div class="index-scroll">
        <swiper :slides-per-view="3"
                :space-between="50"
                :option="swiperOption"
                @swiper="onSwiper"
                @slideChange="onSlideChange">
          <swiper-slide>
            <img src="~assets/images/swiper/swiper01.jpg"
                 alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="~assets/images/swiper/swiper02.jpg"
                 alt="">
          </swiper-slide>
        </swiper>

        <div class="frame">
          123123
          1<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import FrameHeader from 'components/content/frame/Header'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Index',
  components: {
    FrameHeader,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 800,
        grabCursor: true
      },
      isCoverSwiper: true
    }
  },
  mounted () {
    this.handleScroll()
  },
  methods: {
    handleScroll () {
      let self = this;
      let scrollbarEl = self.$refs.scrollbar.wrap;
      scrollbarEl.onscroll = () => {
        if (scrollbarEl.scrollTop > 400) self.isCoverSwiper = false
        else self.isCoverSwiper = true
      }
    },
    onSwiper: (swiper) => {
      console.log(swiper);
    },
    onSlideChange: () => {
      console.log('slide change');
    }
  },
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  background: #fafafa;

  .index-scroll {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
<template>
  <div class="index-scroll">
    <swiper :slides-per-view="3"
            :space-between="50"
            :option="swiperOption"
            @swiper="onSwiper"
            @slideChange="onSlideChange">
      <swiper-slide>
        <img src="~assets/images/swiper/swiper01.jpg"
             alt=""
             style="width:100vw;height:100vh">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/images/swiper/swiper02.jpg"
             alt=""
             style="width:100vw;height:100vh">
      </swiper-slide>
    </swiper>
    <div class="frame">
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
      <version-intro></version-intro>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VersionIntro from './ChildComps/VersionIntro.vue'

export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    VersionIntro,
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
    }
  },
  methods: {
    onSwiper: (swiper) => {
      console.log(swiper);
    },
    onSlideChange: () => {
      console.log('slide change');
    }
  }
}
</script>

<style lang="scss" scoped>
.index-scroll {
  width: 100%;
  float: left;
}
</style>
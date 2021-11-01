<template>
  <div class="stage">
    <stage-view v-for="(n,i) in comps"
                :block="n"
                :index="i"
                :key="i"
                @click="chooseComp(i)"
                :class="{'active':currentComp == i}"></stage-view>
  </div>
</template>

<script>
import StageView from './childComps/StageView.vue'

export default {
  name: 'Stage',
  components: {
    StageView,
  },
  props: {
    comps: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      currentComp: 0
    }
  },
  methods: {
    chooseComp (i) {
      this.currentComp = i;
    }
  }
}
</script>

<style lang="scss" scoped>
.stage {
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4) inset;
}
</style>
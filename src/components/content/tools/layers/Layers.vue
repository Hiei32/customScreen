<template>
  <div class="layers-area">
    <el-scrollbar>
      <div class="layers"
           ref="layers">
        <comp v-for="(n,i) in comps"
              :key="i"
              :comp="n"></comp>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import Comp from './childComps/Block.vue'

import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

export default {
  name: 'Layers',
  components: {
    Comp,
  },
  props: {
    comps: {
      type: Array,
      default: []
    }
  },
  mounted () {
    this.sortableInit();
  },
  methods: {
    sortableInit () {
      let el = this.$refs.layers;
      let sortable = Sortable.create(el, {
        animation: 150
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.layers-area {
  width: 200px;
  height: 100%;
  background: rgba(255, 255, 255, 0.06);

  .layers {
    width: 100%;
    height: auto;
    padding: 8px;
  }
}
</style>
<template>
  <div class="base">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
@import url(./assets/css/base.css);
</style>

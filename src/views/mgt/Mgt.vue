<template>
  <div>
    管理模块
    <el-row>
      <el-button @click="$router.push('ProjectsMgt')">项目管理</el-button>
      <el-button @click="$router.push('SpaceMgt')">空间管理</el-button>
      <el-button @click="$router.push('Market')">大屏市场1</el-button>
      <el-button @click="$router.replace('/Index')">首页</el-button>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Mgt"
}
</script>

<style scoped>
</style>
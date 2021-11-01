<template>
  <div>
    详情页
    <el-row>
      <el-button @click="$router.push('Preview')">预览</el-button>
      <el-button @click="$router.push('OperationLog')">操作日志</el-button>
      <el-button @click="$router.push('Versions')">版本</el-button>
      <el-button @click="$router.push('DataSource')">数据源</el-button>
      <el-button @click="$router.push('DataIntegration')">数据整合</el-button>
      <el-button @click="$router.push('GlobalVariable')">全局变量</el-button>
      <el-button @click="$router.push('SharingMgt')">分享管理</el-button>
      <el-button @click="$router.push('MemberMgt')">成员管理</el-button>
      <el-button @click="$router.push('Setting')">设置</el-button>
      <el-button @click="$router.replace('/Mgt')">返回</el-button>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
</style>
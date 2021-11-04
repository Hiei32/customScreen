<template>
  <div class="projects-import">
    <el-row :gutter="24"
            class="prav-import">
      <el-col :span="24">
        <div class="insert-h">
          <div class="attr"></div>
          <div class="val">
            <el-checkbox v-model="isFromMyProj"
                         label="从我的项目中导入"></el-checkbox>
          </div>
        </div>
      </el-col>
    </el-row>
    <project-empty :authorization="authorization"
                   v-if="!isFromMyProj"></project-empty>
    <project-template v-if="isFromMyProj"></project-template>
  </div>
</template>

<script>
import ProjectEmpty from './ProjectEmpty.vue'
import ProjectTemplate from './ProjectTemplate.vue'

export default {
  name: "ProjectImport",
  components: {
    ProjectEmpty,
    ProjectTemplate
  },
  data () {
    return {
      currentTemplate: "",
      authorization: true,
      isFromMyProj: false
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-import {
  width: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.prav-import {
  width: 100%;
  max-width: 720px;
}
</style>
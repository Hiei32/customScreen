<template>
  <div class="dark">
    <div class="breadcrumb-area">
      <el-breadcrumb separator="/"
                     class="">
        <el-breadcrumb-item to="/Mgt/ProjectsMgt">项目管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增项目</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="frame-row">
      <div class="frame-col fixed"
           style="width:auto">
        <div class="add-left">
          <div class="add-link">请根据右侧面板信息快速构建一个项目，<span>操作文档</span></div>
        </div>
      </div>
      <div class="frame-col">
        <el-scrollbar>
          <div class="radio-content">
            <el-radio-group v-model="tabPosition"
                            style="margin-bottom: 32px">
              <el-radio-button label="0">空项目</el-radio-button>
              <el-radio-button label="1">使用模板</el-radio-button>
              <el-radio-button label="2">其他项目导入</el-radio-button>
            </el-radio-group>
            <project-empty v-if="tabPosition==0"></project-empty>
            <project-template v-if="tabPosition==1"></project-template>
            <project-import v-if="tabPosition==2"></project-import>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectEmpty from './childComps/ProjectEmpty.vue'
import ProjectTemplate from './childComps/ProjectTemplate.vue'
import ProjectImport from './childComps/ProjectImport.vue'

export default {
  name: "ProjectsAdd",
  components: {
    ProjectEmpty,
    ProjectTemplate,
    ProjectImport,
  },
  data () {
    return {
      tabPosition: "0"
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.dark {
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;

  .frame-row {
    flex: 1;
  }
}

.add-left {
  width: 360px;
  height: calc(100vh - 240px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 32px;

  .add-link {
    width: 100%;
    float: left;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.8);

    span {
      color: rgb(0, 130, 255);
      cursor: pointer;

      &:hover {
        color: rgb(30, 170, 255);
      }
    }
  }
}

.radio-content {
  width: 100%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:after {
    content: "";
    width: 100%;
    height: 200px;
  }
}
</style>
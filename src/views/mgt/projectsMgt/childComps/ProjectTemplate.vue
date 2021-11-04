<template>
  <div class="projects-mgt">
    <el-scrollbar>
      <div class="projects-list"
           v-show="templateShow">
        <div class="project-content"
             v-for="(n,i) in projectList"
             :key="i">
          <div class="project">
            <div class="project-img">
              <div class="project-img-frame">
                <img :src="n.pic"
                     alt="">
              </div>
            </div>
            <span>{{n.name}}</span>
            <div class="project-shadow">
              <el-row>
                <el-button size="small">预览</el-button>
                <el-button size="small"
                           type="primary"
                           @click="useTemplate(n.name)">使用</el-button>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="project-enter">
        <project-empty v-show="!templateShow"
                       :template="currentTemplate"
                       @changeTemplate="changeTemplate"></project-empty>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import ProjectEmpty from './ProjectEmpty.vue'

export default {
  name: "ProjectTemplate",
  components: {
    ProjectEmpty
  },
  data () {
    return {
      projectList: [{
        name: "模板1",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "模板2",
        pic: require('assets/images/demo/project2.jpeg')
      }, {
        name: "模板3",
        pic: require('assets/images/demo/project3.jpeg')
      }],
      templateShow: true,
      currentTemplate: ""
    }
  },
  methods: {
    useTemplate (name) {
      this.templateShow = false;
      this.currentTemplate = name;
    },
    changeTemplate () {
      this.templateShow = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-mgt {
  width: 100%;
  height: 100%;
}

.projects-list {
  width: 100%;
  padding: 16px 16px;
  float: left;

  .line {
    width: 100%;
    float: left;
  }
}

.project-content {
  width: 20%;
  float: left;
  padding: 16px;

  .project {
    width: 100%;
    float: left;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.1s linear;
    border-radius: 8px;
    position: relative;

    &:hover {
      border-color: rgba(30, 170, 255, 0.8);
      box-shadow: 0 0 20px rgba(30, 170, 255, 0.4);

      span {
        color: rgb(30, 170, 255);
      }

      .project-shadow {
        opacity: 1;
      }
    }

    .project-img {
      width: 100%;
      float: left;
      padding-bottom: calc(100% * 9 / 16);
      position: relative;

      .project-img-frame {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4);
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    span {
      width: 100%;
      height: 40px;
      line-height: 40px;
      float: left;
      text-align: center;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      padding: 0 16px;
      transition: all 0.1s linear;
    }

    .project-shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.1s linear;
    }
  }
}

@media (max-width: 1800px) {
  .project-content {
    width: 25%;
  }
}

@media (max-width: 1400px) {
  .project-content {
    width: calc(100% / 3);
  }
}

@media (max-width: 960px) {
  .project-content {
    width: 50%;
  }
}

.project-enter {
  width: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
<template>
  <div>
    <div class="projects-list">
      <div class="line">
        <div class="project-content">
          <div class="project-add">
            <img src="~assets/images/icons/layout.svg"
                 alt="icon">
            新建项目
          </div>
        </div>
      </div>
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
        </div>
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsMgt',
  data () {
    return {
      projectList: [{
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "测试字符长度测试字符长度测试字符长度测试字符长度测试字符长度测试字符长度测试字符长度测试字符长度测试字符长度",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "不同比例大屏",
        pic: require('assets/images/demo/project2.jpeg')
      }, {
        name: "不同比例大屏2",
        pic: require('assets/images/demo/project3.jpeg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }, {
        name: "大数据大屏模板",
        pic: require('assets/images/demo/project.jpg')
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.space {
  width: 100%;
  height: 100px;
  float: left;
}

.projects-list {
  width: 100%;
  padding: 16px 32px;
  float: left;

  .line {
    width: 100%;
    float: left;
  }
}

.project-content {
  width: 20%;
  float: left;
  padding: 24px;

  .project,
  .project-add {
    width: 100%;
    float: left;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
      border-color: rgba(30, 170, 255, 0.8);
      box-shadow: 0 0 20px rgba(30, 170, 255, 0.4);

      span {
        color: rgb(30, 170, 255);
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
  }

  .project-add {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    padding: 16px;
    color: rgba(255, 255, 255, 0.5);

    &:hover {
      color: rgb(30, 170, 255);

      img {
        opacity: 1;
      }
    }

    img {
      width: 48px;
      height: 48px;
      margin-right: 24px;
      opacity: 0.6;
      transition: all 0.1s linear;
    }
  }
}

@media (max-width: 1400px) {
  .project-content {
    width: 25%;
  }
}

@media (max-width: 960px) {
  .project-content {
    width: calc(100% / 3);
  }
}
</style>
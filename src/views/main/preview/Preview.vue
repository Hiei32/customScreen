<template>
  <div class="preview">
    <div class="preview-header dark">
      <div class="breadcrumb-head">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item to="/Mgt/ProjectsMgt">产品中心</el-breadcrumb-item>
          <el-breadcrumb-item>数据大屏模板1号</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="preview-btn-group">
        <div class="preview-btn"><i class="icomoon-pencil"></i>编辑</div>
        <div class="preview-btn"><i class="icomoon-share2"></i>分享</div>
        <div class="preview-btn"><i class="icomoon-enlarge"></i>预览</div>
      </div>
    </div>
    <div class="preview-body">
      <frame>
        <template #body-left>
          <layers :comps="screen.components"></layers>
        </template>
        <template #body-center>
          <stage :comps="screen.components"
                 @changeStyle="changeStyle"></stage>
        </template>
        <template #body-right>
          <config></config>
        </template>
      </frame>
    </div>
  </div>
</template>

<script>
import FrameHeader from 'components/content/platform/header/Header';
import Frame from 'components/content/platform/frame/Frame';
import ToolNav from 'components/content/tools/ToolNav';
import Layers from 'components/content/tools/layers/Layers';
import Stage from 'components/content/tools/stage/Stage';
import Config from 'components/content/tools/config/Config';
import { getComps } from 'network/getData';

export default {
  name: 'Preview',
  components: {
    FrameHeader,
    Frame,
    ToolNav,
    Layers,
    Stage,
    Config,
  },
  data () {
    return {
      screen: ""
    }
  },
  created () {
    this.getCompsFn();
  },
  methods: {
    getCompsFn () {
      getComps().then((res) => {
        this.screen = res;
      }).catch((err) => {
        console.log('数据获取失败')
      })
    },
    changeStyle (i, style) {
      this.screen.components[i].style = style;
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.4) inset;

  .preview-header {
    width: 100%;
    height: 32px;
    background: rgba(0, 0, 0, 0.4);

    .breadcrumb-head {
      height: 100%;
      display: flex;
      align-items: center;
      float: left;
      padding: 0 12px;
    }

    .preview-btn-group {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      float: right;
      padding: 0 12px;

      .preview-btn {
        height: 26px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 4px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        padding: 0 8px;
        cursor: pointer;
        border: 1px solid transparent;
        margin-right: 4px;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          border-color: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
        }

        &:active {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.2);
        }

        i {
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-style: normal;
          color: inherit;
          opacity: 0.8;
          margin-right: 4px;
        }
      }
    }
  }

  .preview-body {
    width: 100%;
    height: 1%;
    flex: 1;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
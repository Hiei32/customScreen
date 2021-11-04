<template>
  <div class="project-empty">
    <el-row :gutter="24"
            v-if="template">
      <el-col :span="24">
        <div class="insert-h">
          <div class="attr">模板</div>
          <div class="val">
            <el-input maxlength="6"
                      v-model="template"
                      disabled></el-input>
            <el-button type="primary"
                       style="margin-left:12px"
                       @click="changeTemplate()">更换模板</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24"
            v-if="authorization">
      <el-col :span="16">
        <div class="insert-h">
          <div class="attr">授权项目地址</div>
          <div class="val">
            <el-input maxlength="6"
                      placeholder="请输入授权地址"
                      v-model="project.address"></el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="insert-h">
          <div class="attr">授权码<p>（非必填）</p>
          </div>
          <div class="val">
            <el-input maxlength="6"
                      placeholder="请输入授权码"
                      v-model="project.code"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="insert-h">
          <div class="attr">项目名称</div>
          <div class="val">
            <el-input placeholder="请输入项目名称"
                      v-model="project.name"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="8">
        <div class="insert-h">
          <div class="attr">宽度</div>
          <div class="val">
            <el-input maxlength="6"
                      placeholder="大屏宽度（单位：px）"
                      v-model="project.screenWidth"></el-input>
            <p>px</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="insert-h">
          <div class="attr">高度</div>
          <div class="val">
            <el-input maxlength="6"
                      placeholder="大屏高度（单位：px）"
                      v-model="project.screenHeight"></el-input>
            <p>px</p>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="insert-h">
          <div class="attr">模式</div>
          <div class="val">
            <div class="left"
                 style="margin:10px 0 0 4px">
              <el-checkbox v-model="project.zoomMode"
                           label="大屏缩放"></el-checkbox>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="insert-h">
          <div class="attr">所属空间</div>
          <div class="val">
            <el-select v-model="project.space"
                       placeholder="请选择所属空间"
                       style="flex:1">
              <el-option v-for="item in spaceOption"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary"
                       style="margin-left:12px"
                       @click="createSpace()">创建空间</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="insert-h">
          <div class="attr">项目描述<p>（非必填）</p>
          </div>
          <div class="val">
            <el-input type="textarea"
                      placeholder="请输入文本"
                      v-model="project.description"
                      :rows="4"></el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="line align-center">
          <el-button>取消</el-button>
          <el-button type="primary">创建项目</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ProjectEmpty",
  props: {
    template: {
      type: String,
      default: ""
    },
    authorization: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      project: {
        name: "",
        screenWidth: 1920,
        screenHeight: 1080,
        zoomMode: 0,
        space: "",
        description: "",
        address: "",
        code: ""
      },
      spaceOption: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]
    }
  },
  methods: {
    createSpace () {
      this.$router.push('/Space')
    },
    changeTemplate () {
      this.$emit('changeTemplate')
    }
  }
}
</script>

<style lang="scss" scoped>
.project-empty {
  width: 100%;
  float: left;
  max-width: 720px;
}
</style>
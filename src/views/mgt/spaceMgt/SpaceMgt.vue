<template>
  <div class="space-mgt">
    <el-scrollbar>
      <div class="frame space-frame dark">
        <div class="line"
             style="padding:24px 0 16px">
          <div class="right">
            <el-button type="primary">新增空间</el-button>
          </div>
        </div>
        <el-table class="space-table"
                  :data="tableData"
                  row-key="id"
                  :show-header="false">
          <el-table-column>
            <template #default="scope">
              <div class="space-name">
                <img :src="scope.row.pic"
                     alt="封面">
                <span>{{scope.row.name}}</span>
                <p class="space-lock icomoon-lock"></p>
                <b class="space-owner">拥有</b>
              </div>
            </template>
          </el-table-column>
          <el-table-column width="48">
            <template #default="scope">
              <div class="space-cog icomoon-cog"
                   @click="setting(scope.row.id)"></div>
            </template>
          </el-table-column>
          <el-table-column width="72">
            <template #default="scope">
              <div class="space-label">
                <i class="icomoon-folder-open"></i>
                {{ scope.row.folder }}
              </div>
            </template>
          </el-table-column>
          <el-table-column width="72">
            <template #default="scope">
              <div class="space-label">
                <i class="icomoon-bookmark"></i>
                {{ scope.row.bookmark }}
              </div>
            </template>
          </el-table-column>
          <el-table-column width="72">
            <template #default="scope">
              <div class="space-label">
                <i class="icomoon-users"></i>
                {{ scope.row.user }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'SpaceMgt',
  data () {
    return {
      tableData: [
        {
          id: 1,
          name: '产品中心',
          pic: require('assets/images/frame/default-space.svg'),
          isLock: true,
          isOwner: true,
          folder: 0,
          bookmark: 3,
          user: 4,
        },
        {
          id: 2,
          name: 'Fabric',
          pic: require('assets/images/frame/default-space.svg'),
          isLock: true,
          isOwner: true,
          folder: 0,
          bookmark: 2,
          user: 2,
        },
        {
          id: 3,
          name: '蓝色星球移动端项目组',
          pic: require('assets/images/frame/default-space.svg'),
          isLock: true,
          isOwner: false,
          folder: 3,
          bookmark: 1,
          user: 3,
          children: [
            {
              id: 31,
              name: 'ionic3项目',
              pic: require('assets/images/frame/default-space.svg'),
              isLock: true,
              isOwner: false,
              folder: 4,
              bookmark: 4,
              user: 1,
              children: [
                {
                  id: 311,
                  name: '测试项目',
                  pic: require('assets/images/frame/default-space.svg'),
                  isLock: true,
                  isOwner: false,
                  folder: 0,
                  bookmark: 4,
                  user: 1,
                },
                {
                  id: 312,
                  name: '测试项目2',
                  pic: require('assets/images/frame/default-space.svg'),
                  isLock: true,
                  isOwner: false,
                  folder: 0,
                  bookmark: 2,
                  user: 3,
                },
              ],
            }
          ],
        },
        {
          id: 4,
          name: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
          pic: require('assets/images/frame/default-space.svg'),
          isLock: false,
          isOwner: false,
          folder: 0,
          bookmark: 0,
          user: 0,
        },
      ]
    }
  },
  methods: {
    setting (id) {
      alert(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.space-mgt {
  width: 100%;
  height: 100%;

  .space-frame {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
}

.space-table {
  width: 100%;

  .space-label {
    width: 100%;
    float: left;
    display: flex;
    flex-direction: row;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;

    i {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      margin-right: 4px;
      color: inherit;
    }
  }

  .space-cog {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    cursor: pointer;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      color: rgb(30, 170, 255);
    }
  }

  .space-name {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 36px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      margin-right: 12px;
    }

    span {
      max-width: 320px;
      line-height: 24px;
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 12px;
      color: #fff;
      cursor: pointer;

      &:hover {
        color: rgb(30, 170, 255);
      }
    }

    p {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      cursor: pointer;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.4);
      margin: 0 12px 0 0;
    }

    b {
      height: 24px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.4);
      font-size: 14px;
      font-weight: normal;
      color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
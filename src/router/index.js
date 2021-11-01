import { createRouter, createWebHistory } from 'vue-router'

//主页面
const Index = () => import('views/index/Index');
const Home = () => import('views/index/Home');//首页
const Cases = () => import('views/index/Cases');//案例

//项目选择
const Mgt = () => import('views/mgt/Mgt');
const ProjectsMgt = () => import('views/mgt/ProjectsMgt');//项目管理
const SpaceMgt = () => import('views/mgt/SpaceMgt');//空间管理
const Market = () => import('views/mgt/Market');//大屏市场

//主面板
const Main = () => import('views/main/Main');
const Preview = () => import('views/main/Preview');//预览
const OperationLog = () => import('views/main/OperationLog');//操作日志
const Versions = () => import('views/main/Versions');//版本
const DataSource = () => import('views/main/DataSource');//数据源
const DataIntegration = () => import('views/main/DataIntegration');//数据整合
const GlobalVariable = () => import('views/main/GlobalVariable');//全局变量
const SharingMgt = () => import('views/main/SharingMgt');//分享管理
const MemberMgt = () => import('views/main/MemberMgt');//成员管理
const Setting = () => import('views/main/Setting');//设置

const routes = [
  {
    path: '',
    redirect: '/Index'
  },
  {
    path: '/Index',
    component: Index,
    children: [
      {
        path: '',
        redirect: '/Home'
      },
      {
        path: '/Home',
        component: Home
      },
      {
        path: '/Cases',
        component: Cases
      },
    ]
  },
  {
    path: '/Mgt',
    component: Mgt,
    children: [
      {
        path: '',
        redirect: '/Mgt/ProjectsMgt'
      },
      {
        path: 'ProjectsMgt',
        component: ProjectsMgt
      },
      {
        path: 'SpaceMgt',
        component: SpaceMgt
      },
      {
        path: 'Market',
        component: Market
      },
    ]
  },
  {
    path: '/Main',
    component: Main,
    children: [
      {
        path: '',
        redirect: '/Main/Preview'
      },
      {
        path: 'Preview',
        component: Preview
      },
      {
        path: 'OperationLog',
        component: OperationLog
      },
      {
        path: 'Versions',
        component: Versions
      },
      {
        path: 'DataSource',
        component: DataSource
      },
      {
        path: 'DataIntegration',
        component: DataIntegration
      },
      {
        path: 'GlobalVariable',
        component: GlobalVariable
      },
      {
        path: 'SharingMgt',
        component: SharingMgt
      },
      {
        path: 'MemberMgt',
        component: MemberMgt
      },
      {
        path: 'Setting',
        component: Setting
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

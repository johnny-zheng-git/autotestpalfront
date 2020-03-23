import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../vuex/store'
// import Home from '../views/Home.vue'
import Home from "../views/InterfaceHome";
import Login from "../views/Login";
import Test from "../views/test"
import Registration from "../views/Registration";
import TaskList from './../components/TaskList'
import InterfaceTest from './../components/interfacemodel/InterfaceTest'
import About from './../components/About'
import ProjectList from './../components/interfacemodel/ProjectList'
import AddProject from './../components/interfacemodel/AddProject'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    name: 'home', meta: { auth: true },
    children: [
      { path: 'tasklist', component: TaskList, name: "tasklist", meta: { auth: true } },
      // { path:'userlist', component:Userlist },
      {
        path: 'interfacetest',
        redirect: '/home/interfacetest/projectlist',
        component: InterfaceTest,
        name: 'interfacetest',
        meta: { auth: true },
        children: [
          { path: 'about', component: About, name: 'about', meta: { auth: true } },
          { path: 'projectlist', component: ProjectList, name: 'projectlist', meta: { auth: true } },
          { path: 'addproject', component: AddProject, name: "addproject", meta: { auth: true } },
        ]
      },
    ]
  },
  { path: '/login', component: Login, name: 'login' },
  { path: '/test', component: Test },
  { path: '/registration', component: Registration, name: 'reg' },
  { path: '*', redirect: '/login' },
  // { path: '/home/interfacetest/', redirect: '/home/interfacetest/projectlist' }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  console.log("获取session里的state数据");
  //在页面加载时读取sessionStorage里的状态信息，若无store跳过
  if (sessionStorage.getItem("store")) {
    console.log("获取", sessionStorage);
    store.replaceState(
      Object.assign(
        {},
        store.state,
        JSON.parse(sessionStorage.getItem("store"))
      )
    );
    sessionStorage.removeItem("store");
    console.log("清除session", sessionStorage);
  }


  //to.meta.auth 表示需要做登录健全
  //不需要的 可以直接next
  console.log('from:', from.path, '->to:', to.path)
  const tocen = store.state.access_token
  // console.log("==================>"+tocken+'<================')
  if (to.meta.auth) {
    //store.state.token 表示已经登录 可以直接next
    //没有登录 跳转到/login 并携带参数redirect 方便登录后直接跳转到to.path
    if (tocen) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.path }
      })
      console.log('无权限访问')
    }
  } else {
    next();
  }
})

export default router

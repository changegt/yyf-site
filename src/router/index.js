import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from '@/components/helloWorld'
import login from '@/views/login'
import main from '@/views/main'
import welcome from '@/views/homepage/welcome'
import theKoa from '@/views/frames/theKoa'
import theVue from '@/views/frames/theVue'
import music163 from '@/views/demo/vuedemo/music163'

Vue.use(Router)

const arr = [
  {
    name: 'helloWorld',
    component :helloWorld
  },
  {
    name:'main',
    component:main
  },
  {
    name:'welcome', //欢迎页面
    component:welcome
  },
  {
    name:'theKoa', //koa框架
    component:theKoa
  },
  {
    name:'theVue', //vue框架
    component:theVue
  },
  {
    name: 'music163', //网易云音乐移动端vue实现
    component: music163
  }
];


const returnArr = [{
    path: '/',
    name:'login', 
    component:login
}];
arr.forEach((item) => {
  item.path = '/'+item.name;
  returnArr.push(item);
})

export default new Router({
  routes: returnArr
})

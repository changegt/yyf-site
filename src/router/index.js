import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from '@/components/helloWorld'
import login from '@/views/login'
import main from '@/views/main'
import welcome from '@/views/homepage/welcome'
import theVue from '@/views/frames/theVue'

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
    name:'theVue', //vue框架
    component:theVue
  },
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

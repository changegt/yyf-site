<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.w100{
  width: 100%;
}
.tal{
  text-align: left;
}
.p20 {
  padding: 20px;
}

html,body,#app,.el-container,.el-aside,.el-main{
  height: 100%;
  padding: 0;
  margin: 0;
}
.el-main{
  overflow: auto;
}
</style>

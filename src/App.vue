<template>
  <div id="app">
    <header-top></header-top>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop'
import LeftSide from './components/LeftSide'
import Home from './components/home/Home'
import BrandList from './components/brand-list/BrandList'
import Detail from './components/detail/Detail.vue'

export default {
  name: 'app',
  components: {
    HeaderTop,
    //LeftSide,
    Home,
    BrandList,
    Detail
  }
}
</script>

<style>
  ul,li,ol {
    margin: 0;
    list-style: none;
    padding-left: 0;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,p {
    margin: 0;
  }
  html,body {
    padding: 0;
    margin: 0;
    font-family: "Microsoft YaHei";
  }
  .content {
    /*width: 1344px;*/
    margin: 0 auto;
    background: #FFF;
    position: relative;
  }
  .right-content {
    margin-left: 200px;
    padding: 15px;
    border-left: 1px solid #DDD;
  }
</style>

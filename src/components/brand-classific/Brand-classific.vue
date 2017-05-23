<template>
  <div>
    <div class="sub-siderbar">
      <el-menu default-active="1-1" class="el-menu-vertical-demo" theme="dark">
        <el-submenu index="1">
          <template slot="title">国外奶粉</template>
          <el-menu-item index="1-1">牛栏奶粉</el-menu-item>
          <el-menu-item index="1-2">惠氏奶粉</el-menu-item>
          <el-menu-item index="1-3">爱他美奶粉</el-menu-item>
          <el-menu-item index="1-4">美素奶粉</el-menu-item>
          <el-menu-item index="1-5">美赞臣奶粉</el-menu-item>
          <el-menu-item index="1-6">雅培奶粉</el-menu-item>
          <el-menu-item index="1-7">喜宝奶粉</el-menu-item>
          <el-menu-item index="1-8">雀巢奶粉</el-menu-item>
          <el-menu-item index="1-9">Semper(森宝)奶粉</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">国内奶粉</template>
          <el-menu-item index="2-1">飞鹤奶粉</el-menu-item>
          <el-menu-item index="2-2">贝因美奶粉</el-menu-item>
          <el-menu-item index="2-3">合生元奶粉</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="sub-content white-bg">
      <el-menu default-active="/classific/overview" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
        <el-menu-item index="/classific/overview">概览</el-menu-item>
        <el-menu-item index="/classific/summary">信息汇总</el-menu-item>
        <el-menu-item index="/classific/analysis">统计分析</el-menu-item>
        <el-menu-item index="/classific/comment">网络评价</el-menu-item>
      </el-menu>
      <div class="">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .sub-siderbar {
    position: absolute;
    width: 200px;
    min-height: 800px;
    background: #66768e;
    float: left;
  }
  .sub-content {
    position: absolute;
    top: 0;
    left: 200px;
    width: calc(100% - 200px);
  }
</style>

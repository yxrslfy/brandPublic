<template>
	<header class="header">
		<!--<img src="../assets/img/header-bg.png" alt="" >-->
    <div class="header-top">
      <div class="pull-left custom-logo">质量监测系统</div>
      <el-menu theme="dark" default-active="/index" class="el-menu-demo pull-right" mode="horizontal" @select="handleSelect" :router="true">
        <el-menu-item index="/index">全网声音</el-menu-item>
        <el-submenu index="2">
          <template slot="title">品牌分类</template>
          <el-menu-item index="/classific/overview">概览</el-menu-item>
          <el-menu-item index="/classific/summary">信息汇总</el-menu-item>
          <el-menu-item index="/classific/analysis">统计分析</el-menu-item>
          <el-menu-item index="/classific/comment">网民评价</el-menu-item>
        </el-submenu>
        <el-menu-item index="/classific/analysis">质量分析</el-menu-item>
        <el-menu-item index="/list">质量报告</el-menu-item>
        <el-menu-item index="/detail">个人中心</el-menu-item>
      </el-menu>
    </div>
	</header>
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
.header {
  background: #324157;
}
.header-top {
  /*width: 1240px;*/
  height: 60px;
  margin: 0 auto;
}
.custom-logo {
  line-height: 60px;
  color: #EEEEEE;
  font-size: 24px;
  margin-left: 40px;
}
</style>

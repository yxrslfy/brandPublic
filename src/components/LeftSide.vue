<template>
  <div class="left-side">
    <el-row>
      <el-col :span="24">
        <el-menu default-active="/index" class="el-menu-vertical-demo"  theme="" :router="true">
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/list">品牌列表</el-menu-item>
          <el-menu-item index="/detail">品牌详情</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'content',

  }
</script>
<style>
  .el-row .el-menu-vertical-demo {
    background-color: #FFF;
  }
  .left-side {
    width: 200px;
    min-height: 800px;
    float: left;
  }
</style>






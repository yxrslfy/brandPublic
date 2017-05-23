<template>
  <div class="home-top">
    <el-row>
      <el-col :span="6">
        <div class="home-top-left">
          <img src="../../assets/img/icon-01.png" alt="">
        </div>
        <div class="home-top-right">
          <p style="margin-bottom: 30px">覆盖品牌：<span class="text-oright">1125</span></p>
          <p>覆盖分类：<span class="text-oright">2415</span></p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="home-top-left">
          <img src="../../assets/img/icon-02.png" alt="">
        </div>
        <div class="home-top-right">
          <p style="margin-bottom: 30px">总信息量：<span class="text-oright">1125</span></p>
          <p>覆盖站点：<span class="text-oright">2415</span></p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="home-top-left">
          <img src="../../assets/img/icon-03.png" alt="">
        </div>
        <div class="home-top-right">
          <p>涉假消息：<span class="text-oright">1125</span></p>
          <p>涉及品牌：<span class="text-oright">2415</span></p>
          <p>涉及分类：<span class="text-oright">2415</span></p>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="home-top-left">
          <img src="../../assets/img/icon-04.png" alt="">
        </div>
        <div class="home-top-right">
          <p>负面消息：<span class="text-oright">1125</span></p>
          <p>涉及品牌：<span class="text-oright">1125</span></p>
          <p>涉及分类：<span class="text-oright">2415</span></p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
      name: "home-top"
  }
</script>

<style>
  .home-top {
    height: 130px;
    padding: 10px;
    margin-bottom:  20px;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
.home-top-left {
  float: left;
}
.home-top-left > img{
  width: 100px;
}
.home-top .el-row {
  height: 100%;
}
.home-top .el-row .el-col {
  padding: 10px 20px;
}
  .home-top-right {
    float: right;
    line-height: 34px;
  }
  .text-oright {
    color: #ff3e00;
  }
</style>

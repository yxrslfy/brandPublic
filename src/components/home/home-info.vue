<template>
  <div class="home-info">
    <div class="home-info-top">
      <h4 class="info-title">负面消息快递</h4>
      <!--<a href="" class="info-link">&gt;&gt; 更多涉假消息</a>-->
    </div>
    <div class="home-info-content">
      <div class="row">
        <label>涉及品牌：</label>
        <span>美素佳儿（1）</span>
        <span>雅培（2）</span>
        <span>雀巢（1）</span>
        <span>完达山（1）</span>
        <span>合生元（1）</span>
        <span>可瑞康（1）</span>
        <span>伊利诺优能（1）</span>
      </div>
      <div class="row">
        <label>涉及实体：</label>
        <span>京东超市（1）</span>
        <span>妈妈网（1）</span>
        <span>辣妈网（1）</span>
        <span>宝宝树（1）</span>
        <span>天猫超市（1）</span>
        <span>妈妈帮（2）</span>
        <span>淘宝（1）</span>

      </div>
      <div class="row">
        <label>涉及地点：</label>
        <span>上海（2） </span>
        <span>南京（2）</span>
        <span>合肥（1）</span>
        <span>蚌埠（1）</span>
        <span>其他（1）</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home-info'
}

</script>

<style scoped>
.home-info-top {
  overflow: hidden;
}
.info-title {
  float: left;
  padding: 10px 20px;
  color: #FFF;
  background: #3b4144;
  border-radius: 5px 5px 0 0;
}
.info-link {
  float: right;
  line-height: 40px;
}
.home-info-content {
  padding: 26px 35px;
  background: #f9f9f9;
  border-radius: 0 5px 5px 5px;
}
.home-info-content .row {
  padding: 5px;
}
.home-info-content .row label {
  font-weight: 900;
}
.home-info-content .row span {
  margin-right: 10px;
}
  .row span {
    cursor: pointer;
  }
</style>

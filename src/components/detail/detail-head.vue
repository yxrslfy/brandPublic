<template>
  <div class="detail-head">
    <div class="detail-head-left">
      <img src="../../assets/img/pic-02.jpg" alt="">
    </div>
    <div class="detail-head-right">
      <h3 class="m-b-md">贝因美冠军宝贝幼儿配方牛奶粉3段1-3周岁1000g</h3>
      <p>品牌名称：贝因美</p>
      <p>原产国：中国</p>
      <p>分类：婴幼儿用品 / 3段</p>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'detail-head'
  }
</script>

<style>
  .detail-head {
    padding: 15px;
    height: 190px;
    margin-bottom: 20px;
    border-radius: 5px;
    background: #f9f9f9;
  }
  .detail-head-left {
    float: left;
    width: 200px;
  }
  .detail-head-left img {
    width: 100%;
    height: 100%;
  }
  .detail-head-right {
    padding-top: 20px;
    margin-left: 20px;
    float: left;
    line-height:30px;
  }
  .detail-head-right p {
    font-size: 14px;
  }
</style>

<template>
  <div class="detail-price">
    <div class="detail-price-top">
      <h3 class="price-title">价格</h3>
    </div>
    <div class="detail-price-table">
      <h2 class="p-m font-bold">参考价：<span class="text-danger">￥120.00</span></h2>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>商城名称</th>
          <th>商品名称</th>
          <th>价格</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(tableData, index) in tableDatas">
          <td>{{ tableData.mall }}</td>
          <td>{{ tableData.commodity }}</td>
          <td class="text-danger">{{ tableData.price }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableDatas: [
          {
            mall: '京东商城',
            commodity: '贝因美冠军宝贝幼儿配方牛奶粉3段1-3周岁1000g',
            price: '120.00'
          }, {
            mall: '天猫',
            commodity: '贝因美冠军宝贝幼儿配方牛奶粉3段1-3周岁1000g',
            price: '120.00'
          }, {
            mall: '妈妈帮',
            commodity: '贝因美冠军宝贝幼儿配方牛奶粉3段1-3周岁1000g',
            price: '110.00'
          }, {
            mall: '宝宝树',
            commodity: '贝因美冠军宝贝幼儿配方牛奶粉3段1-3周岁1000g',
            price: '119.00'
          }
        ]
      }
    }
  }
</script>

<style>
  .detail-price {
    margin-bottom: 20px;
  }
  .detail-price-top {
    overflow: hidden;
  }
  .detail-price-table {
    padding: 15px;
    border-radius: 0 0 5px 5px;
    border: 1px solid #DDD;
  }
  .table > thead > tr > th {
    border-bottom: 0;
  }
</style>

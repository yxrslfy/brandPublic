<template>
  <div class="brand-price">
    <div class="brand-price-top">
      <h3 class="price-title">价格与分布</h3>
    </div>
    <div class="brand-price-chearts">
      <div id="price-pie" style="height: 290px;width: 80%;"></div>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'

  export default {
    name: 'brand-price',
    mounted(){
      let myChart = echarts.init(document.getElementById('price-pie'));
      myChart.setOption({
        title : {
          text: '红酒价格与分布',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['0-99元','100-199元','200-299元','300-499元','500-999元','1000元以上']
        },
        //0-99元100-199元200-299元300-499元500-999元1000元以上
        series : [
          {
            name: '价格与分布',
            type: 'pie',
            radius : '55%',
            center: ['40%', '60%'],
            data:[
              {value:335, name:'0-99元'},
              {value:310, name:'100-199元'},
              {value:234, name:'200-299元'},
              {value:135, name:'300-499元'},
              {value:185, name:'500-999元'},
              {value:355, name:'1000元以上'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    }
  }
</script>

<style>
  .brand-price {
    margin-bottom: 20px;
  }
  .brand-price-top {
    overflow: hidden;
  }
  .price-title {
    float: left;
    padding: 10px 20px;
    color: #FFF;
    background: #0274b1;
    border-radius: 5px 5px 0 0;
  }
  .brand-price-chearts {
    border-radius: 0 0 5px 5px;
    border: 1px solid #DDD;
  }
</style>

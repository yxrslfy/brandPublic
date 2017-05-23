<template>
  <div class="brand-distribution">
    <div class="brand-distribution-top">
      <h3 class="distribution-title">品牌所属国分布</h3>
    </div>
    <div class="brand-distribution-chearts">
      <div id="distribution-bar" style="height: 300px;"></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    mounted (){
      let myChart = echarts.init(document.getElementById('distribution-bar'));
      myChart.setOption({
        color: ['#3398DB'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '5%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            data : ['荷兰', '法国', '德国', '美国', '瑞典', '冰岛', '新西兰'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'品牌所属',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
          }
        ]
      });
    }
  }
</script>
<style>
  .brand-distribution {
    margin-bottom: 22px;
  }
  .brand-distribution-top {
    overflow: hidden;
  }
  .distribution-title {
    float: left;
    padding: 10px 20px;
    color: #FFF;
    background: #0274b1;
    border-radius: 5px 5px 0 0;
  }
  .brand-distribution-chearts {
    border: 1px solid #DDD;
    border-radius: 0 0 5px 5px;
  }
</style>

<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">来源分类</div>
      <div class="panel-body">
        <div id="pie-charts" style="height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted(){
      let myChart = echarts.init(document.getElementById('pie-charts'));
      myChart.setOption({
        title : {
          text: ''
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          x : 'center',
          y : 'bottom',
          data:['新闻','论坛','微博','微信公众号','博客','贴吧','问答','传统纸媒']
        },
        calculable : true,
        series : [
          {
            name:'来源分类',
            type:'pie',
            radius : [30, 120],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
              {value:10, name:'新闻'},
              {value:5, name:'论坛'},
              {value:15, name:'微博'},
              {value:25, name:'微信公众号'},
              {value:20, name:'博客'},
              {value:35, name:'贴吧'},
              {value:30, name:'问答'},
              {value:40, name:'传统纸媒'}
            ]
          }
        ]
      });
    }
  }
</script>

<style>

</style>

<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">舆论综合指数</div>
      <div class="panel-body">
        <div id="line-charts" style="height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted (){
      let myChart = echarts.init(document.getElementById('line-charts'));
      myChart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['合生元','惠氏奶粉','美赞臣','贝因美','雅培']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name:'合生元',
            type:'line',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'惠氏奶粉',
            type:'line',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'美赞臣',
            type:'line',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'贝因美',
            type:'line',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'雅培',
            type:'line',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
</script>

<style>

</style>

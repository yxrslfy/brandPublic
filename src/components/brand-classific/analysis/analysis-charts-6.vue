<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">媒体友好度排行 TOP10</div>
      <div class="panel-body">
        <div id="media-friendly" style="height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted(){
      let myChart = echarts.init(document.getElementById('media-friendly'));
      myChart.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        /*legend: {
         data: ['媒体关注']
         },*/
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['经济日报','东方财富网','华股财经','曲靖新闻网','金融界','新浪','亲贝网','临沂信息港','沪港通','新电力网']
        },
        series: [
          {
            name: '媒体友好度',
            type: 'bar',
            data: [11, 15, 18, 23, 24, 29, 104, 131, 247, 630]
          }
        ]
      });
    }
  }
</script>

<style>

</style>

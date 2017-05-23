<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">媒体关注度排行 TOP10</div>
      <div class="panel-body">
        <div id="media-focus" style="height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted(){
      let myChart = echarts.init(document.getElementById('media-focus'));
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
          data: ['中国网','金融界','东方财富网','中国经济网','新浪','临沂信息港','亲贝网','深圳房产信息网','沪港通','新电力网']
        },
        series: [
          {
            name: '媒体关注度',
            type: 'bar',
            data: [18, 21, 23, 29, 30, 40, 56,104, 131, 630]
          }
        ]
      });
    }
  }
</script>

<style>

</style>

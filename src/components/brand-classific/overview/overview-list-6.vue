<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        媒体友好度排行 TOP10
      </div>
      <div class="panel-body">
        <div id="funnel-charts" style="height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    mounted(){
      let myChart = echarts.init(document.getElementById('funnel-charts'));
      myChart.setOption({
        title: {
          text: ' '
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        /*toolbox: {
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },*/
        legend: {
          data: ['中国网','金融界','东方财富网','中国经济网','新浪','临沂信息港','亲贝网','深圳房产信息网','沪港通','新电力网']
        },
        series: [

          {
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '100%',
            label: {
              normal: {
                position: 'inside',
                formatter: '{c}%',
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                position:'inside',
                formatter: '{b}实际: {c}%'
              }
            },
            itemStyle: {
              normal: {
                opacity: 1,
                borderColor: '#fff',
                borderWidth: 2
              }
            },
            data: [
              {value: 35, name: '中国网'},
              {value: 35, name: '金融界'},
              {value: 65, name: '东方财富网'},
              {value: 50, name: '中国经济网'},
              {value: 80, name: '新浪'},
              {value: 70, name: '临沂信息港'},
              {value: 34, name: '亲贝网'},
              {value: 66, name: '深圳房产信息网'},
              {value: 56, name: '沪港通'},
              {value: 180, name: '新电力网'}
            ]
          }
        ]
      });
    }
  }
</script>

<style>

</style>

<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <!--<div class="panel-heading"></div>-->
      <div class="panel-body">
        <el-tabs v-model="activeName">
          <el-tab-pane label="媒体热议话题分布" name="first">
            <div id="media-hot" style="height: 282px;"></div>
          </el-tab-pane>
          <el-tab-pane label="网民热议话题分布" name="second">
            <div id="people-hot" style="height: 282px;width: 370px;"></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted(){
      let myChart = echarts.init(document.getElementById('media-hot'));
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
          data: ['惠氏奶粉','雅培','美赞臣','合生元','贝因美']
        },
        series: [
          {
            name: '媒体关注',
            type: 'bar',
            data: [ 23, 301, 354, 656, 670]
          }
        ]
      });


      let myChart2 = echarts.init(document.getElementById('people-hot'));
      myChart2.setOption({
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
          data: ['惠氏奶粉','合生元','贝因美','雅培','美赞臣']
        },
        series: [
          {
            name: '网民关注',
            type: 'bar',
            data: [ 237, 290, 1004, 1031, 1630]
          }
        ]
      })
    }
  }
</script>

<style>

</style>

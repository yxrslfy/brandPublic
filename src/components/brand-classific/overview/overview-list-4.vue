<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        友好指数
      </div>
      <div class="panel-body">
        <div id="gauge-charts" style="height: 300px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted(){
      let myChart = echarts.init(document.getElementById('gauge-charts'));
      myChart.setOption({
        tooltip : {
          formatter: "{a} <br/>{c} {b}"
        },
        /*toolbox: {
          show: true,
          feature: {
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },*/
        series : [
          {
            name: '速度',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '50%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 15,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            title : {
              offsetCenter: [0, '80%'],
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontSize: 12
              }
            },
            detail : {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 14
              }
            },
            data:[{value: 40, name: '综合友好指数'}]
          },
          {
            name: '转速',
            type: 'gauge',
            center: ['20%', '55%'],    // 默认全局居中
            radius: '35%',
            min:0,
            max:7,
            endAngle:45,
            splitNumber:7,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              length:12,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length:20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width:5
            },
            title: {
              offsetCenter: [0, '80%'],       // x, y，单位px
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontSize: 12
              }
            },
            detail: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 14
              }
            },
            data:[{value: 1.5, name: '媒体友好指数'}]
          },
          {
            name: '油表',
            type: 'gauge',
            center: ['80%', '55%'],    // 默认全局居中
            radius: '35%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: -45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              length:12,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length:20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width:5
            },
            title: {
              offsetCenter: [0, '80%'],       // x, y，单位px
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontSize: 12
              }
            },
            detail: {
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 14
              }
            },
            data:[{value: 1.5, name: '网民友好指数'}]
          },

        ]
      });
    }
  }
</script>

<style>

</style>

<template>
  <div class="p-w-sm">
    
    <!--时间-->
    <div class="panel panel-default">
      <div class="panel-heading">
        <span>时间：</span>
        <button class="btn btn-link btn-sm">今天</button>
        <button class="btn btn-link btn-sm">一周</button>
        <button class="btn btn-link btn-sm">两周</button>
        <button class="btn btn-link btn-sm">一月</button>
        <button class="btn btn-link btn-sm">实时数据及近30天历史数据回溯</button>
      </div>
    </div>
    <!--概览-->
    <div class="row">
      <div class="col-lg-3 ">
        <div class="panel panel-default">
          <div class="panel-body no-padding">
            <div class="col-lg-4 yellow-bg text-center p-xs">
              <i class="fa fa-laptop fa-3x"></i>
            </div>
            <div class="col-lg-8 white-bg">
              <h3 class="p-h-xs">5842</h3>
              <p>舆情总量</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="panel panel-default">
          <div class="panel-body no-padding">
            <div class="col-lg-4 lazur-bg text-center p-xs">
              <i class="fa fa-line-chart fa-3x"></i>
            </div>
            <div class="col-lg-8 white-bg">
              <h3 class="p-h-xs">5842</h3>
              <p>正面舆情</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="panel panel-default">
          <div class="panel-body no-padding">
            <div class="col-lg-4 blue-bg text-center p-xs">
              <i class="fa fa-bar-chart-o fa-3x"></i>
            </div>
            <div class="col-lg-8 white-bg">
              <h3 class="p-h-xs">5842</h3>
              <p>中立舆情</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="panel panel-default">
          <div class="panel-body no-padding">
            <div class="col-lg-4 red-bg text-center p-xs">
              <i class="fa fa-exclamation-triangle fa-3x"></i>
            </div>
            <div class="col-lg-8 white-bg">
              <h3 class="p-h-xs">5842</h3>
              <p>负面舆情</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--图表-->
    <overview-list></overview-list>
  </div>
</template>

<script>
  import OverviewList from './overview-list.vue'

  export default {
    components: {
      OverviewList
    }
  }
</script>

<style>
  .panel {
    border-radius: 0;
  }
</style>

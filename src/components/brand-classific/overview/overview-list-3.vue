<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        舆情信息实时统计
      </div>
      <div class="panel-body">
        <!--<div id="pie-charts" style="height: 300px;"></div>-->
        <el-table :data="tableData" border height="300" style="width: 100%;">
          <el-table-column prop="media" label="" ></el-table-column>
          <el-table-column prop="today" label="今天" ></el-table-column>
          <el-table-column prop="week" label="一周"></el-table-column>
          <el-table-column prop="twoWeek" label="两周" ></el-table-column>
          <el-table-column prop="month" label="30天" ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          media: '新闻',
          today: '21',
          week: '132',
          twoWeek: '432',
          month: '1329'
        }, {
          media: '论坛',
          today: '6',
          week: '21',
          twoWeek: '152',
          month: '753'
        }, {
          media: '微博',
          today: '60',
          week: '560',
          twoWeek: '1521',
          month: '7531'
        }, {
          media: '微信',
          today: '21',
          week: '312',
          twoWeek: '815',
          month: '5212'
        }, {
          media: '博客',
          today: '7',
          week: '132',
          twoWeek: '612',
          month: '1522'
        }, {
          media: '贴吧',
          today: '21',
          week: '245',
          twoWeek: '861',
          month: '4012'
        }, {
          media: '问答',
          today: '9',
          week: '16',
          twoWeek: '124',
          month: '3241'
        }, {
          media: '传统媒体',
          today: '12',
          week: '61',
          twoWeek: '253',
          month: '900'
        }]
      }
    }
  }
</script>

<style></style>

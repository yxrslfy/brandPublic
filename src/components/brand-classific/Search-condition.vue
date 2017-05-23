<template>
  <div class="search-condition">
    <div class="row">
      <label class="custom-label">阶段 :</label>
      <button class="btn btn-link btn-sm" value="0">全部</button>
      <button class="btn btn-link btn-sm" value="1">1段</button>
      <button class="btn btn-link btn-sm" value="2">2段</button>
      <button class="btn btn-link btn-sm" value="3">3段</button>
      <button class="btn btn-link btn-sm" value="4">4段</button>
    </div>
    <div class="row">
      <label class="custom-label">包装 :</label>
      <button class="btn btn-link btn-sm" value="0">全部</button>
      <button class="btn btn-link btn-sm" value="1">罐装</button>
      <button class="btn btn-link btn-sm" value="2">盒装</button>
    </div>
    <div class="row">
      <label class="custom-label">情感 :</label>
      <button class="btn btn-link btn-sm" value="0">全部</button>
      <button class="btn btn-link btn-sm" value="1">正面</button>
      <button class="btn btn-link btn-sm" value="2">中立</button>
      <button class="btn btn-link btn-sm" value="3">负面</button>
    </div>
    <div class="row">
      <label class="custom-label">类型 :</label>
      <button class="btn btn-link btn-sm" value="0">新闻</button>
      <button class="btn btn-link btn-sm" value="1">论坛</button>
      <button class="btn btn-link btn-sm" value="2">微博</button>
      <button class="btn btn-link btn-sm" value="3">微信</button>
      <button class="btn btn-link btn-sm" value="4">博客</button>
      <button class="btn btn-link btn-sm" value="5">贴吧</button>
      <button class="btn btn-link btn-sm" value="6">问答</button>
      <button class="btn btn-link btn-sm" value="7">官方</button>
    </div>
    <div class="row">
      <label class="custom-label">时间 :</label>
      <button class="btn btn-link btn-sm" value="0">今天</button>
      <button class="btn btn-link btn-sm" value="1">昨天</button>
      <button class="btn btn-link btn-sm" value="2">7天</button>
      <button class="btn btn-link btn-sm" value="3">30天</button>
      <el-date-picker
        v-model="value7"
        type="daterange"
        align="right"
        placeholder="选择日期范围"
        :picker-options="pickerOptions2">
      </el-date-picker>
    </div>
    <div class="row text-center">
      <button class="btn btn-info btn-sm">搜索</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
      };
    }
  };
</script>

<style scoped>
  .search-condition .row {
    padding: 8px 0;
    border-bottom: 1px dashed #DDDDDD;
  }
  .search-condition .row:last-child {
    border-bottom: 0;
  }
  .custom-label {
    padding: 5px 10px;
    line-height: 1.5;
    margin: 0;
  }
</style>

<template>
  <div class="report">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="导出报告" name="first">
        <div class="form-group m-l">
          <label class="">时间 ：</label>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 今天
          </label>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 昨天
          </label>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 7天
          </label>
          <label class="radio-inline m-r">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"> 30天
          </label>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </div>
        <div class="form-group m-l">
          <label class="">来源 ：</label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox1" value="option1"> 微博
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox2" value="option2"> 传统纸媒
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox3" value="option3"> 新闻
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox4" value="option4"> 论坛
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox5" value="option5"> 博客
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox6" value="option6"> 微信
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox7" value="option7"> 贴吧
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox8" value="option8"> 问答
          </label>
        </div>
        <div class="form-group m-l clear">
          <label class="export-label">导出类型 ：</label>
          <div class="export-type">
            <img src="../../../static/img/word.png" alt="">
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>
                doc 格式
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="2">
                pdf 格式
              </label>
            </div>
          </div>
          <div class="export-type">
            <img src="static/img/excel.png" alt="">
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios3" value="3">
                xls 格式
              </label>
            </div>
          </div>
          <div class="export-type">
            <img src="static/img/pdf.png" alt="">
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios4" value="4">
                pdf 格式
              </label>
            </div>
          </div>
        </div>
        <div class="form-group m-l ">
          <a class="btn btn-info btn-sm" href="static/downFile.docx" download="static/downFile.docx">下载</a>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
	export default {
    data() {
      return {
        activeName: 'first',
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
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
  .export-label {
    float: left;
  }
	.export-type {
    float: left;
    margin-left: 20px;
  }
</style>


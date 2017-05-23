<template>
  <div class="ibox">
    <div class="ibox-title">
      <search-condition></search-condition>
    </div>
    <div class="ibox-content">
      <p class="p-h-xs border-bottom">全部舆情（共1241条）</p>
      <ul class="info-summary">
        <li class="info-list clear" v-for="item in items">
          <div class="pull-left custom-label">
            <span class="label label-primary" v-if="item.comment_type == 1">正面</span>
            <span class="label label-danger" v-else-if="item.comment_type == 0">负面</span>
            <span class="label label-success" v-else>中立</span>
          </div>
          <div class="pull-left m-l-sm custom-info">
            <p class="text-success m-b-xs">{{ item.name }}</p>
            <p class="m-b-sm">{{ item.commont }}</p>
            <p>{{ item.update }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import SearchCondition from '../Search-condition.vue'

  export default {
    components:{
      SearchCondition
    },
    data(){
      return {
        items: []
      }
    },
    mounted: function () {
      // 涉假
      this.$http.get('http://localhost:3000/commont', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        console.log(response);
        this.items = response.body;

      }, function (response) {
        console.log(response)
      });
    }
  }
</script>

<style>
  .info-summary .info-list {
    padding: 8px 0;
    border-bottom: 1px dashed #DDD;
  }
  .info-summary .custom-label {
    width: 40px;
  }
  .info-summary .custom-info {
    width: calc(100% - 50px);
  }
</style>

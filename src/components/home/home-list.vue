<template>
  <ul class="home-list" id="home-list">
    <li class="home-list-item" v-for="item in items" v-show="item.comment_type == 0">
      <p class="font-bold list-item-title m-b-md">
        <span class="text-danger">【{{ item.source }}】</span>
        <span>{{ item.negative }}</span>
      </p>
      <div class="list-item-info m-b-sm">
        <span class="text-danger">涉及品牌：{{ item.brank_name }}</span>
        <span class="text-danger">涉及实体：{{ item.store }}</span>
      </div>
      <div class="list-item-btm">
        <span>发布时间：{{ item.update }}</span>
        <span>站点：{{ item.source }}</span>
        <span>情感倾向：负面</span>
        <!--<div class="pull-right">
          <span class="">收藏此信息</span>
        </div>-->
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
        items: []
    }
  },
  mounted: function() {
    this.$http.get('http://localhost:3000/list', {}, {
      headers: {},
    }).then(function(res) {
      // 这里是处理正确的回调
      console.log(res);
      this.items = res.body;

    }, function(res) {
      // 这里是处理错误的回调
      console.log(res)
    });
  }
}
</script>
<style>
  .home-list {
    border: 1px solid #DDD;
  }
  .home-list-item {
    padding: 20px 0;
    margin: 0 10px;
    border-bottom: 1px dashed #ddd;
  }
  .list-item-title {
    font-size: 18px;
  }
  .list-item-content {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  .list-item-info span {
    margin-right: 20px;
  }
  .list-item-btm > span {
    margin-right: 20px;
  }
</style>

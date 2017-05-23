<template>
  <div class="home-fake">
    <div class="home-fake-top">
      <h3 class="fake-title">涉假消息快递</h3>
    </div>
    <ul class="commont-list">
      <li class="commont-list-item" v-for="data in datas">
        <p class="font-bold list-item-title m-b-md">
          <span class="text-danger">【{{ data.source }}】</span>
          <span> {{ data.commont}}</span>
        </p>
        <div class="list-item-info m-b-sm">
          <span class="text-danger">涉及品牌：{{ data.name }}</span>
          <span class="text-danger">涉及实体：{{ data.store }}</span>
        </div>
        <div class="list-item-btm">
          <span>发布时间：{{ data.update}}</span>
          <span>站点：{{ data.source }}</span>
          <span>情感倾向：负面</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        datas: []
      }
    },
    mounted: function () {
      // 涉假
      this.$http.get('http://localhost:3000/false', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        console.log(response);
        this.datas = response.body;

      }, function (response) {
        console.log(response)
      });
    }
  }
</script>

<style scoped>
  .home-fake {
    margin-bottom: 20px;
  }
  .home-fake-top {
    overflow: hidden;
  }
  .fake-title {
    float: left;
    padding: 8px 20px;
    color: #FFF;
    background: #b11830;
    border-radius: 5px 5px 0 0;
  }
  .commont-list {
    border: 1px solid #dedede;
    border-radius: 0 5px 5px 5px;
  }
</style>

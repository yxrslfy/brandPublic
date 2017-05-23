<template>
  <div class="detail-commont">
    <div class="detail-commont-list">
      <div class="commont-info">
        <p class="p-xs p1">
          <label class="label label-danger">优点</label>
          <span>口感好</span>
          <span>包装不错</span>
          <span>质量好</span>
          <span>快递不错</span>
          <span>是正品</span>
          <span>奶香浓郁</span>
        </p>
        <p class="p-xs p2">
          <label class="label label-success">缺点</label>
          <span>价格太贵</span>
          <span>口感不好</span>
          <span>质量一般</span>
          <span>宝宝吃了拉肚子</span>
        </p>
      </div>
      <div class="custom-br">
        <el-tabs v-model="activeName">
          <el-tab-pane label="最新评论" name="first">
            <ul class="commont-list">
              <li class="commont-list-item" v-for="article in articles">
                <p class="font-bold list-item-title m-b-md">
                  <span class="text-danger">【{{ article.source }}】</span>
                  <span> {{ article.commont}}</span>
                </p>
                <div class="list-item-info m-b-sm">
                  <span class="text-danger">涉及品牌：{{ article.name }}</span>
                  <span class="text-danger">涉及实体：{{ article.store }}</span>
                </div>
                <div class="list-item-btm">
                  <span>发布时间：{{ article.update}}</span>
                  <span>站点：{{ article.source }}</span>
                  <span>情感倾向：
                    <span v-if="article.comment_type == 1">正面</span>
                    <span v-if="article.comment_type == 0">负面</span>
                  </span>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="负面评论" name="second">
            <ul class="commont-list">
              <li class="commont-list-item" v-for="item in items">
                <p class="font-bold list-item-title m-b-md">
                  <span class="text-danger">【{{ item.source }}】</span>
                  <span> {{ item.negative}}</span>
                </p>
                <div class="list-item-info m-b-sm">
                  <span class="text-danger">涉及品牌：{{ item.brank_name }}</span>
                  <span class="text-danger">涉及实体：{{ item.source }}</span>
                </div>
                <div class="list-item-btm">
                  <span>站点：{{ item.source }}</span>
                  <span>情感倾向：负面</span>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="涉假评论" name="third">
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
          </el-tab-pane>
        </el-tabs>
      </div>
      <!--<ul class="commont-list">
        <li class="commont-list-item" v-for="article in articles">
          <p class="font-bold list-item-title m-b-md">
            <span class="text-danger">【{{ article.source }}】</span>
            <span> {{ article.commont}}</span>
          </p>
          <div class="list-item-info m-b-sm">
            <span class="text-danger">涉及品牌：{{ article.name }}</span>
            <span class="text-danger">涉及实体：{{ article.store }}</span>
          </div>
          <div class="list-item-btm">
            <span>发布时间：{{ article.update}}</span>
            <span>站点：{{ article.source }}</span>
            <span>情感倾向：负面</span>
          </div>
        </li>
      </ul>-->
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        activeName: 'first',
        articles: [],
        items: [],
        datas: []
      }
    },
    mounted: function () {
      // 最新
      this.$http.get('http://localhost:3000/commont', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        console.log(response);
        this.articles = response.body;

      }, function (response) {
        console.log(response)
      });
      // 负面
      this.$http.get('http://localhost:3000/list', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        console.log(response);
        this.items = response.body;

      }, function (response) {
        console.log(response)
      });
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

<style>
  .detail-commont-top {
    overflow: hidden;
  }
  .commont-title {
    float: left;
    padding: 8px 20px;
    color: #FFF;
    background: #0274b1;
    border-radius: 5px 5px 0 0;
  }
  .detail-commont-list {
    border: 1px solid #DDDDDD;
    border-radius: 0 0 5px 5px;

  }
  .commont-info {
    padding: 28px 30px;
  }
  .commont-info p {
    overflow: hidden;
  }
  .commont-info p .label {
    float: left;
    margin-right: 20px;
  }
  .commont-info p span {
    float: left;
    margin-right: 10px;
    padding: 3px 8px;
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer;
  }
  .commont-info .p1 span {
    border:1px solid #ffd7dd;
  }
  .commont-info .p2 span {
    border:1px solid #1c84c6;
  }
  .commont-info .p1 span:hover {
    border: 1px solid #ff0000;
    background: rgba(255,0,0,0.15);
    color: #ff0000;
  }
  .commont-info .p2 span:hover {
    border: 1px solid #1c84c6;
    background: rgba(28,132,198,0.15);
    color: #1c84c6;
  }
  .custom-br {
    padding: 8px 10px;
    background: #F9F9F9;
  }
  .custom-br a {
    padding: 0 5px;
  }
  .commont-list {
    padding: 10px 20px;
  }
  .commont-list-item {
    border-bottom: 1px dashed #DDD;
    padding: 20px 0;
  }
</style>

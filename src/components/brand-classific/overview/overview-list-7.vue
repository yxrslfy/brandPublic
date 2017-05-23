<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        最新舆情
        <span class="pull-right">更多</span>
      </div>
      <div class="panel-body">
        <ul class="new">
          <li class="new-list" v-for="item in items">
            <p>
              <span class="label label-success">新</span>
              {{ item.commont }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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

<style scoped>
  .new {
    height: 300px;
    overflow-y: scroll;
  }
  .new-list {
    padding: 8px 0;
    border-bottom: 1px dashed #ddd;
  }
  .new-list > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 350px;
  }
</style>

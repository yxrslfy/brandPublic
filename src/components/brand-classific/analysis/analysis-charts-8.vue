<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        负面舆情列表
        <span class="pull-right">更多</span>
      </div>
      <div class="panel-body">
        <ul class="downside">
          <li class="downside-list" v-for="item in items">
            <p>
              <span class="label label-danger">负</span>
              {{ item.negative}}
            </p>
            <span></span>
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
      this.$http.get('http://localhost:3000/list', {}, {
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
  .downside {
    height: 300px;
    overflow-y: scroll;
  }
  .downside-list {
    padding: 8px 0;
    border-bottom: 1px dashed #ddd;
  }
  .downside-list > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 350px;
  }
</style>

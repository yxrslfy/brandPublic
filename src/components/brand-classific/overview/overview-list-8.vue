<template>
  <div class="col-lg-4">
    <div class="panel panel-default">
      <div class="panel-heading">
        百度网页搜索结果
      </div>
      <div class="panel-body" style="height: 330px;overflow: auto;">
        <table class="table table-hover table-bordered">
          <thead>
          <tr>
            <th></th>
            <th>快照时间</th>
            <th>标题</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items">
            <td> <span class="label label-info">正</span></td>
            <td> {{ item.update }}</td>
            <td>{{ item.name }}</td>
          </tr>
          </tbody>
        </table>
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

<style>

</style>

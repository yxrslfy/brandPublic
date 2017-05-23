<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="hot-top">
        <h3 class="hot-title">热门排行</h3>
      </div>
      <div class="hot-info">
        <table class="table">
          <tbody>
          <tr v-for="(hot, index) in hots">
            <td>{{ index+1 }}</td>
            <td>{{ hot.name }}</td>
            <td>{{ hot.scale }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="positive-top">
        <h3 class="positive-title">正面排行</h3>
      </div>
      <div class="positive-info">
        <table class="table">
          <tbody>
          <tr v-for="(item, index) in items">
            <td>{{ index+1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.scale }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="negative-top">
        <h3 class="negative-title">负面排行</h3>
      </div>
      <div class="negative-info">
        <table class="table">
          <tbody>
          <tr v-for="(neg, index) in negs">
            <td>{{ index+1 }}</td>
            <td>{{ neg.name }}</td>
            <td>{{ neg.scale }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        data(){
            return {
                hots: [
                  {'name': '惠氏/启赋', 'scale': '70.4%'},
                  {'name': '惠氏/S-26', 'scale': '51.2%'},
                  {'name': '喜宝', 'scale': '49.4%'},
                  {'name': '美赞臣', 'scale': '48.4%'},
                  {'name': '君乐宝', 'scale': '48.0%'},
                  {'name': '贝因美', 'scale': '47.5%'},
                  {'name': '雅培', 'scale': '43.1%'},
                  {'name': '爱他美', 'scale': '34.8%'},
                  {'name': '伊利', 'scale': '28.6%'},
                  {'name': '诺优能', 'scale': '10.7%'}
                ],
                items: [
                  {'name': '天赋力', 'scale': '70.4%'},
                  {'name': '美赞臣', 'scale': '51.2%'},
                  {'name': '贝因美', 'scale': '49.4%'},
                  {'name': '伊利', 'scale': '48.4%'},
                  {'name': '诺优能', 'scale': '48.0%'},
                  {'name': '美赞臣', 'scale': '47.5%'},
                  {'name': '雀巢', 'scale': '43.1%'},
                  {'name': '完达山', 'scale': '34.8%'},
                  {'name': '森宝Semper Allomin', 'scale': '28.6%'},
                  {'name': '美素', 'scale': '10.7%'}
                ],
                negs: [
                  {'name': '飞鹤(FIRMUS)', 'scale': '71.3%'},
                  {'name': '圣元(Synutra)', 'scale': '51.6%'},
                  {'name': '蒙牛(MENGNIU)', 'scale': '50.4%'},
                  {'name': '施恩', 'scale': '49.4%'},
                  {'name': ' A2.', 'scale': '49.0%'},
                  {'name': '森宝Semper Allomin', 'scale': '43.4%'},
                  {'name': '美素', 'scale': '41.2%'},
                  {'name': '合生元', 'scale': '35.7%'},
                  {'name': '天赋力', 'scale': '22.6%'},
                  {'name': '美赞臣', 'scale': '11.4%'}
                ]
            }
        }
    }
</script>

<style>
  .table {
    width: 100%;
    text-align: center;
    border-top: 0;
    border-bottom: 1px solid #ddd;
  }
  .hot-top,
  .positive-top,
  .negative-top {
    overflow: hidden;
  }
  .hot-title,
  .positive-title,
  .negative-title {
    float: left;
    padding: 10px 20px;
    color: #FFF;
    background: #0274b1;
    border-radius: 5px 5px 0 0;
  }
  .hot-info,
  .positive-info,
  .negative-info {
    border-radius: 0 5px 5px 5px;
    border: 1px solid #DDD;
    padding: 15px;
  }
</style>

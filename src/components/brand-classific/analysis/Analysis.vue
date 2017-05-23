<template>
  <div class="ibox">
    <div class="ibox-title">
      <search-condition></search-condition>
    </div>
    <div class="ibox-content">
      <div class="from-group row">
        <charts1></charts1>
        <charts2></charts2>
        <charts3></charts3>
      </div>
      <div class="from-group row">
        <charts4></charts4>
        <charts5></charts5>
        <charts6></charts6>
      </div>
      <div class="from-group row">
        <charts7></charts7>
        <charts8></charts8>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchCondition from '../Search-condition.vue'
  import charts1 from './analysis-charts-1.vue'
  import charts2 from './analysis-charts-2.vue'
  import charts3 from './analysis-charts-3.vue'
  import charts4 from './analysis-charts-4.vue'
  import charts5 from './analysis-charts-5.vue'
  import charts6 from './analysis-charts-6.vue'
  import charts7 from './analysis-charts-7.vue'
  import charts8 from './analysis-charts-8.vue'

  export default {
    components:{
      SearchCondition,
      charts1,
      charts2,
      charts3,
      charts4,
      charts5,
      charts6,
      charts7,
      charts8
    },
  }
</script>

<style>

</style>

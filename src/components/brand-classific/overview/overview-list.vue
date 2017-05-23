<template>
  <div class=" ">
    <div class="from-group row">
      <list1></list1>
      <list2></list2>
      <list3></list3>
    </div>
    <div class="from-group row">
      <list4></list4>
      <list5></list5>
      <list6></list6>
    </div>
    <div class="from-group row">
      <list7></list7>
      <list8></list8>
      <list9></list9>
    </div>
  </div>
</template>

<script>
  import list1 from './overview-list-1.vue'
  import list2 from './overview-list-2.vue'
  import list3 from './overview-list-3.vue'
  import list4 from './overview-list-4.vue'
  import list5 from './overview-list-5.vue'
  import list6 from './overview-list-6.vue'
  import list7 from './overview-list-7.vue'
  import list8 from './overview-list-8.vue'
  import list9 from './overview-list-9.vue'
  export default {
    components: {
      list1,
      list2,
      list3,
      list4,
      list5,
      list6,
      list7,
      list8,
      list9
    }
  }
</script>

<style></style>

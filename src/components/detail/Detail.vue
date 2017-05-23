<template>
  <div class="detail">
    <!--<detail-head></detail-head>-->
    <!--<detail-price></detail-price>-->
    <detail-commont></detail-commont>
  </div>
</template>

<script>
  import DetailHead from './detail-head.vue';
  import DetailPrice from './detail-price.vue';
  import DetailCommont from './detail-commont.vue';

  export default {
    name: 'detail',
    components: {
      DetailHead,
      DetailPrice,
      DetailCommont
    }
  }
</script>

<style>

</style>

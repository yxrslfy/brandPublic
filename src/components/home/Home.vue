<template>
  <div class="home">
    <home-top></home-top>
    <home-fake></home-fake>
    <home-info></home-info>
    <home-list></home-list>
  </div>
</template>

<script>
  import HomeTop from './home-top.vue'
  import HomeFake from './home-fake.vue'
  import HomeInfo from './home-info.vue'
  import HomeList from './home-list.vue'

  export default {
    name: 'home',
    components: {
      HomeTop,
      HomeFake,
      HomeInfo,
      HomeList
    }
  }
</script>


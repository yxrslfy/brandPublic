<template>
  <div class="brand-list">
    <brand-all></brand-all>
    <brand-distribution></brand-distribution>
    <brand-price></brand-price>
    <ranking></ranking>
  </div>
</template>

<script>
import BrandAll from './brand-all'
import BrandDistribution from './brand-distribution'
import BrandPrice from './brand-price'
import Ranking from './ranking/Ranking'

export default {
  name: 'brand-list',
  components: {
    BrandAll,
    BrandDistribution,
    BrandPrice,
    Ranking
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

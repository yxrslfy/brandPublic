<template>
  <div class="brank-all">
    <div class="brank-all-top">
      <h3 class="bank-title">所有品牌</h3>
      <ul class="brank-type">
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </div>
    <div class="brank-all-info">
      <span>爱他美（Aptamil）</span> |
      <span>美赞臣（MeadJohnson）</span> |
      <span>雅培（Abbott）</span> |
      <span>惠氏（Wyeth）</span> |
      <span>美素佳儿（Friso）</span> |
      <span>伊利诺优能（Nutrilon）</span> |
      <span>雀巢（Nestle）</span> |
      <span>飞鹤（FIRMUS）</span> |
      <span>贝因美（Beingmate）</span> |
      <span>喜宝（HiPP）</span> |
      <span>君乐宝（JUNLEBAO）</span> |
      <span>完达山（wondersun）</span> |
      <span>牛栏（Cow&Gate）</span> |
      <span>合生元（BIOSTIME）</span> |
      <span>A2.</span> |
      <span>贝拉米（Bellamy's）</span> |
      <span>可瑞康（karicare）</span> |
      <span>佳贝艾特（Kabrita）</span>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'brank-all'

  }
</script>

<style>
  .brank-all {
    margin-bottom: 22px;
  }
  .brank-all-top {
    overflow: hidden;
  }
  .bank-title {
    float: left;
    padding: 10px 20px;
    color: #FFF;
    background: #0274b1;
    border-radius: 5px 5px 0 0;
  }
  .brank-type {
    float: right;
    line-height: 30px;
  }
  .brank-type li {
    float: left;
    padding: 0 10px;
  }
  .brank-all-info {
    padding: 30px;
    line-height: 26px;
    border: 1px solid #DDD;
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
  }
  .brank-all-info > span {
    padding: 0 10px;
    cursor: pointer;
  }
</style>

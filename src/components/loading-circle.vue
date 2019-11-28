<template>
  <div class="loader">
    <div class="banner-animation">
      <img src="../assets/images/svg/semicircle.svg" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .banner-animation{
    width: 932px;
    height: 399px;
    margin: 0 auto;
    overflow: hidden;
    @media screen and (max-width: 1204px) {
       width: 80%;
    }
    @media screen and (max-width: 932px) {
      width: 90%;
    }
    @media screen and (max-width: 500px ) {
      width: 100%;
      height: 200px;
    }
    img{
      transform: translate(0, -60%) rotate(0deg);
      animation: semicircle 45s linear infinite;
    }
  }
</style>

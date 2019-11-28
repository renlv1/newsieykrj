<template>
  <div>
    <div class="move-line-box" v-show="isAnimation1">
      <span class="lin-a"></span>
      <span class="lin-b"></span>
      <div class="circleBox"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
  export default {
  data () {
    return {
      isAnimation1: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleScroll)
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  methods: {
    handleScroll () {
      let box1top = document.querySelector('.second').offsetTop
      let _innerHeight = window.innerHeight * 0.7
      let _pageYOffset = window.pageYOffset
      let _height = _innerHeight + _pageYOffset
      if (_height > box1top) {
        this.isAnimation1 = true
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleScroll, false)
    window.removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>

<style lang="stylus" scoped>
  .move-line-box
    position: absolute;
    top: 102px;
    left: -60px
    width: 62px;
    @media screen and (max-width: 1200px)
      display none
    .lin-a
      position: absolute;
      width: 0;
      height: 2px;
      top: 0;
      right: 0;
      background-color: #c90010;
      animation: lineMoveA linear 6s;
      animation-fill-mode: forwards;
    .lin-b
      position: absolute;
      width: 2px;
      height: 0;
      top: 0;
      left: 0;
      background-color: #c90010;
      animation: lineMoveB linear 6s;
      animation-fill-mode: forwards;
    .circleBox
      position: absolute;
      width: 20px;
      height: 20px;
      top: -9px;
      border-radius: 100%;
      border: 3px solid #c90010;
      box-sizing: border-box;
      left: 40px;
      background-color: #131E24;
      animation: circleMoveOne linear 6s;
      animation-fill-mode: forwards;
      &:after
        content: '';
        width: 6px;
        height: 6px;
        background-color: #c90010;
        border-radius: 100%;
        position: absolute;
        left: 4px;
        top: 4px;
  @keyframes lineMoveA
    0%
      width: 0
    50%
      width: 62px
    100%
      width: 62px
  @keyframes lineMoveB
    0%
      height: 0
    50%
      height: 0
    100%
      height: 306px
  @keyframes circleMoveOne
    50%
      transform: translate(-50px, 0px)
    100%
      transform: translate(-50px,306px)
</style>

<template>
  <div class="headers" :class="{'fixed-cls': isFixed}">
    <div class="wrappers">
      <div class="menus">
        <router-link to="/" class="list"><span class="link">HOME</span></router-link>
        <router-link to="/wiki" class="list"><span class="link">WIKI</span></router-link>
        <div class="logo-wrapper">
          <div class="logo-content"></div>
          <router-link to="/" tag="img" :src="$t('head.imgUrl')" alt="" class="imgs"></router-link>
        </div>
        <router-link to="/dApp" class="list"><span class="link">NETWORK</span></router-link>
        <router-link to="/aboutUs" class="list"><span class="link">TEAM</span></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
      if (window.pageYOffset > 0) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    })
  },
  methods: {
    handleScroll () {
      this.isFixed = window.pageYOffset > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .headers
    width 100%
    height 60px
    background rgba(0,0,0,.4)
    position: fixed
    top: 0
    z-index: 100
    &.fixed-cls
      background-color: #000
      .menus
        .logo-wrapper
          cursor pointer
          .logo-content
            cursor pointer
            display none
          .imgs
            width: 40px
            height: 40px !important
            top: 10px !important
            cursor pointer
    .wrappers
      width 1000px
      margin 0 auto
      @media screen and (max-width: 1000px)
        width: 100%
      .menus
        display flex
        padding 0
        align-items center
        .list
          width 180px
          height 60px
          display flex
          align-items center
          justify-content center
          color #fff
          font-size: 16px
          @media screen and (max-width: 1000px)
            font-size: 12px
          &.router-link-exact-active
            .link
              font-weight bold
              position: relative
              &::before
                content ''
                width: 100%
                border-top: 3px solid #c90010
                position: absolute
                bottom -8px
                display block
        .logo-wrapper
          cursor pointer
          width 260px
          height 60px
          position: relative
          .logo-content
            position: absolute
            top: 60px
            width: 0;
            height: 0;
            border-left: 130px solid transparent;
            border-right: 130px solid transparent;
            border-top: 74px solid rgba(0,0,0,.4);
            @media screen and (max-width: 1000px)
              display none
          .imgs
            position: absolute
            left: 50%
            top 14px
            transform translateX(-50%)
            width 80px
            height 80px
            @media screen and (max-width: 1000px)
              top: 10px
              width:40px
              height: 40px
</style>

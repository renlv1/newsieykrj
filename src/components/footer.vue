<template>
  <div class="footer-wrap">
    <div class="foot-bg"></div>
    <div class="tab">
      <router-link to="/" class="tabs">HOME</router-link>
      <router-link to="/wiki" class="tabs">WIKI</router-link>
      <router-link to="/dApp" class="tabs">NETWORK</router-link>
      <router-link to="/aboutUs" class="tabs">TEAM</router-link>
    </div>
    <div class="foooterhr clearfix"></div>
    <p class="copyright">2018 All Rights Reserved</p>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style lang="stylus" scoped>
  .copyright
    margin-top: 40px
  .footer-wrap
    width 100%
    display flex
    flex-direction column
    align-items center
    justify-content center
    padding: 60px 0
    background-color rgba(0,0,0,.4)
    position: relative
    .foot-bg
      position: absolute
      right: 0
      bottom: 0
      width: 196px
      height: 275px
      background: url("../assets/images/common/footer-line.png") no-repeat center
    .footer-container
      display flex
      flex-wrap wrap
    .tab
      display flex
      align-items center
      border-bottom: 1px solid #333
      @media screen and (max-width: 800px)
        display block
        width: 100%
      .tabs
        height 50px
        line-height 50px
        padding: 0 10px
        color #fff
        font-size 16px
        margin-right: 54px
        font-weight normal
        text-align center
        cursor pointer
        @media screen and (max-width: 800px)
          font-size 14px
          display block
          text-align: left
        &:last-child
          margin-right: 0
    .foooterhr
      background-color #fff
    .copyright
      color #ffffff
      font-size 14px
      margin-top 40px
      @media screen and (max-width: 1200px)
        font-size 14px
    @media screen and (max-width: 500px)
      .copyright
        color #ffffff
        font-size 12px
        margin-top: 40px
</style>

<template>
  <div class="wiki">
    <div class="wiki-banner">
      <div class="theme" :class="{'text-gradient': !IsIE}">{{$t('wiki.text1')}}</div>
      <div class="hr"></div>
      <div class="theme-title">{{$t('wiki.text2')}}<span>{{$t('wiki.text3')}}</span>{{$t('wiki.text4')}}</div>
      <loading-circle></loading-circle>
    </div>
    <div class="wiki-two-box">
      <div class="two-moveLineBox">
        <div class="moveLineBox scrolltopA" v-show="gotoAnimationA">
          <span class="lin-a"></span>
          <span class="lin-b"></span>
          <div class="circleBox"></div>
        </div>
      </div>
      <div class="wiki-two">
        <div class="two-con two-conl">
          <span class="two-title">{{$t('wiki.text23')}}</span>
          <h4>{{$t('wiki.text5')}}</h4>
          <p class="one-p">{{$t('wiki.text6')}}</p>
          <h4>{{$t('wiki.text7')}}</h4>
          <p class="two-p">{{$t('wiki.text8')}}</p>
        </div>
        <div class="two-con two-conr">
          <div class="gradual-box">
            <div class="gradual"></div>
          </div>
          <div class="wiki-two-img"><img src="../assets/images/svg/WhatisSIE.svg" alt=""></div>
        </div>
        <p class="two-bottom">{{$t('wiki.text9')}}</p>
        <div class="gradual-bot"></div>
      </div>
    </div>
    <div class="three-mun">
      <div class="three-title">{{$t('wiki.text24')}}</div>
        <div class="wiki-three-moveLineBox scrolltopB" v-show="gotoAnimationB">
          <div class="lin"></div>
          <div class="wiki-three-circleBox"></div>
        </div>
    </div>
    <div class="wiki-three">
        <div class="wiki-three-bg"></div>
        <div class="three-con three-conl">
          <p class="three-pt">{{$t('wiki.text10')}}</p>
          <p class="three-pcon">{{$t('wiki.text11')}}</p>
          <p class="three-multi"><img class="xiao-icon" src="../assets/images/svg/xiao-icon.svg" alt="">{{$t('wiki.text12')}}</p>
          <p class="three-multicon">{{$t('wiki.text13')}}</p>
        </div>
        <div class="three-con three-conr">
          <div class="three-animation"></div>
          <div class="three-img"><img src="../assets/images/svg/OtherFeatures.svg" alt=""></div>
        </div>
        <div class="three-bottom">
          <p class="con-mechani"><img class="xiao-icon" src="../assets/images/svg/xiao-icon.svg" alt="">{{$t('wiki.text14')}}</p>
          <p class="con-mechani-con">{{$t('wiki.text15')}}</p>
        </div>
      </div>
    <div class="wiki-four">
      <div class="four-con four-conl">
        <div class="four-gradual-box">
          <div class="four-gradual"></div>
        </div>
        <div class="four-title fonur-paleft">{{$t('wiki.text25')}}</div>
        <h4 class="fourh fonur-paleft">{{$t('wiki.text16')}}</h4>
        <h4 class="fourh fonur-paleft">{{$t('wiki.text17')}}</h4>
        <p class="fourp fonur-paleft">{{$t('wiki.text18')}}</p>
        <div class="four-img">
          <img src="../assets/images/svg/TheApplicable.svg" alt="">
        </div>
      </div>
      <div class="four-con four-conr">
        <div class="four-animation scrolltopC" v-show="gotoAnimationC">
          <div class="four-lin"></div>
          <div class="wiki-four-circleBox"></div>
        </div>
        <div class="fourr-bot">
          <div class="aih"><img class="xiao-icon" src="../assets/images/svg/xiao-icon.svg" alt="">{{$t('wiki.text19')}}</div>
          <div class="aih-con">{{$t('wiki.text20')}}</div>
          <div class="aih"><img class="xiao-icon" src="../assets/images/svg/xiao-icon.svg" alt="">{{$t('wiki.text21')}}</div>
          <div class="aih-con">{{$t('wiki.text22')}}</div>
          <div class="four-gradual"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import loadingCircle from '../components/loading-circle'
export default {
  data () {
    return {
      gotoAnimationA: false,
      gotoAnimationB: false,
      gotoAnimationC: false
    }
  },
  components: {
    loadingCircle
  },
  mounted () {
      this.$nextTick(() => {
        window.addEventListener('resize', this.handleScroll)
        window.addEventListener('scroll', this.handleScroll)
      })
  },
  methods: {
    handleScroll () {
      let box1top = document.querySelector('.wiki-two').offsetTop
      let box2top = document.querySelector('.wiki-three').offsetTop
      let box3top = document.querySelector('.fourr-bot').offsetTop
      let _innerHeight = window.innerHeight * 1.5
      let _pageYOffset = window.pageYOffset
      let _height = _innerHeight + _pageYOffset
      if (_height > box1top) {
        this.gotoAnimationA = true
      }
      if (_height > box2top) {
        this.gotoAnimationB = true
      }
      if (_height > box3top) {
        this.gotoAnimationC = true
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
  .wiki
    width 1200px
    margin 0 auto
    @media screen and (max-width 1200px)
      width 100%
      box-sizing border-box
      padding 0 15px
  .wiki-banner
    width 932px
    height auto
    margin 0 auto
    @media screen and (max-width 932px) {
        width 100%
        overflow hidden
    }
    .theme
      text-align center
      font-size 42px
      padding 254px 0 60px
      font-family BordFont
      color #c90010
      @media screen and (max-width 800px)
        font-size 32px
        padding-top 130px
    .hr
      width 46px
      height 2px
      margin 0 auto
      background-color #C90010
      background linear-gradient(to right, #C90010, #EB601D)
    .theme-title
      font-size 24px
      color #fff
      text-align center
      padding-top 124px
      padding-bottom 70px
      font-family RegularFont
      @media screen and (max-width 1024px) {
        width 80%
        margin 0 auto
        text-align center
        padding-left 0
      }
      @media screen and (max-width 800px) {
        width 100%
        text-align center
      }
      span
        color #c90010
    .banner-animation
      width 932px
      height 399px
      margin 0 auto
      @media screen and (max-width 949px){
        width 100%
        height auto
      }
  .wiki-two-box
    width 1227px
    height auto
    overflow hidden
    margin 0 auto
    padding-top 52px
    @media screen and (max-width 1227px){
      width 100%
      padding-left 15px
      padding-right 15px
    }
    .two-moveLineBox
      width 66px
      height auto
      float left
      .moveLineBox {
        position relative
        top: 270px;
        left 15%
        display inline-block
        float left
        width 66px
        height 800px
        @media screen and (max-width 800px) {
          display none
        }
        .lin-a {
          position: absolute;
          width: 0;
          height: 2px;
          top: 0;
          right: 0;
          background: #C90010;
          animation: lineMoveA linear 6s;
          animation-fill-mode: forwards;
          @keyframes lineMoveA {
            0% {
              width: 0px;
            }
            50% {
                width: 66px;
            }
            100% {
                width: 66px;
            }
          }
        }
        .lin-b {
          position: absolute;
          width: 2px;
          height: 0;
          top: 0;
          left: 0;
          background-color: #C90010;
          animation: lineMoveB linear 6s;
          animation-fill-mode: forwards;
          @keyframes lineMoveB {
            0% {
              height: 0px;
            }
            50% {
              height: 0px;
            }
            100% {
              height: 800px;
            }
          }
        }
        .circleBox {
          position: absolute;
          width: 20px;
          height: 20px;
          top: -9px;
          border-radius: 100%;
          border: 3px solid red;
          box-sizing: border-box;
          left: 57px;
          background-color: #131E24;
          animation: circleMove linear 6s;
          animation-fill-mode: forwards;
          &:after {
            content: '';
            width: 6px;
            height: 6px;
            background-color: red;
            border-radius: 100%;
            position: absolute;
            left: 4px;
            top: 4px;
          }
          @keyframes circleMove {
            50% {
                transform: translate(-66px, 0px);
            }
            100% {
                transform: translate(-66px,800px);
            }
          }
        }
      }
    .wiki-two
      width 1139px
      height auto
      overflow hidden
      margin 0 auto
      @media screen and (max-width 1300px) {
         width 90%
         float right
      }
      @media screen and (max-width 800px) {
        width 100%
      }
      .two-con
        width auto
        float left
        @media screen and (max-width 1300px) {
            clear both
            width 90%
            margin 0px auto
        }
        @media screen and (max-width 800px) {
          width 100%
        }
      .two-conl
        height auto
        width auto
        @media screen and (max-width 1204px) {
          width 100%
          float right
        }
        .two-title
          display inline-block
          padding-top 140px
          color #1c292f
          font-size 300px
          font-family Hyzongyitij
          padding-left 10px
          @media screen and (max-width 1200px) {
             font-size 150px
             text-align left
             padding-top 204px
          }
          @media screen and (max-width 800px) {
            font-size 150px
            text-align center
            width 100%
            display inline-block
            padding-top 100px
            padding-left 0
          }
        h4
          font-size 32px
          color #fff
          padding 20px 0 60px
          font-family BordFont
          @media screen and (max-width 1300px) {
            text-align center
          }
          @media screen and (max-width 800px) {
            text-align center
            font-size 20px
          }
        p
          color #fff
          width 462px
          height auto
          word-wrap break-word
        .two-p
          width 496px
          color #657880
          line-height 30px
          font-size 20px
          font-family RegularFont
          @media screen and (max-width 1300px) {
             width auto
            text-align center
          }
          @media screen and (max-width 1204px) {
            width 100%
            margin 0px auto
            text-align center
          }
        .one-p
          line-height 30px
          font-size 20px
          font-family RegularFont
          padding-bottom 54px
          @media screen and (max-width 1300px) {
             width 100%
             margin 0px auto
             text-align center
          }
      .two-conr
        float right
        width auto
        height auto
        overflow hidden
        @media screen and (max-width 1300px) {
          clear both
          width 100%
          margin 0 auto
          margin-top 200px
        }
        @media screen and (max-width 800px) {
          margin-top 0px
        }
        .gradual-box
          width auto
          height auto
          @media screen and (max-width 1300px) {
             display inline-block
             width 100%
             height auto
             margin 0px auto
             margin-top 100px
          }
          .gradual
            display inline-block
            width 300px
            height 3px
            background-color #C80010
            background linear-gradient(to left, #C80010, transparent)
            margin-top 270px
            margin-left 305px
            @media screen and (max-width 1300px) {
              margin-top 0px
              float right
            }
            @media screen and (max-width 1204px) {
              position absolute
              right 0px
              top 2060px
            }
            @media screen and (max-width 800px) {
              top 1712px
              right 15px
            }
            @media screen and (max-width 800px) {
              top 1600px
            }
        .wiki-two-img
          width 582px
          height 420px
          margin-top 190px
          @media screen and (max-width 1300px) {
            width 100%
          }
          @media screen and (max-width 1200px) {
            width 60%
            margin 0px auto
            margin-top 100px
          }
          @media screen and (max-width 800px) {
            width 75%
            margin-top 40px
            margin-bottom 40px
          }
          img
            width 100%
            height 100%
      .two-bottom
        clear both
        width 1117px
        height auto
        font-size 20px
        line-height 30px
        word-wrap break-word
        padding-top 40px
        color #657880
        margin-bottom 90px
        font-family RegularFont
        @media screen and (max-width 1300px) {
          width 100%
          padding-top 150px
        }
        @media screen and (max-width 1206px) {
          width 100%
        }
        @media screen and (max-width 800px) {
          text-align center
          padding-bottom 100px
          padding-top 0px
        }
      .gradual-bot
        display inline-block
        width 300px
        height 3px
        background-color #C80010
        background linear-gradient(to left, #C80010, transparent)
        float right
  .three-mun
    width 1161px
    height 294px
    margin 0px auto
    padding-top 200px
    @media screen and (max-width 1300px)
      width 100%
      height auto
      overflow hidden
      padding-top 100px
      position relative
    .three-title
      width 280px
      float left
      display inline-block
      color #1c292f
      font-size 300px
      font-family Hyzongyitij
      padding-left 52px
      @media screen and (max-width 1200px)
        font-size 150px
        padding-top 63px
      @media screen and (max-width 800px)
        width 100%
        text-align center
        padding-left 0px
    .wiki-three-moveLineBox
      margin-left 323px
      right 0px
      position relative
      top 114px
      @media screen and (max-width 1300px)
        width 100%
        position absolute
        right 0px
        top 216px
      @media screen and (max-width 800px)
        display none
      .lin
        height 2px
        width 818px
        display inline-block
        background-color #c90010
        animation: threelineMovelin linear 6s;
        margin-bottom 8px
        @keyframes threelineMovelin {
          0% {
            width: 0px;
          }
          50% {
            width: 818px;
          }
          100% {
            width: 818px;
          }
        }
        @media screen and (max-width 1300px){
          width 95%
          animation: threelineMoveAme linear 6s
          @keyframes threelineMoveAme {
            0% {
              width: 0px;
            }
            50% {
              width: 95%;
            }
            100% {
              width: 95%;
            }
          }
        }
        @media screen and (max-width 800px){
          width 86%
          animation: threelineMoveAmd linear 6s;
          @keyframes threelineMoveAmd {
            0% {
              width: 0px;
            }
            50% {
              width: 86%;
            }
            100% {
              width: 86%;
            }
          }
        }
      .wiki-three-circleBox
        width 20px
        height 20px
        border-radius 100%
        display inline-block
        margin-left -5px
        background-color #000
        border 3px solid #c90010
        position relative
        &:after
          content ''
          display inline-block
          width 6px
          height 6px
          background-color #c90010
          border-radius 100%
          position absolute
          left 50%
          margin-left -3px
          top 50%
          margin-top -3px
  .wiki-three
    clear both
    width 1159px
    height auto
    overflow hidden
    margin 0 auto
    padding-left 44px
    @media screen and (max-width 1300px)
      width 100%
      padding-left 0px
    .wiki-three-bg
      width 320px
      height 547px
      background url("../assets/images/wiki/wiki-bgleft.png") no-repeat
      position absolute
      left 0px
      top 2520px
      @media screen and (max-width 1300px) {
        width 320px
        top 2380px
      }
      @media screen and (max-width 800px) {
        background-size 70% 70%
        top 2000px
      }
    .three-con
      width auto
      float left
      @media screen and (max-width 1300px) {
        clear both
        width 100%
        text-align center
      }
    .three-conl
      height auto
      @media screen and (max-width 1300px) {
        width 100%
      }
      .three-pt
        color #fff
        font-size 32px
        font-family BordFont
        padding-top 20px
        @media screen and (max-width 800px)
          font-size 20px
      .three-pcon
        width 462px
        height auto
        font-size 20px
        font-family RegularFont
        line-height 30px
        word-break break-all
        color #fff
        padding 50px 0px 70px
        @media  screen and (max-width 1300px) {
          width 90%
          margin 0 auto
          text-align center
        }
        @media  screen and (max-width 800px) {
          width 100%
          margin 0 auto
          margin-bottom 40px
          text-align center
        }
      .three-multi
        width 472px
        font-family BordFont
        font-size 26px
        color #657880
        clear both
        @media screen and (max-width 1300px) {
          width 100%
          margin 0px auto
        }
        @media screen and (max-width 800px) {
          font-size 20px
          text-align left
          padding-left 45px
        }
        .xiao-icon
            display inline-block
            width 24px
            height 28px
            vertical-align middle
            margin-left -44px
            margin-right 20px
            @media screen and (max-width 400px) {
              margin-left 10px
              margin-right 10px
            }
      .three-multicon
        width 472px
        height auto
        line-height 30px
        color #657880
        word-break break-all
        padding 20px 0px 50px
        font-size 20px
        font-family RegularFont
        @media screen and (max-width 1300px) {
          width 86%
          margin 0px auto
          text-align center
        }
        @media screen and (max-width 800px) {
          width 100%
          text-align left
        }
    .three-conr
      width auto
      height 100%
      float right
      @media screen and (max-width 1300px) {
        width 100%
      }
      .three-img
        width 612px
        height 512px
        @media screen and (max-width 1300px) {
          width 60%
          margin 0px auto
          margin-top 50px
        }
        @media screen and (max-width 800px) {
          width 60%
          margin 0px auto
          height auto
          margin-top 40px
        }
        @media screen and (max-width 600px) {
          width 75%
        }
        img
          width 100%
          height 100%
          display block
    .three-bottom
      clear both
      width 1115px
      height auto
      @media screen and (max-width 1300px) {
        width 100%
        text-align center
      }
      .con-mechani
        font-size 26px
        font-family BordFont
        color #657880
        @media screen and (max-width 1300px) {
          text-align center
          padding-top 100px
        }
        @media screen and (max-width 800px) {
          width 100%
          margin 0 auto
          text-align left
          padding-left 45px
          padding-top 100px
          font-size 20px
        }
        @media screen and (max-width 400px) {
          padding-left 0px
        }
        .xiao-icon
          display inline-block
          width 24px
          height 28px
          vertical-align middle
          margin-left -44px
          margin-right 20px
      .con-mechani-con
        word-break break-all
        height auto
        line-height 30px
        color #657880
        padding-bottom 230px
        font-size 20px
        padding-top 20px
        font-family RegularFont
        @media screen and (max-width 1300px) {
          width 90%
          margin 0 auto
        }
        @media screen and (max-width 800px) {
          width 100%
          text-align left
          padding-bottom 100px
        }
  .wiki-four
    width 1204px
    height auto
    overflow hidden
    margin 0 auto
    padding-left 20px
    @media screen and (max-width 1300px)
      width 100%
      padding-left 0px
    .four-con
      width auto
      float left
      @media screen and (max-width 1300px)
        width 100%
        clear both
    .four-conl
      height auto
      margin-right 30px
      @media screen and (max-width 1300px)
       width 100%
      .four-gradual
        display inline-block
        width 270px
        height 3px
        background-color #C80010
        background linear-gradient(to left, #C80010, transparent)
      .four-title
        display inline-block
        color #1c292f
        font-size 300px
        padding-bottom 20px
        font-family Hyzongyitij
        @media screen and (max-width 1200px)
          font-size 150px
        @media screen and (max-width 800px)
          display inline-block
          text-align center
          padding-top 50px
          width 100%
      .fourh
        color #fff
        font-size 32px
        font-family BordFont
        line-height 48px
        padding-bottom 10px
        @media screen and (max-width 1300px)
          text-align center
          margin 0 auto
          width 100%
        @media screen and (max-width 800px)
          font-size 20px
          padding-bottom 0px
      .fourp
        width 440px
        height auto
        padding-top 50px
        line-height 30px
        word-break break-all
        margin-bottom 74px
        font-size 20px
        font-family RegularFont
        color #fff
        @media screen and (max-width 1300px)
          text-align center
          margin 30px auto
          width 100%
        @media screen and (max-width 800px)
          padding-top 30px
      .four-img
         width 546px
         height 374px
         @media screen and (max-width 1300px)
            width 100%
            text-align center
            margin-top 100px
         @media screen and (max-width 800px)
           width 60%
           margin 50px auto
         @media screen and (max-width 600px)
          width 75%
         img
           width 100%
           height 100%
           display block
           text-align left
           @media screen and (max-width 800px)
             text-align center
      .fonur-paleft
         padding-left 46px
         @media screen and (max-width 800px)
          padding-left 0px
          margin-top 0px
    .four-conr
      width 510px
      float right
      margin-bottom 106px
      @media screen and (max-width 1300px)
        width 100%
        height auto
        margin-top -300px
      .four-animation
        position relative
        top 426px
        @media screen and (max-width 1300px)
          width 100%
          float left
        @media screen and (max-width 800px)
          display none
        .four-lin
          height 2px
          width 490px
          display inline-block
          background-color #c90010
          animation: threelineMoveA linear 6s;
          margin-bottom 8px
          @keyframes threelineMoveA {
            0% {
              width: 0px;
            }
            50% {
              width: 490px;
            }
            100% {
              width: 490px;
            }
          }
          @media screen and (max-width 1300px)
            animation: threelineMovefoura linear 6s;
            width 90%
            @keyframes threelineMovefoura {
              0% {
                  width: 0px;
              }
              50% {
                  width: 90%;
              }
              100% {
                  width: 90%;
              }
            }
        .wiki-four-circleBox
          width 20px
          height 20px
          border-radius 100%
          display inline-block
          margin-left -5px
          background-color #000
          border 3px solid #c90010
          position relative
          &:after
            content ''
            display inline-block
            width 6px
            height 6px
            background-color #c90010
            border-radius 100%
            position absolute
            left 50%
            margin-left -3px
            top 50%
            margin-top -3px
      .fourr-bot
        margin-top 488px
        @media screen and (max-width 1300px)
          width 90%
          margin 600px auto 0px
        @media screen and (max-width 800px)
          width 100%
          margin 300px auto 0px
        .aih
          font-size 24px
          color #62747C
          padding-bottom 20px
          @media screen and (max-width 1300px)
            width 90%
            margin 0px auto
            text-align center
          @media screen and (max-width 800px)
            width 100%
            font-size 20px
            text-align left
          .xiao-icon
            display inline-block
            width 24px
            height 28px
            vertical-align middle
            margin-left -44px
            margin-right 18px
            @media screen and (max-width 800px) {
              margin-left 0px
            }
        .aih-con
          width 100%
          height auto
          line-height 30px
          font-size 20px
          font-family RegularFont
          word-break break-all
          color #62747C
          padding-bottom 50px
          @media screen and (max-width 1300px)
            width 100%
            margin 0px auto
            text-align center
          @media screen and (max-width 800px)
            width 100%
            text-align left
        .four-gradual
          width 300px
          height 3px
          background-color #c80010
          background -webkit-gradient(linear, right top, left top, from(#c80010), to(transparent))
          background linear-gradient(to left, #c80010, transparent)
          margin-top 130px
          float right
</style>

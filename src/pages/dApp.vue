<template>
  <div class="dapp-wrapper">
    <div class="wrapper">
      <div class="sie-title bordFont" :class="{'text-gradient': !IsIE}">
        {{$t('dApp.text1')}}
      </div>
      <div class="line bg-gradient"></div>
      <div class="sie-subtitle regularFont" v-html="$t('dApp.text2')"></div>
      <loading-circle></loading-circle>
    </div>
    <!-- 02 -->
    <section class="section-two section">
      <div class="line-bg-one"></div>
      <div class="wrapper">
        <div class="move-line-box" v-show="isAnimation1">
          <span class="lin-a"></span>
          <span class="lin-b"></span>
          <div class="circleBox"></div>
        </div>
        <div class="title-wrapper">
          <div class="num-title hyzongyitij">02</div>
          <div class="line-gradient"></div>
        </div>
        <div class="two-content">
          <div class="left">
            <div class="two-content-title bordFont">{{$t('dApp.text3')}}</div>
            <p class="p first-p regularFont">{{$t('dApp.text4')}}</p>
            <p class="p regularFont">{{$t('dApp.text5')}}</p>
            <p class="p regularFont">{{$t('dApp.text6')}}</p>
          </div>
          <div class="right network-bg">
            <div class="two-bgimg"></div>
          </div>
        </div>
        <div class="line-gradient bottom-two"></div>
      </div>
    </section>
    <!-- 03-->
    <section class="section-three section">
      <div class="line-bg"></div>
      <div class="wrapper">
        <div class="title-wrapper">
          <div class="num-title hyzongyitij">03</div>
        </div>
        <div class="move-line-box" v-show="isAnimation2">
          <span class="lin-a"></span>
          <span class="lin-b"></span>
          <div class="circleBox"></div>
        </div>
        <div class="two-content">
          <div class="left">
            <div class="two-content-title bordFont">{{$t('dApp.text7')}}</div>
            <p class="p first-p regularFont">{{$t('dApp.text8')}}</p>
            <p class="regularFont p">{{$t('dApp.text9')}}</p>
          </div>
          <div class="three-right">
            <div class="right sie-bg"></div>
          </div>
        </div>
        <p class="p-desc regularFont">{{$t('dApp.text10')}}</p>
        <div class="line-gradient bottom-three"></div>
      </div>
    </section>
    <!-- 04-->
    <section class="section-four">
      <div class="wrapper">
        <div class="title-wrapper">
          <div class="tit-left">
            <div class="line-box">
              <div class="line"></div>
            </div>
            <div class="title-box">
              <div class="big-title bordFont">{{$t('dApp.text11')}}</div>
              <div class="small-title regularFont">{{$t('dApp.text12')}}</div>
            </div>
          </div>
          <div class="tit-right num-title hyzongyitij">04</div>
        </div>
        <div class="mobie-title">
          <div class="tit-right num-title hyzongyitij">04</div>
          <div class="tit-left">
            <div class="line-box">
              <div class="line"></div>
            </div>
            <div class="title-box">
              <div class="big-title bordFont">{{$t('dApp.text11')}}</div>
              <div class="small-title regularFont">{{$t('dApp.text12')}}</div>
            </div>
          </div>
        </div>
        <!-- pc-->
        <div class="menu-wrapper">
          <ul class="four-ul">
            <li class="four-list" v-for="(item, index) in $t('dApp.listArr')" :key="index" @click="checkOne(index)">
              <div class="bg-gradient" :class="{'height-line': num === index}"></div>
              <div class="num inclineFont">{{index + 1}}</div>
              <div class="img">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="desc-wrapper">
                <span class="des" :class="{'active': num === index}">{{item.desc}}</span>
              </div>
            </li>
          </ul>
          <div class="detail-info" v-for="(list, index) in $t('dApp.detailInfoArr')" :key="index" v-show="index === checkNum">
            <div class="top-line line-gradient"></div>
            <div class="info-title">
              <div class="num-small inclineFont">{{index + 1}}</div>
              <span class="info-text bordFont">{{list.title}}</span>
            </div>
            <p class="desc-info regularFont">{{list.desc}}</p>
            <div class="bottom-line line-gradient"></div>
          </div>
        </div>
        <!-- 手机-->
        <div class="mobile">
          <ul class="four-ul">
            <li class="four-list">
              <div class="list-item">
                <div class="bg-gradient"></div>
                <div class="num inclineFont">1</div>
                <div class="img">
                  <img src="../assets/images/dApp/Decentralization.svg" alt="">
                </div>
                <div class="desc-wrapper">
                  <span class="des">{{$t('dApp.detailInfoArr[0].title')}}</span>
                </div>
              </div>
              <div class="list-desc-details">
                <div class="top-line line-gradient"></div>
                <div class="info-title">
                  <div class="num-small inclineFont">1</div>
                  <span class="info-text bordFont">{{$t('dApp.detailInfoArr[0].title')}}</span>
                </div>
                <p class="desc-info regularFont">{{$t('dApp.detailInfoArr[0].desc')}}</p>
                <div class="bottom-line line-gradient"></div>
              </div>
            </li>
            <li class="four-list">
              <div class="list-item">
                <div class="bg-gradient"></div>
                <div class="num inclineFont">2</div>
                <div class="img">
                  <img src="../assets/images/dApp/the_Design_of_Blocks.svg" alt="">
                </div>
                <div class="desc-wrapper">
                  <span class="des">{{$t('dApp.detailInfoArr[1].title')}}</span>
                </div>
              </div>
              <div class="list-desc-details">
                <div class="top-line line-gradient"></div>
                <div class="info-title">
                  <div class="num-small inclineFont">2</div>
                  <span class="info-text bordFont">{{$t('dApp.detailInfoArr[1].title')}}</span>
                </div>
                <p class="desc-info regularFont">{{$t('dApp.detailInfoArr[1].desc')}}</p>
                <div class="bottom-line line-gradient"></div>
              </div>
            </li>
            <li class="four-list">
              <div class="list-item">
                <div class="bg-gradient"></div>
                <div class="num inclineFont">3</div>
                <div class="img">
                  <img src="../assets/images/dApp/Smart_Contract.svg" alt="">
                </div>
                <div class="desc-wrapper">
                  <span class="des">{{$t('dApp.detailInfoArr[2].title')}}</span>
                </div>
              </div>
              <div class="list-desc-details">
                <div class="top-line line-gradient"></div>
                <div class="info-title">
                  <div class="num-small inclineFont">3</div>
                  <span class="info-text bordFont">{{$t('dApp.detailInfoArr[2].title')}}</span>
                </div>
                <p class="desc-info regularFont">{{$t('dApp.detailInfoArr[2].desc')}}</p>
                <div class="bottom-line line-gradient"></div>
              </div>
            </li>
            <li class="four-list">
              <div class="list-item">
                <div class="bg-gradient"></div>
                <div class="num inclineFont">4</div>
                <div class="img">
                  <img src="../assets/images/dApp/Secure_Practice.svg" alt="">
                </div>
                <div class="desc-wrapper">
                  <span class="des">{{$t('dApp.detailInfoArr[3].title')}}</span>
                </div>
              </div>
              <div class="list-desc-details">
                <div class="top-line line-gradient"></div>
                <div class="info-title">
                  <div class="num-small inclineFont">4</div>
                  <span class="info-text bordFont">{{$t('dApp.detailInfoArr[3].title')}}</span>
                </div>
                <p class="desc-info regularFont">{{$t('dApp.detailInfoArr[3].desc')}}</p>
                <div class="bottom-line line-gradient"></div>
              </div>
            </li>
            <li class="four-list">
              <div class="list-item">
                <div class="bg-gradient"></div>
                <div class="num inclineFont">5</div>
                <div class="img">
                  <img src="../assets/images/dApp/p2P_Network_Interface.svg" alt="">
                </div>
                <div class="desc-wrapper">
                  <span class="des">{{$t('dApp.detailInfoArr[4].title')}}</span>
                </div>
              </div>
              <div class="list-desc-details">
                <div class="top-line line-gradient"></div>
                <div class="info-title">
                  <div class="num-small inclineFont">5</div>
                  <span class="info-text bordFont">{{$t('dApp.detailInfoArr[4].title')}}</span>
                </div>
                <p class="desc-info regularFont">{{$t('dApp.detailInfoArr[4].desc')}}</p>
                <div class="bottom-line line-gradient"></div>
              </div>
            </li>
            <li class="four-list">
              <div class="list-item">
                <div class="bg-gradient"></div>
                <div class="num inclineFont">6</div>
                <div class="img">
                  <img src="../assets/images/dApp/Market_Forecast.svg" alt="">
                </div>
                <div class="desc-wrapper">
                  <span class="des">{{$t('dApp.detailInfoArr[5].title')}}</span>
                </div>
              </div>
              <div class="list-desc-details">
                <div class="top-line line-gradient"></div>
                <div class="info-title">
                  <div class="num-small inclineFont">6</div>
                  <span class="info-text bordFont">{{$t('dApp.detailInfoArr[5].title')}}</span>
                </div>
                <p class="desc-info regularFont">{{$t('dApp.detailInfoArr[5].desc')}}</p>
                <div class="bottom-line line-gradient"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
import loadingCircle from '../components/loading-circle'
export default {
  data () {
    return {
      isAnimation1: false,
      isAnimation2: false,
      num: 0,
      checkNum: 0
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
      let box1top = document.querySelector('.section-two').offsetTop
      let box2top = document.querySelector('.section-three').offsetTop
      let _innerHeight = window.innerHeight * 0.7
      let _pageYOffset = window.pageYOffset
      let _height = _innerHeight + _pageYOffset
      if (_height > box1top) {
        this.isAnimation1 = true
      }
      if (_height > box2top) {
        this.isAnimation2 = true
      }
    },
    checkOne (index) {
      this.num = index
      this.checkNum = index
    }
  },
  components: {
    loadingCircle
  },
  destroyed () {
    window.removeEventListener('resize', this.handleScroll, false)
    window.removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>

<style lang="stylus" scoped>
.big-title
  font-size: 32px;
  color: #fff;
  line-height: 1.5;
.small-title
  font-size: 20px;
  color: #fff;
  line-height: 1.5;
.wrapper
  width: 1200px
  margin: 0 auto
  @media screen and (max-width: 1200px)
    width: 100%
    box-sizing border-box
    padding: 0 15px
.sie-subtitle
  text-align: center
  color #fff
  font-size: 24px
  margin-bottom: 70px
  .text-highlight
    color #c90010
.sie-title
  padding-top: 254px
  margin: 0 auto 60px
  text-align: center
  font-size: 42px
  color: #c90010
  @media screen and (max-width 800px)
    font-size 32px
    padding-top 130px
.line
  width: 46px
  height: 2px
  margin: 0 auto 124px
  @media screen and (max-width 800px)
    margin-bottom 80px
.circle
  /*width: 932px*/
  height: 399px
.dapp-wrapper
  .section
    margin-top: 228px
    margin-bottom: 354px
    @media screen and (max-width 800px)
      margin-bottom 200px
      margin-top: 50px
    .title-wrapper
      display flex
      align-items center
      justify-content space-between
      @media screen and (max-width 800px)
        display block
      .num-title
        line-height: 1
        user-select none
        @media screen and (max-width 800px)
          text-align center
      .line-gradient
        height: 3px
        width: 300px
        @media screen and (max-width 800px)
          display block
          margin 50px 0px
    .two-content
      display flex
      justify-content space-between
      .left
        width: 494px
        .two-content-title
          font-size: 32px
          color #fff
          line-height: 1.5
          margin-bottom: 82px
          @media screen and (max-width 800px)
            width 100%
            text-align center
        .p
          font-size: 20px
          color #657880
          margin-bottom: 50px
          @media screen and (max-width 800px)
            text-align center
          &:last-child
            margin-bottom: 78px
          &.first-p
            color #fff
            margin-bottom: 84px
      .right
        &.network-bg
          flex 1
          display flex
          align-items center
          justify-content center
          .two-bgimg
            width: 560px
            height: 526px
            background: url("../assets/images/dApp/design_of_SIE_blockchain2.svg") no-repeat center
            @media screen and (max-width 800px)
              background-size 75%
    .bottom-two
      float: right
      width: 300px
      height: 3px
  .section-two
    position: relative
    .wrapper
      position: relative
    .network-bg
      @media screen and (max-width: 1200px)
        margin: 0 auto 50px
        position: relative
    .move-line-box
      position: absolute;
      top: 127px;
      left: 0
      width: 62px;
      height: 820px
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
        left: 62px;
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
        height: 100%
    @keyframes circleMoveOne
      50%
        transform: translate(-72px, 0px)
      100%
        transform: translate(-72px,820px)
    .title-wrapper .num-title
      margin-left: 16px
      @media screen and (max-width 800px)
        margin-left 0px
        width 100%
    .title-wrapper,.two-content
      margin-left: 62px
      @media screen and (max-width 800px) {
        margin-left 0px
        text-align center
      }
    .title-wrapper
      @media screen and (max-width 800px) {
        margin-left 0px
        flex none
      }
      @media screen and (max-width: 1200px)
        margin-left 0
    .two-content
      @media screen and (max-width: 1200px)
        display block
      .left
        @media screen and (max-width: 1200px)
          width: 100%
          margin:0 auto
    .line-bg-one
      position: absolute
      top: 0
      right: 0
      width: 532px
      height: 838px
      background: url("../assets/images/common/line-one.png") no-repeat
  .section-three
    position: relative
    .wrapper
      position: relative
    .move-line-box
      position: absolute;
      top: 122px;
      right: 0;
      width: 923px;
      height: 721px;
      @media screen and (max-width: 1200px)
        display none
      .lin-a
        position: absolute;
        width: 0;
        height: 2px;
        top: 0;
        left: 0;
        background-color: #c90010;
        animation: lineMoveAA linear 6s;
        animation-fill-mode: forwards;
      .lin-b
        position: absolute;
        width: 2px;
        height: 0;
        top: 0;
        right: 0;
        background-color: #c90010;
        animation: lineMoveBB linear 6s;
        animation-fill-mode: forwards;
      .circleBox
        position: absolute;
        width: 20px;
        height: 20px;
        top: -9px;
        border-radius: 100%;
        border: 3px solid #c90010;
        box-sizing: border-box;
        left: -11px;
        background-color: #131E24;
        animation: circleMoveTwo linear 6s;
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
      @keyframes lineMoveAA
        0%
          width: 0
        50%
          width: 923px
        100%
          width: 923px
      @keyframes lineMoveBB
        0%
          height: 0
        50%
          height: 0
        100%
          height: 772px
      @keyframes circleMoveTwo
        50%
          transform: translate(923px, 0px)
        100%
          transform: translate(923px,772px)
    .line-bg
      position: absolute
      left: 0
      top: 10px
      width: 320px
      height: 547px
      background: url("../assets/images/common/line-two.png") no-repeat
    .two-content
      @media screen and (max-width: 1200px)
        display block
    .p-desc
      width: 1084px
      font-size: 20px
      color #657880
      @media screen and (max-width: 1200px)
        width: 100%
        padding: 0 15px
      @media screen and (max-width: 800px)
        text-align center
    .bottom-three
      margin-top: 170px
      height: 3px
      width: 300px
    .left
      @media screen and (max-width: 1200px)
        width: 100% !important
        margin: 0 auto
    .three-right
      flex 1
      display flex
      align-items center
      justify-content center
      margin-bottom 60px
    .sie-bg
      width: 374px
      height: 456px
      background: url("../assets/images/dApp/design_of_SIE_blockchain.svg") no-repeat center
      @media screen and (max-width 800px)
        background-size 75%
  .section-four
    margin-bottom: 240px
    .num-title
      line-height: 1
      @media screen and (max-width 800px)
        text-align center
    .tit-left
      display flex
      .line-box
        margin-top: 20px
        margin-right: 20px
        box-sizing border-box
      .line
        width: 100px
        height: 3px
        background-color: #c90010
        @media screen and (max-width: 700px)
          width: 30px
      .title-box
        width: 400px;
        @media screen and (max-width: 700px)
          width auto
        .small-title
          margin: 80px 0 88px
    .title-wrapper
      display flex
      align-items center
      justify-content space-between
      @media screen and (max-width: 900px)
        display none
    .menu-wrapper
      display flex
      margin: 0 auto
      @media screen and (max-width: 1024px)
        display none
      .four-ul
        display flex
        flex-wrap wrap
        align-items center
        width: 690px
        box-sizing border-box
        @media screen and (max-width: 1200px)
          width: 460px
        .four-list
          width: 230px
          height: 230px
          border: 1px solid #394b57
          position: relative
          box-sizing border-box
          border-right:none
          cursor pointer
          @media screen and (max-width: 1200px)
            border-right: 1px solid #394b57
            &:nth-child(2n)
              border-left: none
          &:nth-child(3n)
            border-right: 1px solid #394b57
          &:nth-child(n+4)
            border-top: none
          &:hover
            .bg-gradient
              width: 100%
              height: 5px
              position: absolute
              top: 0
              left: 0
            .des
              position: relative
              font-family BordFont!important
              &::before
                width: 100% !important
          .bg-gradient
            width: 0
            transition all .5s linear
            height: 5px
            position: absolute
            top: 0
            left: 0
          .height-line
            width: 100%
          .num
            width: 36px
            height: 36px
            font-size: 20px
            color #fff
            background-color: #c90010
            text-align: center
            line-height: 36px
            position: absolute
            left: -1px
            top: -1px
          .img
            width: 80px
            height: 80px
            margin: 46px auto 28px
          .desc
            font-size: 20px
            color #fff
            text-align: center
          .desc-wrapper
            margin: 0 auto
            text-align: center
            .des
              color #fff
              font-size: 20px
              line-height: 1
              position: relative
              font-family RegularFont
              &::before
                transition all .5s linear
                width: 0
                content ''
                height: 2px
                position: absolute
                bottom: -8px
                background: -webkit-linear-gradient(left, #c90010 , #eb611d);
                background: -o-linear-gradient(right, #c90010, #eb611d);
                background: -moz-linear-gradient(right, #c90010, #eb611d);
                background: linear-gradient(to right, #c90010 , #eb611d);
              &.active
                position: relative
                transition all .5s linear
                font-family BordFont
                &::before
                  width: 100%
      .detail-info
        display flex
        justify-content center
        flex-direction column
        margin: 18px 0 18px 40px
        position: relative
        .info-title
          display flex
          align-items center
          margin-bottom: 64px
        .num-small
          width: 22px
          height: 22px
          background-color: #c90010
          color #fff
          font-size: 16px
          text-align: center
          line-height: 22px
          margin-right: 10px
        .info-text
          font-size: 26px
          color #fff
          @media screen and (max-width 800px)
            font-size 24px
        .desc-info
          width: 468px
          color #657880
          font-size: 20px
          line-height: 1.5
      .top-line
        position: absolute
        top: 0
        right: 0
        width: 200px
        height: 3px
      .bottom-line
        position: absolute
        bottom: 0
        right: 0
        width: 300px
        height: 3px
    .mobie-title
      display none
      @media screen and (max-width: 900px)
        display block
    .mobile
      display none
      @media screen and (max-width: 1024px)
        display block
      .four-ul
        .four-list
          position: relative
          width: 90%
          margin: 0 auto 20px
          .list-item
            border: 1px solid #394b57
            .num
              width: 36px;
              height: 36px;
              color: #fff;
              background-color: #c90010;
              text-align: center;
              line-height: 36px;
              position: absolute;
              left: 0;
              top: 0;
            .img
              text-align: center
              margin: 20px auto
              width: 80%
              @media screen and (max-width 800px)
                width 35%
            .desc-wrapper
              text-align: center
              margin-bottom: 20px
              color: #fff;
              font-size: 20px;
              line-height: 1;
          .list-desc-details
            margin-top: 20px
            .info-title
              display: flex;
              align-items: center;
              margin-bottom: 30px;
            .num-small
              width: 22px;
              height: 22px;
              background-color: #c90010;
              color: #fff;
              font-size: 16px;
              text-align: center;
              line-height: 22px;
              margin-right: 10px;
            .info-text
              font-size: 26px;
              color: #fff;
              @media screen and (max-width 800px)
                font-size 24px
            .desc-info
              text-align: center
              color: #657880;
              font-size: 20px;
              line-height: 1.5;
</style>

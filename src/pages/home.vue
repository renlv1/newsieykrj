<template>
  <div class="home">
    <div class="home-content">
      <div class="home-content-oneTwo">
        <div class="home-content-oneTwo-svg-box">
          <img src="../assets/images/home/banner.svg" alt="">
        </div>
        <div class="home-content-oneTwo-top">
          <h3 class="bordFont" :class="{'text-gradient': !IsIE}">{{$t('home.text1')}}</h3>
          <ul>
            <li>
              <i></i>
              <span class="regularFont">{{$t('home.text2')}}</span>
            </li>
            <li>
              <i></i>
              <span class="regularFont">{{$t('home.text3')}}</span>
            </li>
            <li>
              <i></i>
              <span class="regularFont">{{$t('home.text4')}}</span>
            </li>
          </ul>
          <p class="regularFont" v-html="$t('home.text5')"></p>
          <a class="bordFont" href="./static/pdf/SieWhitePaper.pdf" target="_blank">{{$t('home.text6')}}</a>
        </div>
        <div class="home-content-oneTwo-bottom">
          <div class="bg_red">
            <img src="../assets/images/home/tow_bg.png" alt="">
          </div>
          <div class="move-line-box1" v-show="isAnimation1">
            <span class="lin-a"></span>
            <span class="lin-b"></span>
            <div class="circleBox"></div>
          </div>
          <div class="contentTwo-top">
            <div class="contentTwo-top-lf">
              <h3 class="bordFont">{{$t('home.text7')}}</h3>
              <p class="regularFont">{{$t('home.text8')}}</p>
            </div>
            <div class="contentTwo-top-rt">
              <div class="number hyzongyitij">02</div>
              <div class="worldAb">
                <p class="regularFont">{{$t('home.text9')}}</p>
                <p class="regularFont">{{$t('home.text10')}}</p>
              </div>
            </div>
          </div>
          <div class="contentTwo-bottom">
            <ul>
              <li>
                 <div class="imageBox">
                   <p>
                     <img src="../assets/images/home/Intelligence.svg" alt="">
                   </p>
                   <span class="bordFont">{{$t('home.text11')}}</span>
                 </div>
              </li>
              <li>
                <div class="imageBox">
                  <p>
                    <img src="../assets/images/home/Sharing.svg" alt="">
                  </p>
                  <span class="bordFont">{{$t('home.text12')}}</span>
                </div>
              </li>
              <li>
                <div class="imageBox">
                 <p>
                   <img src="../assets/images/home/Finance.svg" alt="">
                 </p>
                  <span class="bordFont">{{$t('home.text13')}}</span>
                </div>
              </li>
            </ul>
            <div class="contentTwo-bottom-line"></div>
          </div>
        </div>
      </div>
      <div class="home-content-three">
        <div class="home-content-three-box">
          <div class="number hyzongyitij">03</div>
          <div class="home-content-three-content">
            <div class="home-content-three-content-mid-lf">
              <h3 class="colorWhite bordFont">{{$t('home.text14')}}</h3>
              <p class="colorWhite regularFont">{{$t('home.text15')}}</p>
              <p class="regularFont">{{$t('home.text16')}}</p>
              <div class="threeLine"></div>
            </div>
            <img src="../assets/images/home/three-img.svg" alt="">
          </div>
          <div class="move-line-box2" v-show="isAnimation2">
            <span class="lin-a"></span>
            <span class="lin-b"></span>
            <div class="circleBox"></div>
          </div>
        </div>
      </div>
      <div class="home-content-four">
        <div class="home-content-four-top">
          <div class="four_bg1"></div>
          <div class="home-content-four-top-content">
            <div class="four-content-top-lf">
              <h3 class="bordFont">{{$t('home.text17')}}</h3>
              <p class="regularFont">{{$t('home.text18')}}</p>
              <div class="move-line-box3" v-show="isAnimation3">
                <span class="lin-a"></span>
                <span class="lin-b"></span>
                <div class="circleBox"></div>
              </div>
            </div>
            <div class="number hyzongyitij">04</div>
          </div>
        </div>
        <div class="home-content-four-bottom">
          <div class="four_bg2"></div>
          <ul>
            <li>
              <div class="imgBox">
                <div class="imgBox-img"></div>
              </div>
              <div class="wordsBox">
                <h3 class="bordFont">{{$t('home.text19')}}</h3>
                <p class="regularFont">{{$t('home.text20')}}</p>
              </div>
            </li>
            <li>
              <div class="imgBox">
                <div class="imgBox-img"></div>
              </div>
              <div class="wordsBox">
                <h3 class="bordFont">{{$t('home.text21')}}</h3>
                <p class="regularFont">{{$t('home.text22')}}</p>
              </div>
            </li>
            <li>
              <div class="imgBox">
                <div class="imgBox-img"></div>
              </div>
              <div class="wordsBox">
                <h3 class="bordFont">{{$t('home.text23')}}</h3>
                <p class="regularFont">{{$t('home.text24')}}</p>
              </div>
            </li>
          </ul>
          <div class="fourLineBox">
            <div class="fourLine"></div>
          </div>
        </div>
      </div>
      <div class="home-content-five">
        <div class="home-content-five-left">
          <div class="number hyzongyitij">05</div>
          <h3 class="bordFont">{{$t('home.text25')}}</h3>
          <p class="regularFont">{{$t('home.text26')}}</p>
          <div class="fiveLine"></div>
        </div>
        <div class="home-content-five-right">
          <div class="home-content-five-right-img"></div>
        </div>
        <div class="move-line-box4" v-show="isAnimation4">
          <span class="lin-a"></span>
          <span class="lin-b"></span>
          <span class="lin-c"></span>
          <span class="lin-d"></span>
          <div class="circleBox"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @keyframes rotateMove{
    0%{
      transform:rotate(0deg);
    }
    100%  {
      transform:rotate(360deg);
    }
  }
  @keyframes rotateMove2{
    0%{
      transform:rotate(360deg);
    }
    100%  {
      transform:rotate(0deg);
    }
  }
  .home
    .home-content
      font-size 24px
      color #ffffff
      .number
        line-height 1
        font-size 300px
        color #1c292f
        user-select none
        @media screen and (max-width 768px)
          font-size 150px
          text-align center
      .home-content-oneTwo
        position relative
        text-align center
        overflow hidden
        .home-content-oneTwo-top
          width 1200px
          margin 0 auto
          position relative
          z-index 30
          padding-top 254px
          text-align center
          @media screen and (max-width 768px)
            width 100%
            padding-left 5%
            padding-right 5%
            padding-top 130px
          h3
            font-size 42px
            color: #c90010
            line-height 1.5
            font-weight normal
            @media screen and (max-width 768px)
              font-size: 32px;
          ul
            margin-top 140px
            display flex
            justify-content center
            @media screen and (max-width 768px)
              display block
              padding-left 10%
              margin-top 120px
            li
              display flex
              align-items center
              margin-right 110px
              @media screen and (max-width 768px)
                margin 0 auto
                margin-bottom 30px
              &:nth-child(2)
                i
                  background url("../assets/images/home/Encryption.svg")
              &:nth-child(3)
                i
                  background url("../assets/images/home/DApps.svg")
              i
                display block
                width 30px
                height 30px
                margin-right 36px
                background url("../assets/images/home/Decentralization.svg")
                background-size cover!important
              span
                display block
                position relative
                &:before
                  content ''
                  width 16px
                  height 1px
                  background-color #c90010
                  position absolute
                  left -26px
                  top 16px
          p
            margin-top 122px
            margin-bottom 122px
            line-height 1.5
            @media screen and (max-width 768px)
              margin 80px 0
          a
            display inline-block
            color #fff
            padding 22px 60px
            border 2px solid #c90010
            /*border-radius 2px*/
            background-color transparent
            user-select none
            cursor pointer
            box-sizing border-box
            position relative
            z-index 2
            overflow hidden
            @media screen and (max-width 768px)
              padding 16px 40px
            &:after
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 500%;
              height: 1000%;
              background: #c90010;
              z-index: -1;
              transform-origin: 0% 0%;
              transform: translateY(10%) translateX(18.5%) rotate(-45deg)
              transition: transform .3s;
            &:hover
              &:after
                transform translateY(10%) translateX(-35px) rotate(-45deg)
            &:active
              opacity .6
        .home-content-oneTwo-bottom
          width 1200px
          margin 0 auto
          padding-top 310px
          position relative
          z-index 40
          box-sizing border-box
          padding-left 82px
          padding-bottom 100px
          @media screen and (max-width 768px)
            width 100%
            padding-left 5%
            padding-right 5%
            padding-top 200px
          .move-line-box1
            position: absolute;
            top: 335px;
            left: 0
            width: 62px;
            height: 655px
            @media screen and (max-width: 1200px)
              display none
            .lin-a
              position: absolute;
              width: 0;
              height: 2px;
              top: 0;
              right: 0;
              background-color: #c90010;
              animation: lineMoveA1 linear 6s;
              animation-fill-mode: forwards;
            .lin-b
              position: absolute;
              width: 2px;
              height: 0;
              top: 0;
              left: 0;
              background-color: #c90010;
              animation: lineMoveB1 linear 6s;
              animation-fill-mode: forwards;
            .circleBox
              position: absolute;
              width: 20px;
              height: 20px;
              top: -9px;
              border-radius: 100%;
              border: 3px solid #c90010;
              box-sizing: border-box;
              left: 50px;
              background-color: #131E24;
              animation: circleMoveOne1 linear 6s;
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
          @keyframes lineMoveA1
            0%
              width 0
            50%
              width 62px
            100%
              width 62px
          @keyframes lineMoveB1
            0%
              height: 0
            50%
              height: 0
            100%
              height: 100%
          @keyframes circleMoveOne1
            50%
              transform: translate(-60px, 0px)
            100%
              transform: translate(-60px,656px)
          .bg_red
            width 779px
            height 995px
            position absolute
            top 0
            left -226px
            @media screen and (max-width 768px)
              width 100%
              left -50%
            img
              width 100%
          .contentTwo-top
            position relative
            display flex
            @media screen and (max-width 768px)
              display block
              width 100%
              padding 0 5%
            .contentTwo-top-lf
              width 400px
              margin-right 75px
              text-align left
              @media screen and (max-width 768px)
                width 100%
                margin-bottom 50px
              h3
                font-weight normal
                font-size 32px
                line-height 1.5
                margin-bottom 56px
              p
                font-size 20px
            .contentTwo-top-rt
              position relative
              flex 1
              padding-top 100px
              @media screen and (max-width 768px)
                padding-top 150px
              .number
                position absolute
                right 0px
                top -30px
                @media screen and (max-width 768px)
                  top -10px
                  left 50%
                  transform translate(-50%)
              .worldAb
                position relative
                margin-top 48px
                p
                  font-size 20px
                  color #657880
                  line-height 1.5
                  text-align left
                  &:first-child
                    margin-bottom 30px
          .contentTwo-bottom
            position relative
            ul
              display flex
              @media screen and (max-width 768px)
                display block
              li
                flex 1
                display flex
                justify-content center
                @media screen and (max-width 768px)
                  margin-bottom 80px
                &:last-child
                  @media screen and (max-width 768px)
                    margin-bottom 0px
                .imageBox
                  p
                    background-image url('../assets/images/home/halo.png')
                    background-repeat no-repeat
                    background-position center center
                    width 295px
                    height 295px
                    display flex
                    justify-content center
                    align-items center
                    img
                      display block
                      margin 0 auto
                      width 110px
                      height 110px
                  span
                    font-size 24px
            .contentTwo-bottom-line
              position absolute
              top 0
              right 0
              width 3px
              background linear-gradient(to bottom, #c90010, transparent)
              height 120px
        .home-content-oneTwo-svg-box
          width 938px
          height 938px
          position absolute
          top 0
          left 50%
          transform translate(-50%)
          @media screen and (max-width 768px)
            width 100%
      .home-content-three
        padding-top 220px
        position relative
        @media screen and (max-width 768px)
          padding-top 150px
        .home-content-three-box
          width 1200px
          margin 0 auto
          padding-left 82px
          position relative
          @media screen and (max-width 768px)
            width 100%
            padding 0 5%
          .move-line-box2
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
            left: 90px;
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
            left: 81px;
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
              width: 831px
            100%
              width: 831px
          @keyframes lineMoveBB
            0%
              height: 0
            50%
              height: 0
            100%
              height: 721px
          @keyframes circleMoveTwo
            50%
              transform: translate(831px, 0px)
            100%
              transform: translate(831px,721px)
          .home-content-three-content
            margin-top 40px
            .home-content-three-content-mid-lf
              display inline-block
              vertical-align top
              padding-top 40px
              @media screen and (max-width 768px)
                display block
              h3
                width 310px
                font-size 32px
                font-weight normal
                line-height 1.5
                margin-bottom 70px
                @media screen and (max-width 768px)
                  width 100%
                  text-align center
                  margin-bottom 40px
              p
                width 550px
                font-size 20px
                line-height 1.5
                color #657880
                @media screen and (max-width 768px)
                  width 100%
                  text-align center
                &.colorWhite
                  width 356px
                  color #fff
                  margin-bottom 80px
                  @media screen and (max-width 768px)
                    width 100%
                    margin-bottom 40px
              .threeLine
                margin-top 158px
                width 200px
                height 3px
                background linear-gradient(to left, #c90010, transparent)
                @media screen and (max-width 768px)
                  margin-top 80px
            img
              display inline-block
              width 498px
              height 428px
              @media screen and (max-width 768px)
                display block
                margin 0 auto
                margin-top 20px
                width 80%
                text-align center
      .home-content-four
        .home-content-four-top
          position relative
          padding-top 400px
          @media screen and (max-width 768px)
            padding-top 150px
          .four_bg1
            width 320px
            height 547px
            background url("../assets/images/home/four_bg1.png") no-repeat
            background-size cover
            position absolute
            right 0
            top 0
          .home-content-four-top-content
            width 1200px
            margin 0 auto
            display flex
            justify-content space-between
            position relative
            @media screen and (max-width 768px)
              display block
              width 100%
              padding 0 5%
            .four-content-top-lf
              width 420px
              padding-left 82px
              position relative
              @media screen and (max-width 768px)
                display block
                width 100%
                padding-left 0
                text-align center
              .move-line-box3
                position: absolute;
                top: 40px;
                left: 0
                width: 62px;
                height: 300px
                @media screen and (max-width: 1200px)
                  display none
              .lin-a
                position: absolute;
                width: 0;
                height: 2px;
                top: 0;
                right: 0;
                background-color: #c90010;
                animation: lineMoveA2 linear 6s;
                animation-fill-mode: forwards;
              .lin-b
                position: absolute;
                width: 2px;
                height: 0;
                top: 0;
                left: 0;
                background-color: #c90010;
                animation: lineMoveB2 linear 6s;
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
                animation: circleMoveOne2 linear 6s;
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
              @keyframes lineMoveA2
                0%
                  width: 0
                50%
                  width: 62px
                100%
                  width: 62px
              @keyframes lineMoveB2
                0%
                  height: 0
                50%
                  height: 0
                100%
                  height: 100%
              @keyframes circleMoveOne2
                50%
                  transform: translate(-49px, 0px)
                100%
                  transform: translate(-49px,300px)
              h3
                font-weight normal
                margin-bottom 80px
                @media screen and (max-width 768px)
                  margin-bottom 40px
              p
                font-size 20px
                line-height 1.5
            .number
              @media screen and (max-width 768px)
                text-align center
                margin-top 30px
        .home-content-four-bottom
          position relative
          padding-bottom 190px
          @media screen and (max-width 768px)
            padding-bottom 100px
          .four_bg2
            width 320px
            height 547px
            background url("../assets/images/home/four_bg2.png") no-repeat
            background-size cover
            position absolute
            left 0
            bottom 0
          ul
            width 1200px
            margin 0 auto
            margin-top 200px
            position relative
            display flex
            @media screen and (max-width 768px)
              display block
              width 100%
              padding 0 10%
              margin-top 50px
            li
              flex 1
              margin-right 40px
              border 1px solid #657880
              @media screen and (max-width 768px)
                margin-right 0
                margin-bottom 50px
              &:nth-child(2)
                .imgBox
                  .imgBox-img
                    background url("../assets/images/home/Expandability.svg") no-repeat
              &:nth-child(3)
                margin-right 0
                .imgBox
                  .imgBox-img
                    background url("../assets/images/home/Intercommunity.svg") no-repeat
              .imgBox
                display flex
                justify-content center
                align-items center
                height 340px
                border-bottom 1px solid #657880
                .imgBox-img
                  width 196px
                  height 174px
                  background url("../assets/images/home/Trust-free.svg") no-repeat
                  background-size cover!important
              .wordsBox
                height 230px
                text-align center
                padding 0 26px
                h3
                  font-size 24px
                  font-weight normal
                  margin-top 30px
                  margin-bottom 26px
                p
                  color #657880
                  font-size 16px
          .fourLineBox
            width 1200px
            margin 0 auto
            overflow hidden
            margin-top 104px
            @media screen and (max-width 768px)
              width 100%
            .fourLine
              float right
              width 200px
              height 3px
              background linear-gradient(to left, #c90010, transparent)
      .home-content-five
        width 1200px
        margin 0 auto
        padding-left 82px
        padding-bottom 250px
        display flex
        position relative
        @media screen and (max-width 768px)
          display block
          width 100%
          padding 0 5%
          padding-bottom 80px
        .move-line-box4
          position: absolute;
          right 522px
          bottom 315px
          width: 62px;
          height: 550px
          @media screen and (max-width: 1200px)
            display none
          .lin-a
            position: absolute;
            width: 0;
            height: 2px;
            left 0px
            bottom  0px
            animation: lineMoveA3 linear 12s;
            animation-fill-mode: forwards;
            background linear-gradient(to left, #c90010, transparent)
          .lin-b
            position: absolute;
            width: 2px;
            height: 0;
            left: 542px
            bottom 0px
            background-color: #c90010;
            animation: lineMoveB3 linear 12s;
            animation-fill-mode: forwards;
          .lin-c
            position: absolute;
            width: 0;
            height: 2px;
            top: 0;
            right -480px;
            background-color: #c90010;
            animation: lineMoveC linear 12s;
            animation-fill-mode: forwards;
          .lin-d
            position: absolute;
            width: 2px;
            height: 0;
            top: 0;
            left: 0;
            background-color: #c90010;
            animation: lineMoveD linear 12s;
            animation-fill-mode: forwards;
          .circleBox
            position: absolute;
            width: 20px;
            height: 20px;
            left 0px
            top 542px
            border-radius: 100%;
            border: 3px solid #c90010;
            box-sizing: border-box;
            background-color: #131E24;
            animation: circleMoveOne3 linear 12s;
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
        @keyframes lineMoveA3
          0%
            width: 0
          25%
            width: 542px
          50%
            width: 542px
          75%
            width: 542px
          100%
            width: 542px
        @keyframes lineMoveB3
          0%
            height: 0
          25%
            height: 0
          50%
            height: 100%
          75%
            height: 100%
          100%
            height: 100%
        @keyframes lineMoveC
          0%
            width: 0
          25%
            width: 0px
          50%
            width: 0px
          75%
            width: 542px
          100%
            width: 542px
        @keyframes lineMoveD
          0%
            height: 0
          25%
            height: 0
          50%
            height: 0
          75%
            height: 0
          100%
            height: 450px
        @keyframes circleMoveOne3
          25%
            transform: translate(532px,0px)
          50%
            transform: translate(532px, -550px)
          75%
            transform: translate(-10px, -550px)
          100%
            transform: translate(-10px,-100px)
        .home-content-five-left
          margin-right 72px
          @media screen and (max-width 768px)
            text-align center
            margin-right 0
          h3
            font-weight normal
            font-size 32px
            margin-top 50px
            margin-bottom 100px
            @media screen and (max-width 768px)
              margin-top 20px
              margin-bottom 50px
          p
            width 400px
            line-height 1.5
            font-size 20px
            margin-bottom 170px
            @media screen and (max-width 768px)
              width 100%
              margin-bottom 100px
          .fiveLine
            width 200px
            height 3px
            background linear-gradient(to left, #c90010, transparent)
        .home-content-five-right
          flex 1
          display flex
          justify-content center
          align-items center
          margin-top 80px
          width 642px
          height 633px
          background-size cover
          position absolute
          right -10px
          top 18px
          @media screen and (max-width 768px)
            width 100%
            height 200px
            position relative
            background none
          .home-content-five-right-img
            width 368px
            height 392px
            background url("../assets/images/home/five_img.svg") no-repeat
            background-size cover
            @media screen and (max-width 768px)
              width 200px
              height 213px
              margin 0 auto
</style>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isAnimation1: false,
      isAnimation2: false,
      isAnimation3: false,
      isAnimation4: false
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
      let box1top = document.querySelector('.home-content-oneTwo-bottom').offsetTop
      let box2top = document.querySelector('.home-content-three').offsetTop
      let box3top = document.querySelector('.home-content-four-top').offsetTop
      let box4top = document.querySelector('.home-content-five').offsetTop
      let _innerHeight = window.innerHeight * 0.7
      let _pageYOffset = window.pageYOffset
      let _height = _innerHeight + _pageYOffset
      if (_height > box1top) {
        this.isAnimation1 = true
      }
      if (_height > box2top) {
        this.isAnimation2 = true
      }
      if (_height > box3top) {
        this.isAnimation3 = true
      }
      if (_height > box4top) {
        this.isAnimation4 = true
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleScroll, false)
    window.removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>

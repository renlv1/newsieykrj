<template>
  <div class="aboutUs">
    <div class="wiki-banner">
      <div class="theme bordFont"  :class="{'text-gradient': !IsIE}">{{$t('about.text1')}}</div>
      <div class="hr"></div>
      <div class="theme-title regularFont">{{$t('about.text2')}}</div>
      <loading-circle></loading-circle>
    </div>
    <!--2-->
    <div class="frist">
      <div class="line-bg-one"></div>
      <div class="wrap">
        <div class="person">
          <h2 class="numerical">02</h2>
          <div class="title">
            <h3 class="bordFont">{{$t('about.text3')}}</h3>
            <h5 class="regularFont">{{$t('about.text4')}}</h5>
          </div>
          <!-- Swiper -->
          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in personData" :key="index">
                <div class="imgbox" :style="{backgroundImage:'url('+ item.largeImg +')'}"></div>
                <div class="content">
                  <div class="swiper-cont">
                    <h4 class="bordFont">{{item.name}}</h4>
                    <h5>{{item.info}}</h5>
                    <p class="RegularFont">{{item.message}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in personData" :key="index" >
                <div class="imagebox" :style="{backgroundImage:'url('+ item.smallImg +')'}"></div>
                <p>{{item.name}}</p>
                <span></span>
              </div>
            </div>
          </div>
          <div class="arrows-box">
            <span class="prev"></span>
            <i></i>
            <span class="next"></span>
          </div>
        </div>
      </div>
    </div>
    <!--3-->
    <div class="second">
      <div class="wrap">
        <div class="conient">
          <div class="conient-head">
            <div class="title">
              <move-line></move-line>
              <h3 class="bordFont">{{$t('about.text5')}}</h3>
              <h4 class="inclineFont">{{$t('about.text6')}}</h4>
            </div>
            <div>
              <div class="line-gradient" style="height: 3px"></div>
              <h2 class="numerical">03</h2>
            </div>
          </div>
          <div class="conient-cont">
            <div class="conient-info">
              <div class="nameInput">
                <label :class="{active: inputShow1}">{{$t('about.text19')}}</label>
                <input type="text" @focus="inputShow(1)" @blur="hideShow(1)" v-model="submitData.name">
                <span :class="{active: inputShow1}"></span>
              </div>
              <div class="emailInput">
                <label :class="{active: inputShow2}">{{$t('about.text20')}}</label>
                <input type="text" @focus="inputShow(2)" @blur="hideShow(2)"  v-model="submitData.email">
                <span :class="{active: inputShow2}"></span>
              </div>
              <div class="phoneInput">
                <label :class="{active: inputShow3}">{{$t('about.text21')}}</label>
                <input type="text" @focus="inputShow(3)" @blur="hideShow(3)"  v-model="submitData.phone">
                <span :class="{active: inputShow3}"></span>
              </div>
            </div>
            <div class="conient-input">
              <label :class="{active: inputShow4}">{{$t('about.text22')}}</label>
              <input type="text" @focus="inputShow(4)" @blur="hideShow(4)"  v-model="submitData.conient">
              <span :class="{active: inputShow4}"></span>
            </div>
          </div>
          <button class="bordFont" :class="{active: subShow}" @click="submitInfo()">{{$t('about.text23')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import loadingCircle from '../components/loading-circle'
import moveLine from '../components/move-line'
  export default {
  data () {
    return {
      personData: [
        {
          name: 'Liam Berger',
          info: this.$t('about.text7'),
          message:  this.$t('about.text8'),
          smallImg: require('../assets/images/about/s_p1.png'),
          largeImg: require('../assets/images/about/l_p1.png')
        },
        {
          name: 'Jesse Powell',
          info:  this.$t('about.text9'),
          message:  this.$t('about.text10'),
          smallImg: require('../assets/images/about/s_p2.png'),
          largeImg: require('../assets/images/about/l_p2.png')
        },
        {
          name: 'Blythe Masters',
          info:  this.$t('about.text11'),
          message: this.$t('about.text12'),
          smallImg: require('../assets/images/about/s_p3.png'),
          largeImg: require('../assets/images/about/l_p3.png')
        },
        {
          name: 'Esteban Ordano',
          info: this.$t('about.text13'),
          message: this.$t('about.text14'),
          smallImg: require('../assets/images/about/s_p4.png'),
          largeImg: require('../assets/images/about/l_p4.png')
        },
        {
          name: 'De Ming Wang',
          info: this.$t('about.text15'),
          message: this.$t('about.text16'),
          smallImg: require('../assets/images/about/s_p5.png'),
          largeImg: require('../assets/images/about/l_p5.png')
        },
        {
          name: 'Wences Casares',
          info: this.$t('about.text17'),
          message: this.$t('about.text18'),
          smallImg: require('../assets/images/about/s_p6.png'),
          largeImg: require('../assets/images/about/l_p6.png')
        },
        {
          name: 'Kitty sheng',
          info: this.$t('about.text24'),
          message: this.$t('about.text25'),
          smallImg: require('../assets/images/about/s_p7.png'),
          largeImg: require('../assets/images/about/l_p7.png')
        },
        {
          name: 'Nina Graham',
          info: this.$t('about.text26'),
          message: this.$t('about.text27'),
          smallImg: require('../assets/images/about/s_p8.png'),
          largeImg: require('../assets/images/about/l_p8.png')
        },
        {
          name: 'Martin Kralik',
          info: this.$t('about.text28'),
          message: this.$t('about.text29'),
          smallImg: require('../assets/images/about/s_p9.png'),
          largeImg: require('../assets/images/about/l_p9.png')
        },
        {
          name: 'Brian Armstrong',
          info: this.$t('about.text30'),
          message: this.$t('about.text31'),
          smallImg: require('../assets/images/about/s_p10.png'),
          largeImg: require('../assets/images/about/l_p10.png')
        }
      ],
      inputShow1: false,
      inputShow2: false,
      inputShow3: false,
      inputShow4: false,
      subShow: false,
      submitData: {
        name: '',
        email: '',
        phone: '',
        conient: ''
      }
    }
  },
  components: {
    loadingCircle,
    moveLine
  },
  mounted () {
    setTimeout(() => {
      let galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        loop: true,
        loopedSlides: 10, // looped slides should be the same
//      autoHeight: true
      })
      let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 10, // looped slides should be the same
        noSwiping : true,
        slideToClickedSlide: true,
      })
      galleryTop.params.control = galleryThumbs
      galleryThumbs.params.control = galleryTop
      let _prev = document.querySelector('.prev')
      let _next = document.querySelector('.next')
      _prev.addEventListener('click', function () {
        galleryTop.slidePrev()
      })
      _next.addEventListener('click', function () {
        galleryTop.slideNext()
      })
    }, 100)
  },
  methods: {
    inputShow (index) {
      let self = this
      switch (index) {
        case 1:
          self.inputShow1 = true
          break
        case 2:
          self.inputShow2 = true
          break
        case 3:
          self.inputShow3 = true
          break
        case 4:
          self.inputShow4 = true
          break
      }
    },
    hideShow (index) {
      this.validata()
      let self = this
      switch (index) {
        case 1:
          self.inputShow1 = false
          break
        case 2:
          self.inputShow2 = false
          break
        case 3:
          self.inputShow3 = false
          break
        case 4:
          self.inputShow4 = false
          break
      }
    },
    submitInfo () {
      this.validata()
      if(this.subShow) {
        alert('submit success')
      }

    },
    validata () {
      if (this.submitData.name && this.submitData.email && this.submitData.phone && this.submitData.conient) {
        this.subShow = true
      }else {
        this.subShow = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .wiki-banner{
    width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
      width: 100%;
      padding: 0 20px;
    }
    .theme{
      text-align:center;
      font-size: 42px;
      padding: 254px 0px 60px;
      font-weight: bold;
      color: #c90010;
      @media screen and (max-width: 800px) {
        font-size: 32px;
        padding: 130px 0px 60px;

      }
    }
    .hr{
      width: 46px;
      height: 2px;
      margin: 0 auto;
      background-color: #C90010;
      background: linear-gradient(to right, #C90010, #EB601D);
    }
    .theme-title{
      font-size :24px;
      color: #fff;
      text-align: center;
      padding: 124px 0px 70px;
      @media screen and (max-width: 800px) {
        padding-top: 110px;
      }
      span{
        color: #c90010;
      }
    }
  }
  .person{
    h2{
      padding-left: 20px;
    }
    .title{
      h3{
        font-size:32px;
        color: #fff;
      }
      h5{
        font-size:20px;
        color: #fff;
        line-height: 1.5;
        margin: 50px 0 80px;
      }
    }
  }
  .swiper-slide{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
    }
    .imgbox{
      width: 280px;
      height: 280px;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position:center ;
      margin: 0 auto 70px;
      @media screen and (max-width: 1200px) {
        width: 280px;
      }
      @media screen and (max-width: 280px) {
        width: 100%;
        margin: 0 auto;
      }
    }
    .content{
      width: 820px;
      height: 280px;
      display: flex;
      margin-bottom: 70px;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 1100px) {
        margin: 0 auto;
      }
      @media screen and (max-width: 820px) {
        width: 100%;
        display: block;
        height: auto;
        margin-bottom: 0
      }
      .swiper-cont{
        @media screen and (max-width: 1200px) {
          text-align: center;
        }
        h4{
          font-size:24px;
          color: #fff;
          padding-left: 30px;
          position: relative;
          &:before{
            content: '';
            height: 2px;
            width: 20px;
            background-color: #c90010;
            position: absolute;
            top: 50%;
            left: 0;
            @media screen and (max-width: 1200px) {
              display: none;
            }
          }
        }
        h5{
          font-size:20px;
          color: #fff;
          margin: 20px 0 30px;
          font-weight: 100;
        }
        p{
          width: 680px;
          font-size:20px;
          color: #687880;
          line-height: 1.5;
          @media screen and (max-width: 760px) {
            width: 100%;

          }
        }
      }
    }
  }
  .arrows-box{
    position: relative;
    text-align: right;
    margin: 90px 0 350px;
    @media screen and (max-width: 1100px) {
      text-align: center;
      margin: 50px 0 350px;
    }
    span{
      display: inline-block;
      width: 17px;
      height: 24px;
      cursor: pointer;
      vertical-align: middle;
      cursor: pointer;
      &.prev{
        background-image: url("../assets/images/about/arrows-left.png");
        background-repeat: no-repeat;
      }
      &.next{
        background-image: url("../assets/images/about/arrows-right.png");
        background-repeat: no-repeat;
      }
    }
    i{
      margin: 0 80px;
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: #c90010;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  .swiper-container {
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .gallery-top {
    width: 100%;
  }
  .gallery-thumbs {
    box-sizing: border-box;
    padding: 10px 0;
    @media screen and (max-width: 980px) {
      display: none;
    }
    .swiper-slide {
      overflow: hidden;
      opacity: 0.2;
      p{
        font-size:24px;
        color: #fff;
        margin: 0 auto;
        line-height: 50px;
        font-family:RegularFont;
      }
      span{
        transition: all 0.5s ease-in-out;
        transform: translate(-238px);
        width: 190px;
        height: 3px;
        background-color: #c90010;
        background: linear-gradient(to right, #C90010, #EB601D);
        display: inline-block;
        margin: 0 auto ;
      }
      .imagebox{
        width: 180px;
        height: 180px;
        margin: 0 auto ;
      }
      &:hover{
        opacity: 0.6;
        p{
          font-family:InclineFont;
        }
        span{
          transform: translate(0px);
        }
      }
    }
    .swiper-slide-active {
      opacity: 0.8;
      p{
        font-family:InclineFont;
      }
      span{
        transform: translate(0px);
      }
    }
  }
  .conient{
    .conient-head{
      display: flex;
      justify-content: space-between;
      margin-bottom: 170px;
      flex-wrap: wrap;
      position: relative;
      .title{
        margin-top: 80px;
        width: 355px;
        @media screen and (max-width: 768px) {
          margin-top: 30px;
        }
        h3{
          font-size:32px;
          color: #fff;
        }
        h4{
          font-size:20px;
          color: #fff;
          line-height: 1.5;
          margin: 130px 0 0px;
          line-height:1.5;
          @media screen and (max-width: 768px) {
            margin: 60px 0 0px;
          }
        }
      }
      h2{
        @media screen and (max-width: 800px) {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translate(-50%,0);
        }
      }
    }
    .conient-cont{
      margin-top: 250px;
      @media screen and (max-width: 780px) {
        margin-top: 100px;
      }
      .conient-info{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .nameInput, .emailInput, .phoneInput{
          width: 360px;
          border-bottom: 1px solid #657880;
          position: relative;
          margin-bottom: 145px;
          @media screen and (max-width: 1200px) {
            width: 100%;
            margin-bottom: 50px;
          }
        }
        label{
          color: #657880;
          padding-left: 5px;
          &.active{
            color: #fff;
          }
        }
        input{
          padding-left: 10px;
          border: none;
          height: 30px;
          background-color: transparent;
          color: #fff;
          font-size: 18px;
        }
        span{
          height: 3px;
          width: 0px;
          display: block;
          background-color: #c90010;
          position: absolute;
          bottom: -1px;
          transition: all 1s ease-in-out;
          z-index: 100;
          &.active{
            width: 100%;
          }

        }
      }
      .conient-input{
        width: 100%;
        border-bottom: 1px solid #657880;
        position: relative;
        label{
          color: #657880;
          padding-left: 5px;
          &.active{
            color: #fff;
          }
        }
        input{
          padding-left: 10px;
          border: none;
          height: 30px;
          background-color: transparent;
          color: #fff;
          font-size: 18px;
        }
        span{
          height: 2px;
          width: 0px;
          display: block;
          background-color: #c90010;
          position: absolute;
          bottom: -1px;
          transition: all 1s ease-in-out;
          &.active{
            width: 100%;
          }

        }
      }
    }
    button{
      display: block;
      color: #fff;
      padding: 22px 60px;
      border: 2px solid #657880;
        /*border-radius 2px*/
      background-color: transparent;
      user-select: none;
      cursor: pointer;
      box-sizing: border-box;
      position: relative;
      z-index: 2;
      overflow: hidden;
      margin: 120px auto 286px;
      @media screen and (max-width: 768px) {
        padding: 16px 40px;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 500%;
        height: 1000%;
        background: #657880;
        z-index: -1;
        transform-origin: 0% 0%;
        transform: translateY(10%) translateX(18%) rotate(-45deg);
        transition: transform .3s;
      }
      &:hover{
        border-color: #c90010;
        &:after {
          background: #c90010;
          transform: translateY(10%) translateX(-35px) rotate(-45deg)
        }
      }
      &.active{
        border-color: #c90010;
        &:after {
          background: #c90010;
          transform: translateY(10%) translateX(-35px) rotate(-45deg)
        }
      }
      &:active {
        opacity: .6
      }
    }

  }
  .frist, .second{
    position: relative;
  }
  .line-bg-one{
    position: absolute;
    top: 0;
    right: 0;
    width: 532px;
    height: 838px;
    background: url("../assets/images/common/line-one.png") no-repeat;
  }
</style>

<template>
  <div class="wrapper">
    <div class="swiper-container">
      <a  class="toApplication">
        <img src="../images/mobile/float.png" alt class="img1" />
      </a>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div style="width:100vw;height:94vw;position:fixed;z-index">
            <img :src="imgUrl.bg0" alt style="width:100%;height:100%;" />
          </div>
          <div class="content1 content">
            <img class="logo" :src="imgUrl.logo" alt='泡芙短视频' />
            <img class="text" src="../images/mobile/text.png" alt />
            <div class="img-content">
              <img src="../images/mobile/model1_text1.png" alt style="top:31vh" />
              <img src="../images/mobile/model1_text2.png" alt style="top:18vh;right: -9vh;" />
              <img src="../images/mobile/model1_text3.png" alt style="top:25vh;left: -8vh;" />
            </div>
            <img
              v-if="os.isPhone && switchData.iosStore?switchData.iosStore.enable:false"
              class="button"
              :src="imgUrl.button"
              alt='下载IOS版本'
              @click="handleRouteGoIosBeta()"
            />
            <img
              v-if="os.isAndroid && switchData.android?switchData.android.enable:false"
              class="button"
              :src="imgUrl.button2"
              alt='下载安卓版本'
              @click="getApkInfo('android')"
            />
            <img class="slideDown" :src="imgUrl.slideDown" alt ref="slideDown" />
          </div>
        </div>
        <div class="swiper-slide">
          <div style="width:100vw;height:94vw;position:fixed">
            <img :src="imgUrl.bg0" alt style="width:100%;height:100%;" />
          </div>
          <div class="content2 content">
            <img class="logo" :src="imgUrl.logo" alt='泡芙短视频' />
            <img class="text" :src="imgUrl.content2.text" alt />
            <div class="img-content">
              <img :src="imgUrl.content2.model2Text" alt style="width:20vh;top:4vh;left:-1vh" />
            </div>
            <img
              v-if="os.isPhone && switchData.iosStore?switchData.iosStore.enable:false"
              class="button"
              :src="imgUrl.button"
              alt='下载IOS版本'
              @click="handleRouteGoIosBeta()"
            />
            <img
              v-if="os.isAndroid && switchData.android?switchData.android.enable:false"
              class="button"
              :src="imgUrl.button2"
              alt='下载安卓版本'
              @click="getApkInfo('android')"
            />
            <img class="slideDown" :src="imgUrl.slideDown" alt ref="slideDown2" />
          </div>
        </div>
        <div class="swiper-slide">
          <div style="width:100vw;height:94vw;position:fixed">
            <img :src="imgUrl.bg0" alt style="width:100%;height:100%;" />
          </div>
          <div class="content3 content">
            <img class="logo" :src="imgUrl.logo" alt='泡芙短视频' />
            <img class="text" :src="imgUrl.content3.text" alt />
            <div class="img-content"></div>
            <img
              v-if="os.isPhone && switchData.iosStore?switchData.iosStore.enable:false"
              class="button"
              :src="imgUrl.button"
              alt='下载IOS版本'
              @click="handleRouteGoIosBeta()"
            />
            <img
              v-if="os.isAndroid && switchData.android?switchData.android.enable:false"
              class="button"
              :src="imgUrl.button2"
              alt='下载安卓版本'
              @click="getApkInfo('android')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="wrapper">
    <div class="pf-inner" style="height:48px;line-height:48px;">
      <div class="top-bg">
        <img src="../images/mobile/top_word.png" width="100%" alt />
      </div>
    </div>
    <div class="pf-cont">
      <div class="pf-cont-item" style="padding-top:5%">
        <div class="i logo">
          <img src="../images/pc/topword-logo.png" class="logo-f" alt />
          <img src="../images/pc/middleword-tittle.png" width="80%" alt />
          <div class="i-btn-panle" style="padding-top:26px">
            <el-button
              v-if="os.isAndroid && switchData.android?switchData.android.enable:false"
              id="android"
              role="button"
              aria-label="泡芙，泡芙短視頻，Android版本下載按鈕"
              :class="android"
              @click="getApkInfo('android')"
            ></el-button>
            <el-button
              v-if="os.isPhone && switchData.iosStore?switchData.iosStore.enable:false"
              id="iosStroe"
              ref="iosStroe"
              role="button"
              aria-label="泡芙，泡芙短視頻，ios版本下載按鈕"
              :class="iosStroe"
              @click="handleRouteGoIosBeta()"
            ></el-button>
            <el-button
              v-if="os.isPhone && switchData.iosEnterprise?switchData.iosEnterprise.enable:false"
              id="iosDown"
              ref="iosDown"
              role="button"
              aria-label="泡芙，泡芙短視頻，ios版本下載按鈕"
              :class="ios"
              @click="getApkInfo('ios')"
              style
            ></el-button>
          </div>
          <div v-if="os.isAndroid" @click="handleGoTutorial">
            <img src="../images/mobile/but_lastword.png" height="16px" style="color:red" alt />
          </div>
          <div class="footer" style="text-align:center">
            <p>
              <a
                href=" https://lynnconway.me/ipfdsp"
                style="font-size:12px ;color:rgb(221, 221, 221,.8);margin-bottom:10px"
              >點擊加入泡芙短視頻交流群</a>
            </p>
            <p style="height:10px"></p>
            <p>
              <a href="https://potato.im/apps">
                <img src="../images/mobile/potato.png" width="80%" alt />
              </a>
            </p>
          </div>
          <div class="prompt" style="text-align:center;padding-top:10px;padding-bottom:50px;">
            <img src="../images/mobile/lastword.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="float-tag">
      <a href="https://pf.plus/home"></a>
    </div>
  </div>-->
</template>
<script>
import Swiper from "swiper";
export default {
  props: ["qrImg", "os", "switchData", "ip"],
  data() {
    return {
      imgUrl: {
        bg0: require("../images/mobile/0.png"),
        logo: require("../images/mobile/logo.png"),
        button: require("../images/mobile/button.png"),
        button2: require("../images/mobile/button2.png"),
        slideDown: require("../images/mobile/slidedown.png"),
        content2: {
          text: require("../images/mobile/text2.png"),
          model2Text: require("../images/mobile/model2_text1.png")
        },
        content3: {
          text: require("../images/mobile/text3.png")
        }
      },
      height: 0,
      width: 0,
      visibility: false,
      iosStroe: "",
      ios: "",
      android: ""
    };
  },
  mounted() {
    let swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      nextButton: ".slideDown",
      direction: "vertical",
      speed:500,
      lazyLoading:true,
      preloadImages:true,
      resistanceRatio:0
    });
    this.$refs.slideDown.addEventListener("click", (e) => {
       e.preventDefault();
      swiper.slideNext();
    });
    this.$refs.slideDown2.addEventListener("click", (e) => {
       e.preventDefault();
      swiper.slideNext();
    });
    // this.setAddEvent();
    document.addEventListener("visibilitychange", () => {
      // 用户离开了当前页面
      if (document.visibilityState === "hidden") {
        this.visibility = false;
      }
      // 用户打开或回到页面
      if (document.visibilityState === "visible") {
        this.visibility = true;
      }
    });
    this.btnStyle();
  },
  methods: {
    //  设置按钮样式
    btnStyle() {
      if (this.switchData.iosStore) {
        this.iosStroe =
          this.switchData.iosStore.style == "switchSimple"
            ? "iosStroe1"
            : "iosStroe";
      }
      if (this.switchData.iosEnterprise) {
        this.ios =
          this.switchData.iosEnterprise.style == "switchSimple"
            ? "ios1"
            : "ios";
      }
      if (this.switchData.android) {
        this.android =
          this.switchData.android.style == "switchSimple"
            ? "android1"
            : "android";
      }
    },
    /**
     * 前往手机教程列表页
     */
    handleGoTutorial() {
      this.$router.push({ path: "/tutorial", query: this.$route.query });
    },
    /**
     * 前往beta版本界面
     */
    handleRouteGoIosBeta() {
      console.log(this.ip);
      this.$router.push({
        path: "/iosBeta",
        query: { ...this.$route.query, ...{ ip: this.ip } }
      });
    },
    /**
     * 设置手机按钮按下样式
     */
    // setAddEvent() {
    //   this.$nextTick(() => {
    //     const iosDown = document.getElementById("iosDown");
    //     if (iosDown) {
    //       const iosDown = document.getElementById("iosDown");
    //       this.handleBtnClick(iosDown, "btnFilterIos", "ios");
    //     }
    //     const iosStroe = document.getElementById("iosStroe");
    //     if (iosStroe) {
    //       this.handleBtnClick(iosStroe, "btnFilterIosStroe", "iosStroe");
    //     }
    //     const iosTF = document.getElementById("iosTF");
    //     if (iosTF) {
    //       this.handleBtnClick(iosTF, "btnFilterIosTF", "iosTF");
    //     }
    //     const android = document.getElementById("android");
    //     if (android) {
    //       const android = document.getElementById("android");
    //       this.handleBtnClick(android, "btnFilterAndroid", "android");
    //     }
    //   });
    // },
    /**
     * 监听各个按钮按下
     */
    // handleBtnClick(element, touchStartclassName, touchendClassName) {
    //   element.addEventListener("touchstart", () => {
    //     console.log("test");
    //     element.setAttribute("class", touchStartclassName);
    //   });
    //   element.addEventListener("touchend", () => {
    //     element.setAttribute("class", touchendClassName);
    //   });
    //   element.addEventListener("touchcanel", () => {});
    // },
    /**
     * 设置播放器初始值
     */
    setPageInfo() {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
      const video = document.getElementById("pfvideo");
      // if(this.height < 675||this.width<375){
      //   video.setAttribute('width',380)
      //   video.setAttribute('height',675)
      // }else{
      video.setAttribute("width", this.width);
      video.setAttribute("height", this.height);
      // }
    },
    getApkInfo(type) {
      this.$emit("getApkInfo", type);
    },
    hasReaded() {
      const video = document.getElementById("video");
      video.play();
    },

    getApklight() {
      window.location.href =
        "https://apk.yinfengxuan.com/apk/ysLight.mobileconfig";
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 95vh;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  .swiper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .toApplication {
      width: 10vh;
      height: 10vh;
      position: fixed;
      z-index: 999;
      top: 2vh;
      left: 3vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide {
      overflow: hidden;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      .content {
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-image: url("../images/mobile/bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        .logo {
          width: 6 * 2.5vh;
          height: 6vh;
          margin: 3vh auto 0;
          display: block;
          position: relative;
        }
        .text {
          display: block;
          position: relative;
          margin: 3vh auto 0;
        }
        .img-content {
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;
          margin: 3vh auto 0vh;
          img {
            position: absolute;
          }
        }
        .button {
          width: 6 * 7vh;
          height: 6vh;
          display: block;
          margin: 3vh auto 0;
          position: relative;
        }
      }
      .content1 {
        .text {
          width: 6 * 6.13vh;
          height: 6vh;
        }
        .img-content {
          width: 26vh;
          height: 26 * 1.97vh;
          background-image: url("../images/mobile/model1.png");
          img {
            width: 2.4 * 5vh;
            height: 5vh;
          }
        }
        .slideDown {
          width: 2vh;
          height: 2vh;
          display: block;
          margin: 3vh auto;
          position: relative;
        }
      }
      .content2 {
        .text {
          width: 12 * 3vh;
          height: 12vh;
        }
        .img-content {
          width: 30.5vh;
          height: 30.5 * 1.47vh;
          background-image: url("../images/mobile/model2.png");
        }
        .slideDown {
          width: 2vh;
          height: 2vh;
          display: block;
          margin: 3vh auto;
          position: relative;
        }
      }
      .content3 {
        .text {
          width: 12 * 3vh;
          height: 12vh;
        }
        .img-content {
          width: 38vh;
          height: 38 * 1.19vh;
          background-image: url("../images/mobile/model3.png");
        }
        .button {
          margin: 6vh auto 0;
        }
        .slideDown {
          width: 2vh;
          height: 2vh;
          display: block;
          margin: 3vh auto;
          position: relative;
        }
      }
    }
  }
}
// .wrapper {
//   width: 100vw;
//   height: 100vh;
//   padding-top: 75px;
//   min-height: 600px;
//   box-sizing: border-box;
//   overflow: auto;
//   background-image: url("../images/mobile/bg.png");
//   background-size: cover;
//   background-repeat: no-repeat;
//   .float-tag {
//     position: fixed;
//     left: 2%;
//     top: 20%;
//     z-index: 10000;
//     a {
//       display: block;
//       width: 2.5rem;
//       height: 2.5rem;
//       background: url("../images//mobile/float.png") no-repeat center;
//       background-size: 100%;
//     }
//   }
//   .pf-video {
//     position: fixed;
//     height: 1;
//     width: 100%;
//     padding: 0 0;
//     margin: 0 0;
//     video {
//       position: fixed !important;
//       padding: 0 0;
//       margin: 0 0;
//       object-fit: cover;
//     }
//   }
//   .pf-inner {
//     z-index: 3;
//     width: 100%;
//     position: fixed;
//     top: 0;
//   }
//   .mark {
//     z-index: 2;
//     background-color: aliceblue;
//     opacity: 0.2;
//     width: 100%;
//     top: 0;
//     position: fixed;
//   }
//   .bg {
//     background-image: url("../images//mobile/poster.jpg");
//   }
//   .pf-cont {
//     width: 100%;
//     height: 100%;
//     min-height: 600px;
//     overflow: auto;
//     position: fixed;
//     z-index: 9;
//     overflow: auto;
//     .pf-cont-item {
//       width: 100%;
//       height: 100%;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       .i {
//         flex: 1;
//       }
//       .logo {
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-end;
//         padding-bottom: 1.5rem;
//         align-items: center;
//         // padding-bottom: 32px;
//         .i-btn-panle button {
//           margin-bottom: 0 !important;
//         }
//         .logo-f {
//           margin-bottom: 90px;
//         }
//         .footer {
//           position: absolute;
//           bottom: 1.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-start;
//           align-items: center;

//           a:active,
//           a:visited,
//           a:hover {
//             text-decoration: none;
//           }
//         }
//         .prompt {
//           text-align: center;
//           padding-bottom: 50px;
//           img {
//             width: 100%;
//             object-fit: contain;
//           }
//         }
//         .i-btn-panle {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           padding: 15px;
//           button {
//             margin-bottom: 40px;
//           }
//           .android {
//             width: 3.7rem;
//             height: 1.05rem;
//             margin-top: 0.2rem;
//             background: url("../images/mobile/android.png") center center
//               no-repeat;
//           }
//           .android1 {
//             width: 2rem;
//             height: 0.6rem;
//             margin-top: 0.2rem;
//             background: url("../images/mobile/android1.png") center center
//               no-repeat;
//             border: none;
//             background-size: contain;
//           }
//            //企业包（iosEnterprise）
//           .ios {
//             width: 3.7rem;
//             height: 1.05rem;
//             margin-top: 0.2rem;
//             background: url("../images/mobile/firm.png") center center no-repeat;
//           }
//           .ios1 {
//             width: 2rem;
//             height: 0.6rem;
//             margin-top: 0.2rem;
//             background: url("../images/mobile/firm1.png") center center
//               no-repeat;
//             border: none;
//             background-size: contain;
//           }
//           .iosStroe {
//             width: 3.7rem;
//             height: 1.05rem;
//             background: url("../images/mobile/iosStroe.png") center center
//               no-repeat;
//           }
//           .iosStroe1 {
//             width: 2rem;
//             height: 0.6rem;
//             margin-top: 0.2rem;
//             background: url("../images/mobile/iosStroe1.png") center center
//               no-repeat;
//             border: none;
//             background-size: contain;
//           }
//           .iosTF {
//             background: url("../images/mobile/iosTF.png") center center
//               no-repeat;
//           }
//           .btnFilterAndroid {
//             filter: invert(45%);
//             background: url("../images/mobile/android.png") center center
//               no-repeat;
//           }
//           .btnFilterIos {
//             filter: invert(45%);
//             background: url("../images/mobile/iosDown.png") center center
//               no-repeat;
//           }
//           .btnFilterIosStroe {
//             filter: invert(45%);
//             background: url("../images/mobile/iosStroe.png") center center
//               no-repeat;
//           }
//           .btnFilterIosTF {
//             filter: invert(45%);
//             background: url("../images/mobile/iosTF.png") center center
//               no-repeat;
//           }
//           .android,
//           .ios,
//           .iosStroe,
//           .iosTF,
//           .btnFilterAndroid,
//           .btnFilterIos,
//           .btnFilterIosStroe,
//           .btnFilterIosTF {
//             z-index: 9999;
//             background-size: contain;
//             border: none;
//             margin-right: 10px;
//           }
//         }
//       }
//     }
//   }
// }
</style>

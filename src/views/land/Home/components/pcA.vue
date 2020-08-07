<template>
  <div class="wrapper">
    <div class="pf-video">
      <video id="pfVideo" muted autoplay data-autoplay playsinline>
        <source src="https://vd.kky.jjzrznp.cn/ok/hp1.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="pf-inner">
      <div class="top-bg-left">
        <img src="../images/pc/topword-logo.png" width="22%" alt />
      </div>
      <div class="top-bg-right">
        <img src="../images/pc/topword-right.png" width="52%" alt />
      </div>
    </div>
    <div class="mark"></div>
    <div class="pf-cont">
      <div class="pf-cont-item">
        <div class="i lastImg" style>
          <div class="centerImg">
            <div class="c-i-i leftLogo">
              <div>
                <transition name="fade">
                  <img v-if="show" class="leftLogo" src="../images/pc/leftLogo.png" width="46%" alt />
                </transition>
              </div>
            </div>
            <div class="c-i-item rightImg" style="padding-right:8%;margin-bottom:25vh">
              <div style="text-align:right;margin-bottom:5%">
                <img src="../images/pc/middleword-tittle.png" width="86%" alt />
              </div>
              <div class="i-btn" style="margin-bottom:5%">
                <div class="i-btn-panle">
                  <el-button
                    role="button"
                    aria-label="泡芙，泡芙短視頻，Android版本下載按鈕"
                    aria-labelledby="泡芙短視頻，Android版本下載按鈕"
                    class="android"
                    @click="getApkInfo('android')"
                  ></el-button>
                  <el-tooltip effect="dark" placement="bottom">
                    <el-button
                      role="button"
                      aria-label="泡芙，泡芙短視頻，Android版本下載二維碼"
                      aria-labelledby="泡芙短視頻，Android版本下載二維碼"
                      class="android-qr"
                    ></el-button>
                    <div slot="content" style="background:#fff">
                      <img :src="qrImg" width="140" alt />
                    </div>
                  </el-tooltip>
                </div>
                <div class="i-btn-panle">
                  <el-button
                    role="button"
                    aria-label="泡芙，泡芙短视频，ios版本下载按钮"
                    class="ios"
                    @click="getApkInfo('ios')"
                  ></el-button>
                  <el-tooltip effect="dark" placement="bottom">
                    <el-button
                      role="button"
                      aria-label="泡芙，泡芙短视频，ios版本下载二维码"
                      aria-labelledby="泡芙，泡芙短视频，ios版本下载二维码"
                      class="ios-qr"
                    ></el-button>
                    <div slot="content" style="background:#fff">
                      <img :src="qrImg" width="140" alt />
                    </div>
                  </el-tooltip>
                </div>
              </div>
              <div style="text-align:right;">
                <img src="../images/pc/lastword.png" width="84%" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["qrImg"],
  data() {
    return {
      showLogo: false,
      et: ""
    };
  },
  computed: {
    show() {
      return this.showLogo;
    }
  },
  mounted() {
    const video = document.getElementById("pfVideo");
    if (video) {
      video.addEventListener(
        "ended",
        () => {
          video.setAttribute("style", "visibility:hidden");
          this.showLogo = true;
          setTimeout(() => {
            video.setAttribute("style", "visibility:visible");

            video.play();
          }, 5000);
          setTimeout(() => {
            this.showLogo = !this.showLogo;
          }, 4500);
        },
        false
      );
    }
  },
  destroyed() {
    clearTimeout(this.et);
  },
  methods: {
    getApkInfo(type) {
      this.$emit("getApkInfo", type);
    }
  }
};
</script>

<style lang="scss" scoped>
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .1s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
.fade-enter-active {
  //类名：隐藏到显示过程所需要的时间
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  //类名：显示到隐藏过程所需要的时间
  animation: bounce-in 0.4s reverse; //reverse表示和隐藏到显示动画相反
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.wrapper {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  .pf-video {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -999;
    background: #000;
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 1450px 2666px;
    video {
      width: 100vw;
      min-width: 280px;
      height: 100vh;
      min-height: 800px;
      object-fit: cover;
      overflow: hidden;
    }
  }
  .mark {
    z-index: 2;
    background-color: aliceblue;
    opacity: 0.2;
    height: 0.8rem;
    width: 100%;
    position: fixed;
    overflow: hidden;
  }

  .pf-inner {
    z-index: 3;
    width: 100%;
    height: 0.8rem;
    position: fixed;
    display: flex;
    flex-direction: row;
    top: 0;
    overflow: hidden;
    .top-bg-left,
    .top-bg-right {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .top-bg-left {
      justify-content: flex-start;
      padding-left: 10%;
    }
    .top-bg-right {
      padding-right: 10%;
      justify-content: flex-end;
    }
  }
  .pf-cont {
    width: 100vw;
    height: 100%;
    position: fixed;
    z-index: 20;
    overflow: hidden;
    .pf-cont-item {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      .c-i-transition {
        // transition-property
      }
      .c-i-i {
        position: relative;
        text-align: center;
        .leftLogo {
          position: absolute;
          top: -50px;
          left: 45%;
        }
      }
      .c-i-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
      }
      .i {
        flex: 1;
      }
      .iImg {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .lastImg {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .centerImg {
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          div {
            flex: 1;
          }
          // .leftLogo,
          // .rightImg {
          //   flex: 1;
          // }
        }
        .i-btn {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          padding-left: 3rem;
          .i-btn-panle {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .android {
              background: url("../images/pc/button_android.png") center center
                no-repeat;
            }
            .android-qr {
              background: url("../images/pc/button_android_QR.png") center
                center no-repeat;
            }
            .ios-qr {
              background: url("../images/pc/button_android_QR.png") center
                center no-repeat;
            }
            .ios {
              background: url("../images/pc/button_ios.png") center center
                no-repeat;
            }
            .android-qr,
            .ios-qr {
              width: 33px;
              height: 33px;
              background-size: contain;
              border: none;
            }
            .android,
            .ios {
              width: 120px;
              height: 33px;
              background-size: contain;
              border: none;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .mark {
      min-height: 2rem;
    }
    .pf-inner {
      height: 2rem;
    }
  }
}
</style>

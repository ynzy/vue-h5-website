<template>
  <div class="bate-install animated bounceInUp">
    <div class="close" @click="closeTutorial">关闭</div>
    <div class="closeA"></div>
    <div class="step1">
      <img src="../images/mobile/step1.png" alt />

      <div class="download-tf" @click="uploadTestFilght">
        <img src="../images/mobile/tf-btn.png" alt style="width:50%" />
        <span style="font-size:16px;color:#ddd">點擊安裝TestFlight</span>
      </div>
    </div>
    <div class="step2">
      <img src="../images/mobile/step2.png" alt />
      <div class="download-store">
        <div class="downloadArea">
          <div class="store-logo">
            <img src="../images/pc/leftLogo.png" />
            <div style="font-size:16px;color:#555;margin:10px 0 10px">泡芙短視頻</div>
          </div>

          <div class="store-btn" @touchend="touchend('str')" v-if="!flag && url!=''">
            <img src="../images/mobile/tf-btn.png" alt style="width:80%;height:5vh" />
            <span style="font-size:16px">泡芙短視頻</span>
          </div>

          <div v-if="flag">
            <div
              class="store-btn"
              @touchend="touchend('json', i)"
              v-for="(item, i) in apkList"
              :key="i"
            >
              <img src="../images/mobile/tf-btn.png" style="width:80%;height:5vh" />
              <span style="font-size:16px">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="down-logo">
        <img src="../images/mobile/logo.png" />
      </div>
      <div class="app-name" style="font-size:20px; font-weight: 500;">泡芙短視頻</div>
    </div>
  </div>
</template>

<script>
import getApkInfo from "@/api/getApkInfo";
import handleReplaceURLParams from "@/utils/handleReplaceURLParams";

export default {
  data() {
    return {
      type: "",
      active: true,
      params: "",
      apkList: [],
      flag: undefined,
      url: "",
      Ip: ""
    };
  },
  created() {},
  mounted() {
    /**
     * 判断进来的url地址 替换到需要手动设置的参数 如：dc
     */
    this.params = handleReplaceURLParams()
      ? handleReplaceURLParams()
      : JSON.stringify(this.$route.query) === "{}"
      ? "{}"
      : JSON.stringify(this.$route.query);
    this.getiosBeta("bate");
  },
  methods: {
    //tf安装
    uploadTestFilght() {
      window.location.href =
        "https://apps.apple.com/us/app/testflight/id899247664";
    },
    closeTutorial() {
      this.$router.push({ path: "/", query: this.$route.query });
    },
    touchstart() {
      this.active = !this.active;
    },
    //生成随机数
    randomsort() {
      return Math.random() > 0.5 ? -1 : 1;
      //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    },
    //商店包页面请求
    getiosBeta(type) {
      let sysType;
      if (type === "bate" || type === "ios") {
        sysType = "ios";
      } else {
        sysType = "android";
      }
      const data = {
        // eslint-disable-next-line no-undef
        ip: this.$route.query.ip,
        linkParams: JSON.stringify({
          ...JSON.parse(this.params),
          ...this.cutInfo
        }),
        devType: "p30",
        sysType,
        buildId: type === "bate" ? "yinse_opera" : undefined
      };
      getApkInfo(data).then(res => {
        if (res.data.code === 200) {
          if (typeof res.data.data.apk == "string") {
            try {
              JSON.parse(res.data.data.apk);
              this.flag = true;
            } catch (e) {
              this.flag = false;
            }
          }
          this.flag
            ? (this.apkList = JSON.parse(res.data.data.apk).sort(
                this.randomsort
              ))
            : (this.url = res.data.data.apk);
        }
      });
    },
    //第二步的 按钮
    touchend(type, i) {
      if (type === "str") {
        window.location.href = this.url;
      } else {
        if (this.apkList[i] && this.apkList[i] != "") {
          window.location.href = this.apkList[i].url;
        } else {
          this.$message.error("链接地址不存在！");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bate-install {
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 88;
  top: 0;
  left: 0;
  text-align: center;
  .step1 img {
    width: 100vw;
  }
  .download-tf {
    position: fixed;
    top: 11.5rem;
    left: 0;
    span {
      position: absolute;
      top: 46%;
      left: 50%;
      transform: translate(-50%, -54%);
    }
  }
  .step2 img {
    width: 100vw;
  }
  .download-store {
    position: fixed;
    top: 25.5rem;
    left: 0;
    height: 8rem;
    width: 100vw;
    .downloadArea {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .store-logo img {
        width: 2.93rem;
        height: 2.93rem;
        background: #000;
        padding: 15px;
        border-radius: 10%;
      }
      .store-btn {
        // margin-top: 0.67rem;
        position: relative;
        span {
          color: #dddddd;
          position: absolute;
          top: 46%;
          left: 50%;
          transform: translate(-50%, -54%);
          width: 2.6rem;
        }
      }
    }
  }
  .down-logo img {
    width: 2.67rem;
    height: 2.67rem;
    background: #000;
    padding: 15px;
    border-radius: 10%;
    position: fixed;
    top: 37rem;
    left: 0.933rem;
  }
  .app-name {
    position: fixed;
    top: 36.5rem;
    left: 4.11rem;
  }
  .close {
    text-align: center;
    position: fixed;
    top: 10px;
    right: 0;
    width: 2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #000;
    z-index: 22;
  }
  .closeA {
    position: fixed;
    top: 10px;
    right: 0;
    width: 2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0.5rem;
    opacity: 0.4;
    background: #ccc;
    color: aliceblue;
    z-index: 21;
  }
}
</style>

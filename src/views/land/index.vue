<template>
  <div class="container" @click="doCopy()">
    <Home
      v-if="loading"
      :os="os"
      :switchData="switchData"
      @getApkInfo="handleGetApkInfo"
      :qr-img="QRImg"
      :ip="ip"
    ></Home>
  </div>
</template>
<script>
import getApkInfo from "@/api/getApkInfo";
import getBtnFlag from "@/api/getBtnFlag";
import getTemplate from "@/api/getTemplate";
import Home from "./Home/index";
import QRCode from "qrcode";
import userAgent from "@/utils/userAgent";
import axios from "@/utils/request.js";
export default {
  components: {
    Home
  },
  data() {
    return {
      type: "",
      QRImg: "",
      switchData: "",
      os: "",
      loading: false,
      params: "",
      cutInfo: {}, //替换url参数对象内<key> dc内容;
      ip: ""
    };
  },
  created() {
    this.handleGetTemplate();
    this.getIp();
  },
  mounted() {
    this.getQRImg();

    /**
     * 判断进来的url地址 替换到需要手动设置的参数 如：dc
     */
    this.params =
      JSON.stringify(this.$route.query) === "{}"
        ? "{}"
        : JSON.stringify(this.$route.query);
  },
  methods: {
    // 获取外网IP
    getIp() {
      axios.get("https://api.ipify.org/?format=json").then(res => {
        this.ip = res.data.ip;
      });
    },
    getQRImg() {
      const color = this.type === "xingba" ? "#fb4b15" : "";
      QRCode.toDataURL(window.location.href, {
        width: 240,
        margin: 1,
        maskPattern: 1,
        scale: 1,
        color: {
          dark: color,
          light: "rgba()"
        }
      }).then(url => {
        this.QRImg = url;
      });
      window.getApkInfo = this.getApkInfo;
    },
    // 获取模版变量
    async handleGetTemplate() {
      try {
        // const res = await getTemplate({ url: window.location.href });
        const res = await getTemplate();
        if (res.data.code === 200) {
          this.os = userAgent();
          this.switchData = res.data.data.buttons;
          this.cutInfo = res.data.data.cutInfo;
          this.loading = true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    // 获取操作按钮状态
    async handleGetBtnFlag() {
      const res = await getBtnFlag({
        url: window.location.href
      });
      if (res.data.code === 200) {
        this.os = userAgent();
        this.switchData = res.data.data;
        this.loading = true;
      }
    },
    // 点击下载按钮获取apk信息并下载
    async handleGetApkInfo(type) {
      let sysType;
      if (type === "bate" || type === "ios") {
        sysType = "ios";
      } else {
        sysType = "android";
      }
      const params = {
        // eslint-disable-next-line no-undef
        ip: this.ip ? this.ip : "", //获取ip地址
        linkParams: JSON.stringify({
          ...JSON.parse(this.params),
          ...this.cutInfo
        }),
        devType: "p30",
        sysType,
        buildId: type === "bate" ? "com.paofu.tick" : undefined
      };
      const res = await getApkInfo(params);
      if (res.data.code === 200) {
        window.location.href = res.data.data.apk;
      }
    },

    // 剪贴板
    doCopy() {
      // eslint-disable-next-line no-undef
      this.$copyText(
        JSON.stringify({ ...JSON.parse(this.params), ...this.cutInfo })
      ).then(() => {
        console.log("复制剪贴板成功");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
}
</style>

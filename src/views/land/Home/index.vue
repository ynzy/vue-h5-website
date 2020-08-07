<template>
  <div>
    <!-- <div v-if="isPC"> -->
    <!-- <div class="mobile">
        <pc-b :qr-img="qrImg" @getApkInfo="getApkInfo"></pc-b>
    </div>-->
    <div class="pc">
      <pc-a :qr-img="qrImg" @getApkInfo="getApkInfo"></pc-a>
    </div>
    <!-- </div> -->
    <div class="mobile">
      <mobile :ip="ip" :switchData="switchData" :os="os" @getApkInfo="getApkInfo"></mobile>
    </div>
  </div>
</template>
<script>
import mobile from "./components/mobile.vue";
import pcA from "./components/pcA.vue";
// import pcB from "./componets/pcB";

export default {
  props: ["qrImg", "os", "switchData", "ip"],
  components: {
    mobile,
    pcA
    // pcB
  },
  data() {
    return {
      data: {}
    };
  },

  computed: {
    isPC() {
      return this.os.isPc;
    }
  },
  created() {},
  mounted() {},
  methods: {
    getApkInfo(type) {
      this.$emit("getApkInfo", type);
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 750px) {
  .mobile {
    display: none;
  }
  .pc {
    overflow: hidden;
  }
}
@media screen and (max-width: 750px) {
  .pc {
    display: none;
  }
}
</style>

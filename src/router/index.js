import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/land/index.vue";
import Home from "../views/land/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "泡芙短视频",
    },
  },
  /* {
    path: "/tutorial",
    name: "Tutorial",
    meta: {
      title: "泡芙短视频-前往教程",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( "../views/land/Home/page/tutorial.vue"),
  }, */
  /* {
    path: "/imgCom",
    name: "ImgCom",
    meta: {
      title: "泡芙短视频-按照教程",
    },
    component: () => import("../views/land/Home/page/imgCom.vue"),
  }, */
  {
    path: "/iosBeta",
    name: "IosBeta",
    meta: {
      title: "泡芙短视频-商店包",
    },
    component: () => import("../views/land/Home/page/iosBeta.vue"),
  },
  /* {
    path: "/qrcode",
    name: "qrcode",
    meta: {
      title: "泡芙短视频-登陆二维码",
    },
    component: () => import("../views/H5/qrcode"),
  }, */
  // {
  //   path: "/money_making",
  //   name: "MonenyMaking",
  //   meta: {
  //     title: "泡芙短视频-活动页"
  //   },
  //   component: () => import("../views/H5/money_making")
  // },
  // {
  //   path: "/promoting_event",
  //   name: "promoting_event",
  //   meta: {
  //     title: "泡芙短视频-活动页"
  //   },
  //   component: () => import("../views/H5/promoting_event")
  // },
  // {
  //   path: "/proxy_rule",
  //   name: "proxy_rule",
  //   meta: {
  //     title: "泡芙短视频-活动页"
  //   },
  //   component: () => import("../views/H5/proxy_rule")
  // },
  /* {
    path: "/h5/app/qa",
    name: "qa",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/qa"),
  },
  {
    path: "/h5/app/money_making",
    name: "MonenyMaking",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/money_making"),
  },
  {
    path: "/h5/app/promoting_event",
    name: "promoting_event",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/promoting_event"),
  },
  {
    path: "/h5/app/proxy_rule",
    name: "proxy_rule",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/proxy_rule"),
  },
  {
    path: "/h5/app/qa",
    name: "qa",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/qa"),
  },
  {
    path: "/h5/app/xianJinDaZuoZhan",
    name: "xianJinDaZuoZhan",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/xianJinDaZuoZhan"),
  },
  {
    path: "/h5/app/activityControls",
    name: "xianJinDaZuoZhan",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/activityControls"),
  },
  {
    path: "/h5/app/pf520",
    name: "泡芙520",
    meta: {
      title: "泡芙短视频-活动页",
    },
    component: () => import("../views/H5/pf520"),
  },
  // 活动-转盘
  {
    path: "/h5/app/activity",
    name: "Activity",
    meta: {
      title: "活动-转盘抽奖",
    },
    component: () => import("@/views/activity"),
  },

  {
    path: "/h5/app/questionnaire",
    name: "questionnaire",
    meta: {
      title: " 问卷调查",
    },
    component: () => import("../views/H5/questionnaire"),
  },
  {
    path: "/platinumPage",
    name: "platinumPage",
    meta: {
      title: "钻石问卷",
    },
    component: () =>
      import("../views/H5/questionnaire/components/platinumPage"),
  },
  {
    path: "/diamondPage",
    name: "diamondPage",
    meta: {
      title: "铂金问卷",
    },
    component: () => import("../views/H5/questionnaire/components/diamondPage"),
  },
  {
    path: "/glodPage",
    name: "glodPage",
    meta: {
      title: "黄金问卷",
    },
    component: () => import("../views/H5/questionnaire/components/glodPage"),
  },
  {
    path: "/h5/app/soMoaning",
    name: "soMoaning",
    meta: {
      title: "中国好呻吟",
    },
    component: () => import("../views/H5/soMoaning"),
  },
  {
    path: "/h5/app/loli-contest",
    name: "loli-contest",
    meta: {
      title: "萝莉大赛",
    },
    component: () => import("../views/H5/loli-contest"),
  }, */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
// router.afterEach((to) => {
//   // eslint-disable-next-line no-undef
//   ga("set", "page", to.path);
//   // eslint-disable-next-line no-undef
//   ga("send", "pageview");
// });
export default router;

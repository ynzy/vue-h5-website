/**
 * 导入
 * @require [axios]   - 发送请求组件
 * @require [Message] - elementui的消息提示中间件
 */
import axios from "axios";
import { Message } from "element-ui";

const sericve = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000,
});

/**
 * 请求之前
 */
sericve.interceptors.request.use(
  function (config) {
    // const { token } = this.$route.query;
    // // let token = this.$route.query.token ? this.$route.query.token : "";
    // if (token) {
    //   config.headers = {
    //     "X-Authorization": this.$route.query.token || "",
    //   };
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * 请求之后
 */
sericve.interceptors.response.use(
  // function(response) {
  //   // 状态码200
  //   if (response.status === 200) {
  //     if (response.data.code === 200) {
  //       return response;
  //     } else {
  //       Message.success({
  //         type: "error",
  //         message: "错误",
  //       });
  //     }
  //   } else {
  //     Message.success({
  //       type: "error",
  //       message: "服务器错误",
  //     });
  //   }
  // },
  (reponse) => {
    if (reponse.status === 200) {
      console.log(reponse);
      return reponse;
    } else {
      Message.success({
        type: "error",
        message: "服务器错误",
      });
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 导出
 */
export default sericve;

import request from "@/utils/request";

export default data =>
  request({
    method: "post",
    url: "https://pppf.me/ext/setIp",
    data
  });

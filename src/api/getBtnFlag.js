import request from "@/utils/request";

export default params =>
  request({
    url: "/ext/switch/ios",
    method: "get",
    params
  });

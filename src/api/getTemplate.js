import request from "@/utils/request";

export default params =>
  request({
    method: "get",
    url: "https://pppf.me/ext/template?url=https:%2F%2Fpppf.me%2F%3Fpc%3DJFBLV7",
    params
  });

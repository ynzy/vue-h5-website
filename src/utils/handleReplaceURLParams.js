import hasLocateURLIsYsLive from "./hasLocateURLIsYsLive";
const params = [{ url: "ys.live", query: { dc: "SUNQUAN" } }]; //过滤的url
/**
 * 匹配集合内的url 匹配到的则返回对应的query对象，此对象会替换url里参数
 */
export default () => {
  for (const iterator of params) {
    /**
     * 本地URL是否是ys.live
     */
    if (hasLocateURLIsYsLive(new RegExp(iterator.url))) {
      return JSON.stringify(iterator.query);
    }
  }
  return false;
};

export default function (context) {
  const userAgent = process.server
    ? context.req.headers["user-agent"]
    : navigator.userAgent;
  return (function () {
    const ua = userAgent;
    const isWindowsPhone = /(?:Windows Phone)/.test(ua);
    const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    const isAndroid = /(?:Android)/.test(ua);
    const isFireFox = /(?:Firefox)/.test(ua);
    // const isChrome = /(?:Chrome|CriOS)/.test(ua);
    const isOPPO = /(?:OPPO)/.test(ua);
    const isTablet =
      /(?:iPad|PlayBook)/.test(ua) ||
      (isAndroid && !/(?:Mobile)/.test(ua)) ||
      (isFireFox && /(?:Tablet)/.test(ua));
    const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    const isWx = /MicroMessenger/.test(ua);
    const isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      userAgent,
      isOPPO,
      isTablet,
      isPhone,
      isAndroid,
      isPc,
      isWx
    };
  })();
  // return os;
  // context.os = os;
}

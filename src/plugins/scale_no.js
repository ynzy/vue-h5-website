window.onload = function () {
  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  var lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    function (event) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });
};

(function (win) {
  var tid;
  function refreshRem() {
    // let designSize = 720; // 设计图尺寸
    let designSize = 1920; // 设计图尺寸
    let html = document.documentElement;
    let wW = html.clientWidth; // 窗口宽度
    let rem = (wW * 100) / designSize;
    document.documentElement.style.fontSize = rem + "px";
  }
  if (!navigator.userAgent.match(/mobile/i)) {
    win.addEventListener(
      "resize",
      function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      },
      false
    );
    win.addEventListener(
      "pageshow",
      function (e) {
        if (e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
        }
      },
      false
    );
    refreshRem();
  }
})(window);

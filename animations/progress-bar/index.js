window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("indicator").innerText = Math.floor(scrolled) + "%";
  document.getElementById("miniProgressBar").style.height =
    Math.floor(scrolled) + "%";
};

(function () {
  const url = "https://toru-ubu.github.io/price-widget/index.html"; // GASで毎日更新されるHTML

  fetch(url)
    .then(res => res.text())
    .then(html => {
      const container = document.createElement("div");
      container.innerHTML = html;
      document.currentScript.parentNode.insertBefore(container, document.currentScript.nextSibling);
    })
    .catch(err => console.error("読み込み失敗:", err));
})();

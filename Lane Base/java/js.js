
// 🔍 検索対象ページ + 飛び先ID
const searchData = [
  { title: "稲沢グランドボウル", page: "./Aichi.html", id: "InazawaGB" },
  { title: "岡崎グランドボウル", page: "./Aichi.html", id: "OkazakiGB" },
  { title: "桃の栽培方法", page: "peach.html", id: "peach" }
];

function searchPages() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";
  if (input === "") return;

  const results = searchData.filter(item =>
    item.title.toLowerCase().includes(input)
  );
  if (results.length === 0) return;

  results.forEach(result => {
    const li = document.createElement("li");
    li.textContent = result.title;

    // クリックでページ移動 ＋ scrollターゲットをURLに付与
    li.onclick = () => {
      window.location.href = `${result.page}?scroll=${result.id}`;
    };

    suggestionBox.appendChild(li);
  });
}


// URLパラメータから scroll=◯◯ を取得
const params = new URLSearchParams(location.search);
const targetId = params.get("scroll");

// scroll パラメータがあれば、その要素へスクロール
if (targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // すべてのタブを非アクティブに
    tabs.forEach(t => t.classList.remove("active"));
    // すべてのコンテンツ非表示
    contents.forEach(c => c.classList.remove("active"));

    // クリックしたタブをアクティブに
    tab.classList.add("active");
    // 対応するコンテンツを表示
    const target = document.getElementById(tab.dataset.target);
    target.classList.add("active");
  });
})

/* Fade-in animation */
const targets = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // 1度だけアニメーションしたい場合は unobserve
      observer.unobserve(entry.target);
    }
  });
});

targets.forEach(target => observer.observe(target));
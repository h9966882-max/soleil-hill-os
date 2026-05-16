/* =========================================================
  🌻 共通：localStorage読み込み
========================================================= */

function readStorage(key) {
  return JSON.parse(localStorage.getItem(key) || "{}");
}

function readArrayStorage(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}

function showValue(value) {
  return value && String(value).trim()
    ? value
    : "未記録";
}

function getSelectedDate() {
  const params =
    new URLSearchParams(location.search);

  return (
    params.get("date") ||
    new Date().toISOString().slice(0, 10)
  );
}

/* =========================================================
  🗺️ エリアアイコン
========================================================= */

function areaIcon(area) {

  const icons = {
    "展望台": "🔭",
    "図書館": "📚",
    "アトリエ": "🎨",
    "広場": "🕊️",
    "庭園": "🌷",
    "宿りの館": "🏡"
  };

  return icons[area] || "🗺️";
}

/* =========================================================
  🏷️ エリアタグ表示
========================================================= */

function renderAreaTags(areas) {

  if (!areas || areas.length === 0) {
    return "未記録";
  }

  return areas.map(area => `
    <span class="tag">
      ${areaIcon(area)} ${area}
    </span>
  `).join("");
}

/* =========================================================
  ✅ 朝ログタスク表示
========================================================= */

function renderTaskList(tasks, oldAction = "") {

  if (
    Array.isArray(tasks) &&
    tasks.length > 0
  ) {

    return `
      <div class="task-list">

        ${tasks.map(task => `

          <div class="task-item">

            <span class="task-check">
              ${task.done ? "☑" : "☐"}
            </span>

            <span>
              ${showValue(task.text)}
            </span>

          </div>

        `).join("")}

      </div>
    `;
  }

  return showValue(oldAction);
}

/* =========================================================
  🌅 朝ログ表示
========================================================= */

function renderMorningLog(date, morning) {

  const box =
    document.getElementById("morningDetail");

  if (!morning) {
    box.innerHTML = "";
    return;
  }

  box.innerHTML = `
    <section class="card">

      <h2>🌅 朝ログ</h2>

      <div class="detail-row">
        <span class="label">
          今日の目標：
        </span>

        ${showValue(
          morning.goal ||
          morning.theme
        )}
      </div>

      <div class="detail-row">
        <span class="label">
          今の状態：
        </span>

        ${showValue(morning.mood)}
      </div>

      <div class="detail-row">
        <span class="label">
          今日のやりたいこと：
        </span>
      </div>

      ${renderTaskList(
        morning.tasks,
        morning.action
      )}

      <div class="detail-row">
        <span class="label">
          行きたいエリア：
        </span>

        ${renderAreaTags(
          morning.areas
        )}
      </div>

      <div class="detail-row">
        <span class="label">
          今日の指針：
        </span>

        ${showValue(
          morning.guideline ||
          morning.care
        )}
      </div>

      <div class="detail-row">
        <span class="label">
          今日の小さな楽しみ：
        </span>

        ${showValue(
          morning.smallJoy ||
          morning.message
        )}
      </div>

      <!-- 🌻 篤史コメント -->
      <div
        id="morningComment"
        class="comment-slot">
      </div>

      <button
        onclick="location.href='morninglog.html?date=${date}'">

        朝ログを編集する

      </button>

    </section>
  `;

  /* =========================================================
    🌻 篤史コメント生成
  ========================================================== */

if (
  typeof buildAtsushiComment === "function" &&
  typeof generateMorningComment === "function"
) {

  document.getElementById(
    "morningComment"
  ).innerHTML =

    buildAtsushiComment(
      "篤史からの朝コメント 🌅",
      generateMorningComment(morning)
    );
}
}

/* =========================================================
  🌙 夜ログ表示
========================================================= */

function renderNightLog(date, night) {

  const box =
    document.getElementById("nightDetail");

  if (!night) {
    box.innerHTML = "";
    return;
  }

  box.innerHTML = `
    <section class="card">

      <h2>🌙 夜ログ</h2>

      <div class="detail-row">
        <span class="label">
          今日のテーマ：
        </span>

        ${showValue(night.theme)}
      </div>

      <div class="detail-row">
        <span class="label">
          主感情：
        </span>

        ${showValue(night.mood)}
      </div>

      <div class="detail-row">
        <span class="label">
          エネルギー：
        </span>

        ${showValue(night.energy)}
      </div>

      <div class="detail-row">
        <span class="label">
          今日やったこと：
        </span>

        ${showValue(night.done)}
      </div>

      <div class="detail-row">
        <span class="label">
          心が動いたこと：
        </span>

        ${showValue(night.heart)}
      </div>

      <div class="detail-row">
        <span class="label">
          制作ログ：
        </span>

        ${showValue(night.create)}
      </div>

      <div class="detail-row">
        <span class="label">
          思考ログ：
        </span>

        ${showValue(night.think)}
      </div>

      <div class="detail-row">
        <span class="label">
          接続エリア：
        </span>

        ${renderAreaTags(night.areas)}
      </div>

      <div class="detail-row">
        <span class="label">
          明日に残すこと：
        </span>

        ${showValue(night.tomorrow)}
      </div>

      <div class="detail-row">
        <span class="label">
          今日の一文：
        </span>

        ${showValue(night.oneLine)}
      </div>

      <hr>

      <div class="detail-row">
        <span class="label">
          何が起きた？：
        </span>

        ${showValue(night.trigger)}
      </div>

      <div class="detail-row">
        <span class="label">
          どう解釈した？：
        </span>

        ${showValue(night.interpret)}
      </div>

      <div class="detail-row">
        <span class="label">
          この感情は何を伝えている？：
        </span>

        ${showValue(night.meaning)}
      </div>

      <div class="detail-row">
        <span class="label">
          今とる最適行動：
        </span>

        ${showValue(night.action)}
      </div>

      <div class="detail-row">
        <span class="label">
          やらない行動：
        </span>

        ${showValue(night.avoid)}
      </div>

      <button
        onclick="location.href='log.html?date=${date}'">

        夜ログを編集する

      </button>

    </section>
  `;
}


/* =========================================================
  🌻 detailページ初期化
========================================================= */

function renderDetailPage() {

  const date = getSelectedDate();

  document.getElementById(
    "dateTitle"
  ).innerText = date;

  /* 🌅 朝ログ */
  const morningLogs =
    readStorage("soleilMorningLogs");

  /* 🌙 夜ログ */
  const nightLogs =
    readStorage("soleilLogs");

  renderMorningLog(
    date,
    morningLogs[date]
  );

  renderNightLog(
    date,
    nightLogs[date]
  );
}

/* =========================================================
  🌻 初期実行
========================================================= */

renderDetailPage();




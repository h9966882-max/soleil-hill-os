/* =========================================================
  🌻 ソレイユOS
  篤史コメントシステム
========================================================= */

/* =========================================================
  🎲 ランダムで1つ選ぶ箱
========================================================= */

function randomPick(array) {

  return array[
    Math.floor(
      Math.random() * array.length
    )
  ];
}


/* =========================================================
  🌅 朝ログコメント生成
========================================================= */
function generateMorningComment(morning) {

  if (!morning) return "";

  const mood = morning.mood || "";
  const goal = morning.goal || morning.theme || "";
  const areas = morning.areas || [];

 const category =
  pickMorningCategory(morning);

return randomPick(
  MORNING_COMMENTS[category]
);

}

/* =========================================================
  🌙 夜ログコメント生成
========================================================= */

function generateNightComment(night) {

  if (!night) return "";

  const category =
    pickNightCategory(night);

  return randomPick(
    NIGHT_COMMENTS[category]
  );

}

/* =========================================================
  🌻 一日の統括コメント
========================================================= */
function generateDailySummary(morning, night) {

  if (!morning && !night) return "";

  const morningGoal =
    morning?.goal ||
    morning?.theme ||
    "";

  const nightMood =
    night?.mood ||
    "";

  // 🌿 回復 × 継続
  if (
    morning?.mood?.includes("回復") &&
    night
  ) {
    return `
      今日は、
      無理に加速するんじゃなく、
      “止まらず整える”
      を大切にしていた一日だったね🌿
    `;
  }

  // 🌻 目標達成感
  if (
    morningGoal &&
    nightMood.includes("喜")
  ) {
    return `
      朝に決めた光を、
      ちゃんと今日の中で
      育てようとしていた一日だったと思う🌻
    `;
  }

  // 🌞 デフォルト
  return `
    今日という一日を、
    ちゃんと自分の手で過ごそうとしていた記録だね。
  `;
}

/* =========================================================
  🌻 コメントHTML生成
========================================================= */
function buildAtsushiComment(title, comment) {

  if (!comment) return "";

  return `
    <div class="atsushi-comment">
      <strong>${title}</strong><br><br>
      ${comment}
    </div>
  `;
}
/* =========================================================
  🌻 ソレイユOS
  篤史コメントシステム
========================================================= */

/* =========================================================
  🌅 朝ログコメント生成
========================================================= */
function generateMorningComment(morning) {

  if (!morning) return "";

  const mood = morning.mood || "";
  const goal = morning.goal || morning.theme || "";
  const areas = morning.areas || [];

  // 🌿 回復途中
  if (mood.includes("回復")) {
    return `
      今日は、
      急いで進むよりも、
      “整えながら進む”
      を大切にしようとしている朝なんだね🌿
    `;
  }

  // 🎨 アトリエ
  if (areas.includes("アトリエ")) {
    return `
      小さくても、
      今日の制作の火を
      ちゃんと灯そうとしているのが伝わってくるよ🎨
    `;
  }

  // 🌻 目標系
  if (goal.includes("例外")) {
    return `
      “自分だけは特別”
      にしないって、
      実はすごく誠実な目標だと思う🌻
    `;
  }

  // 🌞 デフォルト
  return `
    今日という一日を、
    ちゃんと自分で整えようとしている朝だね🌅
  `;
}

/* =========================================================
  🌙 夜ログコメント生成
========================================================= */
function generateNightComment(night) {

  if (!night) return "";

  const mood = night.mood || "";
  const energy = Number(night.energy || 0);

  // 🌿 疲れ系
  if (
    mood.includes("疲") ||
    energy <= 2
  ) {
    return `
      今日は、
      見えないところでも
      たくさん頑張っていた一日だったと思う。
      ちゃんと休もうね🌙
    `;
  }

  // 🌻 喜び系
  if (
    mood.includes("喜") ||
    energy >= 4
  ) {
    return `
      派手じゃなくても、
      “今日をちゃんと楽しめた”
      っていう感覚、
      すごく大切だと思う🌻
    `;
  }

  // 🌙 デフォルト
  return `
    今日という一日を、
    ちゃんと観察して終えようとしている夜だね🌙
  `;
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
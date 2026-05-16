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

  const mood = night.mood || "";
  const energy = Number(night.energy || 0);
  
  const areas = night.areas || [];
  

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
  
  // 🎨 アトリエ反応
if (
  areas.includes("アトリエ")
) {

const atelierComments = [

  `
  今日は、
  “つくる時間”
  をちゃんと大事にしていた夜なんだね🎨
  `,

  `
  小さくても、
  “手を動かす時間”
  をちゃんと持てていたの、すごく良いと思う🎨
  `,

  `
  今日は、
  自分の中にあるものを、
  少しずつ形にしていた夜なんだね🌻
  `

];

return randomPick(atelierComments);
}

// 🌷 庭園反応
if (
  areas.includes("庭園")
) {

const gardenComments = [

  `
  今日は、
  “整える時間”
  をちゃんと自分に渡していた夜なんだね🌷
  `,

  `
  焦って進むよりも、
  “ちゃんと呼吸できる形”
  を選ぼうとしていた夜だったんだね🌿
  `,

  `
  今日は、
  自分の内側を、
  少しずつ静かに整えていた感じがするよ🌷
  `

];

return randomPick(gardenComments);
}

// 🌌 展望台反応
if (
  areas.includes("展望台")
) {

const observatoryComments = [

  `
  今日は、
  ちゃんと立ち止まって、
  “少し高い場所から”
  自分を見ようとしていた夜なんだね🌌
  `,

  `
  今日は、
  目の前だけじゃなく、
  “少し遠くの景色”
  まで見ようとしていた感じがするよ🌠
  `,

  `
  焦って答えを出すよりも、
  “まず全体を見る”
  を大事にしていた夜だったんだね🌌
  `

];

return randomPick(observatoryComments);
}

  // 📚 図書館反応
if (
  areas.includes("図書館")
) {

const libraryComments = [

  `
  今日は、
  “理解する時間”
  を静かに積み重ねていた夜なんだね📚
  `,

  `
  今日の図書館時間、
  “知る”
  だけじゃなく、
  “ちゃんと咀嚼する”
  に近かった気がするよ📖
  `,

  `
  今日は、
  自分の中にある考えを、
  少しずつ整理していた夜だったんだね📚
  `

];

return randomPick(libraryComments);
}

// 🏡 宿りの館反応
if (
  areas.includes("宿りの館")
) {

const innComments = [

  `
  今日は、
  “ちゃんと帰ってくる時間”
  を自分に渡していた夜なんだね🏡
  `,

  `
  外に向かうだけじゃなく、
  “安心できる場所へ戻る”
  を大事にしていた夜だったんだね🌙
  `,

  `
  今日は、
  無理に頑張り続けるより、
  “ちゃんと休める形”
  を選ぼうとしていた感じがするよ🏡
  `

];

return randomPick(innComments);
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
  
  // 🌧️ 不安系
if (
  mood.includes("不安") ||
  mood.includes("焦")
) {

  return `
    今日は、
    ちゃんと立ち止まって
    自分の内側を見ようとしていた夜だね🌙
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
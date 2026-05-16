/* =========================================================
  🌙 夜コメント倉庫
========================================================= */

const NIGHT_COMMENTS = {

  calm: [

    `
    今日はいろんなことを抱えながらも、
    ちゃんと丘へ帰ってこれた一日だったね🌙
    `,

    `
    静かな感情の中にも、
    今日を積み重ねた跡がちゃんと残ってるよ🕯️
    `

  ],

  joy: [

    `
    “好き” と “やりたい”
    が少し繋がった夜だったんだね✨
    `,

    `
    今日の嬉しさ、
    ちゃんと心の奥に灯ってる感じがする🌻
    `

  ],

  recovery: [

    `
    回復しながらでも、
    今日を諦めなかったのが伝わってくるよ🌱
    `,

    `
    無理に元気になるより、
    “整える” を選べた夜だったんだね🌙
    `

  ],
  
  creative: [

  `
  小さくても、
  “手を動かした時間”
  を持てていたの、すごく良いと思う🎨
  `,

  `
  今日は、
  自分の中にあるものを、
  少しずつ形にしていた夜なんだね🌻
  `

],

observatory: [

  `
  今日は、
  ちゃんと立ち止まって、
  “少し高い場所から”
  自分を見ようとしていた夜なんだね🌌
  `

]

};

function pickNightCategory(night) {

  if (!night) return "calm";

  const mood =
    night.mood || "";

  const areas =
    night.areas || [];

  /* 🌿 回復系 */
  if (
    mood.includes("回復") ||
    mood.includes("疲")
  ) {
    return "recovery";
  }

  /* 🌻 喜び系 */
  if (
    mood.includes("喜") ||
    mood.includes("楽")
  ) {
    return "joy";
  }

  /* 🎨 制作系 */
  if (
    areas.includes("アトリエ")
  ) {
    return "creative";
  }

  /* 🌌 展望台 */
  if (
    areas.includes("展望台")
  ) {
    return "observatory";
  }

  /* 🌙 デフォルト */
  return "calm";
}
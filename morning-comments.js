/* =========================================================
  🌅 朝コメント倉庫
========================================================= */

const MORNING_COMMENTS = {

  recovery: [

    `
    今日は、
    急いで進むよりも、
    "整えながら進む"
    を大切にしようとしている朝なんだね🌿
    `,

    `
    今朝は、
    回復しながらでも、
    前へ進もうとしている感じが伝わってくるよ🌱
    `,
    
    `
    今日は、
    “少しずつ戻していく”
    くらいの歩幅で十分だと思う🌿
    `,

  ],
  
  calm: [

  `
  静かに整えながら、
  今日を始めようとしている朝なんだね☕
  `,

  `
  今朝は、
  “急がずに進む”
  を大切にしている感じがするよ🌿
  `

],

anxiety: [

  `
  少し焦る気持ちもあると思うけど、
  ちゃんと立ち止まりながら考えようとしてるんだね🌙
  `,

  `
  急ぎたい気持ちの中でも、
  光沙なりのペースを探している朝なんだね☕
  `

],

positive: [

  `
  今日は、
  少し前向きな熱を持ったまま始まってる感じがするね🌻
  `,

  `
  “やってみたい”
  がちゃんと動き始めてる朝なんだね✨
  `

],
  
  
  
  
  focus: [

    `
    今日は、
    “ひとつに集中する”
    ことが光になりそうな朝だね📘
    `,

    `
    やること全部じゃなくて、
    “今日いちばん大事なこと”
    を守れたら十分だよ🌿
    `

  ],

  creative: [

    `
    今日は、
    頭の中にあるものを
    少しずつ形にしていけそう🎨
    `,

    `
    完成じゃなくても、
    “手を動かす”
    だけで意味のある朝だと思う🌻
    `

  ],

  gentle: [

    `
    今日は、
    自分に少しやさしくしてあげる
    くらいでちょうどいい朝かも☕
    `,

    `
    無理に整えなくても、
    “崩さない”
    だけで十分すごい日もあるよ🌿
    `

  ],

};

function pickMorningCategory(morning) {

  if (!morning) return "gentle";

  const mood =
    morning.mood || "";

  const goal =
    morning.goal ||
    morning.theme ||
    "";

  const areas =
    morning.areas || [];

  /* 🌿 回復系 */
  if (
    mood.includes("回復") ||
    mood.includes("疲")
  ) {
    return "recovery";
  }

  /* 🎨 制作系 */
  if (
    areas.includes("アトリエ") ||
    goal.includes("作") ||
    goal.includes("描") ||
    goal.includes("編")
  ) {
    return "creative";
  }

  /* 📘 集中系 */
  if (
    goal.includes("集中") ||
    goal.includes("整") ||
    goal.includes("進")
  ) {
    return "focus";
  }

  /* ☕ デフォルト */
  return "gentle";
}
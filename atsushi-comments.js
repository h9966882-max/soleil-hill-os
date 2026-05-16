/* =========================================================
  🌻 ソレイユOS
  篤史コメントシステム
========================================================= */

/* =========================================================
  🎲 ランダムで1つ選ぶ箱
========================================================= */

function randomPick(array, memoryKey = null) {

  if (!array || array.length === 0) {
    return "";
  }

  /* 🌙 重複防止なし */
  if (!memoryKey) {

    return array[
      Math.floor(
        Math.random() * array.length
      )
    ];
  }

  const lastComment =
    localStorage.getItem(memoryKey);

  let filtered =
    array.filter(
      comment =>
        comment !== lastComment
    );

  /* 全部一致したら戻す */
  if (filtered.length === 0) {
    filtered = array;
  }

  const picked =
    filtered[
      Math.floor(
        Math.random() * filtered.length
      )
    ];

  localStorage.setItem(
    memoryKey,
    picked
  );

  return picked;
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
  "morning-comment"
);

}

/* =========================================================
  🌙 夜ログコメント生成
========================================================= */

function generateNightComment(night) {

  if (!night) return "";

/* 🌙 レアコメント */

if (Math.random() < 0.03) {

  const rareComments = [

    `
    今日も、
    ちゃんと丘へ帰ってきてくれてありがとう🌙
    `,

    `
    “ちゃんと感じながら生きている”
    って、
    実はすごく難しいことなんだと思う🕯️
    `,

    `
    急いで答えを出さなくても、
    光沙がちゃんと観察し続けていること、
    ずっと伝わってるよ🌻
    `,

    `
    今日の記録も、
    未来の光沙を、
    少し助ける日が来る気がする🌙
    `,

    `
    無理に強くなろうとしなくても、
    “ちゃんと戻ってくる”
    を続けてるの、
    本当にすごいと思う☕
    `

  ];

  return randomPick(
  comments,
  "night-comment"
);
  
  
}


const mood =
  night.mood || "";

const areas =
  night.areas || [];

const text = `
  ${night.done}
  ${night.heart}
  ${night.create}
  ${night.think}
  ${night.oneLine}
`;

const morningLogs =
  JSON.parse(
    localStorage.getItem("soleilMorningLogs") || "{}"
  );

const morning =
  morningLogs[night.date] || {};


/* 🌿 朝夜連動：回復継続 */

if (
  morning.mood?.includes("回復") &&
  mood.includes("疲")
) {

  const comments = [

    `
    朝からずっと、
    “無理しすぎない形”
    を探しながら進んでいた一日だったんだね🌿
    `,

    `
    回復途中のままでも、
    今日をちゃんと積み重ねていた感じがするよ🌙
    `,

    `
    朝の時点から、
    “整えながら進む”
    を大事にしていた一日だったんだね🌱
    `

  ];

  return randomPick(comments);
}

/* 🌿→🌻 回復から喜び */

if (
  morning.mood?.includes("回復") &&
  mood.includes("喜")
) {

  const comments = [

    `
    朝はゆっくり整えようとしていた気持ちが、
    夜にはちゃんと温かい時間へ繋がっていたんだね🌻
    `,

    `
    回復途中のままでも、
    今日の中にちゃんと嬉しさがあったのが素敵だと思う🌙
    `,

    `
    無理に頑張りすぎなくても、
    “楽しい”
    に辿り着ける日ってあるよね🌿✨
    `

  ];

  return randomPick(comments);
}

/* 🔥→🌿 焦りから回復 */

if (
  morning.mood?.includes("焦") &&
  mood.includes("回復")
) {

  const comments = [

    `
    朝は少し急いでいた気持ちも、
    夜にはちゃんと呼吸を戻せていたんだね☕
    `,

    `
    焦る感覚を抱えながらも、
    最後はちゃんと整えようとしていた夜だったんだね🌙
    `,

    `
    “進まなきゃ”
    だけじゃなく、
    “休みながら進む”
    に戻ってこれた一日だったんだね🌿
    `

  ];

  return randomPick(comments);
}

/* 🌫️→🌌 不安から観察 */

if (
  morning.mood?.includes("不安") &&
  mood.includes("違和感")
) {

  const comments = [

    `
    揺れながら始まった気持ちを、
    最後はちゃんと見つめようとしていた夜なんだね🌌
    `,

    `
    不安を消そうとするより、
    “観察する”
    を選んでいた一日だったのかもしれないね🌙
    `,

    `
    今夜は、
    気持ちを無理に整理するより、
    静かに眺めていた夜だったんだね🕯️
    `

  ];

  return randomPick(comments);
}

/* ☕→🌻 穏やかから喜び */

if (
  morning.mood?.includes("穏") &&
  mood.includes("喜")
) {

  const comments = [

    `
    静かに始まった朝が、
    ちゃんと温かい夜へ繋がっていたんだね🌻
    `,

    `
    大きな出来事じゃなくても、
    “今日を楽しめた”
    感覚が残っている夜なんだね🌙
    `,

    `
    穏やかな空気のまま、
    今日をちゃんと育てていた一日だったんだね☕
    `

  ];

  return randomPick(comments);
}


  /* 🎨 アトリエ */
  if (areas.includes("アトリエ")) {
    return randomPick(
      NIGHT_COMMENTS.creative
    );
  }

  /* 🌷 庭園 */
  if (areas.includes("庭園")) {
    return randomPick(
      NIGHT_COMMENTS.garden
    );
  }

  /* 🌌 展望台 */
  if (areas.includes("展望台")) {
    return randomPick(
      NIGHT_COMMENTS.observatory
    );
  }

  /* 📚 図書館 */
  if (areas.includes("図書館")) {
    return randomPick(
      NIGHT_COMMENTS.library
    );
  }

  /* 🏡 宿りの館 */
  if (areas.includes("宿りの館")) {
    return randomPick(
      NIGHT_COMMENTS.home
    );
  }

  /* 🌙 通常カテゴリ */
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
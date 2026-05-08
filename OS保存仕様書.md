<h1 id="ソレイユos保存仕様書">ソレイユOS 保存仕様書</h1>

<p><em>記録は、未来の自分を助ける灯り。</em></p>

<hr />

<h1 id="🌻基本方針">🌻 基本方針</h1>

<p>この仕様書は、<br />
ソレイユOS Webアプリ内で扱う<br />
各ログデータの保存構造を整理するための資料。</p>

<h2 id="目的">目的</h2>

<ul>
<li>保存先の混乱防止</li>
<li>detail.html / archive.html 連携管理</li>
<li>編集機能実装時の参照</li>
<li>将来的な分析機能の土台作成</li>
<li>篤史コメント生成との接続整理</li>
</ul>

<hr />

<h1 id="📦保存方式">📦 保存方式</h1>

<h2 id="現在の保存方式">現在の保存方式</h2>

<pre><code class="js">localStorage
</code></pre>

<h2 id="保存形式">保存形式</h2>

<pre><code class="js">JSON
</code></pre>

<h2 id="基本構造">基本構造</h2>

<pre><code class="js">{
  &quot;2026-05-08&quot;: {
    ...
  }
}
</code></pre>

<p>日付キーごとに保存する。</p>

<hr />

<h1 id="🌅soleilmorninglogs">🌅 soleilMorningLogs</h1>

<p>朝ログ保存用</p>

<h2 id="保存キー">保存キー</h2>

<pre><code class="js">soleilMorningLogs
</code></pre>

<h2 id="主な保存項目">主な保存項目</h2>

<pre><code class="js">{
  date,
  theme,
  mood,
  action,
  areas,
  care,
  message,
  savedAt
}
</code></pre>

<h2 id="用途">用途</h2>

<ul>
<li>朝ログ表示</li>
<li>detail.html 表示</li>
<li>夜ログとの接続</li>
<li>今日の方向性確認</li>
</ul>

<hr />

<h1 id="🌙soleillogs">🌙 soleilLogs</h1>

<p>夜ログ保存用</p>

<h2 id="保存キー">保存キー</h2>

<pre><code class="js">soleilLogs
</code></pre>

<h2 id="主な保存項目">主な保存項目</h2>

<pre><code class="js">{
  date,
  theme,
  mood,
  energy,
  done,
  heart,
  create,
  think,
  areas,
  tomorrow,
  oneLine,
  trigger,
  interpret,
  meaning,
  action,
  avoid,
  savedAt
}
</code></pre>

<h2 id="用途">用途</h2>

<ul>
<li>夜ログ表示</li>
<li>detail.html 表示</li>
<li>カレンダー連携</li>
<li>感情 / 行動振り返り</li>
</ul>

<hr />

<h1 id="🔭observatorylogs">🔭 observatoryLogs</h1>

<p>展望台ログ保存用</p>

<h2 id="保存キー">保存キー</h2>

<pre><code class="js">observatoryLogs
</code></pre>

<h2 id="主な保存項目">主な保存項目</h2>

<pre><code class="js">{
  date,
  theme,
  situation,
  judgment,
  discomfort,
  nextStep,
  nextArea,
  atsushiComment,
  savedAt
}
</code></pre>

<h2 id="用途">用途</h2>

<ul>
<li>意思決定整理</li>
<li>状況俯瞰</li>
<li>次の一手設計</li>
<li>他エリア接続</li>
</ul>

<hr />

<h1 id="📚librarylogs">📚 libraryLogs</h1>

<p>図書館ログ保存用</p>

<h2 id="保存キー">保存キー</h2>

<pre><code class="js">libraryLogs
</code></pre>

<h2 id="主な保存項目">主な保存項目</h2>

<pre><code class="js">{
  date,
  source,
  learning,
  definition,
  structure,
  reproducibility,
  experiment,
  nextArea,
  oneLine,

  reverseThinking,
  explain3min,
  decisionConnection,
  understandingLevel,
  reviewPoint,

  atsushiComment,
  savedAt
}
</code></pre>

<h2 id="用途">用途</h2>

<ul>
<li>学習構造化</li>
<li>再現性整理</li>
<li>実験設計</li>
<li>意思決定接続</li>
<li>理解熟成</li>
</ul>

<hr />

<h1 id="🎨今後追加予定ログ">🎨 今後追加予定ログ</h1>

<h2 id="atelierlogs">atelierLogs</h2>

<p>アトリエログ保存用</p>

<p>制作・創作・試作記録</p>

<hr />

<h2 id="plazalogs">plazaLogs</h2>

<p>広場ログ保存用</p>

<p>仕事・対人・社会接続記録</p>

<hr />

<h2 id="gardenlogs">gardenLogs</h2>

<p>庭園ログ保存用</p>

<p>感情・違和感・心の変化記録</p>

<hr />

<h2 id="homelogs">homeLogs</h2>

<p>宿りの館ログ保存用</p>

<p>体調・休息・生活管理記録</p>

<hr />

<h1 id="🗂️detail.htmlの役割">🗂️ detail.html の役割</h1>

<p>detail.html は、<br />
「その日」を統合表示するページ。</p>

<h2 id="表示対象">表示対象</h2>

<ul>
<li>朝ログ</li>
<li>夜ログ</li>
<li>各エリアログ</li>
<li>篤史コメント</li>
</ul>

<hr />

<h1 id="🗂️archive.htmlの役割">🗂️ archive.html の役割</h1>

<p>archive.html は、<br />
記録一覧ページ。</p>

<h2 id="目的">目的</h2>

<ul>
<li>日付ごとの振り返り</li>
<li>詳細ページ遷移</li>
<li>編集導線</li>
<li>月別確認</li>
</ul>

<hr />

<h1 id="🌻将来的な拡張予定">🌻 将来的な拡張予定</h1>

<h2 id="実装候補">実装候補</h2>

<ul>
<li>編集機能</li>
<li>エリア滞在率分析</li>
<li>感情推移グラフ</li>
<li>学習→意思決定接続分析</li>
<li>時間差レビュー</li>
<li>月次レポート</li>
<li>篤史コメント進化</li>
<li>検索機能</li>
<li>タグ機能</li>
<li>ソレイユOS分析室</li>
</ul>

<hr />

<h1 id="🌻命名ルール">🌻 命名ルール</h1>

<h2 id="基本方針">基本方針</h2>

<pre><code class="txt">英語 + Logs
</code></pre>

<h2 id="例">例</h2>

<pre><code class="txt">libraryLogs
gardenLogs
observatoryLogs
</code></pre>

<hr />

<h1 id="🌻ソレイユos設計思想">🌻 ソレイユOS設計思想</h1>

<p>理解で終わるな。<br />
構造にせよ。</p>

<p>構造で終わるな。<br />
再現せよ。</p>

<p>再現できて初めて、<br />
それは「未来を助ける灯り」になる。</p>

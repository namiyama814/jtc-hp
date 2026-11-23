import { news } from './content';

type Page = { title: string; label: string; content: string; image?: string; parent?: [string, string] };
export const detailPaths: Record<string, string> = {
  profile: '/company/profile/', philosophy: '/company/philosophy/', machinery: '/business/machinery/',
  infrastructure: '/business/infrastructure/', energy: '/business/energy/', sustainability: '/sustainability/',
  ir: '/ir/', recruit: '/recruit/', privacy: '/privacy/',
};
const plus = '<span aria-hidden="true">＋</span>';
const link = (href: string, text: string) => `<a class="page-link" href="${href}">${text}${plus}</a>`;
const section = (title: string, body: string, label = '') => `<section class="page-section">${label ? `<p class="eyebrow">${label}</p>` : ''}<h2>${title}</h2>${body}</section>`;
const intro = (title: string, text: string) => `<div class="page-intro"><h2>${title}</h2><p>${text}</p></div>`;
const cards = (items: [string, string, string][]) => `<div class="info-grid">${items.map(([title, text, tag]) => `<div class="info-card"><p class="eyebrow">${tag}</p><h3>${title}</h3><p>${text}</p></div>`).join('')}</div>`;
const table = (rows: [string, string][]) => `<dl class="data-table">${rows.map(([key,value])=>`<dt>${key}</dt><dd>${value}</dd>`).join('')}</dl>`;
export function newsRows(category = 'すべて') {
  return news.map((n, i) => category === 'すべて' || n.category === category ? `<a class="news-row" href="/news/${i + 1}/"><time datetime="${n.date.replaceAll('.', '-')}">${n.date}</time><span class="news-category">${n.category}</span><span class="news-title">${n.title}</span><span class="row-plus" aria-hidden="true">＋</span></a>` : '').join('');
}
export function newsSection() {
  return `<div class="news-body"><div class="news-tabs" role="tablist" aria-label="ニュースのカテゴリ">${['すべて','お知らせ','事業・技術','サステナビリティ','IR情報'].map((cat,i)=>`<button role="tab" id="tab-${i}" aria-controls="news-list" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-category="${cat}">${cat}</button>`).join('')}</div><div id="news-list" role="tabpanel" aria-labelledby="tab-0" tabindex="0"><div class="news-items">${newsRows()}</div></div></div>`;
}
export const contactForm = () => `<form class="contact-form"><label>お問い合わせ種別<span class="required">必須</span><select name="topic" required><option value="">選択してください</option><option>製品・サービス</option><option>企業活動・IR</option><option>採用について</option><option>その他</option></select></label><label>会社名<input name="company" autocomplete="organization" maxlength="100"></label><div class="form-columns"><label>お名前<span class="required">必須</span><input name="name" autocomplete="name" required maxlength="80"></label><label>メールアドレス<span class="required">必須</span><input name="email" type="email" autocomplete="email" required maxlength="200"></label></div><label>お問い合わせ内容<span class="required">必須</span><textarea name="message" required rows="5" maxlength="2000"></textarea></label><p class="form-note">入力内容は送信されません。</p><button class="submit-button" type="submit">入力内容を確認</button></form>`;
const businesses = [
  {slug:'machinery', title:'産業機械', label:'INDUSTRIAL MACHINERY', image:'industry', lead:'ものづくりの現場に、<br>次の可能性を。', text:'一つの工程を変える技術が、工場全体の力になる。設備の構想から設計・製造、導入後の保守まで、お客様のものづくりに伴走します。', offerings:[['生産・加工設備','製品の特性と工程に合わせ、加工精度と生産性を両立する設備を設計します。','PRODUCTION'],['搬送・省力化設備','工程間の搬送や繰り返し作業を自動化し、現場の負担を軽減します。','AUTOMATION'],['検査・品質管理','計測と検査を工程に組み込み、安定した製品品質を支えます。','QUALITY']] as [string,string,string][], challenge:'人手不足と、多品種少量生産への対応。', solution:'製品が変わっても柔軟に対応できる設備構成と、現場の方が使いやすい操作系を提案します。既存設備との接続や段階的な自動化にも対応し、無理のない工程改善を進めます。'},
  {slug:'infrastructure',title:'社会インフラ',label:'SOCIAL INFRASTRUCTURE',image:'architecture',lead:'いつもの暮らしを、<br>確かな技術で守る。',text:'水が使える。街が動く。その当たり前の背景に、長く使える設備と日々の維持管理があります。地域の暮らしを支える機械設備を、ライフサイクル全体で支援します。',offerings:[['水処理関連設備','取水から排水処理まで、用途に適した機械設備を提供します。','WATER'],['公共施設向け設備','施設の役割と利用環境に合わせた、堅牢で保守性の高い設備を設計します。','PUBLIC FACILITIES'],['保守・更新支援','点検結果をもとに、設備の長寿命化と計画的な更新を支援します。','MAINTENANCE']] as [string,string,string][],challenge:'稼働を止められない設備の、計画的な更新。',solution:'既存設備の状態と運用条件を調査し、必要な機能を維持しながら更新する計画を策定します。施工時期や切り替え手順を関係者と調整し、運用への影響を抑えます。'},
  {slug:'energy',title:'環境・エネルギー',label:'ENVIRONMENT & ENERGY',image:'forest',lead:'産業の成長を、<br>地球の未来とともに。',text:'限りある資源を大切に使い、ものづくりを次の世代へつなぐ。生産活動の中にあるエネルギーと資源の流れを見つめ、環境負荷の低減に取り組みます。',offerings:[['エネルギーの最適化','設備の稼働データから無駄を見つけ、省エネルギー運用を支援します。','EFFICIENCY'],['資源循環設備','分別・回収・再利用の工程を支える設備で、資源の有効活用を進めます。','CIRCULARITY'],['再生可能エネルギー','拠点の条件に合わせた導入計画と、既存設備との連携を検討します。','RENEWABLE ENERGY']] as [string,string,string][],challenge:'生産性を保ちながら、環境負荷を減らす。',solution:'設備単体の効率だけでなく、工場全体の使い方を確認します。使用量の把握、改善施策の実行、導入後の検証を繰り返し、現場で継続できる取り組みにします。'},
];
const businessCards = () => `<div class="business-grid">${businesses.map(b=>`<a class="business-card" href="/business/${b.slug}/"><div class="card-image"><img src="/images/${b.image}.jpg" alt="${b.title}の事業イメージ" loading="lazy"><span>${b.label}</span></div><div class="card-copy"><h3>${b.title}${plus}</h3><p>${b.offerings.map(o=>o[0]).join('・')}</p></div></a>`).join('')}</div>`;
const pages: Record<string, Page> = {
 '/company/': {title:'企業情報',label:'ABOUT US',image:'architecture',content:
  intro('積み重ねた信頼を、<br>未来を拓く力に。','1954年の創業以来、東和産業は産業と暮らしの基盤を支えてきました。現場で磨いた技術と、一人ひとりの誠実な仕事を力に、社会の新しい課題に向き合います。')+
  `<div class="page-link-grid">${link('/company/profile/','会社概要')}${link('/company/philosophy/','企業理念')}</div>`+
  section('産業の変化と、ともに歩む。',`<ol class="timeline"><li><time>1954</time><div><h3>東和産業を設立</h3><p>機械部品の製造から出発し、ものづくりの基礎を築きました。</p></div></li><li><time>1982</time><div><h3>社会インフラ分野へ展開</h3><p>機械技術を公共設備へと広げ、地域の暮らしを支える事業を開始。</p></div></li><li><time>2008</time><div><h3>環境・エネルギー事業を拡充</h3><p>省エネルギーと資源循環に関する設備開発を推進。</p></div></li><li><time>2026</time><div><h3>次のものづくりへ</h3><p>3つの事業の技術をつなぎ、新しい価値の創出に取り組んでいます。</p></div></li></ol>`,'OUR HISTORY')},
 '/company/profile/': {title:'会社概要',label:'CORPORATE PROFILE',parent:['/company/','企業情報'],content:
  intro('技術を通じて、社会に貢献する。','お客様の課題に耳を傾け、構想から運用まで一貫して支える。東和産業は、現場に根ざした技術で持続的な成長を目指しています。')+
  section('基本情報',table([['商号','東和産業株式会社 / TOWA INDUSTRIES, LTD.'],['設立','1954年4月'],['本社所在地','東京都千代田区'],['事業内容','産業機械、社会インフラ、環境・エネルギー関連設備の開発・製造・保守'],['主な事業領域','生産・加工設備、搬送設備、水処理関連設備、省エネルギー・資源循環設備']]))+
  section('お客様の現場に、一貫した支援を。',cards([['構想・設計','目的と制約条件を整理し、実現性のある設備構想と仕様を策定します。','PLANNING'],['製造・導入','品質と安全を確かめながら製造し、現場での設置と立ち上げを支援します。','ENGINEERING'],['保守・改善','稼働後の点検と改善提案を通じて、長く使える設備を支えます。','SUPPORT']]))},
 '/company/philosophy/': {title:'企業理念',label:'OUR PHILOSOPHY',parent:['/company/','企業情報'],content:
  `<div class="philosophy-statement"><p class="eyebrow">OUR MISSION</p><h2>技術に誠実。<br>社会に貢献。</h2><p>一つひとつの仕事に誠実に向き合い、技術の可能性を追求する。<br>お客様や地域とともに歩み、世代を越えて必要とされる価値を生み出します。</p></div>`+
  section('私たちが大切にすること',cards([['現場に向き合う','答えはいつも現場にある。使う人の声を聴き、課題の本質を見つめます。','LISTEN'],['技術を磨く','経験に学び、新しい知見を取り入れる。一人ひとりの成長を、ものづくりの力にします。','IMPROVE'],['ともにつくる','部門や立場を越えて知恵を重ね、社会に役立つ価値を生み出します。','COLLABORATE']]))+
  section('信頼を積み重ねる仕事を。','<p class="reading-text">安全と品質をすべての活動の土台に据え、約束を守る。目先の効率だけで判断せず、設備を使う人、その先で暮らす人にとっての価値を考える。この姿勢を、日々の判断と行動に反映していきます。</p>')},
 '/business/': {title:'事業紹介',label:'OUR BUSINESS',image:'industry',content:
  intro('社会のあらゆる場所に、<br>東和の技術。','産業機械、社会インフラ、環境・エネルギー。異なる現場で培った知見を掛け合わせ、設備の開発から運用まで幅広い課題に応えます。')+businessCards()+
  section('技術をつなぐ、一貫したものづくり。',`<div class="process"><div><h3>課題を知る</h3><p>現場の声と実際の使われ方を調査</p></div><div><h3>形にする</h3><p>設計・製造・検証を一つのチームで推進</p></div><div><h3>支え続ける</h3><p>保守と改善を重ねて設備の価値を向上</p></div></div>`,'OUR APPROACH')},
 '/sustainability/': {title:'サステナビリティ',label:'SUSTAINABILITY',image:'forest',content:
  intro('次の世代にも、<br>豊かな地球と社会を。','環境への配慮、人を大切にする職場、誠実な企業活動。日々のものづくりと経営の両面から、持続可能な社会の実現に取り組みます。')+
  section('ものづくりから、環境負荷を減らす。',`<div class="split-feature"><img src="/images/forest.jpg" alt="緑に囲まれた水辺" loading="lazy"><div><h3>エネルギーと資源を、大切に使う。</h3><p>設備の省エネルギー化と再生可能エネルギーの導入を進めます。使用量の見える化を通じて改善の優先順位を定め、効果を確かめながら取り組みを継続します。</p><ul class="plain-list"><li>生産拠点のエネルギー使用量の把握と削減</li><li>製造工程で発生する端材の回収・再利用</li><li>長寿命化と保守性を考慮した設備設計</li></ul></div></div>`,'ENVIRONMENT')+
  section('人を育て、ともに働く。',cards([['安全な職場','作業手順の確認と危険予知活動を積み重ね、安全を優先する現場をつくります。','SAFETY'],['技術の継承','OJTと専門研修を組み合わせ、経験と知識を次の世代へつなぎます。','PEOPLE'],['地域との対話','事業所周辺の環境美化や地域交流を通じ、信頼関係を育みます。','COMMUNITY']]))+
  section('誠実な企業活動を支える。','<p class="reading-text">法令遵守、公正な取引、情報の適切な管理を徹底します。研修と相談窓口の整備を通じて、誰もが疑問や懸念を共有し、改善につなげられる組織を目指します。</p>','GOVERNANCE')},
 '/ir/': {title:'IR情報',label:'INVESTOR RELATIONS',content:
  intro('持続的な成長と、<br>企業価値の向上へ。','既存事業の技術基盤を強くし、次の成長につながる領域へ投資する。東和産業は、お客様と社会に必要とされ続ける企業を目指します。')+
  section('中長期の経営方針',cards([['既存事業の深化','品質と納期への信頼を土台に、設計・製造の生産性を高めます。','CORE BUSINESS'],['成長分野への展開','省エネルギーと資源循環に関する技術を育て、事業機会を広げます。','GROWTH'],['経営基盤の強化','技術人材の育成と業務の標準化を進め、変化に対応できる組織をつくります。','FOUNDATION']]))+
  section('IRカレンダー',table([['2026年11月','2027年3月期 第2四半期決算説明会'],['2027年2月','2027年3月期 第3四半期の事業概況発表'],['2027年5月','2027年3月期 通期決算説明会'],['2027年6月','定時株主総会']]))+
  section('IRニュース',newsRows('IR情報'))+
  section('株主・投資家の皆様との対話','<p class="reading-text">事業の状況と経営の考え方をわかりやすくお伝えし、いただいたご意見を経営に活かします。IRに関するご質問は、お問い合わせ窓口で承ります。</p>'+link('/contact/','IRについて問い合わせる'))},
 '/recruit/': {title:'採用情報',label:'RECRUITMENT',image:'industry',content:
  intro('あなたとつくる、<br>産業の未来。','技術を磨きたい。現場の課題に向き合いたい。社会の役に立つ仕事がしたい。その思いを、東和産業のものづくりで形にしませんか。')+
  section('専門性がつながる仕事。',`<div class="job-list">${[['機械設計','機構設計、部品設計、図面作成、試作評価。お客様の要望を、製造と保守に配慮した形にします。'],['電気・制御設計','制御盤や電気回路の設計、制御プログラムの開発、設備の立ち上げを担当します。'],['生産技術・製造','加工・組み立て・検証と工程改善を通じて、品質の安定と生産性の向上に取り組みます。'],['営業・管理','お客様の課題をつかむ提案営業と、人事・経理・調達などの仕事で事業を支えます。']].map(([title,text])=>`<details><summary>${title}<span aria-hidden="true">＋</span></summary><p>${text}</p></details>`).join('')}</div>`,'OUR WORK')+
  section('学び続けられる環境を。',cards([['基礎から学ぶ','入社後の導入研修で、ものづくりの基礎と安全・品質への考え方を学びます。','TRAINING'],['現場で育つ','先輩社員によるOJTで、一つずつ仕事を身につけ、専門性を高めます。','DEVELOPMENT'],['挑戦を支える','資格取得や専門研修を通じて、仕事の幅を広げる学びを支援します。','CHALLENGE']]))+
  section('選考の流れ',`<ol class="selection-flow"><li>お問い合わせ・応募相談</li><li>書類確認</li><li>面接・適性確認</li><li>条件確認・内定</li></ol><p class="reading-text">ご希望の職種やこれまでのご経験をお聞かせください。仕事内容や働く環境についてのご質問も承ります。</p>${link('/contact/','採用について問い合わせる')}`)},
 '/news/': {title:'ニュース',label:'NEWSROOM',content:newsSection()},
 '/contact/': {title:'お問い合わせ',label:'CONTACT',content:intro('ご相談を、お聞かせください。','製品・サービス、企業活動、採用に関するお問い合わせを承ります。')+`<div class="contact-layout"><aside><h2>お問い合わせ窓口</h2><p>担当部門にて内容を確認いたします。</p><p>個人情報の取り扱いについては、プライバシーポリシーをご確認ください。</p>${link('/privacy/','プライバシーポリシー')}</aside><div>${contactForm()}</div></div>`},
 '/privacy/': {title:'プライバシーポリシー',label:'PRIVACY POLICY',content:`<div class="policy">${section('個人情報の取り扱い','<p>お問い合わせに関連する個人情報を尊重し、必要な範囲で適切に取り扱います。</p>')}${section('フォームに入力した情報','<p>本サイトのフォームは入力内容の確認までを行います。お名前、メールアドレス、お問い合わせ内容はサーバーに送信せず、ブラウザの永続ストレージにも保存しません。ページを再読み込みすると入力内容は消去されます。</p>')}${section('Cookie・アクセス解析','<p>広告用Cookieやアクセス解析ツールは使用していません。</p>')}${section('外部リンク','<p>外部サイトの情報の取り扱いについては、リンク先のプライバシーポリシーをご確認ください。</p>')}</div>`},
 '/news/notice/': {title:'当社を装った不審なメール・ウェブサイトにご注意ください',label:'IMPORTANT NOTICE',parent:['/news/','ニュース'],content:section('不審な連絡への対応について','<p class="reading-text">企業を装い、個人情報や送金を求めるメール・ウェブサイトにご注意ください。不審なリンクや添付ファイルは開かず、送信元と内容を十分にご確認くださいますようお願いいたします。</p><ul class="plain-list"><li>メール本文のリンクから個人情報を入力しない</li><li>心当たりのない添付ファイルを開かない</li><li>振込先の変更などの依頼は、別の連絡手段で確認する</li></ul>')+link('/news/','ニュース一覧に戻る')},
};
for (const b of businesses) {
 pages[`/business/${b.slug}/`] = {title:b.title,label:b.label,image:b.image,parent:['/business/','事業紹介'],content:
  intro(b.lead,b.text)+section('主な製品・サービス',cards(b.offerings))+
  section(b.challenge,`<div class="solution-block"><p class="eyebrow">OUR SOLUTION</p><p>${b.solution}</p></div>`,'CUSTOMER CHALLENGES')+
  section('導入から運用まで、支え続ける。',`<div class="process"><div><h3>構想と設計</h3><p>現場調査から仕様・設備構成を検討</p></div><div><h3>製造と検証</h3><p>品質と安全を確認し現場へ導入</p></div><div><h3>保守と改善</h3><p>稼働後の点検・更新を継続支援</p></div></div>`)+
  `<div class="page-link-grid">${businesses.filter(other=>other.slug!==b.slug).map(other=>link(`/business/${other.slug}/`,other.title)).join('')}</div>`};
}
news.forEach((n,i)=>{
 const additional = [
  ['主な更新内容','事業紹介では、3つの領域それぞれの技術とサービスを整理しました。企業情報、サステナビリティ、IR情報、採用情報へのアクセスを見直し、スマートフォンからも閲覧しやすい構成にしています。'],
  ['開発の方向性','部品構成の見直しと制御の最適化により、消費電力と保守作業の負担を抑える設計を進めています。試作段階から現場の声を取り入れ、実際の運用条件で使いやすさを検証していきます。'],
  ['継続的な改善に向けて','各拠点でエネルギーの使用状況を把握し、設備の更新計画に反映します。生産工程の効率化と再生可能エネルギーの活用を組み合わせ、日々の運用から改善を積み重ねます。'],
  ['開催概要','2026年11月に開催します。産業機械、社会インフラ、環境・エネルギー各事業の状況、設備投資と人材育成の方針について説明し、質疑応答を行います。'],
 ][i];
 pages[`/news/${i+1}/`] = {title:n.title,label:'NEWS',parent:['/news/','ニュース'],content:`<article class="article-body"><div class="article-meta"><time datetime="${n.date.replaceAll('.','-')}">${n.date}</time><span class="news-category">${n.category}</span></div><p class="article-lead">${n.body}</p>${section(additional[0],`<p>${additional[1]}</p>`)}<div class="article-related">${link(i===1?'/business/machinery/':i===2?'/sustainability/':i===3?'/ir/':'/company/','関連情報を見る')}</div></article><div class="article-navigation">${i>0?link(`/news/${i}/`,'新しい記事'):''}${link('/news/','ニュース一覧')}${i<news.length-1?link(`/news/${i+2}/`,'以前の記事'):''}</div>`};
});
export const pagePaths = Object.keys(pages);
export function getPage(path: string): Page | undefined { return pages[path]; }
export function pageHTML(page: Page) {
 return `<div class="page-heading"><div class="wrap"><nav class="breadcrumbs" aria-label="パンくずリスト"><a href="/">ホーム</a>${page.parent?`<span aria-hidden="true">/</span><a href="${page.parent[0]}">${page.parent[1]}</a>`:''}<span aria-hidden="true">/</span><span aria-current="page">${page.title}</span></nav><p class="eyebrow">${page.label}</p><h1 tabindex="-1">${page.title}</h1></div>${page.image?`<div class="page-cover"><img src="/images/${page.image}.jpg" alt="${page.title}のイメージ"></div>`:''}</div><div class="wrap page-content">${page.content}</div>`;
}

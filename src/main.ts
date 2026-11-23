import './style.css';

const mark = `<svg class="brand-mark" viewBox="0 0 52 46" aria-hidden="true"><path d="M0 3h52v11H32v29H20V14H0z" fill="currentColor"/><path d="m38 24 14-9v28H38z" fill="#8ab3cb"/></svg>`;
import { getPage, pageHTML, detailPaths, newsRows, contactForm } from './pages';
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
<a class="skip" href="#main">本文へ移動</a>
<header class="header" id="top">
  <div class="header-main wrap"><a class="brand" href="#top" aria-label="東和産業 ホーム">${mark}<span><strong>東和産業株式会社</strong><small>TOWA INDUSTRIES, LTD.</small></span></a>
    <div class="utility"><a href="#recruit">採用情報</a><button data-contact>お問い合わせ</button><span class="utility-divider"></span><a href="#company">企業概要</a></div>
    <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="メニューを開く"><span></span><span></span><span></span></button>
  </div>
  <nav class="nav" id="main-nav" aria-label="メインナビゲーション"><div class="wrap nav-inner"><a href="#company">企業情報</a><a href="#business">事業紹介</a><a href="#sustainability">サステナビリティ</a><a href="#ir">IR情報</a><a href="#news">ニュース</a><button data-contact>お問い合わせ<span class="small-square" aria-hidden="true"></span></button></div></nav>
</header>
<main id="main">
  <section class="hero" aria-labelledby="hero-title"><img class="hero-image" src="/images/industry.jpg" alt="近代的な産業施設の外観"><div class="hero-shade"></div><div class="wrap hero-content"><p class="eyebrow light">ENGINEERING TOMORROW, TOGETHER.</p><h1 id="hero-title">産業を支え、<br>次の時代をつくる。</h1><p class="hero-description">確かな技術と、変わらぬ誠実さで。<br>私たちは、社会のその先へ挑み続けます。</p><a class="hero-link" href="#company">東和産業について<span class="link-plus" aria-hidden="true">＋</span></a></div><div class="hero-bottom wrap"><a href="#news" class="scroll-label">SCROLL<span class="scroll-line"></span></a></div></section>
  <div class="important wrap"><span class="important-label">重要なお知らせ</span><button data-article="notice">当社を装った不審なメール・ウェブサイトにご注意ください<span class="row-plus" aria-hidden="true">＋</span></button></div>
  <section class="news section wrap" id="news"><div class="section-side"><p class="eyebrow">LATEST INFORMATION</p><h2>ニュース</h2><a class="text-link" href="#news-list" id="all-news">ニュース一覧<span aria-hidden="true">＋</span></a></div><div class="news-body"><div class="news-tabs" role="tablist" aria-label="ニュースのカテゴリ">${['すべて','お知らせ','事業・技術','サステナビリティ','IR情報'].map((cat,i)=>`<button role="tab" id="tab-${i}" aria-controls="news-list" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-category="${cat}">${cat}</button>`).join('')}</div><div id="news-list" role="tabpanel" aria-labelledby="tab-0" tabindex="0"></div></div></section>
  <section class="business section" id="business"><div class="wrap"><div class="section-heading"><div><p class="eyebrow">OUR BUSINESS</p><h2>社会のあらゆる場所に、東和の技術。</h2></div><p>ものづくりの現場から、暮らしの基盤まで。<br>3つの事業領域で、持続可能な社会に貢献します。</p></div><div class="business-grid">
    <button class="business-card" data-detail="machinery"><div class="card-image"><img src="/images/industry.jpg" alt="産業機械を支える生産施設" loading="lazy"><span>INDUSTRIAL MACHINERY</span></div><div class="card-copy"><h3>産業機械<span aria-hidden="true">＋</span></h3><p>ものづくりの可能性を、さらに広く。<br>生産現場の進化を支える技術を届けます。</p></div></button>
    <button class="business-card" data-detail="infrastructure"><div class="card-image"><img src="/images/architecture.jpg" alt="都市を形づくる高層ビル" loading="lazy"><span>SOCIAL INFRASTRUCTURE</span></div><div class="card-copy"><h3>社会インフラ<span aria-hidden="true">＋</span></h3><p>当たり前の毎日を、確かな技術で。<br>安心して暮らせる社会の基盤をつくります。</p></div></button>
    <button class="business-card" data-detail="energy"><div class="card-image"><img src="/images/forest.jpg" alt="光が差し込む緑豊かな森林" loading="lazy"><span>ENVIRONMENT & ENERGY</span></div><div class="card-copy"><h3>環境・エネルギー<span aria-hidden="true">＋</span></h3><p>地球と産業の、よりよい関係へ。<br>限りある資源を未来へつなぎます。</p></div></button>
  </div></div></section>
  <section class="company section wrap" id="company"><div class="company-photo"><img src="/images/architecture.jpg" alt="空へ伸びるオフィスビルの外観" loading="lazy"><div class="photo-caption">BUILDING TRUST SINCE 1954</div></div><div class="company-copy"><p class="eyebrow">ABOUT US</p><h2>積み重ねた信頼を、<br>未来を拓く力に。</h2><p>1954年の創業以来、東和産業はものづくりを通じて、<br class="desktop-break">社会の発展と人々の豊かな暮らしに向き合ってきました。</p><p>現場で磨いた技術と、一人ひとりの誠実な仕事。<br>その積み重ねを力に、新たな価値を生み出し続けます。</p><div class="company-links"><button data-detail="profile">会社概要<span aria-hidden="true">＋</span></button><button data-detail="philosophy">企業理念<span aria-hidden="true">＋</span></button></div></div></section>
  <section class="sustainability" id="sustainability"><img src="/images/forest.jpg" alt="緑の葉に包まれた森" loading="lazy"><div class="sustain-shade"></div><div class="wrap sustain-content"><p class="eyebrow light">SUSTAINABILITY</p><h2>次の世代にも、<br>豊かな地球と社会を。</h2><p>環境と調和し、人を大切にするものづくり。<br>事業の一つひとつから、持続可能な未来を育みます。</p><button class="white-button" data-detail="sustainability">サステナビリティへの取り組み<span aria-hidden="true">＋</span></button></div></section>
  <section class="portal-section section wrap"><div class="portal ir" id="ir"><p class="eyebrow">INVESTOR RELATIONS</p><h2>株主・投資家の皆様へ</h2><p>経営方針や事業の取り組みをお伝えします。</p><button class="text-link" data-detail="ir">IR情報<span aria-hidden="true">＋</span></button></div><div class="portal recruit" id="recruit"><p class="eyebrow">RECRUITMENT</p><h2>ともに、次の時代を。</h2><p>あなたの挑戦が、社会の新しい力になる。</p><button class="text-link" data-detail="recruit">採用情報<span aria-hidden="true">＋</span></button><span class="recruit-decoration" aria-hidden="true">T</span></div></section>
  <section class="contact-band"><div class="wrap"><div><p class="eyebrow">CONTACT</p><h2>お問い合わせ</h2></div><p>製品・サービス、企業活動に関するご相談はこちら。</p><button data-contact>お問い合わせフォーム<span aria-hidden="true">＋</span></button></div></section>
</main>
<footer><div class="wrap footer-main"><a class="brand" href="#top">${mark}<span><strong>東和産業株式会社</strong><small>TOWA INDUSTRIES, LTD.</small></span></a><div class="footer-links"><a href="#company">企業情報</a><a href="#business">事業紹介</a><a href="#sustainability">サステナビリティ</a><a href="#ir">IR情報</a><a href="#recruit">採用情報</a><button data-detail="privacy">プライバシーポリシー</button></div><a class="back-top" href="#top" aria-label="ページの先頭へ">TOP<span aria-hidden="true">⌃</span></a></div><div class="wrap footer-bottom"><small>© TOWA INDUSTRIES, LTD.</small></div></footer>
<dialog id="detail-dialog" aria-labelledby="dialog-title"><button class="dialog-close" aria-label="閉じる">×</button><div id="dialog-content"></div></dialog>
`;


// Page links are real anchors: deep links, browser history and new tabs all work.
const pathname = `${location.pathname.replace(/\/+$/, '')}/`;
const page = getPage(pathname);
if (page) {
  document.querySelector('main')!.innerHTML = pageHTML(page);
  document.title = `${page.title} | 東和産業株式会社`;
  document.querySelector<HTMLMetaElement>('meta[name="description"]')!.content = `東和産業株式会社の${page.title}。技術と誠実なものづくりで、産業と暮らしの未来を支えます。`;
} else if (pathname !== '/') {
  document.querySelector('main')!.innerHTML = pageHTML({title:'ページが見つかりません',label:'PAGE NOT FOUND',content:'<div class="page-intro"><p>URLをご確認ください。</p><a class="page-link" href="/">ホームに戻る<span aria-hidden="true">＋</span></a></div>'});
  document.title = 'ページが見つかりません | 東和産業株式会社';
}
function toLink(element: HTMLElement, href: string) {
  const anchor = document.createElement('a');
  anchor.className = element.className;
  anchor.innerHTML = element.innerHTML;
  anchor.href = href;
  element.replaceWith(anchor);
}
document.querySelectorAll<HTMLElement>('[data-detail]').forEach(el => toLink(el, detailPaths[el.dataset.detail!]));
document.querySelectorAll<HTMLElement>('[data-article]').forEach(el => toLink(el, '/news/notice/'));
const sectionPaths: Record<string, string> = {company:'/company/',business:'/business/',sustainability:'/sustainability/',ir:'/ir/',recruit:'/recruit/',news:'/news/'};
document.querySelectorAll<HTMLAnchorElement>('header a[href^="#"], footer .footer-links a[href^="#"], .hero-link, #all-news').forEach(a => {
  const id = a.getAttribute('href')!.slice(1);
  a.href = a.id === 'all-news' ? '/news/' : sectionPaths[id] || '/';
});
document.querySelectorAll<HTMLAnchorElement>('.brand').forEach(a => a.href = '/');
document.querySelectorAll<HTMLElement>('header [data-contact]').forEach(el => toLink(el, '/contact/'));
document.querySelectorAll<HTMLAnchorElement>('.nav a').forEach(a => {
  if (pathname.startsWith(a.pathname)) a.setAttribute('aria-current', 'page');
});

// Keep enough room for every article at the current width, even when filtered.
const list = document.querySelector<HTMLDivElement>('#news-list');
let selectedCategory = 'すべて';
let newsAnimations: Animation[] = [];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if (list) {
  const measure = document.createElement('div');
  measure.className = 'news-measure';
  measure.setAttribute('aria-hidden', 'true');
  measure.inert = true;
  measure.innerHTML = newsRows();
  list.append(measure);
  const items = document.createElement('div');
  items.className = 'news-items';
  items.innerHTML = newsRows();
  list.querySelector('.news-items')?.remove();
  list.prepend(items);
  const reserveHeight = () => list.style.minHeight = `${Math.ceil(measure.getBoundingClientRect().height)}px`;
  new ResizeObserver(reserveHeight).observe(measure);
  document.fonts.ready.then(reserveHeight);
  reserveHeight();
}
function renderNews(category = 'すべて') {
  if (!list || category === selectedCategory) return;
  const categories = ['すべて','お知らせ','事業・技術','サステナビリティ','IR情報'];
  const index = categories.indexOf(category);
  const direction = index > categories.indexOf(selectedCategory) ? 1 : -1;
  selectedCategory = category;
  list.setAttribute('aria-labelledby', `tab-${index}`);
  const previous = list.querySelector<HTMLDivElement>('.news-items')!;
  // Preserve the in-flight position if another tab is selected rapidly.
  const previousTransform = getComputedStyle(previous).transform;
  newsAnimations.forEach(animation => animation.cancel());
  newsAnimations = [];
  list.querySelector('.news-outgoing')?.remove();
  const next = document.createElement('div');
  next.className = 'news-items';
  next.innerHTML = newsRows(category);
  if (reducedMotion.matches) {
    previous.replaceWith(next);
  } else {
    previous.className = 'news-outgoing';
    previous.inert = true;
    previous.setAttribute('aria-hidden', 'true');
    list.prepend(next);
    const timing = {duration:360, easing:'cubic-bezier(.22,.68,.24,1)'};
    const outgoing = previous.animate([
      {transform:previousTransform},
      {transform:`translateX(${-direction * 100}%)`},
    ], timing);
    const incoming = next.animate([
      {transform:`translateX(${direction * 100}%)`},
      {transform:'translateX(0)'},
    ], timing);
    newsAnimations = [outgoing, incoming];
    outgoing.onfinish = () => previous.remove();
    incoming.onfinish = () => { newsAnimations = []; };
  }
  document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(b => {
    const selected = b.dataset.category === category;
    b.setAttribute('aria-selected', String(selected));
    b.tabIndex = selected ? 0 : -1;
  });
}
reducedMotion.addEventListener('change', () => {
  if (!reducedMotion.matches) return;
  newsAnimations.forEach(animation => animation.cancel());
  newsAnimations = [];
  list?.querySelector('.news-outgoing')?.remove();
});
document.querySelector('.news-tabs')?.addEventListener('keydown', event => {
  const e = event as KeyboardEvent;
  const tabs = [...document.querySelectorAll<HTMLButtonElement>('[data-category]')];
  const current = tabs.indexOf(document.activeElement as HTMLButtonElement);
  let next = current;
  if(e.key==='ArrowRight') next=(current+1)%tabs.length;
  else if(e.key==='ArrowLeft') next=(current+tabs.length-1)%tabs.length;
  else if(e.key==='Home') next=0;
  else if(e.key==='End') next=tabs.length-1;
  else return;
  e.preventDefault(); tabs[next].focus(); renderNews(tabs[next].dataset.category);
});

const dialog = document.querySelector<HTMLDialogElement>('#detail-dialog')!;
const dialogContent = document.querySelector<HTMLDivElement>('#dialog-content')!;
let closing = false;
let opener: HTMLElement | null = null;
let closeTimer: ReturnType<typeof setTimeout> | undefined;
function openDialog(content: string) {
  if (dialog.open) return;
  clearTimeout(closeTimer);
  closing = false;
  dialog.classList.remove('is-closing');
  opener = document.activeElement as HTMLElement;
  dialogContent.innerHTML = content;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}
function closeDialog() {
  if (!dialog.open || closing) return;
  if (reducedMotion.matches) { dialog.close(); return; }
  closing = true;
  dialog.classList.add('is-closing');
  closeTimer = setTimeout(() => dialog.close(), 180);
}
dialog.querySelector('.dialog-close')!.addEventListener('click', closeDialog);
dialog.addEventListener('cancel', e => { e.preventDefault(); closeDialog(); });
dialog.addEventListener('close', () => {
  clearTimeout(closeTimer);
  closing = false;
  dialog.classList.remove('is-closing');
  document.body.classList.remove('dialog-open');
  if (opener?.isConnected) opener.focus({preventScroll:true});
});
let backdropPress = false;
function outsideDialog(e: PointerEvent) {
  const r = dialog.getBoundingClientRect();
  return e.target === dialog && (e.clientX<r.left || e.clientX>r.right || e.clientY<r.top || e.clientY>r.bottom);
}
dialog.addEventListener('pointerdown', e => { backdropPress = outsideDialog(e); });
dialog.addEventListener('pointerup', e => { if(backdropPress && outsideDialog(e)) closeDialog(); backdropPress=false; });
document.addEventListener('click', e => {
  const target = (e.target as HTMLElement).closest<HTMLElement>('button, a');
  if(!target) return;
  if(target.dataset.category) renderNews(target.dataset.category);
  if(target.hasAttribute('data-contact')) {
    openDialog(`<p class="eyebrow">CONTACT</p><h2 id="dialog-title">お問い合わせ</h2>${contactForm()}`);
    bindContactForms();
  }
});
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','メニューを開く');document.querySelector('.nav')!.classList.remove('is-open');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');document.querySelector('.nav')!.classList.toggle('is-open',open);});
document.querySelector('.nav')!.addEventListener('click', e=>{if((e.target as HTMLElement).closest('a,button'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menuToggle.getAttribute('aria-expanded')==='true'){closeMenu();menuToggle.focus();}});
function bindContactForms() {
  document.querySelectorAll<HTMLFormElement>('.contact-form:not([data-bound])').forEach(form => {
    form.dataset.bound = 'true';
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required],textarea').forEach(field => {
      field.addEventListener('input', () => field.setCustomValidity(field.value.trim() ? '' : '入力してください。'));
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const fields = [['お問い合わせ種別','topic'],['会社名','company'],['お名前','name'],['メールアドレス','email'],['お問い合わせ内容','message']];
      const content = '<p class="eyebrow">CONFIRMATION</p><h2 id="dialog-title">入力内容の確認</h2><p class="form-note">内容をご確認ください。送信は行われません。</p><dl class="profile-list confirmation"></dl><div class="confirm-actions"><button class="page-link" id="contact-edit">入力内容を修正</button><button class="submit-button" id="contact-done">確認を終える</button></div>';
      const insideDialog = dialog.contains(form);
      const retainedForm = insideDialog ? form : null;
      if (insideDialog) dialogContent.innerHTML = content;
      else openDialog(content);
      const dl = dialogContent.querySelector('dl')!;
      fields.forEach(([label,key]) => {
        const dt=document.createElement('dt');dt.textContent=label;
        const dd=document.createElement('dd');dd.textContent=String(data.get(key) || '').trim() || '—';
        dl.append(dt,dd);
      });
      document.querySelector('#contact-edit')!.addEventListener('click', () => {
        if (retainedForm) {
          dialogContent.innerHTML = '<p class="eyebrow">CONTACT</p><h2 id="dialog-title">お問い合わせ</h2>';
          dialogContent.append(retainedForm);
          retainedForm.querySelector<HTMLElement>('select')!.focus();
        } else closeDialog();
      });
      document.querySelector('#contact-done')!.addEventListener('click', () => { form.reset(); closeDialog(); });
      document.querySelector<HTMLButtonElement>('#contact-edit')!.focus();
    });
  });
}
bindContactForms();

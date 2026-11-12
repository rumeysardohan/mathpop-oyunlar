/* MathPopWithRu · Ortak oyun kapağı
   Kullanım (oyunun <body> etiketinin hemen ardına):
   <div id="mpk"></div><script>window.MP_KAPAK={...}</script><script src="../assets/mp-kapak.js"></script>
   Ayarlar:
     title, title2  : başlık (2. satır vurgu renginde)
     tag            : üst etiket ("5. Sınıf · Kesirler")
     sub            : kısa davet cümlesi
     bg             : [renk1, renk2, renk3] arka plan geçişi
     accent, accentDark, btnInk : BAŞLA butonu renkleri
     hl             : 2. başlık satırının rengi
     deco           : süzülen süs simgeleri ["½","¾",...]
     heroes         : [{sel:"css seçici", i:0, h:160}] oyundan alınan görseller
     emoji          : görsel yoksa büyük emoji kahraman(lar) ["🍕","🧑‍🍳"]
     bgSel          : oyundaki bir arka plan görselinin seçicisi (isteğe bağlı)
*/
(function () {
  var C = window.MP_KAPAK || {};
  var root = document.getElementById('mpk');
  if (!root) { root = document.createElement('div'); root.id = 'mpk'; (document.body || document.documentElement).appendChild(root); }
  var base = (function () { var s = document.currentScript && document.currentScript.src; return s ? s.replace(/mp-kapak\.js.*$/, '') : '../assets/'; })();
  var bg = C.bg || ['#2B17B0', '#4a35d6', '#170a6b'];
  var acc = C.accent || '#FFC83D', accD = C.accentDark || '#c79300', ink = C.btnInk || '#3a2a00', hl = C.hl || '#FFC83D';

  var fl = document.createElement('link'); fl.rel = 'stylesheet';
  fl.href = 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Nunito:wght@700;800&display=swap';
  document.head.appendChild(fl);

  var css = '' +
    'html.mpk-lock,html.mpk-lock body{overflow:hidden!important}' +
    '#mpk{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;overflow:hidden;' +
    'font-family:Nunito,system-ui,sans-serif;color:#fff;text-align:center;box-sizing:border-box;padding:84px 16px 28px;' +
    'background:radial-gradient(circle at 18% 14%,' + bg[1] + ' 0,transparent 46%),radial-gradient(circle at 86% 84%,' + (bg[3] || bg[1]) + ' 0,transparent 42%),linear-gradient(160deg,' + bg[0] + ',' + bg[2] + ');' +
    'transition:opacity .45s ease,transform .45s ease}' +
    '#mpk *{box-sizing:border-box}' +
    '#mpk.mpk-out{opacity:0;transform:scale(1.04);pointer-events:none}' +
    '#mpk .mpk-bgimg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.35;filter:saturate(1.1)}' +
    '#mpk .mpk-bgimg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.45))}' +
    '#mpk .mpk-fl{position:absolute;font-family:"Baloo 2",system-ui,sans-serif;font-weight:800;color:#fff;opacity:.17;pointer-events:none;line-height:1;animation:mpkFloat 9s ease-in-out infinite}' +
    '@keyframes mpkFloat{0%,100%{transform:translateY(0) rotate(-7deg)}50%{transform:translateY(-26px) rotate(7deg)}}' +
    '#mpk .mpk-badge{position:absolute;top:10px;left:10px;display:flex;flex-direction:column;align-items:center;gap:2px;z-index:3}' +
    '#mpk .mpk-badge img{width:62px;height:62px;border-radius:50%;border:3px solid #fff;background:#fff;object-fit:cover;box-shadow:0 3px 10px rgba(0,0,0,.3)}' +
    '#mpk .mpk-badge span{font-weight:800;font-size:10px;background:rgba(0,0,0,.35);padding:1px 7px;border-radius:8px}' +
    '#mpk .mpk-box{position:relative;z-index:2;width:100%;max-width:900px;animation:mpkIn .6s ease both}' +
    '@keyframes mpkIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}' +
    '#mpk .mpk-tag{display:inline-block;background:rgba(255,255,255,.16);border:2px solid rgba(255,255,255,.38);padding:6px 16px;border-radius:999px;font-weight:800;font-size:clamp(13px,1.9vw,17px);letter-spacing:.4px}' +
    '#mpk .mpk-title{font-family:"Baloo 2",system-ui,sans-serif;font-weight:800;line-height:.98;margin:12px 0 6px;font-size:clamp(40px,8.4vw,96px);text-shadow:0 6px 0 rgba(0,0,0,.22);letter-spacing:.5px}' +
    '#mpk .mpk-title b{display:block;color:' + hl + '!important;-webkit-text-fill-color:' + hl + '!important;font-weight:800}' +
    '#mpk .mpk-title,#mpk .mpk-title b{background:none!important;-webkit-background-clip:border-box!important;background-clip:border-box!important;text-transform:none!important;opacity:1!important;filter:none!important;-webkit-text-stroke:0!important}' +
    '#mpk .mpk-title{color:#fff!important;-webkit-text-fill-color:#fff!important}' +
    '#mpk .mpk-sub{font-size:clamp(16px,2.4vw,22px);font-weight:700;opacity:.94;margin:0 auto 10px;max-width:36ch;line-height:1.35}' +
    '#mpk .mpk-stage{display:flex;align-items:flex-end;justify-content:center;gap:clamp(8px,2.4vw,26px);min-height:clamp(110px,20vw,190px);margin:8px auto 20px}' +
    '#mpk .mpk-hero{animation:mpkBob 2.8s ease-in-out infinite;filter:drop-shadow(0 10px 14px rgba(0,0,0,.3));display:flex;align-items:flex-end;justify-content:center}' +
    '#mpk .mpk-hero:nth-child(2){animation-delay:-.9s}#mpk .mpk-hero:nth-child(3){animation-delay:-1.8s}#mpk .mpk-hero:nth-child(4){animation-delay:-.4s}' +
    '#mpk .mpk-hero img{display:block;max-width:min(42vw,340px);width:auto;object-fit:contain}' +
    '#mpk .mpk-hero.round img{border-radius:22px;max-width:min(84vw,560px);border:4px solid rgba(255,255,255,.85)}' +
    '#mpk .mpk-hero.card{background:#fff;border-radius:24px;padding:12px 14px;box-shadow:0 10px 24px rgba(0,0,0,.25)}' +
    '#mpk .mpk-hero svg{display:block;max-width:min(60vw,420px)}' +
    '#mpk .mpk-emo{font-size:clamp(70px,13vw,140px);line-height:1}' +
    '@keyframes mpkBob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(2deg)}}' +
    '#mpk .mpk-play{font-family:"Baloo 2",system-ui,sans-serif;font-weight:800;font-size:clamp(30px,5vw,46px);color:' + ink + ';background:' + acc + ';border:0;cursor:pointer;' +
    'padding:14px 58px 10px;border-radius:999px;box-shadow:0 9px 0 ' + accD + ',0 14px 30px rgba(0,0,0,.35);animation:mpkPulse 1.6s ease-in-out infinite;letter-spacing:1px;line-height:1.1}' +
    '#mpk .mpk-play:active{transform:translateY(6px)!important;box-shadow:0 3px 0 ' + accD + '}' +
    '#mpk .mpk-play:focus-visible{outline:4px solid #fff;outline-offset:4px}' +
    '@keyframes mpkPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}' +
    '#mpk .mpk-row{display:flex;gap:12px;justify-content:center;margin-top:22px}' +
    '#mpk .mpk-link{color:#fff;text-decoration:none;background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.4);font-weight:800;font-size:clamp(15px,2vw,18px);padding:9px 18px;border-radius:999px}' +
    '@media (max-height:640px){#mpk .mpk-stage{min-height:90px;margin:4px auto 12px}#mpk .mpk-title{font-size:clamp(34px,7vw,70px)}}' +
    '@media (max-width:560px){#mpk .mpk-stage{gap:6px;flex-wrap:nowrap}#mpk .mpk-hero:not(.round) img{height:auto!important;max-height:min(120px,20vh);max-width:21vw}#mpk .mpk-hero svg{height:min(105px,17vh)!important;width:auto!important;max-width:40vw}#mpk .mpk-hero.round img{height:auto!important;max-height:30vh;max-width:86vw}#mpk .mpk-emo{font-size:clamp(56px,16vw,90px)}}' +
    '@media (prefers-reduced-motion:reduce){#mpk *{animation:none!important}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  document.documentElement.classList.add('mpk-lock');

  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var deco = C.deco || ['+', '−', '×', '÷'];
  var pos = [[5, 16], [88, 12], [8, 78], [86, 74], [22, 44], [74, 40], [48, 8], [52, 88]];
  var fls = pos.map(function (p, i) {
    return '<span class="mpk-fl" style="left:' + p[0] + '%;top:' + p[1] + '%;font-size:' + (46 + (i * 13) % 34) + 'px;animation-delay:-' + (i * 1.3) + 's">' + esc(deco[i % deco.length]) + '</span>';
  }).join('');
  var emos = (C.emoji || []).map(function (e) { return '<div class="mpk-hero"><span class="mpk-emo">' + esc(e) + '</span></div>'; }).join('');
  root.className = '';
  root.setAttribute('role', 'dialog'); root.setAttribute('aria-label', (C.title || '') + ' ' + (C.title2 || ''));
  root.innerHTML =
    '<div class="mpk-bgimg" id="mpkBg" hidden></div>' + fls +
    '<div class="mpk-badge"><img src="' + base + 'simge.png" alt="MathPopWithRu"><span>@mathpopwithru</span></div>' +
    '<div class="mpk-box">' +
    (C.tag ? '<span class="mpk-tag">' + esc(C.tag) + '</span>' : '') +
    '<h1 class="mpk-title">' + esc(C.title) + (C.title2 ? '<b>' + esc(C.title2) + '</b>' : '') + '</h1>' +
    (C.sub ? '<p class="mpk-sub">' + esc(C.sub) + '</p>' : '') +
    '<div class="mpk-stage" id="mpkStage">' + emos + '</div>' +
    '<button class="mpk-play" id="mpkPlay" type="button">▶ BAŞLA</button>' +
    '<div class="mpk-row"><a class="mpk-link" href="../">🏠 Tüm oyunlar</a></div>' +
    '</div>';

  /* Oyundaki görselleri kapağa taşı (oyun yüklendikten sonra) */
  function grab(h) {
    var list = document.querySelectorAll(h.sel); var el = list[h.i || 0];
    if (!el || root.contains(el)) return null;
    var src = null;
    if (el.tagName === 'IMG') src = el.currentSrc || el.src;
    else if (el.tagName === 'CANVAS') { try { src = el.toDataURL(); } catch (e) { } }
    else if (el.tagName === 'svg' || el.tagName === 'SVG') {
      var c = el.cloneNode(true); c.removeAttribute('id');
      var r = el.getBoundingClientRect(); if (!c.getAttribute('viewBox') && r.width) c.setAttribute('viewBox', '0 0 ' + r.width + ' ' + r.height);
      c.removeAttribute('width'); c.removeAttribute('height'); c.style.height = (h.h || 160) + 'px'; c.style.width = 'auto';
      return c;
    } else {
      var bgi = getComputedStyle(el).backgroundImage; var m = bgi && bgi.match(/url\(["']?(.*?)["']?\)/); if (m) src = m[1];
    }
    if (!src) return null;
    var im = new Image(); im.src = src; im.alt = ''; im.style.height = (h.h || 160) + 'px'; return im;
  }
  function fill() {
    var stage = document.getElementById('mpkStage'); if (!stage) return;
    var added = 0;
    (C.heroes || []).forEach(function (h) {
      var n = grab(h); if (!n) return;
      var w = document.createElement('div'); w.className = 'mpk-hero' + (h.round ? ' round' : '') + (h.card ? ' card' : ''); w.appendChild(n); stage.appendChild(w); added++;
    });
    if (C.bgSel) {
      var b = grab({ sel: C.bgSel }); if (b && b.src) { var d = document.getElementById('mpkBg'); d.style.backgroundImage = 'url("' + b.src + '")'; d.hidden = false; }
    }
    if (!added && !(C.emoji || []).length) stage.style.minHeight = '20px';
  }
  if (document.readyState === 'complete') setTimeout(fill, 50); else window.addEventListener('load', function () { setTimeout(fill, 120); });

  /* Ses: kısa başlangıç melodisi (tarayıcı ses kilidini de açar) */
  function chime() {
    try {
      var A = window.AudioContext || window.webkitAudioContext; if (!A) return; var a = new A();
      [523, 659, 784, 1047].forEach(function (f, i) {
        var o = a.createOscillator(), g = a.createGain(), t = a.currentTime + i * 0.08;
        o.type = 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.14, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + .25);
        o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + .3);
      });
      setTimeout(function () { try { a.close(); } catch (e) { } }, 900);
    } catch (e) { }
  }
  function start() {
    if (root.classList.contains('mpk-out')) return;
    chime(); root.classList.add('mpk-out');
    document.documentElement.classList.remove('mpk-lock');
    setTimeout(function () { root.remove(); window.dispatchEvent(new Event('resize')); }, 480);
  }
  document.getElementById('mpkPlay').addEventListener('click', start);
  window.addEventListener('keydown', function k(e) {
    if (!document.getElementById('mpk')) { window.removeEventListener('keydown', k, true); return; }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopImmediatePropagation(); start(); }
  }, true);
  setTimeout(function () { var b = document.getElementById('mpkPlay'); if (b) try { b.focus({ preventScroll: true }); } catch (e) { } }, 300);
})();

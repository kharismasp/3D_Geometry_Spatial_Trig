(() => {
  'use strict';

  const app = document.getElementById('app');
  const ASSET = 'assets/mascot/';

  const mascot = {
    think: ASSET + 'sheet1_bottom_01.png',
    celebrate: ASSET + 'sheet1_bottom_02.png',
    surprised: ASSET + 'sheet1_bottom_03.png',
    explain: ASSET + 'sheet1_bottom_04.png',
    calm: ASSET + 'sheet1_top_01.png',
    happy: ASSET + 'sheet1_top_02.png',
    point: ASSET + 'sheet1_top_03.png',
    geometry: ASSET + 'sheet1_top_04.png',
    wonder: ASSET + 'sheet2_bottom_01.png',
    cheer: ASSET + 'sheet2_bottom_02.png',
    book: ASSET + 'sheet2_bottom_03.png',
    hint: ASSET + 'sheet2_bottom_04.png',
    retry: ASSET + 'sheet2_bottom_05.png',
    smile: ASSET + 'sheet2_top_01.png',
    proud: ASSET + 'sheet2_top_02.png',
    triangle: ASSET + 'sheet2_top_03.png',
    joy: ASSET + 'sheet2_top_04.png',
    alert: ASSET + 'sheet2_top_05.png'
  };

  const sections = [
    {
      en: ['Spatial Eyes', 'Perspective, prerequisites, and the reasoning framework'],
      id: ['Mata Spasial', 'Perspektif, prasyarat, dan kerangka berpikir']
    },
    {
      en: ['Hidden Cross-Sections', 'Turn a 3D target into a useful 2D plane'],
      id: ['Penampang Tersembunyi', 'Ubah target 3D menjadi bidang 2D yang berguna']
    },
    {
      en: ['Coordinates in 3D', 'Distance and midpoint as repeated Pythagoras'],
      id: ['Koordinat dalam 3D', 'Jarak dan titik tengah sebagai Pythagoras berulang']
    },
    {
      en: ['Projection & Line–Plane Angles', 'Find the orthogonal projection before the angle'],
      id: ['Proyeksi & Sudut Garis–Bidang', 'Cari proyeksi tegak lurus sebelum menentukan sudut']
    },
    {
      en: ['Pyramids & Prisms', 'Height, slant height, and lateral edge are different'],
      id: ['Piramida & Prisma', 'Tinggi, tinggi sisi, dan rusuk samping itu berbeda']
    },
    {
      en: ['Spatial Trigonometry', '3D diagram → useful plane → 2D triangle → trigonometry'],
      id: ['Trigonometri Spasial', 'Gambar 3D → bidang berguna → segitiga 2D → trigonometri']
    },
    {
      en: ['Dependency Chains', 'Plan backward from the final target'],
      id: ['Rantai Langkah', 'Rencanakan dari target akhir ke informasi awal']
    },
    {
      en: ['Reverse & Symbolic Geometry', 'Turn angles back into dimensions and parameters'],
      id: ['Geometri Terbalik & Simbolik', 'Gunakan sudut untuk menemukan kembali dimensi dan parameter']
    },
    {
      en: ['Reasoning Studio', 'Compare routes, diagnose errors, and fade scaffolds'],
      id: ['Studio Penalaran', 'Bandingkan cara, diagnosis kesalahan, dan kurangi bantuan']
    },
    {
      en: ['High-Ceiling Studio', 'Moving projections, symmetry, existence, and synthesis'],
      id: ['Studio Lanjutan', 'Proyeksi bergerak, simetri, keberadaan solusi, dan sintesis']
    }
  ];

  const ui = {
    en: {
      course: 'IB Mathematics AA HL', topic: '3D Geometry & Spatial Trigonometry', menu: 'Lesson map',
      teacher: 'Teacher Pass', teacherOn: 'Teacher Pass ON', start: 'Start lesson', continue: 'Continue',
      home: 'Lesson map', previous: 'Previous', next: 'Next', complete: 'Mark complete & continue',
      completed: 'Completed', locked: 'Locked', ready: 'Ready', current: 'Current',
      core: 'CORE', challenge: 'CHALLENGE', advanced: 'ADVANCED',
      coreDesc: 'Secure the main idea.', challengeDesc: 'Use the idea in a less obvious way.', advancedDesc: 'Combine ideas and solve deeper problems.',
      guided: 'GUIDED EXAMPLE', yourturn: 'YOUR TURN', why: 'WHY IT WORKS', main: 'MAIN IDEA', trap: 'COMMON TRAP', deeper: 'OPTIONAL DEEPER IDEA',
      reveal: 'Reveal next reasoning step', resetExample: 'Reset example', check: 'Check answer', hint: 'Hint',
      correct: 'Correct', tryAgain: 'Try again', teacherNote: 'Teacher note',
      progress: 'lesson progress', levelProgress: 'level progress', unlockedByTeacher: 'All sections unlocked for live teaching.',
      answerPlaceholder: 'Enter your answer', showMap: 'Open lesson map', finish: 'Finish lesson',
      changeProblem: 'Change Problem', previousProblem: 'Previous Problem', planFirst: 'Plan first', checkPlan: 'Check plan', variation: 'Variation', solvedLabel: 'solved', structureHint: 'Structure hint', givensOnly: 'Givens only'
    },
    id: {
      course: 'IB Mathematics AA HL', topic: 'Geometri 3D & Trigonometri Spasial', menu: 'Peta pelajaran',
      teacher: 'Lewati oleh Guru', teacherOn: 'Mode Guru AKTIF', start: 'Mulai pelajaran', continue: 'Lanjutkan',
      home: 'Peta pelajaran', previous: 'Kembali', next: 'Lanjut', complete: 'Tandai selesai & lanjut',
      completed: 'Selesai', locked: 'Terkunci', ready: 'Siap', current: 'Sedang dipelajari',
      core: 'INTI', challenge: 'TANTANGAN', advanced: 'LANJUTAN',
      coreDesc: 'Kuasai ide utamanya.', challengeDesc: 'Gunakan konsep dalam bentuk yang lebih tidak langsung.', advancedDesc: 'Gabungkan beberapa ide dan selesaikan masalah yang lebih mendalam.',
      guided: 'CONTOH TERBIMBING', yourturn: 'GILIRANMU', why: 'MENGAPA INI BEKERJA', main: 'IDE UTAMA', trap: 'JEBAKAN UMUM', deeper: 'IDE LANJUTAN OPSIONAL',
      reveal: 'Buka langkah penalaran berikutnya', resetExample: 'Ulangi contoh', check: 'Cek jawaban', hint: 'Petunjuk',
      correct: 'Benar', tryAgain: 'Coba lagi', teacherNote: 'Catatan guru',
      progress: 'progres pelajaran', levelProgress: 'progres tingkat', unlockedByTeacher: 'Semua bagian dibuka untuk pengajaran langsung.',
      answerPlaceholder: 'Masukkan jawaban', showMap: 'Buka peta pelajaran', finish: 'Selesaikan pelajaran',
      changeProblem: 'Ganti Soal', previousProblem: 'Soal Sebelumnya', planFirst: 'Rencanakan dulu', checkPlan: 'Cek rencana', variation: 'Variasi', solvedLabel: 'selesai', structureHint: 'Petunjuk struktur', givensOnly: 'Hanya informasi awal'
    }
  };


  function safeJSON(value, fallback){ try { const parsed=JSON.parse(value); return parsed ?? fallback; } catch { return fallback; } }

  const defaultState = {
    lang: localStorage.getItem('spatial3d_lang') || 'en',
    page: 'home',
    section: 0,
    level: localStorage.getItem('spatial3d_level') || 'core',
    teacher: localStorage.getItem('spatial3d_teacher') === '1',
    completed: safeJSON(localStorage.getItem('spatial3d_completed') || '[]', []),
    practice: safeJSON(localStorage.getItem('spatial3d_practice') || '{}', {}),
    problemCurrent: safeJSON(localStorage.getItem('spatial3d_problem_current') || '{}', {}),
    problemHistory: safeJSON(localStorage.getItem('spatial3d_problem_history') || '{}', {}),
    exampleStep: {},
    hintState: {},
    local: {}
  };
  const state = defaultState;

  function t(key){ return ui[state.lang][key]; }
  function bi(en,id){ return state.lang === 'en' ? en : id; }
  function secText(i){ return sections[i][state.lang]; }
  function esc(s){ return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
  function save(){
    localStorage.setItem('spatial3d_lang', state.lang);
    localStorage.setItem('spatial3d_level', state.level);
    localStorage.setItem('spatial3d_teacher', state.teacher ? '1':'0');
    localStorage.setItem('spatial3d_completed', JSON.stringify(state.completed));
    localStorage.setItem('spatial3d_practice', JSON.stringify(state.practice));
    localStorage.setItem('spatial3d_problem_current', JSON.stringify(state.problemCurrent));
    localStorage.setItem('spatial3d_problem_history', JSON.stringify(state.problemHistory));
  }
  function completeCount(){ return state.completed.filter(Boolean).length; }
  function isUnlocked(i){
    if(state.teacher) return true;
    if(i === 0) return true;
    return !!state.completed[i-1];
  }
  function setLang(lang){ state.lang = lang; save(); render(); }
  function setLevel(level){ state.level = level; save(); render(); }
  function setPage(section){
    if(section === 'home'){ state.page = 'home'; render(); window.scrollTo(0,0); return; }
    if(!isUnlocked(section)) return;
    state.page = 'lesson'; state.section = section; render(); window.scrollTo(0,0);
  }
  function markComplete(i){
    state.completed[i] = true; save();
    if(i < sections.length-1){ setPage(i+1); } else { render(); window.scrollTo(0,0); }
  }
  function toggleTeacher(){ state.teacher = !state.teacher; save(); render(); }

  function header(){
    const pct = Math.round((completeCount()/sections.length)*100);
    return `
      <header class="topbar">
        <div class="topbar-inner">
          <div class="brand">
            <div class="brand-mark">3D</div>
            <div class="brand-text"><strong>${t('topic')}</strong><span>${t('course')}</span></div>
          </div>
          <div class="top-actions">
            <button class="menu-btn" data-action="home">${t('menu')}</button>
            <div class="lang-group" aria-label="${bi('Language','Bahasa')}"><button data-lang="en" aria-pressed="${state.lang==='en'}" class="${state.lang==='en'?'active':''}">EN</button><button data-lang="id" aria-pressed="${state.lang==='id'}" class="${state.lang==='id'?'active':''}">ID</button></div>
            <button class="teacher-btn ${state.teacher?'active':''}" data-action="teacher" aria-pressed="${state.teacher}">${state.teacher?t('teacherOn'):t('teacher')}</button>
          </div>
        </div>
        <div class="progressbar"><div style="width:${pct}%"></div></div>
      </header>`;
  }

  function footer(){
    return `<footer>${bi('Built from the validated canonical Teaching Material and Practice Bank.','Dibangun dari Materi Pembelajaran dan Bank Latihan kanonik yang telah divalidasi.')}</footer>`;
  }

  function home(){
    const next = state.completed.findIndex(v => !v);
    const nextIdx = next === -1 ? sections.length-1 : next;
    const route = sections.map((s,i) => {
      const unlocked = isUnlocked(i), done = !!state.completed[i];
      const status = done ? t('completed') : (!unlocked ? t('locked') : (i===nextIdx ? t('current') : t('ready')));
      return `<button class="route-item" data-section="${i}" ${unlocked?'':'disabled'} ${i===nextIdx?'aria-current="step"':''}>
        <span class="route-num">${i+1}</span>
        <span><span class="route-title">${esc(s[state.lang][0])}</span><span class="route-sub">${esc(s[state.lang][1])}</span></span>
        <span class="route-state">${status}</span>
      </button>`;
    }).join('');
    return `
      <main>
        <section class="hero">
          <div>
            <div class="kicker">${t('course')}</div>
            <h1>${state.lang==='en'?'3D Geometry<br>& Spatial Trigonometry':'Geometri 3D<br>& Trigonometri Spasial'}</h1>
            <p>${bi('This unit is about seeing the right 2D mathematics inside a 3D object — not memorizing more formulas.','Unit ini berfokus pada cara melihat matematika 2D yang tepat di dalam objek 3D — bukan menghafal lebih banyak rumus.')}</p>
            <p class="hero-quote">${bi('Which plane? Which projection? Which hidden triangle?','Bidang yang mana? Proyeksi yang mana? Segitiga tersembunyi yang mana?')}</p>
            <div class="hero-actions"><button class="primary" data-section="${nextIdx}">${completeCount()?t('continue'):t('start')}</button></div>
          </div>
          <div class="mascot-stage">
            <div class="mascot-bubble">${bi('In 3D geometry, the hardest step is often choosing what to look at.','Dalam geometri 3D, langkah tersulit sering kali bukan menghitung, tetapi memilih apa yang perlu dilihat.')}</div>
            <img src="${mascot.geometry}" alt="" aria-hidden="true" />
          </div>
        </section>
        <section class="section-menu">
          <div class="kicker">${t('menu')}</div>
          <h2>${bi('A reasoning-first route','Alur belajar yang mengutamakan penalaran')}</h2>
          <p class="section-menu-intro">${bi('Move through the unit in sequence, or use Teacher Pass to jump directly to the section that fits the lesson.','Ikuti alur secara berurutan, atau gunakan Mode Guru untuk langsung menuju bagian yang sesuai dengan sesi belajar.')}</p>
          ${state.teacher?`<div class="notice info">${t('unlockedByTeacher')}</div>`:''}
          <div class="route-list">${route}</div>
        </section>
      </main>`;
  }

  function screenHeader(i, intro){
    const [title] = secText(i);
    return `<div class="screen-head"><div class="screen-index">${i+1}</div><div><div class="kicker">${bi('LESSON','PELAJARAN')} ${i+1}</div><h2>${esc(title)}</h2><p>${intro}</p></div></div>`;
  }

  function nav(i){
    const done = !!state.completed[i];
    return `<div class="section-nav">
      <button class="secondary" data-action="home">${t('showMap')}</button>
      <div class="nav-right">
        ${i>0?`<button class="ghost" data-section="${i-1}">${t('previous')}</button>`:''}
        ${done && i<sections.length-1?`<button class="secondary" data-section="${i+1}">${t('next')}</button>`:`<button class="primary" data-complete="${i}">${i===sections.length-1?t('finish'):t('complete')}</button>`}
      </div>
    </div>`;
  }

  function solvedCount(sectionId, level){
    const v = state.practice[sectionId]?.[level];
    if(Array.isArray(v)) return v.length;
    return v ? 1 : 0;
  }

  function difficulty(sectionId){
    const levels = ['core','challenge','advanced'];
    const desc = {core:t('coreDesc'),challenge:t('challengeDesc'),advanced:t('advancedDesc')};
    const label = {core:t('core'),challenge:t('challenge'),advanced:t('advanced')};
    return `<div><div class="difficulty">${levels.map(l=>{
      const solved = solvedCount(sectionId,l);
      return `<button data-level="${l}" aria-pressed="${state.level===l}" class="${state.level===l?'active':''}">${label[l]}${solved?` · ${solved}✓`:''}</button>`;
    }).join('')}</div><div class="difficulty-desc">${desc[state.level]}</div></div>`;
  }

  const FAMILY_LABELS = {
    cross:{en:'Hidden cross-section',id:'Penampang tersembunyi'},
    coord:{en:'3D coordinate structure',id:'Struktur koordinat 3D'},
    proj:{en:'Projection & line–plane angle',id:'Proyeksi & sudut garis–bidang'},
    pyramid:{en:'Pyramid segment distinction',id:'Pembedaan ruas pada limas'},
    trig:{en:'Spatial trigonometry',id:'Trigonometri spasial'},
    chain:{en:'Dependency chain',id:'Urutan besaran'},
    reverse:{en:'Reverse / parameter geometry',id:'Geometri terbalik / parameter'},
    reasoning:{en:'Error diagnosis & route choice',id:'Diagnosis kesalahan & pemilihan cara'},
    ceiling:{en:'Moving projection & generalization',id:'Proyeksi bergerak & generalisasi'}
  };

  function practice(sectionId){
    const p = problemById(sectionId);
    const paper = p.paper ? `<span class="tag paper">${esc(p.paper)}</span>` : '';
    const family = p.family?.[state.lang] || FAMILY_LABELS[sectionId]?.[state.lang] || '';
    const variation = p.variation?.[state.lang] || bi('Canonical variation','Variasi kanonik');
    const pool = poolFor(sectionId,state.level);
    const idx = currentProblemIndex(sectionId,state.level);
    const hist = historyFor(sectionId,state.level);
    const hintKey = problemKey(sectionId,p);
    const hintStep = Number(state.hintState[hintKey]||0);
    const hints = p.hints?.[state.lang] || [];
    const visibleHint = hintStep>0 && hints.length ? hints[Math.min(hintStep-1,hints.length-1)] : '';
    const visual = practiceVisual(p, sectionId, hintStep);
    let answerUI = '';
    if(p.type === 'choice'){
      answerUI = `<div class="choice-grid">${p.choices.map((c,i)=>`<button class="choice" aria-pressed="false" data-choice="${i}" data-practice-choice="${sectionId}">${c[state.lang]}</button>`).join('')}</div>`;
    } else {
      answerUI = `<div class="answer-row"><input id="ans-${sectionId}" inputmode="decimal" autocomplete="off" aria-label="${esc(t('answerPlaceholder'))}" placeholder="${t('answerPlaceholder')}"/><button class="check-btn" data-check="${sectionId}">${t('check')}</button><button class="hint-btn" data-hint="${sectionId}">${t('hint')}</button></div>`;
    }
    const plan = p.plan ? `<div class="plan-box" data-plan-root="${sectionId}">
      <div class="eyebrow">${t('planFirst')}</div><p>${p.plan.prompt[state.lang]}</p>
      <div class="plan-options">${p.plan.choices.map((c,i)=>`<button aria-pressed="false" data-plan-choice="${sectionId}" data-plan-index="${i}">${c[state.lang]}</button>`).join('')}</div>
      <button class="ghost compact" data-plan-check="${sectionId}">${t('checkPlan')}</button><div id="plan-feedback-${sectionId}" class="feedback" role="status" aria-live="polite"></div>
    </div>` : '';
    const previous = hist.length ? pool[hist[hist.length-1]] : null;
    const previousLabel = previous ? `${t('previousProblem')} · ${previous.variation?.[state.lang] || (hist[hist.length-1]+1)}` : t('previousProblem');
    const teacherPicker = `<div class="teacher-only teacher-problem-picker"><label>${t('variation')}<select data-problem-select="${sectionId}">${pool.map((q,i)=>`<option value="${i}" ${i===idx?'selected':''}>${i+1}. ${esc(q.variation?.[state.lang]||q.family?.[state.lang]||family)}</option>`).join('')}</select></label></div>`;
    return `<div class="practice-shell" data-practice="${sectionId}">
      <div class="practice-top"><div><div class="eyebrow">${t('yourturn')}</div><div class="big-question" style="font-size:1.35rem;margin-bottom:.15em">${bi('Same mathematics, different reasoning.','Matematika yang sama, cara berpikir yang berbeda.')}</div></div>${difficulty(sectionId)}</div>
      ${teacherPicker}
      <div class="practice-controls"><button class="secondary" data-change-problem="${sectionId}" ${pool.length<2?'disabled':''}>${t('changeProblem')}</button><button class="ghost" data-previous-problem="${sectionId}" ${hist.length?'':'disabled'}>${esc(previousLabel)}</button><span class="problem-counter">${idx+1}/${pool.length}</span></div>
      <div class="question-card">
        <div class="question-meta"><span class="tag">${t(state.level)}</span><span class="tag">${esc(family)}</span><span class="tag subtle">${esc(variation)}</span>${paper}</div>
        ${visual?`<div class="practice-visual">${visual}<div class="visual-state">${hintStep? t('structureHint'):t('givensOnly')}</div></div>`:''}
        ${plan}
        <p class="question-text">${p.prompt[state.lang]}</p>
        ${answerUI}
        ${p.type==='choice'?`<div class="answer-row" style="margin-top:10px"><button class="check-btn" data-check-choice="${sectionId}">${t('check')}</button><button class="hint-btn" data-hint="${sectionId}">${t('hint')}</button></div>`:''}
        <div id="hint-${sectionId}" class="hint-box ${visibleHint?'show':''}" role="status" aria-live="polite">${visibleHint?`${t('hint')} ${Math.min(hintStep,hints.length)}: ${visibleHint}`:''}</div>
        <div id="feedback-${sectionId}" class="feedback" role="status" aria-live="polite"></div>
        <div class="practice-mascot"><img id="practice-mascot-${sectionId}" src="${mascotForLevel()}" alt="" aria-hidden="true"/><div id="practice-mascot-msg-${sectionId}" class="practice-mascot-msg">${mascotPrompt()}</div></div>
      </div>
    </div>`;
  }

  const PRACTICE = {
    cross: {
      core:{type:'choice', answer:1, prompt:{en:'In a cuboid, AG joins a lower vertex A to the opposite upper vertex G. Which segment is the projection of AG onto the base plane?',id:'Pada sebuah balok, AG menghubungkan titik sudut bawah A dengan titik sudut atas yang berseberangan G. Ruas mana yang merupakan proyeksi AG pada bidang alas?'}, choices:[{en:'AB',id:'AB'},{en:'AC',id:'AC'},{en:'CG',id:'CG'}], hints:{en:['The projection must lie completely in the base.','Project the upper endpoint G straight down to the base: it lands at C.'],id:['Proyeksinya harus seluruhnya berada pada bidang alas.','Proyeksikan titik G tegak lurus ke alas: titik itu jatuh di C.']}, feedback:{en:'The projection joins A to the foot of G on the base.',id:'Proyeksi menghubungkan A dengan titik jatuh G pada alas.'}},
      challenge:{type:'choice', answer:2, paper:'Paper 2', prompt:{en:'A right triangular prism has base triangle ABC. A′ lies vertically above A. To find the angle between A′C and the base plane, which base length must you determine first?',id:'Sebuah prisma segitiga siku-siku memiliki alas ABC. A′ berada tepat di atas A. Untuk mencari sudut antara A′C dan bidang alas, panjang pada alas mana yang perlu dicari lebih dulu?'}, choices:[{en:'AB',id:'AB'},{en:'BC',id:'BC'},{en:'AC',id:'AC'}], hints:{en:['The needed length is the projection of A′C onto the base.','Project A′ down to A.'],id:['Panjang yang dibutuhkan adalah proyeksi A′C pada bidang alas.','Proyeksikan A′ turun ke A.']}, feedback:{en:'A′C projects to AC, so AC is the base quantity that unlocks the spatial triangle.',id:'A′C berproyeksi menjadi AC, jadi AC adalah besaran pada alas yang membuka segitiga spasialnya.'}},
      advanced:{type:'choice', answer:0, prompt:{en:'A student tries to form a triangle using AB, CG and AG in a cuboid because AB is horizontal and CG is vertical. What is the first problem with this argument?',id:'Seorang siswa mencoba membentuk segitiga dari AB, CG, dan AG pada balok karena AB horizontal dan CG vertikal. Apa masalah pertama dari argumen tersebut?'}, choices:[{en:'AB and CG do not even meet, so they do not form one triangle.',id:'AB dan CG bahkan tidak bertemu, sehingga ketiganya tidak membentuk satu segitiga.'},{en:'AG is not a straight segment.',id:'AG bukan ruas garis lurus.'},{en:'Horizontal and vertical lengths can never be used together.',id:'Panjang horizontal dan vertikal tidak pernah boleh digunakan bersama.'}], hints:{en:['Before asking whether an angle is 90°, ask whether the three segments belong to one planar triangle.'],id:['Sebelum bertanya apakah ada sudut 90°, cek dulu apakah ketiga ruas benar-benar berada dalam satu segitiga sebidang.']}, feedback:{en:'Correct: perpendicular directions alone do not create a usable triangle unless the segments actually meet in one plane.',id:'Benar: arah yang saling tegak lurus tidak otomatis membentuk segitiga yang dapat dipakai jika ruas-ruasnya tidak bertemu dalam satu bidang.'}}
    },
    coord:{
      core:{type:'number', answer:133, tolerance:.001, prompt:{en:'For A = (−2, 1, 4) and B = (4, −3, 13), calculate AB².',id:'Untuk A = (−2, 1, 4) dan B = (4, −3, 13), hitung AB².'}, hints:{en:['Find the coordinate changes first: Δx, Δy, Δz.','Square the three changes and add them.'],id:['Cari dulu perubahan koordinatnya: Δx, Δy, Δz.','Kuadratkan ketiga perubahan lalu jumlahkan.']}, feedback:{en:'Use 6² + (−4)² + 9².',id:'Gunakan 6² + (−4)² + 9².'}},
      challenge:{type:'choice', answer:1, prompt:{en:'Why is the 3D distance formula not a completely new idea?',id:'Mengapa rumus jarak 3D bukan ide yang benar-benar baru?'}, choices:[{en:'It comes from the sine rule twice.',id:'Rumus itu berasal dari aturan sinus dua kali.'},{en:'It is Pythagoras applied across three mutually perpendicular coordinate directions.',id:'Rumus itu adalah Pythagoras yang diterapkan pada tiga arah koordinat yang saling tegak lurus.'},{en:'It is the midpoint formula with a square root.',id:'Rumus itu adalah rumus titik tengah dengan akar kuadrat.'}], hints:{en:['Imagine first finding a diagonal in the xy-plane, then combining it with the z-change.'],id:['Bayangkan mencari diagonal pada bidang xy terlebih dahulu, lalu menggabungkannya dengan perubahan z.']}, feedback:{en:'Exactly: it is repeated Pythagoras.',id:'Tepat: idenya adalah Pythagoras berulang.'}},
      advanced:{type:'choice', answer:2, prompt:{en:'A line segment has coordinate differences (p, q, r). Which expression gives its length?',id:'Sebuah ruas garis memiliki selisih koordinat (p, q, r). Ekspresi mana yang menyatakan panjangnya?'}, choices:[{en:'p + q + r',id:'p + q + r'},{en:'√(p² + q²) + r',id:'√(p² + q²) + r'},{en:'√(p² + q² + r²)',id:'√(p² + q² + r²)'}], hints:{en:['All three coordinate directions are mutually perpendicular.'],id:['Ketiga arah koordinat saling tegak lurus.']}, feedback:{en:'The three squared perpendicular changes combine under one square root.',id:'Ketiga perubahan yang saling tegak lurus digabungkan sebagai jumlah kuadrat di dalam satu akar.'}}
    },
    proj:{
      core:{type:'choice', answer:2, prompt:{en:'In a right square pyramid, S is vertically above the centre O of base ABCD. Which angle represents the angle between SA and the base plane?',id:'Pada limas segiempat tegak, S berada tepat di atas pusat O dari alas ABCD. Sudut mana yang menyatakan sudut antara SA dan bidang alas?'}, choices:[{en:'∠SAB',id:'∠SAB'},{en:'∠SBO',id:'∠SBO'},{en:'∠SAO',id:'∠SAO'}], hints:{en:['First project S perpendicularly onto the base.','The projection of SA must start at A and end at O.'],id:['Proyeksikan S tegak lurus ke bidang alas terlebih dahulu.','Proyeksi SA harus menghubungkan A dengan O.']}, feedback:{en:'The line-plane angle is the angle between SA and its orthogonal projection AO.',id:'Sudut garis–bidang adalah sudut antara SA dan proyeksi tegak lurusnya, yaitu AO.'}},
      challenge:{type:'number', answer:25.1, tolerance:.2, prompt:{en:'A cuboid has A=(0,0,0), G=(8,6,10), and the front face is y=0. Find the acute angle, in degrees, between AG and the front face.',id:'Sebuah balok memiliki A=(0,0,0), G=(8,6,10), dan sisi depan berada pada bidang y=0. Tentukan sudut lancip, dalam derajat, antara AG dan sisi depan.'}, hints:{en:['Project G onto y=0: only its y-coordinate changes.','The perpendicular distance to y=0 is 6; the projection length is √(8²+10²).'],id:['Proyeksikan G ke y=0: hanya koordinat y yang berubah.','Jarak tegak lurus ke y=0 adalah 6; panjang proyeksinya √(8²+10²).']}, feedback:{en:'Use tan θ = 6 / √(8²+10²).',id:'Gunakan tan θ = 6 / √(8²+10²).'}},
      advanced:{type:'choice', answer:1, prompt:{en:'Why is “AB lies in the plane” not enough to use ∠SAB as a line–plane angle?',id:'Mengapa pernyataan “AB berada pada bidang” belum cukup untuk menggunakan ∠SAB sebagai sudut garis–bidang?'}, choices:[{en:'Because AB must be the longest line in the plane.',id:'Karena AB harus menjadi garis terpanjang pada bidang.'},{en:'Because the in-plane ray must be the orthogonal projection of the spatial line.',id:'Karena sinar pada bidang harus merupakan proyeksi tegak lurus dari garis spasial tersebut.'},{en:'Because line–plane angles can only be measured at the centre.',id:'Karena sudut garis–bidang hanya dapat diukur di pusat.'}], hints:{en:['A plane contains infinitely many lines. Which one is tied specifically to SA?'],id:['Sebuah bidang memuat tak hingga banyak garis. Garis mana yang secara khusus berkaitan dengan SA?']}, feedback:{en:'Exactly: the in-plane direction must be the orthogonal projection.',id:'Tepat: arah pada bidang harus merupakan proyeksi tegak lurusnya.'}}
    },
    pyramid:{
      core:{type:'choice', answer:0, prompt:{en:'In a right pyramid, which segment is the vertical height?',id:'Pada limas tegak, ruas mana yang merupakan tinggi tegak?'}, choices:[{en:'Apex to the base plane, perpendicular to the plane.',id:'Dari puncak ke bidang alas, tegak lurus terhadap bidang.'},{en:'Apex to a base vertex.',id:'Dari puncak ke titik sudut alas.'},{en:'Apex to any point on a base edge.',id:'Dari puncak ke sembarang titik pada sisi alas.'}], hints:{en:['The vertical height is perpendicular to the whole base plane.'],id:['Tinggi tegak harus tegak lurus terhadap seluruh bidang alas.']}, feedback:{en:'Correct: it is the perpendicular distance from the apex to the base plane.',id:'Benar: tinggi tegak adalah jarak tegak lurus dari puncak ke bidang alas.'}},
      challenge:{type:'number', answer:25, tolerance:.001, prompt:{en:'A right rectangular pyramid has base 20×14 and vertical height 24. M is the midpoint of a side of length 20. Find the slant height SM.',id:'Sebuah limas tegak beralas persegi panjang 20×14 memiliki tinggi tegak 24. M adalah titik tengah dari sisi alas yang panjangnya 20. Tentukan tinggi sisi SM.'}, hints:{en:['From the centre O to M, use half of the other base dimension.','OM = 7, then use right triangle SOM.'],id:['Dari pusat O ke M, gunakan setengah dari dimensi alas yang lain.','OM = 7, lalu gunakan segitiga siku-siku SOM.']}, feedback:{en:'Use SM² = 24² + 7².',id:'Gunakan SM² = 24² + 7².'}},
      advanced:{type:'choice', answer:2, prompt:{en:'A right square pyramid has base side 2a. A lateral edge SA and a slant height SM generally create different inclinations because…',id:'Sebuah limas persegi tegak memiliki sisi alas 2a. Rusuk samping SA dan tinggi sisi SM umumnya membentuk sudut kemiringan yang berbeda karena…'}, choices:[{en:'they have different vertical heights.',id:'keduanya memiliki tinggi tegak yang berbeda.'},{en:'one of them is not straight.',id:'salah satunya bukan ruas garis lurus.'},{en:'their projections in the base have different lengths.',id:'proyeksi keduanya pada alas memiliki panjang yang berbeda.'}], hints:{en:['Both rise from the same apex through the same vertical height. What changes is where the segment lands on the base.'],id:['Keduanya berangkat dari puncak yang sama dengan tinggi tegak yang sama. Yang berubah adalah titik akhirnya pada alas.']}, feedback:{en:'Exactly: same vertical rise, different horizontal projection.',id:'Tepat: kenaikan vertikalnya sama, tetapi panjang proyeksi mendatarnya berbeda.'}}
    },
    trig:{
      core:{type:'number', answer:37.5, tolerance:.2, paper:'Paper 2', prompt:{en:'A right triangular prism has AB=5, BC=7, ∠ABC=120°, and A′ is 8 units vertically above A. Find the angle between A′C and the base plane, to 1 decimal place.',id:'Sebuah prisma segitiga tegak memiliki AB=5, BC=7, ∠ABC=120°, dan A′ berada 8 satuan tepat di atas A. Tentukan sudut antara A′C dan bidang alas, sampai 1 angka di belakang koma.'}, hints:{en:['First find AC in the base using the cosine rule.','Then use tan θ = 8 / AC.'],id:['Cari AC pada alas terlebih dahulu dengan aturan cosinus.','Lalu gunakan tan θ = 8 / AC.']}, feedback:{en:'The dependency is cosine rule → projection AC → right-triangle tangent.',id:'Urutan langkahnya: aturan cosinus → proyeksi AC → tangen pada segitiga siku-siku.'}},
      challenge:{type:'choice', answer:1, prompt:{en:'Which sequence best describes a reliable spatial-trigonometry solution?',id:'Urutan mana yang paling tepat untuk menyelesaikan soal trigonometri spasial?'}, choices:[{en:'Choose a formula → draw a triangle → trust the picture.',id:'Pilih rumus → gambar segitiga → percaya pada tampilan gambar.'},{en:'Identify the 3D target → choose a useful plane → form a 2D triangle → apply trigonometry.',id:'Tentukan target 3D → pilih bidang yang berguna → bentuk segitiga 2D → gunakan trigonometri.'},{en:'Measure the perspective drawing → substitute into a formula.',id:'Ukur gambar perspektif → masukkan hasilnya ke rumus.'}], hints:{en:['The geometry should determine the triangle before the formula is chosen.'],id:['Geometrinya harus menentukan segitiga yang dipakai sebelum memilih rumus.']}, feedback:{en:'Yes: structure first, calculation second.',id:'Ya: pahami strukturnya dulu, baru hitung.'}},
      advanced:{type:'choice', answer:0, prompt:{en:'Why should exact values such as √67 usually be kept until the final step?',id:'Mengapa nilai eksak seperti √67 sebaiknya dipertahankan sampai langkah akhir?'}, choices:[{en:'They reduce rounding error and keep the geometric structure visible.',id:'Nilai eksak mengurangi kesalahan pembulatan dan membuat struktur geometri tetap terlihat.'},{en:'IB forbids decimals in every geometry question.',id:'IB melarang desimal pada semua soal geometri.'},{en:'Exact values always make arithmetic shorter.',id:'Nilai eksak selalu membuat perhitungan lebih singkat.'}], hints:{en:['Think about both accuracy and seeing where a quantity came from.'],id:['Pikirkan dua hal: ketelitian dan kemudahan melihat asal suatu besaran.']}, feedback:{en:'Correct: exact intermediate values support accuracy and structural reasoning.',id:'Benar: nilai eksak pada langkah antara membantu ketelitian sekaligus menjaga struktur penalaran tetap terlihat.'}}
    },
    chain:{
      core:{type:'choice', answer:2, prompt:{en:'You want the inclination of a body diagonal to a base plane. Which quantity is usually needed immediately before the angle?',id:'Kamu ingin mencari sudut kemiringan diagonal ruang terhadap bidang alas. Besaran apa yang biasanya dibutuhkan tepat sebelum menentukan sudut?'}, choices:[{en:'The volume of the solid.',id:'Volume bangun.'},{en:'A random base edge.',id:'Salah satu rusuk alas secara acak.'},{en:'The horizontal projection length of the spatial segment.',id:'Panjang proyeksi mendatar dari ruas spasial tersebut.'}], hints:{en:['A line–plane angle lives in a right triangle formed by the line, its projection, and a perpendicular height.'],id:['Sudut garis–bidang berada pada segitiga siku-siku yang dibentuk oleh garis, proyeksinya, dan tinggi tegak lurus.']}, feedback:{en:'Exactly: plan backward from the angle to its projection and vertical rise.',id:'Tepat: rencanakan dari sudut menuju proyeksi mendatar dan kenaikan vertikalnya.'}},
      challenge:{type:'number', answer:29.0, tolerance:.2, paper:'Paper 2', prompt:{en:'A 12 m by 8 m building has 4 m walls and a symmetric pitched roof whose ridge is 3 m above the wall tops. From a lower corner at one end to the ridge endpoint at the other end, find the angle to the ground, to 1 decimal place.',id:'Sebuah bangunan berukuran 12 m × 8 m memiliki dinding setinggi 4 m dan atap pelana simetris dengan bubungan 3 m di atas puncak dinding. Dari sudut bawah pada satu ujung ke ujung bubungan di ujung lainnya, tentukan sudut terhadap tanah sampai 1 angka di belakang koma.'}, hints:{en:['The horizontal displacement is 12 m along the building and 4 m across to the centre line.','The vertical rise is 4+3=7 m.'],id:['Perpindahan mendatarnya 12 m sepanjang bangunan dan 4 m menuju garis tengah.','Kenaikan vertikalnya adalah 4+3=7 m.']}, feedback:{en:'Find the horizontal projection first, then use tangent with the 7 m vertical rise.',id:'Cari proyeksi mendatar terlebih dahulu, lalu gunakan tangen dengan kenaikan vertikal 7 m.'}},
      advanced:{type:'number', answer:6, tolerance:.001, paper:'Paper 2', prompt:{en:'A square-based prism has base side 12 and height 5. A right square pyramid sits on top. The total volume is 1008. Find the pyramid height.',id:'Sebuah prisma beralas persegi memiliki sisi alas 12 dan tinggi 5. Di atasnya terdapat limas persegi tegak. Volume total bangun adalah 1008. Tentukan tinggi limas.'}, hints:{en:['Separate the prism volume from the total first.','The remaining volume is the pyramid volume: V=(1/3)(12²)h.'],id:['Pisahkan dulu volume prisma dari volume total.','Sisa volume adalah volume limas: V=(1/3)(12²)h.']}, feedback:{en:'This is a dependency chain: total volume → pyramid volume → pyramid height → later spatial geometry.',id:'Ini adalah rantai langkah: volume total → volume limas → tinggi limas → geometri spasial berikutnya.'}}
    },
    reverse:{
      core:{type:'number', answer:5.7735, tolerance:.03, paper:'Paper 1', prompt:{en:'A cuboid has base dimensions 6×8. Its body diagonal makes a 30° angle with the base. Find the height, as a decimal.',id:'Sebuah balok memiliki alas 6×8. Diagonal ruangnya membentuk sudut 30° terhadap alas. Tentukan tinggi balok dalam bentuk desimal.'}, hints:{en:['The base diagonal is 10.','Use tan 30° = h/10.'],id:['Diagonal alasnya adalah 10.','Gunakan tan 30° = h/10.']}, feedback:{en:'Reverse the usual direction: angle → equation → height.',id:'Balik arah penalarannya: sudut → persamaan → tinggi.'}},
      challenge:{type:'choice', answer:1, prompt:{en:'For a right rectangular pyramid with base 2a×2b and height h, what is the projection length of a lateral edge from the apex to a base vertex?',id:'Pada limas tegak beralas 2a×2b dan tinggi h, berapa panjang proyeksi rusuk samping dari puncak ke salah satu titik sudut alas?'}, choices:[{en:'a+b',id:'a+b'},{en:'√(a²+b²)',id:'√(a²+b²)'},{en:'2√(a²+b²)',id:'2√(a²+b²)'}], hints:{en:['The apex projects to the centre of the rectangle. Use centre-to-vertex distance.'],id:['Puncak diproyeksikan ke pusat persegi panjang. Gunakan jarak pusat ke titik sudut.']}, feedback:{en:'Yes: the half-dimensions a and b form the base right triangle.',id:'Ya: setengah dimensi alas, yaitu a dan b, membentuk segitiga siku-siku pada alas.'}},
      advanced:{type:'choice', answer:2, paper:'Paper 3', prompt:{en:'In a moving-point pyramid problem, why can one prescribed inclination sometimes occur at two positions?',id:'Pada soal limas dengan titik bergerak, mengapa satu sudut kemiringan tertentu kadang-kadang muncul pada dua posisi?'}, choices:[{en:'Because inverse tangent always has two positive outputs.',id:'Karena invers tangen selalu memiliki dua hasil positif.'},{en:'Because the pyramid has two different heights.',id:'Karena limas memiliki dua tinggi yang berbeda.'},{en:'Because the projection distance is symmetric about the midpoint of the base edge.',id:'Karena jarak proyeksi simetris terhadap titik tengah sisi alas.'}], hints:{en:['Think about positions equally far from the midpoint.'],id:['Pikirkan dua posisi yang berjarak sama dari titik tengah.']}, feedback:{en:'Exactly: symmetric projection distances give the same inclination.',id:'Tepat: jarak proyeksi yang simetris menghasilkan sudut kemiringan yang sama.'}}
    },
    reasoning:{
      core:{type:'choice', answer:1, prompt:{en:'A perspective drawing makes two edges look perpendicular. What should you check before using Pythagoras?',id:'Pada gambar perspektif, dua rusuk tampak saling tegak lurus. Apa yang harus diperiksa sebelum menggunakan Pythagoras?'}, choices:[{en:'Whether the picture looks neat.',id:'Apakah gambarnya terlihat rapi.'},{en:'Whether a mathematical fact actually guarantees a 90° angle.',id:'Apakah ada fakta matematis yang benar-benar menjamin sudut 90°.'},{en:'Whether the solid is drawn in blue.',id:'Apakah bangunnya digambar dengan warna biru.'}], hints:{en:['Perspective appearance is not proof.'],id:['Tampilan perspektif bukan bukti.']}, feedback:{en:'Correct: use stated structure, not appearance.',id:'Benar: gunakan struktur yang dinyatakan, bukan sekadar tampilan.'}},
      challenge:{type:'choice', answer:0, prompt:{en:'A student reaches a correct intermediate base diagonal and stops, even though the question asks for a line–plane angle. What is the reasoning error?',id:'Seorang siswa mendapatkan diagonal alas yang benar lalu berhenti, padahal soal meminta sudut garis–bidang. Apa kesalahan penalarannya?'}, choices:[{en:'They have mistaken an intermediate quantity for the final target.',id:'Ia menganggap besaran antara sebagai target akhir.'},{en:'They should never calculate a diagonal.',id:'Ia seharusnya tidak pernah menghitung diagonal.'},{en:'They should round earlier.',id:'Ia seharusnya membulatkan lebih awal.'}], hints:{en:['Return to the original target and ask what the diagonal was meant to unlock.'],id:['Kembali ke target awal dan tanyakan: diagonal itu sebenarnya dipakai untuk membuka langkah apa?']}, feedback:{en:'Exactly: dependency planning must keep the final target visible.',id:'Tepat: saat merencanakan rantai langkah, target akhir harus tetap jelas.'}},
      advanced:{type:'choice', answer:2, prompt:{en:'When comparing two valid solution routes, what is the best criterion?',id:'Saat membandingkan dua cara penyelesaian yang sama-sama benar, kriteria terbaiknya apa?'}, choices:[{en:'Always choose the route with the fewest written lines.',id:'Selalu pilih cara dengan baris paling sedikit.'},{en:'Always choose coordinates.',id:'Selalu pilih koordinat.'},{en:'Choose the route that makes the geometry and justification clearest.',id:'Pilih cara yang membuat struktur geometri dan alasannya paling jelas.'}], hints:{en:['Efficiency matters, but clarity of the mathematical structure matters more.'],id:['Efisiensi penting, tetapi kejelasan struktur matematika lebih penting.']}, feedback:{en:'Yes: a clean representation and valid justification are the priority.',id:'Ya: representasi yang jelas dan alasan yang sah adalah prioritas.'}}
    },
    ceiling:{
      core:{type:'choice', answer:1, prompt:{en:'In a square pyramid with a point P moving along one base edge, where is the inclination of SP largest?',id:'Pada limas persegi dengan titik P bergerak sepanjang salah satu sisi alas, di mana sudut kemiringan SP paling besar?'}, choices:[{en:'At either endpoint.',id:'Di salah satu titik ujung.'},{en:'At the midpoint of the edge.',id:'Di titik tengah sisi.'},{en:'It is constant.',id:'Sudutnya selalu sama.'}], hints:{en:['The angle grows when the horizontal projection OP becomes shorter.','Where is a point on the edge closest to the centre O?'],id:['Sudut membesar ketika proyeksi mendatar OP menjadi lebih pendek.','Titik pada sisi mana yang paling dekat dengan pusat O?']}, feedback:{en:'Correct: OP is shortest at the midpoint, so the inclination is greatest there.',id:'Benar: OP paling pendek di titik tengah, sehingga sudut kemiringannya paling besar di sana.'}},
      challenge:{type:'choice', answer:0, prompt:{en:'Why is the function tan θ(t)=h/√(a²+(t−a)²) symmetric about t=a?',id:'Mengapa fungsi tan θ(t)=h/√(a²+(t−a)²) simetris terhadap t=a?'}, choices:[{en:'Because (t−a)² has the same value for equal offsets on either side of a.',id:'Karena (t−a)² bernilai sama untuk jarak yang sama di kedua sisi a.'},{en:'Because tangent is always symmetric.',id:'Karena fungsi tangen selalu simetris.'},{en:'Because h changes with t.',id:'Karena h berubah terhadap t.'}], hints:{en:['Compare t=a−d and t=a+d.'],id:['Bandingkan t=a−d dan t=a+d.']}, feedback:{en:'Exactly: the squared offset creates geometric symmetry.',id:'Tepat: kuadrat dari selisih posisi menghasilkan simetri geometri.'}},
      advanced:{type:'choice', answer:2, paper:'Paper 3', prompt:{en:'For a prescribed angle γ in the moving-point investigation, what determines whether there are two positions, one position, or no positions?',id:'Untuk sudut tertentu γ pada investigasi titik bergerak, apa yang menentukan apakah ada dua posisi, satu posisi, atau tidak ada posisi?'}, choices:[{en:'Whether γ is written in degrees or radians.',id:'Apakah γ ditulis dalam derajat atau radian.'},{en:'Whether the base side is an integer.',id:'Apakah sisi alas berupa bilangan bulat.'},{en:'Whether γ lies inside, at the boundary of, or outside the achievable inclination range.',id:'Apakah γ berada di dalam, tepat pada batas, atau di luar rentang sudut kemiringan yang mungkin.'}], hints:{en:['The geometry has a minimum inclination at the endpoints and a maximum at the midpoint.'],id:['Geometri memiliki sudut minimum di titik ujung dan sudut maksimum di titik tengah.']}, feedback:{en:'Exactly: existence and multiplicity come from the achievable angular range.',id:'Tepat: keberadaan dan banyaknya solusi ditentukan oleh rentang sudut yang dapat dicapai.'}}
    }
  };


  const EXTRA_BANK = {
    cross:{
      core:[
        {key:'A1-body-diagonal',type:'number',answer:133,tolerance:.001,variation:{en:'Hidden body diagonal chain',id:'Rantai diagonal ruang tersembunyi'},family:{en:'Family A — hidden cross-section',id:'Keluarga A — penampang tersembunyi'},prompt:{en:'A cuboid has AB=4, BC=6 and AE=9, with G opposite A. After choosing the correct base projection, calculate AG².',id:'Sebuah balok memiliki AB=4, BC=6, dan AE=9, dengan G berseberangan dengan A. Setelah memilih proyeksi alas yang benar, hitung AG².'},hints:{en:['Which base segment is the projection of AG?','First find AC²=4²+6², then combine AC with the vertical height 9.'],id:['Ruas alas mana yang merupakan proyeksi AG?','Cari dulu AC²=4²+6², lalu gabungkan AC dengan tinggi tegak 9.']},feedback:{en:'AG²=AC²+9²=(4²+6²)+9².',id:'AG²=AC²+9²=(4²+6²)+9².'},visual:{kind:'cuboid',dims:{w:4,d:6,h:9}}}
      ],
      challenge:[
        {key:'A2-triangular-prism',type:'number',answer:37.5,tolerance:.2,paper:'Paper 2',variation:{en:'Changed base representation',id:'Representasi alas berubah'},family:{en:'Family A — triangular prism projection',id:'Keluarga A — proyeksi prisma segitiga'},prompt:{en:'A right triangular prism has AB=5, BC=7, ∠ABC=120°, and A′ is 8 units vertically above A. Find the angle between A′C and the base plane, in degrees.',id:'Sebuah prisma segitiga tegak memiliki AB=5, BC=7, ∠ABC=120°, dan A′ berada 8 satuan tepat di atas A. Tentukan sudut antara A′C dan bidang alas, dalam derajat.'},hints:{en:['Do not start with trigonometry in 3D. What is the projection of A′C?','Use the cosine rule in the base to find AC, then use tan θ=8/AC.'],id:['Jangan langsung memakai trigonometri pada gambar 3D. Apa proyeksi A′C?','Gunakan aturan cosinus pada alas untuk mencari AC, lalu gunakan tan θ=8/AC.']},feedback:{en:'The chain is base cosine rule → AC → projection → line–plane angle.',id:'Urutannya: aturan cosinus pada alas → AC → proyeksi → sudut garis–bidang.'},visual:{kind:'triPrism',AB:5,BC:7,angle:120,height:8},plan:{prompt:{en:'What must be found before the inclination can be calculated?',id:'Apa yang harus dicari sebelum sudut kemiringan dapat dihitung?'},choices:[{en:'The projection AC',id:'Proyeksi AC'},{en:'The prism volume',id:'Volume prisma'},{en:'A face area',id:'Luas salah satu sisi'}],answer:0}}
      ],
      advanced:[
        {key:'A3-valid-construction',type:'choice',answer:1,variation:{en:'Repair a non-coplanar argument',id:'Perbaiki argumen yang tidak sebidang'},family:{en:'Family A — coplanarity diagnosis',id:'Keluarga A — diagnosis kesebidangan'},prompt:{en:'In a cuboid, which two-stage construction correctly determines the body diagonal AG?',id:'Pada sebuah balok, konstruksi dua tahap mana yang benar untuk menentukan diagonal ruang AG?'},choices:[{en:'Use AB and CG directly as the legs of a right triangle with hypotenuse AG.',id:'Gunakan AB dan CG langsung sebagai kaki segitiga siku-siku dengan AG sebagai hipotenusa.'},{en:'Find base diagonal AC from AB and BC, then use right triangle ACG to find AG.',id:'Cari diagonal alas AC dari AB dan BC, lalu gunakan segitiga siku-siku ACG untuk mencari AG.'},{en:'Use any horizontal edge and any vertical edge because they are perpendicular.',id:'Gunakan sembarang rusuk mendatar dan rusuk tegak karena keduanya saling tegak lurus.'}],hints:{en:['Each triangle must consist of segments that actually meet in one plane.','The first triangle should live in the base; the second should contain AG.'],id:['Setiap segitiga harus terdiri dari ruas-ruas yang benar-benar bertemu dalam satu bidang.','Segitiga pertama berada pada alas; segitiga kedua harus memuat AG.']},feedback:{en:'Correct: AB,BC → AC inside the base, then AC,CG → AG inside plane ACG.',id:'Benar: AB,BC → AC pada alas, lalu AC,CG → AG pada bidang ACG.'},misconceptions:[{en:'AB and CG do not meet, so they are not two sides of one triangle.',id:'AB dan CG tidak bertemu, jadi keduanya bukan dua sisi dari satu segitiga.'},null,{en:'Perpendicular directions alone are not enough; the segments must form one planar triangle.',id:'Arah yang saling tegak lurus belum cukup; ruas-ruasnya harus membentuk satu segitiga sebidang.'}]}
      ]
    },
    coord:{
      core:[
        {key:'A4-midpoint',type:'choice',answer:1,paper:'Paper 1',variation:{en:'Coordinate midpoint',id:'Titik tengah koordinat'},family:{en:'Family A — coordinate distance',id:'Keluarga A — jarak koordinat'},prompt:{en:'For A=(−2,1,4) and B=(4,−3,13), which point is the midpoint of AB?',id:'Untuk A=(−2,1,4) dan B=(4,−3,13), titik manakah yang merupakan titik tengah AB?'},choices:[{en:'(2, −2, 9)',id:'(2, −2, 9)'},{en:'(1, −1, 17/2)',id:'(1, −1, 17/2)'},{en:'(1, −2, 17/2)',id:'(1, −2, 17/2)'}],hints:{en:['Average each coordinate separately.','For the z-coordinate, average 4 and 13.'],id:['Ambil rata-rata setiap koordinat secara terpisah.','Untuk koordinat z, ambil rata-rata 4 dan 13.']},feedback:{en:'The midpoint averages x, y and z independently.',id:'Titik tengah diperoleh dengan merata-ratakan x, y, dan z secara terpisah.'}}
      ],
      challenge:[
        {key:'A4-distance-exact',type:'choice',answer:2,paper:'Paper 1',variation:{en:'Exact 3D distance',id:'Jarak 3D eksak'},family:{en:'Family A — coordinate distance',id:'Keluarga A — jarak koordinat'},prompt:{en:'For A=(−2,1,4) and B=(4,−3,13), what is the exact distance AB?',id:'Untuk A=(−2,1,4) dan B=(4,−3,13), berapakah jarak eksak AB?'},choices:[{en:'11',id:'11'},{en:'√117',id:'√117'},{en:'√133',id:'√133'}],hints:{en:['The coordinate differences are 6, −4 and 9.','Keep the sum of squares exact before taking the square root.'],id:['Selisih koordinatnya adalah 6, −4, dan 9.','Pertahankan jumlah kuadrat dalam bentuk eksak sebelum mengambil akar.']},feedback:{en:'AB=√(6²+(−4)²+9²)=√133.',id:'AB=√(6²+(−4)²+9²)=√133.'}}
      ],
      advanced:[
        {key:'coord-structure',type:'choice',answer:0,variation:{en:'Repeated-Pythagoras explanation',id:'Penjelasan Pythagoras berulang'},family:{en:'Coordinate bridge',id:'Jembatan koordinat'},prompt:{en:'Which construction best explains why √(p²+q²+r²) is a 3D distance?',id:'Konstruksi mana yang paling tepat menjelaskan mengapa √(p²+q²+r²) merupakan jarak 3D?'},choices:[{en:'First form a plane diagonal √(p²+q²), then combine it perpendicularly with r.',id:'Bentuk dulu diagonal bidang √(p²+q²), lalu gabungkan secara tegak lurus dengan r.'},{en:'Add the three signed coordinate changes, then take a square root.',id:'Jumlahkan tiga perubahan koordinat bertanda, lalu ambil akar.'},{en:'Use the midpoint formula twice.',id:'Gunakan rumus titik tengah dua kali.'}],hints:{en:['Build one right triangle, then a second right triangle in a perpendicular direction.'],id:['Bangun satu segitiga siku-siku, lalu segitiga siku-siku kedua pada arah yang tegak lurus.']},feedback:{en:'Exactly: the formula is two linked applications of Pythagoras.',id:'Tepat: rumus tersebut berasal dari dua penerapan Pythagoras yang saling terhubung.'}}
      ]
    },
    proj:{
      core:[
        {key:'B1-square-pyramid-angle',type:'number',answer:50.5,tolerance:.2,variation:{en:'Projection to the base centre',id:'Proyeksi ke pusat alas'},family:{en:'Family B — line–plane angle',id:'Keluarga B — sudut garis–bidang'},prompt:{en:'A right square pyramid has base side 14 and vertical height SO=12. Find the angle between lateral edge SA and the base plane, in degrees.',id:'Sebuah limas persegi tegak memiliki sisi alas 14 dan tinggi SO=12. Tentukan sudut antara rusuk samping SA dan bidang alas, dalam derajat.'},hints:{en:['The projection of SA is AO, not a base edge.','AO is half of the square diagonal: AO=7√2.'],id:['Proyeksi SA adalah AO, bukan salah satu sisi alas.','AO adalah setengah diagonal persegi: AO=7√2.']},feedback:{en:'Use tan θ=12/(7√2).',id:'Gunakan tan θ=12/(7√2).'},visual:{kind:'squarePyramid',base:14,height:12}}
      ],
      challenge:[
        {key:'B4-reverse-line-plane',type:'number',answer:9.10,tolerance:.05,paper:'Paper 2',variation:{en:'Reverse line–plane geometry',id:'Geometri garis–bidang terbalik'},family:{en:'Family B — reverse projection',id:'Keluarga B — proyeksi terbalik'},prompt:{en:'A cuboid has base dimensions 5×12. Its body diagonal makes an angle of 35° with the base plane. Find the cuboid height.',id:'Sebuah balok memiliki alas 5×12. Diagonal ruangnya membentuk sudut 35° terhadap bidang alas. Tentukan tinggi balok.'},hints:{en:['The body diagonal projects to the base diagonal.','The base diagonal is 13, so tan35°=h/13.'],id:['Diagonal ruang diproyeksikan menjadi diagonal alas.','Diagonal alasnya 13, sehingga tan35°=h/13.']},feedback:{en:'The projection length is 13, giving h=13 tan35°.',id:'Panjang proyeksinya 13, sehingga h=13 tan35°.'},visual:{kind:'cuboidReverse',w:5,d:12,angle:35},plan:{prompt:{en:'Which base length belongs in the tangent ratio?',id:'Panjang pada alas mana yang masuk ke perbandingan tangen?'},choices:[{en:'5',id:'5'},{en:'12',id:'12'},{en:'The base diagonal 13',id:'Diagonal alas 13'}],answer:2}}
      ],
      advanced:[
        {key:'B3-projection-definition',type:'choice',answer:2,variation:{en:'Repair the angle definition',id:'Perbaiki definisi sudut'},family:{en:'Family B — error diagnosis',id:'Keluarga B — diagnosis kesalahan'},prompt:{en:'In a right square pyramid, a student says ∠SAB is the line–plane angle because AB lies in the base. What should replace AB in the angle?',id:'Pada limas persegi tegak, seorang siswa mengatakan ∠SAB adalah sudut garis–bidang karena AB berada pada alas. Garis apa yang harus menggantikan AB pada sudut tersebut?'},choices:[{en:'Any diagonal of the base',id:'Sembarang diagonal alas'},{en:'SO, the vertical height',id:'SO, tinggi tegak'},{en:'AO, the orthogonal projection of SA',id:'AO, proyeksi tegak lurus SA'}],hints:{en:['The in-plane ray must be tied specifically to SA by perpendicular projection.'],id:['Sinar pada bidang harus terkait langsung dengan SA melalui proyeksi tegak lurus.']},feedback:{en:'The correct angle is ∠SAO because AO is the projection of SA.',id:'Sudut yang benar adalah ∠SAO karena AO merupakan proyeksi SA.'},visual:{kind:'squarePyramid',base:10,height:12}}
      ]
    },
    pyramid:{
      core:[
        {key:'C1-midpoint-projection',type:'number',answer:7,tolerance:.001,variation:{en:'Endpoint diagnostic',id:'Diagnosis titik ujung'},family:{en:'Family C — which length is which?',id:'Keluarga C — panjang yang mana?'},prompt:{en:'A right rectangular pyramid has base 20×14. M is the midpoint of a side of length 20 and O is the base centre. Find OM.',id:'Sebuah limas tegak beralas persegi panjang 20×14. M adalah titik tengah sisi yang panjangnya 20 dan O adalah pusat alas. Tentukan OM.'},hints:{en:['M lies on the middle of the 20-unit side. Which half-dimension separates that side from the centre?'],id:['M berada di tengah sisi yang panjangnya 20. Setengah dimensi mana yang memisahkan sisi itu dari pusat?']},feedback:{en:'OM is half of the other base dimension: 14/2=7.',id:'OM adalah setengah dari dimensi alas yang lain: 14/2=7.'},visual:{kind:'rectPyramid',length:20,width:14,height:24,target:'SM'}}
      ],
      challenge:[
        {key:'C2-hidden-height',type:'choice',answer:1,paper:'Paper 1',variation:{en:'Height hidden in lateral-edge data',id:'Tinggi tersembunyi dalam data rusuk samping'},family:{en:'Family C — reconstruct the spatial triangle',id:'Keluarga C — bangun kembali segitiga spasial'},prompt:{en:'A right square pyramid has base side 12 and lateral edge 13. What is the exact vertical height?',id:'Sebuah limas persegi tegak memiliki sisi alas 12 dan rusuk samping 13. Berapakah tinggi tegaknya secara eksak?'},choices:[{en:'√61',id:'√61'},{en:'√97',id:'√97'},{en:'11',id:'11'}],hints:{en:['The lateral edge projects from a base vertex to the centre.','Centre-to-vertex distance in a 12×12 square is 6√2.'],id:['Rusuk samping diproyeksikan dari titik sudut alas ke pusat.','Jarak pusat ke titik sudut pada persegi 12×12 adalah 6√2.']},feedback:{en:'13²=h²+(6√2)², so h=√97.',id:'13²=h²+(6√2)², sehingga h=√97.'},visual:{kind:'squarePyramidLateral',base:12,lateral:13}}
      ],
      advanced:[
        {key:'C4-symbolic-height',type:'choice',answer:0,paper:'Paper 1',variation:{en:'Symbolic pyramid relation',id:'Hubungan simbolik pada limas'},family:{en:'Family C — symbolic geometry',id:'Keluarga C — geometri simbolik'},prompt:{en:'A right square pyramid has base side 2a. Its slant height to a side midpoint makes angle φ with the base. Which expression gives the vertical height h?',id:'Sebuah limas persegi tegak memiliki sisi alas 2a. Tinggi sisinya menuju titik tengah salah satu sisi alas membentuk sudut φ terhadap alas. Ekspresi mana yang menyatakan tinggi tegak h?'},choices:[{en:'h=a tanφ',id:'h=a tanφ'},{en:'h=a√2 tanφ',id:'h=a√2 tanφ'},{en:'h=2a tanφ',id:'h=2a tanφ'}],hints:{en:['The projection of the slant height reaches the midpoint of a base side.','From the base centre to that midpoint, the distance is a.'],id:['Proyeksi tinggi sisi berakhir di titik tengah salah satu sisi alas.','Dari pusat alas ke titik tengah tersebut, jaraknya a.']},feedback:{en:'In the relevant right triangle, tanφ=h/a.',id:'Pada segitiga siku-siku yang relevan, tanφ=h/a.'}}
      ]
    },
    trig:{
      core:[
        {key:'trig-cuboid-two-stage',type:'number',answer:51.3,tolerance:.2,variation:{en:'Two-stage hidden triangle',id:'Segitiga tersembunyi dua tahap'},family:{en:'Family A — hidden spatial distance',id:'Keluarga A — jarak spasial tersembunyi'},prompt:{en:'A cuboid has side lengths 4, 6 and 9. Find the angle between its body diagonal and the base plane, in degrees.',id:'Sebuah balok memiliki panjang sisi 4, 6, dan 9. Tentukan sudut antara diagonal ruang dan bidang alas, dalam derajat.'},hints:{en:['Find the base diagonal first.','The projection length is √(4²+6²)=2√13; then use tanθ=9/(2√13).'],id:['Cari diagonal alas terlebih dahulu.','Panjang proyeksinya √(4²+6²)=2√13; lalu gunakan tanθ=9/(2√13).']},feedback:{en:'The spatial angle comes from a 2D right triangle containing the body diagonal and its base projection.',id:'Sudut spasial berasal dari segitiga siku-siku 2D yang memuat diagonal ruang dan proyeksinya pada alas.'},visual:{kind:'cuboid',dims:{w:4,d:6,h:9}}}
      ],
      challenge:[
        {key:'A2-trig-chain',type:'number',answer:37.5,tolerance:.2,paper:'Paper 2',variation:{en:'Cosine-rule projection chain',id:'Rantai proyeksi dengan aturan cosinus'},family:{en:'Family A — changed base representation',id:'Keluarga A — representasi alas berubah'},prompt:{en:'A triangular prism has AB=5, BC=7, ∠ABC=120°, and A′ is 8 units above A. Find the angle between A′C and the base plane.',id:'Sebuah prisma segitiga memiliki AB=5, BC=7, ∠ABC=120°, dan A′ berada 8 satuan di atas A. Tentukan sudut antara A′C dan bidang alas.'},hints:{en:['The projection is AC, but AC is not given.','Use the cosine rule first, then right-triangle tangent.'],id:['Proyeksinya adalah AC, tetapi AC belum diketahui.','Gunakan aturan cosinus terlebih dahulu, lalu tangen pada segitiga siku-siku.']},feedback:{en:'This is a dependency chain: cosine rule → projection length → spatial angle.',id:'Ini adalah urutan besaran: aturan cosinus → panjang proyeksi → sudut spasial.'},visual:{kind:'triPrism',AB:5,BC:7,angle:120,height:8}}
      ],
      advanced:[
        {key:'trig-route-choice',type:'choice',answer:1,variation:{en:'Choose the representation',id:'Pilih representasi'},family:{en:'Multiple solution routes',id:'Beberapa cara penyelesaian'},prompt:{en:'A spatial target can be solved either by coordinates or by a clean cross-section. Which principle should guide the choice?',id:'Sebuah target spasial dapat diselesaikan dengan koordinat atau dengan penampang yang jelas. Prinsip apa yang sebaiknya digunakan untuk memilih cara?'},choices:[{en:'Always use coordinates in 3D.',id:'Selalu gunakan koordinat untuk soal 3D.'},{en:'Use the representation that makes the geometry and justification clearest.',id:'Gunakan representasi yang membuat geometri dan alasannya paling jelas.'},{en:'Use whichever method has the longest calculation.',id:'Gunakan cara yang perhitungannya paling panjang.'}],hints:{en:['The lesson prioritizes seeing the valid geometry, not a fixed technique.'],id:['Pelajaran ini menekankan melihat geometri yang sah, bukan memakai satu teknik tetap.']},feedback:{en:'Correct: choose the route that exposes the structure cleanly and can be justified.',id:'Benar: pilih cara yang menampilkan struktur dengan jelas dan dapat dijustifikasi.'}}
      ]
    },
    chain:{
      core:[
        {key:'D1-cuboid-pyramid',type:'number',answer:244,tolerance:.001,variation:{en:'Composite projection chain',id:'Rantai proyeksi bangun gabungan'},family:{en:'Family D — cuboid plus pyramid',id:'Keluarga D — balok plus limas'},prompt:{en:'A cuboid has base 12×16 and height 5. A right rectangular pyramid sits on top with apex 7 units above the top-face centre. From a lower base vertex A to the apex S, calculate AS².',id:'Sebuah balok memiliki alas 12×16 dan tinggi 5. Di atasnya terdapat limas tegak dengan puncak 7 satuan di atas pusat sisi atas. Dari titik sudut alas bawah A ke puncak S, hitung AS².'},hints:{en:['The horizontal projection from A to the centre has length √(6²+8²).','The total vertical rise is 5+7.'],id:['Proyeksi mendatar dari A ke pusat panjangnya √(6²+8²).','Kenaikan vertikal totalnya 5+7.']},feedback:{en:'Projection=10 and vertical rise=12, so AS²=10²+12².',id:'Proyeksi=10 dan kenaikan vertikal=12, sehingga AS²=10²+12².'},visual:{kind:'composite',w:12,d:16,h:5,ph:7}}
      ],
      challenge:[
        {key:'D2-midpoint-space',type:'number',answer:32.5,tolerance:.2,variation:{en:'Internal point instead of opposite vertex',id:'Titik dalam, bukan titik sudut berseberangan'},family:{en:'Family D — midpoint in space',id:'Keluarga D — titik tengah dalam ruang'},prompt:{en:'A cuboid has dimensions 10×8×6. A=(0,0,0), and P is the midpoint of the opposite top edge from (0,8,6) to (10,8,6). Find the angle between AP and the base plane, in degrees.',id:'Sebuah balok berukuran 10×8×6. A=(0,0,0), dan P adalah titik tengah rusuk atas yang berseberangan dari (0,8,6) ke (10,8,6). Tentukan sudut antara AP dan bidang alas, dalam derajat.'},hints:{en:['First find P.','P=(5,8,6); its horizontal projection from A has length √(5²+8²).'],id:['Cari P terlebih dahulu.','P=(5,8,6); panjang proyeksi mendatarnya dari A adalah √(5²+8²).']},feedback:{en:'Use tanθ=6/√89.',id:'Gunakan tanθ=6/√89.'},plan:{prompt:{en:'What is the first dependency?',id:'Apa langkah pertama yang diperlukan?'},choices:[{en:'Find the midpoint P',id:'Cari titik tengah P'},{en:'Find the total surface area',id:'Cari luas permukaan total'},{en:'Choose a base edge at random',id:'Pilih sembarang rusuk alas'}],answer:0}}
      ],
      advanced:[
        {key:'D4-projection-reason',type:'choice',answer:2,paper:'Paper 2',variation:{en:'Reject irrelevant base diagonal',id:'Tolak diagonal alas yang tidak relevan'},family:{en:'Family D — exam chain',id:'Keluarga D — rantai soal'},prompt:{en:'In the composite prism–pyramid chain, why is using the full base diagonal as the projection of AS incorrect?',id:'Pada rantai soal prisma–limas, mengapa menggunakan diagonal alas penuh sebagai proyeksi AS itu salah?'},choices:[{en:'A base diagonal can never be used in 3D geometry.',id:'Diagonal alas tidak pernah boleh digunakan dalam geometri 3D.'},{en:'The full diagonal is too long to appear in any triangle.',id:'Diagonal penuh terlalu panjang untuk muncul dalam segitiga apa pun.'},{en:'The apex projects to the base centre, not to the opposite base vertex.',id:'Puncak diproyeksikan ke pusat alas, bukan ke titik sudut alas yang berseberangan.'}],hints:{en:['Projection endpoints are determined by perpendicular projection, not by whichever segment is longest.'],id:['Titik ujung proyeksi ditentukan oleh proyeksi tegak lurus, bukan oleh ruas mana yang paling panjang.']},feedback:{en:'Correct: the projection must end at the foot of the apex, which is the centre.',id:'Benar: proyeksi harus berakhir pada titik jatuh puncak, yaitu pusat.'}}
      ]
    },
    reverse:{
      core:[
        {key:'B4-reverse-height',type:'number',answer:9.10,tolerance:.05,paper:'Paper 2',variation:{en:'Angle → height',id:'Sudut → tinggi'},family:{en:'Reverse line–plane geometry',id:'Geometri garis–bidang terbalik'},prompt:{en:'A cuboid has base 5×12 and its body diagonal makes a 35° angle with the base. Find the height.',id:'Sebuah balok memiliki alas 5×12 dan diagonal ruangnya membentuk sudut 35° terhadap alas. Tentukan tingginya.'},hints:{en:['Find the projection length first.','The base diagonal is 13, so h=13 tan35°.'],id:['Cari panjang proyeksi terlebih dahulu.','Diagonal alasnya 13, sehingga h=13 tan35°.']},feedback:{en:'Reverse problems still use the same projection triangle; only the unknown changes.',id:'Soal terbalik tetap memakai segitiga proyeksi yang sama; hanya besaran yang dicari yang berubah.'},visual:{kind:'cuboidReverse',w:5,d:12,angle:35}}
      ],
      challenge:[
        {key:'E2-rect-pyramid-h',type:'choice',answer:1,paper:'Paper 1',variation:{en:'Parameterize the projection',id:'Nyatakan proyeksi dengan parameter'},family:{en:'Family E — rectangular pyramid generalization',id:'Keluarga E — generalisasi limas persegi panjang'},prompt:{en:'A right rectangular pyramid has base 2a×2b. A lateral edge makes angle θ with the base. Which expression gives the vertical height h?',id:'Sebuah limas tegak beralas 2a×2b. Sebuah rusuk samping membentuk sudut θ terhadap alas. Ekspresi mana yang menyatakan tinggi tegak h?'},choices:[{en:'(a+b)tanθ',id:'(a+b)tanθ'},{en:'√(a²+b²)tanθ',id:'√(a²+b²)tanθ'},{en:'2√(a²+b²)tanθ',id:'2√(a²+b²)tanθ'}],hints:{en:['The apex projects to the centre, so the lateral-edge projection is centre-to-vertex distance.'],id:['Puncak diproyeksikan ke pusat, sehingga proyeksi rusuk samping adalah jarak pusat ke titik sudut.']},feedback:{en:'The projection is √(a²+b²), hence h=√(a²+b²)tanθ.',id:'Panjang proyeksinya √(a²+b²), sehingga h=√(a²+b²)tanθ.'}}
      ],
      advanced:[
        {key:'E3-existence',type:'choice',answer:0,paper:'Paper 3',variation:{en:'Existence and multiplicity',id:'Keberadaan dan banyaknya solusi'},family:{en:'Family E — moving-point investigation',id:'Keluarga E — investigasi titik bergerak'},prompt:{en:'For the moving point P on BC, let α be the endpoint inclination and β the maximum midpoint inclination. Which condition gives exactly one position for a prescribed angle γ?',id:'Untuk titik P yang bergerak pada BC, misalkan α adalah sudut di titik ujung dan β adalah sudut maksimum di titik tengah. Kondisi mana yang menghasilkan tepat satu posisi untuk sudut γ tertentu?'},choices:[{en:'γ=β',id:'γ=β'},{en:'α<γ<β',id:'α<γ<β'},{en:'γ<α',id:'γ<α'}],hints:{en:['Interior achievable angles occur in symmetric pairs. Which angle occurs only at the symmetry centre?'],id:['Sudut yang dapat dicapai di bagian dalam muncul berpasangan secara simetris. Sudut mana yang hanya muncul di pusat simetri?']},feedback:{en:'The maximum inclination β occurs only at the midpoint, so γ=β gives one position.',id:'Sudut maksimum β hanya terjadi di titik tengah, sehingga γ=β menghasilkan satu posisi.'}}
      ]
    },
    reasoning:{
      core:[
        {key:'error-slant-lateral',type:'choice',answer:1,variation:{en:'Endpoint check',id:'Cek titik ujung'},family:{en:'Error D — slant height vs lateral edge',id:'Kesalahan D — tinggi sisi vs rusuk samping'},prompt:{en:'What is the fastest structural check for distinguishing a slant height from a lateral edge in a right pyramid?',id:'Apa pemeriksaan struktur tercepat untuk membedakan tinggi sisi dan rusuk samping pada limas tegak?'},choices:[{en:'Compare their colours in the drawing.',id:'Bandingkan warnanya pada gambar.'},{en:'Check whether the segment ends at a side midpoint or a base vertex.',id:'Periksa apakah ruas berakhir di titik tengah sisi atau di titik sudut alas.'},{en:'Choose the longer-looking segment.',id:'Pilih ruas yang tampak lebih panjang.'}],hints:{en:['The lesson recommends using endpoints as a diagnostic.'],id:['Materi menyarankan menggunakan titik ujung sebagai cara diagnosis.']},feedback:{en:'Correct: the endpoint often identifies the segment before any calculation.',id:'Benar: titik ujung sering kali sudah menentukan jenis ruas sebelum perhitungan apa pun.'}}
      ],
      challenge:[
        {key:'error-noncoplanar',type:'choice',answer:2,variation:{en:'Non-coplanar triangle diagnosis',id:'Diagnosis segitiga yang tidak sebidang'},family:{en:'Error C — non-coplanar triangle',id:'Kesalahan C — segitiga tidak sebidang'},prompt:{en:'Before applying a triangle theorem to three spatial segments, what must be checked?',id:'Sebelum menerapkan teorema segitiga pada tiga ruas di ruang, apa yang harus diperiksa?'},choices:[{en:'That all three lengths are integers.',id:'Bahwa ketiga panjang merupakan bilangan bulat.'},{en:'That the drawing makes them look connected.',id:'Bahwa pada gambar ketiganya tampak tersambung.'},{en:'That one plane contains the three segments as the boundary of one triangle.',id:'Bahwa satu bidang memuat ketiga ruas sebagai batas satu segitiga.'}],hints:{en:['Perspective can make unrelated segments look close.'],id:['Perspektif dapat membuat ruas yang tidak berkaitan tampak berdekatan.']},feedback:{en:'Exactly: triangle mathematics requires an actual planar triangle.',id:'Tepat: matematika segitiga membutuhkan segitiga yang benar-benar sebidang.'}}
      ],
      advanced:[
        {key:'error-rounding',type:'choice',answer:0,variation:{en:'Premature rounding diagnosis',id:'Diagnosis pembulatan terlalu awal'},family:{en:'Error F — exact vs approximate work',id:'Kesalahan F — nilai eksak vs pendekatan'},prompt:{en:'Why can replacing √67 by a rounded decimal too early weaken a multi-step spatial solution?',id:'Mengapa mengganti √67 dengan desimal pembulatan terlalu awal dapat melemahkan penyelesaian spasial bertahap?'},choices:[{en:'It can accumulate rounding error and hide the exact geometric structure.',id:'Hal itu dapat menumpuk kesalahan pembulatan dan menyamarkan struktur geometri eksak.'},{en:'Decimals cannot be used in trigonometry.',id:'Desimal tidak dapat digunakan dalam trigonometri.'},{en:'Exact values are always shorter to write.',id:'Nilai eksak selalu lebih pendek untuk ditulis.'}],hints:{en:['Think about both numerical accuracy and the visibility of where the quantity came from.'],id:['Pikirkan ketelitian numerik sekaligus kemudahan melihat asal besaran tersebut.']},feedback:{en:'Correct: retain exact intermediate quantities where practical, then round at the end.',id:'Benar: pertahankan nilai antara yang eksak selama masih praktis, lalu bulatkan di akhir.'}}
      ]
    },
    ceiling:{
      core:[
        {key:'F1-monotonic',type:'choice',answer:2,paper:'Paper 1',variation:{en:'Interpret a general relation',id:'Tafsirkan hubungan umum'},family:{en:'Family F — general cuboid relation',id:'Keluarga F — hubungan umum balok'},prompt:{en:'For a cuboid with fixed base dimensions a and b, why does the body-diagonal inclination θ increase when the height c increases?',id:'Untuk balok dengan dimensi alas a dan b tetap, mengapa sudut kemiringan diagonal ruang θ meningkat ketika tinggi c meningkat?'},choices:[{en:'Because the base projection also increases.',id:'Karena proyeksi pada alas juga meningkat.'},{en:'Because the body diagonal becomes horizontal.',id:'Karena diagonal ruang menjadi mendatar.'},{en:'Because tanθ=c/√(a²+b²) increases while the projection stays fixed.',id:'Karena tanθ=c/√(a²+b²) meningkat sementara proyeksinya tetap.'}],hints:{en:['Keep the base projection fixed and compare the vertical rise.'],id:['Pertahankan proyeksi alas tetap dan bandingkan kenaikan vertikalnya.']},feedback:{en:'Exactly: the denominator is fixed while c increases.',id:'Tepat: penyebut tetap sementara c meningkat.'}}
      ],
      challenge:[
        {key:'F1-sin-relation',type:'choice',answer:1,paper:'Paper 1',variation:{en:'Derive a second ratio',id:'Turunkan perbandingan kedua'},family:{en:'Family F — general cuboid relation',id:'Keluarga F — hubungan umum balok'},prompt:{en:'A cuboid has dimensions a,b,c and θ is the angle between its body diagonal and the a×b base. Which expression gives sinθ?',id:'Sebuah balok memiliki dimensi a,b,c dan θ adalah sudut antara diagonal ruang dengan alas a×b. Ekspresi mana yang menyatakan sinθ?'},choices:[{en:'c/√(a²+b²)',id:'c/√(a²+b²)'},{en:'c/√(a²+b²+c²)',id:'c/√(a²+b²+c²)'},{en:'√(a²+b²)/c',id:'√(a²+b²)/c'}],hints:{en:['For sine, identify the opposite side and the hypotenuse in the spatial right triangle.'],id:['Untuk sinus, tentukan sisi depan dan hipotenusa pada segitiga siku-siku spasial.']},feedback:{en:'The vertical height is opposite θ and the body diagonal is the hypotenuse.',id:'Tinggi tegak adalah sisi depan terhadap θ dan diagonal ruang adalah hipotenusa.'}}
      ],
      advanced:[
        {key:'F2-optimum',type:'number',answer:35.3,tolerance:.2,variation:{en:'Optimization ceiling',id:'Batas atas optimisasi'},family:{en:'Family F — fixed lateral edge',id:'Keluarga F — rusuk samping tetap'},prompt:{en:'For the maximum-volume right square pyramid with fixed lateral edge length L, what is the inclination of a lateral edge to the base, in degrees?',id:'Untuk limas persegi tegak bervolume maksimum dengan panjang rusuk samping L tetap, berapakah sudut kemiringan rusuk samping terhadap alas, dalam derajat?'},hints:{en:['This ceiling uses prior AA HL differentiation: the optimum occurs at a=L/√3 and h=L/√3.','At the optimum, the lateral-edge projection is a√2. Use tanθ=h/(a√2).'],id:['Bagian lanjutan ini menggunakan diferensiasi AA HL yang sudah dipelajari: optimum terjadi saat a=L/√3 dan h=L/√3.','Pada kondisi optimum, proyeksi rusuk samping adalah a√2. Gunakan tanθ=h/(a√2).']},feedback:{en:'At the optimum tanθ=1/√2, so θ≈35.3°.',id:'Pada kondisi optimum tanθ=1/√2, sehingga θ≈35.3°.'},plan:{prompt:{en:'Which result from the optimization must be used before the angle?',id:'Hasil optimisasi mana yang harus digunakan sebelum mencari sudut?'},choices:[{en:'The relation a=h=L/√3',id:'Hubungan a=h=L/√3'},{en:'The surface area of the base',id:'Luas permukaan alas'},{en:'A new vector formula',id:'Rumus vektor baru'}],answer:0}}
        ,{key:'F3-cube-optimum',type:'number',answer:35.3,tolerance:.2,paper:'Paper 3',variation:{en:'Fixed-volume cuboid synthesis',id:'Sintesis balok bervolume tetap'},family:{en:'Family F — parameterization & optimization',id:'Keluarga F — parameterisasi & optimisasi'},prompt:{en:'A closed cuboid with square base has fixed volume. At the minimum-surface-area configuration it is a cube. Find the angle between its body diagonal and the base, in degrees.',id:'Sebuah balok tertutup beralas persegi memiliki volume tetap. Pada konfigurasi luas permukaan minimum, bangun tersebut menjadi kubus. Tentukan sudut antara diagonal ruang dan alas, dalam derajat.'},hints:{en:['For a cube, the horizontal projection of a body diagonal is a face diagonal.','Use tanθ=side/(side√2)=1/√2.'],id:['Pada kubus, proyeksi mendatar diagonal ruang adalah diagonal sisi.','Gunakan tanθ=sisi/(sisi√2)=1/√2.']},feedback:{en:'The optimal angle is scale-independent because the optimal side ratios are 1:1:1.',id:'Sudut optimum tidak bergantung pada skala karena perbandingan sisi optimalnya 1:1:1.'}}
      ]
    }
  };

  function normalizeProblem(p,id,level,index){
    if(!p.key) p.key=`${id}-${level}-base`;
    if(!p.family) p.family=FAMILY_LABELS[id];
    if(!p.variation) p.variation={en:index===0?'Canonical starter':'Structural variation',id:index===0?'Soal pembuka kanonik':'Variasi struktur'};
    return p;
  }
  function poolFor(id,level=state.level){
    const base = PRACTICE[id]?.[level] ? [PRACTICE[id][level]] : [];
    const extra = EXTRA_BANK[id]?.[level] || [];
    return [...base,...extra].map((p,i)=>normalizeProblem(p,id,level,i));
  }
  function currentProblemIndex(id,level=state.level){
    state.problemCurrent[id]=state.problemCurrent[id]||{};
    const pool=poolFor(id,level);
    const raw=Number(state.problemCurrent[id][level]??0);
    const idx=Number.isInteger(raw)&&raw>=0&&raw<pool.length?raw:0;
    state.problemCurrent[id][level]=idx;
    return idx;
  }
  function historyFor(id,level=state.level){
    state.problemHistory[id]=state.problemHistory[id]||{};
    if(!Array.isArray(state.problemHistory[id][level])) state.problemHistory[id][level]=[];
    return state.problemHistory[id][level];
  }
  function problemKey(id,p){ return `${id}|${state.level}|${p.key}`; }
  function changeProblem(id,forcedIndex=null){
    const pool=poolFor(id,state.level); if(pool.length<2 && forcedIndex==null) return;
    const current=currentProblemIndex(id,state.level); const hist=historyFor(id,state.level);
    let next;
    if(forcedIndex!=null){ next=Math.max(0,Math.min(pool.length-1,Number(forcedIndex))); }
    else {
      const cur=pool[current];
      const order=Array.from({length:pool.length-1},(_,k)=>(current+1+k)%pool.length);
      next=order.find(i=>pool[i].variation?.en!==cur.variation?.en) ?? order[0] ?? current;
    }
    if(next===current) return;
    hist.push(current); if(hist.length>12) hist.shift();
    state.problemCurrent[id][state.level]=next; save(); render();
  }
  function previousProblem(id){
    const hist=historyFor(id,state.level); if(!hist.length) return;
    const current=currentProblemIndex(id,state.level); const prev=hist.pop();
    state.problemCurrent[id][state.level]=prev;
    save(); render();
  }
  function mascotForLevel(){ return state.level==='advanced'?mascot.think:(state.level==='challenge'?mascot.geometry:mascot.calm); }
  function mascotPrompt(){
    if(state.level==='advanced') return bi('There may be more than one route. Choose the cleanest chain before calculating.','Mungkin ada lebih dari satu cara. Pilih urutan yang paling jelas sebelum menghitung.');
    if(state.level==='challenge') return bi('The route is hidden a little. What information needs to be found first?','Jalurnya sedikit tersembunyi. Informasi apa yang perlu dicari lebih dulu?');
    return bi('Focus on the relationship first — the calculation comes after.','Perhatikan hubungannya dulu — perhitungannya menyusul.');
  }

  function p3([x,y,z]){ return [x + .62*y, .34*y - .92*z]; }
  function projector(points, W=520, H=320, pad=42){
    const raw = Object.fromEntries(Object.entries(points).map(([k,v])=>[k,p3(v)]));
    const xs = Object.values(raw).map(v=>v[0]), ys = Object.values(raw).map(v=>v[1]);
    const minx=Math.min(...xs), maxx=Math.max(...xs), miny=Math.min(...ys), maxy=Math.max(...ys);
    const sx=(W-2*pad)/(maxx-minx||1), sy=(H-2*pad)/(maxy-miny||1), s=Math.min(sx,sy);
    const ox=(W-(maxx-minx)*s)/2-minx*s, oy=(H-(maxy-miny)*s)/2-miny*s;
    return { W,H, pt:k=>[raw[k][0]*s+ox,raw[k][1]*s+oy], rawPt:v=>{const q=p3(v);return [q[0]*s+ox,q[1]*s+oy];}, scale:s };
  }
  function line(a,b,cls='edge'){ return `<line class="${cls}" x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}"/>`; }
  function poly(pts,cls='sectionfill'){ return `<polygon class="${cls}" points="${pts.map(p=>p.map(x=>x.toFixed(1)).join(',')).join(' ')}"/>`; }
  function vertexLabel(name,p,dx=8,dy=-8){ return `<circle class="point" cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.4"/><text x="${(p[0]+dx).toFixed(1)}" y="${(p[1]+dy).toFixed(1)}">${name}</text>`; }
  function edgeText(a,b,text,dx=0,dy=-8){ const m=[(a[0]+b[0])/2+dx,(a[1]+b[1])/2+dy]; return `<text x="${m[0].toFixed(1)}" y="${m[1].toFixed(1)}" text-anchor="middle">${text}</text>`; }
  function svg(inner,label,W=520,H=320){ return `<svg class="geometry-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">${inner}</svg>`; }

  function cuboidDiagram(step=0, dims={w:6,d:8,h:12}, answerLabels=false){
    const {w,d,h}=dims;
    const V={A:[0,0,0],B:[w,0,0],C:[w,d,0],D:[0,d,0],E:[0,0,h],F:[w,0,h],G:[w,d,h],H:[0,d,h]};
    const P=projector(V), q=n=>P.pt(n);
    const edges=[['A','B'],['B','C'],['C','D'],['D','A'],['E','F'],['F','G'],['G','H'],['H','E'],['A','E'],['B','F'],['C','G'],['D','H']];
    const hidden=new Set(['C-D','D-H','G-H']);
    let inner='';
    if(step>=1) inner += poly([q('A'),q('C'),q('G')]);
    edges.forEach(([a,b])=> inner += line(q(a),q(b),hidden.has(`${a}-${b}`)||hidden.has(`${b}-${a}`)?'hidden':'edge'));
    inner += line(q('A'),q('G'),'target');
    if(step>=1) inner += line(q('A'),q('C'),'projection');
    ['A','B','C','G'].forEach(n=>inner+=vertexLabel(n,q(n), n==='A'?-16:8, n==='G'? -10:-8));
    inner+=edgeText(q('A'),q('B'),String(w),0,18);
    inner+=edgeText(q('B'),q('C'),String(d),16,0);
    inner+=edgeText(q('C'),q('G'),String(h),18,0);
    if(answerLabels && step>=2) inner+=edgeText(q('A'),q('C'),bi('AC = 10','AC = 10'),0,-10);
    if(answerLabels && step>=3) inner+=edgeText(q('A'),q('G'),bi('AG = 2√61','AG = 2√61'),-20,-10);
    return svg(inner,bi(`Cuboid with side lengths ${w}, ${d} and ${h}; AG is the target space diagonal.`,`Balok dengan panjang sisi ${w}, ${d}, dan ${h}; AG adalah diagonal ruang yang menjadi target.`));
  }

  function pyramidDiagram(step=0, mode='projection'){
    const hx = mode==='segments' ? 8 : 5;
    const hy = mode==='segments' ? 6 : 5;
    const vh = mode==='segments' ? 15 : 12;
    const V={A:[-hx,-hy,0],B:[hx,-hy,0],C:[hx,hy,0],D:[-hx,hy,0],O:[0,0,0],S:[0,0,vh],M:[0,-hy,0]};
    const P=projector(V,520,340,46),q=n=>P.pt(n);
    let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['S','A'],['S','B'],['S','C'],['S','D']].forEach(([a,b],idx)=>inner+=line(q(a),q(b), idx===2||idx===3?'hidden':'edge'));
    inner+=line(q('S'),q('O'),'hidden');
    if(mode==='projection'){
      inner+=line(q('S'),q('A'),'target');
      if(step>=1) inner+=line(q('A'),q('O'),'projection');
    }
    if(mode==='segments'){
      inner+=line(q('S'),q('A'), state.local.seg==='SM'?'edge':'target');
      inner+=line(q('S'),q('M'), state.local.seg==='SM'?'target':'edge');
      if(state.local.seg==='SM') inner+=line(q('M'),q('O'),'projection'); else inner+=line(q('A'),q('O'),'projection');
      inner+=vertexLabel('M',q('M'),8,-8);
    }
    ['A','B','C','D','O','S'].forEach(n=>inner+=vertexLabel(n,q(n), n==='A'?-17:8, n==='S'?0:-7));
    inner+=edgeText(q('A'),q('B'),mode==='segments'?'16':'10',0,18);
    if(mode==='segments') inner+=edgeText(q('B'),q('C'),'12',18,0);
    inner+=edgeText(q('S'),q('O'),mode==='segments'?'15':'12',16,0);
    return svg(inner,bi('Right pyramid with apex S vertically above centre O.','Limas tegak dengan puncak S tepat di atas pusat O.'));
  }

  function triangularPrismDiagram(step=0){
    const A=[0,0,0],B=[7,0,0],C=[2.5,7.794,0],Ap=[0,0,12];
    const V={A,B,C,"A′":Ap,"B′":[7,0,12],"C′":[2.5,7.794,12]}; const P=projector(V,520,330,52),q=n=>P.pt(n);
    let inner='';
    [['A','B'],['B','C'],['C','A'],['A′','B′'],['B′','C′'],['C′','A′'],['A','A′'],['B','B′'],['C','C′']].forEach(([a,b],idx)=>inner+=line(q(a),q(b), idx===4?'hidden':'edge'));
    inner+=line(q('A′'),q('C'),'target');
    if(step>=1) inner+=line(q('A'),q('C'),'projection');
    ['A','B','C','A′'].forEach(n=>inner+=vertexLabel(n,q(n), n==='A'?-17:8,-8));
    inner+=edgeText(q('A'),q('B'),'7',0,18); inner+=edgeText(q('B'),q('C'),'9',18,0); inner+=edgeText(q('A'),q('A′'),'12',-18,0);
    if(step>=2) inner+=edgeText(q('A'),q('C'),'√67',-4,-12);
    return svg(inner,bi('Triangular prism with target A′C and its base projection appearing after the first reasoning step.','Prisma segitiga dengan target A′C; proyeksi pada alas baru ditampilkan setelah langkah penalaran pertama.'));
  }

  function compositeDiagram(step=0){
    const w=8,d=6,h=4,ph=6;
    const V={A:[0,0,0],B:[w,0,0],C:[w,d,0],D:[0,d,0],E:[0,0,h],F:[w,0,h],G:[w,d,h],H:[0,d,h],O:[w/2,d/2,0],T:[w/2,d/2,h],S:[w/2,d/2,h+ph]};
    const P=projector(V,520,350,48),q=n=>P.pt(n); let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['E','F'],['F','G'],['G','H'],['H','E'],['A','E'],['B','F'],['C','G'],['D','H']].forEach(([a,b],idx)=>inner+=line(q(a),q(b),[2,6,11].includes(idx)?'hidden':'edge'));
    [['S','E'],['S','F'],['S','G'],['S','H']].forEach(([a,b],idx)=>inner+=line(q(a),q(b),idx===2||idx===3?'hidden':'edge'));
    inner+=line(q('A'),q('S'),'target');
    if(step>=1) inner+=line(q('O'),q('S'),'projection');
    if(step>=2) inner+=line(q('A'),q('O'),'projection');
    ['A','B','C','S','O'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-17:8,-8));
    inner+=edgeText(q('A'),q('B'),'8',0,18); inner+=edgeText(q('B'),q('C'),'6',18,0); inner+=edgeText(q('A'),q('E'),'4',-16,0); inner+=edgeText(q('T'),q('S'),'6',18,0);
    return svg(inner,bi('Cuboid with a right pyramid on top; AS is the target spatial segment.','Balok dengan limas tegak di atasnya; AS adalah ruas spasial yang menjadi target.'));
  }

  function symbolicPyramid(step=0){
    const V={A:[-5,-5,0],B:[5,-5,0],C:[5,5,0],D:[-5,5,0],O:[0,0,0],S:[0,0,8]}; const P=projector(V,520,330,50),q=n=>P.pt(n); let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['S','A'],['S','B'],['S','C'],['S','D']].forEach(([a,b],idx)=>inner+=line(q(a),q(b),idx===2||idx===3?'hidden':'edge'));
    inner+=line(q('S'),q('O'),'hidden'); inner+=line(q('S'),q('A'),'target'); if(step>=1) inner+=line(q('A'),q('O'),'projection');
    ['A','B','O','S'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-17:8,-8)); inner+=edgeText(q('A'),q('B'),'2a',0,18); inner+=edgeText(q('S'),q('O'),'h',16,0);
    if(step>=1) inner+=edgeText(q('A'),q('O'),'a√2',-6,-10);
    return svg(inner,bi('Symbolic right square pyramid with base side 2a, height h, and lateral edge SA.','Limas persegi tegak simbolik dengan sisi alas 2a, tinggi h, dan rusuk samping SA.'));
  }

  function movingPyramidDiagram(tval=5, showRelation=false){
    const a=5,h=7,t=Math.max(0,Math.min(2*a,tval));
    const V={B:[a,-a,0],C:[a,a,0],A:[-a,-a,0],D:[-a,a,0],O:[0,0,0],S:[0,0,h],P:[a,-a+t,0]}; const Pj=projector(V,520,340,48),q=n=>Pj.pt(n); let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['S','A'],['S','B'],['S','C'],['S','D']].forEach(([x,y],idx)=>inner+=line(q(x),q(y),idx===2||idx===3?'hidden':'edge'));
    inner+=line(q('S'),q('O'),'hidden'); inner+=line(q('S'),q('P'),'target'); if(showRelation) inner+=line(q('O'),q('P'),'projection');
    ['B','C','O','S'].forEach(n=>inner+=vertexLabel(n,q(n),8,-8)); const pp=q('P'); inner+=`<circle class="moving" cx="${pp[0].toFixed(1)}" cy="${pp[1].toFixed(1)}" r="5"/><text x="${(pp[0]+9).toFixed(1)}" y="${(pp[1]-7).toFixed(1)}">P</text>`;
    return svg(inner,bi('Square pyramid with point P moving along base edge BC.','Limas persegi dengan titik P bergerak sepanjang sisi alas BC.'));
  }


  function squarePyramidPracticeVisual(base=10,height=12,step=0){
    const a=base/2; const V={A:[-a,-a,0],B:[a,-a,0],C:[a,a,0],D:[-a,a,0],O:[0,0,0],S:[0,0,height]};
    const P=projector(V,520,330,50),q=n=>P.pt(n); let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['S','A'],['S','B'],['S','C'],['S','D']].forEach(([x,y],i)=>inner+=line(q(x),q(y),i===2||i===3?'hidden':'edge'));
    inner+=line(q('S'),q('O'),'hidden')+line(q('S'),q('A'),'target'); if(step>=1) inner+=line(q('A'),q('O'),'projection');
    ['A','B','O','S'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-17:8,-8)); inner+=edgeText(q('A'),q('B'),String(base),0,18)+edgeText(q('S'),q('O'),String(height),16,0);
    return svg(inner,bi(`Right square pyramid with base side ${base} and vertical height ${height}; SA is the target line.`,`Limas persegi tegak dengan sisi alas ${base} dan tinggi tegak ${height}; SA adalah garis target.`));
  }
  function rectPyramidPracticeVisual(length=20,width=14,height=24,step=0,target='SM'){
    const hx=length/2,hy=width/2; const V={A:[-hx,-hy,0],B:[hx,-hy,0],C:[hx,hy,0],D:[-hx,hy,0],O:[0,0,0],S:[0,0,height],M:[0,-hy,0]};
    const P=projector(V,520,340,46),q=n=>P.pt(n); let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['S','A'],['S','B'],['S','C'],['S','D']].forEach(([x,y],i)=>inner+=line(q(x),q(y),i===2||i===3?'hidden':'edge'));
    inner+=line(q('S'),q('O'),'hidden'); inner+=line(q('S'),q(target==='SM'?'M':'A'),'target'); if(step>=1) inner+=line(q(target==='SM'?'M':'A'),q('O'),'projection');
    ['A','B','O','S','M'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-17:8,-8)); inner+=edgeText(q('A'),q('B'),String(length),0,18)+edgeText(q('B'),q('C'),String(width),18,0)+edgeText(q('S'),q('O'),String(height),16,0);
    return svg(inner,bi('Right rectangular pyramid; the highlighted segment is the current target.','Limas tegak beralas persegi panjang; ruas yang disorot adalah target saat ini.'));
  }
  function triangularPrismPracticeVisual(data,step=0){
    const AB=data.AB||5, BC=data.BC||7, ang=(data.angle||120)*Math.PI/180, h=data.height||8;
    const B=[0,0,0],A=[AB,0,0],C=[BC*Math.cos(ang),BC*Math.sin(ang),0],Ap=[AB,0,h];
    const V={A,B,C,'A′':Ap,'B′':[0,0,h],'C′':[C[0],C[1],h]}; const P=projector(V,520,330,52),q=n=>P.pt(n); let inner='';
    [['A','B'],['B','C'],['C','A'],['A′','B′'],['B′','C′'],['C′','A′'],['A','A′'],['B','B′'],['C','C′']].forEach(([x,y],i)=>inner+=line(q(x),q(y),i===4?'hidden':'edge'));
    inner+=line(q('A′'),q('C'),'target'); if(step>=1) inner+=line(q('A'),q('C'),'projection');
    ['A','B','C','A′'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-17:8,-8)); inner+=edgeText(q('A'),q('B'),String(AB),0,18)+edgeText(q('B'),q('C'),String(BC),18,0)+edgeText(q('A'),q('A′'),String(h),-18,0);
    return svg(inner,bi('Right triangular prism showing only the given lengths and the target spatial segment.','Prisma segitiga tegak yang hanya menampilkan panjang yang diketahui dan ruas spasial target.'));
  }
  function compositePracticeVisual(data,step=0){
    const w=data.w||12,d=data.d||16,h=data.h||5,ph=data.ph||7;
    const V={A:[0,0,0],B:[w,0,0],C:[w,d,0],D:[0,d,0],E:[0,0,h],F:[w,0,h],G:[w,d,h],H:[0,d,h],O:[w/2,d/2,0],T:[w/2,d/2,h],S:[w/2,d/2,h+ph]};
    const P=projector(V,520,350,48),q=n=>P.pt(n); let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['E','F'],['F','G'],['G','H'],['H','E'],['A','E'],['B','F'],['C','G'],['D','H']].forEach(([x,y],i)=>inner+=line(q(x),q(y),[2,6,11].includes(i)?'hidden':'edge'));
    [['S','E'],['S','F'],['S','G'],['S','H']].forEach(([x,y],i)=>inner+=line(q(x),q(y),i>=2?'hidden':'edge'));
    inner+=line(q('A'),q('S'),'target'); if(step>=1) inner+=line(q('O'),q('S'),'projection'); if(step>=2) inner+=line(q('A'),q('O'),'projection');
    ['A','B','C','S','O'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-17:8,-8)); inner+=edgeText(q('A'),q('B'),String(w),0,18)+edgeText(q('B'),q('C'),String(d),18,0)+edgeText(q('A'),q('E'),String(h),-16,0)+edgeText(q('T'),q('S'),String(ph),18,0);
    return svg(inner,bi('Composite cuboid and right pyramid with AS as the target segment.','Bangun gabungan balok dan limas tegak dengan AS sebagai ruas target.'));
  }
  function cuboidReverseVisual(w=5,d=12,angle=35,step=0){
    const h=Math.sqrt(w*w+d*d)*Math.tan(angle*Math.PI/180);
    const V={A:[0,0,0],B:[w,0,0],C:[w,d,0],D:[0,d,0],E:[0,0,h],F:[w,0,h],G:[w,d,h],H:[0,d,h]};
    const P=projector(V,520,320,42),q=n=>P.pt(n); let inner='';
    const edges=[['A','B'],['B','C'],['C','D'],['D','A'],['E','F'],['F','G'],['G','H'],['H','E'],['A','E'],['B','F'],['C','G'],['D','H']];
    const hidden=new Set(['C-D','D-H','G-H']); edges.forEach(([a,b])=>inner+=line(q(a),q(b),hidden.has(`${a}-${b}`)||hidden.has(`${b}-${a}`)?'hidden':'edge'));
    inner+=line(q('A'),q('G'),'target'); if(step>=1)inner+=line(q('A'),q('C'),'projection');
    ['A','B','C','G'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-16:8,n==='G'?-10:-8));
    inner+=edgeText(q('A'),q('B'),String(w),0,18)+edgeText(q('B'),q('C'),String(d),16,0)+edgeText(q('C'),q('G'),'h',18,0);
    return svg(inner,bi(`Cuboid with base dimensions ${w} by ${d}; vertical height h is unknown and the body diagonal makes a given angle with the base.`,`Balok dengan dimensi alas ${w} × ${d}; tinggi tegak h belum diketahui dan diagonal ruang membentuk sudut yang diketahui terhadap alas.`));
  }
  function squarePyramidLateralVisual(base=12,lateral=13,step=0){
    const a=base/2, radial=Math.sqrt(2)*a, h=Math.sqrt(Math.max(.01,lateral*lateral-radial*radial));
    const V={A:[-a,-a,0],B:[a,-a,0],C:[a,a,0],D:[-a,a,0],O:[0,0,0],S:[0,0,h]};
    const P=projector(V,520,330,50),q=n=>P.pt(n); let inner='';
    [['A','B'],['B','C'],['C','D'],['D','A'],['S','A'],['S','B'],['S','C'],['S','D']].forEach(([x,y],i)=>inner+=line(q(x),q(y),i===2||i===3?'hidden':'edge'));
    inner+=line(q('S'),q('O'),'target'); if(step>=1)inner+=line(q('A'),q('O'),'projection');
    ['A','B','O','S'].forEach(n=>inner+=vertexLabel(n,q(n),n==='A'?-17:8,-8));
    inner+=edgeText(q('A'),q('B'),String(base),0,18)+edgeText(q('S'),q('A'),String(lateral),-12,-8)+edgeText(q('S'),q('O'),'h',16,0);
    return svg(inner,bi(`Right square pyramid with base side ${base} and lateral edge ${lateral}; vertical height h is the unknown.`,`Limas persegi tegak dengan sisi alas ${base} dan rusuk samping ${lateral}; tinggi tegak h adalah besaran yang dicari.`));
  }
  function practiceVisual(p,id,hintStep=0){
    if(!p.visual) return '';
    const step=Math.min(hintStep,2),v=p.visual;
    if(v.kind==='cuboid') return cuboidDiagram(step,v.dims||{w:6,d:8,h:12},false);
    if(v.kind==='cuboidReverse') return cuboidReverseVisual(v.w,v.d,v.angle,step);
    if(v.kind==='squarePyramid') return squarePyramidPracticeVisual(v.base,v.height,step);
    if(v.kind==='squarePyramidLateral') return squarePyramidLateralVisual(v.base,v.lateral,step);
    if(v.kind==='rectPyramid') return rectPyramidPracticeVisual(v.length,v.width,v.height,step,v.target);
    if(v.kind==='triPrism') return triangularPrismPracticeVisual(v,step);
    if(v.kind==='composite') return compositePracticeVisual(v,step);
    if(v.kind==='moving') return movingPyramidDiagram(Number(state.local.t??5),step>=1);
    return '';
  }

  function stepsBlock(id, steps, visualRenderer){
    const current = state.exampleStep[id] || 0;
    const rows = steps.map((s,idx)=>`<div class="step-row ${idx<current?'':'locked'}"><div class="step-num">${idx+1}</div><div><div class="step-title">${s.title[state.lang]}</div><div class="step-body">${idx<current?s.body[state.lang]:bi('Reveal this step when you are ready.','Buka langkah ini saat kamu siap.')}</div></div></div>`).join('');
    return {current, rows, visual: visualRenderer(current), controls:`<div class="reveal-row">${current<steps.length?`<button class="primary" data-example="${id}">${t('reveal')}</button>`:''}${current>0?`<button class="ghost" data-example-reset="${id}">${t('resetExample')}</button>`:''}</div>`};
  }

  function section0(){
    const i=0;
    return `<main class="lesson-screen">${screenHeader(i,bi('Learn to separate geometric facts from perspective appearance, then use a reusable reasoning cycle.','Belajar membedakan fakta geometri dari tampilan perspektif, lalu gunakan siklus penalaran yang dapat dipakai berulang kali.'))}
      <section class="focus-panel learning-split">
        <div><div class="eyebrow">${t('main')}</div><div class="big-question">${bi('A 3D drawing can look convincing and still mislead you.','Gambar 3D bisa terlihat meyakinkan tetapi tetap menyesatkan.')}</div>
        <p class="lead">${bi('Perspective may make perpendicular lines look slanted, equal lengths look different, or a line appear to lie in a face when it does not. Use stated structure, not appearance.','Perspektif dapat membuat garis tegak lurus tampak miring, panjang yang sama tampak berbeda, atau sebuah garis seolah-olah berada pada suatu sisi padahal tidak. Gunakan struktur yang dinyatakan, bukan tampilan.')}</p>
        <div class="notice">${bi('Quick prerequisite check: Pythagoras, right-triangle trig, sine rule, cosine rule, triangle area, and standard volume formulas should already be familiar.','Cek prasyarat singkat: Pythagoras, trigonometri segitiga siku-siku, aturan sinus, aturan cosinus, luas segitiga, dan rumus volume dasar seharusnya sudah cukup familiar.')}</div>
        <div class="teacher-note"><strong>${t('teacherNote')}:</strong> ${bi('Use this as a rapid oral gateway, not a remedial chapter. If the learner can find a rectangle diagonal, choose a right-triangle ratio, and reject a non-coplanar “triangle”, move on.','Gunakan bagian ini sebagai cek lisan cepat, bukan bab remedial. Jika siswa dapat mencari diagonal persegi panjang, memilih rasio trigonometri yang tepat, dan menolak “segitiga” yang tidak sebidang, lanjutkan segera.')}</div></div>
        <div class="mascot-stage"><div class="mascot-bubble">${bi('Before calculating: what in the picture is actually guaranteed?','Sebelum menghitung: bagian mana pada gambar yang benar-benar dijamin oleh informasi soal?')}</div><img src="${mascot.think}" alt="" aria-hidden="true" /></div>
      </section>
      <section class="focus-panel soft"><div class="eyebrow">${t('why')}</div><div class="big-question">${bi('SEE → SLICE → PROJECT → RELATE → SOLVE → VERIFY','AMATI → PILIH BIDANG → PROYEKSI → HUBUNGKAN → SELESAIKAN → PERIKSA')}</div>
        <div class="three-way">
          <div class="mini-panel"><strong>${bi('SEE','AMATI')}</strong><p>${bi('Separate givens, unknowns, and guaranteed relationships from perspective appearance.','Pisahkan informasi yang diketahui, yang dicari, dan hubungan yang benar-benar dijamin dari sekadar tampilan perspektif.')}</p></div>
          <div class="mini-panel"><strong>${bi('SLICE','PILIH BIDANG')}</strong><p>${bi('Choose a plane containing the target and enough useful information.','Pilih bidang yang memuat target dan cukup informasi yang berguna.')}</p></div>
          <div class="mini-panel"><strong>${bi('PROJECT','PROYEKSI')}</strong><p>${bi('For line–plane angles, identify the orthogonal projection onto the named plane.','Untuk sudut garis–bidang, tentukan proyeksi tegak lurus pada bidang yang dimaksud.')}</p></div>
          <div class="mini-panel"><strong>${bi('RELATE','HUBUNGKAN')}</strong><p>${bi('Only now choose Pythagoras, trigonometry, cosine rule, area, volume, or algebra.','Baru setelah itu pilih Pythagoras, trigonometri, aturan cosinus, luas, volume, atau aljabar.')}</p></div>
          <div class="mini-panel"><strong>${bi('SOLVE','SELESAIKAN')}</strong><p>${bi('Carry out the mathematics and keep exact values when useful.','Lakukan perhitungan dan pertahankan nilai eksak jika membantu.')}</p></div>
          <div class="mini-panel"><strong>${bi('VERIFY','PERIKSA')}</strong><p>${bi('Check plausibility, constraints, the original target, and rounding.','Periksa kewajaran hasil, syarat soal, target awal, dan pembulatan.')}</p></div>
        </div>
      </section>
      <section class="focus-panel"><div class="eyebrow">${t('yourturn')}</div><div class="big-question">${bi('Perspective test','Tes perspektif')}</div><p>${bi('A drawing makes two edges look perpendicular. Is that enough to use Pythagoras?','Pada gambar, dua rusuk tampak saling tegak lurus. Apakah itu cukup untuk menggunakan Pythagoras?')}</p>
        <div class="choice-grid"><button class="choice" data-simple="persp-no">${bi('No — I need a geometric fact that guarantees 90°.','Tidak — saya memerlukan fakta geometri yang menjamin sudut 90°.')}</button><button class="choice" data-simple="persp-yes">${bi('Yes — the drawing looks right-angled.','Ya — gambarnya terlihat siku-siku.')}</button></div><div id="simple-persp" class="feedback" role="status" aria-live="polite"></div>
      </section>${nav(i)}</main>`;
  }

  function section1(){
    const i=1, ex=stepsBlock('hidden',[{title:{en:'Locate the target',id:'Tentukan target'},body:{en:'AG is the target. We need one plane containing AG and enough known or obtainable lengths.',id:'AG adalah target. Kita memerlukan satu bidang yang memuat AG sekaligus cukup panjang yang diketahui atau dapat dicari.'}},{title:{en:'Expose the projection',id:'Tampilkan proyeksi'},body:{en:'G projects vertically to C, so AG projects to AC. The useful plane is ACG.',id:'G diproyeksikan tegak lurus ke C, sehingga AG berproyeksi menjadi AC. Bidang yang berguna adalah ACG.'}},{title:{en:'Find the hidden base diagonal',id:'Cari diagonal alas tersembunyi'},body:{en:'AC = √(6²+8²) = 10.',id:'AC = √(6²+8²) = 10.'}},{title:{en:'Solve inside the 2D section',id:'Selesaikan pada penampang 2D'},body:{en:'AG = √(10²+12²) = 2√61, and tan θ = 12/10, so θ ≈ 50.2°.',id:'AG = √(10²+12²) = 2√61, dan tan θ = 12/10, sehingga θ ≈ 50,2°.'}}],s=>cuboidDiagram(s,{w:6,d:8,h:12},true));
    return `<main class="lesson-screen">${screenHeader(i,bi('Most 3D calculations become ordinary 2D geometry after you choose the right cross-section.','Sebagian besar perhitungan 3D berubah menjadi geometri 2D biasa setelah kamu memilih penampang yang tepat.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('main')}</div><div class="big-question">${bi('Where does the target actually live?','Targetnya sebenarnya berada di bidang mana?')}</div><p class="lead">${bi('A useful cross-section is not every possible slice. It is the plane that contains the target and enough known or obtainable information to determine it.','Penampang yang berguna bukan sembarang irisan. Penampang itu adalah bidang yang memuat target dan cukup informasi yang diketahui atau dapat dicari untuk menentukannya.')}</p><div class="keyline">${bi('Target + useful information → promising cross-section','Target + informasi berguna → penampang yang menjanjikan')}</div></div><div class="visual-wrap">${ex.visual}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('guided')}</div><div class="big-question">${bi('Hidden space diagonal','Diagonal ruang tersembunyi')}</div><p>${bi('A cuboid has side lengths 6, 8 and 12. A is a lower vertex and G is the opposite upper vertex. Find AG and the angle between AG and the base plane.','Sebuah balok memiliki panjang sisi 6, 8, dan 12. A adalah titik sudut bawah dan G adalah titik sudut atas yang berseberangan. Tentukan AG dan sudut antara AG dengan bidang alas.')}</p><div class="reasoning-steps">${ex.rows}</div>${ex.controls}<div class="teacher-note"><strong>${t('teacherNote')}:</strong> ${bi('Mastery gate: on a different solid, ask only “Which three points would you isolate to make a 2D diagram containing the target?”','Gerbang penguasaan: pada bangun yang berbeda, tanyakan hanya “Tiga titik mana yang akan kamu pilih agar terbentuk gambar 2D yang memuat target?”')}</div></section>
      <section class="focus-panel">${practice('cross',PRACTICE.cross)}</section>${nav(i)}</main>`;
  }

  function section2(){
    const i=2;
    return `<main class="lesson-screen">${screenHeader(i,bi('Use coordinates as a bridge: 3D distance is repeated Pythagoras across perpendicular directions.','Gunakan koordinat sebagai jembatan: jarak 3D adalah Pythagoras yang diterapkan berulang pada arah yang saling tegak lurus.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('main')}</div><div class="big-question">${bi('The formula is familiar geometry in disguise.','Rumus ini sebenarnya geometri yang sudah familiar.')}</div><p class="lead">${bi('For A(x₁,y₁,z₁) and B(x₂,y₂,z₂), first collect the three perpendicular coordinate changes.','Untuk A(x₁,y₁,z₁) dan B(x₂,y₂,z₂), kumpulkan terlebih dahulu tiga perubahan koordinat yang saling tegak lurus.')}</p><div class="formula-line">AB = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]</div><div class="formula-line">M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)</div><div class="notice info">${bi('Think: diagonal in one coordinate plane, then combine that with the third perpendicular change.','Pikirkan: cari diagonal pada satu bidang koordinat, lalu gabungkan dengan perubahan tegak lurus yang ketiga.')}</div></div><div class="mascot-stage"><div class="mascot-bubble">${bi('Don’t memorize a “3D formula” separately — recognize repeated Pythagoras.','Tidak perlu menghafal “rumus 3D” sebagai rumus terpisah — kenali Pythagoras berulang.')}</div><img src="${mascot.book}" alt="" aria-hidden="true" /></div></section>
      <section class="focus-panel"><div class="eyebrow">${t('guided')}</div><div class="big-question">${bi('Coordinate bridge','Jembatan koordinat')}</div><p>${bi('For A=(−2,1,4) and B=(4,−3,13), the coordinate changes are 6, −4 and 9.','Untuk A=(−2,1,4) dan B=(4,−3,13), perubahan koordinatnya adalah 6, −4, dan 9.')}</p><div class="reasoning-steps"><div class="step-row"><div class="step-num">1</div><div><div class="step-title">${bi('Distance','Jarak')}</div><div class="step-body">AB = √(6²+(−4)²+9²) = √133.</div></div></div><div class="step-row"><div class="step-num">2</div><div><div class="step-title">${bi('Midpoint','Titik tengah')}</div><div class="step-body">M = (1, −1, 17/2).</div></div></div><div class="step-row"><div class="step-num">3</div><div><div class="step-title">${bi('Meaning','Makna')}</div><div class="step-body">${bi('The square root combines three perpendicular displacements exactly as Pythagoras does.','Akar kuadrat menggabungkan tiga perpindahan yang saling tegak lurus, persis seperti Pythagoras.')}</div></div></div></div></section>
      <section class="focus-panel">${practice('coord',PRACTICE.coord)}</section>${nav(i)}</main>`;
  }

  function section3(){
    const i=3, ex=stepsBlock('proj',[{title:{en:'Name the plane',id:'Tentukan bidang'},body:{en:'The target is the angle between SA and the base plane ABCD.',id:'Targetnya adalah sudut antara SA dan bidang alas ABCD.'}},{title:{en:'Find the orthogonal projection',id:'Cari proyeksi tegak lurus'},body:{en:'S projects vertically to O, so SA projects to AO — not to an arbitrary base edge.',id:'S diproyeksikan tegak lurus ke O, sehingga SA berproyeksi menjadi AO — bukan sembarang rusuk alas.'}},{title:{en:'Find the projection length',id:'Cari panjang proyeksi'},body:{en:'The square diagonal is 10√2, so AO = 5√2.',id:'Diagonal persegi adalah 10√2, sehingga AO = 5√2.'}},{title:{en:'Use the right triangle',id:'Gunakan segitiga siku-siku'},body:{en:'tan θ = 12/(5√2), so θ ≈ 59.5°.',id:'tan θ = 12/(5√2), sehingga θ ≈ 59,5°.'}}],s=>pyramidDiagram(s,'projection'));
    return `<main class="lesson-screen">${screenHeader(i,bi('A line–plane angle is defined using the spatial line and its orthogonal projection onto the named plane.','Sudut garis–bidang ditentukan oleh garis spasial dan proyeksi tegak lurusnya pada bidang yang dimaksud.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('main')}</div><div class="big-question">${bi('“A line in the plane” is not enough.','“Sebuah garis pada bidang” belum cukup.')}</div><p class="lead">${bi('A plane contains infinitely many lines. The in-plane ray used for the angle must be the orthogonal projection of the spatial line.','Sebuah bidang memuat tak hingga banyak garis. Sinar pada bidang yang dipakai untuk menentukan sudut harus merupakan proyeksi tegak lurus dari garis spasial tersebut.')}</p><div class="notice">${bi('Common trap: choosing a convenient base edge just because it meets the spatial line.','Jebakan umum: memilih rusuk alas yang mudah terlihat hanya karena rusuk itu bertemu dengan garis spasial.')}</div></div><div class="visual-wrap">${ex.visual}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('guided')}</div><div class="big-question">${bi('Lateral edge of a square pyramid','Rusuk samping pada limas persegi')}</div><p>${bi('A right square pyramid has base side 10 and vertical height SO=12. Find the angle between SA and the base plane.','Sebuah limas persegi tegak memiliki sisi alas 10 dan tinggi SO=12. Tentukan sudut antara SA dan bidang alas.')}</p><div class="reasoning-steps">${ex.rows}</div>${ex.controls}<div class="notice info">${bi('Spot the issue: ∠SAB is not automatically the line–plane angle just because AB lies in the base.','Cari kesalahannya: ∠SAB tidak otomatis menjadi sudut garis–bidang hanya karena AB berada pada alas.')}</div></section>
      <section class="focus-panel">${practice('proj',PRACTICE.proj)}</section>${nav(i)}</main>`;
  }

  function section4(){
    const i=4; state.local.seg = state.local.seg || 'SA';
    return `<main class="lesson-screen">${screenHeader(i,bi('Endpoint awareness often resolves the geometry before any calculation begins.','Memperhatikan titik ujung sering kali sudah cukup untuk menentukan struktur geometri sebelum mulai menghitung.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('main')}</div><div class="big-question">${bi('Which length are you actually looking at?','Panjang yang mana sebenarnya sedang kamu lihat?')}</div><div class="three-way"><div class="mini-panel"><strong>${bi('Vertical height','Tinggi tegak')}</strong><p>${bi('Apex → base plane, perpendicular to the whole plane.','Puncak → bidang alas, tegak lurus terhadap seluruh bidang.')}</p></div><div class="mini-panel"><strong>${bi('Slant height','Tinggi sisi')}</strong><p>${bi('Apex → an appropriate point on a base edge, usually inside a triangular face.','Puncak → titik yang sesuai pada sisi alas, biasanya berada pada sebuah sisi segitiga.')}</p></div><div class="mini-panel"><strong>${bi('Lateral edge','Rusuk samping')}</strong><p>${bi('Apex → base vertex.','Puncak → titik sudut alas.')}</p></div></div><p class="lead">${bi('Different endpoints create different projections, so they create different right triangles and usually different inclinations.','Titik ujung yang berbeda menghasilkan proyeksi yang berbeda, sehingga segitiga siku-siku dan sudut kemiringannya biasanya juga berbeda.')}</p><div class="segment-picker"><button data-seg="SA" class="${state.local.seg==='SA'?'active':''}">SA — ${bi('lateral edge','rusuk samping')}</button><button data-seg="SM" class="${state.local.seg==='SM'?'active':''}">SM — ${bi('slant height','tinggi sisi')}</button></div></div><div class="visual-wrap">${pyramidDiagram(1,'segments')}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('guided')}</div><div class="big-question">${bi('Same pyramid, different triangles','Limas yang sama, segitiga yang berbeda')}</div><p>${bi('Base 16×12, vertical height SO=15. A is a vertex and M is the midpoint of a side of length 16.','Alas 16×12, tinggi tegak SO=15. A adalah titik sudut dan M adalah titik tengah dari sisi yang panjangnya 16.')}</p><div class="reasoning-steps"><div class="step-row"><div class="step-num">1</div><div><div class="step-title">SA</div><div class="step-body">OA = √(8²+6²)=10 → SA=√(15²+10²)=5√13, tan α=15/10.</div></div></div><div class="step-row"><div class="step-num">2</div><div><div class="step-title">SM</div><div class="step-body">OM=6 → SM=√(15²+6²)=3√29, tan β=15/6.</div></div></div><div class="step-row"><div class="step-num">3</div><div><div class="step-title">${bi('Compare','Bandingkan')}</div><div class="step-body">${bi('β>α because both rise through the same vertical height, but SM has the shorter base projection.','β>α karena keduanya memiliki kenaikan vertikal yang sama, tetapi SM mempunyai proyeksi alas yang lebih pendek.')}</div></div></div></div><div class="teacher-note"><strong>${t('teacherNote')}:</strong> ${bi('Diagnostic prompt: does the segment end at a vertex, an edge midpoint, or the base centre?','Pertanyaan diagnosis: apakah ruas berakhir di titik sudut, titik tengah sisi, atau pusat alas?')}</div></section>
      <section class="focus-panel">${practice('pyramid',PRACTICE.pyramid)}</section>${nav(i)}</main>`;
  }

  function section5(){
    const i=5, ex=stepsBlock('trig',[{title:{en:'Identify the projection',id:'Tentukan proyeksi'},body:{en:'A′ projects to A, so A′C projects to AC.',id:'A′ diproyeksikan ke A, sehingga A′C berproyeksi menjadi AC.'}},{title:{en:'Find the hidden base length',id:'Cari panjang alas yang tersembunyi'},body:{en:'Use the cosine rule: AC²=7²+9²−2(7)(9)cos60°=67, so AC=√67.',id:'Gunakan aturan cosinus: AC²=7²+9²−2(7)(9)cos60°=67, sehingga AC=√67.'}},{title:{en:'Use the spatial right triangle',id:'Gunakan segitiga siku-siku spasial'},body:{en:'tan θ = 12/√67, so θ≈55.7°.',id:'tan θ = 12/√67, sehingga θ≈55,7°.'}}],s=>triangularPrismDiagram(s));
    return `<main class="lesson-screen">${screenHeader(i,bi('The trigonometry itself is often familiar. The real decision is choosing the plane and projection that make the triangle valid.','Trigonometrinya sering kali sudah familiar. Keputusan utama justru memilih bidang dan proyeksi yang membuat segitiganya sah.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('main')}</div><div class="big-question">${bi('3D → useful plane → 2D → trigonometry','3D → bidang berguna → 2D → trigonometri')}</div><p class="lead">${bi('Do not begin by hunting for a formula. First determine the 2D triangle that legitimately contains the target.','Jangan mulai dengan mencari rumus. Tentukan dulu segitiga 2D yang benar-benar memuat target.')}</p><div class="notice info">${bi('Keep exact intermediate quantities such as √67, 5√2, or 3√29 as long as practical. This reduces rounding error and keeps structure visible.','Pertahankan nilai antara yang eksak seperti √67, 5√2, atau 3√29 selama masih praktis. Ini mengurangi kesalahan pembulatan dan menjaga struktur tetap terlihat.')}</div></div><div class="visual-wrap">${ex.visual}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('guided')}</div><div class="big-question">${bi('A non-obvious projection length','Panjang proyeksi yang tidak langsung terlihat')}</div><p>${bi('Triangular base ABC has AB=7, BC=9, ∠ABC=60°. A′ lies 12 units vertically above A. Find the angle between A′C and the base.','Alas segitiga ABC memiliki AB=7, BC=9, ∠ABC=60°. A′ berada 12 satuan tepat di atas A. Tentukan sudut antara A′C dan bidang alas.')}</p><div class="reasoning-steps">${ex.rows}</div>${ex.controls}</section>
      <section class="focus-panel">${practice('trig',PRACTICE.trig)}</section>${nav(i)}</main>`;
  }

  function section6(){
    const i=6, ex=stepsBlock('chain',[{title:{en:'Work backward from the target',id:'Mulai dari target akhir'},body:{en:'Need the angle of AS to the base → need vertical rise and horizontal projection.',id:'Untuk mencari sudut AS terhadap alas → kita memerlukan kenaikan vertikal dan proyeksi mendatar.'}},{title:{en:'Vertical rise',id:'Kenaikan vertikal'},body:{en:'The cuboid contributes 4 and the pyramid contributes 6, so the total rise is 10.',id:'Balok menyumbang 4 dan limas menyumbang 6, sehingga kenaikan total adalah 10.'}},{title:{en:'Horizontal projection',id:'Proyeksi mendatar'},body:{en:'The apex projects to the centre. From the bottom vertex to the centre: √(4²+3²)=5.',id:'Puncak diproyeksikan ke pusat. Dari titik sudut bawah ke pusat: √(4²+3²)=5.'}},{title:{en:'Finish the angle',id:'Selesaikan sudut'},body:{en:'tan θ=10/5=2, so θ≈63.4°.',id:'tan θ=10/5=2, sehingga θ≈63,4°.'}}],s=>compositeDiagram(s));
    return `<main class="lesson-screen">${screenHeader(i,bi('Long spatial problems become manageable when you plan the dependency chain before doing arithmetic.','Soal spasial yang panjang menjadi lebih mudah dikelola jika kamu merencanakan urutan besaran yang perlu dicari sebelum menghitung.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('main')}</div><div class="big-question">T ← Q₁ ← Q₂ ← ${bi('givens','informasi awal')}</div><p class="lead">${bi('Ask: what do I need immediately before the target? Then keep working backward until you reach quantities that are given.','Tanyakan: besaran apa yang saya perlukan tepat sebelum target? Lalu terus mundur sampai mencapai besaran yang sudah diketahui.')}</p><div class="formula-line">${bi('target inclination','sudut target')} ← ${bi('horizontal projection','proyeksi mendatar')} ← ${bi('base diagonal / centre distance','diagonal alas / jarak ke pusat')} ← ${bi('base dimensions','dimensi alas')}</div></div><div class="visual-wrap">${ex.visual}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('guided')}</div><div class="big-question">${bi('Composite spatial chain','Rantai langkah pada bangun gabungan')}</div><p>${bi('A cuboid has base 8×6 and height 4. A right pyramid sits on the entire top face with apex 6 units above the face centre. A is a bottom vertex. Find the angle between AS and the bottom base plane.','Sebuah balok memiliki alas 8×6 dan tinggi 4. Sebuah limas tegak berada di atas seluruh sisi atas, dengan puncak 6 satuan di atas pusat sisi tersebut. A adalah titik sudut bawah. Tentukan sudut antara AS dan bidang alas bawah.')}</p><div class="reasoning-steps">${ex.rows}</div>${ex.controls}<div class="teacher-note"><strong>${t('teacherNote')}:</strong> ${bi('Before arithmetic, ask for a one-line dependency plan.','Sebelum menghitung, minta siswa menyatakan rencana urutan besaran dalam satu kalimat.')}</div></section>
      <section class="focus-panel">${practice('chain',PRACTICE.chain)}</section>${nav(i)}</main>`;
  }

  function section7(){
    const i=7, ex=stepsBlock('reverse',[{title:{en:'Reverse the direction',id:'Balik arah penalaran'},body:{en:'Forward problems use dimensions → angle. Here the angle is known and a dimension is the target.',id:'Soal maju menggunakan dimensi → sudut. Di sini sudut diketahui dan sebuah dimensi menjadi target.'}},{title:{en:'Build the projection symbolically',id:'Bangun proyeksi secara simbolik'},body:{en:'For a square base of side 2a, centre-to-vertex distance AO=a√2.',id:'Untuk alas persegi bersisi 2a, jarak pusat ke titik sudut AO=a√2.'}},{title:{en:'Construct the equation',id:'Bangun persamaan'},body:{en:'tan θ = h/(a√2), hence h=a√2 tan θ.',id:'tan θ = h/(a√2), sehingga h=a√2 tan θ.'}},{title:{en:'Connect to volume',id:'Hubungkan ke volume'},body:{en:'V=(1/3)(2a)²h=(4√2/3)a³tanθ. Non-degenerate geometry requires a>0, h>0, 0°<θ<90°.',id:'V=(1/3)(2a)²h=(4√2/3)a³tanθ. Agar bangun tidak degenerat, diperlukan a>0, h>0, dan 0°<θ<90°.'}}],s=>symbolicPyramid(s));
    return `<main class="lesson-screen">${screenHeader(i,bi('Reverse problems force you to construct the geometric equation before rearranging it.','Soal terbalik memaksamu membangun persamaan geometri terlebih dahulu sebelum mengubah bentuk aljabarnya.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('main')}</div><div class="big-question">${bi('Dimensions → angle becomes angle → dimension.','Dimensi → sudut berubah menjadi sudut → dimensi.')}</div><p class="lead">${bi('This is where symbolic geometry becomes powerful: the diagram tells you what equation must be true before any numbers are substituted.','Di sinilah geometri simbolik menjadi kuat: diagram menentukan persamaan yang harus benar sebelum angka apa pun dimasukkan.')}</p><div class="notice info">${bi('Always carry the geometric constraints with the algebra. A symbolic answer is not enough if it describes an impossible solid.','Selalu bawa syarat geometrinya bersama aljabar. Jawaban simbolik belum cukup jika ternyata menggambarkan bangun yang tidak mungkin.')}</div></div><div class="visual-wrap">${ex.visual}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('guided')}</div><div class="big-question">${bi('Symbolic reverse pyramid','Limas simbolik terbalik')}</div><p>${bi('A right square pyramid has base side 2a, vertical height h, and a lateral edge making angle θ with the base.','Sebuah limas persegi tegak memiliki sisi alas 2a, tinggi tegak h, dan rusuk samping yang membentuk sudut θ dengan alas.')}</p><div class="reasoning-steps">${ex.rows}</div>${ex.controls}</section>
      <section class="focus-panel">${practice('reverse',PRACTICE.reverse)}</section>${nav(i)}</main>`;
  }

  function section8(){
    const i=8;
    const errors = [
      [bi('Perspective creates a fake right angle','Perspektif menimbulkan sudut siku-siku palsu'),bi('Repair: ask what mathematical fact guarantees 90°. If none does, Pythagoras is unjustified.','Perbaikan: tanyakan fakta matematis apa yang menjamin 90°. Jika tidak ada, Pythagoras tidak sah.')],
      [bi('Wrong line–plane angle','Sudut garis–bidang yang salah'),bi('Repair: find the perpendicular projection first.','Perbaikan: cari proyeksi tegak lurus terlebih dahulu.')],
      [bi('Non-coplanar “triangle”','“Segitiga” yang tidak sebidang'),bi('Repair: ask whether one plane actually contains all proposed segments.','Perbaikan: cek apakah satu bidang benar-benar memuat semua ruas yang dipakai.')],
      [bi('Slant height = lateral edge','Tinggi sisi = rusuk samping'),bi('Repair: compare endpoints. A midpoint and a vertex produce different projections.','Perbaikan: bandingkan titik ujungnya. Titik tengah dan titik sudut menghasilkan proyeksi yang berbeda.')],
      [bi('Stopping at an intermediate value','Berhenti pada besaran antara'),bi('Repair: return to the original target and the dependency plan.','Perbaikan: kembali ke target awal dan urutan besaran yang perlu dicari.')],
      [bi('Premature rounding','Membulatkan terlalu awal'),bi('Repair: retain exact values or full calculator precision until the final step.','Perbaikan: pertahankan nilai eksak atau presisi kalkulator penuh sampai langkah akhir.')]
    ];
    return `<main class="lesson-screen">${screenHeader(i,bi('Strong spatial reasoning includes knowing why a construction is valid, diagnosing invalid reasoning, and choosing a clean representation.','Penalaran spasial yang kuat mencakup kemampuan menjelaskan mengapa suatu konstruksi sah, mendiagnosis alasan yang salah, dan memilih representasi yang jelas.'))}
      <section class="focus-panel"><div class="eyebrow">${t('why')}</div><div class="big-question">${bi('More than one route can be valid.','Lebih dari satu cara dapat sama-sama benar.')}</div><p class="lead">${bi('Compare direct right-triangle decomposition with coordinates, one large cross-section with two smaller triangles, cosine rule with right-triangle decomposition, or symbolic reasoning with a numerical technology route.','Bandingkan dekomposisi segitiga siku-siku langsung dengan koordinat, satu penampang besar dengan dua segitiga kecil, aturan cosinus dengan dekomposisi segitiga siku-siku, atau pendekatan simbolik dengan jalur numerik berbantuan teknologi.')}</p><div class="notice good">${bi('The best method is the one that makes the geometry and justification cleanest — not automatically the one with the fewest algebraic lines.','Cara terbaik adalah cara yang membuat struktur geometri dan alasannya paling jelas — bukan otomatis cara dengan baris aljabar paling sedikit.')}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('trap')}</div><div class="big-question">${bi('Error analysis studio','Studio analisis kesalahan')}</div><div class="error-list">${errors.map(([a,b],idx)=>`<div class="error-item"><strong>${String.fromCharCode(65+idx)} — ${a}</strong><p class="muted">${b}</p></div>`).join('')}</div></section>
      <section class="focus-panel soft"><div class="eyebrow">${bi('SCAFFOLD FADING','PENGURANGAN BANTUAN')}</div><div class="big-question">${bi('A strong learner should need less of the structure drawn for them over time.','Seiring berkembangnya pemahaman, siswa seharusnya semakin sedikit membutuhkan struktur yang sudah digambarkan.')}</div><div class="checklist">${[
        bi('3D solid + highlighted useful cross-section and projection.','Bangun 3D + penampang dan proyeksi yang sudah disorot.'),
        bi('3D solid with several candidate cross-sections.','Bangun 3D dengan beberapa pilihan penampang.'),
        bi('3D solid only; learner constructs the projection.','Hanya bangun 3D; siswa membangun proyeksinya sendiri.'),
        bi('Incomplete perspective diagram; learner adds auxiliary lines.','Gambar perspektif belum lengkap; siswa menambahkan garis bantu.'),
        bi('Written description; learner creates the diagram.','Deskripsi tertulis; siswa membuat diagram sendiri.'),
        bi('Extended unfamiliar problem with no structural hint.','Soal panjang yang tidak familiar tanpa petunjuk struktur.')
      ].map((x,n)=>`<div class="checkitem"><span class="checkdot">${n+1}</span><span>${x}</span></div>`).join('')}</div><div class="teacher-note"><strong>${t('teacherNote')}:</strong> ${bi('A cluster is secure when the learner can identify useful geometry without formula prompting, construct and justify a projection/cross-section, solve a structural transfer, and distinguish the final target from intermediate quantities.','Satu bagian dianggap dikuasai ketika siswa dapat menemukan geometri yang berguna tanpa diberi rumus, membangun dan menjelaskan proyeksi/penampang, menyelesaikan variasi struktural, serta membedakan target akhir dari besaran antara.')}</div></section>
      <section class="focus-panel">${practice('reasoning',PRACTICE.reasoning)}</section>${nav(i)}</main>`;
  }

  function section9(){
    const i=9; state.local.t = state.local.t ?? 5; state.local.showMove = state.local.showMove ?? false;
    const a=5,h=7,tval=Number(state.local.t), op=Math.sqrt(a*a+(tval-a)*(tval-a)), theta=Math.atan(h/op)*180/Math.PI;
    return `<main class="lesson-screen">${screenHeader(i,bi('The ceiling task combines projection, parameters, symmetry, functions, reverse reasoning, and existence conditions without requiring university mathematics.','Tugas lanjutan ini menggabungkan proyeksi, parameter, simetri, fungsi, penalaran terbalik, dan syarat keberadaan solusi tanpa memerlukan matematika universitas.'))}
      <section class="focus-panel learning-split"><div><div class="eyebrow">${t('deeper')}</div><div class="big-question">${bi('What changes when a point moves?','Apa yang berubah ketika sebuah titik bergerak?')}</div><p class="lead">${bi('In a right square pyramid of base side 2a and height h, point P moves along base edge BC. Let BP=t. The angle θ(t) is the inclination of SP to the base.','Pada limas persegi tegak dengan sisi alas 2a dan tinggi h, titik P bergerak sepanjang sisi BC. Misalkan BP=t. Sudut θ(t) adalah sudut kemiringan SP terhadap alas.')}</p><div class="slider-row"><input id="move-slider" type="range" min="0" max="10" step="0.1" value="${tval}" aria-label="${bi('Position of P along BC','Posisi P sepanjang BC')}"/><div class="slider-labels"><span>B</span><span>${bi('midpoint','titik tengah')}</span><span>C</span></div></div><button class="secondary" data-action="toggleMove" aria-pressed="${state.local.showMove}">${state.local.showMove?bi('Hide projection relation','Sembunyikan hubungan proyeksi'):bi('Reveal projection relation','Tampilkan hubungan proyeksi')}</button>${state.local.showMove?`<div class="live-math">OP² = a² + (t−a)² &nbsp; → &nbsp; tan θ(t)=h/√(a²+(t−a)²)</div><div class="notice info">${bi(`For this exploration: t=${tval.toFixed(1)}, OP≈${op.toFixed(2)}, θ≈${theta.toFixed(1)}°.`,`Untuk eksplorasi ini: t=${tval.toFixed(1)}, OP≈${op.toFixed(2)}, θ≈${theta.toFixed(1)}°.`)}</div>`:''}</div><div class="visual-wrap">${movingPyramidDiagram(tval,state.local.showMove)}</div></section>
      <section class="focus-panel"><div class="eyebrow">${t('why')}</div><div class="big-question">${bi('Symmetry creates the maximum and the solution count.','Simetri menentukan nilai maksimum dan banyaknya solusi.')}</div><div class="reasoning-steps"><div class="step-row"><div class="step-num">1</div><div><div class="step-title">OP² = a²+(t−a)²</div><div class="step-body">${bi('The projection distance is smallest at t=a, the midpoint of BC.','Jarak proyeksi paling kecil ketika t=a, yaitu titik tengah BC.')}</div></div></div><div class="step-row"><div class="step-num">2</div><div><div class="step-title">tan θ(t)=h/OP</div><div class="step-body">${bi('Smaller OP means larger inclination, so θ(t) is largest at the midpoint.','Semakin kecil OP, semakin besar sudut kemiringan, sehingga θ(t) maksimum di titik tengah.')}</div></div></div><div class="step-row"><div class="step-num">3</div><div><div class="step-title">${bi('Two / one / no positions','Dua / satu / tidak ada posisi')}</div><div class="step-body">${bi('A prescribed angle inside the achievable range can occur symmetrically at two positions; the maximum occurs once; angles outside the range occur nowhere.','Sudut yang berada di dalam rentang yang dapat dicapai dapat muncul secara simetris di dua posisi; sudut maksimum muncul sekali; sudut di luar rentang tidak muncul sama sekali.')}</div></div></div></div></section>
      <section class="focus-panel"><div class="eyebrow">${bi('CONNECTION','KONEKSI')}</div><div class="big-question">${bi('Geometry becomes a function.','Geometri berubah menjadi fungsi.')}</div><p>${bi('The expression depends on (t−a)², so it is symmetric about t=a. This is a direct bridge from spatial geometry to functions. Later, vectors will provide a systematic language for projections, lines, and planes; this unit deliberately develops the geometric meaning first.','Ekspresi bergantung pada (t−a)², sehingga simetris terhadap t=a. Ini menjadi jembatan langsung dari geometri spasial ke fungsi. Nanti, vektor akan memberikan bahasa yang sistematis untuk proyeksi, garis, dan bidang; unit ini sengaja membangun makna geometrinya terlebih dahulu.')}</p><div class="notice">${bi('Scope boundary: this unit does not teach full vector projection, dot/cross products, vector equations of lines or planes, angles between planes, or skew-line distance.','Batas topik: unit ini tidak mengajarkan proyeksi vektor penuh, hasil kali titik/silang, persamaan vektor garis atau bidang, sudut antarbidang, maupun jarak antara garis bersilangan.')}</div></section>
      <section class="focus-panel">${practice('ceiling',PRACTICE.ceiling)}</section>
      <section class="focus-panel completion"><div><div class="eyebrow">${bi('MASTERY','PENGUASAAN')}</div><div class="big-question">${bi('Can you reorganize the geometry until the mathematics becomes visible?','Bisakah kamu menata ulang geometri sampai matematika yang dibutuhkan menjadi terlihat?')}</div><div class="checklist">${[
        bi('Identify a useful plane without formula prompting.','Menentukan bidang yang berguna tanpa diberi rumus.'),
        bi('Construct and justify a projection or cross-section.','Membangun dan menjelaskan proyeksi atau penampang.'),
        bi('Distinguish vertical height, slant height, and lateral edge.','Membedakan tinggi tegak, tinggi sisi, dan rusuk samping.'),
        bi('Plan a multi-step dependency chain.','Merencanakan rantai langkah yang terdiri dari beberapa tahap.'),
        bi('Reverse a spatial relationship and carry the geometric constraints.','Membalik hubungan spasial dan tetap memperhatikan syarat geometrinya.'),
        bi('Transfer the reasoning to an unfamiliar structure.','Menerapkan penalaran pada struktur yang tidak familiar.')
      ].map(x=>`<div class="checkitem"><span class="checkdot">✓</span><span>${x}</span></div>`).join('')}</div></div><img src="${mascot.celebrate}" alt="" aria-hidden="true"/></section>${nav(i)}</main>`;
  }

  const renderSection = [section0,section1,section2,section3,section4,section5,section6,section7,section8,section9];

  function render(){
    document.documentElement.lang = state.lang === 'id' ? 'id' : 'en';
    document.title = state.lang === 'en' ? '3D Geometry & Spatial Trigonometry — IB Mathematics AA HL' : 'Geometri 3D & Trigonometri Spasial — IB Mathematics AA HL';
    app.className = state.teacher ? 'app-shell teacher-mode':'app-shell';
    app.innerHTML = header() + (state.page==='home'?home():renderSection[state.section]()) + footer();
    bind();
  }

  function bind(){
    document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
    document.querySelectorAll('[data-action="home"]').forEach(b=>b.addEventListener('click',()=>setPage('home')));
    document.querySelectorAll('[data-action="teacher"]').forEach(b=>b.addEventListener('click',toggleTeacher));
    document.querySelectorAll('[data-section]').forEach(b=>b.addEventListener('click',()=>setPage(Number(b.dataset.section))));
    document.querySelectorAll('[data-complete]').forEach(b=>b.addEventListener('click',()=>markComplete(Number(b.dataset.complete))));
    document.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>setLevel(b.dataset.level)));
    document.querySelectorAll('[data-example]').forEach(b=>b.addEventListener('click',()=>{ const id=b.dataset.example; state.exampleStep[id]=(state.exampleStep[id]||0)+1; render(); }));
    document.querySelectorAll('[data-example-reset]').forEach(b=>b.addEventListener('click',()=>{ state.exampleStep[b.dataset.exampleReset]=0; render(); }));
    document.querySelectorAll('[data-seg]').forEach(b=>b.addEventListener('click',()=>{ state.local.seg=b.dataset.seg; render(); }));
    document.querySelectorAll('[data-practice-choice]').forEach(b=>b.addEventListener('click',()=>{
      const id=b.dataset.practiceChoice; document.querySelectorAll(`[data-practice-choice="${id}"]`).forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false');}); b.classList.add('selected'); b.setAttribute('aria-pressed','true'); b.closest('[data-practice]').dataset.selected=b.dataset.choice;
    }));
    document.querySelectorAll('[data-check-choice]').forEach(b=>b.addEventListener('click',()=>checkChoice(b.dataset.checkChoice)));
    document.querySelectorAll('[data-check]').forEach(b=>b.addEventListener('click',()=>checkNumber(b.dataset.check)));
    document.querySelectorAll('[data-hint]').forEach(b=>b.addEventListener('click',()=>showHint(b.dataset.hint)));
    document.querySelectorAll('[data-change-problem]').forEach(b=>b.addEventListener('click',()=>changeProblem(b.dataset.changeProblem)));
    document.querySelectorAll('[data-previous-problem]').forEach(b=>b.addEventListener('click',()=>previousProblem(b.dataset.previousProblem)));
    document.querySelectorAll('[data-problem-select]').forEach(s=>s.addEventListener('change',()=>changeProblem(s.dataset.problemSelect,Number(s.value))));
    document.querySelectorAll('[data-plan-choice]').forEach(b=>b.addEventListener('click',()=>selectPlan(b)));
    document.querySelectorAll('[data-plan-check]').forEach(b=>b.addEventListener('click',()=>checkPlan(b.dataset.planCheck)));
    document.querySelectorAll('[data-simple]').forEach(b=>b.addEventListener('click',()=>simpleCheck(b.dataset.simple)));
    const slider=document.getElementById('move-slider'); if(slider) slider.addEventListener('input',e=>{ state.local.t=Number(e.target.value); render(); });
    document.querySelectorAll('[data-action="toggleMove"]').forEach(b=>b.addEventListener('click',()=>{state.local.showMove=!state.local.showMove; render();}));
  }

  function problemById(id){ const pool=poolFor(id,state.level); return pool[currentProblemIndex(id,state.level)]; }
  function markPractice(id){
    const p=problemById(id); state.practice[id]=state.practice[id]||{};
    const cur=state.practice[id][state.level]; let arr=Array.isArray(cur)?cur.slice():(cur?[`${id}-${state.level}-legacy`]:[]);
    if(!arr.includes(p.key)) arr.push(p.key); state.practice[id][state.level]=arr; save();
  }
  function feedbackBox(id, ok, text){ const box=document.getElementById(`feedback-${id}`); if(!box)return; box.className=`feedback show ${ok?'correct':'wrong'}`; box.textContent=(ok?`${t('correct')}. `:`${t('tryAgain')}. `)+text; setMascotReaction(id,ok?'correct':'wrong'); }
  function setMascotReaction(id,kind){
    const img=document.getElementById(`practice-mascot-${id}`), msg=document.getElementById(`practice-mascot-msg-${id}`); if(!img||!msg)return;
    if(kind==='correct'){img.src=mascot.celebrate;msg.textContent=bi('Nice — the structure you chose supports the result.','Bagus — struktur yang kamu pilih mendukung hasilnya.');}
    else if(kind==='hint'){img.src=mascot.hint;msg.textContent=bi('Use the hint to reveal structure, not to skip the reasoning.','Gunakan petunjuk untuk melihat strukturnya, bukan untuk melewati penalaran.');}
    else {img.src=mascot.retry;msg.textContent=bi('Check the geometry before changing the arithmetic.','Periksa struktur geometrinya sebelum mengubah perhitungannya.');}
  }
  function wrongText(p,idx=null){
    if(idx!=null && p.misconceptions?.[idx]) return p.misconceptions[idx][state.lang];
    return p.wrongFeedback?.[state.lang] || p.feedback[state.lang];
  }
  function checkChoice(id){
    const root=document.querySelector(`[data-practice="${id}"]`); const val=root?.dataset.selected; const p=problemById(id); if(val==null){ feedbackBox(id,false,bi('Choose an option first.','Pilih salah satu jawaban terlebih dahulu.')); return; }
    const chosen=Number(val),ok=chosen===p.answer; document.querySelectorAll(`[data-practice-choice="${id}"]`).forEach(x=>{x.classList.remove('correct','wrong'); if(Number(x.dataset.choice)===p.answer && ok) x.classList.add('correct'); else if(x.classList.contains('selected')&&!ok) x.classList.add('wrong');});
    feedbackBox(id,ok,ok?p.feedback[state.lang]:wrongText(p,chosen)); if(ok) markPractice(id);
  }
  function checkNumber(id){
    const p=problemById(id), input=document.getElementById(`ans-${id}`); const raw=(input?.value||'').trim().replace(',','.'); const val=Number(raw); if(!Number.isFinite(val)){feedbackBox(id,false,bi('Enter a numerical value first.','Masukkan nilai numerik terlebih dahulu.'));return;}
    const ok=Math.abs(val-p.answer)<= (p.tolerance||.001); feedbackBox(id,ok,ok?p.feedback[state.lang]:wrongText(p)); if(ok) markPractice(id);
  }
  function showHint(id){
    const p=problemById(id), key=problemKey(id,p), hints=p.hints[state.lang]||[]; if(!hints.length)return;
    const current=Number(state.hintState[key]||0); state.hintState[key]=Math.min(current+1,hints.length); render();
    setTimeout(()=>setMascotReaction(id,'hint'),0);
  }
  function selectPlan(btn){
    const id=btn.dataset.planChoice,root=document.querySelector(`[data-plan-root="${id}"]`); if(!root)return;
    root.dataset.selected=btn.dataset.planIndex; root.querySelectorAll('[data-plan-choice]').forEach(x=>{x.classList.remove('selected');x.setAttribute('aria-pressed','false');}); btn.classList.add('selected'); btn.setAttribute('aria-pressed','true');
  }
  function checkPlan(id){
    const p=problemById(id); if(!p.plan)return; const root=document.querySelector(`[data-plan-root="${id}"]`),box=document.getElementById(`plan-feedback-${id}`); const val=root?.dataset.selected;
    if(val==null){box.className='feedback show wrong';box.textContent=bi('Choose a plan first.','Pilih rencana terlebih dahulu.');return;}
    const ok=Number(val)===p.plan.answer; box.className=`feedback show ${ok?'correct':'wrong'}`; box.textContent=ok?bi('Good plan. Now carry it into the mathematics.','Rencananya tepat. Sekarang gunakan rencana itu dalam perhitungan.'):bi('Recheck what quantity is needed immediately before the target.','Periksa lagi: besaran apa yang diperlukan tepat sebelum target?');
  }

  function simpleCheck(code){
    const box=document.getElementById('simple-persp'); if(!box)return; const ok=code==='persp-no'; box.className=`feedback show ${ok?'correct':'wrong'}`; box.textContent=ok?bi('Correct. A visual impression is not a mathematical guarantee.','Benar. Kesan visual bukan jaminan matematis.'):bi('Not yet. Perspective can distort angles, so you need a stated geometric reason for 90°.','Belum. Perspektif dapat mengubah tampilan sudut, jadi kamu memerlukan alasan geometris yang benar-benar menjamin 90°.');
  }

  render();
})();

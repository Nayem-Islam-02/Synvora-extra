
/* =====================================================
   CASE STUDY DATA – ekhane nijer real project bosao.
   (Nicher gulo sample/placeholder content)
   kind: 'web' | 'app' | 'dash'  → card cover er mock design
   ===================================================== */
const CASES = [
  {
    id:'shop', cat:'E-commerce', kind:'web', c1:'#5B3DF5', c2:'#9B7BFF',
    client:'Nirala Fashion House', title:'Online store that tripled monthly orders',
    summary:'A slow, hard-to-manage Facebook-only shop became a fast online store with bKash and card checkout, stock sync and order tracking.',
    metrics:[{v:'3.1×',l:'Monthly orders'},{v:'1.8s',l:'Page load'},{v:'-60%',l:'Order handling time'}],
    duration:'10 weeks', team:'5 people', service:'Web development',
    challenge:'Orders came through Messenger and phone calls. Staff copied details into sheets by hand, stock was often wrong and customers had no way to track parcels.',
    solution:['Built a mobile-first storefront with product variants and search','Integrated bKash, Nagad and card payments','Created an admin panel with live stock and courier booking','Automated SMS and email order updates'],
    stack:['Next.js','Node.js','PostgreSQL','bKash API','Redis'],
    quote:{t:'Before Synvora we lost orders every weekend. Now the store runs while we sleep.',n:'Farzana Nira',r:'Founder, Nirala Fashion House'},
    link:'#'
  },
  {
    id:'cyber', cat:'Cyber Security', kind:'dash', c1:'#00997A', c2:'#2EE6B8',
    client:'SafePay Financial Services', title:'Security audit that closed every critical vulnerability',
    summary:'Full penetration test and hardening of a payment platform, followed by 24/7 monitoring and staff security training.',
    metrics:[{v:'47',l:'Vulnerabilities fixed'},{v:'0',l:'Breaches in 12 months'},{v:'<15 min',l:'Threat response time'}],
    duration:'9 weeks', team:'4 specialists', service:'Cyber security',
    challenge:'The platform handled thousands of daily transactions but had never been tested by an outside team. Old libraries, weak access rules and no central logging left the business exposed.',
    solution:['Web, API and network penetration testing (VAPT)','Fixed critical issues and hardened server and cloud settings','Multi-factor login and role based access control','24/7 log monitoring with instant alerts','Security awareness training for all staff'],
    stack:['OWASP','Burp Suite','Nmap','Wazuh','Cloudflare WAF'],
    quote:{t:'We passed our compliance review on the first attempt. Now we know exactly where we stand.',n:'Kamrul Hasan',r:'CTO, SafePay Financial Services'},
    link:'#'
  },
  {
    id:'edu', cat:'Web Platform', kind:'web', c1:'#1E6BFF', c2:'#38C8FF',
    client:'BrightPath Academy', title:'Learning platform serving 8,000 students',
    summary:'Live classes, recorded lessons, quizzes and certificates on one platform that works well on low-speed mobile networks.',
    metrics:[{v:'8,000+',l:'Active students'},{v:'92%',l:'Course completion'},{v:'99.9%',l:'Uptime'}],
    duration:'12 weeks', team:'5 people', service:'Web platform',
    challenge:'Classes ran over scattered video calls and shared drives. Students missed lessons and teachers could not track progress.',
    solution:['Adaptive video that lowers quality on slow networks','Quiz engine with instant results','Auto-generated PDF certificates','Teacher dashboard with progress tracking'],
    stack:['Next.js','NestJS','MongoDB','WebRTC','Cloudflare'],
    quote:{t:'Even students in remote areas can join class now. That was our biggest worry.',n:'Sadia Rahman',r:'Head of Academy, BrightPath'},
    link:'#'
  },
  {
    id:'uiux', cat:'UI/UX Design', kind:'app', c1:'#D414A8', c2:'#FF5CC8',
    client:'Paywise Wallet', title:'App redesign that lifted sign-up completion by 38%',
    summary:'User research and a full redesign turned a confusing onboarding flow into a simple, accessible experience people finish.',
    metrics:[{v:'+38%',l:'Sign-up completion'},{v:'-52%',l:'Time to first payment'},{v:'4.8/5',l:'Usability score'}],
    duration:'6 weeks', team:'3 designers', service:'UI/UX design',
    challenge:'Almost half of new users left during onboarding. Screens were crowded, labels were unclear and the app was hard to use for first-time smartphone users.',
    solution:['User interviews and usability tests with 20 real users','Simplified 9-step onboarding into 4 steps','New design system with reusable components','Bangla and English interface with larger, readable text','Clickable prototype tested before development'],
    stack:['Figma','FigJam','Maze','Design tokens','Lottie'],
    quote:{t:'The new flow feels effortless. Our support tickets about sign-up almost disappeared.',n:'Ayesha Siddika',r:'Product Manager, Paywise'},
    link:'#'
  },
  {
    id:'brand', cat:'Web Platform', kind:'web', c1:'#0A2A8F', c2:'#1E6BFF',
    client:'Aurelia Travels', title:'Rebuilt travel website that ranks on page one',
    summary:'New brand-led website with package booking and technical SEO turned a brochure site into the agency\'s top lead source.',
    metrics:[{v:'+240%',l:'Organic traffic'},{v:'5.2×',l:'Enquiries'},{v:'96',l:'Lighthouse score'}],
    duration:'7 weeks', team:'4 people', service:'Web design & SEO',
    challenge:'The old site loaded slowly, looked dated on mobile and did not appear in search for any tour keywords.',
    solution:['New visual identity and mobile-first design','Package pages with inquiry and booking flow','Technical SEO, schema and image optimisation','Analytics and lead tracking setup'],
    stack:['Astro','Tailwind','Headless CMS','GA4','Vercel'],
    quote:{t:'Half of our tour bookings now start from the website.',n:'Nusrat Jahan',r:'CEO, Aurelia Travels'},
    link:'#'
  }
];

/* ---------------- helpers ---------------- */
const $ = s => document.querySelector(s);
const track = $('#csTrack'), modal = $('#csModal');
const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
let list = CASES.slice(), current = 0;
/* Ek category = ek color (consistency). Cover, dot, filter shob e ekoi color. */
const CAT = {'E-commerce':'#5B3DF5','Cyber Security':'#00997A','Web Platform':'#1E6BFF','UI/UX Design':'#D414A8'};
const tag = c => `<span class="cs-tag"><i class="dot" style="background:${CAT[c.cat]||'#5B3DF5'}"></i>${c.cat}</span>`;

function mock(kind){
  if(kind==='app') return `<div class="mk-phone"><div class="mk-b" style="width:40%"></div><div class="mk-b a" style="width:70%;height:14px"></div><div class="mk-tile"></div><div class="mk-tile b"></div><div class="mk-b" style="width:85%"></div><div class="mk-b" style="width:60%"></div></div>`;
  if(kind==='dash') return `<div class="mk"><div class="mk-dots"><i></i><i></i><i></i></div><div class="mk-row"><div class="mk-b a" style="width:30%"></div><div class="mk-b" style="width:20%"></div></div><div class="mk-bars"><i style="height:40%"></i><i style="height:65%"></i><i style="height:50%"></i><i style="height:85%"></i><i style="height:70%"></i><i style="height:100%"></i></div></div>`;
  return `<div class="mk"><div class="mk-dots"><i></i><i></i><i></i></div><div class="mk-b a" style="width:55%;height:16px;margin-bottom:10px"></div><div class="mk-b" style="width:80%"></div><div class="mk-b" style="width:65%;margin-top:8px"></div><div class="mk-row" style="margin-top:14px"><div class="mk-tile" style="flex:1;margin:0"></div><div class="mk-tile b" style="flex:1;margin:0;height:54px"></div><div class="mk-tile" style="flex:1;margin:0"></div></div></div>`;
}
const vars = c => `--c1:${c.c1};--c2:${c.c2}`;

/* ---------------- filters ---------------- */
function buildFilters(){
  const cats = ['All', ...new Set(CASES.map(c=>c.cat))];
  $('#csFilters').innerHTML = cats.map((c,i)=>`<button class="cs-chip" data-cat="${c}" aria-pressed="${i===0}">${CAT[c]?`<i class="dot" style="background:${CAT[c]}"></i>`:''}${c}</button>`).join('');
  $('#csFilters').addEventListener('click', e=>{
    const b = e.target.closest('.cs-chip'); if(!b) return;
    document.querySelectorAll('.cs-chip').forEach(x=>x.setAttribute('aria-pressed', x===b));
    list = b.dataset.cat==='All' ? CASES.slice() : CASES.filter(c=>c.cat===b.dataset.cat);
    renderCards(); track.scrollTo({left:0, behavior:'auto'}); update();
  });
}

/* ---------------- cards ---------------- */
function renderCards(){
  track.innerHTML = list.map((c,i)=>`
    <article class="cs-card" data-i="${i}" style="${vars(c)}">
      <div class="cs-cover">${tag(c)}${mock(c.kind)}</div>
      <div class="cs-body">
        <span class="cs-client">${c.client}</span>
        <h3 class="cs-name">${c.title}</h3>
        <p class="cs-sum">${c.summary}</p>
        <div class="cs-metrics">${c.metrics.slice(0,2).map(m=>`<div><b>${m.v}</b><span>${m.l}</span></div>`).join('')}</div>
        <div class="cs-foot">
          <span class="cs-time">${c.duration}</span>
          <button class="cs-btn" data-open="${i}" aria-label="Preview case study: ${c.client}">Preview ${ICON_ARROW}</button>
        </div>
      </div>
    </article>`).join('');
}

/* ---------------- carousel controls ---------------- */
const prev = $('#csPrev'), next = $('#csNext'), bar = $('#csBar'), count = $('#csCount');
function step(){ const c = track.querySelector('.cs-card'); return c ? c.offsetWidth + 24 : 300; }
function update(){
  const max = track.scrollWidth - track.clientWidth;
  const pos = track.scrollLeft;
  prev.disabled = pos <= 4;
  next.disabled = pos >= max - 4;
  const ratio = max > 0 ? pos / max : 1;
  const visible = Math.min(1, track.clientWidth / track.scrollWidth);
  bar.style.width = Math.max(visible*100, 12) + '%';
  bar.style.marginLeft = ratio * (100 - parseFloat(bar.style.width)) + '%';
  const idx = Math.min(list.length, Math.round(pos / step()) + 1);
  count.textContent = list.length ? `${idx} / ${list.length}` : '';
}
prev.onclick = ()=> track.scrollBy({left:-step()});
next.onclick = ()=> track.scrollBy({left: step()});
track.addEventListener('scroll', ()=>requestAnimationFrame(update), {passive:true});
window.addEventListener('resize', update);
track.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight'){ e.preventDefault(); next.click(); }
  if(e.key==='ArrowLeft'){ e.preventDefault(); prev.click(); }
});

/* mouse drag to scroll (touch already works natively) */
let down=false, sx=0, sl=0, moved=false;
track.addEventListener('pointerdown', e=>{
  if(e.pointerType!=='mouse') return;
  down=true; moved=false; sx=e.clientX; sl=track.scrollLeft;
});
window.addEventListener('pointermove', e=>{
  if(!down) return;
  const dx = e.clientX - sx;
  if(Math.abs(dx) > 6){ moved=true; track.classList.add('is-drag'); }
  if(moved) track.scrollLeft = sl - dx;
});
window.addEventListener('pointerup', ()=>{
  if(!down) return; down=false;
  track.classList.remove('is-drag');
  if(moved){ const s=step(); track.scrollTo({left: Math.round(track.scrollLeft/s)*s}); }
});

/* click on card or button opens preview (ignore if it was a drag) */
track.addEventListener('click', e=>{
  if(moved){ moved=false; return; }
  const card = e.target.closest('.cs-card'); if(!card) return;
  openCase(+card.dataset.i);
});

/* ---------------- modal ---------------- */
function openCase(i){
  current = (i + list.length) % list.length;
  const c = list[current];
  const sheet = $('#csSheet');
  sheet.style.cssText = vars(c);
  $('#mSide').innerHTML = `${tag(c)}${mock(c.kind)}`;
  $('#mMain').innerHTML = `
    <span class="cs-client">${c.client}</span>
    <h3 id="mTitle">${c.title}</h3>
    <p>${c.summary}</p>
    <div class="cs-facts">
      <div><small>Service</small><strong>${c.service}</strong></div>
      <div><small>Timeline</small><strong>${c.duration}</strong></div>
      <div><small>Team</small><strong>${c.team}</strong></div>
    </div>
    <h4>The challenge</h4><p>${c.challenge}</p>
    <h4>What we built</h4><ul class="cs-list">${c.solution.map(s=>`<li>${s}</li>`).join('')}</ul>
    <h4>Results</h4><div class="cs-res">${c.metrics.map(m=>`<div><b>${m.v}</b><span>${m.l}</span></div>`).join('')}</div>
    <h4>Technology</h4><div class="cs-stack">${c.stack.map(s=>`<span>${s}</span>`).join('')}</div>
    <blockquote class="cs-quote"><p>${c.quote.t}</p><footer>${c.quote.n}, ${c.quote.r}</footer></blockquote>
    <div class="cs-actions">
      <a class="cs-btn" href="#contact" style="text-decoration:none" data-close>Get a similar solution</a>
      ${c.link && c.link!=='#' ? `<a class="cs-btn ghost" href="${c.link}" target="_blank" rel="noopener" style="text-decoration:none">Visit live project</a>`:''}
      <span class="sp"></span>
      <button class="cs-step" data-go="-1" aria-label="Previous case study"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button>
      <button class="cs-step" data-go="1" aria-label="Next case study"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>
    </div>`;
  $('#mMain').scrollTop = 0;
  if(!modal.open){ modal.showModal(); document.body.style.overflow='hidden'; }
}
$('#mMain').addEventListener('click', e=>{
  const g = e.target.closest('[data-go]');
  if(g) openCase(current + +g.dataset.go);
  if(e.target.closest('[data-close]')) modal.close();
});
$('#csClose').onclick = ()=> modal.close();
modal.addEventListener('click', e=>{ if(e.target===modal) modal.close(); });   // backdrop click
modal.addEventListener('close', ()=>{ document.body.style.overflow=''; });
modal.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight') openCase(current+1);
  if(e.key==='ArrowLeft')  openCase(current-1);
});

/* ---------------- init ---------------- */
buildFilters(); renderCards(); update();


const S=[
{p:"Get customers online",t:"Websites and web apps",d:"A fast site that shows what you sell and takes orders, bookings or enquiries.",l:["Business and portfolio websites","Online shops and booking systems","Works well on cheap phones and slow networks"],g:["HTML/CSS/JS","Responsive","SEO basics"]},
{p:"Put my service in a mobile app",t:"Android and iOS apps",d:"One Flutter codebase for both platforms, built to keep working when the network drops.",l:["Offline-first, syncs when online","bKash and Nagad payment ready","Play Store publishing handled for you"],g:["Flutter","Offline-first","Play Store"]},
{p:"Stop doing repetitive work by hand",t:"Automation and reports",d:"We turn spreadsheets, paper forms and manual reports into tools that run themselves.",l:["Auto-generated PDF reports and invoices, including Bangla text","Dashboards that show live numbers","Data entry replaced by simple forms"],g:["Python","PDF reports","Dashboards"]},
{p:"Look more professional",t:"UI/UX and brand design",d:"Logo, colours and screens that make a small business look established.",l:["Logo and brand kit","App and website design in Figma","Proposal and presentation templates"],g:["Logo","UI/UX","Brand kit"]},
{p:"Answer customers faster",t:"AI assistants",d:"A chatbot that answers common questions on your site or app, in Bangla and English.",l:["Trained on your own FAQs and documents","Hands over to a person when needed","Runs on your existing website or app"],g:["Chatbot","Bangla","Support"]}
];
const tabs=document.querySelector(".probs"),panel=document.getElementById("panel");
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
function show(i,animate){
  tabs.querySelectorAll("button").forEach((b,j)=>{b.setAttribute("aria-selected",j===i);b.tabIndex=j===i?0:-1});
  const s=S[i];
  panel.innerHTML=`<h3>${esc(s.t)}</h3><p>${esc(s.d)}</p><ul>${s.l.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><div class="tags">${s.g.map(x=>`<span>${esc(x)}</span>`).join("")}</div><a class="go" href="mailto:hello@synvora.it?subject=${encodeURIComponent(s.t)}">Start this project</a>`;
  if(animate){panel.classList.remove("swap");void panel.offsetWidth;panel.classList.add("swap")}
}
S.forEach((s,i)=>{const b=document.createElement("button");b.role="tab";b.textContent=s.p;
  b.onclick=()=>show(i,true);
  b.onkeydown=e=>{const k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();const n=(i+k+S.length)%S.length;show(n,true);tabs.querySelectorAll("button")[n].focus()}};
  tabs.appendChild(b)});
show(0,false);

const chip=(box,items,multi)=>{const el=document.getElementById(box);items.forEach(t=>{const b=document.createElement("button");b.textContent=t;b.setAttribute("aria-pressed","false");
 b.onclick=()=>{if(!multi)el.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed","false"));b.setAttribute("aria-pressed",multi?String(b.getAttribute("aria-pressed")!=="true"):"true")};el.appendChild(b)})};
chip("pSvc",S.map(x=>x.t),true);chip("pTime",["As soon as possible","In 1–2 months","Just exploring"],false);
const pick=id=>[...document.querySelectorAll("#"+id+" button[aria-pressed=true]")].map(b=>b.textContent);
const brief=()=>`Hello Synvora IT,\n\nServices: ${pick("pSvc").join(", ")||"Not sure yet"}\nTimeline: ${pick("pTime")[0]||"Not decided"}\n\nProblem:\n${document.getElementById("pMsg").value.trim()||"(not written yet)"}\n\nName: ${document.getElementById("pName").value.trim()}\nContact: ${document.getElementById("pContact").value.trim()}`;
const note=t=>{document.getElementById("pNote").textContent=t};
document.getElementById("pSend").onclick=()=>{location.href="mailto:hello@synvora.it?subject="+encodeURIComponent("New project brief")+"&body="+encodeURIComponent(brief())};
document.getElementById("pCopy").onclick=async()=>{try{await navigator.clipboard.writeText(brief());note("Brief copied.")}catch(e){note("Copy is blocked here. Select the text and copy it yourself.")}};

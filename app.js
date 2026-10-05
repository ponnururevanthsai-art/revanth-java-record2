const $=s=>document.querySelector(s),esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
$('#pname').textContent=PROFILE.name;
$('#pinfo').innerHTML=PROFILE.info.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
$('#pimg').onerror=e=>{e.target.src='data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#30363d"/><text x="48" y="60" font-size="34" text-anchor="middle" fill="#58a6ff" font-family="sans-serif">${PROFILE.name.replace(/[^A-Z]/g,'').slice(0,2)}</text></svg>`)};
$('#nav').innerHTML='<a href="#/">🏠 Home</a>'+WEEKS.map(w=>`<a href="#/w/${w.n}" data-w="${w.n}">Week ${w.n}</a>`).join('');
$('#menu').onclick=()=>$('#side').classList.toggle('open');
const box=(h,c,cls='')=>`<div class="box ${cls}"><h4>${h}${cls?'':'<button class="cp">Copy</button>'}</h4><pre>${esc(c)}</pre></div>`;
function render(){
  const [,k,wn,pn]=location.hash.split('/'),w=WEEKS.find(x=>x.n==wn);let h='';
  $('#side').classList.remove('open');
  document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.dataset.w==wn));
  if(k==='w'&&w&&!pn){
    h=`<div class="crumb"><a href="#/">Home</a> / Week ${w.n}</div><h1 class="t">Week ${w.n}: ${w.title}</h1>`;
    if(w.note)h+=`<div class="q">${w.note}</div>`;
    if(w.table)h+=`<table><tr>${w.table[0].map(c=>`<th>${c}</th>`).join('')}</tr>${w.table.slice(1).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
    if(!w.progs.length&&!w.table&&!w.note)h+='<div class="empty">Programs for this week will be added soon.</div>';
    h+=w.progs.map((p,i)=>`<a class="prog" href="#/w/${w.n}/${i+1}"><span>Program ${i+1}</span>${p.t}</a>`).join('');
  }else if(k==='w'&&w&&w.progs[pn-1]){
    const i=+pn,p=w.progs[i-1];
    h=`<div class="crumb"><a href="#/">Home</a> / <a href="#/w/${w.n}">Week ${w.n}</a> / Program ${i}</div><h1 class="t">Program ${i}</h1><div class="q"><b>Aim:</b> ${p.t}</div>`;
    if(p.steps)h+=`<h3>Steps</h3><ol class="s">${p.steps.map(s=>`<li>${s}</li>`).join('')}</ol>`;
    if(p.c)h+=box('Java Code',p.c);
    h+=box('Output',p.o,'out');
    h+=`<div class="nav2">${i>1?`<a href="#/w/${w.n}/${i-1}">← Previous</a>`:'<span></span>'}${i<w.progs.length?`<a href="#/w/${w.n}/${i+1}">Next →</a>`:`<a href="#/w/${w.n}">Back to Week ${w.n}</a>`}</div>`;
  }else h=`<section class="hero"><h1>${HOME.title}</h1><p>${HOME.sub}</p></section><div class="grid">${WEEKS.map(w=>`<a class="card" href="#/w/${w.n}"><b>Week ${w.n}</b><small>${w.title}</small></a>`).join('')}</div>`;
  $('#app').innerHTML=h;scrollTo(0,0);
  document.querySelectorAll('.cp').forEach(b=>b.onclick=()=>{navigator.clipboard.writeText(b.closest('.box').querySelector('pre').textContent);b.textContent='Copied!';setTimeout(()=>b.textContent='Copy',1200)});
}
addEventListener('hashchange',render);render();

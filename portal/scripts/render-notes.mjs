import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const {marked}=await import(process.env.MARKED_MODULE || 'marked');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const entries=[['промтинг','prompting','Промтинг: от базового до продвинутого'],['ии-чаты','chats-and-agents','ИИ-чаты и ИИ-агенты'],['opensource','open-models','Модели с открытыми весами']];
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
for(const [prefix,slug,title] of entries){
 const filename=fs.readdirSync(path.join(root,'public/notes')).find(f=>f.startsWith(prefix)&&f.endsWith('.md'));
 let md=fs.readFileSync(path.join(root,'public/notes',filename),'utf8');
 // Export titles are replaced by the page heading; the article body stays intact.
 md=md.replace(/^# .*\n+/,'').replace(/^# .*\n+/,'');
 md=md.replace(/<aside>\s*<img[^>]*>\s*([\s\S]*?)<\/aside>/g,(_,body)=>body.trim().split('\n').map(l=>'> '+l).join('\n'));
 let body=marked.parse(md,{gfm:true});let i=0;const toc=[];
 body=body.replace(/<h([2-4])>([\s\S]*?)<\/h\1>/g,(_,n,t)=>{const id='section-'+ ++i;toc.push(`<a class="level-${n}" href="#${id}">${t}</a>`);return `<h${n} id="${id}">${t}</h${n}>`});
 body=body.replace(/<table>/g,'<div class="table-scroll" tabindex="0" role="region" aria-label="Сравнительная таблица"><table>').replace(/<\/table>/g,'</table></div>');
 body=body.replace(/<pre>/g,'<div class="example"><button class="copy-example" type="button">Копировать пример</button><pre>').replace(/<\/pre>/g,'</pre></div>');
 const minutes=Math.max(1,Math.ceil(md.split(/\s+/).length/180));
 const related=entries.filter(e=>e[1]!==slug).map(e=>`<a href="/knowledge/${e[1]}">${e[2]} →</a>`).join('');
 const html=`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — ИИ × АПК</title><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/reading.css"></head><body><div class="field-stripe"></div><div class="reading-shell"><nav class="reading-nav" aria-label="Навигация"><a href="/">ИИ × АПК</a><a href="/knowledge">← Все материалы</a></nav><header class="reading-header"><p class="kicker">База знаний · ${minutes} мин чтения</p><h1>${title}</h1><p class="reading-subtitle">Практический материал для участников и команд АПК</p></header><div class="reading-layout"><aside class="reading-toc"><details open><summary>В этом материале</summary><nav aria-label="Оглавление">${toc.join('')}</nav></details></aside><article class="prose">${body}<footer class="reading-footer"><h2>Продолжить изучение</h2><div>${related}</div><a class="back-link" href="/knowledge">← Вернуться к знаниям</a></footer></article></div></div><script>document.querySelectorAll('.copy-example').forEach(b=>b.addEventListener('click',async()=>{const c=b.parentElement.querySelector('code');try{await navigator.clipboard.writeText(c.textContent);b.textContent='Скопировано'}catch(e){const r=document.createRange();r.selectNodeContents(c);const s=window.getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Текст выделен — Cmd/Ctrl+C'}setTimeout(()=>b.textContent='Копировать пример',2500)}));</script></body></html>`;
 const dest=path.join(root,'public/knowledge');fs.mkdirSync(dest,{recursive:true});fs.writeFileSync(path.join(dest,slug+'.html'),html);
 console.log(slug,minutes+' min',toc.length+' headings');
}

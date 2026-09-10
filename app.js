'use strict';
// Set only confirmed account usernames and URLs. Missing URLs never become dummy links.
const profiles=[
{name:'Discord',username:'',url:'',icon:'discord'},
{name:'Instagram',username:'',url:'',icon:'instagram'},
{name:'Steam',username:'Ryo',url:'',icon:'steam'},
{name:'Roblox',username:'Ryo',url:'',icon:'roblox'}
];
const icons={
discord:'<path d="M19.7 5.1a18 18 0 0 0-4.4-1.4l-.6 1.2a16 16 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.3.7 13.4 1.1 17.5a18 18 0 0 0 5.5 2.8l1.1-1.8-1.6-.8.4-.3a13 13 0 0 0 11 0l.4.3-1.6.8 1.1 1.8a18 18 0 0 0 5.5-2.8c.5-4.7-.8-8.8-3.2-12.4ZM8.3 14.9c-1 0-1.8-1-1.8-2.2s.8-2.2 1.8-2.2 1.8 1 1.8 2.2-.8 2.2-1.8 2.2Zm7.4 0c-1 0-1.8-1-1.8-2.2s.8-2.2 1.8-2.2 1.8 1 1.8 2.2-.8 2.2-1.8 2.2Z"/>',
instagram:'<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1.2"/>',
steam:'<circle cx="16" cy="8" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="17" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m9 14 3-5m-1 8 6-4M1 13l7 3" fill="none" stroke="currentColor" stroke-width="2"/>',
roblox:'<path fill-rule="evenodd" d="m5 1 18 4-4 18L1 19Zm5 8-1 5 5 1 1-5Z"/>'
};
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text)node.textContent=text;return node}
profiles.forEach(profile=>{
const card=el('article','profile-card'),icon=el('span','platform-icon');icon.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+icons[profile.icon]+'</svg>';card.append(icon);
const details=el('div','profile-detail');details.append(el('h3','',profile.name));
if(profile.username){const username=el('p','',profile.username);username.dir='auto';details.append(username)}card.append(details);
if(profile.url && /^https:\/\//.test(profile.url)){const link=el('a','profile-action','فتح الحساب');link.href=profile.url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','فتح حساب '+profile.name);card.append(link)}
else card.append(el('span','pending-link','الرابط قريبًا'));
if(profile.name==='Discord'&&profile.username){const copy=el('button','profile-action','نسخ');copy.type='button';copy.setAttribute('aria-label','نسخ اسم Discord');copy.onclick=async()=>{try{await navigator.clipboard.writeText(profile.username);notify('تم نسخ اسم Discord')}catch{notify('اسم Discord: '+profile.username)}};card.append(copy)}
document.getElementById('profile-grid').append(card);
});
const games=[
{name:'Blox Fruits',platform:'Roblox',status:'ألعبها',url:'https://www.roblox.com/games/2753915549/Blox-Fruits'},
{name:'Plants vs. Zombies 2',platform:'Mobile',status:'ختمتها',url:'https://www.ea.com/games/plants-vs-zombies/plants-vs-zombies-2'},
{name:'EA Sports FC 26',platform:'PC',status:'ألعبها',url:'https://store.steampowered.com/app/3405690/EA_SPORTS_FC_26/'},
{name:'Euro Truck Simulator 2',platform:'PC',status:'ألعبها',url:'https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/'},
{name:'Forza Horizon',platform:'PC',status:'لعبتها',url:'https://forza.net/horizon'}
];
games.forEach((game,index)=>{
const card=el('article','game-card'),panel=el('div','game-title-panel');panel.dir='ltr';panel.append(el('span','game-index','0'+(index+1)+' / GAME'),el('h2','',game.name));card.append(panel);
const info=el('div','game-info'),meta=el('div','game-meta'),platform=el('span','',game.platform);platform.dir='ltr';meta.append(platform,el('span','status'+(game.status==='ختمتها'?' complete':''),game.status));info.append(meta);
const link=el('a','official-link','صفحة اللعبة الرسمية ↗');link.href=game.url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','صفحة '+game.name+' الرسمية');info.append(link);card.append(info);document.getElementById('game-grid').append(card);
});
const titles={profiles:'بروفايلاتي',games:'ألعابي',anime:'أنمياتي'};
const sections=[...document.querySelectorAll('.page')],links=[...document.querySelectorAll('nav a')];
const menu=document.querySelector('.menu-button'),sidebar=document.getElementById('sidebar');
function closeMenu(){sidebar.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','فتح القائمة')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';sidebar.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة')});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
matchMedia('(max-width: 800px)').addEventListener('change',closeMenu);
function showPage(focus=false){
let id=location.hash.slice(1)||'profiles';const anchor=id==='profile-links';
if(anchor)id='profiles';
if(!Object.hasOwn(titles,id)){id='profiles';history.replaceState(null,'','#profiles')}
sections.forEach(section=>section.hidden=section.id!==id);
links.forEach(link=>{if(link.hash==='#'+id)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current')});
document.title='Ryo — '+titles[id];document.getElementById('breadcrumb').textContent='مساحتي / '+titles[id];closeMenu();
if(anchor)requestAnimationFrame(()=>document.getElementById('profile-links').scrollIntoView());
else {if(focus)document.getElementById('main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'})}
}
window.addEventListener('hashchange',()=>showPage(true));
links.forEach(link=>link.addEventListener('click',()=>{if(location.hash===link.hash){closeMenu();document.getElementById('main').focus({preventScroll:true})}}));
showPage();
let toastTimer;
function notify(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),3000)}

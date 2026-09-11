
'use strict';
// Set only confirmed account usernames and URLs. Missing URLs never become dummy links.
const profiles=[
  {
    "name": "Discord",
    "username": "",
    "description": "سيرفري على Discord",
    "url": "https://discord.gg/suNuGATdMQ",
    "icon": "discord",
    "action": "فتح السيرفر"
  },
  {
    "name": "Instagram",
    "username": "@ahmad.ryo_1",
    "url": "https://www.instagram.com/ahmad.ryo_1/",
    "icon": "instagram",
    "action": "فتح الحساب"
  },
  {
    "name": "Steam",
    "username": "Ryo",
    "url": "https://steamcommunity.com/profiles/76561199764646587/",
    "icon": "steam",
    "action": "فتح الحساب"
  },
  {
    "name": "Roblox",
    "username": "",
    "description": "بروفايلي على Roblox",
    "url": "https://www.roblox.com/users/3342868559/profile",
    "icon": "roblox",
    "action": "فتح الحساب"
  }
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
if(profile.username || profile.description){const username=el('p','',profile.username || profile.description);username.dir='auto';details.append(username)}card.append(details);
if(profile.url && /^https:\/\//.test(profile.url)){const link=el('a','profile-action',profile.action);link.href=profile.url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label',profile.action+' — '+profile.name);card.append(link)}
else card.append(el('span','pending-link','الرابط قريبًا'));
document.getElementById('profile-grid').append(card);
});
const games=[
  {
    "name": "Tomb Raider (2013)",
    "platform": "PC",
    "status": "لعبتها",
    "key": "tomb-raider",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/203160/9e67774e97cdd155f287146e62611eb445514ac6/header_2x.jpg",
    "imageSource": "https://store.steampowered.com/app/203160/",
    "imageWidth": 920,
    "imageHeight": 430,
    "imageFallback": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/203160/9e67774e97cdd155f287146e62611eb445514ac6/header.jpg"
  },
  {
    "name": "Rise of the Tomb Raider",
    "platform": "PC",
    "status": "لعبتها",
    "key": "rise-of-the-tomb-raider",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391220/header.jpg",
    "imageSource": "https://store.steampowered.com/app/391220/",
    "imageWidth": 460,
    "imageHeight": 215
  },
  {
    "name": "Shadow of the Tomb Raider",
    "platform": "PC",
    "status": "لعبتها",
    "key": "shadow-of-the-tomb-raider",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/750920/header.jpg",
    "imageSource": "https://store.steampowered.com/app/750920/",
    "imageWidth": 460,
    "imageHeight": 215
  },
  {
    "name": "Roblox",
    "platform": "PC · Mobile",
    "status": "لعبتها",
    "key": "roblox",
    "url": "https://www.roblox.com/home",
    "image": "https://images.rbxcdn.com/5348266ea6c5e67b19d6a814cbbb70f6.jpg",
    "imageSource": "https://www.roblox.com/",
    "imageWidth": 1080,
    "imageHeight": 1080
  },
  {
    "name": "Hollow Knight: Silksong",
    "platform": "PC",
    "status": "لعبتها",
    "key": "silksong",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/eb4f42b7595ecf3b9c9131aaadec283158c1019e/capsule_616x353_2x.jpg",
    "imageSource": "https://store.steampowered.com/app/1030300/",
    "imageWidth": 1232,
    "imageHeight": 706,
    "imageFallback": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/eb4f42b7595ecf3b9c9131aaadec283158c1019e/capsule_616x353.jpg",
    "url": "https://store.steampowered.com/app/1030300/"
  },
  {
    "name": "Hollow Knight",
    "platform": "PC",
    "status": "لعبتها",
    "key": "hollow-knight",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/f30cc19e25cce7e46cd7dfe89f3ee7852e634232/capsule_616x353_2x.jpg",
    "imageSource": "https://store.steampowered.com/app/367520/",
    "imageWidth": 1232,
    "imageHeight": 706,
    "imageFallback": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/f30cc19e25cce7e46cd7dfe89f3ee7852e634232/capsule_616x353.jpg",
    "url": "https://store.steampowered.com/app/367520/"
  },
  {
    "name": "EA Sports FC 26",
    "platform": "PC",
    "status": "ألعبها",
    "url": "https://store.steampowered.com/app/3405690/EA_SPORTS_FC_26/",
    "key": "ea-sports-fc-26",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3405690/2d96aa1b06e453cd62dae9029d412f19e61932c3/header_2x.jpg",
    "imageSource": "https://store.steampowered.com/app/3405690/",
    "imageWidth": 920,
    "imageHeight": 430,
    "imageFallback": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3405690/2d96aa1b06e453cd62dae9029d412f19e61932c3/header.jpg"
  },
  {
    "name": "Euro Truck Simulator 2",
    "platform": "PC",
    "status": "ألعبها",
    "url": "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/",
    "key": "euro-truck-simulator-2",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/5237101dc9efe4873c9be1804d4ed2619ad7bee4/capsule_616x353_2x.jpg",
    "imageSource": "https://store.steampowered.com/app/227300/",
    "imageWidth": 1232,
    "imageHeight": 706,
    "imageFallback": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/5237101dc9efe4873c9be1804d4ed2619ad7bee4/capsule_616x353.jpg"
  },
  {
    "name": "Forza Horizon",
    "platform": "PC",
    "status": "لعبتها",
    "url": "https://forza.net/horizon",
    "key": "forza-horizon",
    "image": "https://cdn.forza.net/strapi-uploads/assets/logo_horizon_white_f308abcb59.svg",
    "imageSource": "https://forza.net/",
    "imageWidth": 377,
    "imageHeight": 78,
    "coverClass": "franchise-cover"
  }
];
games.forEach((game,index)=>{
  const card=el('article','game-card');
  if(game.image){
    const cover=el('div','game-cover'+(game.coverClass?' '+game.coverClass:'')),img=el('img');
    img.src=game.image;img.alt='غلاف '+game.name;img.width=game.imageWidth;img.height=game.imageHeight;img.dataset.source=game.imageSource;
    if(game.imageFallback)img.addEventListener('error',()=>{img.src=game.imageFallback},{once:true});
    img.loading='lazy';img.decoding='async';img.referrerPolicy='no-referrer';
    cover.append(img);card.append(cover);
  }
  const panel=el('div','game-title-panel');panel.dir='ltr';
  panel.append(el('span','game-index',String(index+1).padStart(2,'0')+' / GAME'),el('h2','',game.name));card.append(panel);
  const info=el('div','game-info'),meta=el('div','game-meta'),platform=el('span','',game.platform);platform.dir='ltr';
  meta.append(platform,el('span','status'+(game.status==='ختمتها'?' complete':''),game.status));info.append(meta);
  if(game.url){
    const link=el('a','official-link','صفحة اللعبة الرسمية ↗');link.href=game.url;link.target='_blank';link.rel='noopener noreferrer';
    link.setAttribute('aria-label','صفحة '+game.name+' الرسمية');info.append(link);
  }
  card.append(info);document.getElementById('game-grid').append(card);
});
document.getElementById('game-count').textContent=String(games.length).padStart(2,'0')+' ألعاب';
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
document.title='Ryo — '+titles[id];closeMenu();
if(anchor)requestAnimationFrame(()=>document.getElementById('profile-links').scrollIntoView());
else {if(focus)document.getElementById('main').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'})}
}
window.addEventListener('hashchange',()=>showPage(true));
links.forEach(link=>link.addEventListener('click',()=>{if(location.hash===link.hash){closeMenu();document.getElementById('main').focus({preventScroll:true})}}));
showPage();
let toastTimer;
function notify(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),3000)}




// Keep the embedded poster visible until the larger cover has loaded.
(() => {
  const poster = document.querySelector('.poster img[data-mal-id="38000"]');
  if (!poster) return;
  const fullCover = new Image();
  fullCover.referrerPolicy = 'no-referrer';
  fullCover.decoding = 'async';
  fullCover.onload = () => {
    if (fullCover.naturalWidth > 0) poster.src = fullCover.src;
  };
  fullCover.src = poster.dataset.fullSrc;
})();

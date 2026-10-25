const T=new Date('2026-11-11T18:00:00+05:00').getTime(),g=i=>document.getElementById(i);
function tick(){let l=T-Date.now();
 if(l<=0){['d','h','m','s'].forEach(i=>g(i).textContent='00');
  g('msg').textContent=l>-864e5?'Сегодня наша свадьба! Будем рады разделить этот день с вами.':'Спасибо, что разделили с нами этот особенный день!';return}
 const p=n=>String(n).padStart(2,'0');
 g('d').textContent=p(Math.floor(l/864e5));l%=864e5;
 g('h').textContent=p(Math.floor(l/36e5));l%=36e5;
 g('m').textContent=p(Math.floor(l/6e4));l%=6e4;
 g('s').textContent=p(Math.floor(l/1e3));}
tick();setInterval(tick,1000);

/* ---- Заставка ---- */
(function(){
 const sp=document.getElementById('splash');document.body.classList.add('lock');
 for(let i=0;i<14;i++){const f=document.createElement('span');f.className='fy';f.textContent=i%2?'✿':'❀';
  f.style.cssText='left:'+Math.random()*96+'%;top:'+(40+Math.random()*60)+'%;font-size:'+(14+Math.random()*14)+'px;animation-duration:'+(9+Math.random()*10)+'s;animation-delay:-'+Math.random()*12+'s';sp.appendChild(f);}
 document.getElementById('openBtn').addEventListener('click',function(){
  sp.classList.add('hide');document.body.classList.remove('lock');window.scrollTo(0,0);
  setTimeout(function(){sp.remove()},1000);});
})();

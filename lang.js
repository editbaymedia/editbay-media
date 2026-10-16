(function(){
  var l='en'; try{ l=localStorage.getItem('editbay_lang')||'en'; }catch(e){}
  document.documentElement.className=l+'-mode';
})();
function changeLang(l){
  try{ localStorage.setItem('editbay_lang',l); }catch(e){}
  document.documentElement.className=l+'-mode';
  document.documentElement.lang=l==='ko'?'ko':'en';
  updateButtons(l);
}
function updateButtons(l){
  var en=document.getElementById('btn-en'), ko=document.getElementById('btn-ko');
  if(!en||!ko) return;
  en.classList.toggle('active',l!=='ko'); ko.classList.toggle('active',l==='ko');
}
document.addEventListener('DOMContentLoaded',function(){
  var l='en'; try{ l=localStorage.getItem('editbay_lang')||'en'; }catch(e){}
  updateButtons(l); document.documentElement.lang=l==='ko'?'ko':'en';
});

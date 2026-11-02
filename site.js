(function(){
  'use strict';
  const btn=document.querySelector('[data-menu-button]'); const nav=document.querySelector('[data-nav]');
  if(btn&&nav){btn.addEventListener('click',()=>{const on=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(on));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}));}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
  // IMPORTANT: Set an approved real business contact email here before publishing live enquiries.
  const officialContactEmail='';
  const addr=document.querySelector('[data-official-email]');if(addr&&officialContactEmail){addr.textContent=officialContactEmail;addr.href='mailto:'+officialContactEmail;addr.hidden=false;}
  const soon=document.querySelector('[data-email-pending]');if(soon&&officialContactEmail)soon.hidden=true;
  const copy=document.querySelector('[data-copy-enquiry]');if(copy){copy.addEventListener('click',async()=>{const s='MIRĀS GHĀR — Enquiry\\nName: \\nOrganisation (if applicable): \\nTopic: \\nMessage: \\n';try{await navigator.clipboard.writeText(s.replaceAll('\\n','\n'));const m=document.querySelector('[data-copy-status]');if(m)m.textContent='Enquiry outline copied. You can paste it into your email.';}catch(e){const m=document.querySelector('[data-copy-status]');if(m)m.textContent='Clipboard is unavailable here; select and copy the enquiry outline below.';}});}
})();

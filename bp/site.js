
/* MIRĀS GHĀR — native JavaScript, no dependency or fake ecommerce */
(()=>{
'use strict';

const menu=document.querySelector('[data-menu]');
const nav=document.querySelector('[data-nav]');

/* MOBILE NAVIGATION */
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });

  nav.querySelectorAll('a').forEach(a=>
    a.addEventListener('click',()=>{
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
    })
  );
}

/* AUTOMATIC COPYRIGHT YEAR */
document.querySelectorAll('[data-year]').forEach(el=>{
  el.textContent=String(new Date().getFullYear());
});

/* SCROLL REVEAL ANIMATIONS */
const reveal=document.querySelectorAll('[data-reveal]');

if('IntersectionObserver' in window){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(x=>{
      if(x.isIntersecting){
        x.target.classList.add('visible');
        obs.unobserve(x.target);
      }
    });
  },{threshold:.08});

  reveal.forEach(el=>obs.observe(el));
}else{
  reveal.forEach(el=>el.classList.add('visible'));
}

/* INTERACTIVE RITUAL WALKTHROUGH */
const steps=[
  {
    title:'Open the vessel',
    icon:'✧',
    text:'Lift the signature lotus cap to reveal the proposed precision applicator. The final closure and dispensing mechanism remain subject to prototype verification.'
  },
  {
    title:'Apply aromatic oil',
    icon:'◈',
    text:'The envisioned applicator transfers an appropriate amount of aromatic oil onto a separate porous ceramic disc. Final dose guidance will depend on formulation and safety testing.'
  },
  {
    title:'Fit the ceramic disc',
    icon:'◇',
    text:'The removable disc is designed to fit inside the pendant housing. Retention, oil-contact materials and fit will require technical assessment.'
  },
  {
    title:'Carry the ritual',
    icon:'✦',
    text:'The pendant concept carries an aromatic keepsake through the day. Wearability, diffusion characteristics and safe-use instructions remain to be validated.'
  }
];

const buttons=[...document.querySelectorAll('[data-step]')];
const title=document.querySelector('[data-step-title]');
let selected=0;

function showStep(i){
  if(!title)return;

  selected=(i+steps.length)%steps.length;
  const step=steps[selected];

  title.textContent=step.title;

  document.querySelector('[data-step-icon]').textContent=step.icon;
  document.querySelector('[data-step-text]').textContent=step.text;

  document.querySelector('[data-step-number]').textContent=
    `CONCEPT STEP ${String(selected+1).padStart(2,'0')} / 04`;

  buttons.forEach((b,j)=>
    b.setAttribute('aria-pressed',String(j===selected))
  );
}

buttons.forEach((b,i)=>
  b.addEventListener('click',()=>showStep(i))
);

const next=document.querySelector('[data-step-next]');

if(next){
  next.addEventListener('click',()=>showStep(selected+1));
}

/* CONTACT — COPY ENQUIRY OUTLINE */
const copy=document.querySelector('[data-copy-outline]');

if(copy){
  copy.addEventListener('click',async()=>{
    const text=document.querySelector('#enquiry-outline').textContent;
    const feedback=document.querySelector('[data-copy-feedback]');

    try{
      await navigator.clipboard.writeText(text);

      feedback.textContent=
        'Enquiry outline copied. Paste it into your email to contact us once our official address is published.';

    }catch(e){
      feedback.textContent=
        'Select the text box above and copy it manually; clipboard access is not available in this browser.';
    }
  });
}

/* OFFICIAL EMAIL — ADD ONLY WHEN APPROVED */
const approvedEmail='';

if(approvedEmail){
  const link=document.querySelector('[data-contact-email]');

  if(link){
    link.href='mailto:'+approvedEmail;
    link.textContent=approvedEmail;
    link.hidden=false;
  }
}

})();

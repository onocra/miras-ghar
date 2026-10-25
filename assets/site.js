// SET THIS ONLY AFTER YOUR REAL DOMAIN MAILBOX HAS BEEN ACTIVATED.
// Example: const BUSINESS_EMAIL = 'info@your-owned-domain.com';
const BUSINESS_EMAIL = '';
document.querySelectorAll('[data-enquiry-email]').forEach(holder => {
  if (BUSINESS_EMAIL && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BUSINESS_EMAIL)) {
    const a = document.createElement('a');
    a.href = 'mailto:' + BUSINESS_EMAIL + '?subject=' + encodeURIComponent('Mīrās Ghār — Trade enquiry');
    a.textContent = BUSINESS_EMAIL;
    holder.replaceChildren(a);
  }
});
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear()});

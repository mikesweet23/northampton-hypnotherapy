(() => {
  const form = document.querySelector('#contact-form');
  const success = document.querySelector('#form-success');
  const reset = document.querySelector('#reset-form');
  if (!form || !success || !reset) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behaviour: 'smooth', block: 'center' });
  });
  reset.addEventListener('click', () => {
    success.hidden = true;
    form.hidden = false;
    form.querySelector('input')?.focus();
  });
})();

const scriptURL = 'https://script.google.com/macros/s/AKfycbyGEEv7ZEAfHVDuexx8itDjgkaVXJoPnPMQOzf-Mc9aI2z1hhf1mtYLbYRgoHX8FGHp/exec';
const form = document.forms['dataform'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(() => {
            alert('Thank you for your submission');
            form.reset();
        })
        .catch(() => {
            alert('We are experiencing a technical problem. Please try again later.');
        });
});


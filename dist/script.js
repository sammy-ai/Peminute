const scriptURL = 'https://script.google.com/macros/s/AKfycbwG0M7qbCgt9xkjsL_xPArRpSu6z3yo_Gg6Gh9VVntYSD8IxR9ZuDYT5wjCrxvwpLeL/exec';
const form = document.forms['dataform'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(() => {
            alert('Data successfully added!');
            form.reset();
        })
        .catch(() => {
            alert('We are experiencing a technical problem. Please try again later.');
        });
});


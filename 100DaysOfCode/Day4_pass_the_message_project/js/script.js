const form = document.querySelector('form');
const msg = document.querySelector('#message');
const msgShow = document.querySelector('.message-content');
const warning = document.querySelector('h5');

function submitMsg(e) {
    e.preventDefault();
    if (msg.value ==='') {
        warning.classList.add('show');
        setTimeout(()=> warning.classList.remove('show'), 2000)
    } else {
        msgShow.textContent = msg.value;
        msg.value = '';
    }
}

form.addEventListener('submit', submitMsg);
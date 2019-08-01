var body = document.querySelector('body');
var btn = document.querySelector('.day-night-btn');
var form = document.querySelector('.sign-up-form');
var formBtn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    if (body.className === 'day') {
        body.classList.remove('day');
        body.classList.add('night');
        btn.style.color = '#2D4059';

    } else if (body.className === 'night') {
        body.classList.remove('night');
        body.classList.add('day');
        btn.style.color = '#fedc7c';
    } 
})


formBtn.addEventListener('click', () => {
    form.style.display = 'flex';
    formBtn.style.display = 'none';
})
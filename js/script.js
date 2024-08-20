let scrollBtn = document.getElementById('goTopBtn');
let topBtn = document.getElementById('topBtn');
let modalWindow = document.getElementById('modal-window');
let modalBtn = document.getElementById('modal-btn');
let headerTop = document.querySelector('.nav-menu');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;

function validate() {
    let form = document.getElementById('main-subscribe-input');
    let target = document.getElementById('input-email');
    if (emailPattern.test(target.value) === true) {
        modalWindow.style.display = 'flex';
    }
    else {
        alert("유효한 이메일을 입력해주세요!");
    }
}

document.addEventListener('scroll', function(event) {
    if (window.scrollY >= 900) {
        scrollBtn.style.display = 'block';
        headerTop.style.position = 'fixed';
    } else {
        scrollBtn.style.display = 'none';
        headerTop.style.position = 'relative';
    }
})

topBtn.addEventListener('mouseover', function(event) {
    topBtn.src = './img/ico-top-hover.png';
})

topBtn.addEventListener('mouseout', function(event) {
    topBtn.src = './img/ico-top.png';
})

modalBtn.addEventListener('click', function(event) {
    modalWindow.style.display = 'none';
})
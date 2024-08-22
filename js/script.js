let goTopBtn = document.getElementById('goTopBtn');
let topBtn = document.getElementById('topBtn');
let modalWindow = document.getElementById('modal-window');
let modalBtn = document.getElementById('modal-btn');
let headerTop = document.querySelector('.nav-container');
let burgerBtn = document.getElementById('burger-menu');
let navMenu = document.getElementById('nav-menu');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;

let isMenuOpened = false;

function validate() {
    // let form = document.getElementById('main-subscribe-input');
    let target = document.getElementById('input-email');
    if (emailPattern.test(target.value) === true) {
        modalWindow.style.display = 'flex';
    }
    else {
        alert("유효한 이메일을 입력해주세요!");
    }
    // form.submit();
}

document.addEventListener('scroll', function() {
    if (!isMenuOpened) {
        if (window.scrollY >= 900) {
            headerTop.style.position = 'fixed';
        } else {
            headerTop.style.position = 'relative';
        }
    }
})

topBtn.addEventListener('mouseover', function() {
    topBtn.src = './img/ico-top-hover.png';
})

topBtn.addEventListener('mouseout', function() {
    topBtn.src = './img/ico-top.png';
})

modalBtn.addEventListener('click', function() {
    modalWindow.style.display = 'none';
})

burgerBtn.addEventListener('click', function() {
    let logo = document.querySelector('.logo-ico');
    let btnIco = document.querySelector('#burger-menu img');
    let container = document.querySelector('.nav-container');
    if (navMenu.classList.contains('active')) { // active를 가지고 있을 때
        isMenuOpened = false;
        logo.style.display = 'block';           // 갖고 있다면 ( 메뉴가 펼쳐지기 전 )

        navMenu.style.display = 'none';
        navMenu.style.color = '#000';
        navMenu.classList.remove('active');

        btnIco.style.padding = '0';
        btnIco.src = './img/menu.png';

        container.style.position = 'fixed';
        container.style.display = 'flex';
        container.style.background = '#F2E9D8';
        container.style.flexDirection = 'row';
        container.style.alignItems = 'center';
        container.style.gap = '150px';
        container.style.height = 'auto';
        container.style.width = '100%';
    } else {
        isMenuOpened = true;
        logo.style.display = 'none';            // 아니라면 ( 메뉴가 펼쳐진 후 )

        navMenu.style.display = 'block';
        navMenu.style.color = '#fff';
        navMenu.classList.add('active');

        btnIco.style.padding = '20px';
        btnIco.src = './img/arrow.png';

        container.style.position = 'fixed';
        container.style.display = 'block';
        container.style.background = '#263140';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'flex-start';
        container.style.gap = '150px';
        container.style.height = '100%';
        container.style.right = '0';
        container.style.top = '0';
        container.style.width = '80%';
    }
})
// let goTopBtn = document.getElementById('goTopBtn');
const topBtn = document.getElementById('topBtn');

const modalWindow = document.getElementById('modal-window');
const modalBtn = document.getElementById('modal-btn');
const modalInput = document.getElementById('input-email');
const modalFocus = document.getElementById('modal-focus');

const headerTop = document.querySelector('.nav-container');
const burgerBtn = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/;
const htmlElement = document.documentElement;
const bodyElement = document.body;

let isMenuOpened = false;

function validate() {
    // let form = document.getElementById('main-subscribe-input');
    const target = document.getElementById('input-email');
    if (emailPattern.test(target.value) === true) {
        modalWindow.style.display = 'flex';
        modalFocus.style.display = 'inline-block';
        htmlElement.classList.add('anti-scroll');
        bodyElement.classList.add('anti-scroll');
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
    modalInput.value = null;
    modalWindow.style.display = 'none';
    modalFocus.style.display = 'none';
    htmlElement.classList.remove('anti-scroll');
    bodyElement.classList.remove('anti-scroll');
})

burgerBtn.addEventListener('click', function() {
    const logo = document.querySelector('.logo-ico');
    const btnIco = document.querySelector('#burger-menu img');
    const container = document.querySelector('.nav-container');
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

modalFocus.addEventListener('click', function() {
    htmlElement.classList.remove('anti-scroll');
    bodyElement.classList.remove('anti-scroll');
    modalFocus.style.display = 'none';
    modalWindow.style.display = 'none';
})
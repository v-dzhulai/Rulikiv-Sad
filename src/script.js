/**
 * Contacts
 */
const link = document.querySelector("#contact_window");
const wind = document.querySelector("#contact_us");
const agle = document.querySelector("#contact_window i");

let winCount = 0;

link.addEventListener('click', () => {
    winCount++;
    if(winCount > 1) winCount = 0;
    wind.style.opacity = winCount;
    changeAgle(agle, winCount);
});

document.addEventListener('click', (e) => {
    if(e.target != link) {
        winCount = 0;
        wind.style.opacity = winCount;
        changeAgle(agle, winCount);
    }
});

function changeAgle(elem, count) {
    if(count === 1) {
        elem.classList.remove('fa-angle-down');
        elem.classList.add('fa-angle-up');
    } else {
        elem.classList.remove('fa-angle-up');
        elem.classList.add('fa-angle-down');
    }
}

/**
 * Modal menu
 */
const menu = document.querySelector('.menu i');
const modalWindow = document.querySelector('.modal_window');
const btnContact = document.querySelector('#contact_modal_window');
const btnAgle = document.querySelector('#contact_modal_window i');
const contactWindow = document.querySelector('#contacts_window');

let menuCount = 0;

menu.addEventListener('click', () => {
    menuCount++;
    if(menuCount > 1) menuCount = 0;

    if(menuCount === 0) {
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars');
        modalWindow.style.display = 'none';
        contactWindow.style.opacity = 0;
        changeAgle(btnAgle, menuCount);
    } else {
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
        modalWindow.style.display = 'flex';
    }
});

btnContact.addEventListener('click', () => {
    changeAgle(btnAgle, menuCount);
    contactWindow.style.opacity = menuCount;
    menuCount++;
    if(menuCount > 1) menuCount = 0;
    console.log(contactWindow);
});

/**
 * Section main
 */
const images = ['strawberries.jpg', 'plums.jpg', 'apples.jpg', 'tomatoes.webp'];

const backgroundImg = document.body.querySelector("main");
const item          = document.body.querySelectorAll(".img_item");
const prevBtn       = document.querySelector("#prev");
const nextBtn       = document.querySelector("#next");

let count = 0;

setInterval(() => {
    backgroundImg.style.opacity = 0.2;
    setTimeout(() => next(), 500);
}, 5000);

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function prev() {
    count--;
    if(count < 0) count = images.length - 1;
    backgroundImg.style.backgroundImage = "url('./src/img/" + images[count] + "')";
    backgroundImg.style.opacity = 1;
    manageClass(item[count]);   
}

function next() {
    count++;
    if(count === images.length) count = 0;
    backgroundImg.style.backgroundImage = "url('./src/img/" + images[count] + "')";
    backgroundImg.style.opacity = 1;   
    manageClass(item[count]);
}

for(let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
        count = i;
        backgroundImg.style.backgroundImage = "url('./src/img/" + images[count] + "')";
        manageClass(item[i]);
    });
}

function manageClass(obj) {
    item.forEach(x => x.classList.remove('img_item_active'));
    obj.classList.add('img_item_active');
}

/**
 * Scrolling
 */
 $(document).ready(function(){

    $("body").on("click","[data-scroll]", function (event) {
        event.preventDefault();
        var id  = $(this).attr('data-scroll'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);

    });

});
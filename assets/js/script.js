const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

const modalAuthbtn = document.querySelector(".nav-auth-btn");
const modalAuthbox = document.querySelector(".modalbox-auth");
const modalAuth = document.querySelector(".modal");
const closeBtn = document.querySelector(".closebtn");
const submitbtn = document.querySelector(".modal-btn");

const inputTitle = document.querySelector(".input-title");
const input = document.querySelector(".auth-input");
const inputTitle2 = document.querySelector(".input-title2");
const input2 = document.querySelector(".auth-input2");

const nextbtn = document.querySelector(".slider-next-btn");
const prevbtn = document.querySelector(".slider-prev-btn");
const slider1 = document.querySelector(".slider-item1");
const slider2 = document.querySelector(".slider-item2");
const slider3 = document.querySelector(".slider-item3");
const slider4 = document.querySelector(".slider-item4");

const navLink = document.querySelectorAll(".nav-link");
// const navLink2 = document.querySelector(".nav-link2");
// const navLink3 = document.querySelector(".nav-link3");
// const navLink4 = document.querySelector(".nav-link4");

let x;
addEventListener("touchstart", (e) => (x = e.changedTouches[0].clientX));

addEventListener(
    "touchend",
    (e) => e.changedTouches[0].clientX - x < -200 && swipeLeft()
);

function swipeLeft() {
    hamburger.classList.add("is-active");
    nav.classList.add("is-active");
    overlay.classList.add("is-active");
    document.body.classList.add("noscroll");
}

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    overlay.classList.toggle("is-active");
    document.body.classList.toggle("noscroll");
});

overlay.addEventListener("click", function () {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-active");
    overlay.classList.remove("is-active");
    document.body.classList.remove("noscroll");
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
        overlay.classList.remove("is-active");
        document.body.classList.remove("noscroll");
    });
}


input.addEventListener("click", function () {
    if (inputTitle.classList.contains("show")) {
        inputTitle2.classList.remove("show");
    } else {
        inputTitle.classList.toggle("show");
        inputTitle2.classList.remove("show");
    }
});

input2.addEventListener("click", function () {
    if (inputTitle2.classList.contains("show")) {
        inputTitle.classList.remove("show");
    } else {
        inputTitle2.classList.toggle("show");
        inputTitle.classList.remove("show");
    }
});

nextbtn.addEventListener("click", function () {
    if (
        slider2.classList.contains("hide") &&
        slider3.classList.contains("hide") &&
        slider4.classList.contains("hide")
    ) {
        slider2.classList.remove("hide");
        slider1.classList.add("hide");
    } else if (
        slider1.classList.contains("hide") &&
        slider3.classList.contains("hide") &&
        slider4.classList.contains("hide")
    ) {
        slider2.classList.add("hide");
        slider3.classList.remove("hide");
    } else if (
        slider1.classList.contains("hide") &&
        slider2.classList.contains("hide") &&
        slider4.classList.contains("hide")
    ) {
        slider3.classList.add("hide");
        slider4.classList.remove("hide");
    } else if (
        slider1.classList.contains("hide") &&
        slider2.classList.contains("hide") &&
        slider3.classList.contains("hide")
    ) {
        slider4.classList.add("hide");
        slider1.classList.remove("hide");
    }
});

prevbtn.addEventListener("click", function () {
    if (
        slider3.classList.contains("hide") &&
        slider2.classList.contains("hide") &&
        slider1.classList.contains("hide")
    ) {
        slider3.classList.remove("hide");
        slider4.classList.add("hide");
    } else if (
        slider1.classList.contains("hide") &&
        slider2.classList.contains("hide") &&
        slider4.classList.contains("hide")
    ) {
        slider3.classList.add("hide");
        slider2.classList.remove("hide");
    } else if (
        slider1.classList.contains("hide") &&
        slider3.classList.contains("hide") &&
        slider4.classList.contains("hide")
    ) {
        slider2.classList.add("hide");
        slider1.classList.remove("hide");
    } else if (
        slider2.classList.contains("hide") &&
        slider3.classList.contains("hide") &&
        slider4.classList.contains("hide")
    ) {
        slider1.classList.add("hide");
        slider4.classList.remove("hide");
    }
});

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {
    wScroll = this.scrollY;

    if (wScroll >= 500) {
        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }
});

function modalBox(modalBtn, modalBox, modalBlock, modalCloseBtn) {
    const btn = document.querySelector(modalBtn);
    const container = document.querySelector(modalBox);
    const block = document.querySelector(modalBlock);
    const close = document.querySelector(modalCloseBtn);

    btn.addEventListener("click", function () {
        container.classList.add("active");
        block.classList.add("active");
    });
    close.addEventListener("click", function () {
        container.classList.remove("active");
        block.classList.remove("active");
    });
    container.addEventListener("click", function(e) {   
        if (e.target.classList.contains(modalBox.replace(".", ""))) {
            container.classList.remove("active");
            block.classList.remove("active");
        }
    });
}

modalBox(
    ".modalBtn-course1",
    ".modalBox-course1",
    ".modalBlock-course1",
    ".closeBtn-course1"
); // 1 модалка

modalBox(
    ".modalBtn-course2",
    ".modalBox-course2",
    ".modalBlock-course2",
    ".closeBtn-course2"
) // 2 модалка

modalBox(
    ".modalBtn-course3",
    ".modalBox-course3",
    ".modalBlock-course3",
    ".closeBtn-course3"
); // 3 модалка

modalBox(
    ".modalBtn-auth",
    ".modalBox-auth",
    ".modalBlock-auth",
    ".closeBtn-auth"
);


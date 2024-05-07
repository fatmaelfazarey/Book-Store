let primary = "#1182c5";
let secondary = "#2aa6df";
// let dark = "#1e1e1e";
let dark = "rgb(3 7 18)";
let light = "#f5f5f5";

let M_mode = document.getElementById("M_mode");
let D_mode = document.getElementById("D_mode");
let mode = document.querySelectorAll(".mode");
let header = document.querySelectorAll("header");
let Q_links_hover = document.querySelectorAll('.Q_links_hover');
let textbook = document.querySelectorAll('.textbook');
let testimonial = document.querySelectorAll('.testimonialBG');
let list_icons = document.querySelector('.icons').children;
let up_icons = document.querySelector('#up');
let best_seller = document.querySelector('#best_seller');
let best_books = document.querySelector('.best_books');


D_mode.onclick = () => {
    change_mode(D_mode.src)
}
M_mode.onclick = () => {
    change_mode(M_mode.src)
}

function change_mode(mode_src) {

    if (mode_src.includes('light-mode-button.png')) {

        let src = mode_src.replace('light-mode-button.png', 'dark-mode-button.png');
        Mode(src, light, dark, "rgb(17, 24, 39)");
        shadow("-1px 14px 12px 1px rgb(41 41 41 / 27%)", "0px 20px 10px 0px rgb(0 0 0)");
    }
    else {
        let src = mode_src.replace('dark-mode-button.png', 'light-mode-button.png');
        Mode(src, dark, light, "rgb(255, 255, 255)");
        shadow("0px 14px 10px 0px rgba(0, 0, 0, 0.1)", "0px 20px 10px 0px rgba(0, 0, 0, 0.9)");
    }
}

if (localStorage.src || localStorage.color || localStorage.backgroundColor || localStorage.window_bg_color) {
    Mode(localStorage.src, localStorage.color, localStorage.backgroundColor, localStorage.window_bg_color);
}

function Mode(src, color, backgroundColor, window_bg_color) {
    if (localStorage.src) {
        mode.forEach(element => {
            element.src = localStorage.src;
        });

    }
    localStorage.setItem("src", src);
    mode.forEach(element => {
        element.src = localStorage.src;
    });

    if (localStorage.color) {
        localStorage.setItem("color", color);
        document.getElementsByTagName('body')[0].style.color = localStorage.color;
        list_icons[0].style.backgroundColor = localStorage.color;
        list_icons[1].style.backgroundColor = localStorage.color;
        list_icons[2].style.backgroundColor = localStorage.color;
    }
    localStorage.setItem("color", color);
    document.getElementsByTagName('body')[0].style.color = localStorage.color;
    list_icons[0].style.backgroundColor = localStorage.color;
    list_icons[1].style.backgroundColor = localStorage.color;
    list_icons[2].style.backgroundColor = localStorage.color;

    if (localStorage.backgroundColor) {
        localStorage.setItem("backgroundColor", backgroundColor);
        document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.backgroundColor;
    }

    localStorage.setItem("backgroundColor", backgroundColor);
    document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.backgroundColor;


    if (localStorage.window_bg_color) {
        localStorage.setItem("window_bg_color", window_bg_color);

        header.forEach(element => {
            element.style.backgroundColor = localStorage.window_bg_color;
        });

        document.querySelector(".orderForm").style.backgroundColor = localStorage.window_bg_color;

        Q_links_hover.forEach(element => {
            element.style.backgroundColor = localStorage.window_bg_color;
        });

        textbook.forEach(element => {
            element.style.backgroundColor = localStorage.window_bg_color;
        });

        testimonial.forEach(element => {
            element.style.backgroundColor = localStorage.window_bg_color;
        });

        document.querySelector('.footerSection').style.backgroundColor = localStorage.window_bg_color;
        // up_icons.style.backgroundColor = localStorage.window_bg_color;
    }

    localStorage.setItem("window_bg_color", window_bg_color);

    header.forEach(element => {
        element.style.backgroundColor = localStorage.window_bg_color;
    });

    document.querySelector(".orderForm").style.backgroundColor = localStorage.window_bg_color;

    Q_links_hover.forEach(element => {
        element.style.backgroundColor = localStorage.window_bg_color;
    });

    textbook.forEach(element => {
        element.style.backgroundColor = localStorage.window_bg_color;
    });

    testimonial.forEach(element => {
        element.style.backgroundColor = localStorage.window_bg_color;
    });

    document.querySelector('.footerSection').style.backgroundColor = localStorage.window_bg_color;
    // up_icons.style.backgroundColor = localStorage.window_bg_color;

}

window.onclick = (e) => {


}
document.querySelector(".BtnOrder").onclick = (event) => {
    console.log("df")
    document.querySelector(".form").style.display = "block";
    document.querySelector('#blur').classList.add("blur");
}
document.querySelector(".exit").onclick = () => {
    document.querySelector(".form").style.display = "none";
    document.querySelector('#blur').classList.remove("blur");
}

function shadow(shadowMode, shadowIMG) {
    textbook.forEach(element => {
        element.style.boxShadow = shadowMode;
    });
    document.getElementById('libImg').style.boxShadow = shadowIMG;
}


// Show up icons when scroll up
let scrollableElement = document.body;

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event) && document.documentElement.scrollTop > 50) {
        up_icons.style.visibility = "visible";
        up_icons.classList.add('scroll_up');
        // console.log('UP');
    } else {
        // console.log('Down');
        up_icons.style.visibility = "hidden";
        if (up_icons.classList.contains('scroll_up')) {
            up_icons.classList.remove('scroll_up');
        }
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    up_icons.style.visibility = "hidden";
}

// console.log(best_seller.getBoundingClientRect().height)//return height of elemant
// console.log(best_seller.offsetTop);//return height to top of window
// console.log(document.documentElement.scrollTop); //return the value of scroll


window.onscroll = function () {
    best_booksFun();
    Library_scroll_visible();
    yourAppSys_scroll_visible();
    topBooks_scroll_visible();
    footer_scroll_visible();

}

function best_booksFun() {
    if (document.documentElement.scrollTop >= best_books.offsetTop - 500 && document.documentElement.scrollTop <= best_books.offsetTop + best_books.getBoundingClientRect().height - 200) {
        best_books.classList.add('visible');
    } else {
        best_books.classList.remove('visible');
    }
}
function Library_scroll_visible() {
    if (document.documentElement.scrollTop >= document.querySelector('.libImg').offsetTop - 500 &&
        document.documentElement.scrollTop <= document.querySelector('.libImg').offsetTop +
        document.querySelector('.libImg').getBoundingClientRect().height) {

        document.querySelector('.libImg').classList.add('Library_visible');
    }
    else {
        document.querySelector('.libImg').classList.remove('Library_visible');
    }
    if (document.documentElement.scrollTop >= document.querySelector('.libtext').offsetTop - 500 &&
        document.documentElement.scrollTop <= document.querySelector('.libtext').offsetTop +
        document.querySelector('.libtext').getBoundingClientRect().height) {

        document.querySelector('.libtext').classList.add('Library_visible');
    }
    else {
        document.querySelector('.libtext').classList.remove('Library_visible');
    }
}
function yourAppSys_scroll_visible() {
    if (document.documentElement.scrollTop >= document.querySelector('.yourAppSys').offsetTop - 500 &&
        document.documentElement.scrollTop <= document.querySelector('.yourAppSys').offsetTop +
        document.querySelector('.yourAppSys').getBoundingClientRect().height) {

        document.querySelector('.yourAppSys').classList.add('yourAppSys_visible');
    }
    else {
        document.querySelector('.yourAppSys').classList.remove('yourAppSys_visible');
    }
}
function footer_scroll_visible() {
    if (document.documentElement.scrollTop >= document.querySelector('.footerSection').offsetTop - 550 &&
        document.documentElement.scrollTop <= document.querySelector('.footerSection').offsetTop +
        document.querySelector('.footerSection').getBoundingClientRect().height) {

        document.querySelector('.footerSection').classList.add('footer_visible');
    }
    else {
        document.querySelector('.footerSection').classList.remove('footer_visible');
    }
}


function topBooks_scroll_visible() {
    if (document.documentElement.scrollTop >= document.querySelector('#top_books').offsetTop - 500 &&
        document.documentElement.scrollTop <= document.querySelector('#top_books').offsetTop +
        document.querySelector('#top_books').getBoundingClientRect().height) {

        document.querySelector('#top_books').classList.add('top_visible');
    }
    else {
        document.querySelector('#top_books').classList.remove('top_visible');
    }
}
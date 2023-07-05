const page = document.querySelector('body');
const themeButton = document.getElementById('theme');
const buttons = document.getElementsByClassName("button");
const heroDisplay = document.getElementById("hero-display");
const shapes = document.getElementsByClassName("shape");
const contact = document.querySelector(".contact h3");
const findMe = document.getElementById("findme");

let theme = "light";

const v = {
    lightBackground: "#FFF7E7",
    darkBackground: "#0A0A0A",
    accentColor1: "#FF0C48",
    accentColor2: "#C1EE6C"
};

function setDark() {
    theme = "dark";

    page.style.backgroundColor = v.darkBackground;

    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].style.backgroundColor = "white";
        buttons[i].style.color = "black";
        buttons[i].addEventListener("pointerover", () => {
                buttons[i].style.backgroundColor = v.accentColor1;
                buttons[i].style.color = "white";
            }
        )
        buttons[i].addEventListener("pointerout", () => {
                buttons[i].style.backgroundColor = "white";
                buttons[i].style.color = "black";
            }
        )
    }

    themeButton.style.backgroundColor = v.accentColor1;
    themeButton.style.color = "white";

    document.getElementById("theme-icon").classList = "fa-solid fa-cloud-sun";
    document.getElementById("theme-name").innerText = "Light mode";

    for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.outline = "6px solid " + v.darkBackground;
        shapes[i].style.color = "white";
        shapes[i].style.backgroundColor = "#000";
        if (!shapes[i].classList.contains('one')) {
            shapes[i].style.backgroundColor = v.accentColor2 + "88";
        }
    }

    /*for (let i = 0; i < content.length; i++) {
        content[i].style.outline = "6px solid " + v.darkBackground;
        content[i].style.backgroundColor = "#00000088";
    }*/

    contact.style.color = "white";
    findMe.style.backgroundColor = v.accentColor2;
    findMe.style.color = "black";

}

function setLight() {
    theme = "light";

    page.style.backgroundColor = v.lightBackground;

    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].style.backgroundColor = "black";
        buttons[i].style.color = "white";
        buttons[i].addEventListener("pointerover", () => {
                buttons[i].style.backgroundColor = v.accentColor1;
            }
        )
        buttons[i].addEventListener("pointerout", () => {
                buttons[i].style.backgroundColor = "black";
                buttons[i].style.color = "white";
            }
        )
    }

    themeButton.style.backgroundColor = v.accentColor1;

    document.getElementById("theme-icon").classList = "fa-solid fa-cloud-moon";
    document.getElementById("theme-name").innerText = "Dark mode";


    for (let i = 0; i < shapes.length; i++) {
        shapes[i].style.outline = "6px solid " + v.lightBackground;
        shapes[i].style.color = "black";
        shapes[i].style.backgroundColor = "white";
        if (!shapes[i].classList.contains('one')) {
            shapes[i].style.backgroundColor = v.accentColor2 + "88";
        }
    }

    /*for (let i = 0; i < content.length; i++) {
        content[i].style.outline = "6px solid " + v.lightBackground;
        content[i].style.backgroundColor = "#FFFFFF88";
    }*/

    contact.style.color = "black";
    findMe.style.backgroundColor = "black";
    findMe.style.color = "white";
}

function setTheme() {
    switch (theme)  {
        case "light":
            setDark();
            break;
        case "dark":
            setLight();
            break;
    }
}

themeButton.addEventListener('click', setTheme);
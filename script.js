const welcomePage = document.getElementById("welcomePage");
const mainPage = document.getElementById("mainPage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

const users = [
    { username: "Teja", password: "3913" },
    { username: "Abhinav", password: "3953" },
    { username: "Praneeth", password: "3934" }
];

// Login
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const u = username.value;
    const p = password.value;

    const valid = users.some(user => user.username === u && user.password === p);

    if (valid) {
        welcomePage.style.display = "none";
        mainPage.style.display = "block";
        aboutPage.style.display = "none";
        contactPage.style.display = "none";
        message.innerText = "";
    } else {
        message.innerText = "Invalid login details";
    }
});

// Navigation functions
function showHome() {
    mainPage.style.display = "block";
    aboutPage.style.display = "none";
    contactPage.style.display = "none";
}

function showAbout() {
    mainPage.style.display = "none";
    aboutPage.style.display = "block";
    contactPage.style.display = "none";
}

function showContact() {
    mainPage.style.display = "none";
    aboutPage.style.display = "none";
    contactPage.style.display = "block";
}


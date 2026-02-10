// ================= script.js =================

// Page sections
const welcomePage = document.getElementById("welcomePage");
const mainPage = document.getElementById("mainPage");

// Login elements
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const exitBtn = document.getElementById("exitBtn");

// Login data (3 users)
const users = [
    { username: "Teja", password: "3913" },
    { username: "Abhinav", password: "3953" },
    { username: "00", password: "00" }
];

// Login logic
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    const validUser = users.some(
        user =>
            user.username === enteredUsername &&
            user.password === enteredPassword
    );

    if (validUser) {
        welcomePage.style.display = "none";
        mainPage.style.display = "block";
        message.innerText = "";
    } else {
        message.innerText = "Invalid login details";
    }
});

// Exit logic
exitBtn.addEventListener("click", function () {
    mainPage.style.display = "none";
    welcomePage.style.display = "block";
    loginForm.reset();
});

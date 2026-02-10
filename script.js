* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #e0e0e0;
    min-height: 100vh;
}

/* Center pages */
.center-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* Titles */
.main-title {
    font-size: 36px;
    color: #333;
    margin-bottom: 10px;
    letter-spacing: 1px;
}

.team {
    color: #666;
    margin-bottom: 30px;
}

/* Login box */
.login-box {
    background: #ffffff;
    width: 300px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    text-align: center;
}

.login-box h2 {
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

button {
    width: 100%;
    padding: 10px;
    background: #555;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
}

button:hover {
    background: #333;
}

#message {
    margin-top: 10px;
    color: red;
}

/* Main page */
#mainPage {
    display: none;
}

/* Page container */
.page {
    max-width: 800px;
    margin: 60px auto;
    background: #f7f7f7;
    padding: 40px;
    border: 3px solid black;
    outline: 6px solid #cfcfcf;
    outline-offset: -12px;
    text-align: center;
}

/* Content text */
.content-text {
    font-size: 17px;
    color: #333;
    line-height: 1.7;
    margin-top: 20px;
}

.highlight {
    font-weight: bold;
    color: #222;
}

/* Exit button */
#exitBtn {
    margin-top: 30px;
    width: 120px;
}

/* Mobile responsive */
@media (max-width: 768px) {
    .main-title {
        font-size: 26px;
    }

    .login-box {
        width: 90%;
    }

    .page {
        margin: 20px;
        padding: 25px;
    }
}

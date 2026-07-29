@import url('https://fonts.googleapis.com/css2?family=Geist+Pixel&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    height: 100vh;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title{
    position: absolute;
    top: 260px;
    font-size: 42px;
    font-weight: 700;
    font-family: "Geist Pixel", sans-serif;
    color: #ffd700;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.clock {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 580px;
    height: 150px;
    border: 1px solid #ffd700;
    border-radius: 18px;
    box-shadow: 5px 15px 40px rgba(0, 0, 0, 0.5);
}

.time-box {
    width: 110px;
    text-align: center;
}

.time-box span {
    display: block;
    font-size: 60px;
    font-weight: 700;
    color: #ffd700;
    font-family: "Geist Pixel", sans-serif;
}

.time-box p {
    font-size: 11px;
    letter-spacing: 2px;
    color: #777;
    display: block;
    
}

.divider {
    width: 2px;
    height: 70px;
    background: linear-gradient(180deg, #0000, #ffd700, #0000);
    margin: 0 22px;
}

.ampm {
    padding: 8px 14px;
    border-radius: 8px;
    background: #111;
    color: #ffd700;
    font-size: 14px;
    border: 0.5px solid #ffd700;
    margin-left: 25px;
}

#themeBtn {
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 10px 20px;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #ffd700;
    color: #222;
    font-weight: bold;
}

body.light {
    background: #f5f5f5;
}

body.light .clock {
    border: 1px solid #222;
}

body.light .time-box span {
    color: #222;
}

body.light .divider {
    background: linear-gradient(180deg, #0000, #222, #0000);
}

body.light .ampm {
    background: #fff;
    color: #222;
    border: 1px solid #222;
}

body.light .time-box p {
    color: #555;
}

.date{
    position: absolute;
    top: 340px;
    color: #ffd700;
    font-size: 22px;
    font-weight: 600;
    font-family: "Geist Pixel", sans-serif;
    letter-spacing: 2px;
}

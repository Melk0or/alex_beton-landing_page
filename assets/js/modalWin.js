let modal = document.getElementById("myModal");
let openBtn = document.getElementById("myBtn");
let openBtn1 = document.getElementById("openBtn1")
let openBtn2 = document.getElementById("openBtn2")
let closeBtn = document.getElementsByClassName("close")[0];

let html = document.body;

openBtn.onclick = function () {
    modal.style.display = "block";
    document.body.classList.toggle('_lock');
}

openBtn1.onclick = function () {
    modal.style.display = "block";
    document.body.classList.toggle('_lock');
}

openBtn2.onclick = function () {
    modal.style.display = "block";
    document.body.classList.toggle('_lock');
}

closeBtn.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove('_lock');
}


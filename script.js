const btnNo = document.querySelector("#btn-random")

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

if (btnNo) {
    const moverBoton = (e) => {
        e.preventDefault();
        moverAleatoriamente(btnNo);
    };

    btnNo.addEventListener("mouseenter", moverBoton);
    btnNo.addEventListener("pointerdown", moverBoton);
}

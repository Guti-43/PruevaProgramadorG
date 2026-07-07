const btnNo = document.querySelector("#btn-random")

function moverAleatoriamente(btn) {
    const zona = btn.closest(".btn");
    if (!zona) {
        return;
    }

    btn.style.position = "absolute";
    btn.style.zIndex = "20";
    btn.style.right = "auto";
    btn.style.bottom = "auto";
    btn.style.left = "auto";
    btn.style.top = "auto";
    btn.style.opacity = "1";
    btn.style.visibility = "visible";
    btn.style.fontWeight = "bolder";

    const margin = 10;
    const maxX = Math.max(margin, zona.clientWidth - btn.offsetWidth - margin);
    const maxY = Math.max(margin, zona.clientHeight - btn.offsetHeight - margin);
    const x = Math.floor(Math.random() * (maxX - margin + 1)) + margin;
    const y = Math.floor(Math.random() * (maxY - margin + 1)) + margin;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

if (btnNo) {
    const moverBoton = (e) => {
        e.preventDefault();
        moverAleatoriamente(btnNo);
    };

    btnNo.addEventListener("mouseenter", moverBoton);
    btnNo.addEventListener("pointerdown", moverBoton);
}

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const body = document.body;
const bloqueo = document.createElement('div');

bloqueo.classList.add('bloqueo');
document.body.appendChild(bloqueo);

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    body.classList.add('no-scroll');
    bloqueo.classList.add('bloqueo-activo');
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Suaviza el desplazamiento
    });
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    body.classList.remove('no-scroll');
    bloqueo.classList.remove('bloqueo-activo');
})

function loadScript(a) {
    var b = document.getElementsByTagName("head")[0], c = document.createElement("script");
    c.type = "text/javascript", c.src = "https://tracker.metricool.com/resources/be.js", c.onreadystatechange = a,c.onload = a,b.appendChild(c)
}
loadScript(function () {
    beTracker.t({hash: "b6b36abfeca41b174962054b1e4cb8ce"})
});

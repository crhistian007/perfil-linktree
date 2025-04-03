document.getElementById("nombre").textContent = "Crhistian Castañeda Balcazar";
document.getElementById("descripcion").textContent = "Estudiante para desarrollo web.";

const iconoDOM=document.querySelector("#icono")
function Twiter(){
    window.open("https://x.com/IRONMANtri", "_blank");
}

function Merch(){
    window.open("https://www.bonfire.com/online-stores/", "_blank");
}
function Contact(){
    window.open("https://www.facebook.com/crhistian.castaneda.1", "_blank");
}

iconoDOM.innerHTML=`
                <a href="https://x.com/IRONWATT" target="_blank"><img src="twitter.png" alt="twitter" /></a>
                <a href="https://www.facebook.com/crhistian.castaneda.1" target="_blank"><img src="logo-de-facebook.png" alt="facebook" /></a>
                <a href="https://www.instagram.com/famosos/" target="_blank"><img src="instagram.png" alt="instagram" /></a>
                <a href="https://open.spotify.com/intl-es" target="_blank"><img src="spotify.png" alt="spotify" /></a>`
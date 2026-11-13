const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
})

// Toggle, quando o evento for disparado, ele tira ou retira a classe desejada
// dependendo se o elemento tem ou não a classe.

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)' 
    }
})

// Adicionei um evento para que a barra de navegação adicione uma pequena
//sombra ao rolar a tela para baixo
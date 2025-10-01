document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos del menú
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-link'); 

    // 2. Lógica del menú desplegable (hamburguesa)
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    // 3. Cerrar menú al hacer clic en un enlace (importante en móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
            }
            console.log(`Navegando a la sección: ${link.textContent}`);
        });
    });
});
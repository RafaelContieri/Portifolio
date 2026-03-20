document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselElement = document.getElementById('carouselExampleFade');

    // 1. Inicializa o Carrossel do Bootstrap 100% MANUAL
    let bsCarousel = new bootstrap.Carousel(carouselElement, {
        interval: false, // Desativa a passagem automática
        ride: false,     // Impede que comece a rodar ao carregar
        pause: 'hover'   // (Opcional) Pausa ao passar o mouse se houvesse timer
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Ajuste visual dos botões de filtro
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            let firstVisibleFound = false;

            // 2. Lógica de Filtragem dos Itens
            carouselItems.forEach(item => {
                const category = item.getAttribute('data-category');

                // Reset total: removemos classes de ativação e visibilidade
                item.classList.remove('active', 'd-block');
                item.classList.add('d-none');

                if (filterValue === 'todos' || category === filterValue) {
                    item.classList.remove('d-none');
                    item.classList.add('d-block');

                    // O primeiro item que sobrar no filtro será o slide inicial
                    if (!firstVisibleFound) {
                        item.classList.add('active');
                        firstVisibleFound = true;
                    }
                }
            });

            // 3. Reinicia a instância para o Bootstrap reconhecer os novos itens visíveis
            // Sem isso, as setas tentariam navegar para itens escondidos
            bsCarousel.dispose();
            bsCarousel = new bootstrap.Carousel(carouselElement, {
                interval: false,
                ride: false
            });


            // 4. Controle Opcional das Setas
            // Se houver apenas 1 projeto no filtro, as setas desaparecem
            const visibleItems = document.querySelectorAll('#carouselExampleFade .carousel-item.d-block');
            const controls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');

            controls.forEach(control => {
                control.style.display = visibleItems.length <= 1 ? 'none' : 'flex';
            });
        });
    });

    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    hide: true
                });
            }
        });
    });

});
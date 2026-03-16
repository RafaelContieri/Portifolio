document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de transparência na Navbar ao rolar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '1rem 0';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.padding = '2rem 0';
        }
    });

    // 2. Animação de entrada do texto (Hero)
    const heroText = document.querySelector('.hero-text-container');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-20px)';
        heroText.style.transition = 'all 1s ease-out';

        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }, 300);
    }

    // 3. Filtro do Portfólio
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Mudar classe ativa dos botões
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projects.forEach(project => {
                const category = project.getAttribute('data-category');
                
                if (filterValue === 'todos' || category === filterValue) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });

    // 4. Controle das Setas do Carrossel
    const carousel = document.getElementById('projectCarousel');
    const btnPrev = document.getElementById('prevBtn');
    const btnNext = document.getElementById('nextBtn');

    if (carousel && btnPrev && btnNext) {
        const scrollAmount = 450; // Ajuste conforme a largura do seu card

        btnNext.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // 5. Botão Voltar ao Topo
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
        topBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
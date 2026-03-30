document.addEventListener('DOMContentLoaded', function() {

    // ...existing code...
    const filterButtons = document.querySelectorAll('.filter-btn');
    // ...existing code...    const projectCards = document.querySelectorAll('.project-card');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) {
        console.error("ERRO: Botões de filtro ou cards de projeto não encontrados na página.");
        return;
    }

    filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        projectCards.forEach(card => {
            // assume each .project-card has `data-filter` (or change to `data-category`)
            if (filterValue === 'all' || card.getAttribute('data-filter') === filterValue) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
    console.log("Filtro de projetos carregado com sucesso!");
});
});
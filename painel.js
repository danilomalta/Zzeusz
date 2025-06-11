
document.addEventListener('DOMContentLoaded', () => {
    // Simula carregamento de dados do painel
    const cards = document.querySelector('.cards');
    const sectors = [
        'PDV', 'Estoque', 'Logística', 'Fiscal',
        'Contábil', 'Vendas', 'Relatórios',
        'Financeiro', 'Configurações'
    ];

    sectors.forEach(sector => {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = sector;
        cards.appendChild(card);
    });
});

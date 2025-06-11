
document.addEventListener('DOMContentLoaded', () => {
    const navigateTo = (page) => {
        window.location.hash = `#/${page}`;
        window.location.href = `pages/${page}.html`;
    };

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });
});

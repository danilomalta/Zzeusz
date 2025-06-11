
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (/^\S+@\S+\.\S+$/.test(email)) {
                window.location.href = 'pages/painel.html';
            } else {
                alert('E-mail inválido');
            }
        });
    }
});

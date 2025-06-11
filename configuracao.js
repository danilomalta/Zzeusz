
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-nav button');
    const setupSteps = document.querySelectorAll('.setup-step');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setupSteps.forEach(step => step.classList.remove('active'));
            document.getElementById(btn.dataset.step).classList.add('active');
        });
    });

    document.querySelectorAll('.setup-step .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const nextStep = btn.dataset.next;
            if (nextStep === 'finish') {
                window.location.href = 'pages/painel.html';
            } else {
                tabButtons.forEach(b => b.classList.remove('active'));
                document.querySelector(`[data-step="${nextStep}"]`).classList.add('active');
                setupSteps.forEach(step => step.classList.remove('active'));
                document.getElementById(nextStep).classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('report-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí se simula el envío del formulario.
        // En una aplicación real, aquí se enviaría la información a un servidor seguro.
        
        form.style.display = 'none';
        formMessage.classList.remove('hidden');

        setTimeout(() => {
            form.style.display = 'block';
            formMessage.classList.add('hidden');
            form.reset();
        }, 5000);
    });
});
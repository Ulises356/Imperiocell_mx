<script>
    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.buy-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const phone = this.dataset.phone;
                const price = this.dataset.price;

                // Aquí rediriges a la nueva página o mueves a una sección del mismo HTML
                window.location.href = `comprar.html?phone=${encodeURIComponent(phone)}&price=${price}&memory=${encodeURIComponent(memory)}&camera=${encodeURIComponent(camera)}&battery=${encodeURIComponent(battery)}`;
            });
        });
    });
</script>
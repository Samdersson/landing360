document.addEventListener('DOMContentLoaded', () => {
    // 1. Rastrear conversiones de WhatsApp en Google Analytics
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'click_whatsapp_menus', {
                    'event_category': 'Conversión Pauta',
                    'event_label': 'Solicitud Menú Digital'
                });
            }
        });
    });

    // 2. Efecto dinámico de elevación en las tarjetas
    const cards = document.querySelectorAll('.pill-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.03) translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) translateY(0)';
        });
    });
});
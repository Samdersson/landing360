document.addEventListener('DOMContentLoaded', () => {
    console.log("Módulo de Conversión de Menús Digitales inicializado correctamente.");
    
    // Pequeño efecto dinámico al pasar el cursor sobre los elementos incluidos del flyer
    const features = document.querySelectorAll('.feature-item');
    features.forEach(item => {
        item.style.transition = 'transform 0.2s ease';
        item.addEventListener('mouseenter', () => item.style.transform = 'translateY(-3px)');
        item.addEventListener('mouseleave', () => item.style.transform = 'translateY(0)');
    });
});


// SIMULACIÓN DE DESPACHO DE PEDIDO (ENTORNO DE DEMOSTRACIÓN DE 360° DIGITAL)
document.addEventListener('DOMContentLoaded', () => {
    
    // Escuchamos el clic en cualquier botón de acción dentro de los modales de demostración
    document.body.addEventListener('click', (e) => {
        // Verificamos si el usuario presionó un botón de prueba de pedido
        const targetBtn = e.target.closest('.btn-whatsapp, .btn-whatsapp-large');
        
        if (targetBtn) {
            // Evaluamos si el botón pertenece a un entorno demo para interceptarlo
            const originalUrl = targetBtn.getAttribute('href');
            
            if (originalUrl && originalUrl.includes('wa.me')) {
                e.preventDefault(); // Congelamos la redirección real a WhatsApp
                
                // Extraemos y decodificamos el texto que iba a viajar por la API
                const urlParams = new URL(originalUrl);
                const textParam = urlParams.searchParams.get('text') || "Hola, solicito información sobre los servicios de 360° Digital.";
                
                // Disparamos la ventana de simulación en pantalla
                mostrarSimulacionCelular(textParam);
            }
        }
    });

    function mostrarSimulacionCelular(mensajeTexto) {
        // 1. Creamos la estructura flotante del simulador
        const simuladorContainer = document.createElement('div');
        simuladorContainer.id = 'simulador-whatsapp-360';
        
        // Estilos Dark Premium alineados a tu look de marca
        simuladorContainer.style.position = 'fixed';
        simuladorContainer.style.top = '0';
        simuladorContainer.style.left = '0';
        simuladorContainer.style.width = '100%';
        simuladorContainer.style.height = '100%';
        simuladorContainer.style.backgroundColor = 'rgba(11, 15, 25, 0.9)';
        simuladorContainer.style.backdropFilter = 'blur(8px)';
        simuladorContainer.style.display = 'flex';
        simuladorContainer.style.justifyContent = 'center';
        simuladorContainer.style.alignItems = 'center';
        simuladorContainer.style.zIndex = '3000'; // Por encima de los otros modales
        simuladorContainer.style.opacity = '0';
        simuladorContainer.style.transition = 'opacity 0.3s ease';
        simuladorContainer.style.padding = '20px';

        // 2. Maqueta de la interfaz emulando un chat de mensajería automatizado
        simuladorContainer.innerHTML = `
            <div style="background: #151b2c; border: 1px solid #222b44; padding: 25px; border-radius: 16px; max-width: 420px; width: 100%; box-shadow: 0 0 35px rgba(255, 42, 75, 0.3); text-align: left;">
                
                <div style="text-align: center; margin-bottom: 20px; border-bottom: 1px solid #222b44; padding-bottom: 15px;">
                    <span style="color: #ff2a4b; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 4px;">ENTORNO DE PRUEBA INTERACTIVO</span>
                    <h4 style="color: white; font-size: 18px; font-weight: 800;"><i class="fa-brands fa-whatsapp" style="color: #25d366;"></i> Simulación de Pedido Automático</h4>
                </div>

                <p style="color: #94a3b8; font-size: 13px; margin-bottom: 15px; line-height: 1.5;">
                    Así es como llega el reporte de venta estructurado al chat del comerciante cuando un usuario interactúa con tu <strong>Catálogo o Menú Web</strong>:
                </p>

                <!-- Caja de Texto que simula la pantalla del chat -->
                <div style="background: #0b0f19; border: 1px solid #1e293b; padding: 15px; border-radius: 8px; margin-bottom: 20px; max-height: 200px; overflow-y: auto;">
                    <pre style="color: #25d366; font-family: 'Courier New', Courier, monospace; font-size: 12.5px; white-space: pre-wrap; word-break: break-word; margin: 0;">${mensajeTexto}</pre>
                </div>

                <p style="color: #64748b; font-size: 11.5px; margin-bottom: 20px; text-align: justify; line-height: 1.4;">
                    * En la aplicación real, el sistema procesa los datos de los componentes de React o JS, suma los subtotales en caliente y abre la API de WhatsApp despachando el mensaje sin que el cliente deba escribir nada.
                </p>

                <!-- Botón para destruir la simulación -->
                <button id="cerrar-simulador" style="background: #ff2a4b; color: white; border: none; padding: 12px; border-radius: 8px; width: 100%; font-weight: 700; font-size: 14px; cursor: pointer; box-shadow: 0 4px 12px rgba(255, 42, 75, 0.3); transition: background 0.2s;">
                    Entendido, Volver al Demo
                </button>
            </div>
        `;

        // 3. Inyectamos al DOM y aplicamos la transición suave
        document.body.appendChild(simuladorContainer);
        setTimeout(() => simuladorContainer.style.opacity = '1', 10);

        // 4. Captura del evento de cierre
        document.getElementById('cerrar-simulador').addEventListener('click', () => {
            simuladorContainer.style.opacity = '0';
            setTimeout(() => simuladorContainer.remove(), 300);
        });
    }
});

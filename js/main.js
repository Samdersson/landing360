document.addEventListener('DOMContentLoaded', () => {
    // Rastrear clics hacia WhatsApp en Google Analytics
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'click_whatsapp', {
                    'event_category': 'Conversión',
                    'event_label': 'Contacto WhatsApp'
                });
            }
        });
    });

    // Registrar apertura de modales como interacción
    const cards = document.querySelectorAll('.pill-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'abrir_modal_servicio', {
                    'event_category': 'Engagement',
                    'event_label': card.id
                });
            }
        });
    });
});

// Añadir un efecto dinámico de iluminación en las tarjetas al pasar el cursor
document.addEventListener('DOMContentLoaded', () => {
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


document.addEventListener('DOMContentLoaded', () => {
    const btnCatalogo = document.getElementById('btn-catalogo');

    if (btnCatalogo) {
        btnCatalogo.addEventListener('click', () => {
            // 1. Creamos la estructura visual de la ventana flotante en el aire
            const modal = document.createElement('div');
            modal.id = 'modal-catalogo';
            
            // Estilos rápidos inyectados para mantener el look oscuro y rojo premium
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(11, 15, 25, 0.9)';
            modal.style.backdropFilter = 'blur(8px)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zindex = '2000';
            modal.style.opacity = '0';
            modal.style.transition = 'opacity 0.3s ease';

            // 2. Contenido de la tarjeta de previsualización
            modal.innerHTML = `
                <div style="background: #151b2c; border: 1px solid #22b44; padding: 30px; border-radius: 16px; max-width: 450px; width: 90%; text-align: center; box-shadow: 0 0 30px rgba(255, 42, 75, 0.2);">
                    <span style="color: #ff2a4b; font-size: 12px; font-weight: 700; uppercase; letter-spacing: 1px; display: block; margin-bottom: 10px;">PROYECTO DESPLEGADO</span>
                    <h3 style="color: white; font-size: 22px; margin-bottom: 15px;">Catálogo Digital Interactivo</h3>
                    <p style="color: #94a3b8; font-size: 14px; margin-bottom: 25px;">Estructura moderna optimizada para dispositivos móviles orientada a la exhibición artística y pedidos automatizados a WhatsApp.</p>
                    
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <a href="https://catalogo-cuadros.netlify.app/" target="_blank" style="background: #ff2a4b; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(255, 42, 75, 0.4);">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir Demostración En Vivo
                        </a>
                        <button id="close-modal" style="background: transparent; color: #94a3b8; border: none; padding: 10px; cursor: pointer; font-size: 13px; font-weight: 600;">
                            Cerrar Ventana
                        </button>
                    </div>
                </div>
            `;

            // 3. Lo metemos al documento y hacemos el efecto de aparición suave
            document.body.appendChild(modal);
            setTimeout(() => modal.style.opacity = '1', 10);

            // 4. Lógica para destruir la ventana al darle cerrar
            document.getElementById('close-modal').addEventListener('click', () => {
                modal.style.opacity = '0';
                setTimeout(() => modal.remove(), 300);
            });
        });
    }
});


// LÓGICA INTERACTIVA PARA EL MENÚ DIGITAL INTELIGENTE
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu-inteligente');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            // 1. Creamos el contenedor del fondo oscuro difuminado
            const modalMenu = document.createElement('div');
            modalMenu.id = 'modal-menu-inteligente';
            
            // Estilos alineados a tu look oscuro con acentos Rojo Neón
            modalMenu.style.position = 'fixed';
            modalMenu.style.top = '0';
            modalMenu.style.left = '0';
            modalMenu.style.width = '100%';
            modalMenu.style.height = '100%';
            modalMenu.style.backgroundColor = 'rgba(11, 15, 25, 0.9)';
            modalMenu.style.backdropFilter = 'blur(8px)';
            modalMenu.style.display = 'flex';
            modalMenu.style.justifyContent = 'center';
            modalMenu.style.alignItems = 'center';
            modalMenu.style.zIndex = '2000';
            modalMenu.style.opacity = '0';
            modalMenu.style.transition = 'opacity 0.3s ease';

            // 2. Contenido estructural de la tarjeta de previsualización
            modalMenu.innerHTML = `
                <div style="background: #151b2c; border: 1px solid #222b44; padding: 30px; border-radius: 16px; max-width: 450px; width: 90%; text-align: center; box-shadow: 0 0 30px rgba(255, 42, 75, 0.2);">
                    <span style="color: #ff2a4b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 10px;">SOFTWARE GASTRO-COMERCIAL</span>
                    <h3 style="color: white; font-size: 22px; margin-bottom: 15px;">Menú Digital Inteligente</h3>
                    <p style="color: #94a3b8; font-size: 14px; margin-bottom: 25px;">Web App de alta velocidad con buscador en tiempo real, armador de pedidos integrado y asignación automatizada por número de mesa directo a WhatsApp.</p>
                    
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <a href="https://dulzuramia.netlify.app/" target="_blank" style="background: #ff2a4b; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(255, 42, 75, 0.4); display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fa-solid fa-utensils"></i> Probar Sistema En Vivo
                        </a>
                        <button id="close-modal-menu" style="background: transparent; color: #94a3b8; border: none; padding: 10px; cursor: pointer; font-size: 13px; font-weight: 600;">
                            Cerrar Ventana
                        </button>
                    </div>
                </div>
            `;

            // 3. Inyectamos la ventana al DOM con transición suave
            document.body.appendChild(modalMenu);
            setTimeout(() => modalMenu.style.opacity = '1', 10);

            // 4. Lógica para destruir la ventana emergente al hacer clic en cerrar
            document.getElementById('close-modal-menu').addEventListener('click', () => {
                modalMenu.style.opacity = '0';
                setTimeout(() => modalMenu.remove(), 300);
            });
        });
    }
});


// LÓGICA INTERACTIVA PARA EL MODAL DE TRAFFICKER & PERFORMANCE (ESTILO PRESTIGIO 360)
document.addEventListener('DOMContentLoaded', () => {
    const btnTrafficker = document.getElementById('btn-trafficker');

    if (btnTrafficker) {
        btnTrafficker.addEventListener('click', () => {
            // 1. Creamos el contenedor del fondo oscuro con desenfoque
            const modalTrafficker = document.createElement('div');
            modalTrafficker.id = 'modal-performance-marketing';
            
            // Estilos Premium Dark con acentos Rojo Neón
            modalTrafficker.style.position = 'fixed';
            modalTrafficker.style.top = '0';
            modalTrafficker.style.left = '0';
            modalTrafficker.style.width = '100%';
            modalTrafficker.style.height = '100%';
            modalTrafficker.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
            modalTrafficker.style.backdropFilter = 'blur(10px)';
            modalTrafficker.style.display = 'flex';
            modalTrafficker.style.justifyContent = 'center';
            modalTrafficker.style.alignItems = 'center';
            modalTrafficker.style.zIndex = '2000';
            modalTrafficker.style.opacity = '0';
            modalTrafficker.style.transition = 'opacity 0.3s ease';
            modalTrafficker.style.padding = '20px';

            // 2. Estructura de Contenido: Qué hace, DESMITIFICACIÓN, Cómo se hace, Tarifas y Medios de Pago
            modalTrafficker.innerHTML = `
                <div style="background: #151b2c; border: 1px solid #222b44; padding: 35px; border-radius: 16px; max-width: 620px; width: 100%; box-shadow: 0 0 40px rgba(255, 42, 75, 0.25); overflow-y: auto; max-height: 90vh; text-align: left;">
                    
                    <!-- Encabezado -->
                    <div style="text-align: center; margin-bottom: 25px;">
                        <span style="color: #ff2a4b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 5px;">ESTRATEGIA & PERFORMANCE</span>
                        <h3 style="color: white; font-size: 24px; font-weight: 800;">Trafficker Digital & Growth Marketing</h3>
                    </div>

                    <!-- Bloque 1: Qué Hace -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-bullseye" style="color: #ff2a4b;"></i> ¿Qué hace este servicio?
                        </h4>
                        <p style="color: #94a3b8; font-size: 13.5px; line-height: 1.5; padding-left: 24px;">
                            Diseña e inyecta campañas de anuncios masivos de alto rendimiento dirigidas a tu público ideal, optimizando el costo por cliente potencial (CPL) y maximizando el retorno de tu inversión publicitaria (ROAS).
                        </p>
                    </div>

                    <!-- NUEVO BLOQUE: DESMITIFICACIÓN OPERATIVA (La analogía entendible) -->
                    <div style="margin-bottom: 25px; background: #1a233a; padding: 20px; border-radius: 12px; border-left: 4px solid #ff2a4b; box-shadow: inset 0 0 15px rgba(0,0,0,0.2);">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; font-weight: 700;">
                            <i class="fa-solid fa-lightbulb" style="color: #eab308;"></i> Para entenderlo sin enredos:
                        </h4>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; margin-bottom: 10px; text-align: justify;">
                            Contratar publicidad tradicional es como pagarle a alguien para repartir 1.000 volantes impresos en la plaza: se los entregará a cualquiera y muchos terminarán en la basura. 
                        </p>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify; font-weight: 500;">
                            Nuestro sistema de <span style="color: #ff2a4b; font-weight: 700;">Pauta Digital Inteligente</span> funciona como un repartidor invisible con rayos X: detecta exactamente quiénes están buscando tus productos hoy en redes sociales, quiénes tienen la capacidad de pago y los envía filtrados, listos para comprar, directo a tu chat de WhatsApp.
                        </p>
                    </div>

                    <!-- Bloque 3: Cómo se Hace -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-gears" style="color: #ff2a4b;"></i> Metodología de Optimización
                        </h4>
                        <ul style="color: #94a3b8; font-size: 13px; list-style: none; padding-left: 24px; display: flex; flex-direction: column; gap: 6px;">
                            <li>• <strong>Auditoría & Segmentación:</strong> Identificamos tus públicos ideales en Meta Ads y Google Ads de forma científica.</li>
                            <li>• <strong>Estructura de Embudos:</strong> Desplegamos landing pages ultra rápidas acopladas a tu WhatsApp Business.</li>
                            <li>• <strong>Supervisión Diaria:</strong> Monitoreamos presupuestos y métricas clave (CTR, CPC) para evitar desperdicio.</li>
                        </ul>
                    </div>

                    <!-- Bloque 4: Tarifas Estandarizadas (Esquema de Precios Dual 360) -->
                    <div style="margin-bottom: 25px; background: #0b0f19; padding: 20px; border-radius: 12px; border: 1px solid #222b44;">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-tags" style="color: #ff2a4b;"></i> Planes y Tarifas Transparentes
                        </h4>
                        
                        <!-- PLAN ECONÓMICO -->
                        <div style="padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px solid #1a233a;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: white; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 6px;">
                                    <span style="width: 6px; height: 6px; background: #94a3b8; border-radius: 50%;"></span> Plan Pyme Inicial
                                </span>
                                <span style="color: #94a3b8; font-weight: 700; font-size: 14px;">$180.000 COP <span style="font-size: 11px; font-weight: 500;">/ mes</span></span>
                            </div>
                            <p style="color: #94a3b8; font-size: 11.5px; margin-top: 4px; padding-left: 12px;">
                                Ideal para comercios locales. 2 Campañas en Meta Ads (Facebook/Instagram) enfocadas en captación masiva de mensajes directos a WhatsApp Business sin requerir página web.
                            </p>
                        </div>

                        <!-- PLAN AVANZADO -->
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: white; font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 6px;">
                                    <span style="width: 6px; height: 6px; background: #ff2a4b; border-radius: 50%; box-shadow: 0 0 8px #ff2a4b;"></span> Plan Pyme Growth
                                </span>
                                <span style="color: #ff2a4b; font-weight: 700; font-size: 14px;">$350.000 COP <span style="font-size: 11px; font-weight: 500;">/ mes</span></span>
                            </div>
                            <p style="color: #94a3b8; font-size: 11.5px; margin-top: 4px; padding-left: 12px;">
                                Estrategia multicanal avanzada. Gestión en Meta Ads + Google Ads + Google Maps. Embudos de conversión enlazados a tu Catálogo Web, Menú Inteligente o CRM con analítica ROAS diaria.
                            </p>
                        </div>

                        <p style="color: #64748b; font-size: 11px; margin-top: 12px; border-top: 1px dashed #1a233a; padding-top: 8px;">
                            * Nota operativa: El presupuesto diario invertido directamente en los anuncios es parametrizado según la capacidad y objetivos de cada negocio.
                        </p>
                    </div>


                    <!-- Bloque 5: Medios de Recaudo Directos -->
                    <div style="margin-bottom: 25px;">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-credit-card" style="color: #ff2a4b;"></i> Medios de Pago Autorizados
                        </h4>
                        <p style="color: #94a3b8; font-size: 13px; padding-left: 24px; font-weight: 600;">
                            Transferencia directa Bancolombia / Nequi / Daviplata, u opciones de pasarela electrónica vía ePayco y Mercado Pago.
                        </p>
                    </div>

                    <!-- Botones de Acción -->
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <a href="https://wa.me/573173562745" target="_blank" style="background: #ff2a4b; color: white; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; text-align: center; box-shadow: 0 4px 15px rgba(255, 42, 75, 0.4); display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fa-solid fa-bolt"></i> Activar Plan de Rendimiento
                        </a>
                        <button id="close-modal-marketing" style="background: transparent; color: #94a3b8; border: none; padding: 10px; cursor: pointer; font-size: 13px; font-weight: 600; text-align: center;">
                            Cerrar Detalles del Servicio
                        </button>
                    </div>
                </div>
            `;

            // 3. Inyectamos la estructura al DOM con animación de opacidad
            document.body.appendChild(modalTrafficker);
            setTimeout(() => modalTrafficker.style.opacity = '1', 10);

            // 4. Lógica de autodestrucción del modal al presionar cerrar
            document.getElementById('close-modal-marketing').addEventListener('click', () => {
                modalTrafficker.style.opacity = '0';
                setTimeout(() => modalTrafficker.remove(), 300);
            });
        });
    }
});


// LÓGICA INTERACTIVA PARA EL MODAL DE APPS DE SERVICIO & MENÚS (360° DIGITAL)
document.addEventListener('DOMContentLoaded', () => {
    const btnApps = document.getElementById('btn-apps-servicios');

    if (btnApps) {
        btnApps.addEventListener('click', () => {
            // 1. Creamos el contenedor del fondo oscuro con desenfoque
            const modalApps = document.createElement('div');
            modalApps.id = 'modal-apps-servicios';
            
            // Estilos Premium Dark alineados a tu look de marca
            modalApps.style.position = 'fixed';
            modalApps.style.top = '0';
            modalApps.style.left = '0';
            modalApps.style.width = '100%';
            modalApps.style.height = '100%';
            modalApps.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
            modalApps.style.backdropFilter = 'blur(10px)';
            modalApps.style.display = 'flex';
            modalApps.style.justifyContent = 'center';
            modalApps.style.alignItems = 'center';
            modalApps.style.zIndex = '2000';
            modalApps.style.opacity = '0';
            modalApps.style.transition = 'opacity 0.3s ease';
            modalApps.style.padding = '20px';

            // 2. Estructura de Contenido: Qué hace, Desmitificación, Casos de Éxito y Tarifas
            modalApps.innerHTML = `
                <div style="background: #151b2c; border: 1px solid #222b44; padding: 35px; border-radius: 16px; max-width: 600px; width: 100%; box-shadow: 0 0 40px rgba(255, 42, 75, 0.25); overflow-y: auto; max-height: 90vh; text-align: left;">
                    
                    <!-- Encabezado -->
                    <div style="text-align: center; margin-bottom: 25px;">
                        <span style="color: #ff2a4b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 5px;">INGENIERÍA WEB A MEDIDA</span>
                        <h3 style="color: white; font-size: 24px; font-weight: 800;">Aplicaciones de Servicio & Menús Web</h3>
                    </div>

                    <!-- Bloque 1: Qué Hace -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-laptop-code" style="color: #ff2a4b;"></i> ¿Qué hace este servicio?
                        </h4>
                        <p style="color: #94a3b8; font-size: 13.5px; line-height: 1.5; padding-left: 24px;">
                            Desarrolla plataformas e interfaces interactivas a medida para empresas prestadoras de servicios, restaurantes y logística, automatizando la atención al cliente y centralizando la recepción de solicitudes directamente en canales digitales.
                        </p>
                    </div>

                    <!-- Bloque 2: Desmitificación Operativa (Tu lenguaje claro) -->
                    <div style="margin-bottom: 20px; background: #1a233a; padding: 15px; border-radius: 8px; border-left: 4px solid #ff2a4b;">
                        <h4 style="color: white; font-size: 13.5px; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                            <i class="fa-solid fa-lightbulb" style="color: #eab308;"></i> Entendiéndolo de forma sencilla:
                        </h4>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify;">
                            Tener un negocio de servicios o comidas sin una plataforma es depender de que el teléfono no esté ocupado o de que un asesor conteste rápido. Con nuestras <strong>Web Apps de Servicio</strong>, tu negocio tiene una central operativa virtual abierta 24/7 donde el usuario selecciona opciones, consulta tarifas u horarios y genera la solicitud de forma inmediata sin fricciones.
                        </p>
                    </div>

                    <!-- Bloque 3: Casos de Éxito Reales (Dulzura Mía & EcoBiciGo) -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-star" style="color: #ff2a4b;"></i> Demostraciones en Vivo (Desplegados por 360° Digital)
                        </h4>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            <!-- Botón EcoBiciGo -->
                            <a href="https://ecobicigo.netlify.app/" target="_blank" style="background: #0b0f19; border: 1px solid #222b44; padding: 12px; border-radius: 8px; text-decoration: none; text-align: center; display: block; transition: border-color 0.2s;">
                                <strong style="color: white; font-size: 13px; display: block; margin-bottom: 4px;"><i class="fa-solid fa-bicycle" style="color: #ff2a4b;"></i> EcoBiciGo</strong>
                                <span style="color: #94a3b8; font-size: 11px;">Plataforma de Mensajería Ecológica</span>
                            </a>
                            <!-- Botón Dulzura Mía -->
                            <a href="https://dulzuramia.netlify.app/" target="_blank" style="background: #0b0f19; border: 1px solid #222b44; padding: 12px; border-radius: 8px; text-decoration: none; text-align: center; display: block; transition: border-color 0.2s;">
                                <strong style="color: white; font-size: 13px; display: block; margin-bottom: 4px;"><i class="fa-solid fa-utensils" style="color: #ff2a4b;"></i> Dulzura Mía</strong>
                                <span style="color: #94a3b8; font-size: 11px;">Menú e Interfaz Gastronómica</span>
                            </a>
                        </div>
                    </div>

                    <!-- Bloque 4: Tarifas del Servicio -->
                    <div style="margin-bottom: 25px; background: #0b0f19; padding: 15px; border-radius: 8px; border: 1px solid #222b44;">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-tags" style="color: #ff2a4b;"></i> Inversión del Desarrollo
                        </h4>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: white; font-size: 13px; font-weight: 600;">Despliegue de Aplicación Comercial</span>
                            <span style="color: #ff2a4b; font-weight: 700; font-size: 14px;">Desde $350.000 COP</span>
                        </div>
                    </div>

                    <!-- Botones de Cierre/Acción -->
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <a href="https://wa.me/3173562745" target="_blank" style="background: #ff2a4b; color: white; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; text-align: center; box-shadow: 0 4px 15px rgba(255, 42, 75, 0.4); display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fa-solid fa-comments"></i> Cotizar mi Plataforma de Servicios
                        </a>
                        <button id="close-modal-apps" style="background: transparent; color: #94a3b8; border: none; padding: 10px; cursor: pointer; font-size: 13px; font-weight: 600; text-align: center;">
                            Cerrar Ventana
                        </button>
                    </div>
                </div>
            `;

            // 3. Insertamos el modal al cuerpo del documento con transición fluida
            document.body.appendChild(modalApps);
            setTimeout(() => modalApps.style.opacity = '1', 10);

            // 4. Lógica de destrucción del modal al darle cerrar
            document.getElementById('close-modal-apps').addEventListener('click', () => {
                modalApps.style.opacity = '0';
                setTimeout(() => modalApps.remove(), 300);
            });
        });
    }
});


// LÓGICA INTERACTIVA PARA EL MODAL DE DESARROLLO DE SOFTWARE (360° DIGITAL)
document.addEventListener('DOMContentLoaded', () => {
    const btnSoftware = document.getElementById('btn-software');

    if (btnSoftware) {
        btnSoftware.addEventListener('click', () => {
            // 1. Creamos el contenedor del fondo oscuro con desenfoque
            const modalSoftware = document.createElement('div');
            modalSoftware.id = 'modal-desarrollo-software';
            
            // Estilos Premium Dark alineados a tu look de marca
            modalSoftware.style.position = 'fixed';
            modalSoftware.style.top = '0';
            modalSoftware.style.left = '0';
            modalSoftware.style.width = '100%';
            modalSoftware.style.height = '100%';
            modalSoftware.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
            modalSoftware.style.backdropFilter = 'blur(10px)';
            modalSoftware.style.display = 'flex';
            modalSoftware.style.justifyContent = 'center';
            modalSoftware.style.alignItems = 'center';
            modalSoftware.style.zIndex = '2000';
            modalSoftware.style.opacity = '0';
            modalSoftware.style.transition = 'opacity 0.3s ease';
            modalSoftware.style.padding = '20px';

            // 2. Estructura de Contenido: Qué hace, Desmitificación, Arquitectura y Cotización
            modalSoftware.innerHTML = `
                <div style="background: #151b2c; border: 1px solid #222b44; padding: 35px; border-radius: 16px; max-width: 620px; width: 100%; box-shadow: 0 0 40px rgba(255, 42, 75, 0.25); overflow-y: auto; max-height: 90vh; text-align: left;">
                    
                    <!-- Encabezado -->
                    <div style="text-align: center; margin-bottom: 25px;">
                        <span style="color: #ff2a4b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 5px;">SISTEMAS EMPRESARIALES</span>
                        <h3 style="color: white; font-size: 24px; font-weight: 800;">Ingeniería de Software & ERP a Medida</h3>
                    </div>

                    <!-- Bloque 1: Qué Hace -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-laptop-code" style="color: #ff2a4b;"></i> ¿Qué hace este servicio?
                        </h4>
                        <p style="color: #94a3b8; font-size: 13.5px; line-height: 1.5; padding-left: 24px;">
                            Diseña y programa plataformas privadas, bases de datos y sistemas de control interno automatizados para centralizar la facturación, los inventarios, los presupuestos y flujos de trabajo de pymes y sectores industriales.
                        </p>
                    </div>

                    <!-- Bloque 2: DESMITIFICACIÓN OPERATIVA (ERP vs Excel o Cuaderno) -->
                    <div style="margin-bottom: 25px; background: #1a233a; padding: 20px; border-radius: 12px; border-left: 4px solid #ff2a4b; box-shadow: inset 0 0 15px rgba(0,0,0,0.2);">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; font-weight: 700;">
                            <i class="fa-solid fa-circle-nodes" style="color: #ff2a4b;"></i> Dejar el desorden operativo:
                        </h4>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify; margin-bottom: 10px;">
                            Llevar las cuentas de una empresa en cuadernos o archivos sueltos de Excel es como guardar los papeles de la oficina en cajas de cartón sin marcar: se pierde información, hay fugas de dinero imposibles de rastrear y dependes de estar presente físicamente para saber cuánto vendiste.
                        </p>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify; font-weight: 500;">
                            Nuestro <span style="color: #ff2a4b; font-weight: 700;">Sistema ERP Gestión-360</span> unifica toda tu operación en un tablero digital seguro en la nube. Con un clic desde tu celular o computador, sabes el inventario exacto, controlas los presupuestos asignados y supervisas tus márgenes de ganancia en tiempo real, desde cualquier lugar del mundo.
                        </p>
                    </div>

                    <!-- Bloque 3: Stack de Ingeniería Robustecido -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-layer-group" style="color: #ff2a4b;"></i> Arquitectura y Capacidades Técnicas
                        </h4>
                        <ul style="color: #94a3b8; font-size: 13px; list-style: none; padding-left: 24px; display: flex; flex-direction: column; gap: 6px;">
                            <li>• <strong>Sistemas Desacoplados:</strong> Interfaces ultra rápidas e interactivas construidas con <strong>React & JavaScript</strong>.</li>
                            <li>• <strong>Backend Corporativo:</strong> Lógica de datos de alta seguridad basada en arquitectura REST API con <strong>Python & Django</strong>.</li>
                            <li>• <strong>Automatización Local:</strong> Software nativo para Windows (Python/CustomTkinter) para facturación local en puntos de venta físicos.</li>
                        </ul>
                    </div>

                    <!-- Bloque 4: Formato de Inversión y SLA (Estilo Tecdisol) -->
                    <div style="margin-bottom: 25px; background: #0b0f19; padding: 15px; border-radius: 8px; border: 1px solid #222b44;">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-handshake" style="color: #ff2a4b;"></i> Formato de Desarrollo y Licenciamiento
                        </h4>
                        <p style="color: #94a3b8; font-size: 13px; padding-left: 12px; line-height: 1.5;">
                            Estructuramos proyectos bajo la modalidad de <strong>Cotización por Módulos</strong> según los requerimientos operativos de tu empresa, vinculando contratos opcionales de soporte y mantenimiento técnico de servidores (**SLA**).
                        </p>
                    </div>

                    <!-- Botones de Acción -->
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <a href="https://wa.me/573173562745" target="_blank" style="background: #ff2a4b; color: white; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; text-align: center; box-shadow: 0 4px 15px rgba(255, 42, 75, 0.4); display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fa-solid fa-headset"></i> Agendar Consultoría Tecnológica Gratis
                        </a>
                        <button id="close-modal-software" style="background: transparent; color: #94a3b8; border: none; padding: 10px; cursor: pointer; font-size: 13px; font-weight: 600; text-align: center;">
                            Cerrar Detalles de Ingeniería
                        </button>
                    </div>
                </div>
            `;

            // 3. Inyectamos la estructura al DOM con animación de opacidad
            document.body.appendChild(modalSoftware);
            setTimeout(() => modalSoftware.style.opacity = '1', 10);

            // 4. Lógica de autodestrucción del modal al presionar cerrar
            document.getElementById('close-modal-software').addEventListener('click', () => {
                modalSoftware.style.opacity = '0';
                setTimeout(() => modalSoftware.remove(), 300);
            });
        });
    }
});


// LÓGICA INTERACTIVA PARA EL MODAL DE SEO LOCAL & GROWTH (360° DIGITAL)
document.addEventListener('DOMContentLoaded', () => {
    const btnSeo = document.getElementById('btn-seo-maps');

    if (btnSeo) {
        btnSeo.addEventListener('click', () => {
            // 1. Creamos el contenedor del fondo oscuro con desenfoque
            const modalSeo = document.createElement('div');
            modalSeo.id = 'modal-seo-local';
            
            // Estilos Premium Dark alineados a tu look de marca
            modalSeo.style.position = 'fixed';
            modalSeo.style.top = '0';
            modalSeo.style.left = '0';
            modalSeo.style.width = '100%';
            modalSeo.style.height = '100%';
            modalSeo.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
            modalSeo.style.backdropFilter = 'blur(10px)';
            modalSeo.style.display = 'flex';
            modalSeo.style.justifyContent = 'center';
            modalSeo.style.alignItems = 'center';
            modalSeo.style.zIndex = '2000';
            modalSeo.style.opacity = '0';
            modalSeo.style.transition = 'opacity 0.3s ease';
            modalSeo.style.padding = '20px';

            // 2. Estructura de Contenido: Qué hace, Desmitificación, Caso Dulzura Mía y Tarifas
            modalSeo.innerHTML = `
                <div style="background: #151b2c; border: 1px solid #222b44; padding: 35px; border-radius: 16px; max-width: 620px; width: 100%; box-shadow: 0 0 40px rgba(255, 42, 75, 0.25); overflow-y: auto; max-height: 90vh; text-align: left;">
                    
                    <!-- Encabezado -->
                    <div style="text-align: center; margin-bottom: 25px;">
                        <span style="color: #ff2a4b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 5px;">VISIBILIDAD ORGÁNICA PERMANENTE</span>
                        <h3 style="color: white; font-size: 24px; font-weight: 800;">SEO Local & Posicionamiento en Maps</h3>
                    </div>

                    <!-- Bloque 1: Qué Hace -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-map-location-dot" style="color: #ff2a4b;"></i> ¿Qué hace este servicio?
                        </h4>
                        <p style="color: #94a3b8; font-size: 13.5px; line-height: 1.5; padding-left: 24px;">
                            Optimiza tu presencia en Google Maps y Google Business Profile para que tu negocio aparezca orgánicamente en los primeros resultados de búsqueda cuando clientes locales o turistas busquen tus servicios en la región.
                        </p>
                    </div>

                    <!-- Bloque 2: DESMITIFICACIÓN OPERATIVA (Aparecer en caliente vs Redes Sociales) -->
                    <div style="margin-bottom: 25px; background: #1a233a; padding: 20px; border-radius: 12px; border-left: 4px solid #ff2a4b; box-shadow: inset 0 0 15px rgba(0,0,0,0.2);">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; font-weight: 700;">
                            <i class="fa-solid fa-magnifying-glass-location" style="color: #ff2a4b;"></i> Estar donde la gente ya quiere comprar:
                        </h4>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify; margin-bottom: 10px;">
                            Estar publicando en Instagram es como gritar en una calle llena de gente esperando que alguien te mire por curiosidad. En cambio, el <strong>SEO Local</strong> es poner tu letrero justo enfrente de alguien que ya salió de su casa con la billetera en la mano buscando exactamente lo que tú vendes.
                        </p>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify; font-weight: 500;">
                            Cuando un turista o cliente local busca una cafetería, un hotel o un comercio en su celular, no va a las redes; va a Google Maps. Nosotros estructuramos tu ficha técnica y reputación para que tu marca sea la primera opción del mapa, capturando llamadas y pedidos en automático sin pagar publicidad diaria.
                        </p>
                    </div>

                    <!-- Bloque 3: Caso de Éxito Dulzura Mía -->
                    <div style="margin-bottom: 20px; background: #0b0f19; padding: 15px; border-radius: 8px; border: 1px solid #222b44;">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700;">
                            <i class="fa-solid fa-star" style="color: #eab308;"></i> Caso de Éxito: Dulzura Mía Caicedonia
                        </h4>
                        <p style="color: #94a3b8; font-size: 13px; line-height: 1.5; margin-bottom: 10px;">
                            Implementamos esta estrategia para la repostería y cafetería local, logrando dominar las búsquedas en la zona, superando a la competencia y enrutando flujos masivos de clientes orgánicos a su menú digital automatizado.
                        </p>
                    </div>

                    <!-- Bloque 4: Tarifas del Servicio (Estilo Tecdisol) -->
                    <div style="margin-bottom: 25px;">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-tags" style="color: #ff2a4b;"></i> Plan de Posicionamiento
                        </h4>
                        <div style="display: flex; justify-content: space-between; align-items: center; background: #16222f; padding: 12px; border-radius: 6px;">
                            <span style="color: white; font-size: 13px; font-weight: 600;">Estructuración, SEO On-Page y Geolocalización</span>
                            <span style="color: #ff2a4b; font-weight: 700; font-size: 14px;">Desde $200.000 COP</span>
                        </div>
                    </div>

                    <!-- Botones de Acción -->
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <a href="https://wa.me/573173562745" target="_blank" style="background: #ff2a4b; color: white; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; text-align: center; box-shadow: 0 4px 15px rgba(255, 42, 75, 0.4); display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fa-solid fa-location-crosshairs"></i> Dominar las Búsquedas Locales
                        </a>
                        <button id="close-modal-seo" style="background: transparent; color: #94a3b8; border: none; padding: 10px; cursor: pointer; font-size: 13px; font-weight: 600; text-align: center;">
                            Cerrar Detalles de Posicionamiento
                        </button>
                    </div>
                </div>
            `;

            // 3. Inyectamos la estructura al DOM con animación de opacidad
            document.body.appendChild(modalSeo);
            setTimeout(() => modalSeo.style.opacity = '1', 10);

            // 4. Lógica de autodestrucción del modal al presionar cerrar
            document.getElementById('close-modal-seo').addEventListener('click', () => {
                modalSeo.style.opacity = '0';
                setTimeout(() => modalSeo.remove(), 300);
            });
        });
    }
});


// LÓGICA INTERACTIVA PARA EL MODAL DE SOPORTE & MANTENIMIENTO TÉCNICO (360° DIGITAL)
document.addEventListener('DOMContentLoaded', () => {
    const btnSoporte = document.getElementById('btn-soporte');

    if (btnSoporte) {
        btnSoporte.addEventListener('click', () => {
            // 1. Creamos el contenedor del fondo oscuro con desenfoque
            const modalSoporte = document.createElement('div');
            modalSoporte.id = 'modal-soporte-corporativo';
            
            // Estilos Premium Dark alineados a tu look de marca
            modalSoporte.style.position = 'fixed';
            modalSoporte.style.top = '0';
            modalSoporte.style.left = '0';
            modalSoporte.style.width = '100%';
            modalSoporte.style.height = '100%';
            modalSoporte.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
            modalSoporte.style.backdropFilter = 'blur(10px)';
            modalSoporte.style.display = 'flex';
            modalSoporte.style.justifyContent = 'center';
            modalSoporte.style.alignItems = 'center';
            modalSoporte.style.zIndex = '2000';
            modalSoporte.style.opacity = '0';
            modalSoporte.style.transition = 'opacity 0.3s ease';
            modalSoporte.style.padding = '20px';

            // 2. Estructura de Contenido: Qué hace, Desmitificación, Qué incluye y Tarifas Duales
            modalSoporte.innerHTML = `
                <div style="background: #151b2c; border: 1px solid #222b44; padding: 35px; border-radius: 16px; max-width: 620px; width: 100%; box-shadow: 0 0 40px rgba(255, 42, 75, 0.25); overflow-y: auto; max-height: 90vh; text-align: left;">
                    
                    <!-- Encabezado -->
                    <div style="text-align: center; margin-bottom: 25px;">
                        <span style="color: #ff2a4b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 5px;">RESPALDO & CONTINUIDAD DE NEGOCIO</span>
                        <h3 style="color: white; font-size: 24px; font-weight: 800;">Soporte Técnico Especializado & SLA</h3>
                    </div>

                    <!-- Bloque 1: Qué Hace -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-shield-halved" style="color: #ff2a4b;"></i> ¿Qué hace este servicio?
                        </h4>
                        <p style="color: #94a3b8; font-size: 13.5px; line-height: 1.5; padding-left: 24px;">
                            Garantiza que las aplicaciones web, servidores en la nube, bases de datos y correos corporativos de tu empresa operen sin interrupciones, ofreciendo un canal de respuesta inmediata ante contingencias técnicas críticas.
                        </p>
                    </div>

                    <!-- Bloque 2: DESMITIFICACIÓN OPERATIVA (Seguridad y Respaldo Inmediato) -->
                    <div style="margin-bottom: 25px; background: #1a233a; padding: 20px; border-radius: 12px; border-left: 4px solid #ff2a4b; box-shadow: inset 0 0 15px rgba(0,0,0,0.2);">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; font-weight: 700;">
                            <i class="fa-solid fa-heart-pulse" style="color: #ff2a4b;"></i> Un seguro para tus ventas digitales:
                        </h4>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify; margin-bottom: 10px;">
                            Dejar tus plataformas digitales o sistemas de facturación sin soporte técnico profesional es como irte a dormir dejando la puerta de tu local abierta: todo puede marchar bien, hasta el día en que ocurre un fallo imprevisto. 
                        </p>
                        <p style="color: #e2e8f0; font-size: 13px; line-height: 1.6; text-align: justify; font-weight: 500;">
                            Si tu catálogo o software se cae un fin de semana en plena jornada alta de pedidos, un programador común no te responderá el teléfono. Con nuestros <span style="color: #ff2a4b; font-weight: 700;">Acuerdos de Soporte Mensual (SLA)</span>, cuentas con un equipo técnico listo para monitorear tu servidor, realizar copias de seguridad de tus datos y resolver cualquier falla en minutos para que tu caja registradora nunca deje de sumar.
                        </p>
                    </div>

                    <!-- Bloque 3: Qué Incluye -->
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: white; font-size: 15px; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-list-check" style="color: #ff2a4b;"></i> Cobertura Técnica del Servicio
                        </h4>
                        <ul style="color: #94a3b8; font-size: 13px; list-style: none; padding-left: 24px; display: flex; flex-direction: column; gap: 6px;">
                            <li>• <strong>Mantenimiento Preventivo:</strong> Actualización periódica de librerías en Frontend y Backend.</li>
                            <li>• <strong>Copias de Seguridad Automáticas:</strong> Respaldo encriptado periódico de bases de datos.</li>
                            <li>• <strong>Monitoreo Cloud:</strong> Vigilancia del estado y velocidad de carga de tus dominios en la nube.</li>
                        </ul>
                    </div>

                    <!-- Bloque 4: Planes de Soporte (Esquema de Precios Dual) -->
                    <div style="margin-bottom: 25px; background: #0b0f19; padding: 20px; border-radius: 12px; border: 1px solid #222b44;">
                        <h4 style="color: white; font-size: 14px; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-tags" style="color: #ff2a4b;"></i> Planes Disponibles
                        </h4>
                        
                        <!-- SOPORTE WEB BÁSICO -->
                        <div style="padding-bottom: 12px; margin-bottom: 12px; border-bottom: 1px solid #1a233a;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: white; font-size: 14px; font-weight: 700;">Soporte Web Esencial</span>
                                <span style="color: #94a3b8; font-weight: 700; font-size: 14px;">$50.000 COP <span style="font-size: 11px; font-weight: 500;">/ mes</span></span>
                            </div>
                            <p style="color: #94a3b8; font-size: 11.5px; margin-top: 4px; padding-left: 12px;">
                                Diseñado para Catálogos y Menús Web. Incluye monitoreo de servidor en Netlify/cPanel, hosting estándar y actualizaciones menores de precios o productos.
                            </p>
                        </div>

                        <!-- SOPORTE CORPORATIVO AVANZADO -->
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: white; font-size: 14px; font-weight: 700;">Soporte ERP & Software (SLA)</span>
                                <span style="color: #ff2a4b; font-weight: 700; font-size: 14px;">$150.000 COP <span style="font-size: 11px; font-weight: 500;">/ mes</span></span>
                            </div>
                            <p style="color: #94a3b8; font-size: 11.5px; margin-top: 4px; padding-left: 12px;">
                                Respaldo prioritario para sistemas empresariales complejos. Incluye mantenimiento de bases de datos SQL, soporte crítico para Django/React y bolsa de horas de ingeniería mensual.
                            </p>
                        </div>
                    </div>

                    <!-- Botones de Acción -->
                    <div style="display: flex; gap: 10px; flex-direction: column;">
                        <a href="https://wa.me/573173562745" target="_blank" style="background: #ff2a4b; color: white; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; text-align: center; box-shadow: 0 4px 15px rgba(255, 42, 75, 0.4); display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <i class="fa-solid fa-headset"></i> Solicitar Respaldo Técnico Inmediato
                        </a>
                        <button id="close-modal-soporte" style="background: transparent; color: #94a3b8; border: none; padding: 10px; cursor: pointer; font-size: 13px; font-weight: 600; text-align: center;">
                            Cerrar Detalles de Soporte
                        </button>
                    </div>
                </div>
            `;

            // 3. Inyectamos la estructura al DOM con animación de opacidad
            document.body.appendChild(modalSoporte);
            setTimeout(() => modalSoporte.style.opacity = '1', 10);

            // 4. Lógica de autodestrucción del modal al presionar cerrar
            document.getElementById('close-modal-soporte').addEventListener('click', () => {
                modalSoporte.style.opacity = '0';
                setTimeout(() => modalSoporte.remove(), 300);
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    console.log("Infraestructura de Simulación de 360° Digital cargada.");

    document.body.addEventListener('click', (e) => {
        const targetBtn = e.target.closest('.btn-view');
        
        if (targetBtn) {
            const originalUrl = targetBtn.getAttribute('href');
            
            // Interceptamos únicamente si detecta que intenta comunicarse por WhatsApp real
            if (originalUrl && originalUrl.includes('wa.me')) {
                e.preventDefault(); 
                
                const urlParams = new URL(originalUrl);
                const textParam = urlParams.searchParams.get('text') || "Hola, solicito información de soluciones 360.";
                
                crearCelularVirtual(textParam);
            }
        }
    });

    function crearCelularVirtual(mensajeEstructurado) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0'; overlay.style.left = '0';
        overlay.style.width = '100%'; overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
        overlay.style.backdropFilter = 'blur(10px)';
        overlay.style.display = 'flex'; overlay.style.justifyContent = 'center'; overlay.style.alignItems = 'center';
        overlay.style.zIndex = '3000'; overlay.style.padding = '20px';

        overlay.innerHTML = `
            <div style="background: #151b2c; border: 1px solid #222b44; padding: 25px; border-radius: 16px; max-width: 400px; width: 100%; box-shadow: 0 0 35px rgba(255, 42, 75, 0.3);">
                <div style="text-align: center; margin-bottom: 15px; border-bottom: 1px solid #222b44; padding-bottom: 10px;">
                    <span style="color: #ff2a4b; font-size: 11px; font-weight: 700; text-transform: uppercase;">Entorno de Demostración</span>
                    <h4 style="color: white; font-size: 16px; margin-top: 4px;"><i class="fa-brands fa-whatsapp" style="color: #25d366;"></i> Reporte Técnico de Venta</h4>
                </div>
                <p style="color: #94a3b8; font-size: 13px; margin-bottom: 12px;">Así llega la orden de compra ya sumada y formateada al WhatsApp del negocio:</p>
                <div style="background: #0b0f19; border: 1px solid #1e293b; padding: 12px; border-radius: 8px; margin-bottom: 15px;">
                    <pre style="color: #25d366; font-family: monospace; font-size: 12px; white-space: pre-wrap; margin: 0;">${mensajeEstructurado}</pre>
                </div>
                <button id="cerrar-celular" style="background: #ff2a4b; color: white; border: none; padding: 12px; border-radius: 8px; width: 100%; font-weight: 700; cursor: pointer;">Volver al Portafolio</button>
            </div>
        `;

        document.body.appendChild(overlay);
        document.getElementById('cerrar-celular').addEventListener('click', () => overlay.remove());
    }
});

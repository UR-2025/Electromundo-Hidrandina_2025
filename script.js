// JavaScript para animaciones y efectos
document.addEventListener('DOMContentLoaded', function() {
    // Animación de aparición para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.service-card, .fade-in').forEach(el => {
        observer.observe(el);
    });

    // Efecto hover para tarjetas de servicio
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Navegación activa
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase activa de todos los enlaces
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            
            // Agregar clase activa al enlace clickeado
            this.classList.add('active');
        });
    });

    // Efecto de pulso en las estrellas
    document.querySelectorAll('.star').forEach((star, index) => {
        star.style.animationDelay = (index * 0.1) + 's';
        star.style.animation = 'pulse 2s infinite';
    });

    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto de loading en botones (si se agregan)
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.add('loading');
                setTimeout(() => {
                    icon.classList.remove('loading');
                }, 2000);
            }
        });
    });

    console.log('ELECTROMUNDO - Página cargada exitosamente');
});

// Función para cambiar tema (opcional)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Función para mostrar notificaciones (opcional)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Función para manejo de formularios (opcional)
function handleFormSubmit(formId, callback) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(form);
            callback(formData);
        });
    }
}

// Función para scroll suave a elemento específico
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Función para validación de formularios (opcional)
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Función para cargar contenido dinámico (opcional)
async function loadContent(url, containerId) {
    try {
        const response = await fetch(url);
        const content = await response.text();
        document.getElementById(containerId).innerHTML = content;
    } catch (error) {
        console.error('Error cargando contenido:', error);
        showNotification('Error al cargar el contenido', 'error');
    }
}

// Función para manejo de modales (opcional)
function initModal(modalId) {
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector('.close-modal');
    const overlay = modal.querySelector('.modal-overlay');
    
    function

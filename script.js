// Mejora la interactividad de las secciones desplegables
document.addEventListener('DOMContentLoaded', function() {
  const accordionInputs = document.querySelectorAll('.acc-input');
  
  // Cierra otras secciones al abrir una nueva
  accordionInputs.forEach(input => {
    input.addEventListener('change', function() {
      if (this.checked) {
        accordionInputs.forEach(otherInput => {
          if (otherInput !== this && otherInput.checked) {
            otherInput.checked = false;
          }
        });
      }
    });
  });
  
  // Mejora la navegación desde el índice
  const indexLinks = document.querySelectorAll('.sidebar a[href^="#"]');
  indexLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetInput = document.getElementById(targetId);
      
      if (targetInput) {
        // Abre la sección correspondiente
        targetInput.checked = true;
        
        // Desplaza suavemente a la sección
        targetInput.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// SOLUCIÓN JAVASCRIPT - GARANTIZADA
document.addEventListener('DOMContentLoaded', function() {
    const accordionInputs = document.querySelectorAll('.acc-input');
    
    accordionInputs.forEach(input => {
        input.addEventListener('change', function() {
            const body = this.nextElementSibling.nextElementSibling;
            
            if (this.checked) {
                // Calcular altura máxima (80% de la ventana)
                const maxHeight = window.innerHeight * 0.8;
                body.style.maxHeight = maxHeight + 'px';
                body.style.overflowY = 'auto';
                body.style.padding = '20px';
            } else {
                body.style.maxHeight = '0';
                body.style.overflowY = 'hidden';
                body.style.padding = '0 20px';
            }
        });
    });
    
    // También agregar este CSS desde JavaScript
    const style = document.createElement('style');
    style.textContent = `
        .acc-body {
            transition: max-height 0.5s ease, padding 0.3s ease;
            scrollbar-width: thin;
            scrollbar-color: var(--color-secondary) #f8f9fa;
        }
        .acc-body::-webkit-scrollbar {
            width: 12px;
        }
        .acc-body::-webkit-scrollbar-track {
            background: #f8f9fa;
            border-radius: 10px;
        }
        .acc-body::-webkit-scrollbar-thumb {
            background: var(--color-secondary);
            border-radius: 10px;
        }
    `;
    document.head.appendChild(style);
});

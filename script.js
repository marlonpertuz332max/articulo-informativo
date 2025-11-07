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

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.bi-search');
    const searchInput = document.querySelector('.form-control');
  
    // Aggiunge un gestore di eventi al clic sull'icona di ricerca
    searchIcon.addEventListener('click', function () {
      searchInput.classList.add('active');
      searchInput.focus();
    });
  
    // Rimuove la classe "active" quando si perde il focus
    searchInput.addEventListener('blur', function () {
      searchInput.classList.remove('active');
    });


    const divs = document.querySelectorAll('.lazy-loading-div');
    let lastKnownScrollPosition = 0;
    
    function handleScroll() {
      lastKnownScrollPosition = window.scrollY;
    
      divs.forEach((div, index) => {
        const rect = div.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && div.style.opacity !== '1') {
          setTimeout(() => {
            div.style.opacity = '1'; // Mostra gradualmente il div
          }, 300 * index); // Ritardo tra il fade-in di ciascun div
        }
      });
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    handleScroll(); // Esegui la funzione anche all'avvio della pagina
    

  });


  
  








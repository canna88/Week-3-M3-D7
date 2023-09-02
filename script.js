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


  });


  
  








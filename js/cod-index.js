// Obtiene todos los elementos del div con la clase "noti".
const notiDivs = document.querySelectorAll('.noti');

// Recorre cada elemento del div.
notiDivs.forEach(notiDiv => {
  // Obtiene el elemento de la sección con la clase "txt".
  const textSection = notiDiv.nextElementSibling;

  // Añade un evento de clic al elemento del div.
  notiDiv.addEventListener('click', () => {
    // Cambia la imagen de "plus" a "minus" si es necesario.
    if (notiDiv.querySelector('img').src.endsWith('icon-plus.svg')) {
      notiDiv.querySelector('img').src = './img/icon-minus.svg';
      textSection.style.display = 'block';
      
    } else {
      notiDiv.querySelector('img').src = './img/icon-plus.svg';
      textSection.style.display = 'none';
    }

  });
});

window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

  const imagen1 = document.getElementById('firstCard');
  const imagen2 = document.getElementById('secondCard');
  const imagen3 = document.getElementById('thirdCard');
  const imagen4 = document.getElementById('fourthCard');
  const imagen5 = document.getElementById('fifthCard');
  const imagen6 = document.getElementById('sixthCard');
  const cargarImagen = (entradas, observador) => {
    // console.log(entradas)
    // console.log(observador)
  
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        entrada.target.classList.add('visible');
      }
    });
  }
  
  const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '500px 0px 100px 0px',
    threshold: 1.0
  });
  
  observador.observe(imagen1);
  observador.observe(imagen2);
  observador.observe(imagen3);
  observador.observe(imagen4);
  observador.observe(imagen5);
  observador.observe(imagen6);

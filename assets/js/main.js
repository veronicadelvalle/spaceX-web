
//TODO: Este script es super importante, con el empezamos a mostrar los elementos slide/carrusel
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide( '.splide', {
        perPage: 4,
        focus  : 0,
        type    :"loop",
      } );
      splide.mount();
});


//Se supone que este codigo es para generar nuevos slides
// var elms = document.getElementsByClassName('splide');

// for (var i = 0; i < elms.length; i++) {
//     new Splide(elms[i]).mount();
// }
// new Splide( '.splide', {
//     trimSpace: 'move',
//     focus    : 'center',
//     perPage  : 3,
//   } );

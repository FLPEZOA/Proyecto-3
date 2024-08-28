let indice = 0;

    function cambiarImagen(direccion) {
        const imagenes = document.querySelector('.imagenes');
        const totalImagenes = document.querySelectorAll('.imagenes img').length;

        indice += direccion;

        if (indice < 0) {
            indice = totalImagenes - 1; // Volver al último índice
        } else if (indice >= totalImagenes) {
            indice = 0; // Volver al primer índice
        }

        const ancho = indice * -100;
        imagenes.style.transform = `translateX(${ancho}%)`;
    }
document.addEventListener("DOMContentLoaded", function() {
    // Asignamos el evento al botón
    document.getElementById("toggleButton").addEventListener("click", toggleInfo);
});

function toggleInfo() {
    var info = document.getElementById("infoSection");
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Promociones
 // Obtiene todas las tarjetas de promoción y el overlay
 const promoCards = document.querySelectorAll('.promo-card');
 const overlay = document.querySelector('.overlay');
 
 // Función para cerrar todos los recuadros de detalle
 function closeAllDetails() {
   document.querySelectorAll('.detail-box').forEach(detail => {
     detail.style.display = 'none';
   });
   overlay.classList.remove('active');
 }
 
 // Asigna el evento click a cada botón para mostrar el recuadro de detalle
 promoCards.forEach(card => {
   const btn2 = card.querySelector('.buttonBox button.btn2');
   const detailId = card.getAttribute('data-detail');
   const detailBox = document.getElementById(detailId);
   
   btn2.addEventListener('click', (e) => {
     e.stopPropagation(); // Evita que el clic se propague
     closeAllDetails();
     detailBox.style.display = 'block';
     overlay.classList.add('active');
   });
 });
 
 // Al hacer clic en el overlay se cierran los recuadros de detalle
 overlay.addEventListener('click', () => {
   closeAllDetails();
 });
 
 // Opcional: cerrar el detalle si se hace clic en cualquier parte del documento
 document.addEventListener('click', (e) => {
   if (!e.target.closest('.promo-card')) {
     closeAllDetails();
   }
 });



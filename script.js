// Attend que tout le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    /* --- PARTIE 1 : GÉNÉRATION DU QR CODE (ne change pas) --- */
    
    const qrCodeElement = document.getElementById('qrcode');
    const pageUrl = window.location.href;

    new QRCode(qrCodeElement, {
        text: pageUrl,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });


    /* --- PARTIE 2 : NOUVEAU CODE POUR L'EFFET COTILLONS --- */

    // 1. On sélectionne l'image de profil
    const profilePicture = document.querySelector('.profile-picture');

    // 2. On ajoute un écouteur d'événement qui se déclenche au clic (ou au toucher)
    profilePicture.addEventListener('click', function() {
        
        // 3. On appelle la fonction de la librairie pour lancer les cotillons !
        // Cette configuration crée une jolie explosion de cotillons.
        confetti({
            particleCount: 150, // Le nombre de cotillons
            spread: 90,         // L'angle de dispersion (en degrés)
            origin: { y: 0.6 }  // D'où partent les cotillons sur l'axe Y (0.5 = milieu)
        });
    });

});
// Toggle menu mobile - fonction globale
window.toggleMobileMenu = function() {
    const navList = document.getElementById('navList');
    if (navList) {
        navList.classList.toggle('active');
    }
};
    
// Initialiser les fonctionnalités JavaScript
function initializeJS() {
    console.log('TourMag Widget: initializeJS() appelé');
    
    // FORCER LE BOUTON HAMBURGER À APPARAÎTRE
    setTimeout(() => {
        let btn = document.querySelector('#tourmag-hamburger-btn');
        if (!btn) {
            // Créer le bouton s'il n'existe pas
            btn = document.createElement('button');
            btn.id = 'tourmag-hamburger-btn';
            btn.innerHTML = '☰';
            btn.onclick = function() {
                const navList = document.getElementById('navList');
                if (navList) navList.classList.toggle('active');
            };
            document.body.appendChild(btn);
        }
        
        // FORCER tous les styles avec setAttribute
        btn.setAttribute('style', 'display: block !important; position: fixed !important; top: 15px !important; right: 15px !important; width: 60px !important; height: 60px !important; min-width: 60px !important; min-height: 60px !important; background: #000000 !important; color: #ffffff !important; border: 2px solid #59DF7A !important; font-size: 24px !important; font-weight: bold !important; z-index: 999999 !important; cursor: pointer !important; border-radius: 8px !important; opacity: 1 !important; visibility: visible !important; pointer-events: auto !important;');
        
        console.log('✅ Bouton hamburger forcé:', btn.getBoundingClientRect());
    }, 100);
    
    // Fonction pour positionner les mega menus correctement (sans décalage)
    function updateMegaMenuPositions() {
        const mainNav = document.querySelector('#tourmag-menu .main-nav');
        if (!mainNav) return;
        
        const navRect = mainNav.getBoundingClientRect();
        const navBottom = navRect.bottom;
        
        const megaMenus = document.querySelectorAll('#tourmag-menu .mega-menu');
        megaMenus.forEach(menu => {
            menu.style.top = navBottom + 'px';
        });
    }
    
    // Variable pour optimiser avec requestAnimationFrame
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateMegaMenuPositions();
                ticking = false;
            });
            ticking = true;
        }
    }

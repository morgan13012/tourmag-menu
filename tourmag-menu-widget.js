/**
 * TourMag Navigation Menu Widget - VERSION PROPRE
 * Version: 2.0.0
 * Description: Widget tout-en-un recodé proprement sans bugs de blocage mobile
 * Usage: <div id="tourmag-menu"></div><script src="tourmag-menu-widget-clean.js"></script>
 */

(function() {
    'use strict';
    
    // ========================================
    // INJECTION DU CSS
    // ========================================
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = `
/* ========================================
   VARIABLES CSS
   ======================================== */
:root {
    /* Couleurs principales */
    --primary-blue: #0066cc;
    --primary-dark: #004499;
    --accent-orange: #ff6600;
    --accent-green: #59DF7A;
    --accent-blue-light: #0956E7;
    
    /* Couleurs de texte */
    --text-dark: #1a1a1a;
    --text-gray: #4a4a4a;
    --text-white: #ffffff;
    
    /* Couleurs de fond */
    --bg-light: #f8f9fa;
    --bg-white: #ffffff;
    --bg-black: #000000;
    
    /* Bordures */
    --border-color: #e0e0e0;
    
    /* Ombres */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.12);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15);
    
    /* Z-INDEX HIÉRARCHIE - Propre et cohérent */
    --z-header: 100;
    --z-nav: 110;
    --z-mega-menu: 120;
    --z-mobile-menu: 130;
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.25s ease;
    --transition-slow: 0.4s ease;
}

/* ========================================
   RESET SCOPÉ AU WIDGET
   ======================================== */
#tourmag-menu {
    font-family: 'Josefin Sans', sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
    box-sizing: border-box;
}

#tourmag-menu *,
#tourmag-menu *::before,
#tourmag-menu *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#tourmag-menu ul,
#tourmag-menu ol {
    list-style: none;
}

#tourmag-menu a {
    text-decoration: none;
    color: inherit;
}

#tourmag-menu button {
    background: none;
    border: none;
    font-family: inherit;
    cursor: pointer;
}

#tourmag-menu img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ========================================
   HEADER & NAVIGATION BASE
   ======================================== */
#tourmag-menu .header {
    background: var(--bg-white);
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: var(--z-header);
}

#tourmag-menu .header-top {
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark) 100%);
    color: var(--text-white);
    padding: 0.5rem 0;
    font-size: 0.875rem;
}

#tourmag-menu .header-top-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#tourmag-menu .logo-area {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#tourmag-menu .logo {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-blue);
    letter-spacing: -0.5px;
}

#tourmag-menu .logo span {
    color: var(--accent-orange);
}

/* ========================================
   NAVIGATION PRINCIPALE
   ======================================== */
#tourmag-menu .main-nav {
    background: var(--bg-black);
    position: relative;
    z-index: var(--z-nav);
}

#tourmag-menu .nav-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 2rem;
}

#tourmag-menu .nav-list {
    display: flex;
    gap: 0;
    width: 100%;
    flex-wrap: nowrap;
}

#tourmag-menu .nav-item {
    position: relative;
    flex: 0 1 auto;
    min-width: 0;
}

#tourmag-menu .nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1.25rem 1.1rem;
    color: var(--text-white);
    font-weight: 500;
    font-size: 0.98rem;
    transition: all var(--transition-normal);
    text-transform: uppercase;
    white-space: nowrap;
    position: relative;
}

#tourmag-menu .nav-link:hover {
    color: var(--accent-green);
    background: rgba(89, 223, 122, 0.1);
}

#tourmag-menu .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-green), var(--accent-blue-light));
    transition: width var(--transition-normal);
}

#tourmag-menu .nav-link:hover::after,
#tourmag-menu .nav-item.active .nav-link::after {
    width: 100%;
}

#tourmag-menu .nav-icon {
    font-size: 0.7rem;
    transition: transform var(--transition-normal);
}

body.hover-mode #tourmag-menu .nav-item:hover .nav-icon,
#tourmag-menu .nav-item.active .nav-icon {
    transform: rotate(180deg);
}

#tourmag-menu .nav-link img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    flex-shrink: 0;
}

/* ========================================
   MEGA MENU - DESKTOP (Position Fixed)
   ======================================== */
#tourmag-menu .mega-menu {
    /* MOBILE FIRST: Static par défaut */
    position: static;
    width: 100%;
    background: var(--bg-white);
    box-shadow: none;
    
    /* Caché par défaut */
    display: none;
    opacity: 0;
    visibility: hidden;
    
    /* Transitions douces */
    transition: opacity var(--transition-normal), visibility var(--transition-normal);
    
    /* Pas de z-index délirant */
    z-index: var(--z-mega-menu);
    
    /* Scroll si nécessaire */
    max-height: 80vh;
    overflow-y: auto;
}

/* Affichage du mega menu quand actif */
#tourmag-menu .nav-item.active .mega-menu {
    display: block;
    opacity: 1;
    visibility: visible;
}

/* DESKTOP: Position fixed SEULEMENT au-dessus de 768px */
@media (min-width: 769px) {
    #tourmag-menu .mega-menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: var(--shadow-lg);
        
        /* Gestion hover en desktop */
        pointer-events: none;
    }
    
    /* Mode hover desktop */
    body.hover-mode #tourmag-menu .nav-item:hover .mega-menu {
        display: block;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
    
    /* Mode clic desktop */
    #tourmag-menu .nav-item.active .mega-menu {
        pointer-events: auto;
    }
}

#tourmag-menu .mega-menu-content {
    max-width: 1600px;
    margin: 0 auto;
    padding: 3rem;
    position: relative;
}

/* ========================================
   COLONNES DU MEGA MENU
   ======================================== */
#tourmag-menu .mega-columns {
    display: grid;
    gap: 3rem;
    position: relative;
}

#tourmag-menu .mega-columns.cols-4 {
    grid-template-columns: repeat(4, 1fr);
}

#tourmag-menu .mega-columns.cols-3 {
    grid-template-columns: repeat(3, 1fr);
}

#tourmag-menu .mega-columns.cols-2 {
    grid-template-columns: repeat(2, 1fr);
}

#tourmag-menu .mega-column {
    animation: fadeInUp var(--transition-slow) ease forwards;
    opacity: 0;
}

#tourmag-menu .nav-item:hover .mega-column:nth-child(1) { animation-delay: 0.05s; }
#tourmag-menu .nav-item:hover .mega-column:nth-child(2) { animation-delay: 0.1s; }
#tourmag-menu .nav-item:hover .mega-column:nth-child(3) { animation-delay: 0.15s; }
#tourmag-menu .nav-item:hover .mega-column:nth-child(4) { animation-delay: 0.2s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

#tourmag-menu .mega-column-title {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, var(--accent-green), var(--accent-blue-light)) 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#tourmag-menu .mega-links {
    list-style: none;
}

#tourmag-menu .mega-link {
    display: block;
    padding: 0.625rem 0;
    color: var(--text-gray);
    font-size: 1.2rem;
    transition: all var(--transition-fast);
    position: relative;
}

#tourmag-menu .mega-link:hover {
    color: var(--primary-blue);
    font-weight: 500;
}

/* ========================================
   NEWSLETTERS & MÉDIAS (Accordéons)
   ======================================== */
#tourmag-menu .newsletter-item,
#tourmag-menu .media-item {
    position: relative;
    overflow: visible;
}

#tourmag-menu .newsletter-item .mega-link,
#tourmag-menu .media-item .mega-link {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-light);
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    transition: all var(--transition-fast);
    width: 100%;
    text-align: left;
    font-size: 1.15rem;
    color: var(--text-gray);
}

#tourmag-menu .newsletter-item .mega-link:hover,
#tourmag-menu .media-item .mega-link:hover {
    background: linear-gradient(135deg, rgba(89, 223, 122, 0.15), rgba(9, 86, 231, 0.1));
    box-shadow: 0 2px 8px rgba(89, 223, 122, 0.2);
    transform: translateY(-1px);
}

#tourmag-menu .newsletter-item.active .mega-link,
#tourmag-menu .media-item.active .mega-link {
    background: linear-gradient(135deg, rgba(89, 223, 122, 0.2), rgba(9, 86, 231, 0.15));
    border-left: 3px solid var(--accent-green);
}

#tourmag-menu .newsletter-icon img,
#tourmag-menu .media-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    vertical-align: middle;
}

#tourmag-menu .chevron {
    font-size: 0.8rem;
    color: var(--primary-blue);
    transition: transform var(--transition-normal);
    margin-left: auto;
    background: rgba(0, 102, 204, 0.1);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

#tourmag-menu .newsletter-item.active .chevron,
#tourmag-menu .media-item.active .chevron {
    transform: rotate(180deg);
    background: rgba(0, 102, 204, 0.2);
}

/* Sous-menus des accordéons */
#tourmag-menu .newsletter-submenu,
#tourmag-menu .media-submenu {
    margin-left: 1rem;
    margin-top: 0.5rem;
    background: var(--bg-white);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0;
    box-shadow: var(--shadow-sm);
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    transition: all var(--transition-normal);
}

#tourmag-menu .newsletter-item.active .newsletter-submenu,
#tourmag-menu .media-item.active .media-submenu {
    max-height: 400px;
    padding: 1.5rem;
    opacity: 1;
    visibility: visible;
}

#tourmag-menu .newsletter-submenu ul,
#tourmag-menu .media-submenu ul {
    list-style: none;
}

#tourmag-menu .newsletter-submenu ul li,
#tourmag-menu .media-submenu ul li {
    margin-bottom: 0.5rem;
}

#tourmag-menu .newsletter-submenu ul li:last-child,
#tourmag-menu .media-submenu ul li:last-child {
    margin-bottom: 0;
}

#tourmag-menu .newsletter-submenu ul li a,
#tourmag-menu .media-submenu ul li a {
    display: block;
    padding: 0.75rem 1rem;
    color: var(--text-gray);
    font-size: 1.1rem;
    border-radius: 4px;
    transition: all var(--transition-fast);
}

#tourmag-menu .newsletter-submenu ul li a:hover,
#tourmag-menu .media-submenu ul li a:hover {
    background: var(--bg-light);
    color: var(--primary-blue);
    padding-left: 1.25rem;
}

/* ========================================
   LIENS MÉDIAS SIMPLES
   ======================================== */
#tourmag-menu .media-simple-link {
    display: block;
    background: var(--bg-light);
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    color: var(--text-gray);
    font-size: 1.15rem;
    transition: all var(--transition-fast);
}

#tourmag-menu .media-simple-link:hover {
    background: linear-gradient(135deg, rgba(89, 223, 122, 0.15), rgba(9, 86, 231, 0.1));
    color: var(--primary-blue);
    box-shadow: 0 2px 8px rgba(89, 223, 122, 0.2);
    transform: translateY(-1px);
}

/* ========================================
   BOÎTES SPÉCIALES
   ======================================== */
#tourmag-menu .special-media-box {
    background: linear-gradient(135deg, rgba(0, 102, 204, 0.12), rgba(255, 102, 0, 0.08));
    border: 2px solid #ffd700;
    border-radius: 8px;
    padding: 1rem;
}

#tourmag-menu .special-media-box .media-simple-link {
    background: rgba(255, 255, 255, 0.9);
    font-weight: 500;
}

#tourmag-menu .special-media-box .media-simple-link:hover {
    background: var(--bg-white);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
}

#tourmag-menu .subscription-offers-box {
    background: linear-gradient(135deg, rgba(89, 223, 122, 0.03), rgba(9, 86, 231, 0.03));
    border-radius: 12px;
    padding: 1.5rem;
}

#tourmag-menu .subscription-offers-box h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-blue);
    margin-bottom: 1rem;
    text-align: center;
}

#tourmag-menu .subscription-offer-item {
    background: var(--bg-white);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 0.75rem;
    transition: all var(--transition-fast);
    border-left: 3px solid var(--primary-blue);
}

#tourmag-menu .subscription-offer-item:last-child {
    margin-bottom: 0;
}

#tourmag-menu .subscription-offer-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
}

#tourmag-menu .subscription-offer-item h5 {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--primary-blue);
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#tourmag-menu .subscription-offer-item p {
    font-size: 1.05rem;
    color: var(--text-gray);
    margin: 0;
    line-height: 1.4;
}

#tourmag-menu .subscription-offer-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: var(--text-dark);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin-left: auto;
}

#tourmag-menu .premium-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: var(--text-dark);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin-left: 0.5rem;
    vertical-align: middle;
    line-height: 1;
}

/* ========================================
   SCROLLBAR PERSONNALISÉE
   ======================================== */
#tourmag-menu .mega-menu::-webkit-scrollbar {
    width: 8px;
}

#tourmag-menu .mega-menu::-webkit-scrollbar-track {
    background: var(--bg-light);
}

#tourmag-menu .mega-menu::-webkit-scrollbar-thumb {
    background: var(--primary-blue);
    border-radius: 4px;
}

#tourmag-menu .mega-menu::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}

html {
    scroll-behavior: smooth;
}

/* ========================================
   MENU MOBILE - BOUTON HAMBURGER
   ======================================== */
#tourmag-menu .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: var(--bg-black);
    cursor: pointer;
    padding: 1rem;
    z-index: var(--z-mobile-menu);
    position: relative;
}

#tourmag-menu .hamburger-icon,
#tourmag-menu .close-icon {
    transition: all var(--transition-normal);
    font-size: 1.8rem;
    display: block;
}


#tourmag-menu .mobile-menu-toggle .close-icon {
    display: none;
}

#tourmag-menu .mobile-menu-toggle.active .hamburger-icon {
    display: none;
}

#tourmag-menu .mobile-menu-toggle.active .close-icon {
    display: block;
}

/* ========================================
   RESPONSIVE - DESKTOP OPTIMISATIONS
   ======================================== */

/* Grands écrans (1600px+) : Tailles normales */
@media (min-width: 1600px) {
    #tourmag-menu .nav-link {
        padding: 1.25rem 1.2rem;
        font-size: 1rem;
    }
}

/* Laptops moyens (1400-1600px) */
@media (max-width: 1600px) {
    #tourmag-menu .nav-link {
        padding: 1.25rem 1rem;
        font-size: 0.95rem;
    }
    
    #tourmag-menu .mega-columns.cols-4,
    #tourmag-menu .mega-columns.cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Laptops petits (1200-1400px) */
@media (max-width: 1400px) {
    #tourmag-menu .nav-link {
        padding: 1.25rem 0.9rem;
        font-size: 0.9rem;
    }
    
    #tourmag-menu .nav-list {
        flex-wrap: wrap;
    }
}

/* Tablettes (1024-1200px) */
@media (max-width: 1200px) {
    #tourmag-menu .nav-link {
        padding: 1.25rem 0.7rem;
        font-size: 0.85rem;
    }
    
    #tourmag-menu .nav-container {
        padding: 0 1rem;
    }
    
    /* Onglet Abonnés en 1 colonne */
    #tourmag-menu .mega-columns.abonnes-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

/* Petites tablettes (768-1024px) */
@media (max-width: 1024px) {
    #tourmag-menu .nav-link {
        padding: 1rem 0.6rem;
        font-size: 0.8rem;
    }
    
    #tourmag-menu .mega-columns.cols-2:not(.abonnes-grid) {
        grid-template-columns: 1fr;
    }
}

/* ========================================
   RESPONSIVE - MOBILE (768px et moins)
   ======================================== */
@media (max-width: 768px) {
    /* Afficher le bouton hamburger */
    #tourmag-menu .mobile-menu-toggle {
        display: block;
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
    }
    
    /* Ajuster le container pour faire place au bouton */
    #tourmag-menu .nav-container {
        position: relative;
        padding: 0 1rem 0 4rem;
    }
    
    /* Liste cachée par défaut */
    #tourmag-menu .nav-list {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-black);
        box-shadow: var(--shadow-lg);
        padding: 0.5rem 0;
        gap: 0;
        z-index: var(--z-mobile-menu);
    }
    
    /* Afficher la liste quand active */
    #tourmag-menu .nav-list.active {
        display: flex;
    }
    
    /* Retirer le trait animé en mobile */
    #tourmag-menu .nav-item.active .nav-link::after {
        width: 0;
    }
    
    /* Icône accueil plus petite */
    #tourmag-menu .nav-link img {
        width: 16px;
        height: 16px;
    }
    
    /* MEGA MENU EN MOBILE - Position Static (PAS Fixed) */
    #tourmag-menu .mega-menu {
        position: static;
        box-shadow: none;
        border-left: 3px solid;
        border-image: linear-gradient(180deg, var(--accent-green), var(--accent-blue-light)) 1;
        margin: 0;
        padding: 0;
        max-height: none;
        overflow: visible;
        
        /* Réinitialiser le pointeur en mobile */
        pointer-events: auto;
    }
    
    /* Contenu du mega menu */
    #tourmag-menu .mega-menu-content {
        padding: 1rem;
    }
    
    /* Une seule colonne */
    #tourmag-menu .mega-columns {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    #tourmag-menu .mega-column {
        width: 100%;
        padding: 0;
    }
    
    /* Images dans les mega menus */
    #tourmag-menu .mega-column img,
    #tourmag-menu .newsletter-icon img,
    #tourmag-menu .media-icon img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        margin-right: 0.5rem;
    }
    
    /* Conteneurs d'icônes */
    #tourmag-menu .newsletter-item .mega-link .newsletter-icon,
    #tourmag-menu .media-item .mega-link .media-icon {
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    /* Alignement des liens médias */
    #tourmag-menu .media-item .mega-link,
    #tourmag-menu .media-simple-link {
        text-align: left;
        justify-content: flex-start;
        padding-left: 1rem;
    }
    
    /* Zone du logo */
    #tourmag-menu .logo-area {
        padding: 1rem;
    }
    
    /* Bouton newsletter */
    #tourmag-menu .newsletter-subscribe-btn {
        width: 100%;
        padding: 1.25rem 1rem;
        font-size: 1.1rem;
        text-align: center;
    }
}

/* Très petits écrans (400px et moins) */
@media (max-width: 400px) {
    #tourmag-menu .mega-column img,
    #tourmag-menu .newsletter-icon img,
    #tourmag-menu .media-icon img {
        width: 30px;
        height: 30px;
    }
    
    #tourmag-menu .newsletter-item .mega-link,
    #tourmag-menu .media-item .mega-link,
    #tourmag-menu .media-simple-link {
        font-size: 0.9rem;
        padding: 0.6rem 0.8rem;
    }
}
`;
        
        document.head.appendChild(style);
    }
    
    // ========================================
    // INJECTION DU HTML
    // ========================================
    function injectHTML() {
        const container = document.getElementById('tourmag-menu');
        if (!container) {
            console.error('TourMag Menu: Element #tourmag-menu not found');
            return false;
        }
        
        container.innerHTML = `
<header class="header">
    <nav class="main-nav">
        <div class="nav-container">
            <button class="mobile-menu-toggle" id="mobileMenuToggle">
                <span class="hamburger-icon">☰</span>
                <span class="close-icon">✕</span>
            </button>
            
            <ul class="nav-list" id="navList">
                <!-- ==================== ICÔNE ACCUEIL ==================== -->
                <li class="nav-item">
                    <a href="https://www.tourmag.com/" class="nav-link">
                        <img src="https://www.tourmag.com/my/tourmag/site/menu/accueil.png" alt="Accueil">
                    </a>
                </li>
                
                <!-- ==================== 1. ACTUALITÉS ==================== -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        ACTUALITÉS
                        <span class="nav-icon">▼</span>
                    </a>
                    <div class="mega-menu">
                        <div class="mega-menu-content">
                            <div class="mega-columns cols-4">
                                <!-- Colonne 1 -->
                                <div class="mega-column">
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/Distribution_r4.html" class="media-simple-link">Distribution</a></li>
                                        <li><a href="https://www.tourmag.com/Production_r8.html" class="media-simple-link">Production</a></li>
                                        <li><a href="https://www.tourmag.com/Transport_r7.html" class="media-simple-link">Transport</a></li>
                                        <li><a href="https://www.tourmag.com/Hebergement_r6.html" class="media-simple-link">Hébergement</a></li>
                                        <li><a href="https://www.tourmag.com/Dossiers-speciaux_r582.html" class="media-simple-link">Dossiers spéciaux</a></li>
                                        <li><a href="https://www.tourmag.com/Salons-et-evenements_r365.html" class="media-simple-link">Salons et Evénements</a></li>
                                    </ul>
                                </div>
                                <!-- Colonne 2 -->
                                <div class="mega-column">
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/BONS-PLANS-AGV_r32.html" class="media-simple-link">Bons Plans AGV</a></li>
                                        <li><a href="https://www.tourmag.com/Courrier-Lecteurs_r10.html" class="media-simple-link">Courrier des Lecteurs</a></li>
                                        <li><a href="https://www.tourmag.com/People_r2.html" class="media-simple-link">People</a></li>
                                        <li><a href="https://www.tourmag.com/Carnet_r57.html" class="media-simple-link">Carnet</a></li>
                                        <li><a href="https://www.tourmag.com/Editorial_r1.html" class="media-simple-link">Editorial</a></li>
                                        <li><a href="https://www.tourmag.com/TourMaG-com-le-groupe_r193.html" class="media-simple-link">TourMaG, le groupe</a></li>
                                    </ul>
                                </div>
                                <!-- Colonne 3 -->
                                <div class="mega-column">
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/Brand-News_r330.html" class="media-simple-link">Brand News</a></li>
                                        <li><a href="https://www.tourmag.com/Publi-news_r569.html" class="media-simple-link">Publi-News</a></li>
                                        <li><a href="https://www.tourmag.com/Publi-redactionnel_r226.html" class="media-simple-link">Publi-Rédactionnel</a></li>
                                        <li><a href="https://www.tourmag.com/Webinaires_r493.html" class="media-simple-link">Webinaires</a></li>
                                        <li><a href="https://www.tourmag.com/Actus-Visas_r356.html" class="media-simple-link">Actus Visas</a></li>
                                    </ul>
                                </div>
                                <!-- Colonne 4 - Articles abonnés -->
                                <div class="mega-column">
                                    <ul class="mega-links" style="display: flex; flex-direction: column; gap: 0.5rem;">
                                        <div style="border: 2px solid #ffd700; border-radius: 12px; padding: 1rem; background: linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(255, 237, 78, 0.03)); position: relative; margin-bottom: 0.5rem;">
                                            <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #ffd700, #ffed4e); padding: 0.5rem 2rem; border-radius: 20px; font-weight: 700; font-size: 1.4rem; color: #1a1a1a; box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3); white-space: nowrap; min-width: 200px; text-align: center;">Articles abonnés</div>
                                            <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                                                <li><a href="https://www.tourmag.com/CLUB-ABONNES_r523.html" class="media-simple-link" style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 237, 78, 0.1)); padding: 0.75rem 1rem; font-size: 1.15rem;">Premium</a></li>
                                                <li><a href="https://www.tourmag.com/futuroscopie/" class="media-simple-link" style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 237, 78, 0.1)); padding: 0.75rem 1rem; font-size: 1.15rem;">Futuroscopie</a></li>
                                                <li><a href="https://www.tourmag.com/MEMBERSHIP-CLUB_r344.html" class="media-simple-link" style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 237, 78, 0.1)); padding: 0.75rem 1rem; font-size: 1.15rem;">MemberShip Club</a></li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ==================== 2. THÉMATIQUES ==================== -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        THÉMATIQUES
                        <span class="nav-icon">▼</span>
                    </a>
                    <div class="mega-menu">
                        <div class="mega-menu-content">
                            <div class="mega-columns cols-3">
                                <!-- Colonne 1 -->
                                <div class="mega-column">
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/airmag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/airmag1.png" alt="AirMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">AirMaG</a></li>
                                        <li><a href="https://www.brochuresenligne.com/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/brochures_en_ligne1.png" alt="Brochures en ligne" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Brochures en ligne</a></li>
                                        <li><a href="https://www.tourmag.com/cruisemag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/cruisemag.png" alt="CruiseMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">CruiseMaG</a></li>
                                        <li class="media-item">
                                            <button type="button" class="mega-link">
                                                <span class="media-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/destimag.png" alt="DestiMaG"></span>
                                                DestiMaG
                                                <span class="chevron">▼</span>
                                            </button>
                                            <div class="media-submenu">
                                                <ul>
                                                    <li><a href="https://www.tourmag.com/Destinations-sur-mesure_r329.html">Destinations sur mesure</a></li>
                                                    <li><a href="https://www.tourmag.com/Destinations-du-monde_r3.html">Destinations du monde</a></li>
                                                    <li><a href="https://www.tourmag.com/France_r9.html">France</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="https://www.tourmag.com/evenmag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/evenmag.png" alt="EvenMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">EvenMaG</a></li>
                                        <li><a href="https://www.tourmag.com/formation/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/formation.png" alt="Formation" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Formation</a></li>
                                    </ul>
                                </div>
                                <!-- Colonne 2 -->
                                <div class="mega-column">
                                    <ul class="mega-links">
                                        <li><a href="https://www.job-tourisme.com/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/jobs.png" alt="Jobs" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Jobs</a></li>
                                        <li><a href="https://www.tourmag.com/Mice_r11.html" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/mice.png" alt="Mice" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Mice</a></li>
                                        <li><a href="https://www.tourmag.com/restoumag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/restoumag.png" alt="RestouMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">RestouMaG</a></li>
                                        <li><a href="https://www.tourmag.com/tourisme-responsable/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/tourisme_responsable.png" alt="Tourisme Responsable" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Tourisme Responsable</a></li>
                                        <li><a href="https://www.tourmag.com/Tourisme-d-affaires_r12.html" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/tourisme_affaires.png" alt="Tourisme d'Affaires" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Tourisme d'Affaires</a></li>
                                    </ul>
                                </div>
                                <!-- Colonne 3 -->
                                <div class="mega-column">
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/Tribunes-et-Expertises_r191.html" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/tribune_expertise.png" alt="Tribunes et Expertises" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Tribunes et Expertises</a></li>
                                        <li><a href="https://www.tourmag.com/Vols-low-cost_r13.html" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/lowcost.png" alt="Vols Low Cost" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Vols Low Cost</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ==================== 3. NEWSLETTERS ==================== -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        NEWSLETTERS
                        <span class="nav-icon">▼</span>
                    </a>
                    <div class="mega-menu">
                        <div class="mega-menu-content">
                            <div class="mega-columns cols-2">
                                <!-- Colonne 1 - Liste des newsletters -->
                                <div class="mega-column">
                                    <h3 class="mega-column-title">📧 Nos Newsletters</h3>
                                    <ul class="newsletter-list">
                                        <!-- Newsletter 1 -->
                                        <li class="newsletter-item">
                                            <button type="button" class="mega-link">
                                                <span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/newsletter_quotidienne.png" alt="Quotidienne"></span>
                                                La Quotidienne
                                                <span class="chevron">▼</span>
                                            </button>
                                            <div class="newsletter-submenu">
                                                <ul>
                                                    <li><a href="https://www.tourmag.com/podcast/">🎧 Écouter</a></li>
                                                    <li><a href="https://www.tourmag.com/La-Quotidienne-de-TourMaG-com_a114596.html">📚 Archives</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <!-- Newsletter 2 -->
                                        <li class="newsletter-item">
                                            <button type="button" class="mega-link">
                                                <span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/newsletter_weekend.png" alt="Weekend"></span>
                                                La Weekend
                                                <span class="chevron">▼</span>
                                            </button>
                                            <div class="newsletter-submenu">
                                                <ul>
                                                    <li><a href="https://www.tourmag.com/podcast/">🎧 Écouter</a></li>
                                                    <li><a href="https://www.tourmag.com/La-Weekend-de-TourMaG-com_a114597.html">📚 Archives</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <!-- Newsletter 3 -->
                                        <li class="newsletter-item">
                                            <button type="button" class="mega-link">
                                                <span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/newsletter_cruise.png" alt="CruiseMaG"></span>
                                                CruiseMaG
                                                <span class="chevron">▼</span>
                                            </button>
                                            <div class="newsletter-submenu">
                                                <ul>
                                                    <li><a href="https://www.tourmag.com/cruisemag/podcast/">🎧 Écouter</a></li>
                                                    <li><a href="https://www.tourmag.com/cruisemag/CruiseMaG-Newsletter_a114598.html">📚 Archives</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <!-- Newsletter 4 -->
                                        <li class="newsletter-item">
                                            <button type="button" class="mega-link">
                                                <span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/newsletter_b2b.png" alt="B2B"></span>
                                                La B2B
                                                <span class="chevron">▼</span>
                                            </button>
                                            <div class="newsletter-submenu">
                                                <ul>
                                                    <li><a href="https://www.tourmag.com/La-B2B-de-TourMaG-com_a114599.html">📚 Archives</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Colonne 2 - Inscription -->
                                <div class="mega-column">
                                    <h3 class="mega-column-title">✉️ S'abonner</h3>
                                    <div style="background: linear-gradient(135deg, rgba(89, 223, 122, 0.1), rgba(9, 86, 231, 0.05)); padding: 2rem; border-radius: 12px; text-align: center;">
                                        <p style="font-size: 1.1rem; color: var(--text-gray); margin-bottom: 1.5rem;">Recevez nos newsletters gratuitement dans votre boîte mail !</p>
                                        <a href="https://www.tourmag.com/inscription-newsletters/" class="newsletter-subscribe-btn" style="display: inline-block; background: linear-gradient(135deg, var(--accent-green), var(--accent-blue-light)); color: white; padding: 1rem 2rem; border-radius: 8px; font-weight: 600; font-size: 1.1rem; text-decoration: none; box-shadow: 0 4px 12px rgba(89, 223, 122, 0.3); transition: all 0.3s ease;">
                                            📧 Je m'abonne gratuitement
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ==================== 4. OFFRES PROS ==================== -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        OFFRES PROS
                        <span class="nav-icon">▼</span>
                    </a>
                    <div class="mega-menu">
                        <div class="mega-menu-content">
                            <div class="mega-columns cols-3">
                                <div class="mega-column">
                                    <h3 class="mega-column-title">💼 Nos Services</h3>
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/Publicite_p5.html" class="media-simple-link">Publicité</a></li>
                                        <li><a href="https://www.tourmag.com/Brand-Content_p6.html" class="media-simple-link">Brand Content</a></li>
                                        <li><a href="https://www.tourmag.com/Webinaires_p7.html" class="media-simple-link">Webinaires</a></li>
                                        <li><a href="https://www.tourmag.com/Newsletters-sponsorisees_p8.html" class="media-simple-link">Newsletters sponsorisées</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h3 class="mega-column-title">📊 Solutions Marketing</h3>
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/Etudes-et-enquetes_p9.html" class="media-simple-link">Études et enquêtes</a></li>
                                        <li><a href="https://www.tourmag.com/Events-TourMaG_p10.html" class="media-simple-link">Events TourMaG</a></li>
                                        <li><a href="https://www.tourmag.com/Salons-professionnels_p11.html" class="media-simple-link">Salons professionnels</a></li>
                                    </ul>
                                </div>
                                <div class="mega-column">
                                    <h3 class="mega-column-title">📞 Contact Commercial</h3>
                                    <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px;">
                                        <p style="font-size: 1.05rem; color: var(--text-gray); margin-bottom: 1rem;">Discutons de vos besoins !</p>
                                        <a href="mailto:commercial@tourmag.com" style="color: var(--primary-blue); font-weight: 600; font-size: 1.1rem;">📧 commercial@tourmag.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ==================== 5. MÉDIAS ==================== -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        MÉDIAS
                        <span class="nav-icon">▼</span>
                    </a>
                    <div class="mega-menu">
                        <div class="mega-menu-content">
                            <div class="mega-columns cols-2">
                                <!-- Colonne 1 -->
                                <div class="mega-column">
                                    <h3 class="mega-column-title">📺 Nos Médias</h3>
                                    <ul class="mega-links">
                                        <li class="media-item">
                                            <button type="button" class="mega-link">
                                                <span class="media-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/podcast.png" alt="Podcast"></span>
                                                Podcasts
                                                <span class="chevron">▼</span>
                                            </button>
                                            <div class="media-submenu">
                                                <ul>
                                                    <li><a href="https://www.tourmag.com/podcast/">La Quotidienne</a></li>
                                                    <li><a href="https://www.tourmag.com/podcast/">La Weekend</a></li>
                                                    <li><a href="https://www.tourmag.com/cruisemag/podcast/">CruiseMaG</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="https://www.tourmag.com/photos/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/photos.png" alt="Photos" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Photos</a></li>
                                        <li><a href="https://www.tourmag.com/videos/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/videos.png" alt="Vidéos" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem; display: inline-block;">Vidéos</a></li>
                                    </ul>
                                </div>
                                <!-- Colonne 2 - Mise en avant -->
                                <div class="mega-column">
                                    <div class="special-media-box">
                                        <h3 class="mega-column-title" style="border: none; padding-bottom: 0;">⭐ À découvrir</h3>
                                        <ul class="mega-links" style="margin-top: 1rem;">
                                            <li><a href="https://www.tourmag.com/tourmag-tv/" class="media-simple-link">📺 TourMaG TV</a></li>
                                            <li><a href="https://www.tourmag.com/futuroscopie/" class="media-simple-link">🔮 Futuroscopie</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ==================== 6. ABONNEMENTS ==================== -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        ABONNEMENTS
                        <span class="nav-icon">▼</span>
                    </a>
                    <div class="mega-menu">
                        <div class="mega-menu-content">
                            <div class="mega-columns cols-2 abonnes-grid">
                                <!-- Colonne 1 - Offres -->
                                <div class="mega-column">
                                    <h3 class="mega-column-title">💎 Nos Formules</h3>
                                    <div class="subscription-offers-box">
                                        <div class="subscription-offer-item">
                                            <h5>Premium <span class="subscription-offer-badge">POPULAIRE</span></h5>
                                            <p>Accès illimité à tous nos contenus exclusifs</p>
                                        </div>
                                        <div class="subscription-offer-item">
                                            <h5>Futuroscopie</h5>
                                            <p>Analyses prospectives du secteur touristique</p>
                                        </div>
                                        <div class="subscription-offer-item">
                                            <h5>MemberShip Club</h5>
                                            <p>Réseau professionnel + événements exclusifs</p>
                                        </div>
                                    </div>
                                    <div style="text-align: center; margin-top: 1.5rem;">
                                        <a href="https://www.tourmag.com/abonnements/" style="display: inline-block; background: linear-gradient(135deg, var(--primary-blue), var(--primary-dark)); color: white; padding: 1rem 2rem; border-radius: 8px; font-weight: 600; text-decoration: none; box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);">
                                            📋 Voir toutes les offres
                                        </a>
                                    </div>
                                </div>
                                <!-- Colonne 2 - Avantages -->
                                <div class="mega-column">
                                    <h3 class="mega-column-title">🎁 Avantages Abonnés</h3>
                                    <ul class="mega-links">
                                        <li><a href="https://www.tourmag.com/CLUB-ABONNES_r523.html" class="media-simple-link">📰 Contenus Premium</a></li>
                                        <li><a href="https://www.tourmag.com/futuroscopie/" class="media-simple-link">🔮 Futuroscopie</a></li>
                                        <li><a href="https://www.tourmag.com/MEMBERSHIP-CLUB_r344.html" class="media-simple-link">🤝 MemberShip Club</a></li>
                                        <li><a href="https://www.tourmag.com/Webinaires_r493.html" class="media-simple-link">🎥 Webinaires exclusifs</a></li>
                                    </ul>
                                    <div style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 237, 78, 0.05)); padding: 1.5rem; border-radius: 8px; margin-top: 1.5rem; border: 2px solid #ffd700;">
                                        <p style="font-size: 1.05rem; color: var(--text-gray); margin-bottom: 0.5rem;">💬 Une question ?</p>
                                        <a href="mailto:abonnements@tourmag.com" style="color: var(--primary-blue); font-weight: 600;">📧 abonnements@tourmag.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- ==================== 7. PETITES ANNONCES ==================== -->
                <li class="nav-item">
                    <a href="https://www.tourmag.com/petites-annonces/" class="nav-link">
                        PETITES ANNONCES
                    </a>
                </li>

                <!-- ==================== 8. CONTACTS ==================== -->
                <li class="nav-item">
                    <a href="https://www.tourmag.com/contacts/" class="nav-link">
                        CONTACTS
                    </a>
                </li>
                
            </ul>
        </div>
    </nav>
</header>
`;
        
        return true;
    }
    
    // ========================================
    // JAVASCRIPT - COMPORTEMENTS
    // ========================================
    function initializeJS() {
        console.log('🚀 TourMag Menu Widget - Initialisation');
        
        // Variables globales
        const isMobile = () => window.innerWidth <= 768;
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const navList = document.getElementById('navList');
        const navItems = document.querySelectorAll('#tourmag-menu .nav-item');
        
        // ========================================
        // MENU MOBILE - Toggle hamburger
        // ========================================
        if (mobileToggle) {
            mobileToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('active');
                navList.classList.toggle('active');
                console.log('📱 Menu mobile toggled');
            });
        }
        
        // ========================================
        // DÉTECTION DESKTOP vs MOBILE
        // ========================================
        function setupBehavior() {
            if (!isMobile()) {
                console.log('🖥️ MODE DESKTOP - Hover activé');
                document.body.classList.add('hover-mode');
                
                // Fermer au clic extérieur en desktop
                document.addEventListener('click', function(event) {
                    const mainNav = document.querySelector('#tourmag-menu .main-nav');
                    if (mainNav && !mainNav.contains(event.target)) {
                        navItems.forEach(item => item.classList.remove('active'));
                    }
                });
                
                // Gestion clic sur les liens en desktop (toggle)
                navItems.forEach(item => {
                    const link = item.querySelector('.nav-link');
                    const megaMenu = item.querySelector('.mega-menu');
                    
                    if (megaMenu && link) {
                        link.addEventListener('click', function(e) {
                            if (!isMobile()) {
                                e.preventDefault();
                                e.stopPropagation();
                                
                                const wasActive = item.classList.contains('active');
                                
                                // Fermer tous les autres
                                navItems.forEach(otherItem => {
                                    if (otherItem !== item) {
                                        otherItem.classList.remove('active');
                                    }
                                });
                                
                                // Toggle
                                if (wasActive) {
                                    item.classList.remove('active');
                                } else {
                                    item.classList.add('active');
                                }
                            }
                        });
                    }
                });
                
            } else {
                console.log('📱 MODE MOBILE - Clic activé');
                document.body.classList.remove('hover-mode');
            }
        }
        
        // ========================================
        // GESTION MOBILE - Accordéons
        // ========================================
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const megaMenu = item.querySelector('.mega-menu');
            
            if (megaMenu && link) {
                link.addEventListener('click', function(e) {
                    if (isMobile()) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const isOpen = item.classList.contains('active');
                        
                        // Fermer les autres
                        navItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('active');
                            }
                        });
                        
                        // Toggle
                        item.classList.toggle('active');
                    }
                });
            }
        });
        
        // ========================================
        // FERMER MENU MOBILE au clic extérieur
        // ========================================
        document.addEventListener('click', function(event) {
            if (isMobile()) {
                const nav = document.querySelector('#tourmag-menu .main-nav');
                const toggle = document.getElementById('mobileMenuToggle');
                
                if (nav && toggle && 
                    !nav.contains(event.target) && 
                    !toggle.contains(event.target)) {
                    navList.classList.remove('active');
                    toggle.classList.remove('active');
                }
            }
        });
        
        // ========================================
        // GESTION ACCORDÉONS NEWSLETTERS
        // ========================================
        const newsletterItems = document.querySelectorAll('#tourmag-menu .newsletter-item');
        newsletterItems.forEach(item => {
            const link = item.querySelector('.mega-link');
            
            if (link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const wasActive = item.classList.contains('active');
                    
                    // Fermer les autres
                    newsletterItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle
                    item.classList.toggle('active');
                });
            }
        });
        
        // ========================================
        // GESTION ACCORDÉONS MÉDIAS
        // ========================================
        const mediaItems = document.querySelectorAll('#tourmag-menu .media-item');
        mediaItems.forEach(item => {
            const link = item.querySelector('.mega-link');
            
            if (link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const wasActive = item.classList.contains('active');
                    
                    // Fermer les autres
                    mediaItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle
                    item.classList.toggle('active');
                });
            }
        });
        
        // ========================================
        // RESIZE - Réinitialiser le comportement
        // ========================================
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (!isMobile()) {
                    // Fermer le menu mobile si on passe en desktop
                    navList.classList.remove('active');
                    if (mobileToggle) {
                        mobileToggle.classList.remove('active');
                    }
                }
                setupBehavior();
            }, 250);
        });
        
        // Initialiser le comportement
        setupBehavior();
        
        console.log('✅ TourMag Menu Widget - Prêt');
    }
    
    // ========================================
    // INITIALISATION AU CHARGEMENT
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectCSS();
            if (injectHTML()) {
                initializeJS();
            }
        });
    } else {
        injectCSS();
        if (injectHTML()) {
            initializeJS();
        }
    }
    
})();

/**
 * TourMag Navigation Menu Widget
 * Version: 1.0.0
 * Description: Widget tout-en-un pour le mega menu TourMag
 * Usage: <div id="tourmag-menu"></div><script src="tourmag-menu-widget.js"></script>
 */

(function() {
    'use strict';
    
    // Injecter le CSS
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = `:root {
            --primary-blue: #0066cc;
            --primary-dark: #004499;
            --accent-orange: #ff6600;
            --text-dark: #1a1a1a;
            --text-gray: #4a4a4a;
            --bg-light: #f8f9fa;
            --white: #ffffff;
            --border-color: #e0e0e0;
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
            --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.12);
            --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

 /* FORCER L'AFFICHAGE DU WIDGET - AJOUTER ICI ⬇️ */
    #tourmag-menu {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
       
    }

    #tourmag-menu .header {
        display: block !important;
    }

    #tourmag-menu .main-nav {
        display: block !important;
    }
    /* FIN DU CODE AJOUTÉ ⬆️ */




        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Josefin Sans', sans-serif;
            color: var(--text-dark);
            line-height: 1.6;
            background: var(--bg-light);
            overflow-x: hidden ;
        }

        /* En-tête et navigation principale */
        .header {
            background: var(--white);
            box-shadow: var(--shadow-sm);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .header-top {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-dark) 100%);
            color: var(--white);
            padding: 0.5rem 0;
            font-size: 0.875rem;
        }

        .header-top-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-area {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            font-family: 'Poppins', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-blue);
            text-decoration: none;
            letter-spacing: -0.5px;
        }

        .logo span {
            color: var(--accent-orange);
        }

        /* Navigation principale */
        .main-nav {
            background: #000000;
            position: relative;
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 5rem;
        }

        .nav-list {
            display: flex;
            list-style: none;
            gap: 0;
        }

        .nav-item {
            position: relative;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1.25rem 1.5rem;
            color: #ffffff;
            text-decoration: none;
            font-weight: 500;
            font-size: 1.05rem;
            transition: all 0.3s ease;
            position: relative;
            text-transform: uppercase;
            white-space: nowrap;
        }

        .nav-link:hover {
            color: #59DF7A;
            background: rgba(89, 223, 122, 0.1);
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #59DF7A, #0956E7);
            transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-item.active .nav-link::after {
            width: 100%;
        }

        .nav-icon {
            font-size: 0.7rem;
            transition: transform 0.3s ease;
        }

        .nav-item:hover .nav-icon {
            transform: rotate(180deg);
        }

        /* Mega Menu */
       .mega-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--white);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    max-height: 80vh;
    overflow-y: auto;
    z-index: 2000;
    will-change: transform, opacity;
    pointer-events: none;
}

        .nav-item:hover .mega-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
        }

        .mega-menu-content {
            max-width: 1600px;
            margin: 0 auto;
            padding: 3rem 3rem;
            position: relative;
            overflow: visible;
        }

        /* Colonnes du mega menu */
        .mega-columns {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 3rem;
            position: relative;
            overflow: visible;
        }

        .mega-columns.cols-4 {
            grid-template-columns: repeat(4, 1fr);
        }

        .mega-columns.cols-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        .mega-columns.cols-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        .mega-column {
            animation: fadeInUp 0.4s ease forwards;
            opacity: 0;
            position: relative;
            overflow: visible;
        }

        .nav-item:hover .mega-column:nth-child(1) { animation-delay: 0.05s; }
        .nav-item:hover .mega-column:nth-child(2) { animation-delay: 0.1s; }
        .nav-item:hover .mega-column:nth-child(3) { animation-delay: 0.15s; }
        .nav-item:hover .mega-column:nth-child(4) { animation-delay: 0.2s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
            from {
                transform: translateY(10px);
            }
        }

        .mega-column-title {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--primary-blue);
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
            border-bottom: 2px solid transparent;
            border-image: linear-gradient(90deg, #59DF7A, #0956E7) 1;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .mega-links {
            list-style: none;
        }

        .mega-link {
            display: block;
            padding: 0.625rem 0;
            color: var(--text-gray);
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.2s ease;
            position: relative;
        }

        .mega-link:hover {
            color: var(--primary-blue);
            font-weight: 500;
        }

        /* Sous-menus imbriqués */
        .mega-sublinks {
            list-style: none;
            margin-left: 1rem;
            margin-top: 0.5rem;
            padding-left: 1rem;
            border-left: 2px solid var(--border-color);
        }

        .mega-sublink {
            display: block;
            padding: 0.5rem 0;
            color: var(--text-gray);
            text-decoration: none;
            font-size: 1.1rem;
            transition: all 0.2s ease;
        }

        .mega-sublink:hover {
            color: var(--accent-orange);
            padding-left: 0.5rem;
        }

        /* Système de menu à 2 niveaux pour newsletters */
        .newsletter-list {
            position: relative;
            overflow: visible;
        }

       .newsletter-item {
    position: relative;
    overflow: visible;
    z-index: auto;
}

       .newsletter-item:hover {
    z-index: 100;
}

        .newsletter-item .mega-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-light);
            padding: 0.75rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 6px;
            transition: all 0.2s ease;
            position: relative;
        }

        .newsletter-item .mega-link {
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-light);
            padding: 0.75rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 6px;
            transition: all 0.2s ease;
            border: none;
            outline: none;
            width: 100%;
            text-align: left;
            font-family: inherit;
            font-size: 1.15rem;
            color: var(--text-gray);
        }

        .newsletter-item .mega-link:focus {
            outline: none;
            box-shadow: none;
        }

        .newsletter-item .mega-link .newsletter-icon {
            margin-right: 0.5rem;
            font-size: 1.1rem;
        }

        .newsletter-item .mega-link .newsletter-icon img,
        .media-item .mega-link .media-icon img {
            width: 40px;
            height: 40px;
            object-fit: contain;
            vertical-align: middle;
        }

        .newsletter-item .mega-link .chevron {
            font-size: 0.8rem;
            color: var(--primary-blue);
            transition: transform 0.3s ease;
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

        .newsletter-item.active .mega-link .chevron {
            transform: rotate(180deg);
            background: rgba(0, 102, 204, 0.2);
        }

        .newsletter-item .mega-link:hover {
            background: linear-gradient(135deg, rgba(89, 223, 122, 0.15), rgba(9, 86, 231, 0.1));
            box-shadow: 0 2px 8px rgba(89, 223, 122, 0.2);
            transform: translateY(-1px);
        }

        .newsletter-item.active .mega-link {
            background: linear-gradient(135deg, rgba(89, 223, 122, 0.2), rgba(9, 86, 231, 0.15));
            border-left: 3px solid #59DF7A;
        }

        /* Sous-menu vertical (déploiement en dessous au clic) */
       .newsletter-submenu {
    position: relative;
    left: 0;
    top: 0;
    margin-left: 1rem;
    margin-top: 0.5rem;
    background: var(--white);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 0 1.5rem;
    box-shadow: var(--shadow-sm);
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 10;
}

        .newsletter-item.active .newsletter-submenu {
            max-height: 400px;
            padding: 1.5rem;
            opacity: 1;
            visibility: visible;
        }

        .newsletter-submenu ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .newsletter-submenu ul li {
            margin-bottom: 0.5rem;
        }

        .newsletter-submenu ul li:last-child {
            margin-bottom: 0;
        }

        .newsletter-submenu ul li a {
            display: block;
            padding: 0.75rem 1rem;
            color: var(--text-gray);
            text-decoration: none;
            font-size: 1.1rem;
            border-radius: 4px;
            transition: all 0.2s ease;
        }

        .newsletter-submenu ul li a:hover {
            background: var(--bg-light);
            color: var(--primary-blue);
            padding-left: 1.25rem;
        }

        /* Styles identiques pour les médias avec sous-sections */
        .media-item {
            position: relative;
            overflow: visible;
            z-index: auto;
        }

        .media-item:hover {
            z-index: 100;
        }

        .media-item .mega-link {
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-light);
            padding: 0.75rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 6px;
            transition: all 0.2s ease;
            border: none;
            outline: none;
            width: 100%;
            text-align: left;
            font-family: inherit;
            font-size: 1.05rem;
            color: var(--text-gray);
        }

        .media-item .mega-link:focus {
            outline: none;
            box-shadow: none;
        }

        .media-item .mega-link .media-icon {
            margin-right: 0.5rem;
            font-size: 1.1rem;
        }

        .media-item .mega-link .chevron {
            font-size: 0.8rem;
            color: var(--primary-blue);
            transition: transform 0.3s ease;
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

        .media-item.active .mega-link .chevron {
            transform: rotate(180deg);
            background: rgba(0, 102, 204, 0.2);
        }

        .media-item .mega-link:hover {
            background: linear-gradient(135deg, rgba(89, 223, 122, 0.15), rgba(9, 86, 231, 0.1));
            box-shadow: 0 2px 8px rgba(89, 223, 122, 0.2);
            transform: translateY(-1px);
        }

        .media-item.active .mega-link {
            background: linear-gradient(135deg, rgba(89, 223, 122, 0.2), rgba(9, 86, 231, 0.15));
            border-left: 3px solid #59DF7A;
        }

        .media-submenu {
            position: relative;
            left: 0;
            top: 0;
            margin-left: 1rem;
            margin-top: 0.5rem;
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0 1.5rem;
            box-shadow: var(--shadow-sm);
            max-height: 0;
            opacity: 0;
            visibility: hidden;
            overflow: hidden;
            transition: all 0.3s ease;
            z-index: 10;
        }

        .media-item.active .media-submenu {
            max-height: 400px;
            padding: 1.5rem;
            opacity: 1;
            visibility: visible;
        }

        .media-submenu ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .media-submenu ul li {
            margin-bottom: 0.5rem;
        }

        .media-submenu ul li:last-child {
            margin-bottom: 0;
        }

        .media-submenu ul li a {
            display: block;
            padding: 0.75rem 1rem;
            color: var(--text-gray);
            text-decoration: none;
            font-size: 1.1rem;
            border-radius: 4px;
            transition: all 0.2s ease;
        }

        .media-submenu ul li a:hover {
            background: var(--bg-light);
            color: var(--primary-blue);
            padding-left: 1.25rem;
        }

        /* Style pour les liens médias simples (sans sous-menu) */
        .media-simple-link {
            display: block;
            background: var(--bg-light);
            padding: 0.75rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 6px;
            color: var(--text-gray);
            text-decoration: none;
            font-size: 1.15rem;
            transition: all 0.2s ease;
        }

        .media-simple-link:hover {
            background: linear-gradient(135deg, rgba(89, 223, 122, 0.15), rgba(9, 86, 231, 0.1));
            color: var(--primary-blue);
            box-shadow: 0 2px 8px rgba(89, 223, 122, 0.2);
            transform: translateY(-1px);
        }

        /* Boîte spéciale pour TourMaG TV et Futuroscopie */
        .special-media-box {
            background: linear-gradient(135deg, rgba(0, 102, 204, 0.12), rgba(255, 102, 0, 0.08));
            border: 2px solid #ffd700;
            border-radius: 8px;
            padding: 1rem;
        }

        .special-media-box .media-simple-link {
            background: rgba(255, 255, 255, 0.9);
            font-weight: 500;
        }

        .special-media-box .media-simple-link:hover {
            background: var(--white);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
        }

        /* Boîte des offres d'abonnement */
        .subscription-offers-box {
            background: linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(255, 102, 0, 0.05));
            border-radius: 12px;
            padding: 1.5rem;
        }

        .subscription-offers-box h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary-blue);
            margin-bottom: 1rem;
            text-align: center;
        }

        .subscription-offer-item {
            background: var(--white);
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 0.75rem;
            transition: all 0.2s ease;
            border-left: 3px solid var(--primary-blue);
        }

        .subscription-offer-item:last-child {
            margin-bottom: 0;
        }

        .subscription-offer-item:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 12px rgba(0, 102, 204, 0.15);
        }

        .subscription-offer-item h5 {
            font-size: 1.05rem;
            font-weight: 600;
            color: var(--primary-blue);
            margin-bottom: 0.3rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .subscription-offer-item p {
            font-size: 1.05rem;
            color: var(--text-gray);
            margin: 0;
            line-height: 1.4;
        }

        .subscription-offer-badge {
            display: inline-block;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            color: var(--text-dark);
            font-size: 0.7rem;
            font-weight: 700;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            margin-left: auto;
        }

        /* Menu compact (pour Abonnés, Petites Annonces, Contacts) */
        .mega-menu.compact {
            width: 400px;
            left: auto;
            right: 0;
        }


        /* Contenu démo */
        .demo-content {
            max-width: 1400px;
            margin: 4rem auto;
            padding: 0 2rem;
        }

        .demo-section {
            background: var(--white);
            padding: 3rem;
            border-radius: 12px;
            box-shadow: var(--shadow-sm);
            margin-bottom: 2rem;
        }

        .demo-section h2 {
            font-family: 'Poppins', sans-serif;
            color: var(--primary-blue);
            margin-bottom: 1rem;
        }

/* Menu mobile - Bouton hamburger */
        .mobile-menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: #000000; /* noir */
    cursor: pointer;
    padding: 1rem;
    z-index: 100;
}


        /* Responsive */
        @media (max-width: 1200px) {
            /* Ajustement pour l'onglet Abonnés sur écrans moyens */
            .mega-columns.abonnes-grid {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
            }
            
            .mega-columns.abonnes-grid .mega-column {
                max-width: 100% !important;
                min-width: auto !important;
            }
        }

@media (max-width: 1400px) {
            .nav-list {
                flex-wrap: wrap;
            }

            .mega-columns.cols-4,
            .mega-columns.cols-3 {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .mega-columns.cols-2:not(.abonnes-grid) {
                grid-template-columns: 1fr;
            }
        }

      @media (max-width: 768px) {
    /* FORCER L'AFFICHAGE SUR MOBILE - RENFORCÉ */
    #tourmag-menu {
        display: block !important;
        position: relative !important;
    z-index: 2147483647 !important; /* plus haut que le header TourMaG */
    }


  /* ⬇️ AJOUTEZ CE CODE ICI ⬇️ */
    /* Uniformiser la taille des pictos sur mobile */
    .newsletter-item .mega-link .newsletter-icon img,
    .media-item .mega-link .media-icon img,
    .media-simple-link img {
        width: 25px !important;
        height: 25px !important;
        object-fit: contain !important;
        vertical-align: middle !important;
        margin-right: 0.5rem !important;
    }
    
    /* Assurer que les conteneurs d'icônes ont aussi une taille fixe */
    .newsletter-item .mega-link .newsletter-icon,
    .media-item .mega-link .media-icon {
        width: 30px !important;
        height: 30px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex-shrink: 0 !important;
    }
    /* ⬆️ FIN DU CODE À AJOUTER ⬆️ */











    
    #tourmag-menu .header {
        display: block !important;
    }
    
    #tourmag-menu .main-nav {
        display: block !important;
    }
    
    .mobile-menu-toggle {
        display: block !important;
        position: absolute;
        left: 1rem;
        top: calc(50% - 40px);
        transform: translateY(-50%);
        z-index: 2147483647 !important;
    }
    
    /* Ajuster le container pour faire de la place au hamburger */
    .nav-container {
        position: relative;
        padding: 0 1rem 0 4rem;
    }

    /* Cacher la liste par défaut */
    .nav-list {
        display: none;
        flex-direction: column;
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        right: 0 !important;
        background: #000000 !important;
        box-shadow: var(--shadow-lg) !important;
        padding: 0.5rem 0 !important;
        gap: 0;
        z-index: 2147483647 !important;  /* ← AJOUTE CETTE LIGNE avec une valeur très élevée */
    }

    .header {
        z-index: 2147483647 !important;
    }

    .main-nav {
        z-index: 2147483647 !important;
    }

    /* Afficher la liste quand active */
    .nav-list.active {
        display: flex !important;
        z-index: 2147483647 !important;  /* ← AJOUTE AUSSI ICI */
    }
    
    /* Style des liens en mobile */
    .nav-link {
        padding: 0.75rem 1.5rem;
    }
    
    /* Désactiver le hover sur mobile */
    .nav-item:hover .mega-menu {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
    }

    /* Mega menu en mobile */
    .mega-menu {
        position: static;
        box-shadow: none;
        border-top: none;
        border-left: 3px solid;
        border-image: linear-gradient(180deg, #59DF7A, #0956E7) 1;
        margin-left: 0 !important;
        margin-right : 0 !important ;
        display: none;
        padding : 0 !important;
    }
    
    /* Afficher le mega menu quand activé */
    .mega-menu[style*="display: block"] {
        display: block !important;
        opacity: 1;
        visibility: visible;
    }

    /* Une seule colonne sur mobile */
    .mega-columns {
        grid-template-columns: 1fr !important;
        gap: 1.5rem;
        width: 100% !important ;
    }


    .mega-column {
        width: 100% !important;
        padding: 0 !important;
    }

    .logo-area {
        padding: 1rem;
    }

    .nav-container {
        padding: 0 1rem 0 1rem;
    }

    .demo-content {
        padding: 0 1rem;
    }

    .demo-section {
        padding: 1.5rem;
    }


 #tourmag-menu .nav-container {
        position: relative !important;
        z-index: 2147483647 !important;
    }

    #tourmag-menu .nav-list {
        position: absolute !important;
        top: 100% !important;
        left: 0 !important;
        width: 100% !important;
        z-index: 2147483647 !important;
    }

    #tourmag-menu .nav-list.active {
        display: flex !important;
        position : relative !important ;
    
    }




}

        /* Badge Premium */
        .premium-badge {
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

        /* Scroll smooth */
        html {
            scroll-behavior: smooth;
        }

        /* Custom scrollbar pour mega menu */
        .mega-menu::-webkit-scrollbar {
            width: 8px;
        }

        .mega-menu::-webkit-scrollbar-track {
            background: var(--bg-light);
        }

        .mega-menu::-webkit-scrollbar-thumb {
            background: var(--primary-blue);
            border-radius: 4px;
        }

                .mega-menu::-webkit-scrollbar-thumb:hover {
            background: var(--primary-dark);
        }
`;
        document.head.appendChild(style);

    }
    
    // Injecter le HTML
    function injectHTML() {
        const container = document.getElementById('tourmag-menu');
        if (!container) {
            console.error('TourMag Menu: Element #tourmag-menu not found');
            return false;
        }
       container.innerHTML = `<header class="header">
        <!-- Navigation principale -->
        <nav class="main-nav">
            <div class="nav-container">
                <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">☰</button>
                <ul class="nav-list" id="navList">
                    <!-- 1. TourMaG -->
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            TourMaG
                            <span class="nav-icon">▼</span>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-columns cols-4">
                                    <!-- Colonne 1 - Panoramas métiers -->
                                    <div class="mega-column">
                                        <h3 class="mega-column-title">Panoramas métiers</h3>
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/Distribution_r4.html" class="media-simple-link">Distribution</a></li>
                                            <li><a href="https://www.tourmag.com/Hebergement_r6.html" class="media-simple-link">Hébergement</a></li>
                                            <li><a href="https://www.tourmag.com/Production_r8.html" class="media-simple-link">Production</a></li>
                                            <li><a href="https://www.tourmag.com/Transport_r7.html" class="media-simple-link">Transport</a></li>
                                            <li><a href="https://www.tourmag.com/Actus-Visas_r356.html" class="media-simple-link">Actus Visas</a></li>
                                            <li><a href="https://www.tourmag.com/Dossiers-speciaux_r582.html" class="media-simple-link">Dossiers spéciaux</a></li>
                                        </ul>
                                    </div>
                                    <!-- Colonne 2 - Contenus partenaires -->
                                    <div class="mega-column">
                                        <h3 class="mega-column-title">Contenus partenaires</h3>
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/Brand-News_r330.html" class="media-simple-link">Brand News</a></li>
                                            <li><a href="https://www.tourmag.com/Publi-redactionnel_r226.html" class="media-simple-link">Publi-Rédactionnel</a></li>
                                            <li><a href="https://www.tourmag.com/Publi-news_r569.html" class="media-simple-link">Publi-News</a></li>
                                            <li><a href="https://www.tourmag.com/Assurances-Voyages_r501.html" class="media-simple-link">Assurances Voyages</a></li>
                                            <li><a href="https://www.tourmag.com/Webinaires_r493.html" class="media-simple-link">Webinaires</a></li>
                                            <li><a href="https://www.tourmag.com/E-learnings-avec-OTT_r570.html" class="media-simple-link">E-learnings avec OTT</a></li>
                                        </ul>
                                    </div>
                                    <!-- Colonne 3 - La Rédaction -->
                                    <div class="mega-column">
                                        <h3 class="mega-column-title">La Rédaction</h3>
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/Courrier-Lecteurs_r10.html" class="media-simple-link">Courrier des Lecteurs</a></li>
                                            <li><a href="https://www.tourmag.com/Editorial_r1.html" class="media-simple-link">Editorial</a></li>
                                            <li><a href="https://www.tourmag.com/Lea-la-life-de-l-agent-de-voyages-pas-si-blonde_r242.html" class="media-simple-link">La Life de Léa</a></li>
                                            <li><a href="https://www.tourmag.com/TourMaG-com-le-groupe_r193.html" class="media-simple-link">TourMaG, le groupe</a></li>
                                        </ul>
                                    </div>
                                    <!-- Colonne 4 - Quotidien pro / Vie du secteur -->
                                    <div class="mega-column">
                                        <h3 class="mega-column-title">Quotidien pro / Vie du secteur</h3>
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/Groupes-CE_r299.html" class="media-simple-link">Groupes / CE</a></li>
                                            <li><a href="https://www.tourmag.com/en/" class="media-simple-link">International Edition</a></li>
                                            <li><a href="https://www.tourmag.com/People_r2.html" class="media-simple-link">People</a></li>
                                            <li><a href="https://www.tourmag.com/Carnet_r57.html" class="media-simple-link">Carnet</a></li>
                                            <li><a href="https://www.tourmag.com/BONS-PLANS-AGV_r32.html" class="media-simple-link">Bons Plans AGV</a></li>
                                            <li><a href="https://www.tourmag.com/Salons-et-evenements_r365.html" class="media-simple-link">Salons et Événements</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- 2. Médias -->
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            Médias
                            <span class="nav-icon">▼</span>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-columns cols-3">
                                    <!-- Colonne 1 -->
                                    <div class="mega-column">
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/airmag/" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/airmag.png" alt="AirMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">AirMaG</a></li>
                                            <li><a href="https://www.brochuresenligne.com/" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/brochures_en_ligne.png" alt="Brochures en ligne" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">Brochures en ligne</a></li>
                                            <li><a href="https://www.tourmag.com/cruisemag/" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/cruisemag.png" alt="CruiseMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">CruiseMaG</a></li>
                                            <li class="media-item">
                                                <button type="button" class="mega-link"><span class="media-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/destimag.png" alt="DestiMaG"></span>DestiMaG<span class="chevron">▼</span></button>
                                                <div class="media-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/dmcmag/">Dernières actualités / carte interactive</a></li>
                                                        <li><a href="https://www.tourmag.com/Annuaire-des-agences-touristiques-locales_r404.html">Annuaire des réceptifs</a></li>
                                                        <li><a href="https://www.tourmag.com/Dossiers-destinations_r562.html">Dossiers destinations</a></li>
                                                        <li><a href="https://www.tourmag.com/Communiques-des-agences-touristiques-locales_r408.html">Les offres des réceptifs</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                        <!-- Section spéciale -->
                                        <div style="margin-top: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                            <!-- TourMaG TV -->
                                            <div style="background: linear-gradient(135deg, rgba(89, 223, 122, 0.15), rgba(9, 86, 231, 0.1)); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px;">
                                                <a href="https://www.tourmag.com/TourMaG-TV_r135.html" style="display: block; text-align: center;">
                                                    <img src="https://www.tourmag.com/my/test/menu_navigation/Logo-TourMagTV-Color-RVB.png" alt="TourMaG TV" style="max-width: 160px; height: auto; transition: transform 0.2s ease; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                                </a>
                                            </div>
                                            
                                            <!-- Futuroscopie -->
                                            <div style="background: linear-gradient(135deg, rgba(89, 223, 122, 0.15), rgba(9, 86, 231, 0.1)); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px;">
                                                <a href="https://www.tourmag.com/futuroscopie/" style="display: block; text-align: center;">
                                                    <img src="https://www.tourmag.com/my/test/menu_navigation/Futuroscopie-noir_RVB.png" alt="Futuroscopie" style="max-width: 160px; height: auto; transition: transform 0.2s ease; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Colonne 2 -->
                                    <div class="mega-column">
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/Hebergement_r6.html" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/hotel.png" alt="HôtelMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">HôtelMaG</a></li>
                                            <li><a href="https://www.tourmag.com/latraveltech/" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/la_travel_tech.png" alt="La TravelTech" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">La TravelTech</a></li>
                                            <li><a href="https://www.tourmag.com/luxurytravelmag/" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/luxury_travel_mag.png" alt="LuxuryTravelMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">LuxuryTravelMaG</a></li>
                                            <li class="media-item">
                                                <button type="button" class="mega-link"><span class="media-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/partez_en_france.png" alt="Partez en France"></span>Partez en France<span class="chevron">▼</span></button>
                                                <div class="media-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/Annuaire-Partez-en-France_r390.html">Annuaire des réceptifs</a></li>
                                                        <li><a href="https://www.tourmag.com/Les-offres-Partez-en-France_r450.html">Les offres des réceptifs</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- Colonne 3 -->
                                    <div class="mega-column">
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/agv/" class="media-simple-link" style="padding-left: 4rem;">Super AGV</a></li>
                                            <li class="media-item">
                                                <button type="button" class="mega-link"><span class="media-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/traveljobs.png" alt="TravelJobs"></span>TravelJobs<span class="chevron">▼</span></button>
                                                <div class="media-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/Emploi-Formation_r153.html">Actus emploi</a></li>
                                                        <li><a href="https://www.tourmag.com/welcometothetravel/">Annonces</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="https://www.tourmag.com/travelmanagermag/" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/tmcmag.png" alt="TravelManagerMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">TravelManagerMaG</a></li>
                                            <li><a href="https://www.tourmag.com/voyageursmag/" class="media-simple-link" style="padding-left: 4rem;">VoyageursMaG</a></li>
                                            <li><a href="https://www.tourmag.com/voyagesresponsables/" class="media-simple-link"><img src="https://www.tourmag.com/my/test/menu_navigation/voyages_responsables.png" alt="Voyages Responsables" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">Voyages Responsables</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- 3. Newsletters -->
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            Newsletters
                            <span class="nav-icon">▼</span>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-columns cols-3">
                                    <div class="mega-column">
                                        <ul class="mega-links newsletter-list">
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/g.png" alt="TourMaG"></span>TourMaG<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/newsletter/newst1.htm">Newsletter du jour</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                        <li><a href="https://www.tourmag.com/Toutes-les-Archives-des-Newsletters-TourMaG-com-2025-a-votre-disposition_a125207.html">Archives</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/airmag.png" alt="AirMaG"></span>AirMaG<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_airmag/news_airmag_derniere.html">Dernière newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/brochures_en_ligne.png" alt="Brochures en ligne"></span>Brochures en ligne<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.brochuresenligne.com/docs/newsletters/archives/news_pro.html">Dernière newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription pros</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/252490/20150311/inscription.php">Inscription Particuliers</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/cruisemag.png" alt="CruiseMaG"></span>CruiseMaG<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_cruisemag/news_cruisemag_derniere.html">Dernière Newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <a href="https://www.tourmag.com/dmcmag/" class="mega-link" style="text-decoration: none; cursor: pointer;" onclick="event.stopPropagation();"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/destimag.png" alt="DestiMaG"></span>DestiMaG<span class="chevron" onclick="event.preventDefault(); event.stopPropagation(); this.parentElement.parentElement.classList.toggle('active');">▼</span></a>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/newsletter_DESTIMAG/archives/Newsletter_DESTIMAG.html">Dernière Newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mega-column">
                                        <ul class="mega-links newsletter-list">
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/partez_en_france.png" alt="Partez en France"></span>Partez en France<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_partezenfrance/news_partezenfrance_derniere.html">Dernière Newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/la_travel_tech.png" alt="La Travel Tech"></span>La Travel Tech<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_latraveltech/news_latraveltech_derniere.html">Dernière Newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/luxury_travel_mag.png" alt="LuxuryTravelMaG"></span>LuxuryTravelMaG<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_luxurytravelmag/news_luxurytravelmag_derniere.html">Dernière Newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link" style="padding-left: 4rem;">Salons et événements<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_salon/news_salon_derniere.html">Dernière newsletter</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/traveljobs.png" alt="TravelJobs"></span>TravelJobs<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/emploi/newsemploi_derniere.html">Dernière Newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mega-column">
                                        <ul class="mega-links newsletter-list">
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/tmcmag.png" alt="TravelManagerMaG"></span>TravelManagerMaG<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_travelmanagermag/news_travelmanagermag_derniere.html">Dernière Newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/test/menu_navigation/voyages_responsables.png" alt="Voyages Responsables"></span>Voyages Responsables<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription</a></li>
                                                        <li><a href="https://www.tourmag.com/my/tourmag/news_voyagesresponsables/news_voyagesresponsables_derniere.html">Dernière Newsletter</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                        
                                        <!-- FAQ traitée différemment -->
                                        <div style="margin-top: 2rem; padding-top: 1.5rem; ">
                                            <a href="https://www.tourmag.com/faq/Foire-aux-questions-Newsletter_fi1063.html" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; font-weight: 600; font-size: 1.1rem; background: linear-gradient(135deg, rgba(255, 102, 0, 0.15), rgba(255, 102, 0, 0.1)); color: #ff6600; padding: 0.75rem 1rem; border-radius: 6px;">
                                                <span style="font-size: 1.2rem;">❓</span>
                                                FAQ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- 4. Abonnés -->
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            Abonnés
                            <span class="nav-icon">▼</span>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-columns cols-2 abonnes-grid" style="grid-template-columns: 280px 1fr; gap: 2rem;">
                                    <!-- Colonne 1 - Navigation compacte -->
                                    <div class="mega-column" style="max-width: 280px; min-width: 280px;">
                                        <ul class="mega-links" style="display: flex; flex-direction: column; gap: 0.5rem;">
                                            <li><a href="https://www.tourmag.com/MEMBERSHIP-CLUB_r344.html" class="media-simple-link" style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 237, 78, 0.1)); padding: 0.75rem 1rem; font-size: 1.15rem;">MemberShip Club <span class="premium-badge">PREMIUM</span></a></li>
                                            <li class="media-item">
                                                <button type="button" class="mega-link" style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 237, 78, 0.1)); padding: 0.75rem 1rem; font-size: 1.15rem;">Articles abonnés <span class="premium-badge">PREMIUM</span><span class="chevron">▼</span></button>
                                                <div class="media-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/futuroscopie/">Futuroscopie</a></li>
                                                        <li><a href="https://www.tourmag.com/CLUB-ABONNES_r523.html">Premium</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="https://www.tourmag.com/faq/Foire-aux-questions-Abonnements-articles_fi4792.html" class="media-simple-link" style="background: linear-gradient(135deg, rgba(255, 102, 0, 0.15), rgba(255, 102, 0, 0.1)); color: #ff6600; font-weight: 600; padding: 0.75rem 1rem; font-size: 1.15rem;">❓ FAQ</a></li>
                                        </ul>
                                    </div>
                                    <!-- Colonne 2 - Offres d'abonnement -->
                                    <div class="mega-column" style="flex: 1;">
                                        <div style="background: linear-gradient(135deg, #59DF7A, #0956E7); padding: 2px; border-radius: 12px;">
                                            <div style="background: linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(255, 102, 0, 0.05)); border-radius: 10px; padding: 1.5rem;">
                                                <h4 style="font-family: 'Josefin Sans', sans-serif; font-size: 1.6rem; font-weight: 600; color: #ffffff; margin-bottom: 1rem; text-align: center;">Nos Offres d'Abonnement</h4>
                                                
                                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
                                                <!-- Carte Premium -->
                                                <div style="background: var(--white); border-radius: 8px; padding: 1rem; transition: all 0.2s ease; border-left: 3px solid var(--primary-blue); display: flex; flex-direction: column;">
                                                    <h5 style="font-size: 1.2rem; font-weight: 600; color: var(--primary-blue); margin-bottom: 0.5rem;">Premium</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0 0 0.75rem 0; flex-grow: 1; font-size: 1.05rem; color: var(--text-gray); line-height: 1.6;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Accès illimité aux articles Premium
                                                        </li>
                                                        
                                                    </ul>
                                                    <span style="display: inline-block; background: linear-gradient(135deg, #ffd700, #ffed4e); color: var(--text-dark); font-size: 1.15rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-align: center;">83€ TTC/an</span>
                                                </div>
                                                
                                                <!-- Carte Futuroscopie -->
                                                <div style="background: var(--white); border-radius: 8px; padding: 1rem; transition: all 0.2s ease; border-left: 3px solid var(--primary-blue); display: flex; flex-direction: column;">
                                                    <h5 style="font-size: 1.2rem; font-weight: 600; color: var(--primary-blue); margin-bottom: 0.5rem;">Futuroscopie</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0 0 0.75rem 0; flex-grow: 1; font-size: 1.05rem; color: var(--text-gray); line-height: 1.6;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Articles Premium
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Futuroscopie (analyses de Josette Sicsic)
                                                        </li>
                                                        
                                                    </ul>
                                                    <span style="display: inline-block; background: linear-gradient(135deg, #ffd700, #ffed4e); color: var(--text-dark); font-size: 1.15rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-align: center;">133€ TTC/an</span>
                                                </div>
                                                
                                                <!-- Carte MemberShip Club -->
                                                <div style="background: var(--white); border-radius: 8px; padding: 1rem; transition: all 0.2s ease; border-left: 3px solid var(--primary-blue); display: flex; flex-direction: column;">
                                                    <h5 style="font-size: 1.2rem; font-weight: 600; color: var(--primary-blue); margin-bottom: 0.5rem;">MemberShip Club</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0 0 0.75rem 0; flex-grow: 1; font-size: 1.05rem; color: var(--text-gray); line-height: 1.6;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Articles Premium
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Futuroscopie
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Services additionnels
                                                        </li>
                                                        
                                                    </ul>
                                                    <span style="display: inline-block; background: linear-gradient(135deg, #ffd700, #ffed4e); color: var(--text-dark); font-size: 1.15rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-align: center;">483€ TTC/an</span>
                                                </div>
                                                
                                                <!-- Carte Spécial agences -->
                                                <div style="background: var(--white); border-radius: 8px; padding: 1rem; transition: all 0.2s ease; border-left: 3px solid var(--primary-blue); display: flex; flex-direction: column;">
                                                    <h5 style="font-size: 1.2rem; font-weight: 600; color: var(--primary-blue); margin-bottom: 0.5rem;">Spécial agences</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0 0 0.75rem 0; flex-grow: 1; font-size: 1.05rem; color: var(--text-gray); line-height: 1.6;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Articles Premium
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Futuroscopie
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Vidéo récapitulative hebdomadaire
                                                        </li>
                                                    </ul>
                                                    <span style="display: inline-block; background: linear-gradient(135deg, #ffd700, #ffed4e); color: var(--text-dark); font-size: 1.15rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-align: center;">199€ HT/an</span>
                                                </div>
                                                
                                                <!-- Carte Étudiant -->
                                                <div style="background: var(--white); border-radius: 8px; padding: 1rem; transition: all 0.2s ease; border-left: 3px solid var(--primary-blue); display: flex; flex-direction: column;">
                                                    <h5 style="font-size: 1.2rem; font-weight: 600; color: var(--primary-blue); margin-bottom: 0.5rem;">Étudiant</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0 0 0.75rem 0; flex-grow: 1; font-size: 1.05rem; color: var(--text-gray); line-height: 1.6;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Articles Premium
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.2rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A;">✓</span>
                                                            Futuroscopie
                                                        </li>
                                                        
                                                    </ul>
                                                    <span style="display: inline-block; background: linear-gradient(135deg, #ffd700, #ffed4e); color: var(--text-dark); font-size: 1.15rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-align: center;">10€ TTC/an</span>
                                                </div>
                                            </div>
                                            
                                            <div style="text-align: center; margin-top: 1rem;">
                                                <a href="https://abo.tourmagmarketing.com/abonnements" target="_blank" style="display: inline-block; background: #ffffff; color: #0956E7; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.3rem; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);" onmouseover="this.style.background='#0956E7'; this.style.color='#ffffff'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(9, 86, 231, 0.3)'" onmouseout="this.style.background='#ffffff'; this.style.color='#0956E7'; this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0, 0, 0, 0.1)'">
                                                    Voir toutes les offres →
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- 5. Petites Annonces -->
                    <li class="nav-item">
                        <a href="https://www.tourmag.com/welcometothetravel/" class="nav-link">Petites Annonces</a>
                    </li>

                    <!-- 6. Contacts -->
                    <li class="nav-item">
                        <a href="https://www.tourmag.com/pages/Qui-sommes-nous_ap7758.html" class="nav-link">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    
    `;
        return true;
    }
    
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
        
        // Mettre à jour la position au chargement
        updateMegaMenuPositions();
        
        // Mettre à jour lors du scroll avec requestAnimationFrame (fluidité maximale)
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Mettre à jour lors du resize
        window.addEventListener('resize', updateMegaMenuPositions);
        
        // Gestion du clic pour les newsletters
        const newsletterItems = document.querySelectorAll('#tourmag-menu .newsletter-item');
        console.log('TourMag Widget: Newsletter items trouvés:', newsletterItems.length);

        newsletterItems.forEach(item => {
            const link = item.querySelector('.mega-link');
            let closeTimeout;
            
            if (!link) return;
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                    
                    // Annuler tout timeout de fermeture en cours
                    clearTimeout(closeTimeout);
                    
                    const wasActive = item.classList.contains('active');
                    
                    // Fermer tous les autres sous-menus
                    newsletterItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle le sous-menu actuel
                    if (!wasActive) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });

                // Annuler la fermeture si on entre dans la zone
                item.addEventListener('mouseenter', function() {
                    clearTimeout(closeTimeout);
                });

                // Fermeture avec délai quand la souris quitte la zone newsletter + sous-menu
                item.addEventListener('mouseleave', function() {
                    // Seulement si le sous-menu est ouvert
                    if (item.classList.contains('active')) {
                        closeTimeout = setTimeout(function() {
                            item.classList.remove('active');
                        }, 200);
                    }
                });
            });

            // Gestion identique pour les médias
            const mediaItems = document.querySelectorAll('#tourmag-menu .media-item');
            console.log('TourMag Widget: Media items trouvés:', mediaItems.length);

            mediaItems.forEach(item => {
                const link = item.querySelector('.mega-link');
                let closeTimeout;
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Annuler tout timeout de fermeture en cours
                    clearTimeout(closeTimeout);
                    
                    const wasActive = item.classList.contains('active');
                    
                    // Fermer tous les autres sous-menus
                    mediaItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle le sous-menu actuel
                    if (!wasActive) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });

                // Annuler la fermeture si on entre dans la zone
                item.addEventListener('mouseenter', function() {
                    clearTimeout(closeTimeout);
                });

                // Fermeture avec délai quand la souris quitte la zone
                item.addEventListener('mouseleave', function() {
                    // Seulement si le sous-menu est ouvert
                    if (item.classList.contains('active')) {
                        closeTimeout = setTimeout(function() {
                            item.classList.remove('active');
                        }, 200);
                    }
                });
            });

            // Gestion des sous-menus sur mobile ET desktop
            const navItems = document.querySelectorAll('#tourmag-menu .nav-item');
            
            navItems.forEach(item => {
                const link = item.querySelector('.nav-link');
                const megaMenu = item.querySelector('.mega-menu');
                
                // Empêcher la navigation uniquement pour les onglets avec mega menu
                if (megaMenu) {
                    link.addEventListener('click', function(e) {
                        // Sur mobile (largeur <= 768px), gérer l'ouverture/fermeture
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            
                            // Fermer les autres menus
                            navItems.forEach(otherItem => {
                                if (otherItem !== item) {
                                    const otherMenu = otherItem.querySelector('.mega-menu');
                                    if (otherMenu) {
                                        otherMenu.style.display = 'none';
                                    }
                                }
                            });
                            
                            // Toggle le menu actuel
                            if (megaMenu.style.display === 'block') {
                                megaMenu.style.display = 'none';
                            } else {
                                megaMenu.style.display = 'block';
                                megaMenu.style.opacity = '1';
                                megaMenu.style.visibility = 'visible';
                            }
                        } else {
                            // Sur desktop, empêcher la navigation mais ne rien faire
                            // (le hover gère l'affichage)
                            e.preventDefault();
                        }
                    });
                }
                // Les onglets sans mega menu (Petites Annonces, Contacts) restent cliquables
            });

        // Fermer le menu mobile si on clique en dehors
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('#tourmag-menu .main-nav');
            const toggle = document.querySelector('#tourmag-menu .mobile-menu-toggle');
            const navList = document.getElementById('navList');
            
            if (window.innerWidth <= 768 && 
                !nav.contains(event.target) && 
                !toggle.contains(event.target)) {
                navList.classList.remove('active');
            }
        });

        // Réinitialiser les styles lors du redimensionnement
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    document.querySelectorAll('#tourmag-menu .mega-menu').forEach(menu => {
                        menu.style.display = '';
                    });
                    document.getElementById('navList').classList.remove('active');
                }
            }, 250);
        });
    }
    
    // Initialisation au chargement du DOM
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

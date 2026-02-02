/**
 * TourMag Navigation Menu Widget
 * Version: 1.1.0 - CORRIGÉ
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

        /* FORCER L'AFFICHAGE DU WIDGET */
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

        /* Reset UNIQUEMENT dans le widget */
        #tourmag-menu {
            font-family: 'Josefin Sans', sans-serif;
            color: var(--text-dark);
            line-height: 1.6;
        }

        #tourmag-menu .header,
        #tourmag-menu .main-nav,
        #tourmag-menu .mega-menu,
        #tourmag-menu .mega-menu * {
            box-sizing: border-box;
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
            max-width: 1600px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        @media (max-width: 1300px) {
            .nav-container {
                padding: 0 1rem;
            }
        }

        .nav-list {
            display: flex;
            list-style: none;
            gap: 0;
            width: 100%;
            flex-wrap: nowrap;
        }

        .nav-item {
            position: relative;
            flex: 0 1 auto;
            min-width: 0;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1.25rem 1.1rem;
            color: #ffffff;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.98rem;
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

        body.hover-mode .nav-item:hover .nav-icon {
            transform: rotate(180deg);
        }

        .nav-item.active .nav-icon {
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
            transition: opacity 0.25s ease, visibility 0.25s ease;
            max-height: 80vh;
            overflow-y: auto;
            z-index: 1001;
            pointer-events: none;
        }

        body.hover-mode .nav-item:hover .mega-menu {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        body.hover-mode .mega-menu:hover {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .nav-item.active .mega-menu {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .mega-menu-content {
            max-width: 1600px;
            margin: 0 auto;
            padding: 3rem 3rem;
            position: relative;
            overflow: visible;
        }

        .mega-menu-content::before {
            content: '';
            position: absolute;
            top: -30px;
            left: 0;
            right: 0;
            height: 30px;
            background: transparent;
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
            cursor: pointer;
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

        /* Styles identiques pour les médias */
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
            font-size: 1.15rem;
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

        .subscription-offers-box {
            background: linear-gradient(135deg, rgba(89, 223, 122, 0.03), rgba(9, 86, 231, 0.03));
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

        .mega-menu.compact {
            width: 400px;
            left: auto;
            right: 0;
        }

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
            color: #000000;
            cursor: pointer;
            padding: 1rem;
            z-index: 1002;
            position: absolute !important;
        }

        .mobile-menu-toggle .hamburger-icon,
        .mobile-menu-toggle .close-icon {
            transition: all 0.3s ease;
            font-size: 1.8rem;
            display: block;
        }

        .mobile-menu-toggle .close-icon {
            display: none;
        }

        .mobile-menu-toggle.active .hamburger-icon {
            display: none !important;
        }

        .mobile-menu-toggle.active .close-icon {
            display: block !important;
        }

        .nav-item .nav-link img {
            width: 24px !important;
            height: 24px !important;
            max-width: 24px !important;
            max-height: 24px !important;
            object-fit: contain !important;
            flex-shrink: 0 !important;
        }

        /* Responsive */
        @media (min-width: 1200px) and (max-width: 1600px) {
            .nav-link {
                font-size: 1.1rem;
            }
            
            .mega-link {
                font-size: 1.25rem;
            }
            
            .mega-sublink {
                font-size: 1.15rem;
            }
        }

        @media (max-width: 1200px) {
            .mega-columns.abonnes-grid {
                grid-template-columns: 1fr !important;
                gap: 1.5rem !important;
            }
            
            .mega-columns.abonnes-grid .mega-column {
                max-width: 100% !important;
                min-width: auto !important;
            }
        }

        @media (max-width: 1600px) {
            .nav-link {
                padding: 1.25rem 1.2rem;
                font-size: 1rem;
            }
        }

        @media (max-width: 1500px) {
            .nav-link {
                padding: 1.25rem 1rem;
                font-size: 0.95rem;
            }
        }

        @media (max-width: 1400px) {
            .nav-link {
                padding: 1.25rem 0.9rem;
                font-size: 0.9rem;
            }
            
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

        @media (max-width: 1300px) {
            .nav-link {
                padding: 1.25rem 0.9rem;
                font-size: 0.95rem;
                gap: 0.3rem;
            }
            
            .nav-list {
                flex-wrap: wrap;
            }
            
            .nav-icon {
                font-size: 0.6rem;
            }
        }

        @media (max-width: 1200px) {
            .nav-link {
                padding: 1.25rem 0.6rem;
                font-size: 0.85rem;
                gap: 0.2rem;
            }
            
            .nav-list {
                flex-wrap: wrap;
            }
        }

        @media (max-width: 1100px) {
            .nav-link {
                padding: 1.25rem 0.5rem;
                font-size: 0.8rem;
            }
            
            .nav-list {
                flex-wrap: wrap;
            }
        }

        @media (max-width: 1050px) {
            .nav-link {
                padding: 1rem 0.4rem;
                font-size: 0.75rem;
            }
            
            .nav-list {
                flex-wrap: wrap;
            }
        }

        @media (min-width: 481px) and (max-width: 768px) {
            .mobile-menu-toggle {
                display: block !important;
                position: absolute !important;
                left: 4rem !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                z-index: 1002 !important;
            }
        }

        @media (max-width: 768px) {
            #tourmag-menu {
                display: block !important;
                position: relative !important;
                z-index: 1000 !important;
margin-top: -90px !important;
            }

            .nav-item .nav-link img {
                width: 16px !important;
                height: 16px !important;
                max-width: 16px !important;
                max-height: 16px !important;
            }

            /* Tailles d'images en CSS avec !important */
            #tourmag-menu .mega-column img,
            #tourmag-menu .newsletter-list img,
            #tourmag-menu .mega-links img,
            #tourmag-menu .newsletter-icon img,
            #tourmag-menu .media-icon img,
            #tourmag-menu span img,
            #tourmag-menu .mega-menu a img {
                width: 40px !important;
                height: 40px !important;
                max-width: 40px !important;
                max-height: 40px !important;
                min-width: 40px !important;
                min-height: 40px !important;
                object-fit: contain !important;
                vertical-align: middle !important;
                margin-right: 0.5rem !important;
                border: none !important;
            }

            .mega-menu a img {
                width: 40px !important;
                height: 40px !important;
                max-width: 40px !important;
                max-height: 40px !important;
                min-width: 40px !important;
                min-height: 40px !important;
            }

            .mega-column a[href*="newsletter"] img,
            .mega-column a[href*="Archives"] img {
                width: 20px !important;
                height: 20px !important;
                max-width: 20px !important;
                max-height: 20px !important;
                object-fit: contain !important;
            }
            
            .mega-column a[href*="gentiane"] img,
            .mega-column a[href*="meetings"] img,
            img[alt*="Gentiane"] {
                width: 60px !important;
                height: 60px !important;
                max-width: 60px !important;
                max-height: 60px !important;
                object-fit: cover !important;
                border-radius: 50% !important;
            }
            
            .newsletter-item .mega-link .newsletter-icon,
            .media-item .mega-link .media-icon {
                width: 40px !important;
                height: 40px !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
            }

            .mega-menu-content {
                padding: 1rem 1rem;
            }

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
    top: -3rem;  /* Au-dessus de la barre noire */
    transform: none;
    z-index: 1002 !important;
    background: #ffffff;  /* Fond blanc pour le détacher */
    border-radius: 8px;  /* Coins arrondis */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);  /* Ombre légère */
    padding: 0.75rem;  /* Padding pour agrandir la zone cliquable */
}
            
            .nav-container {
                position: relative;
                padding: 0 1rem 0 4rem;
            }

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
                z-index: 1001 !important;
            }

            .header {
                z-index: 1000 !important;
            }

            .main-nav {
    position: relative;
    margin-top: 3.5rem;  /* Espace pour le bouton au-dessus */
    z-index: 1000 !important;
}

            .nav-list.active {
                display: flex !important;
                z-index: 1001 !important;
            }
            
            .nav-item.active .nav-link::after {
                width: 0 !important;
            }
            
            .nav-item:hover .mega-menu {
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
            }

            .mega-menu {
                position: static;
                box-shadow: none;
                border-top: none;
                border-left: 3px solid;
                border-image: linear-gradient(180deg, #59DF7A, #0956E7) 1;
                margin-left: 0 !important;
                margin-right: 0 !important;
                display: none;
                padding: 0 !important;
                max-height: none !important; 
                overflow: visible !important;
            }

            .nav-item.active .mega-menu {
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
                position: static !important;
            }

            .nav-item .nav-link {
                pointer-events: auto !important;
                cursor: pointer !important;
                position: relative !important;
                z-index: 100 !important;
            }

            .nav-item.active .mega-menu {
                pointer-events: none !important;
            }

            .nav-item.active .mega-menu a,
            .nav-item.active .mega-menu button {
                pointer-events: auto !important;
            }

            .mega-columns {
                grid-template-columns: 1fr !important;
                gap: 1.5rem;
                width: 100% !important;
            }

            .mega-column {
                width: 100% !important;
                padding: 0 !important;
            }

            .media-item .mega-link,
            .media-simple-link {
                text-align: left !important;
                justify-content: flex-start !important;
                padding-left: 1rem !important;
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
                z-index: 1001 !important;
            }

            #tourmag-menu .nav-list {
                position: absolute !important;
                top: 100% !important;
                left: 0 !important;
                width: 100% !important;
                z-index: 1001 !important;
            }

            #tourmag-menu .nav-list.active {
                display: flex !important;
                position: relative !important;
            }

            .newsletter-subscribe-btn {
                width: 100% !important;
                padding: 1.25rem 1rem !important;
                font-size: 1.1rem !important;
                text-align: center !important;
            }
        }

        @media (max-width: 400px) {
            #tourmag-menu .mega-column img,
            #tourmag-menu .newsletter-list img,
            #tourmag-menu .mega-links img,
            #tourmag-menu .newsletter-icon img,
            #tourmag-menu .media-icon img,
            #tourmag-menu span img {
                width: 30px !important;
                height: 30px !important;
                max-width: 30px !important;
                max-height: 30px !important;
                min-width: 30px !important;
                min-height: 30px !important;
            }
            
            #tourmag-menu .newsletter-item .mega-link,
            #tourmag-menu .media-item .mega-link,
            #tourmag-menu .media-simple-link {
                font-size: 0.9rem !important;
                padding: 0.6rem 0.8rem !important;
            }
        }

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

        html {
            scroll-behavior: smooth;
        }

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
        <nav class="main-nav">
            <div class="nav-container">
              <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" id="mobileMenuToggle">
    <span class="hamburger-icon">☰</span>
    <span class="close-icon">✕</span>
</button>
                <ul class="nav-list" id="navList">
                    <li class="nav-item">
                        <a href="https://www.tourmag.com/" class="nav-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/accueil.png" alt="Accueil" style="width: 24px; height: 24px; object-fit: contain;"></a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            ACTUALITÉS
                            <span class="nav-icon">▼</span>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-columns cols-4">
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
                                    <div class="mega-column">
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/Brand-News_r330.html" class="media-simple-link">Brand News</a></li>
											<li><a href="https://www.tourmag.com/Publi-news_r569.html" class="media-simple-link">Publi-News</a></li>
                                            <li><a href="https://www.tourmag.com/Publi-redactionnel_r226.html" class="media-simple-link">Publi-Rédactionnel</a></li>
                                            <li><a href="https://www.tourmag.com/Webinaires_r493.html" class="media-simple-link">Webinaires</a></li>
											 <li><a href="https://www.tourmag.com/Actus-Visas_r356.html" class="media-simple-link">Actus Visas</a></li>
                                        </ul>
                                    </div>
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

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            THÉMATIQUES
                            <span class="nav-icon">▼</span>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-columns cols-3">
                                    <div class="mega-column">
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/airmag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/airmag1.png" alt="AirMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">AirMaG</a></li>
                                            <li><a href="https://www.brochuresenligne.com/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/brochures_en_ligne1.png" alt="Brochures en ligne" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">Brochures en ligne</a></li>
                                            <li><a href="https://www.tourmag.com/cruisemag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/cruisemag.png" alt="CruiseMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">CruiseMaG</a></li>
                                            <li class="media-item">
                                                <button type="button" class="mega-link"><span class="media-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/destimag.png" alt="DestiMaG"></span>DestiMaG<span class="chevron">▼</span></button>
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
                                    </div>
                                    <div class="mega-column">
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/latraveltech/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/la_travel_tech.png" alt="La TravelTech" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">La Travel Tech</a></li>
                                            <li><a href="https://www.tourmag.com/luxurytravelmag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/luxury_travel_mag.png" alt="LuxuryTravelMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">LuxuryTravelMaG</a></li>
                                            <li class="media-item">
                                                <button type="button" class="mega-link"><span class="media-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/partez_en_france.png" alt="Partez en France"></span>Partez en France<span class="chevron">▼</span></button>
                                                <div class="media-submenu">
                                                    <ul>
														<li><a href="https://www.tourmag.com/partezenfrance/">Dernières actualités</a></li>
                                                        <li><a href="https://www.tourmag.com/Annuaire-Partez-en-France_r390.html">Annuaire</a></li>
                                                        <li><a href="https://www.tourmag.com/Les-offres-Partez-en-France_r450.html">Les offres Partez en France</a></li>
                                                    </ul>
                                                </div>
                                            </li>
											<li><a href="https://www.tourmag.com/agv/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/superagv.png" alt="Super AGV" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">Super AGV</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-column">
                                        <ul class="mega-links">
                                            <li><a href="https://www.tourmag.com/travelmanagermag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/tmcmag.png" alt="VoyageursMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">TMCMaG</a></li>
                                            <li class="media-item">
                                                <button type="button" class="mega-link"><span class="media-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/traveljobs.png" alt="TravelJobs"></span>TravelJobs<span class="chevron">▼</span></button>
                                                <div class="media-submenu">
                                                    <ul>
                                                        <li><a href="https://www.tourmag.com/Emploi-Formation_r153.html">Actus emploi et formation</a></li>
														<li><a href="https://www.tourmag.com/Recruteurs_r326.html">Les recruteurs</a></li>
                                                        <li><a href="https://www.tourmag.com/welcometothetravel/">Annonces</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="https://www.tourmag.com/voyageursmag/" class="media-simple-link"><img src="https://www.tourmag.com/my/tourmag/site/menu/voyageursmag.png" alt="VoyageursMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;">VoyageursMaG</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

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
                                            <li><a href="https://www.tourmag.com/my/newsletter/newst1.htm" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/g.png" alt="TourMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>TourMaG</a></li>
                                            <li><a href="https://www.tourmag.com/my/tourmag/news_airmag/news_airmag_derniere.html" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/airmag1.png" alt="AirMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>AirMaG</a></li>
                                            <li class="newsletter-item">
                                                <button type="button" class="mega-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/brochures_en_ligne1.png" alt="Brochures en ligne"></span>Brochures en ligne<span class="chevron">▼</span></button>
                                                <div class="newsletter-submenu">
                                                    <ul>
                                                        <li><a href="https://www.brochuresenligne.com/docs/newsletters/archives/news_pro.html">Dernière newsletter</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/300335/20150403/">Inscription pros</a></li>
                                                        <li><a href="https://tourmag.insc.edt02.net/252490/20150311/inscription.php">Inscription Particuliers</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="https://www.tourmag.com/my/tourmag/news_cruisemag/news_cruisemag_derniere.html" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/cruisemag.png" alt="CruiseMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>CruiseMaG</a></li>
                                            <li><a href="https://www.tourmag.com/my/newsletter_DESTIMAG/archives/Newsletter_DESTIMAG.html" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/destimag.png" alt="DestiMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>DestiMaG</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-column">
                                        <ul class="mega-links newsletter-list">
                                            <li><a href="https://www.tourmag.com/my/tourmag/news_partezenfrance/news_partezenfrance_derniere.html" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/partez_en_france.png" alt="Partez en France" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>Partez en France</a></li>
                                            <li><a href="https://www.tourmag.com/my/tourmag/news_latraveltech/news_latraveltech_derniere.html" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/la_travel_tech.png" alt="La Travel Tech" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>La Travel Tech</a></li>
                                            <li><a href="https://www.tourmag.com/my/tourmag/news_luxurytravelmag/news_luxurytravelmag_derniere.html" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/luxury_travel_mag.png" alt="LuxuryTravelMaG" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>LuxuryTravelMaG</a></li>
                                            <li><a href="https://www.tourmag.com/my/tourmag/emploi/newsemploi_derniere.html" class="media-simple-link"><span class="newsletter-icon"><img src="https://www.tourmag.com/my/tourmag/site/menu/traveljobs.png" alt="TravelJobs" style="width: 40px; height: 40px; object-fit: contain; vertical-align: middle; margin-right: 0.5rem;"></span>TravelJobs</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-column">
                                        <ul class="mega-links newsletter-list"></ul>
                                        
                                        <div style="margin-top: 1rem;">
                                            <a href="https://www.tourmag.com/Shortcast-Newsletter-TourMaG-l-essentiel-de-l-info-au-format-audio-ABO_a130097.html" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-decoration: none; font-weight: 600; font-size: 1.1rem; background: linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.12)); color: #0066cc; padding: 0.9rem 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 102, 204, 0.15); border: 1px solid rgba(0, 102, 204, 0.2); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.5px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0, 102, 204, 0.25)'; this.style.background='linear-gradient(135deg, rgba(0, 102, 204, 0.12), rgba(0, 102, 204, 0.16))';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0, 102, 204, 0.15)'; this.style.background='linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.12))';">
                                                <img src="https://www.tourmag.com/my/tourmag/site/menu/casque1.png" alt="Écouter" style="width: 24px; height: 24px; object-fit: contain;">
                                                Écouter la newsletter
                                            </a>
                                        </div>
                                        
                                        <div style="margin-top: 1rem;">
                                            <a href="https://www.tourmag.com/Toutes-les-Archives-des-Newsletters-TourMaG-com-2026-a-votre-disposition_a129895.html" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-decoration: none; font-weight: 600; font-size: 1.1rem; background: linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.12)); color: #0066cc; padding: 0.9rem 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 102, 204, 0.15); border: 1px solid rgba(0, 102, 204, 0.2); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.5px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0, 102, 204, 0.25)'; this.style.background='linear-gradient(135deg, rgba(0, 102, 204, 0.12), rgba(0, 102, 204, 0.16))';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0, 102, 204, 0.15)'; this.style.background='linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.12))';">
                                                <img src="https://www.tourmag.com/my/tourmag/site/menu/archive.png" alt="Archives" style="width: 24px; height: 24px; object-fit: contain;">
                                                Archives des newsletters
                                            </a>
                                        </div>
                                        
                                        <div style="margin-top: 1.5rem;">
                                            <a href="https://tourmag.insc.edt02.net/300335/20150403/" target="_blank" class="newsletter-subscribe-btn" style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-decoration: none; font-weight: 700; font-size: 1.15rem; background: linear-gradient(135deg, #59DF7A, #0956E7); color: #ffffff; padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(89, 223, 122, 0.3); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.5px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(89, 223, 122, 0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(89, 223, 122, 0.3)';">
                                                <span style="font-size: 1.4rem;">✉️</span>
                                                S'abonner aux newsletters
                                            </a>
                                        </div>
                                        
                                        <div style="margin-top: 1.5rem; padding-top: 1.5rem;">
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

                    <li class="nav-item">
                        <a href="https://www.tourmag.com/TourMaG-TV_r135.html" class="nav-link">TV</a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            ABONNEMENTS
                            <span class="nav-icon">▼</span>
                        </a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-columns cols-2 abonnes-grid" style="grid-template-columns: 550px 550px; gap: 4rem; justify-content: center; max-width: 1400px; margin: 0 auto;">
                                    <div class="mega-column" style="max-width: 550px; min-width: 550px;">
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
                                        
                                        <div style="margin-top: 3rem;">
                                            <a href="https://meetings-eu1.hubspot.com/gentiane/" target="_blank" style="display: block; background: linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(89, 223, 122, 0.05)); border: 2px solid rgba(0, 102, 204, 0.2); border-radius: 12px; padding: 1.25rem; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 102, 204, 0.1);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0, 102, 204, 0.2)'; this.style.borderColor='rgba(0, 102, 204, 0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0, 102, 204, 0.1)'; this.style.borderColor='rgba(0, 102, 204, 0.2)';">
                                                <div style="display: flex; align-items: center; gap: 1rem;">
                                                    <img src="https://www.tourmag.com/my/tourmag/site/menu/gentiane.png" alt="Gentiane ROMANET" style="width: 80px; height: 80px; border-radius: 50%; object-position: center 30%; object-fit: cover; border: 2px solid #0066cc;">
                                                    <div style="flex: 1;">
                                                        <p style="margin: 0; font-size: 1.05rem; color: #1a1a1a; font-weight: 600; line-height: 1.4;">Pour toute question relative aux abonnements, contactez</p>
                                                        <p style="margin: 0.25rem 0 0 0; font-size: 1.15rem; color: #0066cc; font-weight: 700;">Gentiane ROMANET</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        
                                        <div style="margin-top: 1rem;">
                                            <a href="https://www.tourmag.com/faq/Foire-aux-questions-Abonnements-articles_fi4792.html" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; font-weight: 600; font-size: 1.1rem; background: linear-gradient(135deg, rgba(255, 102, 0, 0.15), rgba(255, 102, 0, 0.1)); color: #ff6600; padding: 0.75rem 1rem; border-radius: 6px;">
                                                <span style="font-size: 1.2rem;">❓</span>
                                                FAQ
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div class="mega-column" style="flex: 1;">
                                        <div style="background: #57C6C6; padding: 2px; border-radius: 12px;">
                                            <div style="background: #F3FFFF; border-radius: 10px; padding: 1.5rem; position: relative;">
                                                <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #57C6C6, #4ab8b8); padding: 0.5rem 2rem; border-radius: 20px; font-weight: 700; font-size: 1.4rem; color: #ffffff; box-shadow: 0 2px 8px rgba(87, 198, 198, 0.3); white-space: nowrap; min-width: 300px; text-align: center; z-index: 10;">Nos Offres d'Abonnement</div>
                                                <div style="margin-top: 1.5rem;"></div>
                                                
                                                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1.5rem;">
                                                    <button class="offer-tab active" data-offer="premium" style="background: linear-gradient(135deg, #0066cc, #0056b3); border: 2px solid #0066cc; box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3); border-radius: 8px; padding: 1rem; font-size: 1.05rem; font-weight: 700; color: #ffffff; font-family: 'Josefin Sans', sans-serif; cursor: pointer; transition: all 0.3s ease; text-align: center;">
                                                        Premium<br><span style="display: block; margin-top: 0.5rem; font-size: 1.15rem; font-weight: 700; color: #ffffff;">83€ TTC/an</span>
                                                    </button>
                                                    <button class="offer-tab" data-offer="membership" style="background: #f8f9fa; border: 2px solid #d0d0d0; border-radius: 8px; padding: 1rem; font-size: 1.05rem; font-weight: 600; color: #1a1a1a; font-family: 'Josefin Sans', sans-serif; cursor: pointer; transition: all 0.3s ease; text-align: center;">
                                                        MemberShip Club<br><span style="display: block; margin-top: 0.5rem; font-size: 1.15rem; font-weight: 700; color: #0066cc;">483€ TTC/an</span>
                                                    </button>
                                                    <button class="offer-tab" data-offer="agences" style="background: #f8f9fa; border: 2px solid #d0d0d0; border-radius: 8px; padding: 1rem; font-size: 1.05rem; font-weight: 600; color: #1a1a1a; font-family: 'Josefin Sans', sans-serif; cursor: pointer; transition: all 0.3s ease; text-align: center;">
                                                        Spécial agences<br><span style="display: block; margin-top: 0.5rem; font-size: 1.15rem; font-weight: 700; color: #0066cc;">199€ HT/an</span>
                                                    </button>
                                                    <button class="offer-tab" data-offer="etudiant" style="background: #f8f9fa; border: 2px solid #d0d0d0; border-radius: 8px; padding: 1rem; font-size: 1.05rem; font-weight: 600; color: #1a1a1a; font-family: 'Josefin Sans', sans-serif; cursor: pointer; transition: all 0.3s ease; text-align: center;">
                                                        Étudiant<br><span style="display: block; margin-top: 0.5rem; font-size: 1.15rem; font-weight: 700; color: #0066cc;">10€ TTC/an</span>
                                                    </button>
                                                </div>
                                                
                                                <div class="offer-content" data-content="premium" style="background: var(--white); border-radius: 8px; padding: 1.5rem; border-left: 4px solid #0066cc;">
                                                    <h5 style="font-size: 1.3rem; font-weight: 700; color: #0066cc; margin-bottom: 1rem;">Offre Premium</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.1rem; color: #4a4a4a; line-height: 2;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Accès illimité aux articles Premium
                                                        </li>
                                                    </ul>
                                                    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e0e0e0; text-align: center;">
                                                        <span style="font-size: 1.5rem; font-weight: 700; color: #0066cc;">83€ TTC/an</span>
                                                    </div>
                                                </div>
                                                
                                                <div class="offer-content" data-content="membership" style="display: none; background: var(--white); border-radius: 8px; padding: 1.5rem; border-left: 4px solid #0066cc;">
                                                    <h5 style="font-size: 1.3rem; font-weight: 700; color: #0066cc; margin-bottom: 1rem;">Offre MemberShip Club</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.1rem; color: #4a4a4a; line-height: 1.8;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Articles Premium
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Rédacteur en chef du mois
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Interview nouveaux "Members"
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative; color: #59DF7A; font-weight: 600;">
                                                            + fil d'infos WhatsApp avec :
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 2.5rem; position: relative; font-size: 1rem;">
                                                            <span style="position: absolute; left: 1rem; color: #59DF7A; font-size: 1rem;">✓</span>
                                                            Shortcast quotidien
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 2.5rem; position: relative; font-size: 1rem;">
                                                            <span style="position: absolute; left: 1rem; color: #59DF7A; font-size: 1rem;">✓</span>
                                                            Une du journal la veille
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 2.5rem; position: relative; font-size: 1rem;">
                                                            <span style="position: absolute; left: 1rem; color: #59DF7A; font-size: 1rem;">✓</span>
                                                            Informations confidentielles
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 2.5rem; position: relative; font-size: 1rem;">
                                                            <span style="position: absolute; left: 1rem; color: #59DF7A; font-size: 1rem;">✓</span>
                                                            Articles en avant-première
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 2.5rem; position: relative; font-size: 1rem;">
                                                            <span style="position: absolute; left: 1rem; color: #59DF7A; font-size: 1rem;">✓</span>
                                                            Revue de presse
                                                        </li>
                                                    </ul>
                                                    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e0e0e0; text-align: center;">
                                                        <span style="font-size: 1.5rem; font-weight: 700; color: #0066cc;">483€ TTC/an</span>
                                                    </div>
                                                </div>
                                                
                                                <div class="offer-content" data-content="agences" style="display: none; background: var(--white); border-radius: 8px; padding: 1.5rem; border-left: 4px solid #0066cc;">
                                                    <h5 style="font-size: 1.3rem; font-weight: 700; color: #0066cc; margin-bottom: 1rem;">Offre Spécial agences</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.1rem; color: #4a4a4a; line-height: 2;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Articles Premium
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Trombinoscope
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Shortcast (podcast d'articles résumés)
                                                        </li>
                                                    </ul>
                                                    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e0e0e0; text-align: center;">
                                                        <span style="font-size: 1.5rem; font-weight: 700; color: #0066cc;">199€ HT/an</span>
                                                    </div>
                                                </div>
                                                
                                                <div class="offer-content" data-content="etudiant" style="display: none; background: var(--white); border-radius: 8px; padding: 1.5rem; border-left: 4px solid #0066cc;">
                                                    <h5 style="font-size: 1.3rem; font-weight: 700; color: #0066cc; margin-bottom: 1rem;">Offre Étudiant</h5>
                                                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 1.1rem; color: #4a4a4a; line-height: 2;">
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Articles Premium
                                                        </li>
                                                        <li style="padding: 0.25rem 0; padding-left: 1.5rem; position: relative;">
                                                            <span style="position: absolute; left: 0; color: #59DF7A; font-size: 1.2rem;">✓</span>
                                                            Futuroscopie
                                                        </li>
                                                    </ul>
                                                    <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e0e0e0; text-align: center;">
                                                        <span style="font-size: 1.5rem; font-weight: 700; color: #0066cc;">10€ TTC/an</span>
                                                    </div>
                                                </div>
                                            
                                                <div style="text-align: center; margin-top: 1.5rem;">
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

                    <li class="nav-item">
                        <a href="https://www.tourmag.com/welcometothetravel/" class="nav-link">Petites Annonces</a>
                    </li>

                    <li class="nav-item">
                        <a href="https://www.tourmag.com/pages/Qui-sommes-nous_ap7758.html" class="nav-link">Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>`;
        return true;
    }
    
    window.toggleMobileMenu = function() {
        const navList = document.getElementById('navList');
        const toggleBtn = document.getElementById('mobileMenuToggle');
        
        if (navList) {
            navList.classList.toggle('active');
        }
        
        if (toggleBtn) {
            toggleBtn.classList.toggle('active');
        }
    };
    
    function initializeJS() {
        const navItemHandlers = new Map();
        let clickOutsideHandler = null;
        
        function isMenuMultiline() {
            const navList = document.querySelector('#tourmag-menu .nav-list');
            if (!navList) return false;
            
            const navItems = Array.from(navList.querySelectorAll('.nav-item'));
            if (navItems.length < 2) return false;
            
            const firstItemTop = navItems[0].getBoundingClientRect().top;
            const lastItemTop = navItems[navItems.length - 1].getBoundingClientRect().top;
            
            return Math.abs(lastItemTop - firstItemTop) > 5;
        }
        
        function updateMegaMenuPositions() {
            const mainNav = document.querySelector('#tourmag-menu .main-nav');
            if (!mainNav) return;
            
            const navRect = mainNav.getBoundingClientRect();
            const navBottom = navRect.bottom;
            
            const megaMenus = document.querySelectorAll('#tourmag-menu .mega-menu');
            megaMenus.forEach(menu => {
                menu.style.top = (navBottom - 1) + 'px';
                menu.classList.add('positioned');
            });
        }
        
        setTimeout(updateMegaMenuPositions, 0);
        
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
        
        updateMegaMenuPositions();
        window.addEventListener('scroll', requestTick, { passive: true });
        window.addEventListener('resize', updateMegaMenuPositions);
        
        function setupBehavior() {
            const navItems = document.querySelectorAll('#tourmag-menu .nav-item');
            const isMultiline = isMenuMultiline();
            const isDesktop = window.innerWidth > 768;
            
            navItemHandlers.forEach((handlers, item) => {
                if (handlers.mouseenter) item.removeEventListener('mouseenter', handlers.mouseenter);
                if (handlers.mouseleave) item.removeEventListener('mouseleave', handlers.mouseleave);
                if (handlers.click) {
                    const link = item.querySelector('.nav-link');
                    if (link) link.removeEventListener('click', handlers.click);
                }
            });
            navItemHandlers.clear();
            
            if (clickOutsideHandler) {
                document.removeEventListener('click', clickOutsideHandler);
                clickOutsideHandler = null;
            }
            
            navItems.forEach(item => item.classList.remove('active'));
            
            if (isDesktop && !isMultiline) {
                document.body.classList.add('hover-mode');
            } else if (isDesktop && isMultiline) {
                document.body.classList.remove('hover-mode');
                
                navItems.forEach(item => {
                    const link = item.querySelector('.nav-link');
                    const megaMenu = item.querySelector('.mega-menu');
                    
                    if (megaMenu && link) {
                        const clickHandler = function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            const wasActive = item.classList.contains('active');
                            
                            navItems.forEach(otherItem => {
                                if (otherItem !== item) {
                                    otherItem.classList.remove('active');
                                }
                            });
                            
                            if (wasActive) {
                                item.classList.remove('active');
                            } else {
                                item.classList.add('active');
                            }
                        };
                        
                        link.addEventListener('click', clickHandler);
                        navItemHandlers.set(item, { click: clickHandler });
                    }
                });
                
                clickOutsideHandler = function(event) {
                    const mainNav = document.querySelector('#tourmag-menu .main-nav');
                    if (mainNav && !mainNav.contains(event.target)) {
                        navItems.forEach(item => item.classList.remove('active'));
                    }
                };
                
                setTimeout(() => {
                    document.addEventListener('click', clickOutsideHandler);
                }, 100);
            } else {
                document.body.classList.remove('hover-mode');
            }
        }
        
       setupBehavior();

// Ajuster la position du bouton hamburger en fonction de la hauteur du menu natif
function adjustHamburgerPosition() {
    if (window.innerWidth <= 768) {
        const nativeMenu = document.querySelector('div.tablet-bg');
        const toggleBtn = document.querySelector('#tourmag-menu .mobile-menu-toggle');
        const mainNav = document.querySelector('#tourmag-menu .main-nav');
        
        if (nativeMenu && toggleBtn && mainNav) {
            const menuHeight = nativeMenu.offsetHeight;
            const baseOffset = 44; // Hauteur de base du menu
            const extraOffset = menuHeight - baseOffset; // Différence (0 ou 41.6px)
            
            // Ajuster le top du bouton (base: -3rem = -48px)
            const newTopRem = -8.625 - (extraOffset / 16); // Convertir px en rem
            toggleBtn.style.top = `${newTopRem}rem`;
            
            // Ajuster le margin-top du main-nav (base: 3.5rem = 56px)
            const newMarginRem = 3.5 + (extraOffset / 16);
            mainNav.style.marginTop = `${newMarginRem}rem`;
        }
    }
}

// Observer les changements de hauteur du menu natif
const nativeMenu = document.querySelector('div.tablet-bg');
if (nativeMenu) {
    const observer = new MutationObserver(adjustHamburgerPosition);
    observer.observe(nativeMenu, { 
        attributes: true, 
        childList: true, 
        subtree: true 
    });
    
    // Ajustement initial
    adjustHamburgerPosition();
}

// Réajuster au redimensionnement
window.addEventListener('resize', adjustHamburgerPosition);

const newsletterItems = document.querySelectorAll('#tourmag-menu .newsletter-item');
        
        newsletterItems.forEach(item => {
            const link = item.querySelector('.mega-link');
            let closeTimeout;
            
            if (!link) return;
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                clearTimeout(closeTimeout);
                
                const wasActive = item.classList.contains('active');
                
                newsletterItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                if (!wasActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
            
            item.addEventListener('mouseenter', function() {
                clearTimeout(closeTimeout);
            });
            
            item.addEventListener('mouseleave', function() {
                if (item.classList.contains('active')) {
                    closeTimeout = setTimeout(function() {
                        item.classList.remove('active');
                    }, 200);
                }
            });
        });
        
        const mediaItems = document.querySelectorAll('#tourmag-menu .media-item');
        
        mediaItems.forEach(item => {
            const link = item.querySelector('.mega-link');
            let closeTimeout;
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                clearTimeout(closeTimeout);
                
                const wasActive = item.classList.contains('active');
                
                mediaItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                if (!wasActive) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
            
            item.addEventListener('mouseenter', function() {
                clearTimeout(closeTimeout);
            });
            
            item.addEventListener('mouseleave', function() {
                if (item.classList.contains('active')) {
                    closeTimeout = setTimeout(function() {
                        item.classList.remove('active');
                    }, 200);
                }
            });
        });
        
        const offerTabs = document.querySelectorAll('.offer-tab');
        const offerContents = document.querySelectorAll('.offer-content');
        
        offerTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const offerType = this.getAttribute('data-offer');
                
                offerTabs.forEach(t => {
                    t.style.border = '2px solid #d0d0d0';
                    t.style.color = '#1a1a1a';
                    t.style.background = '#f8f9fa';
                    t.style.boxShadow = 'none';
                    t.classList.remove('active');
                    const priceSpan = t.querySelector('span');
                    if (priceSpan) {
                        priceSpan.style.color = '#0066cc';
                    }
                });
                
                this.style.border = '2px solid #0066cc';
                this.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.3)';
                this.style.color = '#ffffff';
                this.style.background = 'linear-gradient(135deg, #0066cc, #0056b3)';
                this.classList.add('active');
                const activePriceSpan = this.querySelector('span');
                if (activePriceSpan) {
                    activePriceSpan.style.color = '#ffffff';
                }
                
                offerContents.forEach(content => {
                    content.style.display = 'none';
                });
                
                const targetContent = document.querySelector(`.offer-content[data-content="${offerType}"]`);
                if (targetContent) {
                    targetContent.style.display = 'block';
                }
            });
        });
        
        const mobileNavItems = document.querySelectorAll('#tourmag-menu .nav-item');
        
        mobileNavItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const megaMenu = item.querySelector('.mega-menu');
            
            if (megaMenu && link) {
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const isCurrentlyOpen = item.classList.contains('active');
                        
                        mobileNavItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('active');
                            }
                        });
                        
                        if (isCurrentlyOpen) {
                            item.classList.remove('active');
                        } else {
                            item.classList.add('active');
                            
                            setTimeout(() => {
                                this.scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'start' 
                                });
                            }, 100);
                        }
                    }
                });
            }
        });
        
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('#tourmag-menu .main-nav');
            const toggle = document.querySelector('#tourmag-menu .mobile-menu-toggle');
            const navList = document.getElementById('navList');
            
            if (window.innerWidth <= 768 && 
                !nav.contains(event.target) && 
                !toggle.contains(event.target)) {
                navList.classList.remove('active');
                toggle.classList.remove('active');
            }
        });
        
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    document.querySelectorAll('#tourmag-menu .mega-menu').forEach(menu => {
                        menu.style.display = '';
                    });
                    document.getElementById('navList').classList.remove('active');
                    setupBehavior();
                }
            }, 250);
        });
    }
    
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

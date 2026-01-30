/**
 * TourMag Navigation Menu Widget - MENU SEUL
 * Version: 2.0.0
 * Description: Widget du mega menu (sans bouton toggle)
 * Usage: <div id="tourmag-menu"></div><script src="tourmag-menu-widget.js"></script>
 */

(function() {
    'use strict';
    
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

        #tourmag-menu {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            font-family: 'Josefin Sans', sans-serif;
            color: var(--text-dark);
            line-height: 1.6;
        }

        #tourmag-menu * {
            box-sizing: border-box;
        }

        .header {
            background: var(--white);
            box-shadow: var(--shadow-sm);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .main-nav {
            background: #000000;
            position: relative;
        }

        .nav-container {
            max-width: 1600px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .nav-list {
            display: flex;
            list-style: none;
            gap: 0;
            width: 100%;
            flex-wrap: nowrap;
            margin: 0;
            padding: 0;
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
        }

        .mega-columns {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 3rem;
        }

        .mega-columns.cols-4 { grid-template-columns: repeat(4, 1fr); }
        .mega-columns.cols-3 { grid-template-columns: repeat(3, 1fr); }
        .mega-columns.cols-2 { grid-template-columns: repeat(2, 1fr); }

        .mega-column {
            animation: fadeInUp 0.4s ease forwards;
            opacity: 0;
        }

        @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
            from { transform: translateY(10px); }
        }

        .mega-links {
            list-style: none;
            margin: 0;
            padding: 0;
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

        .newsletter-item,
        .media-item {
            position: relative;
        }

        .newsletter-item .mega-link,
        .media-item .mega-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-light);
            padding: 0.75rem 1rem;
            margin-bottom: 0.5rem;
            border-radius: 6px;
            cursor: pointer;
            border: none;
            outline: none;
            width: 100%;
            text-align: left;
            font-family: inherit;
            font-size: 1.15rem;
            color: var(--text-gray);
            transition: all 0.2s ease;
        }

        .newsletter-item .mega-link .chevron,
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
        }

        .newsletter-item.active .mega-link .chevron,
        .media-item.active .mega-link .chevron {
            transform: rotate(180deg);
        }

        .newsletter-submenu,
        .media-submenu {
            max-height: 0;
            opacity: 0;
            visibility: hidden;
            overflow: hidden;
            transition: all 0.3s ease;
            margin-left: 1rem;
            margin-top: 0.5rem;
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 0;
        }

        .newsletter-item.active .newsletter-submenu,
        .media-item.active .media-submenu {
            max-height: 400px;
            padding: 1.5rem;
            opacity: 1;
            visibility: visible;
        }

        .newsletter-submenu ul,
        .media-submenu ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .newsletter-submenu ul li a,
        .media-submenu ul li a {
            display: block;
            padding: 0.75rem 1rem;
            color: var(--text-gray);
            text-decoration: none;
            font-size: 1.1rem;
            border-radius: 4px;
            transition: all 0.2s ease;
        }

        .newsletter-submenu ul li a:hover,
        .media-submenu ul li a:hover {
            background: var(--bg-light);
            color: var(--primary-blue);
            padding-left: 1.25rem;
        }

        .nav-link img {
            width: 24px !important;
            height: 24px !important;
            object-fit: contain !important;
        }

        /* Responsive */
        @media (max-width: 1400px) {
            .nav-link { padding: 1.25rem 0.9rem; font-size: 0.9rem; }
            .nav-list { flex-wrap: wrap; }
            .mega-columns.cols-4, .mega-columns.cols-3 { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 1200px) {
            .mega-columns.abonnes-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
            .nav-container { padding: 0 1rem; }
            
            .nav-list {
                display: none;
                flex-direction: column;
                position: fixed !important;
                top: 3.5rem !important;
                left: 0 !important;
                right: 0 !important;
                background: #000000 !important;
                box-shadow: var(--shadow-lg) !important;
                padding: 0.5rem 0 !important;
                z-index: 10000 !important;
                max-height: calc(100vh - 4rem) !important;
                overflow-y: auto !important;
                margin: 0 !important;
            }

            .nav-list.active {
                display: flex !important;
            }
            
            .nav-item.active .nav-link::after { width: 0 !important; }
            
            .mega-menu {
                position: static;
                box-shadow: none;
                border-left: 3px solid;
                border-image: linear-gradient(180deg, #59DF7A, #0956E7) 1;
                display: none;
                max-height: none !important;
            }

            .nav-item.active .mega-menu {
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
            }

            .mega-menu-content { padding: 1rem; }
            .mega-columns { grid-template-columns: 1fr !important; }
            
            #tourmag-menu img {
                width: 40px !important;
                height: 40px !important;
                object-fit: contain !important;
            }
        }
`;
        document.head.appendChild(style);
    }
    
    function injectHTML() {
        const container = document.getElementById('tourmag-menu');
        if (!container) return false;
        
        container.innerHTML = `<header class="header">
        <nav class="main-nav">
            <div class="nav-container">
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
    
    function initializeJS() {
        // Gestion des sous-menus newsletters
        const newsletterItems = document.querySelectorAll('.newsletter-item, .media-item');
        newsletterItems.forEach(item => {
            const link = item.querySelector('.mega-link');
            if (!link) return;
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                item.classList.toggle('active');
            });
        });

        // Gestion mobile
        const mobileNavItems = document.querySelectorAll('.nav-item');
        mobileNavItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const megaMenu = item.querySelector('.mega-menu');
            
            if (megaMenu && link) {
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const isOpen = item.classList.contains('active');
                        mobileNavItems.forEach(i => i.classList.remove('active'));
                        if (!isOpen) item.classList.add('active');
                    }
                });
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectCSS();
            if (injectHTML()) initializeJS();
        });
    } else {
        injectCSS();
        if (injectHTML()) initializeJS();
    }
})();

/**
 * TourMag Menu Toggle Button
 * Version: 2.0.0
 * Description: Bouton hamburger/croix pour contrôler le mega menu
 * Usage: <div id="tourmag-toggle"></div><script src="tourmag-menu-toggle.js"></script>
 */

(function() {
    'use strict';
    
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = `
        #tourmag-toggle {
            display: inline-block;
        }

        .tourmag-menu-toggle {
            background: #000000;
            border: none;
            font-size: 1.8rem;
            color: #ffffff;
            cursor: pointer;
            padding: 0.5rem 0.75rem;
            border-radius: 4px;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 10001;
        }

        .tourmag-menu-toggle:hover {
            background: #333333;
        }

        .tourmag-menu-toggle .hamburger-icon,
        .tourmag-menu-toggle .close-icon {
            transition: all 0.3s ease;
            font-size: 1.8rem;
            display: block;
            line-height: 1;
        }

        .tourmag-menu-toggle .close-icon {
            display: none;
        }

        .tourmag-menu-toggle.active .hamburger-icon {
            display: none;
        }

        .tourmag-menu-toggle.active .close-icon {
            display: block;
        }

        /* Masquer le bouton sur desktop */
        @media (min-width: 769px) {
            #tourmag-toggle {
                display: none !important;
            }
        }
        `;
        document.head.appendChild(style);
    }
    
    function injectHTML() {
        const container = document.getElementById('tourmag-toggle');
        if (!container) {
            console.error('TourMag Toggle: Element #tourmag-toggle not found');
            return false;
        }
        
        container.innerHTML = `
            <button class="tourmag-menu-toggle" id="tourmagMenuToggle" aria-label="Toggle menu">
                <span class="hamburger-icon">☰</span>
                <span class="close-icon">✕</span>
            </button>
        `;
        return true;
    }
    
    function initializeJS() {
        const toggleBtn = document.getElementById('tourmagMenuToggle');
        const navList = document.getElementById('navList');
        
        if (!toggleBtn) {
            console.error('TourMag Toggle: Button not found');
            return;
        }
        
        toggleBtn.addEventListener('click', function() {
            // Toggle le bouton
            toggleBtn.classList.toggle('active');
            
            // Toggle le menu (qui est dans l'autre fichier)
            if (navList) {
                navList.classList.toggle('active');
            } else {
                console.warn('TourMag Toggle: Menu list (#navList) not found. Make sure tourmag-menu-widget.js is loaded.');
            }
        });
        
        // Fermer le menu si on clique en dehors
        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                const mainNav = document.querySelector('#tourmag-menu .main-nav');
                
                if (mainNav && 
                    !mainNav.contains(event.target) && 
                    !toggleBtn.contains(event.target) &&
                    navList && 
                    navList.classList.contains('active')) {
                    
                    navList.classList.remove('active');
                    toggleBtn.classList.remove('active');
                }
            }
        });
        
        // Réinitialiser lors du redimensionnement
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                if (navList) navList.classList.remove('active');
                toggleBtn.classList.remove('active');
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectCSS();
            if (injectHTML()) {
                // Attendre un peu pour s'assurer que le menu est chargé
                setTimeout(initializeJS, 100);
            }
        });
    } else {
        injectCSS();
        if (injectHTML()) {
            setTimeout(initializeJS, 100);
        }
    }
})();
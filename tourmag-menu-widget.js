/**
 * Diagnostic Event Listeners
 * Copiez-collez dans la console
 */

console.log('=== DIAGNOSTIC EVENT LISTENERS ===\n');

// 1. Compter les newsletter-items
const newsletterItems = document.querySelectorAll('#tourmag-menu .newsletter-item');
console.log('1. Newsletter items trouvés:', newsletterItems.length);

// 2. Vérifier chaque item
console.log('\n2. Détail de chaque newsletter-item:');
newsletterItems.forEach((item, index) => {
    const link = item.querySelector('.mega-link');
    const submenu = item.querySelector('.newsletter-submenu');
    const text = link ? link.textContent.trim() : 'N/A';
    
    console.log(`\n   Item ${index + 1}: ${text}`);
    console.log('   - .mega-link trouvé:', link ? '✅' : '❌');
    console.log('   - .newsletter-submenu trouvé:', submenu ? '✅' : '❌');
    
    // Tester si le clic fonctionne
    if (link) {
        console.log('   - Listeners attachés:', getEventListeners(link).click ? 
            getEventListeners(link).click.length + ' listener(s)' : 
            '⚠️ getEventListeners non disponible (utilisez Chrome)');
    }
});

// 3. Même chose pour media-items
const mediaItems = document.querySelectorAll('#tourmag-menu .media-item');
console.log('\n3. Media items trouvés:', mediaItems.length);

mediaItems.forEach((item, index) => {
    const link = item.querySelector('.mega-link');
    const submenu = item.querySelector('.media-submenu');
    const text = link ? link.textContent.trim() : 'N/A';
    
    console.log(`\n   Item ${index + 1}: ${text}`);
    console.log('   - .mega-link trouvé:', link ? '✅' : '❌');
    console.log('   - .media-submenu trouvé:', submenu ? '✅' : '❌');
});

// 4. Test manuel sur TOUS les items
console.log('\n4. 🧪 Test manuel - Cliquer sur chaque item:');
console.log('   Exécutez ces commandes une par une:\n');

newsletterItems.forEach((item, index) => {
    const link = item.querySelector('.mega-link');
    const text = link ? link.textContent.trim().substring(0, 20) : 'Item ' + (index + 1);
    console.log(`   // ${text}`);
    console.log(`   document.querySelectorAll('#tourmag-menu .newsletter-item')[${index}].querySelector('.mega-link').click()\n`);
});

// 5. Forcer l'ajout de listeners si manquants
console.log('\n5. 🔧 Solution de secours - Forcer les listeners:');
console.log('   Si les listeners ne sont pas attachés, exécutez:\n');
console.log(`
const items = document.querySelectorAll('#tourmag-menu .newsletter-item');
items.forEach(item => {
    const link = item.querySelector('.mega-link');
    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const wasActive = item.classList.contains('active');
            
            // Fermer tous les autres
            items.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            
            // Toggle actuel
            if (!wasActive) {
                item.classList.add('active');
                console.log('✅ Ouvert:', link.textContent.trim());
            } else {
                item.classList.remove('active');
                console.log('❌ Fermé:', link.textContent.trim());
            }
        });
    }
});
console.log('✅ Listeners forcés ajoutés !');
`);

// 6. Vérifier les erreurs JavaScript
console.log('\n6. Vérifiez les erreurs JavaScript:');
console.log('   Regardez dans l\'onglet Console s\'il y a des erreurs en rouge');
console.log('   qui pourraient bloquer l\'exécution du code du widget.');

console.log('\n=== FIN DIAGNOSTIC ===');

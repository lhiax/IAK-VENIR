
/**
 * iA_k_venir - MAIN SCRIPT (Clean Build)
 */

/* =========================================
   DATA SECTION
   ========================================= */

const LOCATIONS = {
    "Villes & Villages (Alsace Central)": [
        { id: "baltzenheim", name: "Baltzenheim (QG)", dist: 0 },
        { id: "marckolsheim", name: "Marckolsheim", dist: 6 }, // Verified ~6km
        { id: "artzenheim", name: "Artzenheim", dist: 3 }, // Verified ~3km
        { id: "kunheim", name: "Kunheim", dist: 5 }, // Verified ~5km
        { id: "bicsheim", name: "Biesheim", dist: 10 }, // Verified ~10km
        { id: "neufbrisach", name: "Neuf-Brisach", dist: 12 }, // Verified ~12km
        { id: "selestat", name: "Sélestat", dist: 22 }, // ~22km
        { id: "colmar", name: "Colmar", dist: 18 }, // ~17-18km
        { id: "obernai", name: "Obernai", dist: 45 }, // ~45km
        { id: "strasbourg", name: "Strasbourg", dist: 65 }, // ~65km
        { id: "mulhouse", name: "Mulhouse", dist: 58 } // ~58km
    ],
    "Route des Vins & Tourisme": [
        { id: "riquewihr", name: "Riquewihr", dist: 28 }, // ~28km
        { id: "ribeauville", name: "Ribeauvillé", dist: 26 }, // ~26km
        { id: "kaysersberg", name: "Kaysersberg", dist: 28 }, // ~28km
        { id: "eguisheim", name: "Eguisheim", dist: 24 }, // ~24km
        { id: "haut_koenigsbourg", name: "Château du Haut-Kœnigsbourg", dist: 35 }, // ~35km
        { id: "mont_sainte_odile", name: "Mont Sainte-Odile", dist: 52 }, // ~50-55km
        { id: "ungersheim", name: "Écomusée d'Alsace", dist: 48 } // ~48km
    ],
    "Loisirs & Frissons": [
        { id: "europapark", name: "Europa-Park (Rust, DE)", dist: 32 }, // ~32km via Rhin tips
        { id: "rulantica", name: "Rulantica (Rust, DE)", dist: 33 }, // ~33km
        { id: "casino_baden", name: "Casino Baden-Baden (DE)", dist: 95 } // ~95km
    ],
    "Gares & Aéroports": [
        { id: "gare_colmar", name: "Gare de Colmar", dist: 18 },
        { id: "gare_selestat", name: "Gare de Sélestat", dist: 22 },
        { id: "gare_strasbourg", name: "Gare de Strasbourg", dist: 65 },
        { id: "aeroport_entzheim", name: "Aéroport Strasbourg-Entzheim", dist: 62 }, // ~62km
        { id: "euroairport", name: "EuroAirport (Bâle-Mulhouse)", dist: 72 } // ~72km
    ]
};

const ARCHIVES = [
    {
        id: 1,
        title: "Main Square Festival 2023",
        category: "festivals",
        image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop",
        date: "04 JUILLET 2023"
    },
    {
        id: 2,
        title: "Vignes de Riquewihr",
        category: "gastronomy",
        image: "https://images.unsplash.com/photo-1597246219803-e8c9a632d430?q=80&w=800&auto=format&fit=crop",
        date: "15 SEPTEMBRE 2023"
    },
    {
        id: 3,
        title: "Concert Zénith Strasbourg",
        category: "festivals",
        image: "https://images.unsplash.com/photo-1459749411177-0473ef7161a8?q=80&w=800&auto=format&fit=crop",
        date: "23 MAI 2024"
    },
    {
        id: 4,
        title: "Gastronomie Alsacienne",
        category: "gastronomy",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
        date: "10 NOVEMBRE 2023"
    },
    {
        id: 5,
        title: "Shooting Mode Urbain",
        category: "corporate",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        date: "20 JANVIER 2024"
    },
    {
        id: 6,
        title: "Eurockéennes - The Crowd",
        category: "festivals",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
        date: "02 JUILLET 2022"
    }
];

const DEALS = [
    {
        id: "VISIT-ALSACE",
        title: "DÎNERS INSOLITES",
        description: "Une expérience culinaire unique dans des lieux d'exception en Alsace.",
        discount: "DÉCOUVERTE",
        validity: "SAISONNIER",
        color: "#ff3333", // Rouge
        url: "https://www.visit.alsace/vos-diners-insolites-en-alsace/diners-insolites-en-alsace/",
        kitt_script: "Les humains ont une façon étrange de se nourrir... mais le cadre semble acceptable."
    },
    {
        id: "ETOILES-ALSACE",
        title: "FORMULES ÉTOILÉES",
        description: "L'excellence gastronomique alsacienne à portée de main.",
        discount: "PREMIUM",
        validity: "TOUTE L'ANNÉE",
        color: "#ff9d00", // Gold
        url: "https://www.etoiles-alsace.com/nos-formules/",
        kitt_script: "Attention aux miettes, Michael. Ces établissements sont prestigieux."
    },
    {
        id: "PAUSE-COLMAR",
        title: "PAUSE COLMARIENNE",
        description: "Détente et découverte au coeur de Colmar.",
        discount: "RELAX",
        validity: "EN COURS",
        color: "#b8ff00", // Vert
        url: "https://pausecolmarienne.com/",
        kitt_script: "Un arrêt stand à Colmar ? Je surveillerai le véhicule."
    },
    {
        id: "NOUVELLES-GASTRO",
        title: "ACTU GASTRONOMIE",
        description: "Toute l'actualité culinaire et gastronomique en Alsace.",
        discount: "INFO",
        validity: "TEMPS RÉEL",
        color: "#00d4ff", // Bleu
        url: "https://nouvellesgastronomiques.com/categories/alsace-actualites/",
        kitt_script: "Mise à jour de la base de données culinaire en cours..."
    },
    {
        id: "CASINO-MENU",
        title: "CASINO & GOURMANDISE",
        description: "Menu Gourmand et accès Casino Barrière Ribeauvillé.",
        discount: "VIP",
        validity: "EXCLUSIF",
        color: "#000000", // Black
        url: "https://cadeauxbarriere.com/products/menu-gourmand-et-casino-ribeauville",
        kitt_script: "Accès accrédité niveau Omega. Faites vos jeux, Michael.",
        admin: true,
        blocked: true
    },
    {
        id: "CASINO-CHAMP",
        title: "CHAMPAGNE & JEU",
        description: "Champagne et Soirée Casino Barrière Ribeauvillé.",
        discount: "ELITE",
        validity: "PRESTIGE",
        color: "#D4AF37", // Gold
        url: "https://cadeauxbarriere.com/products/champagne-et-soiree-casino-ribeauville?variant=51862693839189",
        kitt_script: "Protocole de célébration activé. La chance semble être un facteur déterminant.",
        admin: true,
        blocked: true
    },
    {
        id: "CASINO-BALNEO",
        title: "2H BALNÉO & SPA",
        description: "Accès 2h Espace Balnéo - Casino Barrière.",
        discount: "ZEN",
        validity: "DÉTENTE",
        color: "#00ffff", // Cyan Neon
        url: "https://cadeauxbarriere.com/products/2h-de-balneo?_pos=3&_fid=f518ca29b&_ss=c&variant=51862665855317",
        kitt_script: "Analyse des paramètres vitaux... Niveau de stress détecté. Une immersion en eau thermale est recommandée.",
        admin: true,
        blocked: true
    },
    {
        id: "LOCAL-ROOT",
        title: "INTERFACE LOCALE",
        description: "Accès direct au fichier source local (Self-Test).",
        discount: "DEV",
        validity: "SYSTEM",
        color: "#ffffff", // Matrix White
        url: "file:///Volumes/DD%202%20TERRAS/3_SITE%20IA%20VTC%20PHOTO/index.html",
        kitt_script: "Boucle de rétroaction détectée. Je me regarde... me regarder.",
        admin: true,
        blocked: true
    }
];

// STATE
let currentDeal = null;
let voicesLoaded = false;

/* =========================================
   VOICE ENGINE
   ========================================= */

const KITT_QUOTES = [
    "Trajet calculé. J'espère que vous n'avez pas prévu de course-poursuite aujourd'hui, Michael.",
    "Bande passante audio activée. Le tarif est affiché. Dois-je préparer le mode Turbo Boost ?",
    "Analyse terminée. C'est une destination très pittoresque. Je garderai mes scanners en alerte.",
    "Voici l'estimation, Michael. N'oubliez pas que je ne peux pas sauter par-dessus les bouchons... enfin, pas légalement.",
    "Les capteurs indiquent une route dégagée. Estimation du coût affichée. Prêt à partir quand vous l'êtes.",
    "J'ai calculé l'itinéraire optimal. Je me suis permis d'éviter les chemins de terre, pour mes suspensions.",
    "Destination verrouillée. Le tarif semble raisonnable pour une technologie de ma classe.",
    "Veuillez consulter l'écran. Si Devone appelle, dites-lui que je suis en maintenance."
];

function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        voicesLoaded = true;
    }
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(text) {
    if (!('speechSynthesis' in window)) return;
    if (!voicesLoaded) loadVoices();

    window.speechSynthesis.cancel();

    // Personalization
    const sPrenom = document.getElementById('res-prenom');
    let userName = "Monsieur"; // Default KITT default
    if (sPrenom && sPrenom.value.trim() !== "") {
        userName = sPrenom.value.trim();
    }
    const personalizedText = text.replace(/Michael/gi, userName);

    const utterance = new SpeechSynthesisUtterance(personalizedText);
    const voices = window.speechSynthesis.getVoices();

    // Voice Strategy: Target "Thomas" for French KITT feel (Deep, Calm)
    // If Thomas not found, try Google Français
    const frVoice = voices.find(v => v.name.includes('Thomas')) // macOS default cool guy
        || voices.find(v => v.name.includes('Google') && v.lang.startsWith('fr'))
        || voices.find(v => v.lang === 'fr-FR');

    if (frVoice) {
        utterance.voice = frVoice;
        // KITT Voice Tuning: Lower pitch, steady rate
        utterance.pitch = 0.7; // Deeper
        utterance.rate = 0.95; // Slightly slower, more deliberate
    }

    try {
        window.speechSynthesis.speak(utterance);
    } catch (e) {
        console.warn("Speech Error:", e);
    }
}

function speakSummary(data) {
    const { destination, price, distance } = data;
    const randomQuote = KITT_QUOTES[Math.floor(Math.random() * KITT_QUOTES.length)];
    const text = `Calcul terminé. Destination : ${destination}. Distance : ${distance} kilomètres. L'estimation est de ${price} euros. ${randomQuote}`;
    speak(text);
}

/* =========================================
   DEALS LOGIC
   ========================================= */

function activateDeal(dealId) {
    const deal = DEALS.find(d => d.id === dealId);
    if (!deal) return;

    currentDeal = deal;
    const simulatorSection = document.getElementById('simulator');
    const supplementDiv = document.getElementById('div-supplement');

    if (simulatorSection) simulatorSection.scrollIntoView({ behavior: 'smooth' });

    if (deal.id === "GASTRO-STAR") {
        if (supplementDiv) supplementDiv.classList.remove('hidden');
    } else {
        if (supplementDiv) {
            supplementDiv.classList.add('hidden');
            const inp = document.getElementById('sim-supplement');
            if (inp) inp.value = "";
        }
    }
    speak(deal.kitt_script);
}

// Attach to window for HTML onclick events
window.activateDeal = activateDeal;

/* =========================================
   OVERLAY LOGIC (Scanner Edition)
   ========================================= */

let overlayDeals = [];
let currentOverlayIndex = 0;

function initOverlayDeals() {
    const isAdmin = true; // TEMPORARY FORCE SHOW
    overlayDeals = DEALS.filter(d => d.url && (!d.admin || isAdmin));
}

function openDealOverlay(url) {
    if (overlayDeals.length === 0) initOverlayDeals();
    // ... (rest of function unchanged, just ensuring context)

    const overlay = document.getElementById('deal-overlay');
    const iframe = document.getElementById('deal-iframe');
    const scanner = document.getElementById('deal-scanner');

    // Find index of this url
    const index = overlayDeals.findIndex(d => d.url === url);
    if (index !== -1) currentOverlayIndex = index;

    // Show Overlay
    if (overlay) {
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Initialize Content (Trigger Scanner)
    updateOverlayContent();
}

function closeDealOverlay() {
    // Clear Auto-Launch Timers
    if (window.autoLaunchTimer) clearTimeout(window.autoLaunchTimer);
    if (window.autoLaunchInterval) clearInterval(window.autoLaunchInterval);

    const overlay = document.getElementById('deal-overlay');
    const iframe = document.getElementById('deal-iframe');
    const navControls = document.querySelector('#deal-overlay .flex.items-center.gap-2'); // Nav buttons container

    if (overlay) {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';

        // Restore Nav Controls for next use
        if (navControls) navControls.classList.remove('hidden');

        if (iframe) {
            iframe.src = 'about:blank';
            iframe.onload = null; // Remove listener
        }
    }
}

function navigateDeal(direction) {
    currentOverlayIndex += direction;

    if (currentOverlayIndex >= overlayDeals.length) currentOverlayIndex = 0;
    if (currentOverlayIndex < 0) currentOverlayIndex = overlayDeals.length - 1;

    updateOverlayContent();
}

function updateOverlayContent() {
    const iframe = document.getElementById('deal-iframe');
    const scanner = document.getElementById('deal-scanner');
    const titleEl = document.getElementById('deal-overlay-title');
    const counterEl = document.getElementById('deal-counter');

    // Portal Elements
    const portal = document.getElementById('deal-portal');
    const portalTitle = document.getElementById('portal-title');
    const portalText = document.getElementById('portal-text');
    const portalMeta = document.getElementById('portal-meta');
    const btnPortal = document.getElementById('btn-portal-open');

    const deal = overlayDeals[currentOverlayIndex];
    if (!deal) return;

    if (titleEl) titleEl.textContent = `// ${deal.title}`;
    if (counterEl) counterEl.textContent = `${currentOverlayIndex + 1} / ${overlayDeals.length}`;

    // Handle Blocked Sites (PORTAL MODE)
    if (deal.blocked) {
        if (iframe) iframe.style.display = 'none';
        if (scanner) scanner.style.display = 'none';

        if (portal) {
            portal.classList.remove('hidden');
            // Populate Portal
            if (portalTitle) portalTitle.innerText = deal.title;
            if (portalText) portalText.innerText = deal.description;
            if (portalMeta) portalMeta.innerHTML = `
                <span class="font-bold text-neon-blue">${deal.discount}</span>
                <span>//</span>
                <span>${deal.validity}</span>
            `;

            const btnPortalBack = document.getElementById('btn-portal-back');

            if (btnPortal) {
                btnPortal.onclick = () => {
                    window.open(deal.url, '_blank');
                    closeDealOverlay(); // Auto-close to return to dashboard
                };
            }

            if (btnPortalBack) {
                btnPortalBack.onclick = () => closeDealOverlay();
            }
        }

    } else {
        // Normal Behavior
        if (portal) portal.classList.add('hidden'); // Hide portal
        if (iframe) iframe.style.display = 'block';

        // Reset UI for Loading
        if (scanner) scanner.style.display = 'flex'; // Show scanner
        if (iframe) {
            iframe.style.opacity = '0'; // Hide frame during load
            iframe.src = deal.url;

            // On Load Event
            iframe.onload = () => {
                setTimeout(() => {
                    if (scanner) scanner.style.display = 'none';
                    iframe.style.opacity = '1';
                    console.log("Overlay Loaded: " + deal.title);
                }, 800);
            };
        }
    }

    if (deal.kitt_script) speak(deal.kitt_script);
}

// Make globally available
window.openDealOverlay = openDealOverlay;
window.closeDealOverlay = closeDealOverlay;
window.navigateDeal = navigateDeal;

function openExternalOverlay(url, title) {
    const overlay = document.getElementById('deal-overlay');
    const iframe = document.getElementById('deal-iframe');
    const scanner = document.getElementById('deal-scanner');
    const titleEl = document.getElementById('deal-overlay-title');
    const navControls = document.querySelector('#deal-overlay .flex.items-center.gap-2'); // Nav buttons container

    if (overlay) {
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Hide Nav Controls for external links
    if (navControls) navControls.classList.add('hidden');

    // Set Title
    if (titleEl) titleEl.textContent = `// ${title.toUpperCase()}`;

    // Handle YouTube Conversion
    // Handle YouTube Conversion
    let finalUrl = url;
    if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        finalUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1].split('&')[0];
        finalUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    // Handle Canva Embeds (Force Embed Mode to avoid X-Frame-Options)
    else if (url.includes('canva.com') && url.includes('/view')) {
        // Remove query params and ensure ?embed
        const baseUrl = url.split('?')[0];
        finalUrl = `${baseUrl}?embed`;
    }

    // Load Iframe
    if (iframe) {
        iframe.style.display = 'block';
        iframe.style.opacity = '0';
        iframe.src = finalUrl;

        if (scanner) scanner.style.display = 'flex';

        iframe.onload = () => {
            setTimeout(() => {
                if (scanner) scanner.style.display = 'none';
                iframe.style.opacity = '1';
            }, 800);
        };
    }
}

window.openExternalOverlay = openExternalOverlay;

/* =========================================
   UI RENDER
   ========================================= */

/* =========================================
   DEAL SELECTION LOGIC
   ========================================= */

function selectDeal(dealId) {
    const deal = DEALS.find(d => d.id === dealId);
    if (!deal) return;

    // 1. Close Overlay if open
    closeDealOverlay();

    // 2. Scroll to Reservation Form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // 3. Pre-fill Notes
    const notesField = document.getElementById('res-notes');
    if (notesField) {
        // Add visual highlight
        notesField.style.transition = 'all 0.5s';
        notesField.style.borderColor = deal.color;
        notesField.style.boxShadow = `0 0 20px ${deal.color}40`;

        setTimeout(() => {
            notesField.style.borderColor = ''; // Revert to CSS default
            notesField.style.boxShadow = '';
        }, 2000);

        // Append Text
        const selectionText = `\n>>> OFFRE SÉLECTIONNÉE : ${deal.title.toUpperCase()} <<<\n`;

        // Avoid duplicate entries
        if (!notesField.value.includes(selectionText)) {
            notesField.value = selectionText + notesField.value;
        }
    }

    // 4. Auto-select Option "Expérience / Bons Plans"
    const optField = document.getElementById('res-opt');
    if (optField) {
        optField.value = 'bons-plans';
        // Visual feedback
        optField.style.transition = 'all 0.5s';
        optField.style.borderColor = deal.color;
        setTimeout(() => optField.style.borderColor = '', 2000);
    }

    // 5. Voice Confirmation
    speak(`Offre ${deal.title} sélectionnée. Option Expérience validée.`);
}

// Make globally available
window.selectDeal = selectDeal;

function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = ARCHIVES.map(item => `
        <div class="group relative aspect-video bg-gray-900 overflow-hidden border border-white/10 hover:border-limit-red transition-all cursor-pointer">
            <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0">
            <div class="absolute top-0 right-0 p-2 bg-black/80 text-neon-blue font-mono text-xs border-b border-l border-white/20">
                ${item.category.toUpperCase()}
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div class="text-limit-red font-future text-xs mb-1">${item.date}</div>
                <div class="text-white font-bold font-future tracking-wide">${item.title}</div>
            </div>
            <div class="absolute inset-0 bg-limit-red/10 opacity-0 group-hover:opacity-100 mix-blend-overlay pointer-events-none"></div>
        </div>
    `).join('');
}

function renderDeals() {
    const grid = document.getElementById('deals-grid');
    if (!grid) return;

    const isAdmin = true; // TEMPORARY FORCE SHOW
    const visibleDeals = DEALS.filter(d => !d.admin || isAdmin);

    grid.innerHTML = visibleDeals.map(deal => `
        <div class="relative group transform hover:-translate-y-1 transition-transform duration-300">
            <div class="bg-retro-paper text-black p-8 shadow-[10px_10px_0px_#00d4ff] relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-2 ticket-edge opacity-50"></div>
                <div class="flex justify-between items-start mb-6 border-b-2 border-dashed border-black/20 pb-4">
                    <div>
                        <p class="font-mono text-[10px] text-black/50">ID_TRANSACTION: ${deal.id}</p>
                        <h3 class="font-future text-xl mt-1 font-bold">${deal.title}</h3>
                    </div>
                    <div class="text-white px-3 py-1 font-future text-sm font-bold shadow-sm transform -rotate-2" style="background-color: ${deal.color}">
                        ${deal.discount}
                    </div>
                </div>
                <p class="font-body italic text-lg mb-8 text-black/80 leading-relaxed">"${deal.description}"</p>
                <div class="flex justify-between items-end">
                    <div class="font-mono text-[10px] space-y-1">
                        <p class="text-red-600 font-bold tracking-widest">${deal.validity}</p>
                        <p>PRIORITÉ : HAUTE</p>
                    </div>
                    <div class="flex gap-1 h-8 items-end opacity-70">
                        <div class="bg-black w-1 h-full"></div>
                        <div class="bg-black w-2 h-2/3"></div>
                        <div class="bg-black w-1 h-full"></div>
                        <div class="bg-black w-3 h-1/2"></div>
                        <div class="bg-black w-1 h-full"></div>
                    </div>
                </div>
            </div>
            <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-1">
                <button onclick="${deal.url ? `openDealOverlay('${deal.url}')` : `activateDeal('${deal.id}')`}"
                    class="bg-neon-green text-black font-future px-4 py-3 text-xs border-2 border-black shadow-[4px_4px_0_black] hover:translate-y-1 hover:shadow-none whitespace-nowrap cursor-pointer">
                    ${deal.url ? "VOIR L'OFFRE" : "ACTIVER LE PASS"}
                </button>
                <button onclick="selectDeal('${deal.id}')"
                    class="bg-white text-black font-future px-4 py-3 text-xs border-2 border-black shadow-[4px_4px_0_black] hover:translate-y-1 hover:shadow-none whitespace-nowrap cursor-pointer hover:bg-neon-blue hover:text-white transition-colors">
                    SÉLECTIONNER
                </button>
            </div>
        </div>
    `).join('');
}

/* =========================================
   PRICING
   ========================================= */

const PRICE_PER_KM = 2.0;
const FREE_KM_LIMIT = 333; // Updated to 333km as requested (Zone Europe)
let LOCATION_DATA = {}; // Map name -> {id, dist, name}

function initPricing() {
    const departureInput = document.getElementById('sim-departure');
    const destinationInput = document.getElementById('sim-destination');
    const calcBtn = document.getElementById('btn-calculate');

    if (!departureInput || !destinationInput || !calcBtn) return;

    populateDataList();
    calcBtn.addEventListener('click', calculateTrajectory);
}

function populateDataList() {
    const dataList = document.getElementById('locations-list');
    if (!dataList) return;

    dataList.innerHTML = '';
    LOCATION_DATA = {};

    Object.entries(LOCATIONS).forEach(([category, places]) => {
        places.forEach(p => {
            // Populate Map
            LOCATION_DATA[p.name] = p;

            // Populate Datalist
            const opt = document.createElement('option');
            opt.value = p.name;
            dataList.appendChild(opt);
        });
    });
}

// --- OPEN SOURCE ROUTING IMPLEMENTATION ---

// 1. Geocoding (Address -> Lat/Lon) via Nominatim
async function getCoordinates(query) {
    if (!query) return null;
    // Clean query
    // REMOVED "Alsace France" suffix to allow 800km radius searches (Paris, Lyon, etc.)
    // We append nothing by default to trust Nominatim's relevance, or maybe just implicit broad search.
    // To avoid ambiguities, we can append "Europe" or just rely on the user.
    // Let's try raw query first. "Colmar" finds Colmar. "Paris" finds Paris.
    const cleanQuery = query.replace(/\(.*\)/, '').trim();
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cleanQuery)}&limit=1`;

    try {
        const response = await fetch(url, { headers: { 'User-Agent': 'VTC-Simulator/1.0' } });
        const data = await response.json();
        if (data && data.length > 0) {
            return { lat: data[0].lat, lon: data[0].lon, display_name: data[0].display_name };
        }
    } catch (e) {
        console.error("Geocoding Error:", e);
    }
    return null;
}

// 2. Routing (Lat/Lon -> Real Road Dist) via OSRM
async function getRoadDistance(startCoords, endCoords) {
    if (!startCoords || !endCoords) return null;
    const url = `https://router.project-osrm.org/route/v1/driving/${startCoords.lon},${startCoords.lat};${endCoords.lon},${endCoords.lat}?overview=false`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
            // OSRM returns distance in meters, duration in seconds
            return {
                distKm: Math.round(data.routes[0].distance / 1000),
                durationMin: Math.round(data.routes[0].duration / 60)
            };
        }
    } catch (e) {
        console.error("Routing Error:", e);
    }
    return null;
}

// Main Calculator
async function calculateTrajectory() {
    const departureInput = document.getElementById('sim-departure');
    const destinationInput = document.getElementById('sim-destination');
    const paxSelect = document.getElementById('sim-pax');
    const supplementInput = document.getElementById('sim-supplement');
    const outputScreen = document.getElementById('sim-result');
    const priceDisplay = document.getElementById('price-display');
    const detailDisplay = document.getElementById('sim-details');
    const mapFrame = document.getElementById('sim-map-frame');
    const mapOverlay = document.getElementById('map-overlay');

    if (!departureInput || !destinationInput) return;

    const startLoc = departureInput.value.trim();
    const endLoc = destinationInput.value.trim();

    if (startLoc === "" || endLoc === "") {
        return; // Silent return if empty
    }

    // Show loading state
    if (outputScreen) outputScreen.classList.remove('hidden');
    if (priceDisplay) priceDisplay.innerText = "...";
    if (detailDisplay) detailDisplay.innerHTML = `<div class="animate-pulse text-neon-blue">CALCUL SATELLITE EN COURS...</div>`;

    // 1. Get Coordinates
    // Prioritize Presets to save API calls/time if possible? 
    // Actually, user wants "Google Accuracy", so let's check basic Presets first for speed, 
    // BUT since user complained about accuracy, maybe we force OSRM even for known?
    // Let's force OSRM for accuracy if 'Location Data' doesn't have exact coordinates.
    // We don't have coords in LOCATION_DATA. So we fetch everything.

    // Allow UI to breathe
    await new Promise(r => setTimeout(r, 10));

    const startCoords = await getCoordinates(startLoc);
    const endCoords = await getCoordinates(endLoc);

    let tripDist = 0;
    let duration = 0;
    let isSuccess = false;

    if (startCoords && endCoords) {
        const routeData = await getRoadDistance(startCoords, endCoords);
        if (routeData) {
            tripDist = routeData.distKm;
            duration = routeData.durationMin;
            isSuccess = true;
        }
    }

    // Fallback if APIs fail (e.g. rate limit): Use Heuristic
    if (!isSuccess) {
        console.warn("API Fail - Using Fallback");
        const depData = LOCATION_DATA[startLoc];
        const destData = LOCATION_DATA[endLoc];
        if (depData && destData) {
            if (depData.id === 'baltzenheim') tripDist = destData.dist;
            else tripDist = Math.round((depData.dist + destData.dist) * 0.9);
            isSuccess = true;
            duration = Math.round(tripDist * 1.0);
        }
    }

    // Calculate Price
    let nbPax = 1;
    if (paxSelect && paxSelect.value) nbPax = parseInt(paxSelect.value, 10);

    let finalPrice = 0;
    const approachDist = Math.max(0, 0 - FREE_KM_LIMIT); // Essentially 0 now
    // For now, assume Approach is 0 for simplicity unless we calc Baltzenheim -> Start.
    // Let's keep Approach logic simple: If Start != Baltzenheim, we assume standard approach logic or ignored.
    // Re-implementing basic approach fee if Start is far? 
    // User asked "Simple calculation: KM * 2". Let's stick to that strictly as requested.

    const totalDist = tripDist; // Ignoring approach logic to satisfy "Just take Google value * 2"
    // Minimum fare of 20€ for trips < 10km (2€ * 10km = 20€)
    // If distance > 0, ensure min price is 20
    finalPrice = (totalDist > 0) ? Math.max(20, Math.round(totalDist * PRICE_PER_KM)) : 0;

    let dealText = "";

    // Map Embed Update
    const cleanForMaps = (str) => {
        let clean = str.replace(/\(.*\)/, '').trim();
        // Removed "Alsace, France" enforcement for 800km radius
        if (clean.toLowerCase().includes('europa-park') || clean.toLowerCase().includes('rulantica')) return clean + ", Germany";
        return clean;
    };
    // Update Map Embed
    // STRATEGY:
    // 1. Embed URL: Use legacy 'maps.google.com' which is often more permissive for non-API embeds than 'www.google.com'.
    // 2. Link URL: Full "Satellite + Driving" mode for the external button (Always works).
    const sAddr = encodeURIComponent(cleanForMaps(startLoc));
    const dAddr = encodeURIComponent(cleanForMaps(endLoc));

    // Legacy URL for Iframe (Higher success rate without Key)
    // Added 'hl=fr' for French UI
    const mapsEmbedUrl = `https://maps.google.com/maps?saddr=${sAddr}&daddr=${dAddr}&hl=fr&output=embed`;

    // Full URL for External Button (Satellite + Driving)
    const mapsLinkUrl = `https://www.google.com/maps?saddr=${sAddr}&daddr=${dAddr}&t=k&dirflg=d`;

    if (mapFrame) {
        if (mapFrame.src !== mapsEmbedUrl) {
            mapFrame.src = mapsEmbedUrl;
            mapFrame.onload = () => {
                if (mapOverlay) mapOverlay.classList.add('hidden');
            };
        }
    }

    // Deal Logic
    if (currentDeal) {
        if (currentDeal.id === "GASTRO-STAR") {
            const supp = supplementInput && supplementInput.value ? parseFloat(supplementInput.value) : 0;
            finalPrice += (supp * nbPax);
            dealText = `<div class="text-neon-blue font-bold mt-2">✨ OPTION GASTRO : +${supp * nbPax}€</div>`;
        } else if (currentDeal.id === "DEAL-KITT") {
            finalPrice += (20 * nbPax);
            dealText = `<div class="text-neon-blue font-bold mt-2">⚡ PACK ${currentDeal.title} : ACTIVÉ</div>`;
        } else {
            finalPrice += (20 * nbPax);
            dealText = `<div class="text-neon-blue font-bold mt-2">⚡ PACK ${currentDeal.title} : +${20 * nbPax}€</div>`;
        }
    }

    if (isSuccess) {
        if (priceDisplay) priceDisplay.innerText = finalPrice;
        if (detailDisplay) {
            detailDisplay.innerHTML = `
                <div class="flex justify-between border-b border-white/10 pb-1 mb-1 font-mono text-[10px]">
                    <span>DE: ${startLoc}</span>
                    <span>À: ${endLoc}</span>
                </div>
                <div class="font-mono text-xs space-y-1">
                    <div>DIST. RÉELLE : ${tripDist} KM (${nbPax} pers.)</div>
                ${dealText}
            `;
            speakSummary({ destination: endLoc, distance: tripDist, price: finalPrice });
        }
    } else {
        if (detailDisplay) {
            detailDisplay.innerHTML = `
                <div class="text-limit-red font-bold text-xs border border-limit-red/30 p-2 rounded">
                    ⚠️ ERREUR DE KALCUL <br/>
                    Impossible de déterminer la route exacte. Veuillez nous contacter.
                </div>
            `;
        }
    }
}


/* =========================================
/* =========================================
   RESERVATION & LEGAL
   ========================================= */

const COMPANY_INFO = {
    name: "iA_k_venir (EI)",
    address: "68320 Baltzenheim",
    siret: "SIRET EN COURS",
    evtc: "EVTC EN COURS",
    tva: "TVA non applicable, art. 293 B du CGI",
    insurance: "RC PRO : [Assureur] - Zone Europe",
    contact: "07 50 98 92 97"
};

function initReservation() {
    const btnBuild = document.getElementById('btn-res-build');
    const btnSpeak = document.getElementById('btn-res-speak');
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    const btnEmail = document.getElementById('btn-email');

    if (btnBuild) btnBuild.addEventListener('click', updateUI);
    if (btnSpeak) btnSpeak.addEventListener('click', speakReservation);
    if (btnWhatsapp) btnWhatsapp.addEventListener('click', exportToWhatsApp);
    if (btnEmail) btnEmail.addEventListener('click', exportToEmail);
}

function buildData() {
    const sPrenom = document.getElementById('res-prenom');
    const sNom = document.getElementById('res-nom');
    const sPhone = document.getElementById('res-phone');
    const sPickup = document.getElementById('res-pickup');
    const sDrop = document.getElementById('res-drop');
    const sDate = document.getElementById('res-date');
    const sTime = document.getElementById('res-time');
    const sOpt = document.getElementById('res-opt');
    const sNotes = document.getElementById('res-notes');

    return {
        prenom: (sPrenom.value || 'INCONNU').trim(),
        nom: (sNom.value || 'INCONNU').trim().toUpperCase(),
        phone: (sPhone && sPhone.value) ? sPhone.value.trim() : 'NON RENSEIGNÉ',
        pickup: (sPickup.value || 'NON RENSEIGNÉ').trim(),
        drop: (sDrop.value || 'NON RENSEIGNÉ').trim(),
        date: sDate.value || '—',
        time: sTime.value || '—',
        opt: sOpt.options[sOpt.selectedIndex].text,
        notes: (sNotes.value || 'AUCUNE').trim(),
        created: new Date().toLocaleString('fr-FR'),
        price: "SUR DEVIS (>100€) ou TAXIMÈTRE" // Simplification for demo
    };
}

function generateLegalText(data) {
    const dashedLine = "--------------------------------------------------";

    // 1. BON DE RÉSERVATION (Obligatoire à bord)
    const bon = `
${dashedLine}
   BON DE RÉSERVATION (Art. R.3122-1)
${dashedLine}
ENTREPRISE : ${COMPANY_INFO.name}
SIÈGE : ${COMPANY_INFO.address}
EVTC : ${COMPANY_INFO.evtc}

CLIENT : ${data.prenom} ${data.nom}
TÉL : ${data.phone}

MISSION :
- Date commande : ${data.created}
- Prise en charge : ${data.date} à ${data.time}
- Lieu départ : ${data.pickup}
- Lieu arrivée : ${data.drop}
- Note / Offre : ${data.notes}
${dashedLine}
`;

    // 2. DEVIS (Si > 100€)
    const devis = `
${dashedLine}
        DEVIS ESTIMATIF (Valable 30j)
${dashedLine}
ÉMETTEUR : ${COMPANY_INFO.name}
SIRET : ${COMPANY_INFO.siret}
TVA : ${COMPANY_INFO.tva}
RC PRO : ${COMPANY_INFO.insurance}

DÉTAIL PRESTATION :
- Trajet : ${data.pickup} >> ${data.drop}
- Option : ${data.opt}
- Option : ${data.opt}
- NOTES / OFFRES : ${data.notes}

PRIX ESTIMÉ : ${data.price}
(TVA 10% sur transfert / 20% sur mise à dispo)

Bon pour accord (Date & Signature) :
.
.
${dashedLine}
`;

    // 3. FACTURE (Mentions légales)
    const facture = `
${dashedLine}
        FACTURE N° [À GÉNÉRER]
${dashedLine}
DATE ÉMISSION : [DATE DU JOUR]
DATE PRESTATION : ${data.date}

DÉPART : ${data.pickup}
ARRIVÉE : ${data.drop}
NOTES / OFFRES : ${data.notes}

KILOMÈTRES : [À RÉEL] km
CO2 : [X] g/km

TOTAL HT : ... €
TVA : ... €
TOTAL TTC : ... €

Cond. règlement : Comptant.
Indemnité retard (Pro) : 40€.
${dashedLine}
`;

    return { bon, devis, facture };
}

function generateKITTScript(data) {
    return `Analyse terminée. Je viens de compiler les données pour votre prochain trajet. J'ai pris la liberté de vérifier l'itinéraire deux fois... au cas où vos capteurs humains seraient défaillants.

RÉCAPITULATIF DE LA MISSION :

PASSAGER : ${data.prenom} (Espérons qu'il n'ait pas oublié son sens de l'aventure...)
PRISE EN CHARGE : ${data.pickup}
DESTINATION : ${data.drop}
DATE : ${data.date} à ${data.time}
ACTIVITÉ : ${data.opt}

KITT : "${getKITTHumor(data)}"`;
}

function getKITTHumor(data) {
    const text = (data.pickup + " " + data.drop + " " + data.opt).toLowerCase();
    const time = data.time;

    // Time-based (Simple heuristic for demo)
    if (time.includes('22:') || time.includes('23:') || time.includes('00:') || time.includes('01:') || time.includes('02:') || time.includes('03:') || time.includes('04:')) {
        return "Mode furtif activé. Les scanners sont à portée maximale.";
    }

    // Context-based
    if (text.includes('vin') || text.includes('dégustation')) {
        return "Je surveillerai votre trajectoire à pied avec attention.";
    }
    if (text.includes('noël') || text.includes('marche')) {
        return "J'ai activé les capteurs thermiques pour contrer le vin chaud.";
    }
    if (text.includes('casino')) {
        return "Mes calculs indiquent 99% de chances que la banque gagne.";
    }
    if (text.includes('europa') || text.includes('park')) {
        return "Mes accélérations sont plus fluides que le Silver Star.";
    }
    if (text.includes('aérodrome') || text.includes('aéroport') || text.includes('bâle') || text.includes('strasbourg')) {
        return "Synchronisation avec les plans de vol effectuée.";
    }
    if (text.includes('mariage')) {
        return "J'ai préparé la playlist 'Romance Algorithmique'.";
    }

    // Default randoms
    const defaults = [
        "Système paré. Turbines à 110%.",
        "Je suis prêt. Espérons que la route soit dégagée.",
        "Mes circuits frémissent d'impatience.",
        "Un choix d'itinéraire logique.",
        "Je garderai un oeil sur le trafic, et l'autre sur vous."
    ];
    return defaults[Math.floor(Math.random() * defaults.length)];
}

function updateUI() {
    const data = buildData();
    const docs = generateLegalText(data);
    const kittTxt = generateKITTScript(data);

    const summaryEl = document.getElementById('res-summary');
    if (summaryEl) {
        summaryEl.textContent = kittTxt + "\n\n" + "=== DOCUMENTATION LÉGALE GÉNÉRÉE ===" + docs.bon;
    }
    speakReservation();
}

function speakReservation() {
    // Read the content of the right window (Console / System Ready)
    const summaryEl = document.getElementById('res-summary');
    if (summaryEl && summaryEl.textContent) {
        // Speak the text displayed in the console, stripping punctuation for fluidity
        // Replace dashes, underscores, equals with spaces
        // Replace multiple newlines with a pause (dot)
        const cleanText = summaryEl.textContent
            .replace(/[-_=*]/g, ' ') // Remove visual separators
            .replace(/\s+/g, ' ')    // Collapse multiple spaces
            .trim();

        speak(cleanText);
    } else {
        // Fallback if empty
        const data = buildData();
        speak(`Document généré pour ${data.prenom} ${data.nom}. Prêt.`);
    }
}

function exportToWhatsApp() {
    const data = buildData();
    const docs = generateLegalText(data);
    const fullText = `*RÉSERVATION VTC iA_k_venir*\n\n${docs.bon}\n\n*OPTIONS*\n${data.opt}\n${data.notes}`;
    const url = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank');
}

function exportToEmail() {
    const data = buildData();
    const docs = generateLegalText(data);
    const subject = `RÉSERVATION VTC - ${data.nom}`;
    const body = `${docs.bon}\n\n${docs.devis}\n\n${docs.facture}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* =========================================
   MOBILE MENU LOGIC
   ========================================= */

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isClosed = menu.classList.contains('translate-x-full');
        if (isClosed) {
            menu.classList.remove('translate-x-full');
        } else {
            menu.classList.add('translate-x-full');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
        });
    });
}

/* =========================================
   INITIALIZATION
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    console.log("iA_k_venir System Initializing...");
    try {
        initPricing();
        initReservation();
        initMobileMenu();
        renderGallery();
        renderDeals();
        console.log("System Ready.");
    } catch (e) {
        console.error("Critical System Failure:", e);
    }
});

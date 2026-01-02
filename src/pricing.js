import { LOCATIONS } from './data/locations.js';
import { speakSummary } from './voice.js';

// Constants
const PRICE_PER_KM = 2.0;
const FREE_KM_LIMIT = 30; // Free kilometers from Baltzenheim

export function initPricing() {
    const departureSelect = document.getElementById('sim-departure');
    const destinationSelect = document.getElementById('sim-destination');
    const calcBtn = document.getElementById('btn-calculate');

    if (!departureSelect || !destinationSelect || !calcBtn) return;

    // Populate Selects
    populateSelects(departureSelect, destinationSelect);

    // Event Listener
    calcBtn.addEventListener('click', calculateTrajectory);
}

function populateSelects(depSelect, destSelect) {
    Object.entries(LOCATIONS).forEach(([category, places]) => {
        // Departure Group
        if (category !== "Aéroports & Gares (Arrivées)") {
            const groupDep = document.createElement('optgroup');
            groupDep.label = category;
            places.forEach(p => {
                const opt = new Option(p.name, p.id);
                opt.dataset.dist = p.dist;
                groupDep.appendChild(opt);
            });
            depSelect.appendChild(groupDep);
        }

        // Destination Group (All allowed)
        const groupDest = document.createElement('optgroup');
        groupDest.label = category;
        places.forEach(p => {
            const opt = new Option(p.name, p.id);
            opt.dataset.dist = p.dist;
            groupDest.appendChild(opt);
        });
        destSelect.appendChild(groupDest);
    });
}

function calculateTrajectory() {
    const departureSelect = document.getElementById('sim-departure');
    const destinationSelect = document.getElementById('sim-destination');
    const outputScreen = document.getElementById('sim-result');
    const priceDisplay = document.getElementById('price-display');
    const detailDisplay = document.getElementById('sim-details');

    const depOption = departureSelect.options[departureSelect.selectedIndex];
    const destOption = destinationSelect.options[destinationSelect.selectedIndex];

    if (departureSelect.value === "" || destinationSelect.value === "") {
        alert("PROTOCOLE ERREUR : VEUILLEZ SÉLECTIONNER VOS COORDONNÉES.");
        return;
    }

    // Distances from Baltzenheim
    const distDep = parseInt(depOption.dataset.dist);
    const distDest = parseInt(destOption.dataset.dist);

    // 1. Approach Calculation (Baltzenheim -> Departure)
    // First 30km are free.
    const approachDist = Math.max(0, distDep - FREE_KM_LIMIT);

    // 2. Trip Calculation (Departure -> Destination)
    // Estimated logic: |distDest - distDep| * 1.2 for road factor
    // Minimum 10km for short trips
    let tripDist = Math.abs(distDest - distDep) * 1.2;
    if (tripDist < 10) tripDist = 10;

    tripDist = Math.round(tripDist);

    // Total Billable
    const totalDist = approachDist + tripDist;
    const finalPrice = Math.round(totalDist * PRICE_PER_KM);

    // Update UI
    outputScreen.classList.remove('hidden');
    priceDisplay.innerText = finalPrice;

    detailDisplay.innerHTML = `
        <div class="flex justify-between border-b border-white/10 pb-1 mb-1">
            <span>DÉPART : ${depOption.text}</span>
            <span>ARRIVÉE : ${destOption.text}</span>
        </div>
        <div>DIST. TRAJET : ~${tripDist} KM</div>
        ${approachDist > 0 ? `<div class="text-limit-red">APPROCHE FACTURÉE : +${approachDist} KM</div>` : `<div class="text-neon-green">APPROCHE OFFERTE (Zone Baltzenheim)</div>`}
    `;

    // Trigger Voice
    speakSummary({
        destination: destOption.text,
        distance: tripDist,
        price: finalPrice
    });
}

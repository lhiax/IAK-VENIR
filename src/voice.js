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

export const speakSummary = (data) => {
    if (!('speechSynthesis' in window)) return;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const { destination, price, distance } = data;

    // Pick a random quote
    const randomQuote = KITT_QUOTES[Math.floor(Math.random() * KITT_QUOTES.length)];

    // Construct the dialogue
    // Intro + Data + Outro/Humor
    const text = `Calcul terminé. Destination : ${destination}. Distance : ${distance} kilomètres. L'estimation est de ${price} euros. ${randomQuote}`;

    const utterance = new SpeechSynthesisUtterance(text);

    // Try to find a robotic or deep voice
    const voices = window.speechSynthesis.getVoices();
    // Prefer "Thomas" (French) or Google Français
    const frVoice = voices.find(v => v.name.includes('Thomas')) || voices.find(v => v.lang.startsWith('fr') && v.name.includes('Google')) || voices.find(v => v.lang.startsWith('fr'));

    if (frVoice) {
        utterance.voice = frVoice;
    }

    // Attempt to make it sound a bit more like KITT (lower pitch, slightly faster)
    utterance.pitch = 0.85;
    utterance.rate = 1.05;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
};

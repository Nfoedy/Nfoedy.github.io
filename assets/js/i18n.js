(() => {
  'use strict';
  const italian = {
  "About": "Chi sono",
  "Work": "Progetti",
  "Contact": "Contatti",
  "Primary": "Navigazione principale",
  "GAME & NETWORK PROGRAMMER": "PROGRAMMATORE GAMEPLAY E NETWORKING",
  "Game programmer focused on Unreal Engine 5, C++, multiplayer and networking. I build gameplay systems and explore how to make them work reliably across connected players.": "Programmatore specializzato in Unreal Engine 5, C++, multiplayer e networking. Sviluppo sistemi di gameplay e studio come farli funzionare in modo affidabile tra giocatori connessi.",
  "View Projects": "Esplora i progetti",
  "Currently Working On": "Attualmente al lavoro su",
  "Loading...": "Caricamento…",
  "Repo": "Repository",
  "Stack": "Tecnologie",
  "Tools": "Strumenti",
  "Projects": "Progetti",
  "Project categories": "Categorie dei progetti",
  "Personal Projects": "Progetti personali",
  "Showcase": "In evidenza",
  "Master Projects": "Progetti del Master",
  "University / Team": "Università / Gruppo",
  "Other Projects": "Altri progetti",
  "Smaller / experiments": "Piccoli progetti / Esperimenti",
  "Personal projects list": "Elenco dei progetti personali",
  "Master projects list": "Elenco dei progetti del Master",
  "Other projects list": "Elenco degli altri progetti",
  "Interested in collaboration or just want to connect?": "Vuoi collaborare o semplicemente metterti in contatto?",
  "Built with GitHub Pages": "Realizzato con GitHub Pages",
  "Project": "Progetto",
  "Close": "Chiudi",
  "YouTube video player": "Lettore video YouTube",
  "Video not available yet.": "Video non ancora disponibile.",
  "The README is not publicly available for this project.": "Il README di questo progetto non è pubblico.",
  "Loading README...": "Caricamento del README…",
  "No public README is available for this project.": "Non è disponibile un README pubblico per questo progetto.",
  "The README could not be loaded. Please try again or open the repository below.": "Impossibile caricare il README. Riprova oppure apri la repository qui sotto.",
  " My contribution: ": " Il mio contributo: ",
  "Source code not public": "Codice sorgente non pubblico",
  "View Repository on GitHub ↗": "Apri la repository su GitHub ↗",
  "View details for ": "Mostra i dettagli di ",
  "Team project": "Progetto di gruppo",
  "In development": "In sviluppo",
  "View details →": "Mostra dettagli →",
  "No projects in this section yet.": "Non ci sono ancora progetti in questa sezione.",
  "Recent work: ": "Lavoro recente: ",
  "Explore my projects below. Recent GitHub activity is currently unavailable.": "Esplora i miei progetti qui sotto. L’attività recente su GitHub non è al momento disponibile.",
  "This README is empty.": "Questo README è vuoto.",
  "Survival horror developed in Unreal Engine 5, featuring flashlight gameplay, stamina management, enemy AI and atmospheric exploration.": "Survival horror sviluppato in Unreal Engine 5, con meccaniche legate alla torcia, gestione della stamina, IA dei nemici ed esplorazione atmosferica.",
  "Modular shooting system in Unreal Engine 5 using Blueprint, focused on weapons, aiming, firing logic and reusable gameplay components.": "Sistema di sparo modulare in Unreal Engine 5 realizzato con Blueprint, dedicato ad armi, mira, logica di tiro e componenti di gameplay riutilizzabili.",
  "Final group project for the Master, currently in development.": "Progetto finale di gruppo del Master, attualmente in sviluppo.",
  "3D platformer developed in Unreal Engine 5.8 for the Game Engine Programming module.": "Platform 3D sviluppato in Unreal Engine 5.8 per il modulo di Game Engine Programming.",
  "Team project developed with Unity, C# and FMOD.": "Progetto di gruppo sviluppato con Unity, C# e FMOD.",
  "Unreal Engine game developed during the Master, featuring physics-based object interaction, a Chaos vehicle and runtime reflection.": "Gioco in Unreal Engine sviluppato durante il Master, con interazioni fisiche tra oggetti, un veicolo Chaos e reflection a runtime.",
  "A physics-based pinball game built in Unreal Engine 5": "Flipper basato sulla fisica, realizzato in Unreal Engine 5.",
  "Arkanoid-style game developed in C++ using Win32, DirectX 11, Direct2D and DirectWrite.": "Gioco in stile Arkanoid sviluppato in C++ con Win32, DirectX 11, Direct2D e DirectWrite.",
  "Unity mixed reality mini-game combining photogrammetry, Physical Camera calibration, and interactive football gameplay in a reconstructed real-world scene.": "Minigioco di calcio in realtà mista con Unity, che combina fotogrammetria, calibrazione della Physical Camera e interazioni in un ambiente reale ricostruito.",
  "University team project. Source code is not publicly available.": "Progetto universitario di gruppo. Il codice sorgente non è pubblico.",
  "A cross-platform 2D platform-jumping game built with C++ and raylib.": "Platform 2D multipiattaforma sviluppato in C++ con raylib.",
  "Custom C++ memory management with small-object allocation, allocation tracking and memory leak reporting.": "Sistema di gestione della memoria in C++ con allocazione di piccoli oggetti, tracciamento delle allocazioni e rilevamento delle perdite di memoria.",
  "Top-down 2D pixel-art RPG developed in C++ with SFML.": "Gioco di ruolo 2D in pixel art con visuale dall’alto, sviluppato in C++ con SFML.",
  "Demo website created for a fictional water company. Built with HTML, CSS, and JavaScript.": "Sito dimostrativo per un’azienda idrica immaginaria, realizzato con HTML, CSS e JavaScript."
};
  let language = 'en';
  try { if (localStorage.getItem('portfolio_language') === 'it') language = 'it'; } catch {}
  const t = text => language === 'it' ? (italian[text] ?? text) : text;
  function apply() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    for (const attr of ['aria-label', 'title']) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(node => {
        node.setAttribute(attr, t(node.getAttribute('data-i18n-' + attr)));
      });
    }
    const button = document.getElementById('languageToggle');
    button.textContent = language === 'en' ? 'IT' : 'EN';
    const label = language === 'en' ? 'Passa all’italiano' : 'Switch to English';
    button.setAttribute('aria-label', label);
    button.title = label;
  }
  window.portfolioI18n = { t, get language() { return language; } };
  apply();
  document.getElementById('languageToggle').addEventListener('click', () => {
    language = language === 'en' ? 'it' : 'en';
    try { localStorage.setItem('portfolio_language', language); } catch {}
    apply();
    document.dispatchEvent(new Event('portfolio:languagechange'));
  });
})();

// One entry per project. Order within each section is intentional.
// contribution: role/challenge use { en, it }; highlights is an array of { en, it }.
window.PORTFOLIO_PROJECTS = [
  {
    "repo": "Nfoedy/Obscura",
    "section": "personal",
    "name": "Obscura",
    "description": "Survival Horror developed in Unreal Engine 5, featuring flashlight gameplay, stamina management, enemy AI and atmospheric exploration.",
    "stack": [
      "Unreal Engine 5",
      "Blueprint",
      "C++"
    ],
    "youtube": "pcYNW_uPQRI",
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-05-11T16:58:14Z",
    "pushedAt": "2025-10-13T08:43:22Z"
  },
  {
    "repo": "Nfoedy/ShootingSystem",
    "section": "personal",
    "name": "ShootingSystem",
    "description": "Modular Shooting System in Unreal Engine 5.4 using Blueprint, focused on weapons, aiming, firing logic and reusable gameplay components.",
    "stack": [
      "Unreal Engine 5",
      "Blueprint"
    ],
    "youtube": null,
    "image": "assets/images/shooting-system-work-in-progress-v2.png?v=f40e088f",
    "imageAlt": "ShootingSystem — Work in progress",
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-05-11T16:57:06Z",
    "pushedAt": "2026-06-12T07:00:30Z"
  },
  {
    "repo": "MasterGameDev-VR/BuildFailed",
    "section": "master",
    "name": "BuildFailed",
    "description": "A 3D cooperative multiplayer platformer developed in Unreal Engine 5.8 using C++ and Blueprints, designed around teamwork and collaborative gameplay.",
    "stack": [],
    "youtube": null,
    "collaboration": true,
    "private": false,
    "status": "In development",
    "role": "",
    "updatedAt": null,
    "pushedAt": null,
    "contribution": {
      "role": {
        "it": "Sviluppo dei sistemi multiplayer e networking in C++",
        "en": "Multiplayer systems and networking development in C++"
      },
      "highlights": [
        {
          "it": "Movimento multiplayer e Network Prediction — Implementazione della Client-Side Prediction per il movimento multiplayer. Sincronizzazione di Dash, Roll, Sprint e Jump tramite C++, RPC e Network Prediction.",
          "en": "Multiplayer Character Movement & Network Prediction — Implemented client-side prediction for multiplayer movement. Synchronized Dash, Roll, Sprint and Jump using C++, RPCs and Network Prediction."
        },
        {
          "it": "Sistema di pausa multiplayer — Sviluppo di un sistema di pausa cooperativa gestito dal server. Sincronizzazione degli stati dei giocatori e ripresa del gameplay tramite sistema Ready.",
          "en": "Multiplayer Pause System — Developed a server-managed cooperative pause system. Synchronized player states and resumed gameplay through a Ready system."
        },
        {
          "it": "Disconnessione e riconnessione dei giocatori — Gestione delle disconnessioni e riconnessioni multiplayer. Riconoscimento dei giocatori tramite UniqueNetId, ripristino degli stati e timeout di riconnessione.",
          "en": "Player Disconnection & Reconnection — Handled multiplayer disconnections and reconnections. Identified players through UniqueNetId, restored their states and managed reconnection timeouts."
        },
        {
          "it": "Completamento dei livelli e Seamless Travel — Implementazione del completamento cooperativo dei livelli. Gestione del cambio mappa tramite Seamless Travel, preservando l’identità dei giocatori.",
          "en": "Level Completion & Seamless Travel — Implemented cooperative level completion. Managed map transitions through Seamless Travel while preserving player identity."
        },
        {
          "it": "Sistema di respawn multiplayer — Sviluppo di un sistema di respawn autoritativo con punti dedicati ai giocatori. Gestione del riposizionamento e blocco temporaneo degli input.",
          "en": "Multiplayer Respawn System — Developed an authoritative respawn system with dedicated player spawn points. Handled repositioning and temporary input blocking."
        },
        {
          "it": "Dialoghi locali e condivisi — Integrazione del networking nel sistema di dialoghi Inkpot. Gestione di dialoghi locali e condivisi, avanzamento indipendente e sincronizzazione degli stati Ready.",
          "en": "Local & Shared Dialogue System — Integrated networking into the Inkpot dialogue system. Handled local and shared dialogues, independent progression and synchronized Ready states."
        },
        {
          "it": "Architettura multiplayer e organizzazione del codice — Organizzazione delle responsabilità tra GameMode, GameState, PlayerController e PlayerState. Utilizzo di interfacce C++, RPC, RepNotify e refactoring del codice multiplayer.",
          "en": "Multiplayer Architecture & Code Organization — Organized responsibilities across GameMode, GameState, PlayerController and PlayerState. Used C++ interfaces, RPCs and RepNotify, and refactored multiplayer code."
        },
        {
          "it": "Test e debug multiplayer — Test in configurazione Listen Server, anche su due PC. Debug della replicazione, della sincronizzazione e dei principali sistemi multiplayer.",
          "en": "Multiplayer Testing & Debugging — Tested Listen Server configurations, including sessions across two PCs. Debugged replication, synchronization and core multiplayer systems."
        }
      ],
      "challenge": {}
    },
    "readmeHtml": {
      "it": "<h1>Build Failed!</h1>\n<h2>🎮 Panoramica</h2>\n<p><strong>Build Failed!</strong> è un platformer 3D cooperativo per due giocatori, in terza persona, sviluppato in gruppo con <strong>Unreal Engine 5.8, C++ e Blueprint</strong> come progetto finale del Master.</p>\n<p>I giocatori si ritrovano all’interno di una build incompleta di un videogioco, nei panni di due avatar placeholder mai sostituiti con personaggi definitivi. Bug, sistemi malfunzionanti e problemi di fisica diventano strumenti da sfruttare per superare gli ostacoli.</p>\n<p>L’obiettivo è attraversare le diverse stanze della build collaborando, sperimentando e trasformando gli errori del gioco in soluzioni.</p>\n<h2>🎯 Obiettivi del progetto</h2>\n<p>Il progetto punta a rendere indispensabile la collaborazione tra i due giocatori. Ogni stanza introduce una meccanica specifica, che richiede di comprendere il funzionamento dell’ambiente e coordinare le proprie azioni.</p>\n<p>Il design si basa su cinque principi:</p>\n<ul><li><strong>Meccaniche per stanza:</strong> ogni ambiente introduce una regola riconoscibile.</li><li><strong>Bug come gameplay:</strong> i malfunzionamenti diventano strumenti per risolvere gli enigmi.</li><li><strong>Cooperazione necessaria:</strong> entrambi i giocatori contribuiscono alla progressione.</li><li><strong>Fisica controllata:</strong> le interazioni fisiche supportano puzzle comprensibili.</li><li><strong>Umorismo leggibile:</strong> la comicità accompagna il gameplay senza ostacolarne la comprensione.</li></ul>\n<h2>🕹️ Gameplay</h2>\n<p>Il ciclo di gioco segue quattro fasi:</p>\n<ol><li>Entrare in una nuova stanza della build.</li><li>Individuarne il malfunzionamento.</li><li>Sperimentare e coordinarsi con l’altro giocatore.</li><li>Sfruttare la meccanica per raggiungere l’area successiva.</li></ol>\n<p>Le abilità di base comprendono movimento, salto, sprint, dash, roll e interazione. La progressione introduce situazioni che richiedono coordinazione e precisione crescenti.</p>\n<h3>Le stanze</h3>\n<p>Il Game Design Document prevede cinque ambienti principali:</p>\n<table><thead><tr><th>Stanza</th><th>Meccanica</th></tr></thead><tbody><tr><td><strong>Tutorial Room</strong></td><td>Introduzione ai controlli e alla cooperazione attraverso una procedura di calibrazione difettosa.</td></tr><tr><td><strong>Fundamentals Room</strong></td><td>Controllo delle collisioni e modifica delle proprietà fisiche per creare percorsi e attivare meccanismi.</td></tr><tr><td><strong>Upside Room</strong></td><td>Manipolazione della gravità dei personaggi e di oggetti specifici per risolvere puzzle cooperativi.</td></tr><tr><td><strong>Scale Calibration Room</strong></td><td>Scambio delle dimensioni dei giocatori, sfruttando differenze di peso e movimento.</td></tr><tr><td><strong>Merge Room</strong></td><td>Scontro finale in cui i due giocatori condividono un unico personaggio e si dividono i comandi.</td></tr></tbody></table>\n<h2>🌐 Multiplayer e Networking</h2>\n<p>La componente online è pensata per mantenere coerenti le azioni e gli stati condivisi tra i due giocatori.</p>\n<p>I sistemi sviluppati comprendono:</p>\n<ul><li>Movimento multiplayer con <strong>Client-Side Prediction</strong> e sincronizzazione delle abilità.</li><li>Pausa cooperativa gestita dal server, con ripresa tramite conferma dello stato <strong>Ready</strong>.</li><li>Gestione di disconnessione e riconnessione, identificazione tramite <strong>UniqueNetId</strong> e ripristino degli stati.</li><li>Completamento cooperativo dei livelli e cambio mappa tramite <strong>Seamless Travel</strong>.</li><li>Respawn autoritativo con punti dedicati e gestione temporanea degli input.</li><li>Dialoghi locali e condivisi attraverso l’integrazione del networking nel sistema <strong>Inkpot</strong>.</li></ul>\n<p>Le funzionalità vengono testate in configurazione <strong>Listen Server</strong>, anche attraverso sessioni su due PC.</p>\n<h2>🧠 Architettura tecnica</h2>\n<p>Le responsabilità multiplayer sono distribuite tra <strong>GameMode, GameState, PlayerController e PlayerState</strong>.</p>\n<p>L’implementazione utilizza <strong>C++, Blueprint, interfacce C++, RPC e RepNotify</strong> per organizzare la comunicazione tra i sistemi, la gestione degli eventi e l’aggiornamento degli stati replicati.</p>\n<p>Lo sviluppo comprende attività di refactoring e debug della replicazione, con particolare attenzione alla sincronizzazione e alle transizioni tra gli stati della partita.</p>\n<h2>🎭 Ambientazione e tono</h2>\n<p>Build Failed! ironizza sul processo di sviluppo dei videogiochi: documentazione obsoleta, bug trasformati in feature e richieste che cambiano continuamente.</p>\n<p>Il <strong>Lead QA</strong> accompagna i giocatori con istruzioni spesso superate, mentre il <strong>Producer</strong> rappresenta l’antagonista finale, introducendo modifiche e ostacoli durante la validazione della build.</p>\n<p>L’umorismo nasce dalle situazioni di gioco e dai sistemi stessi.</p>\n<h2>🚧 Stato del progetto</h2>\n<p><strong>Il progetto è attualmente in sviluppo.</strong></p>\n<p>Le stanze descritte rappresentano la struttura prevista dal Game Design Document; il loro livello di completamento può variare. Le attività successive comprendono il completamento dei contenuti, l’integrazione delle meccaniche cooperative e ulteriori test multiplayer.</p>\n<h2>🛠️ Tecnologie</h2>\n<ul><li>Unreal Engine 5.8</li><li>C++ e Blueprint</li><li>Networking e replicazione di Unreal Engine</li><li>Network Prediction</li><li>Inkpot</li></ul>",
      "en": "<h1>Build Failed!</h1>\n<h2>🎮 Overview</h2>\n<p><strong>Build Failed!</strong> is a third-person 3D cooperative platformer for two players, developed as a team with <strong>Unreal Engine 5.8, C++ and Blueprints</strong> as the final project for the Master’s program.</p>\n<p>Players find themselves inside an unfinished video game build, controlling two placeholder avatars that were never replaced with final characters. Bugs, malfunctioning systems and physics problems become tools for overcoming obstacles.</p>\n<p>The goal is to progress through the rooms of the build by collaborating, experimenting and turning the game’s errors into solutions.</p>\n<h2>🎯 Project Goals</h2>\n<p>The project aims to make cooperation between both players essential. Each room introduces a specific mechanic that requires understanding the environment and coordinating actions.</p>\n<p>The design is based on five principles:</p>\n<ul><li><strong>Room-Based Mechanics:</strong> each environment introduces a recognizable rule.</li><li><strong>Bugs as Gameplay:</strong> malfunctions become tools for solving puzzles.</li><li><strong>Mandatory Cooperation:</strong> both players contribute to progression.</li><li><strong>Controlled Physics:</strong> physical interactions support understandable puzzles.</li><li><strong>Readable Comedy:</strong> humor accompanies gameplay without making it harder to understand.</li></ul>\n<h2>🕹️ Gameplay</h2>\n<p>The gameplay loop follows four steps:</p>\n<ol><li>Enter a new room in the build.</li><li>Identify its malfunction.</li><li>Experiment and coordinate with the other player.</li><li>Use the mechanic to reach the next area.</li></ol>\n<p>Basic abilities include movement, jumping, sprinting, dashing, rolling and interaction. Progression introduces situations requiring increasing coordination and precision.</p>\n<h3>The Rooms</h3>\n<p>The Game Design Document outlines five main environments:</p>\n<table><thead><tr><th>Room</th><th>Mechanic</th></tr></thead><tbody><tr><td><strong>Tutorial Room</strong></td><td>Introduces controls and cooperation through a faulty calibration procedure.</td></tr><tr><td><strong>Fundamentals Room</strong></td><td>Players control collisions and modify physical properties to create paths and activate mechanisms.</td></tr><tr><td><strong>Upside Room</strong></td><td>Manipulates character gravity and specific objects to solve cooperative puzzles.</td></tr><tr><td><strong>Scale Calibration Room</strong></td><td>Players swap sizes, using differences in weight and movement.</td></tr><tr><td><strong>Merge Room</strong></td><td>A final encounter in which both players share a single character and split its controls.</td></tr></tbody></table>\n<h2>🌐 Multiplayer &amp; Networking</h2>\n<p>The online component is designed to keep shared actions and states consistent between both players.</p>\n<p>Implemented systems include:</p>\n<ul><li>Multiplayer movement with <strong>Client-Side Prediction</strong> and ability synchronization.</li><li>Server-managed cooperative pause, with gameplay resuming after players confirm their <strong>Ready</strong> state.</li><li>Disconnection and reconnection handling, identification through <strong>UniqueNetId</strong> and state restoration.</li><li>Cooperative level completion and map transitions through <strong>Seamless Travel</strong>.</li><li>Authoritative respawning with dedicated spawn points and temporary input management.</li><li>Local and shared dialogues through networking integration with <strong>Inkpot</strong>.</li></ul>\n<p>Features are tested in a <strong>Listen Server</strong> configuration, including sessions across two PCs.</p>\n<h2>🧠 Technical Architecture</h2>\n<p>Multiplayer responsibilities are distributed across <strong>GameMode, GameState, PlayerController and PlayerState</strong>.</p>\n<p>The implementation uses <strong>C++, Blueprints, C++ interfaces, RPCs and RepNotify</strong> to organize communication between systems, event handling and replicated state updates.</p>\n<p>Development includes refactoring and replication debugging, with particular attention to synchronization and transitions between match states.</p>\n<h2>🎭 Setting &amp; Tone</h2>\n<p>Build Failed! takes a humorous look at video game development: outdated documentation, bugs turned into features and constantly changing requests.</p>\n<p>The <strong>Lead QA</strong> guides players with instructions that are often out of date, while the <strong>Producer</strong> serves as the final antagonist, introducing changes and obstacles during build validation.</p>\n<p>The humor comes from gameplay situations and the systems themselves.</p>\n<h2>🚧 Project Status</h2>\n<p><strong>The project is currently in development.</strong></p>\n<p>The rooms described represent the structure planned in the Game Design Document; their completion status may vary. Upcoming work includes completing content, integrating cooperative mechanics and further multiplayer testing.</p>\n<h2>🛠️ Technologies</h2>\n<ul><li>Unreal Engine 5.8</li><li>C++ and Blueprints</li><li>Unreal Engine networking and replication</li><li>Network Prediction</li><li>Inkpot</li></ul>"
    }
  },
  {
    "repo": "Nfoedy/Sandborn",
    "section": "master",
    "name": "Sandborn",
    "description": "A single-player 3D platformer developed in Unreal Engine 5.8 using C++ and Blueprints, featuring environmental puzzles, collectibles, interactive platforms, and enemy AI, for the Game Engine Programming module.",
    "stack": [
      "Unreal Engine 5",
      "C++"
    ],
    "youtube": null,
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-10-14T13:04:24Z",
    "pushedAt": "2026-10-01T13:28:50Z",
    "image": "assets/images/sandborn-work-in-progress.png",
    "imageAlt": "Sandborn — Work in progress"
  },
  {
    "repo": "Bosang6/PaoPao",
    "section": "master",
    "name": "PaoPao",
    "description": "A Bomberman-inspired mobile game developed in Unity 6000.3.6f1 using C# and Photon PUN, featuring single-player gameplay with enemy AI and online multiplayer with synchronized bomb mechanics.",
    "stack": [
      "Unity",
      "C#",
      "FMOD"
    ],
    "youtube": "7MZSeV5ZUPU",
    "collaboration": true,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-10-06T21:26:45Z",
    "pushedAt": "2026-10-06T21:31:24Z",
    "variants": [
      {
        "label": "Single player",
        "ref": "release/v1.0.0",
        "youtube": "7MZSeV5ZUPU",
        "contribution": {
          "role": {
            "it": "Sistemi di sessione, UI e integrazione audio",
            "en": "Session systems, UI and audio integration"
          },
          "highlights": [
            {
              "it": "Creazione dei menu, della selezione di personaggi e mappa e delle schermate di vittoria e sconfitta.",
              "en": "Created menus, character and map selection, and victory and defeat screens."
            },
            {
              "it": "Sviluppo del flusso dal menu alla partita: configurazione degli slot per giocatori e AI, gestione della sessione, caricamento della mappa e spawn dei personaggi.",
              "en": "Developed the menu-to-match flow: player and AI slot configuration, session management, map loading and character spawning."
            },
            {
              "it": "Integrazione dei controlli mobile nell’interfaccia di gioco.",
              "en": "Integrated mobile controls into the game interface."
            },
            {
              "it": "Realizzazione dell’HUD con collegamento dinamico degli indicatori delle vite ai personaggi.",
              "en": "Built the HUD with life indicators dynamically linked to characters."
            },
            {
              "it": "Inserimento di suoni e musiche in FMOD e implementazione delle impostazioni audio collegate ai menu.",
              "en": "Added sound effects and music in FMOD and implemented audio settings connected to the menus."
            }
          ],
          "challenge": {
            "it": "Organizzare l’inizializzazione della partita separando i dati dei personaggi dalle informazioni runtime e collegando le scelte del menu allo spawn nella mappa selezionata.",
            "en": "Organized match initialization by separating character data from runtime state and connecting menu selections to spawning on the selected map."
          }
        }
      },
      {
        "label": "Multiplayer",
        "ref": "release/v2.0.0",
        "youtube": "vvPt_-8rNBo",
        "contribution": {
          "role": {
            "it": "Integrazione multiplayer e networking con Photon PUN",
            "en": "Multiplayer and networking integration with Photon PUN"
          },
          "highlights": [
            {
              "it": "Realizzazione della UI delle stanze multiplayer, con menu dedicati alla creazione delle stanze, all’accesso alle partite disponibili e alla gestione della lobby. Integrazione con la connessione a Photon e la selezione sincronizzata di personaggi e mappa.",
              "en": "Built the multiplayer room UI, with dedicated menus for room creation, joining available matches and lobby management. Integrated it with Photon connectivity and synchronized character and map selection."
            },
            {
              "it": "Creazione delle schermate di vittoria e sconfitta per il multiplayer, con un sistema di conferma dello stato “pronto” dei giocatori per coordinare l’avvio di una nuova partita.",
              "en": "Created multiplayer victory and defeat screens, with a player readiness confirmation system to coordinate the start of a new match."
            },
            {
              "it": "Adattamento dei player al multiplayer: distinzione tra giocatori locali, remoti e AI, controllo dell’ownership tramite PhotonView e sincronizzazione del movimento.",
              "en": "Adapted players for multiplayer: distinguished local players, remote players and AI, handled ownership through PhotonView, and synchronized movement."
            },
            {
              "it": "Implementazione del flusso RPC per le bombe: richiesta del client e validazione sul Master Client di ownership, limite delle bombe e disponibilità della cella prima dello spawn in rete.",
              "en": "Implemented the bomb RPC flow: client requests and Master Client validation of ownership, bomb limits and cell availability before network spawning."
            },
            {
              "it": "Gestione sul Master Client di esplosioni, danni e morte, con sincronizzazione dei muri distruttibili e dei risultati della partita.",
              "en": "Handled explosions, damage and death on the Master Client, synchronizing destructible walls and match results."
            }
          ],
          "challenge": {
            "it": "Adattare il gameplay alla rete riutilizzando i componenti comuni del Single player e separando le responsabilità di networking. Le azioni critiche vengono validate dal Master Client per mantenere coerente lo stato della partita tra i partecipanti.",
            "en": "Adapted gameplay for networking by reusing shared Single player components and separating networking responsibilities. Critical actions are validated by the Master Client to keep match state consistent across participants."
          }
        }
      }
    ],
    "contribution": {
      "role": {},
      "highlights": [],
      "challenge": {}
    }
  },
  {
    "repo": "Nfoedy/Goodbye",
    "section": "master",
    "name": "Goodbye",
    "description": "A Physics-based Single-Player moving game developed in Unreal Engine 5.8 using C++ and Blueprints, featuring object interactions and Chaos Vehicles.",
    "stack": [
      "Unreal Engine 5",
      "C++",
      "Chaos Vehicles"
    ],
    "youtube": "DE4YPLTzUfA",
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-08-24T07:35:33Z",
    "pushedAt": "2026-08-24T07:35:03Z"
  },
  {
    "repo": "Nfoedy/IronSpin",
    "section": "master",
    "name": "IronSpin",
    "description": "An arcade pinball game developed in Unreal Engine 5.7 using Blueprints, featuring physics-based gameplay, interactive bumpers, and score tracking.",
    "stack": [
      "Unreal Engine 5",
      "Blueprint"
    ],
    "youtube": "xUOsMmtIoJg",
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-05-11T13:37:10Z",
    "pushedAt": "2026-05-11T09:22:46Z"
  },
  {
    "repo": "Nfoedy/ArkanoidDX",
    "section": "master",
    "name": "ArkanoidDX",
    "description": "Arkanoid-style game developed in C++ using Win32, DirectX 11, Direct2D and DirectWrite.",
    "stack": [
      "C++",
      "DirectX 11"
    ],
    "youtube": "1z2ApO88u-4",
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-06-02T08:56:16Z",
    "pushedAt": "2026-06-02T09:22:05Z"
  },
  {
    "repo": "Nfoedy/Bentegoal",
    "section": "master",
    "name": "Bentegoal",
    "description": "A football mini-game developed in Unity 2022.3.62f3 using C#, combining photogrammetry, Physical Camera calibration, and interactive gameplay in a reconstructed real-world environment.",
    "stack": [
      "Unity",
      "C#"
    ],
    "youtube": "K4X_U-iW0GA",
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-05-13T16:42:28Z",
    "pushedAt": "2026-05-13T16:42:24Z"
  },
  {
    "repo": "Lord-Platypus/mask_museum",
    "section": "master",
    "name": "Mask Museum",
    "description": "A horror game developed in Unity using C# for the Global Game Jam, featuring exploration and a mask mechanic that reveals hidden enemies and environmental elements.",
    "stack": [
      "Unity",
      "C#"
    ],
    "youtube": "560ed40ekOk",
    "collaboration": true,
    "private": true,
    "status": "",
    "role": "",
    "updatedAt": null,
    "pushedAt": null,
    "contribution": {
      "role": {
        "it": "Sviluppo UI e contributi all’IA dei nemici e agli effetti visivi",
        "en": "UI development and contributions to enemy AI and visual effects"
      },
      "highlights": [
        {
          "it": "Creazione dell’interfaccia utente, del menu principale e del menu di game over.",
          "en": "Created the user interface, main menu and game over menu."
        },
        {
          "it": "Contributo allo sviluppo dell’intelligenza artificiale dei nemici.",
          "en": "Contributed to enemy AI development."
        },
        {
          "it": "Collaborazione con il graphic designer durante l’importazione degli asset di gioco, curata dal designer.",
          "en": "Collaborated with the graphic designer during the game asset import process, which was handled by the designer."
        },
        {
          "it": "Contributo all’effetto visivo di chiusura dello schermo alla morte del giocatore.",
          "en": "Contributed to the screen-closing visual effect triggered by the player’s death."
        }
      ],
      "challenge": {}
    },
    "showPrivateRepo": true,
    "readmeHtml": {
      "it": "<h1>Mask Museum</h1><h2>Panoramica</h2><p><strong>Mask Museum</strong> è un gioco sviluppato in gruppo con <strong>Unity e C#</strong> durante la <strong>Global Game Jam di Verona del 30 gennaio 2026</strong>, sul tema <strong>“The mask”</strong>.</p><p>Il protagonista è il guardiano di un museo infestato. Per sopravvivere e raggiungere l’uscita deve utilizzare una maschera che cambia ciò che può vedere, alternando la percezione dell’ambiente e dei mostri che lo inseguono.</p><h2>La meccanica della maschera</h2><p>La maschera permette di passare tra due modalità di visione:</p><ul><li><strong>Maschera indossata:</strong> i mostri sono visibili, mentre gli oggetti dell’ambiente vengono nascosti.</li><li><strong>Maschera rimossa:</strong> gli oggetti tornano visibili, ma i mostri non possono essere visti.</li></ul><p>Ogni modalità offre informazioni diverse e incomplete. Il giocatore deve scegliere quando indossare o togliere la maschera per orientarsi nel museo e individuare i pericoli.</p><h2>Obiettivo del gioco</h2><p>Attraversare il museo e raggiungere l’uscita senza essere uccisi dai mostri, sfruttando le due modalità di visione per trovare la via di fuga.</p><h2>Tecnologie</h2><ul><li><strong>Unity</strong> — motore di gioco.</li><li><strong>C#</strong> — programmazione delle logiche di gioco.</li></ul><h2>Video</h2><p><a href=\"https://www.youtube.com/watch?v=560ed40ekOk\">Guarda il gameplay di Mask Museum</a></p><h2>Repository</h2><p>Il codice sorgente è conservato in una <strong>repository privata</strong>, accessibile agli utenti autorizzati.</p><p><a href=\"https://github.com/Lord-Platypus/mask_museum\">Repository di Mask Museum</a></p>",
      "en": "<h1>Mask Museum</h1><h2>Overview</h2><p><strong>Mask Museum</strong> is a team project developed with <strong>Unity and C#</strong> during the <strong>Global Game Jam in Verona on January 30, 2026</strong>, based on the theme <strong>“The mask”</strong>.</p><p>The protagonist is the guard of a haunted museum. To survive and reach the exit, the guard must use a mask that changes what is visible, switching between seeing the environment and the monsters in pursuit.</p><h2>The mask mechanic</h2><p>The mask allows the player to switch between two views:</p><ul><li><strong>Mask on:</strong> monsters are visible, while objects in the environment are hidden.</li><li><strong>Mask off:</strong> objects become visible again, but monsters cannot be seen.</li></ul><p>Each view provides different, incomplete information. The player must decide when to put on or remove the mask to navigate the museum and identify threats.</p><h2>Game objective</h2><p>Cross the museum and reach the exit without being killed by monsters, using both views to find an escape route.</p><h2>Technologies</h2><ul><li><strong>Unity</strong> — game engine.</li><li><strong>C#</strong> — gameplay programming.</li></ul><h2>Video</h2><p><a href=\"https://www.youtube.com/watch?v=560ed40ekOk\">Watch the Mask Museum gameplay</a></p><h2>Repository</h2><p>The source code is stored in a <strong>private repository</strong>, accessible to authorized users.</p><p><a href=\"https://github.com/Lord-Platypus/mask_museum\">Mask Museum repository</a></p>"
    }
  },
  {
    "repo": "Bosang6/cpp-raylib-platformer",
    "section": "master",
    "name": "Breakline",
    "description": "A 2D platformer developed in C++ using raylib, featuring obstacles, collectibles, and a modular pickup system with temporary gameplay effects.",
    "stack": [
      "C++",
      "Raylib"
    ],
    "youtube": "gxQkSLCaFXk",
    "collaboration": true,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2025-12-22T14:05:38Z",
    "pushedAt": "2026-02-19T09:33:00Z",
    "contribution": {
      "role": {
        "it": "Programmazione gameplay — sistema di pickup ed effetti",
        "en": "Gameplay programming — pickup and effect systems"
      },
      "highlights": [
        {
          "it": "Sviluppo in C++ con raylib di un sistema estendibile di pickup, organizzato attorno a una classe base, tipologie specializzate e un manager dedicato.",
          "en": "Developed an extensible pickup system in C++ with raylib, structured around a base class, specialized pickup types and a dedicated manager."
        },
        {
          "it": "Implementazione di monete, potenziamenti del salto, rallentamenti, moltiplicatori del punteggio e inversione dei controlli, con integrazione nel gameplay e nel sistema di punteggio.",
          "en": "Implemented coins, jump boosts, slow effects, score multipliers and reversed controls, integrating them with gameplay and scoring."
        },
        {
          "it": "Realizzazione di un sistema per gestire gli effetti temporanei e la loro durata.",
          "en": "Built a system to manage temporary effects and their duration."
        },
        {
          "it": "Integrazione del feedback visivo e sonoro della raccolta attraverso messaggi UI, animazioni, texture e suoni.",
          "en": "Integrated visual and audio feedback for pickup collection through UI messages, animations, textures and sounds."
        },
        {
          "it": "Interventi sulla gestione e sulla frequenza di generazione dei pickup.",
          "en": "Refined pickup management and spawn frequency."
        }
      ],
      "challenge": {
        "it": "Separare la gestione degli oggetti collezionabili da quella degli effetti sul personaggio, mantenendo una struttura estendibile per aggiungere nuovi bonus e penalità.",
        "en": "Separated collectible management from character effects, keeping the structure extensible for additional bonuses and penalties."
      }
    },
    "readmeHtml": {
      "it": "<h1>Breakline</h1>\n<h2>🎮 Panoramica</h2>\n<p><strong>Breakline</strong> è un platform 2D sviluppato in gruppo con <strong>C++ e raylib</strong>, incentrato su salti, ostacoli e oggetti collezionabili.</p>\n<p>Il giocatore deve avanzare tra le piattaforme, raccogliere monete e gestire gli effetti dei pickup incontrati lungo il percorso. Bonus e penalità modificano temporaneamente il gameplay, richiedendo di adattare movimento e scelte alla situazione.</p>\n<h2>🎯 Obiettivi del progetto</h2>\n<p>Il progetto combina le meccaniche di un platform arcade con un’organizzazione modulare del codice.</p>\n<p>Gli obiettivi principali comprendono:</p>\n<ul><li>Realizzare movimento e interazioni tra personaggio e piattaforme.</li><li>Gestire progressione e punteggio durante la partita.</li><li>Introdurre pickup con effetti differenti sul gameplay.</li><li>Separare le responsabilità dei sistemi per facilitarne manutenzione ed estensione.</li><li>Fornire feedback visivi e sonori alle azioni del giocatore.</li></ul>\n<h2>🕹️ Gameplay</h2>\n<p>Il giocatore salta tra le piattaforme, supera gli ostacoli e raccoglie gli oggetti presenti nel livello.</p>\n<p>Le piattaforme e i pickup scorrono verso il basso durante la progressione, mantenendo il percorso in movimento. Il punteggio accompagna l’avanzamento e può essere incrementato attraverso la raccolta delle monete e l’utilizzo dei bonus.</p>\n<h3>Pickup ed effetti</h3>\n<p>Gli oggetti collezionabili introducono vantaggi e penalità:</p>\n<table><thead><tr><th>Pickup</th><th>Effetto</th></tr></thead><tbody><tr><td><strong>Coin</strong></td><td>Incrementa il punteggio.</td></tr><tr><td><strong>Spring</strong></td><td>Potenzia il salto del personaggio.</td></tr><tr><td><strong>Slow</strong></td><td>Applica un rallentamento temporaneo.</td></tr><tr><td><strong>Score Multiplier</strong></td><td>Moltiplica temporaneamente il punteggio ottenuto.</td></tr><tr><td><strong>Reverse Control</strong></td><td>Inverte temporaneamente i controlli.</td></tr></tbody></table>\n<p>Gli effetti modificano le condizioni di gioco e richiedono al giocatore di adattarsi mentre prosegue tra le piattaforme.</p>\n<h2>🧠 Architettura tecnica</h2>\n<p>Il sistema dei pickup è organizzato attorno a una classe base astratta, <strong><code>Pickup</code></strong>, dalla quale derivano le diverse tipologie di oggetti collezionabili.</p>\n<p>Il <strong><code>PickupManager</code></strong> gestisce la generazione, l’aggiornamento, il disegno e la rimozione dei pickup, oltre alle interazioni con il personaggio.</p>\n<p>La gestione degli effetti temporanei è affidata a un sistema separato, <strong><code>EffectSystem</code></strong>, che tiene traccia degli effetti attivi, della loro durata e dei modificatori applicati al gameplay.</p>\n<p>Questa suddivisione permette di aggiungere nuove tipologie di pickup mantenendo distinte la gestione degli oggetti e quella dei loro effetti.</p>\n<h2>🔊 Interfaccia e feedback</h2>\n<p>La raccolta degli oggetti è accompagnata da messaggi nell’interfaccia, animazioni e suoni.</p>\n<p>L’HUD mostra il punteggio e le informazioni sugli effetti attivi, compreso il tempo rimanente, aiutando il giocatore a riconoscere i cambiamenti applicati al personaggio.</p>\n<h2>🛠️ Tecnologie</h2>\n<ul><li><strong>C++</strong> — logica di gioco e organizzazione dei sistemi.</li><li><strong>raylib</strong> — rendering 2D, input e audio.</li><li><strong>Libreria standard C++</strong> — contenitori, gestione delle risorse e generazione casuale.</li></ul>\n<h2>📸 Video</h2>\n<p><a href=\"https://www.youtube.com/watch?v=gxQkSLCaFXk\">Guarda il gameplay di Breakline</a></p>",
      "en": "<h1>Breakline</h1>\n<h2>🎮 Overview</h2>\n<p><strong>Breakline</strong> is a 2D platformer developed as a team with <strong>C++ and raylib</strong>, focused on jumping, obstacles and collectibles.</p>\n<p>Players progress across platforms, collect coins and manage the effects of pickups encountered along the way. Bonuses and penalties temporarily change gameplay, requiring players to adapt their movement and decisions to the situation.</p>\n<h2>🎯 Project Goals</h2>\n<p>The project combines arcade platforming mechanics with modular code organization.</p>\n<p>The main goals include:</p>\n<ul><li>Implement character movement and interactions with platforms.</li><li>Manage progression and scoring during a match.</li><li>Introduce pickups with different gameplay effects.</li><li>Separate system responsibilities to support maintenance and extension.</li><li>Provide visual and audio feedback for player actions.</li></ul>\n<h2>🕹️ Gameplay</h2>\n<p>Players jump between platforms, overcome obstacles and collect items throughout the level.</p>\n<p>Platforms and pickups scroll downwards as players progress, keeping the course in motion. The score tracks progression and can be increased by collecting coins and using bonuses.</p>\n<h3>Pickups &amp; Effects</h3>\n<p>Collectibles introduce advantages and penalties:</p>\n<table><thead><tr><th>Pickup</th><th>Effect</th></tr></thead><tbody><tr><td><strong>Coin</strong></td><td>Increases the score.</td></tr><tr><td><strong>Spring</strong></td><td>Boosts the character’s jump.</td></tr><tr><td><strong>Slow</strong></td><td>Applies a temporary slowdown.</td></tr><tr><td><strong>Score Multiplier</strong></td><td>Temporarily multiplies earned points.</td></tr><tr><td><strong>Reverse Control</strong></td><td>Temporarily reverses the controls.</td></tr></tbody></table>\n<p>Effects change the conditions of play and require players to adapt as they advance across platforms.</p>\n<h2>🧠 Technical Architecture</h2>\n<p>The pickup system is built around an abstract base class, <strong><code>Pickup</code></strong>, from which the different collectible types derive.</p>\n<p>The <strong><code>PickupManager</code></strong> handles pickup generation, updates, drawing and removal, as well as interactions with the character.</p>\n<p>Temporary effects are handled by a separate system, <strong><code>EffectSystem</code></strong>, which tracks active effects, their duration and the modifiers applied to gameplay.</p>\n<p>This separation allows new pickup types to be added while keeping collectible management distinct from effect management.</p>\n<h2>🔊 Interface &amp; Feedback</h2>\n<p>Collecting items is accompanied by interface messages, animations and sounds.</p>\n<p>The HUD displays the score and information about active effects, including their remaining duration, helping players recognize changes applied to the character.</p>\n<h2>🛠️ Technologies</h2>\n<ul><li><strong>C++</strong> — gameplay logic and system organization.</li><li><strong>raylib</strong> — 2D rendering, input and audio.</li><li><strong>C++ standard library</strong> — containers, resource management and random generation.</li></ul>\n<h2>📸 Video</h2>\n<p><a href=\"https://www.youtube.com/watch?v=gxQkSLCaFXk\">Watch the Breakline gameplay</a></p>"
    }
  },
  {
    "repo": "Nfoedy/MemoryManagerSystem",
    "section": "master",
    "name": "MemoryManagerSystem",
    "description": "Custom C++ Memory Manager System.",
    "stack": [
      "C++"
    ],
    "youtube": null,
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2026-05-24T18:24:25Z",
    "pushedAt": "2026-05-24T18:24:18Z"
  },
  {
    "repo": "Nfoedy/Fablora",
    "section": "other",
    "name": "Fablora",
    "description": "A 2D top-down pixel-art RPG developed in C++ using SFML, focused on character progression, exploration, and combat.",
    "stack": [
      "C++",
      "SFML"
    ],
    "youtube": null,
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2025-10-13T09:29:07Z",
    "pushedAt": "2025-10-13T09:25:32Z"
  },
  {
    "repo": "Nfoedy/aquaflow",
    "section": "other",
    "name": "aquaflow",
    "description": "Demo website created for a fictional water company. Built with HTML, CSS, and JavaScript.",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "youtube": null,
    "collaboration": false,
    "private": false,
    "status": "",
    "role": "",
    "updatedAt": "2025-10-14T09:32:55Z",
    "pushedAt": "2025-10-14T09:32:51Z"
  }
];

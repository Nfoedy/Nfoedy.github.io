// One entry per project. Order within each section is intentional.
// contribution: role/challenge use { en, it }; highlights is an array of { en, it }.
window.PORTFOLIO_PROJECTS = [
  {
    "repo": "Nfoedy/Obscura",
    "section": "personal",
    "name": "Obscura",
    "description": "Survival horror developed in Unreal Engine 5, featuring flashlight gameplay, stamina management, enemy AI and atmospheric exploration.",
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
    "description": "Modular shooting system in Unreal Engine 5 using Blueprint, focused on weapons, aiming, firing logic and reusable gameplay components.",
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
    "description": "Final group project for the Master, currently in development.",
    "stack": [],
    "youtube": null,
    "collaboration": true,
    "private": false,
    "status": "In development",
    "role": "",
    "updatedAt": null,
    "pushedAt": null,
    "contribution": {
      "role": {},
      "highlights": [],
      "challenge": {}
    }
  },
  {
    "repo": "Nfoedy/Sandborn",
    "section": "master",
    "name": "Sandborn",
    "description": "3D platformer developed in Unreal Engine 5.8 for the Game Engine Programming module.",
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
    "description": "Team project developed with Unity, C# and FMOD.",
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
    "description": "Unreal Engine game developed during the Master, featuring physics-based object interaction, a Chaos vehicle and runtime reflection.",
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
    "description": "A physics-based pinball game built in Unreal Engine 5",
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
    "description": "Unity mixed reality mini-game combining photogrammetry, Physical Camera calibration, and interactive football gameplay in a reconstructed real-world scene.",
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
    "name": "mask_museum",
    "description": "University team project. Source code is not publicly available.",
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
      "role": {},
      "highlights": [],
      "challenge": {}
    }
  },
  {
    "repo": "Bosang6/cpp-raylib-platformer",
    "section": "master",
    "name": "Breakline",
    "description": "A cross-platform 2D platform-jumping game built with C++ and raylib.",
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
    }
  },
  {
    "repo": "Nfoedy/MemoryManagerSystem",
    "section": "master",
    "name": "MemoryManagerSystem",
    "description": "Custom C++ memory management with small-object allocation, allocation tracking and memory leak reporting.",
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
    "description": "Top-down 2D pixel-art RPG developed in C++ with SFML.",
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

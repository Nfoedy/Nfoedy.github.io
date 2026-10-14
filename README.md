# Riccardo Conforti — Portfolio

Sito statico per GitHub Pages: HTML, CSS e JavaScript nativo. Nessuna dipendenza o build.

## File

- `index.html`: struttura, navigazione, contatti e modale video.
- `style.css`: stile esistente, adattamenti responsive e accessibilità.
- `assets/js/projects.js`: unica fonte editoriale dei progetti.
- `assets/js/main.js`: rendering, modale, API e cache.
- `assets/`: avatar e icone originali.

## Aggiungere o aggiornare un progetto

In `assets/js/projects.js` aggiungere un oggetto a `window.PORTFOLIO_PROJECTS`:

```js
{
  repo: "Nfoedy/NomeRepository",
  section: "personal", // personal, master oppure other
  name: "Nome del gioco",
  description: "Descrizione verificata, in inglese.",
  stack: ["Unreal Engine 5", "C++"],
  youtube: null, // solo l'ID del video, se disponibile
  collaboration: false,
  private: false,
  status: "", // ad esempio In development, solo se confermato
  role: "" // contributo personale, solo se confermato
}
```

L'ordine nell'array determina l'ordine di presentazione all'interno della categoria.
Le tre collaborazioni confermate sono mask_museum, Breakline e PaoPao.
Goodbye e Sandborn sono Master Projects, in base a README e descrizione GitHub.
MemoryManagerSystem è provvisoriamente in Other Projects: categoria da confermare.
Non sono stati attribuiti stati di completamento o ruoli non verificati.

Sono inclusi i 10 progetti pubblici dell'account rilevati il 14 ottobre 2026 e le
3 collaborazioni esterne. La repository del sito è esclusa. Le future repository
pubbliche vanno aggiunte esplicitamente qui per scegliere categoria e presentazione.

## API e disponibilità

Le schede vengono mostrate immediatamente dai dati locali anche se GitHub non risponde.
Le descrizioni editoriali non vengono sovrascritte dalle API: aggiornarle qui.
I metadati GitHub hanno una cache locale di 24 ore; gli aggiornamenti parziali
conservano i dati precedenti. La modifica dell'elenco invalida la cache.
Le repository dichiarate private non vengono richieste all'API né collegate con
un pulsante pubblico. La scheda video rimane disponibile.

Currently Working On indica attività GitHub recente dei progetti pubblici personali
inclusi, non uno stato di sviluppo dichiarato. Esclude fork, archivi e repository
di presentazione. Cache: 6 ore, con mantenimento dei dati precedenti in caso di errore.
Nessun token GitHub deve essere aggiunto al codice pubblico.

## Anteprima e pubblicazione

Servire questa cartella con un server statico già disponibile, per esempio:
`python -m http.server 8000`, quindi aprire `http://localhost:8000`.

Per GitHub Pages mantenere index.html alla radice della sorgente pubblicata, insieme
a style.css e assets. Questa copia locale non è stata pubblicata e non contiene commit.
Non cambiare la configurazione Pages esistente per applicare questi file.

## Controlli manuali

- Desktop, tablet e smartphone: navigazione, email, schede e video.
- Tastiera: apertura/chiusura del video, ritorno al pulsante e focus visibile.
- Rete/API non disponibili: tutti i progetti devono restare leggibili.
- Ricaricamento con cache recente: evitare nuove richieste API.
- Nessun JavaScript: è disponibile il collegamento alternativo alle repository.

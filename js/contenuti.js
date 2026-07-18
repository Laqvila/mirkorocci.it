/* ============================================================================
   ★★★  CONTENUTI MODIFICABILI — SITO MIRKO ROCCI  ★★★
   ----------------------------------------------------------------------------
   QUESTO È L'UNICO FILE CHE DEVI TOCCARE per aggiungere o modificare:
        1) NEWS  (le novità)
        2) RASSEGNA STAMPA  (gli articoli di giornale)
        3) PUBBLICAZIONI SCIENTIFICHE

   ▸ COME FUNZIONA
     - Ogni voce è un blocco racchiuso tra graffe { ... } e separato dal
       successivo da una VIRGOLA.
     - I testi vanno SEMPRE tra "virgolette doppie".
     - Ti basta scrivere l'ITALIANO ( it:"..." ). Se non aggiungi le altre
       lingue (en/es/fr) verrà mostrato automaticamente l'italiano.
     - Per aggiungere una voce: COPIA un blocco esistente, incollalo in cima
       alla lista e cambia i testi. Tieni le voci dalla più recente alla più
       vecchia.
     - Dopo aver salvato il file, ricarica la pagina con CTRL+F5.

   ▸ ATTENZIONE (errori da evitare)
     - Se nel testo c'è una virgoletta doppia, sostituiscila con l'apostrofo '
       (es. scrivi  it:"L'articolo 'speciale'"  e non doppi apici dentro).
     - Non cancellare le graffe { } né le virgole tra una voce e l'altra.
     - Le immagini vanno messe nella cartella  assets/  e richiamate col loro
       percorso (es. "assets/awards/foto.jpg").
   ============================================================================ */


/* ============================================================================
   1) NEWS  ►  sezione "Ultime novità"
   ----------------------------------------------------------------------------
   Campi di ogni voce:
     date : la data mostrata           es.  { it:"Mar 2026" }
     tag  : l'etichetta colorata. Usa una di queste:
            NTAG.award (Premio) · NTAG.conf (Conferenza) ·
            NTAG.pub (Pubblicazione) · NTAG.patent (Brevetto) ·
            NTAG.social (Sociale)
     url  : link "Leggi" (lascia  url:""  se non c'è nessun link)
     t    : titolo della novità
     d    : descrizione breve

   img  : foto della card (SEMPRE consigliata quando c'è un link: usa la foto
          principale dell'articolo, salvata in assets/press/). Senza img la
          card è solo testo.

   ▼ MODELLO DA COPIARE (togli il // davanti alle righe per attivarlo):
   // { date:{ it:"Mese Anno" }, tag:NTAG.award, url:"https://...",
   //   img:"assets/press/foto.jpg",
   //   t:{ it:"Titolo della novità" },
   //   d:{ it:"Descrizione in una o due frasi." } },
   ============================================================================ */
const NTAG = {
  award:  { it:"Premio",        en:"Award",       es:"Premio",        fr:"Prix" },
  conf:   { it:"Conferenza",    en:"Conference",  es:"Conferencia",   fr:"Conférence" },
  pub:    { it:"Pubblicazione", en:"Publication", es:"Publicación",   fr:"Publication" },
  patent: { it:"Brevetto",      en:"Patent",      es:"Patente",       fr:"Brevet" },
  social: { it:"Sociale",       en:"Outreach",    es:"Social",        fr:"Social" }
};

const NEWS = [

  /* ▼▼▼ AGGIUNGI QUI LE NUOVE NOVITÀ (la più recente in alto) ▼▼▼
     (le notizie di Inno99 NON vanno qui: mettile nel blocco INNO99 più sotto) */

  { date:{ it:"2026", en:"2026", es:"2026", fr:"2026" }, tag:NTAG.social,
    url:"https://www.laquilablog.it/alliis-daosta-presentata-la-masterclass-2026/",
    img:"assets/press/masterclass2026.jpg",
    t:{ it:"Presentata la Masterclass 2026 all'IIS d'Aosta", en:"Masterclass 2026 unveiled at IIS d'Aosta", es:"Presentada la Masterclass 2026 en el IIS d'Aosta", fr:"Présentation de la Masterclass 2026 à l'IIS d'Aosta" },
    d:{ it:"Quarta edizione del percorso formativo dell'associazione 3:33 per gli studenti delle scuole superiori dell'Aquila.", en:"Fourth edition of association 3:33's training programme for high-school students in L'Aquila.", es:"Cuarta edición del itinerario formativo de la asociación 3:33 para estudiantes de secundaria de L'Aquila.", fr:"Quatrième édition du parcours de formation de l'association 3:33 pour les lycéens de L'Aquila." } },

  { date:{ it:"Gen 2026", en:"Jan 2026", es:"Ene 2026", fr:"Janv. 2026" }, tag:NTAG.award,
    url:"https://news-town.it/2026/03/09/persone/allaquilano-mirko-rocci-una-menzione-speciale-nellinnovation-award-di-leonardo/",
    img:"assets/press/newstown-leonardo.jpg",
    t:{ it:"Menzione Speciale ai Leonardo Innovation Awards con il progetto G-DEPM", en:"Special Mention at the Leonardo Innovation Awards with the G-DEPM project", es:"Mención Especial en los Leonardo Innovation Awards con el proyecto G-DEPM", fr:"Mention Spéciale aux Leonardo Innovation Awards avec le projet G-DEPM" },
    d:{ it:"Unica menzione speciale assegnata a Thales Alenia Space, premio consegnato dall'AD Roberto Cingolani.", en:"The only special mention awarded to Thales Alenia Space, presented by CEO Roberto Cingolani.", es:"La única mención especial otorgada a Thales Alenia Space, entregada por el CEO Roberto Cingolani.", fr:"La seule mention spéciale décernée à Thales Alenia Space, remise par le PDG Roberto Cingolani." } },

  { date:{ it:"Nov 2025", en:"Nov 2025", es:"Nov 2025", fr:"Nov. 2025" }, tag:NTAG.award, url:"",
    t:{ it:"Thales Alenia Space Innovation Award 2025 — categoria Idea", en:"Thales Alenia Space Innovation Award 2025 — Idea category", es:"Thales Alenia Space Innovation Award 2025 — categoría Idea", fr:"Thales Alenia Space Innovation Award 2025 — catégorie Idée" },
    d:{ it:"Primo classificato con il progetto G-DEPM in qualità di Team Leader.", en:"First place with the G-DEPM project as Team Leader.", es:"Primer puesto con el proyecto G-DEPM como Team Leader.", fr:"Première place avec le projet G-DEPM en tant que Team Leader." } },

  { date:{ it:"Nov 2025", en:"Nov 2025", es:"Nov 2025", fr:"Nov. 2025" }, tag:NTAG.conf, url:"",
    t:{ it:"Relatore all'EMPS — ESA/ESTEC, Noordwijk", en:"Speaker at EMPS — ESA/ESTEC, Noordwijk", es:"Ponente en EMPS — ESA/ESTEC, Noordwijk", fr:"Conférencier à EMPS — ESA/ESTEC, Noordwijk" },
    d:{ it:"Presentazione orale «Advanced uHDI and Embedded Power SiP Technology for Space Applications».", en:"Oral talk 'Advanced uHDI and Embedded Power SiP Technology for Space Applications'.", es:"Charla oral «Advanced uHDI and Embedded Power SiP Technology for Space Applications».", fr:"Présentation orale « Advanced uHDI and Embedded Power SiP Technology for Space Applications »." } },

  { date:{ it:"Set 2025", en:"Sep 2025", es:"Sep 2025", fr:"Sept. 2025" }, tag:NTAG.conf, url:"",
    t:{ it:"Co-organizzatore e relatore a NanoInnovation 2025", en:"Co-organiser and speaker at NanoInnovation 2025", es:"Coorganizador y ponente en NanoInnovation 2025", fr:"Co-organisateur et conférencier à NanoInnovation 2025" },
    d:{ it:"Università Sapienza, Roma. Talk sulle tecnologie SiP avanzate per lo spazio e sui materiali 2D.", en:"Sapienza University, Rome. Talk on advanced SiP space technologies and 2D materials.", es:"Universidad Sapienza, Roma. Charla sobre tecnologías SiP avanzadas para el espacio y materiales 2D.", fr:"Université Sapienza, Rome. Conférence sur les technologies SiP avancées pour l'espace et les matériaux 2D." } },

  { date:{ it:"2025", en:"2025", es:"2025", fr:"2025" }, tag:NTAG.pub, url:"https://doi.org/10.1088/1361-6633/add9c5",
    img:"assets/press/rpp-cover.jpg",
    t:{ it:"Nuovo articolo su Reports on Progress in Physics", en:"New paper in Reports on Progress in Physics", es:"Nuevo artículo en Reports on Progress in Physics", fr:"Nouvel article dans Reports on Progress in Physics" },
    d:{ it:"Ferromagnetismo potenziato in monostrati 2D di Cr₂Te₃ accoppiati a un isolante topologico.", en:"Enhanced ferromagnetism in 2D Cr₂Te₃ monolayers coupled to a topological insulator.", es:"Ferromagnetismo potenciado en monocapas 2D de Cr₂Te₃ acopladas a un aislante topológico.", fr:"Ferromagnétisme renforcé dans des monocouches 2D de Cr₂Te₃ couplées à un isolant topologique." } },

  { date:{ it:"Gen 2025", en:"Jan 2025", es:"Ene 2025", fr:"Janv. 2025" }, tag:NTAG.patent, url:"",
    t:{ it:"Depositata domanda di brevetto europeo (EP25154627)", en:"European patent application filed (EP25154627)", es:"Solicitud de patente europea presentada (EP25154627)", fr:"Demande de brevet européen déposée (EP25154627)" },
    d:{ it:"Risultati di ricerca trasformati in proprietà intellettuale protetta.", en:"Research results turned into protected intellectual property.", es:"Resultados de investigación convertidos en propiedad intelectual protegida.", fr:"Résultats de recherche transformés en propriété intellectuelle protégée." } }

];


/* ============================================================================
   2) RASSEGNA STAMPA  ►  sezione "Stampa & media"
   ----------------------------------------------------------------------------
   Campi di ogni voce:
     outlet : nome della testata        es.  "la Repubblica"
     year   : anno                       es.  "2026"
     url    : link all'articolo
     q      : titolo / citazione dell'articolo
   Tieni gli articoli ordinati dal più recente (in alto) al più vecchio.

   Campi opzionali:
     img : foto della scheda (mettila in assets/press/ e scrivi il percorso,
           es. img:"assets/press/nome-foto.jpg"). Senza img la scheda è solo testo.
     url : se l'articolo è solo cartaceo scrivi url:"" (la scheda non sarà cliccabile).

   ▼ MODELLO DA COPIARE:
   // { outlet:"Nome Testata", year:"2026", url:"https://...", img:"assets/press/foto.jpg",
   //   q:{ it:"Titolo o citazione dell'articolo." } },
   ============================================================================ */
const PRESS = [

  /* ▼▼▼ AGGIUNGI QUI I NUOVI ARTICOLI (il più recente in alto) ▼▼▼
     (gli articoli su Inno99 NON vanno qui: mettili nel blocco INNO99 più sotto) */

  { outlet:"L'Aquila Blog", year:"2026", url:"https://www.laquilablog.it/alliis-daosta-presentata-la-masterclass-2026/", img:"assets/press/masterclass2026.jpg", q:{ it:"All'IIS d'Aosta presentata la Masterclass 2026.", en:"Masterclass 2026 unveiled at IIS d'Aosta.", es:"Presentada la Masterclass 2026 en el IIS d'Aosta.", fr:"Présentation de la Masterclass 2026 à l'IIS d'Aosta." } },
  { outlet:"News-Town", year:"2026", url:"https://news-town.it/2026/03/09/persone/allaquilano-mirko-rocci-una-menzione-speciale-nellinnovation-award-di-leonardo/", img:"assets/press/newstown-leonardo.jpg", q:{ it:"«All'aquilano Mirko Rocci una menzione speciale nell'Innovation Award di Leonardo.»", en:"'L'Aquila's Mirko Rocci receives a special mention at Leonardo's Innovation Award.'", es:"«Al aquilano Mirko Rocci una mención especial en el Innovation Award de Leonardo.»", fr:"« Le natif de L'Aquila Mirko Rocci reçoit une mention spéciale à l'Innovation Award de Leonardo. »" } },
  { outlet:"Leonardo", year:"2025", url:"https://www.leonardo.com/en/news-and-stories-detail/-/detail/innovation-award-2025-edizione-record", img:"assets/press/leonardo-award.png", q:{ it:"Innovation Award 2025: edizione record, il progetto G-DEPM tra i protagonisti.", en:"Innovation Award 2025: a record edition, with the G-DEPM project among the protagonists.", es:"Innovation Award 2025: edición récord, con el proyecto G-DEPM entre los protagonistas.", fr:"Innovation Award 2025 : édition record, avec le projet G-DEPM parmi les protagonistes." } },
  { outlet:"Abruzzoweb", year:"2024", url:"https://abruzzoweb.it/facciamo-adottare-laquila-da-elon-musk-per-laboratorio-rivoluzione-tecnologica-la-proposta-di-3-33/", img:"assets/press/abruzzoweb-musk.jpg", q:{ it:"«Facciamo adottare L'Aquila da Elon Musk per la rivoluzione tecnologica.»", en:"'Let's have Elon Musk adopt L'Aquila for a technological revolution.'", es:"«Que Elon Musk adopte L'Aquila para la revolución tecnológica.»", fr:"« Faisons adopter L'Aquila par Elon Musk pour la révolution technologique. »" } },
  { outlet:"Radio L'Aquila 1", year:"2024", url:"https://www.radiolaquila1.it/2024/10/20/associazione-333-presidente-rocci-facciamo-adottare-laquila-da-elon-musk/", img:"assets/press/radiolaquila-duomo.jpg", q:{ it:"Presidente Rocci: «Facciamo adottare L'Aquila da Elon Musk».", en:"President Rocci: 'Let's have Elon Musk adopt L'Aquila'.", es:"Presidente Rocci: «Que Elon Musk adopte L'Aquila».", fr:"Président Rocci : « Faisons adopter L'Aquila par Elon Musk »." } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/associazione-3-33-proponiamo-ladozione-tecnologica-della-citta-dellaquila-da-parte-di-elon-musk/", img:"assets/press/laquilablog-musk.jpg", q:{ it:"«Proponiamo l'adozione tecnologica della città dell'Aquila da parte di Elon Musk.»", en:"'We propose the technological adoption of L'Aquila by Elon Musk.'", es:"«Proponemos la adopción tecnológica de L'Aquila por parte de Elon Musk.»", fr:"« Nous proposons l'adoption technologique de L'Aquila par Elon Musk. »" } },
  { outlet:"la Repubblica", year:"2020", url:"https://www.repubblica.it/tecnologia/2020/06/17/news/realizzata_una_batteria_a_fase_quantica_e_la_prima_volta-259439007/", img:"assets/press/repubblica-batteria.jpg", q:{ it:"«Realizzata una batteria a fase quantica. È la prima volta.»", en:"'A quantum phase battery has been built. For the first time.'", es:"«Creada una batería de fase cuántica. Es la primera vez.»", fr:"« Une batterie à phase quantique a été créée. Pour la première fois. »" } },
  { outlet:"Physics World", year:"2020", url:"https://physicsworld.com/a/physicists-create-quantum-phase-battery/", img:"assets/press/physicsworld-battery.jpg", q:{ it:"«Physicists create quantum phase battery.»", en:"'Physicists create quantum phase battery.'", es:"«Physicists create quantum phase battery.»", fr:"« Physicists create quantum phase battery. »" } },
  { outlet:"Corriere Nazionale", year:"2020", url:"https://www.corrierenazionale.it/2020/09/13/superconduttori-cnr-realizza-un-nanofilo-innovativo/", q:{ it:"Un transistor a supercorrente da un nanofilo di nuova generazione.", en:"A supercurrent transistor from a next-generation nanowire.", es:"Un transistor de supercorriente a partir de un nanohilo de nueva generación.", fr:"Un transistor à supercourant à partir d'un nanofil de nouvelle génération." } },
  { outlet:"Abruzzoweb", year:"2020", url:"https://abruzzoweb.it/la-prima-batteria-a-fase-quantica-un-aquilano-nel-progetto-rivoluzionario/", img:"assets/press/abruzzoweb-batteria.jpg", q:{ it:"«La prima batteria a fase quantica: un aquilano nel progetto rivoluzionario.»", en:"'The first quantum phase battery: an L'Aquila native in the groundbreaking project.'", es:"«La primera batería de fase cuántica: un aquilano en el proyecto revolucionario.»", fr:"« La première batterie à phase quantique : un natif de L'Aquila dans le projet révolutionnaire. »" } },
  { outlet:"N3ws Today", year:"2020", url:"https://n3ws.today/categories/science/first-quantum-phase-supercurrent-battery-ever-developed", q:{ it:"«First quantum phase 'supercurrent' battery ever developed.»", en:"'First quantum phase ‘supercurrent’ battery ever developed.'", es:"«First quantum phase ‘supercurrent’ battery ever developed.»", fr:"« First quantum phase ‘supercurrent’ battery ever developed. »" } },
  { outlet:"RAI 3 — Memex", year:"2017", url:"https://normalenews.sns.it/memex-i-luoghi-della-scienza-parla-di-pisa-e-del-laboratorio-nest", img:"assets/press/sns-memex.jpg", q:{ it:"«Memex — I luoghi della Scienza»: dal laboratorio NEST della Scuola Normale.", en:"'Memex — Places of Science': from the NEST lab of the Scuola Normale.", es:"«Memex — Los lugares de la Ciencia»: desde el laboratorio NEST de la Scuola Normale.", fr:"« Memex — Les lieux de la Science » : depuis le laboratoire NEST de la Scuola Normale." } },
  { outlet:"RAI Scuola", year:"2015", url:"http://www.laboratorionest.it/nestinternet-festival-2015/", img:"assets/press/nest-festival.jpg", q:{ it:"«Lo Spazio nel Nanomondo» — Internet Festival.", en:"'Space in the Nanoworld' — Internet Festival.", es:"«El Espacio en el Nanomundo» — Internet Festival.", fr:"« L'Espace dans le Nanomonde » — Internet Festival." } }

];


/* ============================================================================
   2-bis) INNO99  ►  sezione "Inno99 — gli aperitivi dell'innovazione"
   ----------------------------------------------------------------------------
   TUTTE le notizie e gli articoli su Inno99 / Inno-Talks vanno QUI (non in
   NEWS né in PRESS). Stesso formato delle voci della rassegna stampa:
   outlet, year, url (url:"" se cartaceo), img (foto principale
   dell'articolo, salvata in assets/press/), q (titolo/citazione).
   Le voci più recenti in alto.

   ▼ MODELLO DA COPIARE:
   // { outlet:"Nome Testata", year:"2026", url:"https://...", img:"assets/press/foto.jpg",
   //   q:{ it:"Titolo o citazione dell'articolo." } },
   ============================================================================ */
const INNO99 = [

  /* ▼▼▼ AGGIUNGI QUI LE NUOVE NOTIZIE DI INNO99 (la più recente in alto) ▼▼▼ */

  { outlet:"Il Centro", year:"2026", url:"", img:"",
    q:{ it:"«Inno Talk sbarca in città e segna il tutto esaurito» — edizione cartacea del 4 luglio 2026.", en:"'Inno Talk lands in town and sells out' — print edition, 4 July 2026.", es:"«Inno Talk llega a la ciudad y agota las entradas» — edición impresa del 4 de julio de 2026.", fr:"« Inno Talk débarque en ville et affiche complet » — édition papier du 4 juillet 2026." } },
  { outlet:"StreamingWorld TV", year:"2026", url:"https://streamingworldtv.it/le-idee-migliori-nascono-davanti-a-un-aperitivo-il-primo-inno-talk-conquista-laquila-sala-gremita-per-il-debutto-di-inno99/", img:"assets/press/innotalk-streamingworld.jpg",
    q:{ it:"«Le idee migliori nascono davanti a un aperitivo»: il primo Inno Talk conquista L'Aquila.", en:"'The best ideas are born over an aperitif': the first Inno Talk wins over L'Aquila.", es:"«Las mejores ideas nacen ante un aperitivo»: el primer Inno Talk conquista L'Aquila.", fr:"« Les meilleures idées naissent autour d'un apéritif » : le premier Inno Talk conquiert L'Aquila." } },
  { outlet:"L'Aquila Blog", year:"2026", url:"https://www.laquilablog.it/inno99-debutta-allaquila-sala-gremita-per-il-primo-inno-talk/", img:"assets/press/innotalk-laquilablog.jpg",
    q:{ it:"Inno99 debutta all'Aquila: sala gremita per il primo Inno Talk.", en:"Inno99 debuts in L'Aquila: packed house for the first Inno Talk.", es:"Inno99 debuta en L'Aquila: sala llena en el primer Inno Talk.", fr:"Inno99 débute à L'Aquila : salle comble pour le premier Inno Talk." } },
  { outlet:"Abruzzosera", year:"2026", url:"https://abruzzosera.it/cultura-e-societa/laquila-debutta-inno99-gli-aperitivi-dellinnovazione-aprono-il-programma-di-innovalley/", img:"assets/press/innotalk-abruzzosera.jpg",
    q:{ it:"A L'Aquila debutta Inno99: gli «aperitivi dell'innovazione» aprono il programma di Innovalley.", en:"Inno99 debuts in L'Aquila: the 'innovation aperitifs' open Innovalley's programme.", es:"Debuta Inno99 en L'Aquila: los «aperitivos de la innovación» abren el programa de Innovalley.", fr:"Inno99 débute à L'Aquila : les « apéritifs de l'innovation » ouvrent le programme d'Innovalley." } },
  { outlet:"L'Aquila Blog", year:"2026", url:"https://www.laquilablog.it/inno99-porta-linnovazione-allaquila-primo-talk-il-2-luglio/", img:"assets/press/innotalk-annuncio.jpg",
    q:{ it:"Inno99 porta l'innovazione all'Aquila: primo talk il 2 luglio.", en:"Inno99 brings innovation to L'Aquila: first talk on 2 July.", es:"Inno99 lleva la innovación a L'Aquila: primer talk el 2 de julio.", fr:"Inno99 apporte l'innovation à L'Aquila : premier talk le 2 juillet." } }

];


/* ============================================================================
   3) PUBBLICAZIONI SCIENTIFICHE  ►  sezione "Pubblicazioni selezionate"
   ----------------------------------------------------------------------------
   Campi di ogni voce:
     theme   : disegno della copertina. Scegline uno tra:
               "super" "battery" "transistor" "current" "spin"
               "esaki" "oxide" "twod"
     doi     : il DOI dell'articolo (la copertina linkerà a https://doi.org/DOI)
     title   : titolo dell'articolo (in inglese, come pubblicato)
     journal : rivista                   es.  "Nature Materials"
     year    : anno                      es.  "2025"
     role    : il tuo ruolo. Usa:  ROLE.first (Primo autore) ·
               ROLE.cofirst (Co-primo autore) · ROLE.co (Co-autore)
     desc    : breve descrizione divulgativa
   Le prime 6 voci sono quelle mostrate subito; le altre compaiono con
   "Mostra altri articoli". Tieni in alto le più importanti/recenti.

   ▼ MODELLO DA COPIARE:
   // { theme:"super", doi:"10.xxxx/xxxxx",
   //   title:"Titolo dell'articolo in inglese",
   //   journal:"Rivista", year:"2026", role:ROLE.first,
   //   desc:{ it:"Una frase che spiega il risultato." } },
   ============================================================================ */
const ROLE = {
  first:  { it:"Primo autore", en:"First author", es:"Primer autor", fr:"Premier auteur" },
  cofirst:{ it:"Co-primo autore", en:"Co-first author", es:"Co-primer autor", fr:"Co-premier auteur" },
  co:     { it:"Co-autore", en:"Co-author", es:"Coautor", fr:"Co-auteur" }
};

const PUBLICATIONS = [

  /* ▼▼▼ AGGIUNGI QUI I NUOVI ARTICOLI SCIENTIFICI ▼▼▼ */

  { theme:"super", doi:"10.1038/s41563-021-01162-5",
    title:"Extremely long-range, high-temperature Josephson coupling across a half-metallic ferromagnet",
    journal:"Nature Materials", year:"2021", role:ROLE.co,
    desc:{ it:"Supercorrente che attraversa un ferromagnete half-metallic su distanze record: una pietra miliare per la spintronica superconduttiva.",
      en:"Supercurrent flowing across a half-metallic ferromagnet over record distances — a milestone for superconducting spintronics.",
      es:"Supercorriente que atraviesa un ferromagneto half-metallic a distancias récord: un hito para la espintrónica superconductora.",
      fr:"Supercourant traversant un ferromagnétique demi-métallique sur des distances record : une étape clé pour la spintronique supraconductrice." } },

  { theme:"battery", doi:"10.1038/s41565-020-0712-7",
    title:"A Josephson phase battery",
    journal:"Nature Nanotechnology", year:"2020", role:ROLE.co,
    desc:{ it:"La prima batteria a fase quantica mai realizzata: un dispositivo che immagazzina una differenza di fase superconduttiva. Coperta da Repubblica e Physics World.",
      en:"The first-ever quantum phase battery: a device storing a superconducting phase difference. Covered by Repubblica and Physics World.",
      es:"La primera batería de fase cuántica jamás creada: un dispositivo que almacena una diferencia de fase superconductora. Cubierta por Repubblica y Physics World.",
      fr:"La toute première batterie à phase quantique : un dispositif qui stocke une différence de phase supraconductrice. Couverte par Repubblica et Physics World." } },

  { theme:"transistor", doi:"10.1021/acsnano.0c05355",
    title:"Gate-controlled suspended titanium nanobridge supercurrent transistor",
    journal:"ACS Nano", year:"2020", role:ROLE.first,
    desc:{ it:"Un transistor a supercorrente controllato da gate, basato su un nano-ponte di titanio sospeso: una via verso l'elettronica superconduttiva.",
      en:"A gate-controlled supercurrent transistor built on a suspended titanium nanobridge — a route toward superconducting electronics.",
      es:"Un transistor de supercorriente controlado por puerta, basado en un nanopuente de titanio suspendido: una vía hacia la electrónica superconductora.",
      fr:"Un transistor à supercourant commandé par grille, fondé sur un nanopont de titane suspendu : une voie vers l'électronique supraconductrice." } },

  { theme:"current", doi:"10.1021/acs.nanolett.0c03547",
    title:"Large enhancement of critical current in superconducting devices by gate voltage",
    journal:"Nano Letters", year:"2020", role:ROLE.first,
    desc:{ it:"Il voltaggio di gate amplifica fortemente la corrente critica nei dispositivi superconduttivi, aprendo nuovi gradi di libertà di controllo.",
      en:"Gate voltage strongly enhances the critical current of superconducting devices, unlocking new control knobs.",
      es:"El voltaje de puerta amplifica fuertemente la corriente crítica en dispositivos superconductores, abriendo nuevos grados de control.",
      fr:"La tension de grille amplifie fortement le courant critique des dispositifs supraconducteurs, ouvrant de nouveaux leviers de contrôle." } },

  { theme:"twod", doi:"10.1088/1361-6633/add9c5",
    title:"Enhanced ferromagnetism in monolayer Cr₂Te₃ via topological insulator coupling",
    journal:"Reports on Progress in Physics", year:"2025", role:ROLE.co,
    desc:{ it:"Ferromagnetismo potenziato in un monostrato 2D di Cr₂Te₃ accoppiato a un isolante topologico: nuova fisica per la spintronica 2D.",
      en:"Boosted ferromagnetism in a 2D Cr₂Te₃ monolayer coupled to a topological insulator — new physics for 2D spintronics.",
      es:"Ferromagnetismo potenciado en una monocapa 2D de Cr₂Te₃ acoplada a un aislante topológico: nueva física para la espintrónica 2D.",
      fr:"Ferromagnétisme renforcé dans une monocouche 2D de Cr₂Te₃ couplée à un isolant topologique : une nouvelle physique pour la spintronique 2D." } },

  { theme:"spin", doi:"10.1021/acs.nanolett.3c02559",
    title:"Spin-resolved magneto-tunneling and giant anisotropic g-factor in broken-gap InAs–GaSb core–shell nanowires",
    journal:"Nano Letters", year:"2024", role:ROLE.co,
    desc:{ it:"Tunneling magneto-risolto e fattore g gigante e anisotropo in nanofili core–shell InAs–GaSb a gap invertito: nuove prospettive per la spintronica.",
      en:"Spin-resolved magneto-tunnelling and a giant anisotropic g-factor in broken-gap InAs–GaSb core–shell nanowires — new prospects for spintronics.",
      es:"Magnetotúnel resuelto en espín y factor g gigante y anisótropo en nanohilos core–shell InAs–GaSb de gap invertido: nuevas perspectivas para la espintrónica.",
      fr:"Magnéto-tunnel résolu en spin et facteur g géant et anisotrope dans des nanofils cœur-coquille InAs–GaSb à gap inversé : de nouvelles perspectives pour la spintronique." } },

  { theme:"spin", doi:"10.1021/acs.nanolett.8b02828",
    title:"Vectorial control of the spin–orbit interaction in suspended InAs nanowires",
    journal:"Nano Letters", year:"2018", role:ROLE.cofirst,
    desc:{ it:"Controllo vettoriale dell'interazione spin-orbita in nanofili di InAs sospesi: un ingrediente chiave per la spintronica e il calcolo quantistico.",
      en:"Vectorial control of spin–orbit coupling in suspended InAs nanowires — a key ingredient for spintronics and quantum computing.",
      es:"Control vectorial de la interacción espín-órbita en nanohilos de InAs suspendidos: un ingrediente clave para la espintrónica y la computación cuántica.",
      fr:"Contrôle vectoriel de l'interaction spin-orbite dans des nanofils d'InAs suspendus : un ingrédient clé pour la spintronique et le calcul quantique." } },

  { theme:"esaki", doi:"10.1021/acs.nanolett.6b04260",
    title:"Tunable Esaki effect in catalyst-free InAs/GaSb core–shell nanowires",
    journal:"Nano Letters", year:"2016", role:ROLE.first,
    desc:{ it:"Effetto Esaki sintonizzabile in nanofili core–shell InAs/GaSb cresciuti senza catalizzatore: tunneling quantistico su misura.",
      en:"A tunable Esaki effect in catalyst-free InAs/GaSb core–shell nanowires — quantum tunnelling on demand.",
      es:"Efecto Esaki sintonizable en nanohilos core–shell InAs/GaSb crecidos sin catalizador: efecto túnel cuántico a medida.",
      fr:"Effet Esaki ajustable dans des nanofils cœur-coquille InAs/GaSb sans catalyseur : effet tunnel quantique sur mesure." } },

  { theme:"oxide", doi:"10.1021/acs.nanolett.5b03261",
    title:"Proximity-driven commensurate pinning in YBa₂Cu₃O₇ through all-oxide magnetic nanostructures",
    journal:"Nano Letters", year:"2015", role:ROLE.first,
    desc:{ it:"Nanostrutture magnetiche tutte-ossido che ancorano i vortici in un superconduttore ad alta temperatura: ingegneria della superconduttività su scala nanometrica.",
      en:"All-oxide magnetic nanostructures pinning vortices in a high-Tc superconductor — engineering superconductivity at the nanoscale.",
      es:"Nanoestructuras magnéticas all-oxide que anclan los vórtices en un superconductor de alta temperatura: ingeniería de la superconductividad a nanoescala.",
      fr:"Nanostructures magnétiques tout-oxyde ancrant les vortex dans un supraconducteur à haute température : ingénierie de la supraconductivité à l'échelle nanométrique." } },

  { theme:"current", doi:"10.3390/s19132994",
    title:"Conductometric sensing with individual InAs nanowires",
    journal:"Sensors", year:"2019", role:ROLE.co,
    desc:{ it:"Sensori chimici basati su singoli nanofili di InAs: rilevamento conduttometrico ad altissima sensibilità.",
      en:"Chemical sensors based on individual InAs nanowires — ultra-sensitive conductometric detection.",
      es:"Sensores químicos basados en nanohilos individuales de InAs: detección conductométrica de altísima sensibilidad.",
      fr:"Capteurs chimiques à base de nanofils d'InAs individuels : détection conductométrique ultra-sensible." } },

  { theme:"twod", doi:"10.1063/1.4868426",
    title:"Resistive switching in manganite/graphene hybrid planar nanostructures",
    journal:"Applied Physics Letters", year:"2014", role:ROLE.first,
    desc:{ it:"Switching resistivo (memristivo) in nanostrutture planari ibride manganite/grafene: building block per memorie non volatili.",
      en:"Resistive (memristive) switching in manganite/graphene hybrid planar nanostructures — a building block for non-volatile memories.",
      es:"Conmutación resistiva (memristiva) en nanoestructuras planas híbridas manganita/grafeno: un building block para memorias no volátiles.",
      fr:"Commutation résistive (memristive) dans des nanostructures planes hybrides manganite/graphène : une brique pour les mémoires non volatiles." } },

  { theme:"transistor", doi:"10.1021/acs.nanolett.6b05223",
    title:"Crystal phases in hybrid metal–semiconductor nanowire devices",
    journal:"Nano Letters", year:"2017", role:ROLE.co,
    desc:{ it:"Controllo delle fasi cristalline in dispositivi a nanofilo ibridi metallo-semiconduttore: ingegneria strutturale alla nanoscala.",
      en:"Controlling crystal phases in hybrid metal–semiconductor nanowire devices — structural engineering at the nanoscale.",
      es:"Control de las fases cristalinas en dispositivos de nanohilo híbridos metal–semiconductor: ingeniería estructural a nanoescala.",
      fr:"Contrôle des phases cristallines dans des dispositifs à nanofil hybrides métal–semiconducteur : ingénierie structurale à l'échelle nanométrique." } }

];

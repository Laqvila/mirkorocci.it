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

  { date:{ it:"Ago 2026", en:"Aug 2026", es:"Ago 2026", fr:"Août 2026" }, tag:NTAG.social,
    url:"laquilive-app.html",
    img:"assets/press/laquilive-icona.png",
    t:{ it:"L'AquiLive è su Google Play e App Store", en:"L'AquiLive is live on Google Play and the App Store", es:"L'AquiLive ya está en Google Play y App Store", fr:"L'AquiLive est sur Google Play et l'App Store" },
    d:{ it:"L'app gratuita che ho ideato e sviluppato per gli eventi dell'Aquila e provincia è pubblica: eventi in tempo reale, mappa, news, trasporti e una sezione sconti per le attività del territorio.", en:"The free app I designed and developed for events in L'Aquila and its province is now public: real-time events, map, news, transport and a discounts section for local businesses.", es:"La app gratuita que ideé y desarrollé para los eventos de L'Aquila ya es pública: eventos en tiempo real, mapa, noticias, transporte y descuentos locales.", fr:"L'appli gratuite que j'ai conçue et développée pour les événements de L'Aquila est désormais publique : événements en temps réel, carte, actualités, transports et réductions locales." } },

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
   1-bis) IN PRIMO PIANO  ►  sezione "In primo piano" (subito sotto l'apertura)
   ----------------------------------------------------------------------------
   Le 2-3 cose più importanti del momento, con foto grande. Campi:
     img  : foto grande della card (obbligatoria, in assets/press/)
     tag  : etichetta (NTAG.award, NTAG.conf, NTAG.pub, NTAG.patent, NTAG.social)
     date : data mostrata
     t    : titolo · d : descrizione
     url  : link "Scopri di più" — può essere un articolo (https://...) oppure
            una sezione del sito (es. "#inno99")
   Tieni qui SOLO le novità del momento (2-3 max): quando invecchiano,
   spostale/lasciale in NEWS e aggiorna queste card.
   ============================================================================ */
const FEATURED = [

  { img:"assets/press/laquilive-icona.png", tag:NTAG.social,
    date:{ it:"19 agosto 2026", en:"19 August 2026", es:"19 de agosto de 2026", fr:"19 août 2026" },
    t:{ it:"È nata L'AquiLive: l'app gratuita degli eventi dell'Aquila", en:"Introducing L'AquiLive: the free events app for L'Aquila", es:"Nace L'AquiLive: la app gratuita de eventos de L'Aquila", fr:"Voici L'AquiLive : l'appli gratuite des événements de L'Aquila" },
    d:{ it:"Ho ideato e costruito l'app che raccoglie tutti gli eventi dell'Aquila e provincia: concerti, teatro, sagre, cinema, Perdonanza, news locali, mappa e trasporti. Gratuita, in 6 lingue, senza pubblicità, ora su Google Play e App Store: il mio modo di restituire qualcosa alla città.", en:"I designed and built the app that gathers every event in L'Aquila and its province: concerts, theatre, festivals, cinema, Perdonanza, local news, map and transport. Free, in 6 languages, ad-free, now on Google Play and the App Store — my way of giving something back to the city.", es:"Ideé y construí la app que reúne todos los eventos de L'Aquila y su provincia: conciertos, teatro, fiestas, cine, Perdonanza, noticias locales, mapa y transporte. Gratuita, en 6 idiomas, sin publicidad, ya en Google Play y App Store.", fr:"J'ai conçu et développé l'appli qui rassemble tous les événements de L'Aquila et de sa province : concerts, théâtre, fêtes, cinéma, Perdonanza, actualités locales, carte et transports. Gratuite, en 6 langues, sans publicité, désormais sur Google Play et l'App Store." },
    url:"laquilive-app.html" },

  { img:"assets/press/innotalk-laquilablog.jpg", tag:NTAG.social,
    date:{ it:"2 luglio 2026", en:"2 July 2026", es:"2 de julio de 2026", fr:"2 juillet 2026" },
    t:{ it:"Inno99 debutta all'Aquila: tutto esaurito al primo Inno Talk", en:"Inno99 debuts in L'Aquila: sold-out first Inno Talk", es:"Inno99 debuta en L'Aquila: lleno total en el primer Inno Talk", fr:"Inno99 débute à L'Aquila : salle comble pour le premier Inno Talk" },
    d:{ it:"Sala gremita da Ju Boss per il primo seminario-aperitivo dell'innovazione del ciclo che ho co-ideato e curato per Innovalley: grande eco sulla stampa, da Il Centro alle testate online.", en:"Packed house at Ju Boss for the first innovation aperitif-seminar of the series I co-created and curate for Innovalley — wide press coverage, from Il Centro to online outlets.", es:"Sala llena en Ju Boss para el primer seminario-aperitivo de la innovación del ciclo que coideé y curo para Innovalley: gran eco en la prensa.", fr:"Salle comble chez Ju Boss pour le premier séminaire-apéritif de l'innovation du cycle que j'ai co-créé et que je cure pour Innovalley : large écho dans la presse." },
    url:"#inno99" },

  { img:"assets/awards/leonardo-cingolani.jpg", tag:NTAG.award,
    date:{ it:"Gennaio 2026", en:"January 2026", es:"Enero de 2026", fr:"Janvier 2026" },
    t:{ it:"Menzione Speciale ai Leonardo Innovation Awards", en:"Special Mention at the Leonardo Innovation Awards", es:"Mención Especial en los Leonardo Innovation Awards", fr:"Mention Spéciale aux Leonardo Innovation Awards" },
    d:{ it:"Con il progetto G-DEPM «Graphene Direct Enabled Polymer Metallization»: unica menzione speciale assegnata a Thales Alenia Space, consegnata dall'AD di Leonardo Roberto Cingolani.", en:"With the G-DEPM project 'Graphene Direct Enabled Polymer Metallization': the only special mention awarded to Thales Alenia Space, presented by Leonardo CEO Roberto Cingolani.", es:"Con el proyecto G-DEPM: única mención especial otorgada a Thales Alenia Space, entregada por el CEO de Leonardo, Roberto Cingolani.", fr:"Avec le projet G-DEPM : seule mention spéciale décernée à Thales Alenia Space, remise par le PDG de Leonardo, Roberto Cingolani." },
    url:"https://news-town.it/2026/03/09/persone/allaquilano-mirko-rocci-una-menzione-speciale-nellinnovation-award-di-leonardo/" }

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
  { outlet:"Il Messaggero", year:"2020", url:"", img:"",
    q:{ it:"«Supercomputer: anche un aquilano tra i protagonisti» — edizione cartacea del 13 dicembre 2020.", en:"'Supercomputers: an L'Aquila native among the protagonists' — print edition, 13 December 2020.", es:"«Supercomputadoras: también un aquilano entre los protagonistas» — edición impresa del 13 de diciembre de 2020.", fr:"« Superordinateurs : un natif de L'Aquila parmi les protagonistes » — édition papier du 13 décembre 2020." } },
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
   2-ter) STAMPA E TV ASSOCIAZIONE 3:33  ►  griglia nella sezione 3:33
   ----------------------------------------------------------------------------
   Rassegna stampa e TV delle attività dell'associazione 3:33 (Masterclass,
   concorso Zaraket, proposta Musk...). Stesso formato della rassegna stampa:
   outlet, year, url (url:"" se cartaceo), img, q. Le più recenti in alto:
   si vedono le prime 6, le altre con "Mostra tutta la rassegna".
   ============================================================================ */
const ASSOC_PRESS = [

  /* ▼▼▼ AGGIUNGI QUI LE NUOVE USCITE STAMPA DELL'ASSOCIAZIONE ▼▼▼ */

  { outlet:"L'Aquila Blog", year:"2026", url:"https://www.laquilablog.it/alliis-daosta-presentata-la-masterclass-2026/", img:"assets/press/masterclass2026.jpg", q:{ it:"All'IIS d'Aosta presentata la Masterclass 2026.", en:"Masterclass 2026 unveiled at IIS d'Aosta.", es:"Presentada la Masterclass 2026 en el IIS d'Aosta.", fr:"Présentation de la Masterclass 2026 à l'IIS d'Aosta." } },
  { outlet:"Radio L'Aquila 1", year:"2025", url:"https://www.radiolaquila1.it/2025/01/16/amlaquila-masterclass-2025-al-via-la-terza-edizione/", img:"assets/press333/a333-61.jpg", q:{ it:"A L'Aquila, MasterClass 2025: Al Via la Terza Edizione." } },
  { outlet:"News-Town", year:"2025", url:"https://news-town.it/2025/01/16/persone/prende-il-via-la-terza-edizione-della-masterclass-organizzata-dallassociazione-333/", img:"assets/press333/a333-60.jpg", q:{ it:"Prende il via la terza edizione della MasterClass 2025" } },
  { outlet:"L'Aquila Blog", year:"2025", url:"https://www.laquilablog.it/laquila-al-via-la-terza-edizione-di-masterclass-2025/", img:"assets/press333/a333-58.jpg", q:{ it:"L'Aquila, al via la terza edizione di MasterClass 2025" } },
  { outlet:"AbruzzoLive", year:"2025", url:"https://abruzzolive.it/masterclass-2025-il-via-alla-terza-edizione-aquilana/", img:"assets/press333/a333-57.jpg", q:{ it:"MasterClass 2025, il via alla terza edizione aquilana" } },
  { outlet:"Il Messaggero", year:"2024", url:"", img:"",
    q:{ it:"«Elon Musk adotti L'Aquila per un futuro sempre più digitale» — edizione cartacea del 21 ottobre 2024.", en:"'May Elon Musk adopt L'Aquila for an ever more digital future' — print edition, 21 October 2024.", es:"«Que Elon Musk adopte L'Aquila para un futuro cada vez más digital» — edición impresa del 21 de octubre de 2024.", fr:"« Qu'Elon Musk adopte L'Aquila pour un avenir toujours plus numérique » — édition papier du 21 octobre 2024." } },
  { outlet:"Il Centro", year:"2024", url:"", img:"",
    q:{ it:"«Verso il futuro smart» — edizione cartacea del 21 ottobre 2024.", en:"'Towards the smart future' — print edition, 21 October 2024.", es:"«Hacia el futuro smart» — edición impresa del 21 de octubre de 2024.", fr:"« Vers le futur smart » — édition papier du 21 octobre 2024." } },
  { outlet:"Radio L'Aquila 1", year:"2024", url:"https://www.radiolaquila1.it/2024/10/20/associazione-333-presidente-rocci-facciamo-adottare-laquila-da-elon-musk/", img:"assets/press333/a333-56.jpg", q:{ it:"Associazione 3:33: Presidente Rocci, 'Facciamo adottare L'Aquila da Elon Musk'" } },
  { outlet:"InfoMedia News", year:"2024", url:"https://infomedianews.com/associazione-333-facciamo-adottare-laquila-da-musk/", img:"assets/press333/a333-55.jpg", q:{ it:"Associazione 3:33, Presidente Rocci: 'Facciamo adottare L'Aquila da Musk'" } },
  { outlet:"Abruzzoweb", year:"2024", url:"https://abruzzoweb.it/facciamo-adottare-laquila-da-elon-musk-per-laboratorio-rivoluzione-tecnologica-la-proposta-di-3-33/", img:"assets/press333/a333-54.jpg", q:{ it:"'FACCIAMO ADOTTARE L'AQUILA DA ELON MUSK PER MODELLO RIVOLUZIONE TECNOLOGICA', LA PROPOSTA DI 3.33" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/associazione-3-33-proponiamo-ladozione-tecnologica-della-citta-dellaquila-da-parte-di-elon-musk/", img:"assets/press333/a333-53.jpg", q:{ it:"Associazione 3.33: “Proponiamo l’adozione tecnologica della Città dell’Aquila da parte di Elon Musk'" } },
  { outlet:"YouTube", year:"2024", url:"https://www.youtube.com/watch?v=B1bp5BvuqBU", img:"assets/press333/a333-50.jpg", q:{ it:"L\'Aquila. Cerimonia conclusiva per \'Masterclass 2024\'" } },
  { outlet:"YouTube", year:"2024", url:"https://www.youtube.com/watch?v=I2_WzKKtO6s", img:"assets/press333/a333-49.jpg", q:{ it:"La cerimonia di chiusura del progetto formativo MasterClass 2024 - 20/05/2024" } },
  { outlet:"News-Town", year:"2024", url:"https://news-town.it/2024/05/17/eventi/si-conclude-la-seconda-edizione-di-masterclass-2024-domani-la-cerimonia-di-chiusura/", img:"assets/press333/a333-48.jpg", q:{ it:"Si conclude la II edizione di MasterClass 2024: oggi la cerimonia di chiusura" } },
  { outlet:"Abruzzosera", year:"2024", url:"https://abruzzosera.it/alla-sala-ipogea-la-cerimonia-di-chiusura-del-progetto-masterclass-2024-con-lectio-magistralis-di-massimo-claudio-comparini/", img:"assets/press333/a333-47.jpg", q:{ it:"Alla Sala Ipogea la cerimonia di chiusura del Progetto MasterClass 2024 con lectio magistralis di Massimo Claudio Comparini" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/masterclass-2024-chiude-con-una-lectio-magistralis-sul-tema-dello-spazio/", img:"assets/press333/a333-46.jpg", q:{ it:"MasterClass 2024 chiude con una Lectio Magistralis sul tema dello Spazio" } },
  { outlet:"AZ Informa", year:"2024", url:"https://azinforma.com/laquila-allemiciclo-cerimonia-di-chiusura-del-progetto-formativo-masterclass-2024/", img:"assets/press333/a333-45.jpg", q:{ it:"L'Aquila, all'Emiciclo cerimonia di chiusura del progetto formativo MasterClass 2024" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/sesto-seminario-del-masterclass-2024-al-centro-interazione-e-creativita/", img:"assets/press333/a333-44.jpg", q:{ it:"Sesto Seminario del MasterClass 2024, al centro Interazione e Creatività" } },
  { outlet:"News-Town", year:"2024", url:"https://news-town.it/2024/05/09/eventi/masterclass-2024-criticality-management-al-centro-del-sesto-seminario/", img:"assets/press333/a333-43.jpg", q:{ it:"MasterClass 2024: 'Criticality management' al centro del sesto seminario" } },
  { outlet:"News-Town", year:"2024", url:"https://news-town.it/2024/04/26/eventi/laquila-primo-evento-dedicato-alla-scuola-normale-superiore-di-pisa/", img:"assets/press333/a333-42.jpg", q:{ it:"L'Aquila: primo evento dedicato alla Scuola Normale Superiore di Pisa" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/masterclass-2024-primo-evento-in-abruzzo-interamente-dedicato-alla-scuola-normale-superiore-di-pisa/", img:"assets/press333/a333-41.jpg", q:{ it:"MasterClass 2024: primo evento in Abruzzo interamente dedicato alla Scuola Normale Superiore di Pisa" } },
  { outlet:"Abruzzosera", year:"2024", url:"https://abruzzosera.it/primo-incontro-a-laquila-dedicato-alla-scuola-normale-superiore-di-pisa-e-presentazione-masterclass/", img:"assets/press333/a333-40.jpg", q:{ it:"Primo incontro a L'Aquila dedicato alla Scuola Normale Superiore di Pisa e presentazione MasterClass" } },
  { outlet:"AbruzzoLive", year:"2024", url:"https://abruzzolive.it/primo-evento-in-abruzzo-interamente-dedicato-alla-scuola-normale-superiore-di-pisa/", img:"assets/press333/a333-39.jpg", q:{ it:"Primo evento in Abruzzo interamente dedicato alla Scuola Normale Superiore di Pisa" } },
  { outlet:"AbruzzoLive", year:"2024", url:"https://abruzzolive.it/progetto-masterclass-2024-in-questura-con-i-giovani-e-le-forze-dellordine/", img:"assets/press333/a333-38.jpg", q:{ it:"Progetto MasterClass 2024 in Questura con i giovani e le forze dell'ordine" } },
  { outlet:"News-Town", year:"2024", url:"https://news-town.it/2024/04/18/eventi/masterclass-2024-un-percorso-formativo-sulle-droghe-alla-questura-dellaquila/", img:"assets/press333/a333-37.jpg", q:{ it:"MasterClass 2024: un percorso formativo sulle droghe alla Questura dell'Aquila" } },
  { outlet:"Abruzzosera", year:"2024", url:"https://abruzzosera.it/progetto-masterclass-2024-in-questura/", img:"assets/press333/a333-36.jpg", q:{ it:"Progetto MasterClass 2024 in Questura" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/progetto-masterclass-2024-in-questura-con-i-giovani-e-le-forze-dellordine/", img:"assets/press333/a333-35.jpg", q:{ it:"Progetto MasterClass 2024 in Questura con i giovani e le forze dell’ordine" } },
  { outlet:"InfoMedia News", year:"2024", url:"https://infomedianews.com/laquila-progetto-masterclass-2024/", img:"assets/press333/a333-34.jpg", q:{ it:"L'Aquila: progetto Masterclass 2024" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/laquila-a-palazzo-fibbioni-il-terzo-seminario-di-masterclass-2024/", img:"assets/press333/a333-32.jpg", q:{ it:"L'Aquila: a Palazzo Fibbioni il terzo seminario di MasterClass 2024" } },
  { outlet:"AbruzzoLive", year:"2024", url:"https://abruzzolive.it/intelligenza-artificiale-e-robotica-collaborativa-terzo-seminario-del-percorso-formativo-masterclass-2024/", img:"assets/press333/a333-31.jpg", q:{ it:"Intelligenza Artificiale e robotica collaborativa, terzo seminario del percorso formativo MasterClass 2024" } },
  { outlet:"YouTube", year:"2024", url:"https://www.youtube.com/watch?v=0hBglRqsU40", img:"assets/press333/a333-30.jpg", q:{ it:"L\'Aquila, terzo seminario in Masterclass 2024" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/laquila-parte-il-secondo-seminario-del-percorso-formativo-masterclass-2024/", img:"assets/press333/a333-29.jpg", q:{ it:"L’Aquila, parte il secondo seminario del percorso formativo MasterClass 2024" } },
  { outlet:"YouTube", year:"2024", url:"https://www.youtube.com/watch?v=qPnLL3RSWyQ", img:"assets/press333/a333-28.jpg", q:{ it:"Masterclass 2024, continuano gli incontri" } },
  { outlet:"Radio L'Aquila 1", year:"2024", url:"https://www.radiolaquila1.it/2024/03/23/secondo-seminario-del-percorso-formativo-masterclass-2024/", img:"assets/press333/a333-27.jpg", q:{ it:"Secondo Seminario del percorso formativo MasterClass 2024" } },
  { outlet:"News-Town", year:"2024", url:"https://news-town.it/2024/03/23/scenari/masterclass-2024-la-fisica-e-lingegneria-davanguardia-al-centro-del-secondo-seminario/", img:"assets/press333/a333-26.jpg", q:{ it:"MasterClass 2024: la fisica e l'ingegneria d'avanguardia al centro del secondo seminario" } },
  { outlet:"Radio L'Aquila 1", year:"2024", url:"https://www.radiolaquila1.it/2024/03/17/primo-seminario-del-percorso-formativo-masterclass-2024/", img:"assets/press333/a333-25.jpg", q:{ it:"Primo Seminario del percorso formativo MasterClass 2024" } },
  { outlet:"News-Town", year:"2024", url:"https://news-town.it/2024/03/18/eventi/il-progetto-masterclass-2024-entra-nella-sua-fase-formativa-con-il-primo-dei-sette-seminari/", img:"assets/press333/a333-24.jpg", q:{ it:"Il progetto MasterClass 2024 entra nella sua fase formativa con il primo dei sette seminari" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/laquila-primo-seminario-del-percorso-formativo-masterclass-2024/", img:"assets/press333/a333-22.jpg", q:{ it:"L’Aquila, Primo Seminario del percorso formativo MasterClass 2024" } },
  { outlet:"AbruzzoLive", year:"2024", url:"https://abruzzolive.it/nella-sala-ipogea-dellemiciclo-il-primo-seminario-nellambito-del-progetto-masterclass-2024/", img:"assets/press333/a333-21.jpg", q:{ it:"Nella sala Ipogea dell'Emiciclo il primo seminario nell’ambito del progetto Masterclass 2024" } },
  { outlet:"Abruzzoweb", year:"2024", url:"https://abruzzoweb.it/laquila-boom-di-adesioni-al-progetto-formativo-masterclass-2024/", img:"assets/press333/a333-20.jpg", q:{ it:"L'AQUILA: BOOM DI ADESIONI AL PROGETTO FORMATIVO MASTERCLASS 2024" } },
  { outlet:"News-Town", year:"2024", url:"https://news-town.it/2024/03/13/scenari/boom-di-adesioni-al-progetto-masterclass-2024-sale-il-numero-di-partecipanti-da-30-a-50/", img:"assets/press333/a333-19.jpg", q:{ it:"Boom di adesioni al progetto MasterClass 2024. Sale il numero di partecipanti" } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/a-laquila-boom-di-adesioni-al-progetto-formativo-masterclass-2024/", img:"assets/press333/a333-18.jpg", q:{ it:"A L'Aquila boom di adesioni al progetto formativo MasterClass 2024" } },
  { outlet:"AQ Box TV", year:"2023", url:"https://www.aqbox.tv/notizie.php?view=22618", img:"assets/press333/a333-16.jpg", q:{ it:"Servizio televisivo sulle attività dell'associazione 3:33" } },
  { outlet:"Abruzzoweb", year:"2023", url:"https://abruzzoweb.it/laquila-masterclass-2023-grande-successo-percorso-intenso-6-maggio-evento-conclusivo/", img:"assets/press333/a333-13.jpg", q:{ it:"L'AQUILA, MASTERCLASS 2023: 'GRANDE SUCCESSO, PERCORSO INTENSO', 6 MAGGIO EVENTO CONCLUSIVO" } },
  { outlet:"YouTube", year:"2023", url:"https://www.youtube.com/watch?v=PxFAveFTMEM", img:"assets/press333/a333-17.jpg", q:{ it:"Masterclass, un\'occasione unica per gli studenti aquilani" } },
  { outlet:"Il Capoluogo", year:"2023", url:"https://www.ilcapoluogo.it/2023/04/16/droghe-di-ultima-generazione-incontro-informativo-in-questura/", img:"assets/press333/a333-11.jpg", q:{ it:"Droghe di ultima generazione, incontro informativo in Questura" } },
  { outlet:"L'Aquila Blog", year:"2023", url:"https://www.laquilablog.it/gli-algoritmi-domineranno-il-mondo-a-laquila-liniziativa-dellassociazione-333/", img:"assets/press333/a333-10.jpg", q:{ it:"'Gli algoritmi domineranno il mondo?', a L'Aquila l'iniziativa dell'associazione 3:33" } },
  { outlet:"L'Aquila Blog", year:"2023", url:"https://www.laquilablog.it/a-laquila-la-prima-masterclass-di-associazione-333-e-centro-studi-la-meta/", img:"assets/press333/a333-9.jpg", q:{ it:"A L'Aquila la prima masterclass di associazione 3:33 e Centro studi La Meta" } },
  { outlet:"L'Aquila Blog", year:"2023", url:"https://www.laquilablog.it/laquila-al-via-masterclass-per-ispirare-studenti-superiori-verso-eccellenza/", img:"assets/press333/a333-8.jpg", q:{ it:"L'Aquila, al via Masterclass per ispirare studenti superiori verso eccellenza" } },
  { outlet:"InfoMedia News", year:"2023", url:"https://infomedianews.com/laquila-presentato-progetto-masterclass-2023/", img:"assets/press333/a333-2.jpg", q:{ it:"L'Aquila: presentato progetto MasterClass 2023" } },
  { outlet:"L'Aquila Blog", year:"2023", url:"https://www.laquilablog.it/associazione-333-un-concorso-giornalistico-in-memoria-del-medico-libanese-mohamed-ali-zaraket/", img:"assets/press333/a333-4.jpg", q:{ it:"Associazione 3:33, un concorso giornalistico in memoria del medico libanese Mohamed Alì Zaraket" } },
  { outlet:"Abruzzoweb", year:"2023", url:"https://abruzzoweb.it/associazione-3-33-da-laquila-progetto-sociale-di-rinascita-concorso-in-memoria-dottor-zaraket/", img:"assets/press333/a333-3.jpg", q:{ it:"ASSOCIAZIONE '3.33': DA L'AQUILA PROGETTO SOCIALE DI RINASCITA, CONCORSO IN MEMORIA DOTTOR ZARAKET" } },
  { outlet:"AQ Box TV", year:"2023", url:"https://www.aqbox.tv/notizie.php?view=21919", img:"assets/press333/a333-1.jpg", q:{ it:"Servizio televisivo sulle attività dell'associazione 3:33" } },
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

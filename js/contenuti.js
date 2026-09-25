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

  { date:{ it:"26 settembre 2026", en:"26 September 2026", es:"26 de septiembre de 2026", fr:"26 septembre 2026" }, tag:NTAG.conf,
    url:"assets/press/rigenerazioni-locandina.jpg",
    img:"assets/press/rigenerazioni-talk-ascoli.jpg",
    t:{ it:"Invited talk ad Ascoli Piceno con RigenerAzioni", en:"Invited talk in Ascoli Piceno with RigenerAzioni", es:"Charla invitada en Ascoli Piceno con RigenerAzioni", fr:"Conférence invitée à Ascoli Piceno avec RigenerAzioni" },
    d:{ it:"Ho ricevuto l'invito da RigenerAzioni e da Giulio Brandimarti per un talk di fisica presso l'Ufficio Rigenerazione Ex Carbon di Ascoli Piceno: scienza, innovazione e futuro, sabato 26 settembre dalle 10:00 alle 13:00.", en:"Invited by RigenerAzioni and Giulio Brandimarti for a physics talk at the Ufficio Rigenerazione Ex Carbon in Ascoli Piceno: science, innovation and the future, Saturday 26 September from 10:00 to 13:00.", es:"Invitado por RigenerAzioni y Giulio Brandimarti a una charla de física en la Oficina de Regeneración Ex Carbon de Ascoli Piceno: ciencia, innovación y futuro, el sábado 26 de septiembre de 10:00 a 13:00.", fr:"Invité par RigenerAzioni et Giulio Brandimarti pour une conférence de physique à l'Ufficio Rigenerazione Ex Carbon d'Ascoli Piceno : science, innovation et avenir, samedi 26 septembre de 10h à 13h." } },

  { date:{ it:"Set 2026", en:"Sep 2026", es:"Sep 2026", fr:"Sept. 2026" }, tag:NTAG.conf,
    url:"nanoinnovation-2026.html",
    img:"assets/nanoinnovation/09-foto-di-gruppo.jpg",
    t:{ it:"Due inviti a NanoInnovation 2026, come keynote speaker e come ospite", en:"Two invitations to NanoInnovation 2026, as keynote speaker and as guest", es:"Dos invitaciones a NanoInnovation 2026, como keynote speaker y como invitado", fr:"Deux invitations à NanoInnovation 2026, comme keynote speaker et comme invité" },
    d:{ it:"Alla Sapienza di Roma, dal 14 al 18 settembre, ho aperto come keynote speaker la sessione YoungInnovation «Space Missions and Nanotech» su invito del prof. Danilo Dini, parlando dell'ambiente spaziale e di come le nanotecnologie aiutano ad affrontarlo. Venerdì sono stato ospite della sessione ENEA sui materiali di frontiera per l'energia, su invito di Daniele Mirabile Gattia, con i risultati sui compositi polimerici con filler 2D per la gestione termica dei sistemi spaziali.", en:"At Sapienza University in Rome, from 14 to 18 September, I opened the YoungInnovation session 'Space Missions and Nanotech' as keynote speaker at the invitation of Prof. Danilo Dini, talking about the space environment and how nanotechnologies help us face it. On Friday I was a guest of the ENEA session on frontier materials for energy, invited by Daniele Mirabile Gattia, presenting our results on polymer composites with 2D fillers for thermal management in space systems.", es:"En la Sapienza de Roma, del 14 al 18 de septiembre, abrí como keynote speaker la sesión YoungInnovation «Space Missions and Nanotech» por invitación del prof. Danilo Dini, hablando del entorno espacial y de cómo las nanotecnologías ayudan a afrontarlo. El viernes fui invitado a la sesión de ENEA sobre materiales de frontera para la energía, por invitación de Daniele Mirabile Gattia, con los resultados sobre compuestos poliméricos con rellenos 2D para la gestión térmica de los sistemas espaciales.", fr:"À la Sapienza de Rome, du 14 au 18 septembre, j'ai ouvert en tant que keynote speaker la session YoungInnovation « Space Missions and Nanotech » à l'invitation du prof. Danilo Dini, en parlant de l'environnement spatial et de la façon dont les nanotechnologies aident à y faire face. Vendredi, j'étais invité à la session de l'ENEA sur les matériaux de frontière pour l'énergie, à l'invitation de Daniele Mirabile Gattia, avec les résultats sur les composites polymères à charges 2D pour la gestion thermique des systèmes spatiaux." } },

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

  { img:"assets/press/rigenerazioni-talk-ascoli.jpg", tag:NTAG.conf,
    date:{ it:"26 settembre 2026", en:"26 September 2026", es:"26 de septiembre de 2026", fr:"26 septembre 2026" },
    t:{ it:"Invited talk ad Ascoli Piceno: «Talk Fisico» con RigenerAzioni", en:"Invited talk in Ascoli Piceno: 'Talk Fisico' with RigenerAzioni", es:"Charla invitada en Ascoli Piceno: «Talk Fisico» con RigenerAzioni", fr:"Conférence invitée à Ascoli Piceno : « Talk Fisico » avec RigenerAzioni" },
    d:{ it:"RigenerAzioni impresa sociale e Giulio Brandimarti mi hanno invitato all'Ufficio Rigenerazione Ex Carbon per un incontro aperto alla città su scienza, innovazione e futuro: sabato 26 settembre, dalle 10:00 alle 13:00.", en:"RigenerAzioni social enterprise and Giulio Brandimarti invited me to the Ufficio Rigenerazione Ex Carbon for an open meeting on science, innovation and the future: Saturday 26 September, 10:00–13:00.", es:"RigenerAzioni empresa social y Giulio Brandimarti me invitaron a la Oficina de Regeneración Ex Carbon a un encuentro abierto sobre ciencia, innovación y futuro: sábado 26 de septiembre, de 10:00 a 13:00.", fr:"RigenerAzioni entreprise sociale et Giulio Brandimarti m'ont invité à l'Ufficio Rigenerazione Ex Carbon pour une rencontre ouverte sur la science, l'innovation et l'avenir : samedi 26 septembre, de 10h à 13h." },
    url:"assets/press/rigenerazioni-locandina.jpg" },

  { img:"assets/inno-talks-2/sala.jpg", tag:NTAG.social,
    date:{ it:"24 settembre 2026", en:"24 September 2026", es:"24 de septiembre de 2026", fr:"24 septembre 2026" },
    t:{ it:"Inno Talk #2, com'è andata «Dalla ricerca al prodotto»", en:"Inno Talk #2: how 'From research to product' went", es:"Inno Talk #2: así fue «De la investigación al producto»", fr:"Inno Talk #2 : comment s'est passé « De la recherche au produit »" },
    d:{ it:"Oltre 40 persone all'Irish Pub di via Verdi per il secondo aperitivo dell'innovazione ideato e condotto da Mirko Rocci per Innovalley. Qui trovate la diretta integrale, le foto e il resoconto, dal keynote del prof. Michele Flammini alle imprese del Tecnopolo d'Abruzzo West Aquila e Accyourate Group.", en:"Over 40 people at the Irish Pub in via Verdi for the second innovation aperitif created and hosted by Mirko Rocci for Innovalley. Here you can find the full live stream, the photos and the report, from Prof. Michele Flammini's keynote to the Tecnopolo d'Abruzzo companies West Aquila and Accyourate Group.", es:"Más de 40 personas en el Irish Pub de via Verdi para el segundo aperitivo de la innovación ideado y conducido por Mirko Rocci para Innovalley. Aquí están la retransmisión completa, las fotos y el resumen, desde la ponencia del prof. Michele Flammini hasta las empresas del Tecnopolo d'Abruzzo West Aquila y Accyourate Group.", fr:"Plus de 40 personnes à l'Irish Pub de via Verdi pour le deuxième apéritif de l'innovation conçu et animé par Mirko Rocci pour Innovalley. Voici le direct intégral, les photos et le compte rendu, de la keynote du prof. Michele Flammini aux entreprises du Tecnopolo d'Abruzzo West Aquila et Accyourate Group." },
    url:"inno-talks-2.html" },

  { img:"assets/press/laquilive-icona.png", tag:NTAG.social,
    date:{ it:"19 agosto 2026", en:"19 August 2026", es:"19 de agosto de 2026", fr:"19 août 2026" },
    t:{ it:"È nata L'AquiLive: l'app gratuita degli eventi dell'Aquila", en:"Introducing L'AquiLive: the free events app for L'Aquila", es:"Nace L'AquiLive: la app gratuita de eventos de L'Aquila", fr:"Voici L'AquiLive : l'appli gratuite des événements de L'Aquila" },
    d:{ it:"Ho ideato e costruito l'app che raccoglie tutti gli eventi dell'Aquila e provincia: concerti, teatro, sagre, cinema, Perdonanza, news locali, mappa e trasporti. Gratuita, in 6 lingue, senza pubblicità, ora su Google Play e App Store: il mio modo di restituire qualcosa alla città.", en:"I designed and built the app that gathers every event in L'Aquila and its province: concerts, theatre, festivals, cinema, Perdonanza, local news, map and transport. Free, in 6 languages, ad-free, now on Google Play and the App Store — my way of giving something back to the city.", es:"Ideé y construí la app que reúne todos los eventos de L'Aquila y su provincia: conciertos, teatro, fiestas, cine, Perdonanza, noticias locales, mapa y transporte. Gratuita, en 6 idiomas, sin publicidad, ya en Google Play y App Store.", fr:"J'ai conçu et développé l'appli qui rassemble tous les événements de L'Aquila et de sa province : concerts, théâtre, fêtes, cinéma, Perdonanza, actualités locales, carte et transports. Gratuite, en 6 langues, sans publicité, désormais sur Google Play et l'App Store." },
    url:"laquilive-app.html" },  { img:"assets/awards/leonardo-cingolani.jpg", tag:NTAG.award,
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

  { outlet:"A4 Quotidiano", year:"2026", url:"assets/press/laquilive-articolo.pdf", img:"assets/press/laquilive-abruzzosera.jpg",
    q:{ it:"«Arriva l'app L'AquiLive con tutti gli eventi di L'Aquila e dintorni», ideata e sviluppata da Mirko Rocci — edizione del 26 agosto 2026.", en:"'The L'AquiLive app arrives with all the events of L'Aquila and its surroundings', devised and developed by Mirko Rocci — 26 August 2026 edition.", es:"«Llega la app L'AquiLive con todos los eventos de L'Aquila y alrededores», ideada y desarrollada por Mirko Rocci — edición del 26 de agosto de 2026.", fr:"« Voici l'appli L'AquiLive avec tous les événements de L'Aquila et ses environs », conçue et développée par Mirko Rocci — édition du 26 août 2026." } },
  { outlet:"Abruzzosera", year:"2026", url:"https://abruzzosera.it/attualita/laquilive-lapp-gratuita-per-laquila-ideata-dal-fisico-mirko-rocci/", img:"assets/press/laquilive-abruzzosera.jpg",
    q:{ it:"«L'AquiLive, l'app gratuita per L'Aquila ideata dal fisico Mirko Rocci».", en:"'L'AquiLive, the free app for L'Aquila devised by physicist Mirko Rocci'.", es:"«L'AquiLive, la app gratuita para L'Aquila ideada por el físico Mirko Rocci».", fr:"« L'AquiLive, l'appli gratuite pour L'Aquila conçue par le physicien Mirko Rocci »." } },
  { outlet:"L'Aquila Blog", year:"2026", url:"https://www.laquilablog.it/nasce-laquilive-lapp-gratuita-con-tutti-gli-eventi-della-citta/", img:"assets/press/laquilive-laquilablog.jpg",
    q:{ it:"«Nasce L'AquiLive, l'app gratuita con tutti gli eventi della città».", en:"'L'AquiLive is born, the free app with all the city's events'.", es:"«Nace L'AquiLive, la app gratuita con todos los eventos de la ciudad».", fr:"« Naissance de L'AquiLive, l'appli gratuite avec tous les événements de la ville »." } },
  { outlet:"News-Town", year:"2026", url:"https://news-town.it/2026/08/25/scenari/arriva-lapp-laquilive-con-tutti-gli-eventi-di-laquila-e-dintorni/", img:"assets/press/laquilive-newstown.jpg",
    q:{ it:"«Arriva l'app L'AquiLive con tutti gli eventi di L'Aquila e dintorni».", en:"'The L'AquiLive app arrives with all the events of L'Aquila and its surroundings'.", es:"«Llega la app L'AquiLive con todos los eventos de L'Aquila y alrededores».", fr:"« Voici l'appli L'AquiLive avec tous les événements de L'Aquila et ses environs »." } },

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

  { outlet:"Inno99 · La serata", year:"2026", url:"inno-talks-2.html", img:"assets/inno-talks-2/sala.jpg",
    q:{ it:"Inno Talks #2, com'è andata: la diretta integrale, le foto e il resoconto della serata del 24 settembre all'Irish Pub Via Verdi, condotta da Mirko Rocci.", en:"Inno Talks #2, how it went: the full live stream, the photos and the report of the evening of 24 September at the Irish Pub Via Verdi.", es:"Inno Talks #2, así fue: la retransmisión completa, las fotos y el resumen de la velada del 24 de septiembre en el Irish Pub Via Verdi.", fr:"Inno Talks #2, comment ça s'est passé : le direct intégral, les photos et le compte rendu de la soirée du 24 septembre à l'Irish Pub Via Verdi." } },
  { outlet:"L'Aquila Blog", year:"2026", url:"https://www.laquilablog.it/dalla-ricerca-al-prodotto-il-24-settembre-il-secondo-inno-talk-di-inno99/", img:"assets/press/innotalk2-laquilablog.jpg",
    q:{ it:"«Dalla ricerca al prodotto», il 24 settembre il secondo Inno-Talk di Inno99.", en:"'From research to product': the second Inno-Talk by Inno99 on 24 September.", es:"«De la investigación al producto»: el 24 de septiembre el segundo Inno-Talk de Inno99.", fr:"« De la recherche au produit » : le 24 septembre, le deuxième Inno-Talk d'Inno99." } },
  { outlet:"AbruzzoWeb", year:"2026", url:"https://www.abruzzoweb.it/dalla-ricerca-al-prodotto-aperitivi-dellinnovazione-allaquila-il-secondo-inno-talk-di-inno99/", img:"assets/press/innotalk2-abruzzoweb.jpg",
    q:{ it:"«Dalla ricerca al prodotto»: gli Aperitivi dell'Innovazione, all'Aquila il secondo Inno-Talk di Inno99.", en:"'From research to product': the Innovation Aperitifs, the second Inno99 Inno-Talk in L'Aquila.", es:"«De la investigación al producto»: los Aperitivos de la Innovación, en L'Aquila el segundo Inno-Talk de Inno99.", fr:"« De la recherche au produit » : les Apéritifs de l'Innovation, à L'Aquila le deuxième Inno-Talk d'Inno99." } },
  { outlet:"Rete8", year:"2026", url:"https://www.rete8.it/cronaca/laquila-dalla-ricerca-al-prodotto-secondo-inno-talk-di-inno99/", img:"assets/press/innotalk2-rete8.jpg",
    q:{ it:"L'Aquila: «Dalla ricerca al prodotto», secondo Inno-Talk di Inno99.", en:"L'Aquila: 'From research to product', the second Inno-Talk by Inno99.", es:"L'Aquila: «De la investigación al producto», segundo Inno-Talk de Inno99.", fr:"L'Aquila : « De la recherche au produit », deuxième Inno-Talk d'Inno99." } },
  { outlet:"Il Centro", year:"2026", url:"assets/press/ilcentro-innotalk-pagina.jpg", img:"assets/press/ilcentro-innotalk.jpg",
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
  { outlet:"Il Centro", year:"2024", url:"assets/press333/ilcentro-musk-pagina.jpg", img:"assets/press333/ilcentro-musk.jpg",
    q:{ it:"«Elon Musk adotti L'Aquila per un futuro sempre più digitale» — edizione cartacea del 22 ottobre 2024.", en:"'May Elon Musk adopt L'Aquila for an ever more digital future' — print edition, 22 October 2024.", es:"«Que Elon Musk adopte L'Aquila para un futuro cada vez más digital» — edición impresa del 22 de octubre de 2024.", fr:"« Qu'Elon Musk adopte L'Aquila pour un avenir toujours plus numérique » — édition papier du 22 octobre 2024." } },
  { outlet:"Il Messaggero", year:"2024", url:"assets/press333/ilmessaggero-musk-pagina.jpg", img:"assets/press333/ilmessaggero-musk.jpg",
    q:{ it:"«Verso il futuro smart: una proposta mira a coinvolgere Elon Musk e le sue aziende» — edizione cartacea, ottobre 2024.", en:"'Towards the smart future: a proposal aims to involve Elon Musk and his companies' — print edition, October 2024.", es:"«Hacia el futuro smart: una propuesta busca implicar a Elon Musk y sus empresas» — edición impresa, octubre de 2024.", fr:"« Vers le futur smart : une proposition vise à impliquer Elon Musk et ses entreprises » — édition papier, octobre 2024." } },
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

/* =========================================================
   DOMANDE FREQUENTI (sezione #faq) - q = domanda, a = risposta (it/en/es/fr).
   Testi brevi e fattuali: sono quelli che motori e AI citano.
   Dopo ogni modifica: node tools/prerender.js
   ========================================================= */
const FAQ = [
  { q:{"it": "Chi è Mirko Rocci?", "en": "Who is Mirko Rocci?", "es": "¿Quién es Mirko Rocci?", "fr": "Qui est Mirko Rocci ?"},
    a:{"it": "Mirko Rocci è un fisico e tecnologo italiano, Ph.D. in Fisica della Materia Condensata, attivo tra ricerca scientifica e industria spaziale. Lavora come tecnologo in Thales Alenia Space Italia, con sede all'Aquila, dove guida l'innovazione per l'hardware satellitare di volo. È iscritto all'Ordine dei Chimici e dei Fisici (LUAM) e ha l'Abilitazione Scientifica Nazionale (02/B1). È inoltre CTO e co-founder di Clair Clinique, responsabile Open Innovation nel Comitato Tecnico-Scientifico del Distretto Aerospaziale Abruzzo e fondatore e presidente dell'associazione culturale 3:33.", "en": "Mirko Rocci is an Italian physicist and technologist, Ph.D. in Fisica della Materia Condensata, active between scientific research and the space industry. He works as a technologist at Thales Alenia Space Italia, based in L'Aquila, where he leads innovation for flight satellite hardware. He is registered with the Ordine dei Chimici e dei Fisici (LUAM) and holds the Abilitazione Scientifica Nazionale (02/B1). He is also CTO and co-founder of Clair Clinique, Open Innovation manager in the Comitato Tecnico-Scientifico del Distretto Aerospaziale Abruzzo and founder and president of the cultural association 3:33.", "es": "Mirko Rocci es un físico y tecnólogo italiano, Ph.D. en Física de la Materia Condensada, activo entre la investigación científica y la industria espacial. Trabaja como tecnólogo en Thales Alenia Space Italia, con sede en L'Aquila, donde lidera la innovación para el hardware satelital de vuelo. Está inscrito en el Ordine dei Chimici e dei Fisici (LUAM) y tiene la Abilitazione Scientifica Nazionale (02/B1). Es además CTO y co-founder de Clair Clinique, responsable de Open Innovation en el Comitato Tecnico-Scientifico del Distretto Aerospaziale Abruzzo y fundador y presidente de la asociación cultural 3:33.", "fr": "Mirko Rocci est un physicien et technologue italien, Ph.D. en Physique de la Matière Condensée, actif entre recherche scientifique et industrie spatiale. Il travaille comme technologue chez Thales Alenia Space Italia, dont le siège est à L'Aquila, où il dirige l'innovation pour le matériel satellitaire de vol. Il est inscrit à l'Ordine dei Chimici e dei Fisici (LUAM) et possède l'Abilitazione Scientifica Nazionale (02/B1). Il est en outre CTO et co-founder de Clair Clinique, responsable Open Innovation au sein du Comitato Tecnico-Scientifico du Distretto Aerospaziale Abruzzo et fondateur et président de l'association culturelle 3:33."} },
  { q:{"it": "Di che cosa si occupa Mirko Rocci come ricercatore e tecnologo?", "en": "What does Mirko Rocci do as a researcher and technologist?", "es": "¿De qué se ocupa Mirko Rocci como investigador y tecnólogo?", "fr": "De quoi s'occupe Mirko Rocci en tant que chercheur et technologue ?"},
    a:{"it": "Mirko Rocci si occupa di tecnologie quantistiche, superconduttività, nanotecnologie e tecnologie per lo spazio, dalla fisica fondamentale all'hardware spaziale industriale. I suoi campi di ricerca includono nanotecnologie ibride per supercomputer classici e quantistici, spintronica e superconduttività non convenzionale, nanodispositivi quantistici ibridi e materiali 2D come grafene, h-BN e Cr₂Te₃. In Thales Alenia Space lavora su sistemi satellitari per telecomunicazioni, geolocalizzazione, difesa e osservazione terrestre. È autore di 28 pubblicazioni peer-reviewed su riviste come Nature Materials, Nature Nanotechnology e Nano Letters.", "en": "Mirko Rocci deals with quantum technologies, superconductivity, nanotechnologies and technologies for space, from fundamental physics to industrial space hardware. His research fields include hybrid nanotechnologies for classical and quantum supercomputers, spintronics and unconventional superconductivity, hybrid quantum nanodevices and 2D materials such as graphene, h-BN and Cr₂Te₃. At Thales Alenia Space he works on satellite systems for telecommunications, geolocation, defence and Earth observation. He is author of 28 peer-reviewed publications in journals such as Nature Materials, Nature Nanotechnology and Nano Letters.", "es": "Mirko Rocci se ocupa de tecnologías cuánticas, superconductividad, nanotecnologías y tecnologías para el espacio, desde la física fundamental hasta el hardware espacial industrial. Sus campos de investigación incluyen nanotecnologías híbridas para supercomputadoras clásicas y cuánticas, espintrónica y superconductividad no convencional, nanodispositivos cuánticos híbridos y materiales 2D como grafeno, h-BN y Cr₂Te₃. En Thales Alenia Space trabaja en sistemas satelitales para telecomunicaciones, geolocalización, defensa y observación terrestre. Es autor de 28 publicaciones peer-reviewed en revistas como Nature Materials, Nature Nanotechnology y Nano Letters.", "fr": "Mirko Rocci s'occupe de technologies quantiques, supraconductivité, nanotechnologies et technologies pour l'espace, de la physique fondamentale au matériel spatial industriel. Ses domaines de recherche incluent les nanotechnologies hybrides pour superordinateurs classiques et quantiques, spintronique et supraconductivité non conventionnelle, nanodispositifs quantiques hybrides et matériaux 2D tels que graphène, h-BN et Cr₂Te₃. Chez Thales Alenia Space il travaille sur des systèmes satellitaires pour télécommunications, géolocalisation, défense et observation terrestre. Il est auteur de 28 publications peer-reviewed dans des revues comme Nature Materials, Nature Nanotechnology et Nano Letters."} },
  { q:{"it": "Qual è la formazione di Mirko Rocci?", "en": "What is Mirko Rocci's education?", "es": "¿Cuál es la formación de Mirko Rocci?", "fr": "Quelle est la formation de Mirko Rocci ?"},
    a:{"it": "Mirko Rocci si è formato tra Italia, Spagna e Stati Uniti. Ha conseguito laurea triennale e specialistica in Fisica all'Università degli Studi dell'Aquila (2002–2009), con laurea specialistica 110/110. Ha ottenuto il Ph.D. in Fisica della Materia Condensata presso Universidad Complutense de Madrid e Universidad Politécnica de Madrid (2011–2016), con tesi «Proximity Effects in Complex Oxide Nanostructures». È stato ricercatore post-doc alla Scuola Normale Superiore di Pisa, Postdoctoral Associate al MIT e Marie Skłodowska-Curie Fellow tra MIT e NEST — CNR/Scuola Normale Superiore.", "en": "Mirko Rocci was trained between Italy, Spain and the United States. He earned a bachelor's and specialist degree in Physics at Università degli Studi dell'Aquila (2002–2009), with a specialist degree 110/110. He obtained the Ph.D. in Fisica della Materia Condensata at Universidad Complutense de Madrid and Universidad Politécnica de Madrid (2011–2016), with thesis «Proximity Effects in Complex Oxide Nanostructures». He was a post-doc researcher at Scuola Normale Superiore di Pisa, Postdoctoral Associate at MIT and Marie Skłodowska-Curie Fellow between MIT and NEST — CNR/Scuola Normale Superiore.", "es": "Mirko Rocci se formó entre Italia, España y Estados Unidos. Obtuvo la licenciatura de grado y la licenciatura especializada en Física en la Università degli Studi dell'Aquila (2002–2009), con licenciatura especializada 110/110. Obtuvo el Ph.D. en Física de la Materia Condensada en Universidad Complutense de Madrid y Universidad Politécnica de Madrid (2011–2016), con tesis «Proximity Effects in Complex Oxide Nanostructures». Fue investigador post-doc en la Scuola Normale Superiore di Pisa, Postdoctoral Associate en el MIT y Marie Skłodowska-Curie Fellow entre el MIT y NEST — CNR/Scuola Normale Superiore.", "fr": "Mirko Rocci s'est formé entre l'Italie, l'Espagne et les États-Unis. Il a obtenu une licence triennale et une laurea specialistica en Physique à l'Università degli Studi dell'Aquila (2002–2009), avec laurea specialistica 110/110. Il a obtenu le Ph.D. en Physique de la Matière Condensée auprès de Universidad Complutense de Madrid et Universidad Politécnica de Madrid (2011–2016), avec thèse «Proximity Effects in Complex Oxide Nanostructures». Il a été chercheur post-doc à la Scuola Normale Superiore di Pisa, Postdoctoral Associate au MIT et Marie Skłodowska-Curie Fellow entre MIT et NEST — CNR/Scuola Normale Superiore."} },
  { q:{"it": "Che cos'è Clair Clinique e qual è il ruolo di Mirko Rocci?", "en": "What is Clair Clinique and what is Mirko Rocci's role?", "es": "¿Qué es Clair Clinique y cuál es el papel de Mirko Rocci?", "fr": "Qu'est-ce que Clair Clinique et quel est le rôle de Mirko Rocci ?"},
    a:{"it": "Clair Clinique è un'impresa di cosmesi personalizzata che unisce intelligenza artificiale, robotica e analisi biometrica, con sede al Tecnopolo d'Abruzzo, all'Aquila. Mirko Rocci ne è CTO e co-founder. L'ecosistema dell'azienda combina tre elementi: Symphonie, un software di AI che trasforma i dati biometrici in formulazioni; Opera, un sistema robotico che produce il prodotto su misura in tempo reale; e Adagio, un'app che analizza la pelle e ne monitora i progressi nel tempo.", "en": "Clair Clinique is a personalized cosmetics company that combines artificial intelligence, robotics and biometric analysis, based at Tecnopolo d'Abruzzo, in L'Aquila. Mirko Rocci is its CTO and co-founder. The company's ecosystem combines three elements: Symphonie, an AI software that transforms biometric data into formulations; Opera, a robotic system that produces the made-to-measure product in real time; and Adagio, an app that analyzes the skin and monitors its progress over time.", "es": "Clair Clinique es una empresa de cosmética personalizada que une inteligencia artificial, robótica y análisis biométrico, con sede en el Tecnopolo d'Abruzzo, en L'Aquila. Mirko Rocci es su CTO y co-founder. El ecosistema de la empresa combina tres elementos: Symphonie, un software de AI que transforma los datos biométricos en formulaciones; Opera, un sistema robótico que produce el producto a medida en tiempo real; y Adagio, una app que analiza la piel y monitoriza sus progresos con el tiempo.", "fr": "Clair Clinique est une entreprise de cosmétique personnalisée qui unit intelligence artificielle, robotique et analyse biométrique, dont le siège est au Tecnopolo d'Abruzzo, à L'Aquila. Mirko Rocci en est CTO et co-founder. L'écosystème de l'entreprise combine trois éléments : Symphonie, un logiciel d'IA qui transforme les données biométriques en formulations ; Opera, un système robotique qui produit le produit sur mesure en temps réel ; et Adagio, une application qui analyse la peau et en suit les progrès au fil du temps."} },
  { q:{"it": "Che cos'è l'Associazione 3:33?", "en": "What is the Association 3:33?", "es": "¿Qué es la Asociación 3:33?", "fr": "Qu'est-ce que l'Associazione 3:33 ?"},
    a:{"it": "L'Associazione 3:33 è un'associazione culturale dell'Aquila di cui Mirko Rocci è fondatore e presidente, nata per portare scienza, tecnologia ed energia civica in città. Il nome richiama le 3:32, l'istante del terremoto del 2009, e rappresenta rinascita e apertura al futuro. Tra le sue attività ci sono la Masterclass, un percorso di seminari per gli studenti delle scuole superiori giunto alla quarta edizione nel 2026, eventi culturali pubblici e un concorso giornalistico in memoria del dott. Mohamed Alì Zaraket.", "en": "The Association 3:33 is a cultural association of L'Aquila of which Mirko Rocci is founder and president, created to bring science, technology and civic energy to the city. The name recalls 3:32, the instant of the 2009 earthquake, and represents rebirth and openness to the future. Among its activities are the Masterclass, a seminar programme for high school students that reached its fourth edition in 2026, public cultural events and a journalism competition in memory of Dr. Mohamed Alì Zaraket.", "es": "La Asociación 3:33 es una asociación cultural de L'Aquila de la que Mirko Rocci es fundador y presidente, nacida para llevar ciencia, tecnología y energía cívica a la ciudad. El nombre recuerda las 3:32, el instante del terremoto de 2009, y representa renacimiento y apertura al futuro. Entre sus actividades están la Masterclass, un recorrido de seminarios para los estudiantes de secundaria llegado a la cuarta edición en 2026, eventos culturales públicos y un concurso periodístico en memoria del dott. Mohamed Alì Zaraket.", "fr": "L'Associazione 3:33 est une association culturelle de L'Aquila dont Mirko Rocci est fondateur et président, née pour apporter science, technologie et énergie civique en ville. Le nom rappelle les 3:32, l'instant du tremblement de terre de 2009, et représente renaissance et ouverture vers l'avenir. Parmi ses activités figurent la Masterclass, un parcours de séminaires pour les élèves des lycées arrivé à sa quatrième édition en 2026, des événements culturels publics et un concours journalistique en mémoire du dott. Mohamed Alì Zaraket."} },
  { q:{"it": "Che cosa sono Inno99 e L'AquiLive?", "en": "What are Inno99 and L'AquiLive?", "es": "¿Qué son Inno99 y L'AquiLive?", "fr": "Qu'est-ce que Inno99 et L'AquiLive ?"},
    a:{"it": "Inno99 è il ciclo di «aperitivi dell'innovazione» di Innovalley, co-ideato e curato da Mirko Rocci: seminari-serata in formula aperitivo nei locali del centro storico dell'Aquila, con Inno-Talk e Inno-Podcast; il primo Inno Talk del 2 luglio 2026 ha registrato il tutto esaurito. L'AquiLive è invece l'app gratuita e senza pubblicità ideata e costruita da Rocci, che raccoglie tutti gli eventi dell'Aquila e provincia, con mappa interattiva, news locali, trasporti e cinema. È disponibile su Google Play e App Store in sei lingue.", "en": "Inno99 is the cycle of «aperitivi dell'innovazione» by Innovalley, co-designed and curated by Mirko Rocci: evening seminars in aperitivo format in venues in the historic centre of L'Aquila, with Inno-Talk and Inno-Podcast; the first Inno Talk on 2 July 2026 was sold out. L'AquiLive is instead the free and ad-free app conceived and built by Rocci, which collects all the events of L'Aquila and its province, with interactive map, local news, transport and cinema. It is available on Google Play and App Store in six languages.", "es": "Inno99 es el ciclo de «aperitivi dell'innovazione» de Innovalley, co-ideado y curado por Mirko Rocci: seminarios-velada en fórmula aperitivo en los locales del centro histórico de L'Aquila, con Inno-Talk e Inno-Podcast; el primer Inno Talk del 2 luglio 2026 registró el lleno total. L'AquiLive es en cambio la app gratuita y sin publicidad ideada y construida por Rocci, que recoge todos los eventos de L'Aquila y provincia, con mapa interactivo, noticias locales, transportes y cine. Está disponible en Google Play y App Store en seis idiomas.", "fr": "Inno99 est le cycle de «aperitivi dell'innovazione» de Innovalley, co-idéé et curé par Mirko Rocci : séminaires-soirée en formule apéritif dans les locaux du centre historique de L'Aquila, avec Inno-Talk et Inno-Podcast ; le premier Inno Talk du 2 juillet 2026 a enregistré le complet. L'AquiLive est en revanche l'application gratuite et sans publicité conçue et construite par Rocci, qui rassemble tous les événements de L'Aquila et de sa province, avec carte interactive, news locales, transports et cinéma. Elle est disponible sur Google Play et App Store en six langues."} },
  { q:{"it": "Quali riconoscimenti ha ricevuto Mirko Rocci?", "en": "What recognitions has Mirko Rocci received?", "es": "¿Qué reconocimientos ha recibido Mirko Rocci?", "fr": "Quels prix a reçu Mirko Rocci ?"},
    a:{"it": "Mirko Rocci ha ricevuto diversi premi per l'innovazione. Nel 2025 ha ottenuto la Menzione Speciale ai Leonardo Innovation Awards con il progetto G-DEPM «Graphene Direct Enabled Polymer Metallization», unica menzione assegnata a Thales Alenia Space, consegnata dall'AD di Leonardo Roberto Cingolani. È stato primo classificato al Thales Alenia Space Innovation Award, categoria Idea, nel 2025 con il progetto G-DEPM e nel 2023 con un progetto su grafene e nitruro di boro, in entrambi i casi come Team Leader. Nel 2021 ha vinto l'Hello Space Award con il progetto «Lunar».", "en": "Mirko Rocci has received several awards for innovation. In 2025 he obtained the Special Mention at the Leonardo Innovation Awards with the project G-DEPM «Graphene Direct Enabled Polymer Metallization», the only mention awarded to Thales Alenia Space, presented by the AD of Leonardo Roberto Cingolani. He was first classified at the Thales Alenia Space Innovation Award, Idea category, in 2025 with the project G-DEPM and in 2023 with a project on graphene and boron nitride, in both cases as Team Leader. In 2021 he won the Hello Space Award with the project «Lunar».", "es": "Mirko Rocci ha recibido varios premios por la innovación. En 2025 obtuvo la Menzione Speciale a los Leonardo Innovation Awards con el proyecto G-DEPM «Graphene Direct Enabled Polymer Metallization», única mención asignada a Thales Alenia Space, entregada por el AD de Leonardo Roberto Cingolani. Ha sido primer clasificado en el Thales Alenia Space Innovation Award, categoría Idea, en 2025 con el proyecto G-DEPM y en 2023 con un proyecto sobre grafeno y nitruro de boro, en ambos casos como Team Leader. En 2021 ganó el Hello Space Award con el proyecto «Lunar».", "fr": "Mirko Rocci a reçu plusieurs prix pour l'innovation. En 2025 il a obtenu la Menzione Speciale aux Leonardo Innovation Awards avec le projet G-DEPM «Graphene Direct Enabled Polymer Metallization», unique mention attribuée à Thales Alenia Space, remise par l'AD de Leonardo Roberto Cingolani. Il a été premier classé au Thales Alenia Space Innovation Award, catégorie Idea, en 2025 avec le projet G-DEPM et en 2023 avec un projet sur graphène et nitrure de bore, dans les deux cas en tant que Team Leader. En 2021 il a remporté l'Hello Space Award avec le projet «Lunar»."} },
];

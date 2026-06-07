/* =========================================================
   Site content data — Mirko Rocci  (v3, 4 languages)
   Each translatable field: { it, en, es, fr }
   ========================================================= */

const SCHOLAR_URL = "https://scholar.google.com/citations?user=vZlXhbkAAAAJ&hl=en";
const ORCID_URL   = "https://orcid.org/0000-0002-3907-5275";

const ROLE = {
  first:  { it:"Primo autore", en:"First author", es:"Primer autor", fr:"Premier auteur" },
  cofirst:{ it:"Co-primo autore", en:"Co-first author", es:"Co-primer autor", fr:"Co-premier auteur" },
  co:     { it:"Co-autore", en:"Co-author", es:"Coautor", fr:"Co-auteur" }
};

/* ---------- PUBLICATIONS (verified DOIs). First 6 = featured ---------- */
const PUBLICATIONS = [
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

/* ---------- VENTURES & AFFILIATIONS ---------- */
const VENTURES = [
  { logo:"assets/orgs/clair-logo.png", logoPlate:true, name:"Clair Clinique", url:"https://www.clairclinique.com/",
    role:{ it:"CTO & Co-founder", en:"CTO & Co-founder", es:"CTO y Cofundador", fr:"CTO & Cofondateur" },
    desc:{ it:"Cosmesi personalizzata che unisce intelligenza artificiale, robotica e analisi biometrica. L'ecosistema combina <strong>Symphonie</strong> (software AI che trasforma i dati biometrici in formulazioni), <strong>Opera</strong> (sistema robotico che produce il prodotto su misura in tempo reale) e <strong>Adagio</strong> (app che analizza la pelle e ne monitora i progressi). Sede: Tecnopolo d'Abruzzo, L'Aquila.",
      en:"Personalized cosmetics fusing artificial intelligence, robotics and biometric analysis. The ecosystem combines <strong>Symphonie</strong> (AI software turning biometric data into formulations), <strong>Opera</strong> (a robotic system that produces the custom product in real time) and <strong>Adagio</strong> (an app that scans the skin and tracks its progress). Based at Tecnopolo d'Abruzzo, L'Aquila.",
      es:"Cosmética personalizada que combina inteligencia artificial, robótica y análisis biométrico. El ecosistema integra <strong>Symphonie</strong> (software de IA que convierte los datos biométricos en formulaciones), <strong>Opera</strong> (sistema robótico que produce el producto a medida en tiempo real) y <strong>Adagio</strong> (app que analiza la piel y monitoriza su progreso). Sede: Tecnopolo d'Abruzzo, L'Aquila.",
      fr:"Cosmétique personnalisée alliant intelligence artificielle, robotique et analyse biométrique. L'écosystème réunit <strong>Symphonie</strong> (logiciel d'IA transformant les données biométriques en formulations), <strong>Opera</strong> (système robotique produisant le produit sur mesure en temps réel) et <strong>Adagio</strong> (appli qui analyse la peau et suit ses progrès). Siège : Tecnopolo d'Abruzzo, L'Aquila." } },

  { logo:"assets/orgs/daab-logo.png", logoPlate:true, name:"Distretto Aerospaziale Abruzzo", url:"https://www.distrettoaerospazialeabruzzo.it/",
    role:{ it:"Responsabile Open Innovation — Comitato Tecnico-Scientifico", en:"Head of Open Innovation — Technical-Scientific Committee", es:"Responsable de Open Innovation — Comité Técnico-Científico", fr:"Responsable Open Innovation — Comité Technique-Scientifique" },
    desc:{ it:"Il network aerospaziale della Regione Abruzzo, promosso da Leonardo, Telespazio e Thales Alenia Space, che unisce grandi imprese, PMI, atenei e centri di ricerca. Guido l'Open Innovation all'interno del Comitato Tecnico-Scientifico.",
      en:"Abruzzo's aerospace network — promoted by Leonardo, Telespazio and Thales Alenia Space — uniting large companies, SMEs, universities and research centres. I lead Open Innovation within the Technical-Scientific Committee.",
      es:"La red aeroespacial de la región de Abruzzo, promovida por Leonardo, Telespazio y Thales Alenia Space, que une grandes empresas, pymes, universidades y centros de investigación. Lidero la Open Innovation dentro del Comité Técnico-Científico.",
      fr:"Le réseau aérospatial de la région des Abruzzes, porté par Leonardo, Telespazio et Thales Alenia Space, réunissant grands groupes, PME, universités et centres de recherche. Je dirige l'Open Innovation au sein du Comité Technique-Scientifique." } },

  { logo:"assets/orgs/innovalley-logo.png", logoPlate:true, name:"Innovalley Cube S.r.l.", url:"https://www.inno-valley.it/",
    role:{ it:"Socio", en:"Partner / Shareholder", es:"Socio", fr:"Associé" },
    desc:{ it:"Hub di open innovation in Abruzzo che connette startup, imprese, enti di ricerca e professionisti: incubazione e accelerazione di startup, networking con investitori e istituzioni, formazione digitale e progetti d'impatto sul territorio.",
      en:"An open-innovation hub in Abruzzo connecting startups, companies, research bodies and professionals: startup incubation and acceleration, networking with investors and institutions, digital training and high-impact regional projects.",
      es:"Hub de open innovation en Abruzzo que conecta startups, empresas, centros de investigación y profesionales: incubación y aceleración de startups, networking con inversores e instituciones, formación digital y proyectos de impacto en el territorio.",
      fr:"Hub d'open innovation dans les Abruzzes reliant startups, entreprises, organismes de recherche et professionnels : incubation et accélération de startups, mise en relation avec investisseurs et institutions, formation numérique et projets à fort impact territorial." } }
];

/* contact note shown under the Ventures section */
const VENTURES_CONTACT = {
  label:{ it:"Per maggiori informazioni e collaborazioni scrivere a:", en:"For more information and collaborations, write to:", es:"Para más información y colaboraciones, escribir a:", fr:"Pour plus d'informations et collaborations, écrire à :" },
  emails:["mirko.rocci@innovalleycube.com","mirko.rocci@clairclinique.com","openinnovation@distrettoaerospazialeabruzzo.it"]
};

/* ---------- INSTITUTION LOGOS (clickable strip) ---------- */
const INSTITUTIONS_LOGOS = [
  { n:"Massachusetts Institute of Technology", l:"assets/logos/mit.svg", u:"https://www.mit.edu/" },
  { n:"Harvard University", l:"assets/logos/harvard2.svg", u:"https://www.harvard.edu/" },
  { n:"Scuola Normale Superiore", l:"assets/logos/sns.svg", u:"https://www.sns.it/" },
  { n:"Thales Alenia Space", l:"assets/logos/thales.svg", u:"https://www.thalesaleniaspace.com/" },
  { n:"Universidad Complutense de Madrid", l:"assets/logos/ucm.svg", u:"https://www.ucm.es/" },
  { n:"Universidad Politécnica de Madrid", l:"assets/logos/upm.png", u:"https://www.upm.es/" },
  { n:"Università degli Studi dell'Aquila", l:"assets/logos/univaq.svg", u:"https://www.univaq.it/" }
];

/* ---------- NEWS / UPDATES ---------- */
const NTAG = {
  award:{ it:"Premio", en:"Award", es:"Premio", fr:"Prix" },
  conf: { it:"Conferenza", en:"Conference", es:"Conferencia", fr:"Conférence" },
  pub:  { it:"Pubblicazione", en:"Publication", es:"Publicación", fr:"Publication" },
  patent:{ it:"Brevetto", en:"Patent", es:"Patente", fr:"Brevet" },
  social:{ it:"Sociale", en:"Outreach", es:"Social", fr:"Social" }
};
const NEWS = [
  { date:{ it:"2026", en:"2026", es:"2026", fr:"2026" }, tag:NTAG.social,
    url:"https://www.laquilablog.it/alliis-daosta-presentata-la-masterclass-2026/",
    t:{ it:"Presentata la Masterclass 2026 all'IIS d'Aosta", en:"Masterclass 2026 unveiled at IIS d'Aosta", es:"Presentada la Masterclass 2026 en el IIS d'Aosta", fr:"Présentation de la Masterclass 2026 à l'IIS d'Aosta" },
    d:{ it:"Quarta edizione del percorso formativo dell'associazione 3:33 per gli studenti delle scuole superiori dell'Aquila.", en:"Fourth edition of association 3:33's training programme for high-school students in L'Aquila.", es:"Cuarta edición del itinerario formativo de la asociación 3:33 para estudiantes de secundaria de L'Aquila.", fr:"Quatrième édition du parcours de formation de l'association 3:33 pour les lycéens de L'Aquila." } },

  { date:{ it:"Gen 2026", en:"Jan 2026", es:"Ene 2026", fr:"Janv. 2026" }, tag:NTAG.award,
    url:"https://news-town.it/2026/03/09/persone/allaquilano-mirko-rocci-una-menzione-speciale-nellinnovation-award-di-leonardo/",
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
    t:{ it:"Nuovo articolo su Reports on Progress in Physics", en:"New paper in Reports on Progress in Physics", es:"Nuevo artículo en Reports on Progress in Physics", fr:"Nouvel article dans Reports on Progress in Physics" },
    d:{ it:"Ferromagnetismo potenziato in monostrati 2D di Cr₂Te₃ accoppiati a un isolante topologico.", en:"Enhanced ferromagnetism in 2D Cr₂Te₃ monolayers coupled to a topological insulator.", es:"Ferromagnetismo potenciado en monocapas 2D de Cr₂Te₃ acopladas a un aislante topológico.", fr:"Ferromagnétisme renforcé dans des monocouches 2D de Cr₂Te₃ couplées à un isolant topologique." } },

  { date:{ it:"Gen 2025", en:"Jan 2025", es:"Ene 2025", fr:"Janv. 2025" }, tag:NTAG.patent, url:"",
    t:{ it:"Depositata domanda di brevetto europeo (EP25154627)", en:"European patent application filed (EP25154627)", es:"Solicitud de patente europea presentada (EP25154627)", fr:"Demande de brevet européen déposée (EP25154627)" },
    d:{ it:"Risultati di ricerca trasformati in proprietà intellettuale protetta.", en:"Research results turned into protected intellectual property.", es:"Resultados de investigación convertidos en propiedad intelectual protegida.", fr:"Résultats de recherche transformés en propriété intellectuelle protégée." } }
];

/* ---------- ASSOCIATION 3:33 ---------- */
const ASSOC333 = {
  logo:"assets/orgs/333-logo.png", url:"https://www.3e33.it/",
  photos:[
    { src:"assets/333/masterclass-1.jpg", cap:{ it:"Masterclass — percorso formativo per le scuole superiori", en:"Masterclass — training programme for high schools", es:"Masterclass — itinerario formativo para institutos de secundaria", fr:"Masterclass — parcours de formation pour les lycées" } },
    { src:"assets/333/masterclass-2.jpg", cap:{ it:"Seminari con esperti di scienza, tecnologia e impresa", en:"Seminars with experts in science, technology and business", es:"Seminarios con expertos en ciencia, tecnología y empresa", fr:"Séminaires avec des experts en science, technologie et entreprise" } },
    { src:"assets/333/evento-1.jpg", cap:{ it:"Eventi culturali pubblici a L'Aquila", en:"Public cultural events in L'Aquila", es:"Eventos culturales públicos en L'Aquila", fr:"Événements culturels publics à L'Aquila" } }
  ],
  highlights:[
    { icon:"school", t:{ it:"Masterclass", en:"Masterclass", es:"Masterclass", fr:"Masterclass" },
      d:{ it:"Tre edizioni di un percorso di seminari che avvicina gli studenti delle superiori all'eccellenza scientifica, tecnologica e umana.", en:"Three editions of a seminar programme bringing high-school students close to scientific, technological and human excellence.", es:"Tres ediciones de un ciclo de seminarios que acerca a los estudiantes de secundaria a la excelencia científica, tecnológica y humana.", fr:"Trois éditions d'un cycle de séminaires rapprochant les lycéens de l'excellence scientifique, technologique et humaine." } },
    { icon:"city", t:{ it:"Rinascita dei centri storici", en:"Reviving historic centres", es:"Renacimiento de los centros históricos", fr:"Renaissance des centres historiques" },
      d:{ it:"Nata dal simbolo delle 3:32 del terremoto dell'Aquila, l'associazione promuove rinascita, apertura al futuro e nuove tecnologie.", en:"Born from the symbol of 3:32 — the moment of the L'Aquila earthquake — the association promotes rebirth, openness to the future and new technologies.", es:"Nacida del símbolo de las 3:32 del terremoto de L'Aquila, la asociación promueve renacimiento, apertura al futuro y nuevas tecnologías.", fr:"Née du symbole de 3h32, l'heure du séisme de L'Aquila, l'association promeut la renaissance, l'ouverture à l'avenir et les nouvelles technologies." } },
    { icon:"heart", t:{ it:"Impegno sociale", en:"Social commitment", es:"Compromiso social", fr:"Engagement social" },
      d:{ it:"Concorsi e progetti civici, come il concorso giornalistico in memoria del dott. Mohamed Alì Zaraket, per l'integrazione tra culture.", en:"Civic contests and projects, such as the journalism prize in memory of Dr. Mohamed Alì Zaraket, fostering integration between cultures.", es:"Concursos y proyectos cívicos, como el concurso periodístico en memoria del dr. Mohamed Alì Zaraket, por la integración entre culturas.", fr:"Concours et projets civiques, comme le prix de journalisme en mémoire du Dr Mohamed Alì Zaraket, pour l'intégration entre les cultures." } },
    { icon:"rocket", t:{ it:"Visione tecnologica", en:"Technological vision", es:"Visión tecnológica", fr:"Vision technologique" },
      d:{ it:"La proposta «far adottare L'Aquila a Elon Musk» come laboratorio di rivoluzione tecnologica ha avuto eco nazionale.", en:"The proposal to 'have Elon Musk adopt L'Aquila' as a lab for technological revolution echoed nationwide.", es:"La propuesta de «que Elon Musk adopte L'Aquila» como laboratorio de revolución tecnológica tuvo eco nacional.", fr:"La proposition de « faire adopter L'Aquila par Elon Musk » comme laboratoire de révolution technologique a eu un écho national." } }
  ],
  press:[
    { outlet:"L'Aquila Blog", url:"https://www.laquilablog.it/alliis-daosta-presentata-la-masterclass-2026/", q:{ it:"All'IIS d'Aosta presentata la Masterclass 2026", en:"Masterclass 2026 unveiled at IIS d'Aosta", es:"Presentada la Masterclass 2026 en el IIS d'Aosta", fr:"Présentation de la Masterclass 2026 à l'IIS d'Aosta" } },
    { outlet:"Abruzzoweb", url:"https://abruzzoweb.it/facciamo-adottare-laquila-da-elon-musk-per-laboratorio-rivoluzione-tecnologica-la-proposta-di-3-33/", q:{ it:"«Facciamo adottare L'Aquila da Elon Musk»", en:"'Let's have Elon Musk adopt L'Aquila'", es:"«Que Elon Musk adopte L'Aquila»", fr:"« Faisons adopter L'Aquila par Elon Musk »" } },
    { outlet:"Radio L'Aquila 1", url:"https://www.radiolaquila1.it/2025/01/16/amlaquila-masterclass-2025-al-via-la-terza-edizione/", q:{ it:"Masterclass 2025: al via la terza edizione", en:"Masterclass 2025: the third edition begins", es:"Masterclass 2025: arranca la tercera edición", fr:"Masterclass 2025 : lancement de la troisième édition" } },
    { outlet:"L'Aquila Blog", url:"https://www.laquilablog.it/a-laquila-la-prima-masterclass-di-associazione-333-e-centro-studi-la-meta/", q:{ it:"La prima Masterclass dell'associazione 3:33", en:"Association 3:33's first Masterclass", es:"La primera Masterclass de la asociación 3:33", fr:"La première Masterclass de l'association 3:33" } },
    { outlet:"Abruzzoweb", url:"https://abruzzoweb.it/associazione-3-33-da-laquila-progetto-sociale-di-rinascita-concorso-in-memoria-dottor-zaraket/", q:{ it:"Progetto sociale di rinascita e concorso in memoria del dott. Zaraket", en:"A social rebirth project and prize in memory of Dr. Zaraket", es:"Proyecto social de renacimiento y concurso en memoria del dr. Zaraket", fr:"Projet social de renaissance et concours en mémoire du Dr Zaraket" } }
  ]
};

/* ---------- CAREER TIMELINE ---------- */
const TG = {
  industry:{ it:"Industria", en:"Industry", es:"Industria", fr:"Industrie" },
  research:{ it:"Ricerca", en:"Research", es:"Investigación", fr:"Recherche" },
  edu:{ it:"Formazione", en:"Education", es:"Formación", fr:"Formation" }
};
const TIMELINE = [
  { range:{ it:"2021 — oggi", en:"2021 — present", es:"2021 — actualidad", fr:"2021 — aujourd'hui" },
    role:{ it:"Tecnologo", en:"Technologist", es:"Tecnólogo", fr:"Technologue" },
    org:"Thales Alenia Space Italia", place:"L'Aquila, Italia", tag:TG.industry,
    desc:{ it:"Innovazione e ingegneria per hardware satellitare di volo; Project Leader di progetti europei e industriali oltre lo stato dell'arte.",
      en:"Innovation and engineering for satellite flight hardware; Project Leader of European and industrial projects beyond the state of the art.",
      es:"Innovación e ingeniería para hardware satelital de vuelo; Project Leader de proyectos europeos e industriales más allá del estado del arte.",
      fr:"Innovation et ingénierie pour le matériel satellitaire de vol ; Project Leader de projets européens et industriels au-delà de l'état de l'art." } },
  { range:{ it:"2018 — 2021", en:"2018 — 2021", es:"2018 — 2021", fr:"2018 — 2021" },
    role:{ it:"Marie Skłodowska-Curie Fellow", en:"Marie Skłodowska-Curie Fellow", es:"Marie Skłodowska-Curie Fellow", fr:"Marie Skłodowska-Curie Fellow" },
    org:"Massachusetts Institute of Technology (Moodera Lab) · NEST — CNR / Scuola Normale Superiore",
    place:"Cambridge (USA) · Pisa (Italia)", tag:TG.research,
    desc:{ it:"Global Fellowship «EuSuper»: memorie magnetiche superconduttive per la prossima generazione di supercomputer. Collaborazioni con Harvard University (laboratori Kim e Yacoby).",
      en:"Global Fellowship 'EuSuper': superconducting magnetic memories for the next generation of supercomputers. Collaborations with Harvard University (Kim and Yacoby labs).",
      es:"Global Fellowship «EuSuper»: memorias magnéticas superconductoras para la próxima generación de supercomputadoras. Colaboraciones con Harvard University (laboratorios Kim y Yacoby).",
      fr:"Global Fellowship « EuSuper » : mémoires magnétiques supraconductrices pour la prochaine génération de superordinateurs. Collaborations avec Harvard University (laboratoires Kim et Yacoby)." } },
  { range:{ it:"2017 — 2018", en:"2017 — 2018", es:"2017 — 2018", fr:"2017 — 2018" },
    role:{ it:"Postdoctoral Associate", en:"Postdoctoral Associate", es:"Investigador postdoctoral", fr:"Chercheur postdoctoral" },
    org:"Plasma Science and Fusion Center, Massachusetts Institute of Technology",
    place:"Cambridge, Massachusetts (USA)", tag:TG.research,
    desc:{ it:"Effetti di prossimità e interfaccia in eterogiunzioni ibride nanostrutturate nel gruppo del Dr. J. S. Moodera.",
      en:"Proximity and interfacial effects in hybrid nanostructured heterojunctions in Dr. J. S. Moodera's group.",
      es:"Efectos de proximidad e interfaz en heterouniones híbridas nanoestructuradas en el grupo del Dr. J. S. Moodera.",
      fr:"Effets de proximité et d'interface dans des hétérojonctions hybrides nanostructurées au sein du groupe du Dr J. S. Moodera." } },
  { range:{ it:"2015 — 2017", en:"2015 — 2017", es:"2015 — 2017", fr:"2015 — 2017" },
    role:{ it:"Ricercatore post-doc — NEST", en:"Postdoctoral Researcher — NEST", es:"Investigador postdoctoral — NEST", fr:"Chercheur postdoctoral — NEST" },
    org:"Scuola Normale Superiore", place:"Pisa, Italia", tag:TG.research,
    desc:{ it:"Trasporto quantistico e termoelettricità nei nanodispositivi; nanofili di InAs per applicazioni topologiche.",
      en:"Quantum transport and thermoelectricity in nanodevices; InAs nanowires for topological applications.",
      es:"Transporte cuántico y termoelectricidad en nanodispositivos; nanohilos de InAs para aplicaciones topológicas.",
      fr:"Transport quantique et thermoélectricité dans les nanodispositifs ; nanofils d'InAs pour applications topologiques." } },
  { range:{ it:"2011 — 2016", en:"2011 — 2016", es:"2011 — 2016", fr:"2011 — 2016" },
    role:{ it:"Ph.D. in Fisica della Materia Condensata", en:"Ph.D. in Condensed Matter Physics", es:"Doctorado en Física de la Materia Condensada", fr:"Doctorat en physique de la matière condensée" },
    org:"Universidad Complutense de Madrid · Universidad Politécnica de Madrid · Campus de Excelencia Internacional Moncloa",
    place:"Madrid, Spagna", tag:TG.edu,
    desc:{ it:"Programma di eccellenza PICATA — Campus Moncloa. Tesi: «Proximity Effects in Complex Oxide Nanostructures».",
      en:"PICATA excellence programme — Campus Moncloa. Thesis: 'Proximity Effects in Complex Oxide Nanostructures'.",
      es:"Programa de excelencia PICATA — Campus Moncloa. Tesis: «Proximity Effects in Complex Oxide Nanostructures».",
      fr:"Programme d'excellence PICATA — Campus Moncloa. Thèse : « Proximity Effects in Complex Oxide Nanostructures »." } },
  { range:{ it:"2002 — 2009", en:"2002 — 2009", es:"2002 — 2009", fr:"2002 — 2009" },
    role:{ it:"Laurea triennale & specialistica in Fisica", en:"B.Sc. & M.Sc. in Physics", es:"Grado y Máster en Física", fr:"Licence & Master en physique" },
    org:"Università degli Studi dell'Aquila", place:"L'Aquila, Italia", tag:TG.edu,
    desc:{ it:"Laurea specialistica 110/110. Tesi sull'interazione tra ferromagnetismo e superconduttività in interfacce di ossidi complessi.",
      en:"M.Sc. 110/110. Thesis on the interplay between ferromagnetism and superconductivity in complex-oxide interfaces.",
      es:"Máster 110/110. Tesis sobre la interacción entre ferromagnetismo y superconductividad en interfaces de óxidos complejos.",
      fr:"Master 110/110. Mémoire sur l'interaction entre ferromagnétisme et supraconductivité dans des interfaces d'oxydes complexes." } }
];

/* ---------- AWARDS (optional url + img + cap) ---------- */
const AWARDS = [
  { year:"2025", url:"https://news-town.it/2026/03/09/persone/allaquilano-mirko-rocci-una-menzione-speciale-nellinnovation-award-di-leonardo/",
    img:"assets/awards/leonardo-cingolani.jpg",
    cap:{ it:"Premiazione con Roberto Cingolani (AD Leonardo) — Innovation Award 2025", en:"Award ceremony with Roberto Cingolani (Leonardo CEO) — Innovation Award 2025", es:"Entrega con Roberto Cingolani (CEO de Leonardo) — Innovation Award 2025", fr:"Remise du prix avec Roberto Cingolani (PDG de Leonardo) — Innovation Award 2025" },
    t:{ it:"Menzione Speciale ai Leonardo Innovation Awards 2025 — progetto G-DEPM «Graphene Direct Enabled Polymer Metallization» (unica menzione per Thales Alenia Space).", en:"Special Mention at the Leonardo Innovation Awards 2025 — project G-DEPM 'Graphene Direct Enabled Polymer Metallization' (the only mention for Thales Alenia Space).", es:"Mención Especial en los Leonardo Innovation Awards 2025 — proyecto G-DEPM «Graphene Direct Enabled Polymer Metallization» (única mención para Thales Alenia Space).", fr:"Mention Spéciale aux Leonardo Innovation Awards 2025 — projet G-DEPM « Graphene Direct Enabled Polymer Metallization » (seule mention pour Thales Alenia Space)." } },
  { year:"2025", t:{ it:"Thales Alenia Space Innovation Award — categoria Idea (1° classificato), progetto G-DEPM, Team Leader.", en:"Thales Alenia Space Innovation Award — Idea category (1st place), project G-DEPM, Team Leader.", es:"Thales Alenia Space Innovation Award — categoría Idea (1.º clasificado), proyecto G-DEPM, Team Leader.", fr:"Thales Alenia Space Innovation Award — catégorie Idée (1er), projet G-DEPM, Team Leader." } },
  { year:"2024", t:{ it:"Membro ufficiale dell'Industrial Advisory Board del progetto Horizon Europe Pathfinder «ATYPIQUAL».", en:"Official member of the Industrial Advisory Board of the Horizon Europe Pathfinder project 'ATYPIQUAL'.", es:"Miembro oficial del Industrial Advisory Board del proyecto Horizon Europe Pathfinder «ATYPIQUAL».", fr:"Membre officiel de l'Industrial Advisory Board du projet Horizon Europe Pathfinder « ATYPIQUAL »." } },
  { year:"2023", t:{ it:"Thales Alenia Space Innovation Award — categoria Idea (1° classificato), progetto su grafene e nitruro di boro, Team Leader.", en:"Thales Alenia Space Innovation Award — Idea category (1st place), graphene & boron-nitride project, Team Leader.", es:"Thales Alenia Space Innovation Award — categoría Idea (1.º clasificado), proyecto sobre grafeno y nitruro de boro, Team Leader.", fr:"Thales Alenia Space Innovation Award — catégorie Idée (1er), projet sur le graphène et le nitrure de bore, Team Leader." } },
  { year:"2021", t:{ it:"Hello Space Award (1° classificato), progetto «Lunar» — Thales Alenia Space.", en:"Hello Space Award (1st place), project 'Lunar' — Thales Alenia Space.", es:"Hello Space Award (1.º clasificado), proyecto «Lunar» — Thales Alenia Space.", fr:"Hello Space Award (1er), projet « Lunar » — Thales Alenia Space." } },
  { year:"2021", t:{ it:"Valutatore ufficiale selezionato dalla Commissione Europea per i progetti Horizon Europe — Marie Skłodowska-Curie.", en:"Official evaluator selected by the European Commission for Horizon Europe — Marie Skłodowska-Curie projects.", es:"Evaluador oficial seleccionado por la Comisión Europea para los proyectos Horizon Europe — Marie Skłodowska-Curie.", fr:"Évaluateur officiel sélectionné par la Commission européenne pour les projets Horizon Europe — Marie Skłodowska-Curie." } },
  { year:"2018", t:{ it:"Immagine di copertina della rivista internazionale Nano Letters (American Chemical Society).", en:"Cover image of the international journal Nano Letters (American Chemical Society).", es:"Imagen de portada de la revista internacional Nano Letters (American Chemical Society).", fr:"Image de couverture de la revue internationale Nano Letters (American Chemical Society)." } }
];

/* ---------- PRESS (all links verified). First 6 visible, rest collapsible ---------- */
const PRESS = [
  { outlet:"L'Aquila Blog", year:"2026", url:"https://www.laquilablog.it/alliis-daosta-presentata-la-masterclass-2026/", q:{ it:"All'IIS d'Aosta presentata la Masterclass 2026.", en:"Masterclass 2026 unveiled at IIS d'Aosta.", es:"Presentada la Masterclass 2026 en el IIS d'Aosta.", fr:"Présentation de la Masterclass 2026 à l'IIS d'Aosta." } },
  { outlet:"News-Town", year:"2026", url:"https://news-town.it/2026/03/09/persone/allaquilano-mirko-rocci-una-menzione-speciale-nellinnovation-award-di-leonardo/", q:{ it:"«All'aquilano Mirko Rocci una menzione speciale nell'Innovation Award di Leonardo.»", en:"'L'Aquila's Mirko Rocci receives a special mention at Leonardo's Innovation Award.'", es:"«Al aquilano Mirko Rocci una mención especial en el Innovation Award de Leonardo.»", fr:"« Le natif de L'Aquila Mirko Rocci reçoit une mention spéciale à l'Innovation Award de Leonardo. »" } },
  { outlet:"Leonardo", year:"2025", url:"https://www.leonardo.com/en/news-and-stories-detail/-/detail/innovation-award-2025-edizione-record", q:{ it:"Innovation Award 2025: edizione record, il progetto G-DEPM tra i protagonisti.", en:"Innovation Award 2025: a record edition, with the G-DEPM project among the protagonists.", es:"Innovation Award 2025: edición récord, con el proyecto G-DEPM entre los protagonistas.", fr:"Innovation Award 2025 : édition record, avec le projet G-DEPM parmi les protagonistes." } },
  { outlet:"Abruzzoweb", year:"2024", url:"https://abruzzoweb.it/facciamo-adottare-laquila-da-elon-musk-per-laboratorio-rivoluzione-tecnologica-la-proposta-di-3-33/", q:{ it:"«Facciamo adottare L'Aquila da Elon Musk per la rivoluzione tecnologica.»", en:"'Let's have Elon Musk adopt L'Aquila for a technological revolution.'", es:"«Que Elon Musk adopte L'Aquila para la revolución tecnológica.»", fr:"« Faisons adopter L'Aquila par Elon Musk pour la révolution technologique. »" } },
  { outlet:"Radio L'Aquila 1", year:"2024", url:"https://www.radiolaquila1.it/2024/10/20/associazione-333-presidente-rocci-facciamo-adottare-laquila-da-elon-musk/", q:{ it:"Presidente Rocci: «Facciamo adottare L'Aquila da Elon Musk».", en:"President Rocci: 'Let's have Elon Musk adopt L'Aquila'.", es:"Presidente Rocci: «Que Elon Musk adopte L'Aquila».", fr:"Président Rocci : « Faisons adopter L'Aquila par Elon Musk »." } },
  { outlet:"L'Aquila Blog", year:"2024", url:"https://www.laquilablog.it/associazione-3-33-proponiamo-ladozione-tecnologica-della-citta-dellaquila-da-parte-di-elon-musk/", q:{ it:"«Proponiamo l'adozione tecnologica della città dell'Aquila da parte di Elon Musk.»", en:"'We propose the technological adoption of L'Aquila by Elon Musk.'", es:"«Proponemos la adopción tecnológica de L'Aquila por parte de Elon Musk.»", fr:"« Nous proposons l'adoption technologique de L'Aquila par Elon Musk. »" } },
  { outlet:"la Repubblica", year:"2020", url:"https://www.repubblica.it/tecnologia/2020/06/17/news/realizzata_una_batteria_a_fase_quantica_e_la_prima_volta-259439007/", q:{ it:"«Realizzata una batteria a fase quantica. È la prima volta.»", en:"'A quantum phase battery has been built. For the first time.'", es:"«Creada una batería de fase cuántica. Es la primera vez.»", fr:"« Une batterie à phase quantique a été créée. Pour la première fois. »" } },
  { outlet:"Physics World", year:"2020", url:"https://physicsworld.com/a/physicists-create-quantum-phase-battery/", q:{ it:"«Physicists create quantum phase battery.»", en:"'Physicists create quantum phase battery.'", es:"«Physicists create quantum phase battery.»", fr:"« Physicists create quantum phase battery. »" } },
  { outlet:"Corriere Nazionale", year:"2020", url:"https://www.corrierenazionale.it/2020/09/13/superconduttori-cnr-realizza-un-nanofilo-innovativo/", q:{ it:"Un transistor a supercorrente da un nanofilo di nuova generazione.", en:"A supercurrent transistor from a next-generation nanowire.", es:"Un transistor de supercorriente a partir de un nanohilo de nueva generación.", fr:"Un transistor à supercourant à partir d'un nanofil de nouvelle génération." } },
  { outlet:"Abruzzoweb", year:"2020", url:"https://abruzzoweb.it/la-prima-batteria-a-fase-quantica-un-aquilano-nel-progetto-rivoluzionario/", q:{ it:"«La prima batteria a fase quantica: un aquilano nel progetto rivoluzionario.»", en:"'The first quantum phase battery: an L'Aquila native in the groundbreaking project.'", es:"«La primera batería de fase cuántica: un aquilano en el proyecto revolucionario.»", fr:"« La première batterie à phase quantique : un natif de L'Aquila dans le projet révolutionnaire. »" } },
  { outlet:"N3ws Today", year:"2020", url:"https://n3ws.today/categories/science/first-quantum-phase-supercurrent-battery-ever-developed", q:{ it:"«First quantum phase 'supercurrent' battery ever developed.»", en:"'First quantum phase ‘supercurrent’ battery ever developed.'", es:"«First quantum phase ‘supercurrent’ battery ever developed.»", fr:"« First quantum phase ‘supercurrent’ battery ever developed. »" } },
  { outlet:"RAI 3 — Memex", year:"2017", url:"https://normalenews.sns.it/memex-i-luoghi-della-scienza-parla-di-pisa-e-del-laboratorio-nest", q:{ it:"«Memex — I luoghi della Scienza»: dal laboratorio NEST della Scuola Normale.", en:"'Memex — Places of Science': from the NEST lab of the Scuola Normale.", es:"«Memex — Los lugares de la Ciencia»: desde el laboratorio NEST de la Scuola Normale.", fr:"« Memex — Les lieux de la Science » : depuis le laboratoire NEST de la Scuola Normale." } },
  { outlet:"RAI Scuola", year:"2015", url:"http://www.laboratorionest.it/nestinternet-festival-2015/", q:{ it:"«Lo Spazio nel Nanomondo» — Internet Festival.", en:"'Space in the Nanoworld' — Internet Festival.", es:"«El Espacio en el Nanomundo» — Internet Festival.", fr:"« L'Espace dans le Nanomonde » — Internet Festival." } }
];

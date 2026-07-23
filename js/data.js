/* =========================================================
   Dati struttura sito — Mirko Rocci (4 lingue: it, en, es, fr)
   --------------------------------------------------------
   NOTA: News, Rassegna stampa e Pubblicazioni NON sono qui:
   si modificano nel file  js/contenuti.js  (più semplice).
   Questo file contiene le sezioni che cambiano raramente
   (imprese, percorso, premi, mappa, associazione 3:33).
   ========================================================= */

const SCHOLAR_URL = "https://scholar.google.com/citations?user=vZlXhbkAAAAJ&hl=en";
const ORCID_URL   = "https://orcid.org/0000-0002-3907-5275";


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
  { n:"NEST — Scuola Normale Superiore", l:"assets/logos/nest-color.png", u:"https://www.laboratorionest.it/" },
  { n:"Thales Alenia Space", l:"assets/logos/thales-color.svg", u:"https://www.thalesaleniaspace.com/" },
  { n:"Universidad Complutense de Madrid", l:"assets/logos/ucm-color.png", u:"https://www.ucm.es/" },
  { n:"Universidad Politécnica de Madrid", l:"assets/logos/upm.png", u:"https://www.upm.es/" },
  { n:"Università degli Studi dell'Aquila", l:"assets/logos/univaq.svg", u:"https://www.univaq.it/" },
  { n:"CNR — Consiglio Nazionale delle Ricerche", l:"assets/logos/cnr-color.svg", u:"https://www.cnr.it/" }
];

/* ---------- MAP LOCATIONS (interactive geographic map) ----------
   ll:[lon,lat] real coordinates · cl:[x%,y%] cluster anchor for logo chips
   background: equirectangular world (full -180..180 / -90..90).            */
const MAP_CROP = { lonMin:-90, lonMax:25, latMin:22, latMax:58 };
const LOCATIONS = [
  { id:"cambridge", ll:[-71.06,42.36], cl:[7,66], city:"Cambridge, MA", country:{ it:"Stati Uniti", en:"United States", es:"Estados Unidos", fr:"États-Unis" }, years:"2017 — 2021",
    insts:[ { n:"Massachusetts Institute of Technology", u:"https://www.mit.edu/", logo:"assets/logos/mit.svg" } ] },
  { id:"madrid", ll:[-3.70,40.42], cl:[46,60], city:"Madrid", country:{ it:"Spagna", en:"Spain", es:"España", fr:"Espagne" }, years:"2009 — 2016",
    insts:[
      { n:"Universidad Complutense de Madrid", u:"https://www.ucm.es/", logo:"assets/logos/ucm-color.png" },
      { n:"Universidad Politécnica de Madrid", u:"https://www.upm.es/", logo:"assets/logos/upm.png" },
      { n:"Campus de Excelencia Internacional Moncloa", u:"http://www.campusmoncloa.es/", logo:"assets/logos/moncloa.gif" },
      { n:"ICMM — CSIC", u:"https://www.icmm.csic.es/", logo:"assets/logos/csic-color.svg" }
    ] },
  { id:"pisa", ll:[10.40,43.72], cl:[55,6], city:"Pisa", country:{ it:"Italia", en:"Italy", es:"Italia", fr:"Italie" }, years:"2015 — 2021",
    insts:[
      { n:"NEST — Scuola Normale Superiore", u:"https://www.laboratorionest.it/", logo:"assets/logos/nest-color.png" },
      { n:"CNR Nano — NEST", u:"https://www.nano.cnr.it/", logo:"assets/logos/cnr-color.svg" }
    ] },
  { id:"laquila", ll:[13.40,42.35], cl:[87,74], city:"L'Aquila", country:{ it:"Italia", en:"Italy", es:"Italia", fr:"Italie" }, years:"2002 — 2009 · 2021 —",
    insts:[ { n:"Università degli Studi dell'Aquila", u:"https://www.univaq.it/", logo:"assets/logos/univaq.svg" } ] }
];
/* arcs (chronological journey) connecting location ids */
const MAP_ARCS = [ ["laquila","madrid"], ["madrid","pisa"], ["pisa","cambridge"], ["cambridge","laquila"] ];


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


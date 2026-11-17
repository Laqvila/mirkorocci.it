// Rimando a laquilive.it (17/11/2026): le pagine di L'AquiLive si sono spostate sul sito dell'app.
// Tiene ?da=... e #ancora, cosi' i conteggi dei QR e dei post continuano a funzionare.
(function () {
  var s = document.currentScript;
  var meta = (s && s.getAttribute('data-meta')) || 'https://laquilive.it/';
  location.replace(meta + location.search + location.hash);
})();

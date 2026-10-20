/* Pagina di L'AquiLive, mirkorocci.it/laquilive (20/10/2026).
   Prima questo indirizzo portava dritto allo store; ora è la pagina dell'app.
   · UNA riga per visita nel conteggio dei link dello Studio, come prima: lo
     store scelto (play / appstore) se la persona tocca un pulsante, altrimenti
     «pagina» quando esce. Così «tocchi sul link» resta il numero di arrivi.
   · Il canale è ?da=parola se c'è, altrimenti il sito da cui si arriva
     (abruzzoweb, facebook, inno99…), altrimenti «diretto». Nessun indirizzo IP
     né identificativo: solo canale, destinazione e tipo di telefono.
   · Su Google Play il canale viaggia come utm_source.
   · Davanti c'è il pulsante dello store del proprio telefono.
   · I blocchi compaiono mentre si scorre. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var SB = 'https://kdgytiribodwqccvwzvc.supabase.co';
  // chiave PUBBLICA, la stessa dentro l'app
  var CHIAVE = 'sb_publishable_-tudt_coGbSiMfFxTWZ9yQ_YYxUtBid';
  var ua = navigator.userAgent || '';
  var ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var android = /Android/i.test(ua);
  var piattaforma = ios ? 'ios' : android ? 'android' : 'altro';

  function pulisci(x) { return (x + '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40); }
  function canaleDaReferrer() {
    try {
      if (!document.referrer) return '';
      var host = new URL(document.referrer).hostname.replace(/^www\./, '').replace(/^(l|m|lm)\./, '');
      if (!host || host === location.hostname.replace(/^www\./, '')) return '';
      // il nome del sito senza dominio: abruzzoweb.it -> abruzzoweb, l.facebook.com -> facebook
      var parti = host.split('.');
      return pulisci(parti.length > 1 ? parti[parti.length - 2] : parti[0]);
    } catch (e) { return ''; }
  }
  var canale = '';
  try { canale = pulisci(new URLSearchParams(location.search).get('da') || ''); } catch (e) { /* niente */ }
  if (!canale) canale = canaleDaReferrer() || 'diretto';

  var contato = false;
  function conta(destinazione) {
    if (contato) return;
    contato = true;
    try {
      fetch(SB + '/rest/v1/rpc/registra_click_link', {
        method: 'POST', keepalive: true,
        headers: { 'Content-Type': 'application/json', apikey: CHIAVE, Authorization: 'Bearer ' + CHIAVE },
        body: JSON.stringify({ p_canale: canale, p_destinazione: destinazione, p_piattaforma: piattaforma })
      }).catch(function () {});
    } catch (e) { /* il conteggio non deve mai fermare niente */ }
  }
  // chi esce senza toccare uno store conta come «pagina»
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') conta('pagina'); });
  window.addEventListener('pagehide', function () { conta('pagina'); });

  var bottoni = document.querySelectorAll('.store-btn[data-store]');
  for (var i = 0; i < bottoni.length; i++) {
    var b = bottoni[i];
    if (b.getAttribute('data-store') === 'play' && canale !== 'diretto') {
      b.href = b.href + '&referrer=' + encodeURIComponent('utm_source=' + canale + '&utm_medium=pagina');
    }
    b.addEventListener('click', function () { conta(this.getAttribute('data-store')); });
  }

  // prima lo store del telefono che si ha in mano: App Store sull'iPhone,
  // Google Play altrove (due terzi degli utenti sono su Android)
  var primo = ios ? 'appstore' : 'play';
  var gruppi = document.querySelectorAll('.stores');
  for (var g = 0; g < gruppi.length; g++) {
    var scelto = gruppi[g].querySelector('[data-store="' + primo + '"]');
    if (scelto) gruppi[g].insertBefore(scelto, gruppi[g].firstChild);
  }

  // comparsa dei blocchi
  var blocchi = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    for (var k = 0; k < blocchi.length; k++) blocchi[k].classList.add('in');
    return;
  }
  var io = new IntersectionObserver(function (voci) {
    voci.forEach(function (v) {
      if (v.isIntersecting) { v.target.classList.add('in'); io.unobserve(v.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  for (var j = 0; j < blocchi.length; j++) io.observe(blocchi[j]);
})();

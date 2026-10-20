/* Pagina di L'AquiLive (laquilive-app.html).
   · ?da=parola dice da dove arriva chi apre la pagina (abruzzoweb, instagram…):
     la visita si conta come «pagina» nello Studio, con la stessa funzione del
     link elegante mirkorocci.it/laquilive, senza indirizzo IP né identificativi.
   · I tocchi sui pulsanti degli store si contano con la stessa parola, e su
     Google Play la parola viaggia come utm_source.
   · Davanti c'è il pulsante dello store del proprio telefono.
   · I blocchi compaiono mentre si scorre. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var SB = 'https://kdgytiribodwqccvwzvc.supabase.co';
  // chiave PUBBLICA, la stessa dentro l'app e nel link elegante
  var CHIAVE = 'sb_publishable_-tudt_coGbSiMfFxTWZ9yQ_YYxUtBid';
  var ua = navigator.userAgent || '';
  var ios = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var android = /Android/i.test(ua);
  var piattaforma = ios ? 'ios' : android ? 'android' : 'altro';
  var canale = '';
  try {
    canale = ((new URLSearchParams(location.search).get('da') || '') + '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40);
  } catch (e) { /* niente canale */ }

  function conta(destinazione, canaleUsato) {
    try {
      fetch(SB + '/rest/v1/rpc/registra_click_link', {
        method: 'POST', keepalive: true,
        headers: { 'Content-Type': 'application/json', apikey: CHIAVE, Authorization: 'Bearer ' + CHIAVE },
        body: JSON.stringify({ p_canale: canaleUsato, p_destinazione: destinazione, p_piattaforma: piattaforma })
      }).catch(function () {});
    } catch (e) { /* il conteggio non deve mai fermare niente */ }
  }

  // la visita si conta solo quando arriva da un canale dichiarato (banner, post…)
  if (canale) conta('pagina', canale);

  var bottoni = document.querySelectorAll('.store-btn[data-store]');
  for (var i = 0; i < bottoni.length; i++) {
    var b = bottoni[i];
    if (b.getAttribute('data-store') === 'play' && canale) {
      b.href = b.href + '&referrer=' + encodeURIComponent('utm_source=' + canale + '&utm_medium=pagina');
    }
    b.addEventListener('click', function () {
      conta(this.getAttribute('data-store'), canale || 'pagina-app');
    });
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

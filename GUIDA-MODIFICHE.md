# Guida rapida — come aggiornare il sito

Ciao Mirko! Per le modifiche più frequenti **devi toccare un solo file**:

```
js/contenuti.js
```

Aprilo con un editor di testo (va benissimo **Blocco note**, oppure VS Code / Notepad++).
Dentro trovi tre sezioni già pronte e commentate in italiano:

1. **NEWS** — le novità
2. **RASSEGNA STAMPA** — gli articoli di giornale
3. **PUBBLICAZIONI SCIENTIFICHE**

---

## 1. Aggiungere una NOVITÀ (news)

Cerca la riga `const NEWS = [` e, subito sotto, incolla un blocco come questo
(mettilo **in cima**, così la novità più recente appare per prima):

```js
{ date:{ it:"Mar 2026" }, tag:NTAG.award, url:"https://link-alla-notizia",
  t:{ it:"Titolo della novità" },
  d:{ it:"Una o due frasi di descrizione." } },
```

- `tag` può essere: `NTAG.award` (Premio), `NTAG.conf` (Conferenza),
  `NTAG.pub` (Pubblicazione), `NTAG.patent` (Brevetto), `NTAG.social` (Sociale).
- Se non c'è un link, scrivi `url:""`.

## 2. Aggiungere un ARTICOLO di stampa

Cerca `const PRESS = [` e incolla in cima:

```js
{ outlet:"Nome Testata", year:"2026", url:"https://link-articolo",
  q:{ it:"Titolo o citazione dell'articolo." } },
```

## 3. Aggiungere una PUBBLICAZIONE scientifica

Cerca `const PUBLICATIONS = [` e incolla in cima:

```js
{ theme:"super", doi:"10.xxxx/xxxxx",
  title:"Titolo dell'articolo in inglese",
  journal:"Rivista", year:"2026", role:ROLE.first,
  desc:{ it:"Una frase che spiega il risultato." } },
```

- `theme` (disegno della copertina) può essere uno di:
  `super`, `battery`, `transistor`, `current`, `spin`, `esaki`, `oxide`, `twod`.
- `role` può essere: `ROLE.first` (Primo autore), `ROLE.cofirst` (Co-primo autore),
  `ROLE.co` (Co-autore).
- Le prime 6 pubblicazioni si vedono subito, le altre con “Mostra altri articoli”.

---

## Regole d'oro (per non rompere niente)

- I testi vanno **sempre tra "virgolette doppie"**.
- Ogni voce è racchiusa tra **graffe `{ }`** e separata dalla successiva da una **virgola**.
- **Non cancellare** le graffe, le parentesi quadre `[ ]` o le virgole.
- Se nel testo serve una virgoletta, usa l'**apostrofo** `'` (es. `it:"L'Aquila"`).
- Basta scrivere l'**italiano** (`it:"..."`): se non aggiungi inglese/spagnolo/francese,
  il sito mostrerà l'italiano in tutte le lingue. Le traduzioni si aggiungono così:
  `t:{ it:"...", en:"...", es:"...", fr:"..." }`.
- Dopo aver salvato, **ricarica la pagina** con **CTRL + F5**.

## Immagini

Metti i file nella cartella `assets/` (o nelle sottocartelle, es. `assets/awards/`).
Poi richiamali con il loro percorso, ad esempio nella foto di un premio:
`img:"assets/awards/mia-foto.jpg"`.

## E se voglio cambiare premi, percorso, imprese o la mappa?

Quelle sezioni cambiano raramente e stanno nel file `js/data.js`
(stessa logica: voci tra `{ }`, testi tra virgolette). La sezione **Premi** è
`const AWARDS = [ ... ]`, il **Percorso** è `const TIMELINE = [ ... ]`,
le **Imprese** sono `const VENTURES = [ ... ]`, la **mappa** è `const LOCATIONS = [ ... ]`.

## Pubblicare le modifiche online

Il sito è fatto di file statici: per aggiornarlo online basta **ricaricare sul tuo
hosting i file modificati** (es. `js/contenuti.js`) nella stessa posizione.

## Consiglio

Prima di modificare, fai una **copia di backup** del file `js/contenuti.js`
(così se qualcosa va storto puoi ripristinarlo).

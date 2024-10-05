
// <!-- Include le librerie JavaScript di reveal.js -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/reveal.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.5.0/plugin/notes/notes.min.js"></script>

// <!-- Include Highlight.js per la sintassi del codice -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>

import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes';
import Highlight from 'reveal.js/plugin/highlight/highlight';

// Inizializzazione di reveal.js
const slides = Reveal({
  plugins: [Notes, Highlight],
  // Opzioni per evidenziare il codice
  highlight: {
    // Configurazione di highlight.js
    highlightOnLoad: true,
    tabReplace: '  ', // 2 spazi
  },
  ...(window.location.href.includes('?print-pdf') && {
    pdfSeparateFragments: false
  }),
  hash: true,
  // Flags if we should monitor the hash and change slides accordingly
  respondToHashChanges: true,
  // Push each slide change to the browser history.  Implies `hash: true`
  history: true,
});

slides.configure({
  keyboard: {
    8: 'prev',
    // 27: null,
    78: null
  }
});

slides.initialize();

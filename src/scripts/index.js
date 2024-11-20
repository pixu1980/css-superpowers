
import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes';
import Highlight from 'reveal.js/plugin/highlight/highlight';

import './_dive-in';
import './_time-circuits';

// reveal.js initialization
const slides = Reveal({
  plugins: [Notes, Highlight],
  // highlight.js options
  highlight: {
    highlightOnLoad: true,
    tabReplace: '  ',
  },
  navigationMode: 'linear',
  ...(window.location.href.includes('?print-pdf') && {
    pdfSeparateFragments: false
  }),
  hash: true,
  // Flags if we should monitor the hash and change slides accordingly
  respondToHashChanges: true,
  // Push each slide change to the browser history.  Implies `hash: true`
  history: true,
});

// keyboard interaction configuration
slides.configure({
  keyboard: {
    8: 'prev',
    // 27: null,
    78: null
  }
});

slides.initialize();

/*!
 * pixCSS ✨ v0.0.1 (https://pix-css.dev)
 * Copyright 2024 - Licensed under MIT
 *
 * Minimal theme switcher
 *
 * Pico CSS ✨ v2.0.6 (https://picocss.com)
 * Copyright 2019-2024 - Licensed under MIT
 */
import defaultStyle from 'bundle-text:../styles/_accents.default.css';
import amber from 'bundle-text:../styles/_accents.amber.css';
import jade from 'bundle-text:../styles/_accents.jade.css';
import purple from 'bundle-text:../styles/_accents.purple.css';
import sand from 'bundle-text:../styles/_accents.sand.css';

const accents = {
  default: defaultStyle,
  amber,
  jade,
  purple,
  sand
}

const themeSwitcher = {
  // Config
  _scheme: "auto",
  menuTarget: "details.dropdown",
  buttonsTarget: "a[data-theme-switcher]",
  buttonAttribute: "data-theme-switcher",
  rootAttribute: "data-theme",
  localStorageKey: "picoPreferredColorScheme",

  // Init
  init() {
    this.scheme = this.schemeFromLocalStorage;
    this.initSwitchers();
  },

  // Get color scheme from local storage
  get schemeFromLocalStorage() {
    return window.localStorage?.getItem(this.localStorageKey) ?? this._scheme;
  },

  // Preferred color scheme
  get preferredColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  },

  // Init switchers
  initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          // Set scheme
          this.scheme = button.getAttribute(this.buttonAttribute);
          // Close dropdown
          document.querySelector(this.menuTarget)?.removeAttribute("open");
        },
        false
      );
    });
  },

  // Set scheme
  set scheme(scheme) {
    if (scheme == "auto") {
      this._scheme = this.preferredColorScheme;
    } else if (scheme == "dark" || scheme == "light") {
      this._scheme = scheme;
    }
    this.applyScheme();
    this.schemeToLocalStorage();
  },

  // Get scheme
  get scheme() {
    return this._scheme;
  },

  // Apply scheme
  applyScheme() {
    document.querySelector("html")?.setAttribute(this.rootAttribute, this.scheme);
  },

  // Store scheme to local storage
  schemeToLocalStorage() {
    window.localStorage?.setItem(this.localStorageKey, this.scheme);
  },
}

// Init
themeSwitcher.init();

const updateThemeAccent = (accent) => {
  document.querySelector('aside style').innerHTML = accent;

  requestAnimationFrame(() => {
    rootComputedStyle = getComputedStyle(document.documentElement);

    document.querySelector('input[type="color"]').value = rootComputedStyle.getPropertyValue('--pix--primary');
  });
}

document.querySelector('.dropdown.accent').addEventListener('change', (e) => {
  updateThemeAccent(accents[e.target.value]);
});

updateThemeAccent(accents.default);


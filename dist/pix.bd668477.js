// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"h5XN6":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e30d946ebd668477";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"a6HBJ":[function(require,module,exports,__globalThis) {
/*!
 * pixCSS ✨ v0.0.1 (https://pix-css.dev)
 * Copyright 2024 - Licensed under MIT
 *
 * Minimal theme switcher
 *
 * Pico CSS ✨ v2.0.6 (https://picocss.com)
 * Copyright 2019-2024 - Licensed under MIT
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _pixThemesDefaultScss = require("bundle-text:../styles/pix/pix.themes.default.scss");
var _pixThemesDefaultScssDefault = parcelHelpers.interopDefault(_pixThemesDefaultScss);
var _pixThemesAmberScss = require("bundle-text:../styles/pix/pix.themes.amber.scss");
var _pixThemesAmberScssDefault = parcelHelpers.interopDefault(_pixThemesAmberScss);
var _pixThemesJadeScss = require("bundle-text:../styles/pix/pix.themes.jade.scss");
var _pixThemesJadeScssDefault = parcelHelpers.interopDefault(_pixThemesJadeScss);
var _pixThemesPurpleScss = require("bundle-text:../styles/pix/pix.themes.purple.scss");
var _pixThemesPurpleScssDefault = parcelHelpers.interopDefault(_pixThemesPurpleScss);
var _pixThemesSandScss = require("bundle-text:../styles/pix/pix.themes.sand.scss");
var _pixThemesSandScssDefault = parcelHelpers.interopDefault(_pixThemesSandScss);
const accents = {
    default: (0, _pixThemesDefaultScssDefault.default),
    amber: (0, _pixThemesAmberScssDefault.default),
    jade: (0, _pixThemesJadeScssDefault.default),
    purple: (0, _pixThemesPurpleScssDefault.default),
    sand: (0, _pixThemesSandScssDefault.default)
};
const themeSwitcher = {
    // Config
    _scheme: "auto",
    menuTarget: "details.dropdown",
    buttonsTarget: "a[data-theme-switcher]",
    buttonAttribute: "data-theme-switcher",
    rootAttribute: "data-theme",
    localStorageKey: "picoPreferredColorScheme",
    // Init
    init () {
        this.scheme = this.schemeFromLocalStorage;
        this.initSwitchers();
    },
    // Get color scheme from local storage
    get schemeFromLocalStorage () {
        return window.localStorage?.getItem(this.localStorageKey) ?? this._scheme;
    },
    // Preferred color scheme
    get preferredColorScheme () {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    },
    // Init switchers
    initSwitchers () {
        const buttons = document.querySelectorAll(this.buttonsTarget);
        buttons.forEach((button)=>{
            button.addEventListener("click", (event)=>{
                event.preventDefault();
                // Set scheme
                this.scheme = button.getAttribute(this.buttonAttribute);
                // Close dropdown
                document.querySelector(this.menuTarget)?.removeAttribute("open");
            }, false);
        });
    },
    // Set scheme
    set scheme (scheme){
        if (scheme == "auto") this._scheme = this.preferredColorScheme;
        else if (scheme == "dark" || scheme == "light") this._scheme = scheme;
        this.applyScheme();
        this.schemeToLocalStorage();
    },
    // Get scheme
    get scheme () {
        return this._scheme;
    },
    // Apply scheme
    applyScheme () {
        document.querySelector("html")?.setAttribute(this.rootAttribute, this.scheme);
    },
    // Store scheme to local storage
    schemeToLocalStorage () {
        window.localStorage?.setItem(this.localStorageKey, this.scheme);
    }
};
// Init
themeSwitcher.init();
const updateThemeAccent = (accent)=>{
    document.querySelector('aside style').innerHTML = accent;
    requestAnimationFrame(()=>{
        const rootComputedStyle = getComputedStyle(document.documentElement);
        document.querySelector('input[type="color"]').value = rootComputedStyle.getPropertyValue('--pix--primary');
    });
};
document.querySelector('.dropdown.accent').addEventListener('change', (e)=>{
    updateThemeAccent(accents[e.target.value]);
});
updateThemeAccent(accents.default);

},{"bundle-text:../styles/pix/pix.themes.default.scss":"f1kIy","bundle-text:../styles/pix/pix.themes.amber.scss":"1t2fF","bundle-text:../styles/pix/pix.themes.jade.scss":"glfge","bundle-text:../styles/pix/pix.themes.purple.scss":"gTYI7","bundle-text:../styles/pix/pix.themes.sand.scss":"4g7n6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1kIy":[function(require,module,exports,__globalThis) {
module.exports = ":is([data-theme=\"light\"], :not([data-theme=\"dark\"])) {\n  --pix--background-color: #fff;\n  --pix--color: #373c44;\n  --pix--text-selection-color: #029ae840;\n  --pix--muted-color: #646b79;\n  --pix--muted-border-color: #e7eaf0;\n  --pix--primary: #0172ad;\n  --pix--primary-background: #0172ad;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #0172ad80;\n  --pix--primary-hover: #015887;\n  --pix--primary-hover-background: #02659a;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #029ae880;\n  --pix--primary-inverse: #fff;\n  --pix--secondary: #5d6b89;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #5d6b8980;\n  --pix--secondary-hover: #48536b;\n  --pix--secondary-hover-background: #48536b;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #5d6b8940;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #181c25;\n  --pix--contrast-background: #181c25;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #181c2580;\n  --pix--contrast-hover: #000;\n  --pix--contrast-hover-background: #000;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--secondary-hover);\n  --pix--contrast-focus: #5d6b8940;\n  --pix--contrast-inverse: #fff;\n  --pix--box-shadow: .0145rem .029rem .174rem #8191b504, .0335rem .067rem .402rem #8191b506, .0625rem .125rem .75rem #8191b508, .1125rem .225rem 1.35rem #8191b509, .2085rem .417rem 2.502rem #8191b50b, .5rem 1rem 6rem #8191b50f, 0 0 0 .0625rem #8191b504;\n  --pix--h1-color: #2d3138;\n  --pix--h2-color: #373c44;\n  --pix--h3-color: #424751;\n  --pix--h4-color: #4d535e;\n  --pix--h5-color: #5c6370;\n  --pix--h6-color: #646b79;\n  --pix--mark-background-color: #fde7c0;\n  --pix--mark-color: #0f1114;\n  --pix--ins-color: #1d6a54;\n  --pix--del-color: #883935;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #f3f5f7;\n  --pix--code-color: #646b79;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #fbfcfc;\n  --pix--form-element-selected-background-color: #dfe3eb;\n  --pix--form-element-border-color: #cfd5e2;\n  --pix--form-element-color: #23262c;\n  --pix--form-element-placeholder-color: var(--pix--muted-color);\n  --pix--form-element-active-background-color: #fff;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #b86a6b;\n  --pix--form-element-invalid-active-border-color: #c84f48;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #4c9b8a;\n  --pix--form-element-valid-active-border-color: #279977;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #bfc7d9;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n  --pix--range-border-color: #dfe3eb;\n  --pix--range-active-border-color: #bfc7d9;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: var(--pix--background-color);\n  --pix--card-border-color: var(--pix--muted-border-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #fbfcfc;\n  --pix--dropdown-background-color: #fff;\n  --pix--dropdown-border-color: #eff1f4;\n  --pix--dropdown-box-shadow: var(--pix--box-shadow);\n  --pix--dropdown-color: var(--pix--color);\n  --pix--dropdown-hover-background-color: #eff1f4;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #e8eaedbf;\n  --pix--progress-background-color: #dfe3eb;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  --pix--icon-valid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(76, 155, 138)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  --pix--icon-invalid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(200, 79, 72)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E\");\n  color-scheme: light;\n}\n\n@media only screen and (prefers-color-scheme: dark) {\n  :is(:not([data-theme]), [data-theme=\"dark\"]) {\n    --pix--background-color: #13171f;\n    --pix--color: #c2c7d0;\n    --pix--text-selection-color: #01aaff30;\n    --pix--muted-color: #7b8495;\n    --pix--muted-border-color: #202632;\n    --pix--primary: #01aaff;\n    --pix--primary-background: #0172ad;\n    --pix--primary-border: var(--pix--primary-background);\n    --pix--primary-underline: #01aaff80;\n    --pix--primary-hover: #79c0ff;\n    --pix--primary-hover-background: #017fc0;\n    --pix--primary-hover-border: var(--pix--primary-hover-background);\n    --pix--primary-hover-underline: var(--pix--primary-hover);\n    --pix--primary-focus: #01aaff60;\n    --pix--primary-inverse: #fff;\n    --pix--secondary: #969eaf;\n    --pix--secondary-background: #525f7a;\n    --pix--secondary-border: var(--pix--secondary-background);\n    --pix--secondary-underline: #969eaf80;\n    --pix--secondary-hover: #b3b9c5;\n    --pix--secondary-hover-background: #5d6b89;\n    --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n    --pix--secondary-hover-underline: var(--pix--secondary-hover);\n    --pix--secondary-focus: #909ebe40;\n    --pix--secondary-inverse: #fff;\n    --pix--contrast: #dfe3eb;\n    --pix--contrast-background: #eff1f4;\n    --pix--contrast-border: var(--pix--contrast-background);\n    --pix--contrast-underline: #dfe3eb80;\n    --pix--contrast-hover: #fff;\n    --pix--contrast-hover-background: #fff;\n    --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n    --pix--contrast-hover-underline: var(--pix--contrast-hover);\n    --pix--contrast-focus: #cfd5e240;\n    --pix--contrast-inverse: #000;\n    --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n    --pix--h1-color: #f0f1f3;\n    --pix--h2-color: #e0e3e7;\n    --pix--h3-color: #c2c7d0;\n    --pix--h4-color: #b3b9c5;\n    --pix--h5-color: #a4acba;\n    --pix--h6-color: #8891a4;\n    --pix--mark-background-color: #014063;\n    --pix--mark-color: #fff;\n    --pix--ins-color: #62af9a;\n    --pix--del-color: #ce7e7b;\n    --pix--blockquote-border-color: var(--pix--muted-border-color);\n    --pix--blockquote-footer-color: var(--pix--muted-color);\n    --pix--button-box-shadow: 0 0 0 #0000;\n    --pix--button-hover-box-shadow: 0 0 0 #0000;\n    --pix--table-border-color: var(--pix--muted-border-color);\n    --pix--table-row-stripped-background-color: #6f78870a;\n    --pix--code-background-color: #1a1f28;\n    --pix--code-color: #8891a4;\n    --pix--code-kbd-background-color: var(--pix--color);\n    --pix--code-kbd-color: var(--pix--background-color);\n    --pix--form-element-background-color: #1c212c;\n    --pix--form-element-selected-background-color: #2a3140;\n    --pix--form-element-border-color: #2a3140;\n    --pix--form-element-color: #e0e3e7;\n    --pix--form-element-placeholder-color: #8891a4;\n    --pix--form-element-active-background-color: #1a1f28;\n    --pix--form-element-active-border-color: var(--pix--primary-border);\n    --pix--form-element-focus-color: var(--pix--primary-border);\n    --pix--form-element-disabled-opacity: .5;\n    --pix--form-element-invalid-border-color: #964a50;\n    --pix--form-element-invalid-active-border-color: #b7403b;\n    --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n    --pix--form-element-valid-border-color: #2a7b6f;\n    --pix--form-element-valid-active-border-color: #16896a;\n    --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n    --pix--switch-background-color: #333c4e;\n    --pix--switch-checked-background-color: var(--pix--primary-background);\n    --pix--switch-color: #fff;\n    --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n    --pix--range-border-color: #202632;\n    --pix--range-active-border-color: #2a3140;\n    --pix--range-thumb-border-color: var(--pix--background-color);\n    --pix--range-thumb-color: var(--pix--secondary-background);\n    --pix--range-thumb-active-color: var(--pix--primary-background);\n    --pix--accordion-border-color: var(--pix--muted-border-color);\n    --pix--accordion-active-summary-color: var(--pix--primary-hover);\n    --pix--accordion-close-summary-color: var(--pix--color);\n    --pix--accordion-open-summary-color: var(--pix--muted-color);\n    --pix--card-background-color: #181c25;\n    --pix--card-border-color: var(--pix--card-background-color);\n    --pix--card-box-shadow: var(--pix--box-shadow);\n    --pix--card-sectioning-background-color: #1a1f28;\n    --pix--dropdown-background-color: #181c25;\n    --pix--dropdown-border-color: #202632;\n    --pix--dropdown-box-shadow: var(--pix--box-shadow);\n    --pix--dropdown-color: var(--pix--color);\n    --pix--dropdown-hover-background-color: #202632;\n    --pix--loading-spinner-opacity: .5;\n    --pix--modal-overlay-background-color: #08090abf;\n    --pix--progress-background-color: #202632;\n    --pix--progress-color: var(--pix--primary-background);\n    --pix--tooltip-background-color: var(--pix--contrast-background);\n    --pix--tooltip-color: var(--pix--contrast-inverse);\n    --pix--icon-valid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n    --pix--icon-invalid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(150, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E\");\n    color-scheme: dark;\n  }\n}\n\n[data-theme=\"dark\"] {\n  --pix--background-color: #13171f;\n  --pix--color: #c2c7d0;\n  --pix--text-selection-color: #01aaff30;\n  --pix--muted-color: #7b8495;\n  --pix--muted-border-color: #202632;\n  --pix--primary: #01aaff;\n  --pix--primary-background: #0172ad;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #01aaff80;\n  --pix--primary-hover: #79c0ff;\n  --pix--primary-hover-background: #017fc0;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #01aaff60;\n  --pix--primary-inverse: #fff;\n  --pix--secondary: #969eaf;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #969eaf80;\n  --pix--secondary-hover: #b3b9c5;\n  --pix--secondary-hover-background: #5d6b89;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #909ebe40;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #dfe3eb;\n  --pix--contrast-background: #eff1f4;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #dfe3eb80;\n  --pix--contrast-hover: #fff;\n  --pix--contrast-hover-background: #fff;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--contrast-hover);\n  --pix--contrast-focus: #cfd5e240;\n  --pix--contrast-inverse: #000;\n  --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n  --pix--h1-color: #f0f1f3;\n  --pix--h2-color: #e0e3e7;\n  --pix--h3-color: #c2c7d0;\n  --pix--h4-color: #b3b9c5;\n  --pix--h5-color: #a4acba;\n  --pix--h6-color: #8891a4;\n  --pix--mark-background-color: #014063;\n  --pix--mark-color: #fff;\n  --pix--ins-color: #62af9a;\n  --pix--del-color: #ce7e7b;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #1a1f28;\n  --pix--code-color: #8891a4;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #1c212c;\n  --pix--form-element-selected-background-color: #2a3140;\n  --pix--form-element-border-color: #2a3140;\n  --pix--form-element-color: #e0e3e7;\n  --pix--form-element-placeholder-color: #8891a4;\n  --pix--form-element-active-background-color: #1a1f28;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #964a50;\n  --pix--form-element-invalid-active-border-color: #b7403b;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #2a7b6f;\n  --pix--form-element-valid-active-border-color: #16896a;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #333c4e;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n  --pix--range-border-color: #202632;\n  --pix--range-active-border-color: #2a3140;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: #181c25;\n  --pix--card-border-color: var(--pix--card-background-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #1a1f28;\n  --pix--dropdown-background-color: #181c25;\n  --pix--dropdown-border-color: #202632;\n  --pix--dropdown-box-shadow: var(--pix--box-shadow);\n  --pix--dropdown-color: var(--pix--color);\n  --pix--dropdown-hover-background-color: #202632;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #08090abf;\n  --pix--progress-background-color: #202632;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  --pix--icon-valid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  --pix--icon-invalid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(150, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E\");\n  color-scheme: dark;\n}\n";

},{}],"1t2fF":[function(require,module,exports,__globalThis) {
module.exports = ":is([data-theme=\"light\"], :not([data-theme=\"dark\"])) {\n  --pix--background-color: #fff;\n  --pix--color: #373c44;\n  --pix--text-selection-color: #b7880040;\n  --pix--muted-color: #646b79;\n  --pix--muted-border-color: #e7eaf0;\n  --pix--primary: #876400;\n  --pix--primary-background: #ffbf00;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #87640080;\n  --pix--primary-hover: #694d00;\n  --pix--primary-hover-background: #e8ae01;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #b7880080;\n  --pix--primary-inverse: #000;\n  --pix--secondary: #5d6b89;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #5d6b8980;\n  --pix--secondary-hover: #48536b;\n  --pix--secondary-hover-background: #48536b;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #5d6b8940;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #181c25;\n  --pix--contrast-background: #181c25;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #181c2580;\n  --pix--contrast-hover: #000;\n  --pix--contrast-hover-background: #000;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--secondary-hover);\n  --pix--contrast-focus: #5d6b8940;\n  --pix--contrast-inverse: #fff;\n  --pix--box-shadow: .0145rem .029rem .174rem #8191b504, .0335rem .067rem .402rem #8191b506, .0625rem .125rem .75rem #8191b508, .1125rem .225rem 1.35rem #8191b509, .2085rem .417rem 2.502rem #8191b50b, .5rem 1rem 6rem #8191b50f, 0 0 0 .0625rem #8191b504;\n  --pix--h1-color: #2d3138;\n  --pix--h2-color: #373c44;\n  --pix--h3-color: #424751;\n  --pix--h4-color: #4d535e;\n  --pix--h5-color: #5c6370;\n  --pix--h6-color: #646b79;\n  --pix--mark-background-color: #fde7c0;\n  --pix--mark-color: #0f1114;\n  --pix--ins-color: #1d6a54;\n  --pix--del-color: #883935;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #f3f5f7;\n  --pix--code-color: #646b79;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #fbfcfc;\n  --pix--form-element-selected-background-color: #dfe3eb;\n  --pix--form-element-border-color: #cfd5e2;\n  --pix--form-element-color: #23262c;\n  --pix--form-element-placeholder-color: var(--pix--muted-color);\n  --pix--form-element-active-background-color: #fff;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #b86a6b;\n  --pix--form-element-invalid-active-border-color: #c84f48;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #4c9b8a;\n  --pix--form-element-valid-active-border-color: #279977;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #bfc7d9;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 .5rem #00000040;\n  --pix--range-border-color: #dfe3eb;\n  --pix--range-active-border-color: #bfc7d9;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: var(--pix--background-color);\n  --pix--card-border-color: var(--pix--muted-border-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #fbfcfc;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #e8eaedbf;\n  --pix--progress-background-color: #dfe3eb;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: light;\n}\n\n[data-theme=\"dark\"] {\n  --pix--background-color: #13171f;\n  --pix--color: #c2c7d0;\n  --pix--text-selection-color: #c7940030;\n  --pix--muted-color: #7b8495;\n  --pix--muted-border-color: #202632;\n  --pix--primary: #c79400;\n  --pix--primary-background: #ffbf00;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #c7940080;\n  --pix--primary-hover: #e8ae01;\n  --pix--primary-hover-background: #fecc63;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #c7940060;\n  --pix--primary-inverse: #000;\n  --pix--secondary: #969eaf;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #969eaf80;\n  --pix--secondary-hover: #b3b9c5;\n  --pix--secondary-hover-background: #5d6b89;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #909ebe40;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #dfe3eb;\n  --pix--contrast-background: #eff1f4;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #dfe3eb80;\n  --pix--contrast-hover: #fff;\n  --pix--contrast-hover-background: #fff;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--contrast-hover);\n  --pix--contrast-focus: #cfd5e240;\n  --pix--contrast-inverse: #000;\n  --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n  --pix--h1-color: #f0f1f3;\n  --pix--h2-color: #e0e3e7;\n  --pix--h3-color: #c2c7d0;\n  --pix--h4-color: #b3b9c5;\n  --pix--h5-color: #a4acba;\n  --pix--h6-color: #8891a4;\n  --pix--mark-background-color: #014063;\n  --pix--mark-color: #fff;\n  --pix--ins-color: #62af9a;\n  --pix--del-color: #ce7e7b;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #1a1f28;\n  --pix--code-color: #8891a4;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #1c212c;\n  --pix--form-element-selected-background-color: #2a3140;\n  --pix--form-element-border-color: #2a3140;\n  --pix--form-element-color: #e0e3e7;\n  --pix--form-element-placeholder-color: #8891a4;\n  --pix--form-element-active-background-color: #1a1f28;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #964a50;\n  --pix--form-element-invalid-active-border-color: #b7403b;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #2a7b6f;\n  --pix--form-element-valid-active-border-color: #16896a;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #333c4e;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 .5rem #00000040;\n  --pix--range-border-color: #202632;\n  --pix--range-active-border-color: #2a3140;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: #181c25;\n  --pix--card-border-color: var(--pix--card-background-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #1a1f28;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #08090abf;\n  --pix--progress-background-color: #202632;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: dark;\n}\n\n@media only screen and (prefers-color-scheme: dark) {\n  :is(:not([data-theme]), [data-theme=\"dark\"]) {\n    --pix--background-color: #13171f;\n    --pix--color: #c2c7d0;\n    --pix--text-selection-color: #c7940030;\n    --pix--muted-color: #7b8495;\n    --pix--muted-border-color: #202632;\n    --pix--primary: #c79400;\n    --pix--primary-background: #ffbf00;\n    --pix--primary-border: var(--pix--primary-background);\n    --pix--primary-underline: #c7940080;\n    --pix--primary-hover: #e8ae01;\n    --pix--primary-hover-background: #fecc63;\n    --pix--primary-hover-border: var(--pix--primary-hover-background);\n    --pix--primary-hover-underline: var(--pix--primary-hover);\n    --pix--primary-focus: #c7940060;\n    --pix--primary-inverse: #000;\n    --pix--secondary: #969eaf;\n    --pix--secondary-background: #525f7a;\n    --pix--secondary-border: var(--pix--secondary-background);\n    --pix--secondary-underline: #969eaf80;\n    --pix--secondary-hover: #b3b9c5;\n    --pix--secondary-hover-background: #5d6b89;\n    --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n    --pix--secondary-hover-underline: var(--pix--secondary-hover);\n    --pix--secondary-focus: #909ebe40;\n    --pix--secondary-inverse: #fff;\n    --pix--contrast: #dfe3eb;\n    --pix--contrast-background: #eff1f4;\n    --pix--contrast-border: var(--pix--contrast-background);\n    --pix--contrast-underline: #dfe3eb80;\n    --pix--contrast-hover: #fff;\n    --pix--contrast-hover-background: #fff;\n    --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n    --pix--contrast-hover-underline: var(--pix--contrast-hover);\n    --pix--contrast-focus: #cfd5e240;\n    --pix--contrast-inverse: #000;\n    --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n    --pix--h1-color: #f0f1f3;\n    --pix--h2-color: #e0e3e7;\n    --pix--h3-color: #c2c7d0;\n    --pix--h4-color: #b3b9c5;\n    --pix--h5-color: #a4acba;\n    --pix--h6-color: #8891a4;\n    --pix--mark-background-color: #014063;\n    --pix--mark-color: #fff;\n    --pix--ins-color: #62af9a;\n    --pix--del-color: #ce7e7b;\n    --pix--blockquote-border-color: var(--pix--muted-border-color);\n    --pix--blockquote-footer-color: var(--pix--muted-color);\n    --pix--button-box-shadow: 0 0 0 #0000;\n    --pix--button-hover-box-shadow: 0 0 0 #0000;\n    --pix--table-border-color: var(--pix--muted-border-color);\n    --pix--table-row-stripped-background-color: #6f78870a;\n    --pix--code-background-color: #1a1f28;\n    --pix--code-color: #8891a4;\n    --pix--code-kbd-background-color: var(--pix--color);\n    --pix--code-kbd-color: var(--pix--background-color);\n    --pix--form-element-background-color: #1c212c;\n    --pix--form-element-selected-background-color: #2a3140;\n    --pix--form-element-border-color: #2a3140;\n    --pix--form-element-color: #e0e3e7;\n    --pix--form-element-placeholder-color: #8891a4;\n    --pix--form-element-active-background-color: #1a1f28;\n    --pix--form-element-active-border-color: var(--pix--primary-border);\n    --pix--form-element-focus-color: var(--pix--primary-border);\n    --pix--form-element-disabled-opacity: .5;\n    --pix--form-element-invalid-border-color: #964a50;\n    --pix--form-element-invalid-active-border-color: #b7403b;\n    --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n    --pix--form-element-valid-border-color: #2a7b6f;\n    --pix--form-element-valid-active-border-color: #16896a;\n    --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n    --pix--switch-background-color: #333c4e;\n    --pix--switch-checked-background-color: var(--pix--primary-background);\n    --pix--switch-color: #fff;\n    --pix--switch-thumb-box-shadow: 0 0 .5rem #00000040;\n    --pix--range-border-color: #202632;\n    --pix--range-active-border-color: #2a3140;\n    --pix--range-thumb-border-color: var(--pix--background-color);\n    --pix--range-thumb-color: var(--pix--secondary-background);\n    --pix--range-thumb-active-color: var(--pix--primary-background);\n    --pix--accordion-border-color: var(--pix--muted-border-color);\n    --pix--accordion-active-summary-color: var(--pix--primary-hover);\n    --pix--accordion-close-summary-color: var(--pix--color);\n    --pix--accordion-open-summary-color: var(--pix--muted-color);\n    --pix--card-background-color: #181c25;\n    --pix--card-border-color: var(--pix--card-background-color);\n    --pix--card-box-shadow: var(--pix--box-shadow);\n    --pix--card-sectioning-background-color: #1a1f28;\n    --pix--loading-spinner-opacity: .5;\n    --pix--modal-overlay-background-color: #08090abf;\n    --pix--progress-background-color: #202632;\n    --pix--progress-color: var(--pix--primary-background);\n    --pix--tooltip-background-color: var(--pix--contrast-background);\n    --pix--tooltip-color: var(--pix--contrast-inverse);\n    color-scheme: dark;\n  }\n}\n";

},{}],"glfge":[function(require,module,exports,__globalThis) {
module.exports = ":is([data-theme=\"light\"], :not([data-theme=\"dark\"])) {\n  --pix--background-color: #fff;\n  --pix--color: #373c44;\n  --pix--text-selection-color: #00a66e40;\n  --pix--muted-color: #646b79;\n  --pix--muted-border-color: #e7eaf0;\n  --pix--primary: #007a50;\n  --pix--primary-background: #007a50;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #007a5080;\n  --pix--primary-hover: #005f3d;\n  --pix--primary-hover-background: #006d46;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #00a66e80;\n  --pix--primary-inverse: #fff;\n  --pix--secondary: #5d6b89;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #5d6b8980;\n  --pix--secondary-hover: #48536b;\n  --pix--secondary-hover-background: #48536b;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #5d6b8940;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #181c25;\n  --pix--contrast-background: #181c25;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #181c2580;\n  --pix--contrast-hover: #000;\n  --pix--contrast-hover-background: #000;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--secondary-hover);\n  --pix--contrast-focus: #5d6b8940;\n  --pix--contrast-inverse: #fff;\n  --pix--box-shadow: .0145rem .029rem .174rem #8191b504, .0335rem .067rem .402rem #8191b506, .0625rem .125rem .75rem #8191b508, .1125rem .225rem 1.35rem #8191b509, .2085rem .417rem 2.502rem #8191b50b, .5rem 1rem 6rem #8191b50f, 0 0 0 .0625rem #8191b504;\n  --pix--h1-color: #2d3138;\n  --pix--h2-color: #373c44;\n  --pix--h3-color: #424751;\n  --pix--h4-color: #4d535e;\n  --pix--h5-color: #5c6370;\n  --pix--h6-color: #646b79;\n  --pix--mark-background-color: #fde7c0;\n  --pix--mark-color: #0f1114;\n  --pix--ins-color: #1d6a54;\n  --pix--del-color: #883935;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #f3f5f7;\n  --pix--code-color: #646b79;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #fbfcfc;\n  --pix--form-element-selected-background-color: #dfe3eb;\n  --pix--form-element-border-color: #cfd5e2;\n  --pix--form-element-color: #23262c;\n  --pix--form-element-placeholder-color: var(--pix--muted-color);\n  --pix--form-element-active-background-color: #fff;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #b86a6b;\n  --pix--form-element-invalid-active-border-color: #c84f48;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #4c9b8a;\n  --pix--form-element-valid-active-border-color: #279977;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #bfc7d9;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n  --pix--range-border-color: #dfe3eb;\n  --pix--range-active-border-color: #bfc7d9;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: var(--pix--background-color);\n  --pix--card-border-color: var(--pix--muted-border-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #fbfcfc;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #e8eaedbf;\n  --pix--progress-background-color: #dfe3eb;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: light;\n}\n\n@media only screen and (prefers-color-scheme: dark) {\n  :is(:not([data-theme]), [data-theme=\"dark\"]) {\n    --pix--background-color: #13171f;\n    --pix--color: #c2c7d0;\n    --pix--text-selection-color: #00b47830;\n    --pix--muted-color: #7b8495;\n    --pix--muted-border-color: #202632;\n    --pix--primary: #00b478;\n    --pix--primary-background: #007a50;\n    --pix--primary-border: var(--pix--primary-background);\n    --pix--primary-underline: #00b47880;\n    --pix--primary-hover: #0c8;\n    --pix--primary-hover-background: #00895a;\n    --pix--primary-hover-border: var(--pix--primary-hover-background);\n    --pix--primary-hover-underline: var(--pix--primary-hover);\n    --pix--primary-focus: #00b47860;\n    --pix--primary-inverse: #fff;\n    --pix--secondary: #969eaf;\n    --pix--secondary-background: #525f7a;\n    --pix--secondary-border: var(--pix--secondary-background);\n    --pix--secondary-underline: #969eaf80;\n    --pix--secondary-hover: #b3b9c5;\n    --pix--secondary-hover-background: #5d6b89;\n    --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n    --pix--secondary-hover-underline: var(--pix--secondary-hover);\n    --pix--secondary-focus: #909ebe40;\n    --pix--secondary-inverse: #fff;\n    --pix--contrast: #dfe3eb;\n    --pix--contrast-background: #eff1f4;\n    --pix--contrast-border: var(--pix--contrast-background);\n    --pix--contrast-underline: #dfe3eb80;\n    --pix--contrast-hover: #fff;\n    --pix--contrast-hover-background: #fff;\n    --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n    --pix--contrast-hover-underline: var(--pix--contrast-hover);\n    --pix--contrast-focus: #cfd5e240;\n    --pix--contrast-inverse: #000;\n    --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n    --pix--h1-color: #f0f1f3;\n    --pix--h2-color: #e0e3e7;\n    --pix--h3-color: #c2c7d0;\n    --pix--h4-color: #b3b9c5;\n    --pix--h5-color: #a4acba;\n    --pix--h6-color: #8891a4;\n    --pix--mark-background-color: #014063;\n    --pix--mark-color: #fff;\n    --pix--ins-color: #62af9a;\n    --pix--del-color: #ce7e7b;\n    --pix--blockquote-border-color: var(--pix--muted-border-color);\n    --pix--blockquote-footer-color: var(--pix--muted-color);\n    --pix--button-box-shadow: 0 0 0 #0000;\n    --pix--button-hover-box-shadow: 0 0 0 #0000;\n    --pix--table-border-color: var(--pix--muted-border-color);\n    --pix--table-row-stripped-background-color: #6f78870a;\n    --pix--code-background-color: #1a1f28;\n    --pix--code-color: #8891a4;\n    --pix--code-kbd-background-color: var(--pix--color);\n    --pix--code-kbd-color: var(--pix--background-color);\n    --pix--form-element-background-color: #1c212c;\n    --pix--form-element-selected-background-color: #2a3140;\n    --pix--form-element-border-color: #2a3140;\n    --pix--form-element-color: #e0e3e7;\n    --pix--form-element-placeholder-color: #8891a4;\n    --pix--form-element-active-background-color: #1a1f28;\n    --pix--form-element-active-border-color: var(--pix--primary-border);\n    --pix--form-element-focus-color: var(--pix--primary-border);\n    --pix--form-element-disabled-opacity: .5;\n    --pix--form-element-invalid-border-color: #964a50;\n    --pix--form-element-invalid-active-border-color: #b7403b;\n    --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n    --pix--form-element-valid-border-color: #2a7b6f;\n    --pix--form-element-valid-active-border-color: #16896a;\n    --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n    --pix--switch-background-color: #333c4e;\n    --pix--switch-checked-background-color: var(--pix--primary-background);\n    --pix--switch-color: #fff;\n    --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n    --pix--range-border-color: #202632;\n    --pix--range-active-border-color: #2a3140;\n    --pix--range-thumb-border-color: var(--pix--background-color);\n    --pix--range-thumb-color: var(--pix--secondary-background);\n    --pix--range-thumb-active-color: var(--pix--primary-background);\n    --pix--accordion-border-color: var(--pix--muted-border-color);\n    --pix--accordion-active-summary-color: var(--pix--primary-hover);\n    --pix--accordion-close-summary-color: var(--pix--color);\n    --pix--accordion-open-summary-color: var(--pix--muted-color);\n    --pix--card-background-color: #181c25;\n    --pix--card-border-color: var(--pix--card-background-color);\n    --pix--card-box-shadow: var(--pix--box-shadow);\n    --pix--card-sectioning-background-color: #1a1f28;\n    --pix--loading-spinner-opacity: .5;\n    --pix--modal-overlay-background-color: #08090abf;\n    --pix--progress-background-color: #202632;\n    --pix--progress-color: var(--pix--primary-background);\n    --pix--tooltip-background-color: var(--pix--contrast-background);\n    --pix--tooltip-color: var(--pix--contrast-inverse);\n    color-scheme: dark;\n  }\n}\n\n[data-theme=\"dark\"] {\n  --pix--background-color: #13171f;\n  --pix--color: #c2c7d0;\n  --pix--text-selection-color: #00b47830;\n  --pix--muted-color: #7b8495;\n  --pix--muted-border-color: #202632;\n  --pix--primary: #00b478;\n  --pix--primary-background: #007a50;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #00b47880;\n  --pix--primary-hover: #0c8;\n  --pix--primary-hover-background: #00895a;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #00b47860;\n  --pix--primary-inverse: #fff;\n  --pix--secondary: #969eaf;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #969eaf80;\n  --pix--secondary-hover: #b3b9c5;\n  --pix--secondary-hover-background: #5d6b89;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #909ebe40;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #dfe3eb;\n  --pix--contrast-background: #eff1f4;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #dfe3eb80;\n  --pix--contrast-hover: #fff;\n  --pix--contrast-hover-background: #fff;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--contrast-hover);\n  --pix--contrast-focus: #cfd5e240;\n  --pix--contrast-inverse: #000;\n  --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n  --pix--h1-color: #f0f1f3;\n  --pix--h2-color: #e0e3e7;\n  --pix--h3-color: #c2c7d0;\n  --pix--h4-color: #b3b9c5;\n  --pix--h5-color: #a4acba;\n  --pix--h6-color: #8891a4;\n  --pix--mark-background-color: #014063;\n  --pix--mark-color: #fff;\n  --pix--ins-color: #62af9a;\n  --pix--del-color: #ce7e7b;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #1a1f28;\n  --pix--code-color: #8891a4;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #1c212c;\n  --pix--form-element-selected-background-color: #2a3140;\n  --pix--form-element-border-color: #2a3140;\n  --pix--form-element-color: #e0e3e7;\n  --pix--form-element-placeholder-color: #8891a4;\n  --pix--form-element-active-background-color: #1a1f28;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #964a50;\n  --pix--form-element-invalid-active-border-color: #b7403b;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #2a7b6f;\n  --pix--form-element-valid-active-border-color: #16896a;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #333c4e;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n  --pix--range-border-color: #202632;\n  --pix--range-active-border-color: #2a3140;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: #181c25;\n  --pix--card-border-color: var(--pix--card-background-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #1a1f28;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #08090abf;\n  --pix--progress-background-color: #202632;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: dark;\n}\n";

},{}],"gTYI7":[function(require,module,exports,__globalThis) {
module.exports = ":is([data-theme=\"light\"], :not([data-theme=\"dark\"])) {\n  --pix--background-color: #fff;\n  --pix--color: #373c44;\n  --pix--text-selection-color: #cd68e040;\n  --pix--muted-color: #646b79;\n  --pix--muted-border-color: #e7eaf0;\n  --pix--primary: #aa40bf;\n  --pix--primary-background: #9236a4;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #aa40bf80;\n  --pix--primary-hover: #802e90;\n  --pix--primary-hover-background: #802e90;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #cd68e080;\n  --pix--primary-inverse: #fff;\n  --pix--secondary: #5d6b89;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #5d6b8980;\n  --pix--secondary-hover: #48536b;\n  --pix--secondary-hover-background: #48536b;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #5d6b8940;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #181c25;\n  --pix--contrast-background: #181c25;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #181c2580;\n  --pix--contrast-hover: #000;\n  --pix--contrast-hover-background: #000;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--secondary-hover);\n  --pix--contrast-focus: #5d6b8940;\n  --pix--contrast-inverse: #fff;\n  --pix--box-shadow: .0145rem .029rem .174rem #8191b504, .0335rem .067rem .402rem #8191b506, .0625rem .125rem .75rem #8191b508, .1125rem .225rem 1.35rem #8191b509, .2085rem .417rem 2.502rem #8191b50b, .5rem 1rem 6rem #8191b50f, 0 0 0 .0625rem #8191b504;\n  --pix--h1-color: #2d3138;\n  --pix--h2-color: #373c44;\n  --pix--h3-color: #424751;\n  --pix--h4-color: #4d535e;\n  --pix--h5-color: #5c6370;\n  --pix--h6-color: #646b79;\n  --pix--mark-background-color: #fde7c0;\n  --pix--mark-color: #0f1114;\n  --pix--ins-color: #1d6a54;\n  --pix--del-color: #883935;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #f3f5f7;\n  --pix--code-color: #646b79;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #fbfcfc;\n  --pix--form-element-selected-background-color: #dfe3eb;\n  --pix--form-element-border-color: #cfd5e2;\n  --pix--form-element-color: #23262c;\n  --pix--form-element-placeholder-color: var(--pix--muted-color);\n  --pix--form-element-active-background-color: #fff;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #b86a6b;\n  --pix--form-element-invalid-active-border-color: #c84f48;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #4c9b8a;\n  --pix--form-element-valid-active-border-color: #279977;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #bfc7d9;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n  --pix--range-border-color: #dfe3eb;\n  --pix--range-active-border-color: #bfc7d9;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: var(--pix--background-color);\n  --pix--card-border-color: var(--pix--muted-border-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #fbfcfc;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #e8eaedbf;\n  --pix--progress-background-color: #dfe3eb;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: light;\n}\n\n@media only screen and (prefers-color-scheme: dark) {\n  :is(:not([data-theme]), [data-theme=\"dark\"]) {\n    --pix--background-color: #13171f;\n    --pix--color: #c2c7d0;\n    --pix--text-selection-color: #d47de430;\n    --pix--muted-color: #7b8495;\n    --pix--muted-border-color: #202632;\n    --pix--primary: #d47de4;\n    --pix--primary-background: #9236a4;\n    --pix--primary-border: var(--pix--primary-background);\n    --pix--primary-underline: #d47de480;\n    --pix--primary-hover: #e2a3eb;\n    --pix--primary-hover-background: #aa40bf;\n    --pix--primary-hover-border: var(--pix--primary-hover-background);\n    --pix--primary-hover-underline: var(--pix--primary-hover);\n    --pix--primary-focus: #d47de460;\n    --pix--primary-inverse: #fff;\n    --pix--secondary: #969eaf;\n    --pix--secondary-background: #525f7a;\n    --pix--secondary-border: var(--pix--secondary-background);\n    --pix--secondary-underline: #969eaf80;\n    --pix--secondary-hover: #b3b9c5;\n    --pix--secondary-hover-background: #5d6b89;\n    --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n    --pix--secondary-hover-underline: var(--pix--secondary-hover);\n    --pix--secondary-focus: #909ebe40;\n    --pix--secondary-inverse: #fff;\n    --pix--contrast: #dfe3eb;\n    --pix--contrast-background: #eff1f4;\n    --pix--contrast-border: var(--pix--contrast-background);\n    --pix--contrast-underline: #dfe3eb80;\n    --pix--contrast-hover: #fff;\n    --pix--contrast-hover-background: #fff;\n    --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n    --pix--contrast-hover-underline: var(--pix--contrast-hover);\n    --pix--contrast-focus: #cfd5e240;\n    --pix--contrast-inverse: #000;\n    --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n    --pix--h1-color: #f0f1f3;\n    --pix--h2-color: #e0e3e7;\n    --pix--h3-color: #c2c7d0;\n    --pix--h4-color: #b3b9c5;\n    --pix--h5-color: #a4acba;\n    --pix--h6-color: #8891a4;\n    --pix--mark-background-color: #014063;\n    --pix--mark-color: #fff;\n    --pix--ins-color: #62af9a;\n    --pix--del-color: #ce7e7b;\n    --pix--blockquote-border-color: var(--pix--muted-border-color);\n    --pix--blockquote-footer-color: var(--pix--muted-color);\n    --pix--button-box-shadow: 0 0 0 #0000;\n    --pix--button-hover-box-shadow: 0 0 0 #0000;\n    --pix--table-border-color: var(--pix--muted-border-color);\n    --pix--table-row-stripped-background-color: #6f78870a;\n    --pix--code-background-color: #1a1f28;\n    --pix--code-color: #8891a4;\n    --pix--code-kbd-background-color: var(--pix--color);\n    --pix--code-kbd-color: var(--pix--background-color);\n    --pix--form-element-background-color: #1c212c;\n    --pix--form-element-selected-background-color: #2a3140;\n    --pix--form-element-border-color: #2a3140;\n    --pix--form-element-color: #e0e3e7;\n    --pix--form-element-placeholder-color: #8891a4;\n    --pix--form-element-active-background-color: #1a1f28;\n    --pix--form-element-active-border-color: var(--pix--primary-border);\n    --pix--form-element-focus-color: var(--pix--primary-border);\n    --pix--form-element-disabled-opacity: .5;\n    --pix--form-element-invalid-border-color: #964a50;\n    --pix--form-element-invalid-active-border-color: #b7403b;\n    --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n    --pix--form-element-valid-border-color: #2a7b6f;\n    --pix--form-element-valid-active-border-color: #16896a;\n    --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n    --pix--switch-background-color: #333c4e;\n    --pix--switch-checked-background-color: var(--pix--primary-background);\n    --pix--switch-color: #fff;\n    --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n    --pix--range-border-color: #202632;\n    --pix--range-active-border-color: #2a3140;\n    --pix--range-thumb-border-color: var(--pix--background-color);\n    --pix--range-thumb-color: var(--pix--secondary-background);\n    --pix--range-thumb-active-color: var(--pix--primary-background);\n    --pix--accordion-border-color: var(--pix--muted-border-color);\n    --pix--accordion-active-summary-color: var(--pix--primary-hover);\n    --pix--accordion-close-summary-color: var(--pix--color);\n    --pix--accordion-open-summary-color: var(--pix--muted-color);\n    --pix--card-background-color: #181c25;\n    --pix--card-border-color: var(--pix--card-background-color);\n    --pix--card-box-shadow: var(--pix--box-shadow);\n    --pix--card-sectioning-background-color: #1a1f28;\n    --pix--loading-spinner-opacity: .5;\n    --pix--modal-overlay-background-color: #08090abf;\n    --pix--progress-background-color: #202632;\n    --pix--progress-color: var(--pix--primary-background);\n    --pix--tooltip-background-color: var(--pix--contrast-background);\n    --pix--tooltip-color: var(--pix--contrast-inverse);\n    color-scheme: dark;\n  }\n}\n\n[data-theme=\"dark\"] {\n  --pix--background-color: #13171f;\n  --pix--color: #c2c7d0;\n  --pix--text-selection-color: #d47de430;\n  --pix--muted-color: #7b8495;\n  --pix--muted-border-color: #202632;\n  --pix--primary: #d47de4;\n  --pix--primary-background: #9236a4;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #d47de480;\n  --pix--primary-hover: #e2a3eb;\n  --pix--primary-hover-background: #aa40bf;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #d47de460;\n  --pix--primary-inverse: #fff;\n  --pix--secondary: #969eaf;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #969eaf80;\n  --pix--secondary-hover: #b3b9c5;\n  --pix--secondary-hover-background: #5d6b89;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #909ebe40;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #dfe3eb;\n  --pix--contrast-background: #eff1f4;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #dfe3eb80;\n  --pix--contrast-hover: #fff;\n  --pix--contrast-hover-background: #fff;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--contrast-hover);\n  --pix--contrast-focus: #cfd5e240;\n  --pix--contrast-inverse: #000;\n  --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n  --pix--h1-color: #f0f1f3;\n  --pix--h2-color: #e0e3e7;\n  --pix--h3-color: #c2c7d0;\n  --pix--h4-color: #b3b9c5;\n  --pix--h5-color: #a4acba;\n  --pix--h6-color: #8891a4;\n  --pix--mark-background-color: #014063;\n  --pix--mark-color: #fff;\n  --pix--ins-color: #62af9a;\n  --pix--del-color: #ce7e7b;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #1a1f28;\n  --pix--code-color: #8891a4;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #1c212c;\n  --pix--form-element-selected-background-color: #2a3140;\n  --pix--form-element-border-color: #2a3140;\n  --pix--form-element-color: #e0e3e7;\n  --pix--form-element-placeholder-color: #8891a4;\n  --pix--form-element-active-background-color: #1a1f28;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #964a50;\n  --pix--form-element-invalid-active-border-color: #b7403b;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #2a7b6f;\n  --pix--form-element-valid-active-border-color: #16896a;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #333c4e;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 0 #0000;\n  --pix--range-border-color: #202632;\n  --pix--range-active-border-color: #2a3140;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: #181c25;\n  --pix--card-border-color: var(--pix--card-background-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #1a1f28;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #08090abf;\n  --pix--progress-background-color: #202632;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: dark;\n}\n";

},{}],"4g7n6":[function(require,module,exports,__globalThis) {
module.exports = ":is([data-theme=\"light\"], :not([data-theme=\"dark\"])) {\n  --pix--background-color: #fff;\n  --pix--color: #373c44;\n  --pix--text-selection-color: #95908240;\n  --pix--muted-color: #646b79;\n  --pix--muted-border-color: #e7eaf0;\n  --pix--primary: #6e6a60;\n  --pix--primary-background: #ccc6b4;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #6e6a6080;\n  --pix--primary-hover: #55524a;\n  --pix--primary-hover-background: #beb8a7;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #95908280;\n  --pix--primary-inverse: #000;\n  --pix--secondary: #5d6b89;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #5d6b8980;\n  --pix--secondary-hover: #48536b;\n  --pix--secondary-hover-background: #48536b;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #5d6b8940;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #181c25;\n  --pix--contrast-background: #181c25;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #181c2580;\n  --pix--contrast-hover: #000;\n  --pix--contrast-hover-background: #000;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--secondary-hover);\n  --pix--contrast-focus: #5d6b8940;\n  --pix--contrast-inverse: #fff;\n  --pix--box-shadow: .0145rem .029rem .174rem #8191b504, .0335rem .067rem .402rem #8191b506, .0625rem .125rem .75rem #8191b508, .1125rem .225rem 1.35rem #8191b509, .2085rem .417rem 2.502rem #8191b50b, .5rem 1rem 6rem #8191b50f, 0 0 0 .0625rem #8191b504;\n  --pix--h1-color: #2d3138;\n  --pix--h2-color: #373c44;\n  --pix--h3-color: #424751;\n  --pix--h4-color: #4d535e;\n  --pix--h5-color: #5c6370;\n  --pix--h6-color: #646b79;\n  --pix--mark-background-color: #fde7c0;\n  --pix--mark-color: #0f1114;\n  --pix--ins-color: #1d6a54;\n  --pix--del-color: #883935;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #f3f5f7;\n  --pix--code-color: #646b79;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #fbfcfc;\n  --pix--form-element-selected-background-color: #dfe3eb;\n  --pix--form-element-border-color: #cfd5e2;\n  --pix--form-element-color: #23262c;\n  --pix--form-element-placeholder-color: var(--pix--muted-color);\n  --pix--form-element-active-background-color: #fff;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #b86a6b;\n  --pix--form-element-invalid-active-border-color: #c84f48;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #4c9b8a;\n  --pix--form-element-valid-active-border-color: #279977;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #bfc7d9;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 .5rem #00000040;\n  --pix--range-border-color: #dfe3eb;\n  --pix--range-active-border-color: #bfc7d9;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: var(--pix--background-color);\n  --pix--card-border-color: var(--pix--muted-border-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #fbfcfc;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #e8eaedbf;\n  --pix--progress-background-color: #dfe3eb;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: light;\n}\n\n@media only screen and (prefers-color-scheme: dark) {\n  :is(:not([data-theme]), [data-theme=\"dark\"]) {\n    --pix--background-color: #13171f;\n    --pix--color: #c2c7d0;\n    --pix--text-selection-color: #a39e8f30;\n    --pix--muted-color: #7b8495;\n    --pix--muted-border-color: #202632;\n    --pix--primary: #a39e8f;\n    --pix--primary-background: #ccc6b4;\n    --pix--primary-border: var(--pix--primary-background);\n    --pix--primary-underline: #a39e8f80;\n    --pix--primary-hover: #beb8a7;\n    --pix--primary-hover-background: #dad4c2;\n    --pix--primary-hover-border: var(--pix--primary-hover-background);\n    --pix--primary-hover-underline: var(--pix--primary-hover);\n    --pix--primary-focus: #a39e8f60;\n    --pix--primary-inverse: #000;\n    --pix--secondary: #969eaf;\n    --pix--secondary-background: #525f7a;\n    --pix--secondary-border: var(--pix--secondary-background);\n    --pix--secondary-underline: #969eaf80;\n    --pix--secondary-hover: #b3b9c5;\n    --pix--secondary-hover-background: #5d6b89;\n    --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n    --pix--secondary-hover-underline: var(--pix--secondary-hover);\n    --pix--secondary-focus: #909ebe40;\n    --pix--secondary-inverse: #fff;\n    --pix--contrast: #dfe3eb;\n    --pix--contrast-background: #eff1f4;\n    --pix--contrast-border: var(--pix--contrast-background);\n    --pix--contrast-underline: #dfe3eb80;\n    --pix--contrast-hover: #fff;\n    --pix--contrast-hover-background: #fff;\n    --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n    --pix--contrast-hover-underline: var(--pix--contrast-hover);\n    --pix--contrast-focus: #cfd5e240;\n    --pix--contrast-inverse: #000;\n    --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n    --pix--h1-color: #f0f1f3;\n    --pix--h2-color: #e0e3e7;\n    --pix--h3-color: #c2c7d0;\n    --pix--h4-color: #b3b9c5;\n    --pix--h5-color: #a4acba;\n    --pix--h6-color: #8891a4;\n    --pix--mark-background-color: #014063;\n    --pix--mark-color: #fff;\n    --pix--ins-color: #62af9a;\n    --pix--del-color: #ce7e7b;\n    --pix--blockquote-border-color: var(--pix--muted-border-color);\n    --pix--blockquote-footer-color: var(--pix--muted-color);\n    --pix--button-box-shadow: 0 0 0 #0000;\n    --pix--button-hover-box-shadow: 0 0 0 #0000;\n    --pix--table-border-color: var(--pix--muted-border-color);\n    --pix--table-row-stripped-background-color: #6f78870a;\n    --pix--code-background-color: #1a1f28;\n    --pix--code-color: #8891a4;\n    --pix--code-kbd-background-color: var(--pix--color);\n    --pix--code-kbd-color: var(--pix--background-color);\n    --pix--form-element-background-color: #1c212c;\n    --pix--form-element-selected-background-color: #2a3140;\n    --pix--form-element-border-color: #2a3140;\n    --pix--form-element-color: #e0e3e7;\n    --pix--form-element-placeholder-color: #8891a4;\n    --pix--form-element-active-background-color: #1a1f28;\n    --pix--form-element-active-border-color: var(--pix--primary-border);\n    --pix--form-element-focus-color: var(--pix--primary-border);\n    --pix--form-element-disabled-opacity: .5;\n    --pix--form-element-invalid-border-color: #964a50;\n    --pix--form-element-invalid-active-border-color: #b7403b;\n    --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n    --pix--form-element-valid-border-color: #2a7b6f;\n    --pix--form-element-valid-active-border-color: #16896a;\n    --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n    --pix--switch-background-color: #333c4e;\n    --pix--switch-checked-background-color: var(--pix--primary-background);\n    --pix--switch-color: #fff;\n    --pix--switch-thumb-box-shadow: 0 0 .5rem #00000040;\n    --pix--range-border-color: #202632;\n    --pix--range-active-border-color: #2a3140;\n    --pix--range-thumb-border-color: var(--pix--background-color);\n    --pix--range-thumb-color: var(--pix--secondary-background);\n    --pix--range-thumb-active-color: var(--pix--primary-background);\n    --pix--accordion-border-color: var(--pix--muted-border-color);\n    --pix--accordion-active-summary-color: var(--pix--primary-hover);\n    --pix--accordion-close-summary-color: var(--pix--color);\n    --pix--accordion-open-summary-color: var(--pix--muted-color);\n    --pix--card-background-color: #181c25;\n    --pix--card-border-color: var(--pix--card-background-color);\n    --pix--card-box-shadow: var(--pix--box-shadow);\n    --pix--card-sectioning-background-color: #1a1f28;\n    --pix--loading-spinner-opacity: .5;\n    --pix--modal-overlay-background-color: #08090abf;\n    --pix--progress-background-color: #202632;\n    --pix--progress-color: var(--pix--primary-background);\n    --pix--tooltip-background-color: var(--pix--contrast-background);\n    --pix--tooltip-color: var(--pix--contrast-inverse);\n    color-scheme: dark;\n  }\n}\n\n[data-theme=\"dark\"] {\n  --pix--background-color: #13171f;\n  --pix--color: #c2c7d0;\n  --pix--text-selection-color: #a39e8f30;\n  --pix--muted-color: #7b8495;\n  --pix--muted-border-color: #202632;\n  --pix--primary: #a39e8f;\n  --pix--primary-background: #ccc6b4;\n  --pix--primary-border: var(--pix--primary-background);\n  --pix--primary-underline: #a39e8f80;\n  --pix--primary-hover: #beb8a7;\n  --pix--primary-hover-background: #dad4c2;\n  --pix--primary-hover-border: var(--pix--primary-hover-background);\n  --pix--primary-hover-underline: var(--pix--primary-hover);\n  --pix--primary-focus: #a39e8f60;\n  --pix--primary-inverse: #000;\n  --pix--secondary: #969eaf;\n  --pix--secondary-background: #525f7a;\n  --pix--secondary-border: var(--pix--secondary-background);\n  --pix--secondary-underline: #969eaf80;\n  --pix--secondary-hover: #b3b9c5;\n  --pix--secondary-hover-background: #5d6b89;\n  --pix--secondary-hover-border: var(--pix--secondary-hover-background);\n  --pix--secondary-hover-underline: var(--pix--secondary-hover);\n  --pix--secondary-focus: #909ebe40;\n  --pix--secondary-inverse: #fff;\n  --pix--contrast: #dfe3eb;\n  --pix--contrast-background: #eff1f4;\n  --pix--contrast-border: var(--pix--contrast-background);\n  --pix--contrast-underline: #dfe3eb80;\n  --pix--contrast-hover: #fff;\n  --pix--contrast-hover-background: #fff;\n  --pix--contrast-hover-border: var(--pix--contrast-hover-background);\n  --pix--contrast-hover-underline: var(--pix--contrast-hover);\n  --pix--contrast-focus: #cfd5e240;\n  --pix--contrast-inverse: #000;\n  --pix--box-shadow: .0145rem .029rem .174rem #07090c04, .0335rem .067rem .402rem #07090c06, .0625rem .125rem .75rem #07090c08, .1125rem .225rem 1.35rem #07090c09, .2085rem .417rem 2.502rem #07090c0b, .5rem 1rem 6rem #07090c0f, 0 0 0 .0625rem #07090c04;\n  --pix--h1-color: #f0f1f3;\n  --pix--h2-color: #e0e3e7;\n  --pix--h3-color: #c2c7d0;\n  --pix--h4-color: #b3b9c5;\n  --pix--h5-color: #a4acba;\n  --pix--h6-color: #8891a4;\n  --pix--mark-background-color: #014063;\n  --pix--mark-color: #fff;\n  --pix--ins-color: #62af9a;\n  --pix--del-color: #ce7e7b;\n  --pix--blockquote-border-color: var(--pix--muted-border-color);\n  --pix--blockquote-footer-color: var(--pix--muted-color);\n  --pix--button-box-shadow: 0 0 0 #0000;\n  --pix--button-hover-box-shadow: 0 0 0 #0000;\n  --pix--table-border-color: var(--pix--muted-border-color);\n  --pix--table-row-stripped-background-color: #6f78870a;\n  --pix--code-background-color: #1a1f28;\n  --pix--code-color: #8891a4;\n  --pix--code-kbd-background-color: var(--pix--color);\n  --pix--code-kbd-color: var(--pix--background-color);\n  --pix--form-element-background-color: #1c212c;\n  --pix--form-element-selected-background-color: #2a3140;\n  --pix--form-element-border-color: #2a3140;\n  --pix--form-element-color: #e0e3e7;\n  --pix--form-element-placeholder-color: #8891a4;\n  --pix--form-element-active-background-color: #1a1f28;\n  --pix--form-element-active-border-color: var(--pix--primary-border);\n  --pix--form-element-focus-color: var(--pix--primary-border);\n  --pix--form-element-disabled-opacity: .5;\n  --pix--form-element-invalid-border-color: #964a50;\n  --pix--form-element-invalid-active-border-color: #b7403b;\n  --pix--form-element-invalid-focus-color: var(--pix--form-element-invalid-active-border-color);\n  --pix--form-element-valid-border-color: #2a7b6f;\n  --pix--form-element-valid-active-border-color: #16896a;\n  --pix--form-element-valid-focus-color: var(--pix--form-element-valid-active-border-color);\n  --pix--switch-background-color: #333c4e;\n  --pix--switch-checked-background-color: var(--pix--primary-background);\n  --pix--switch-color: #fff;\n  --pix--switch-thumb-box-shadow: 0 0 .5rem #00000040;\n  --pix--range-border-color: #202632;\n  --pix--range-active-border-color: #2a3140;\n  --pix--range-thumb-border-color: var(--pix--background-color);\n  --pix--range-thumb-color: var(--pix--secondary-background);\n  --pix--range-thumb-active-color: var(--pix--primary-background);\n  --pix--accordion-border-color: var(--pix--muted-border-color);\n  --pix--accordion-active-summary-color: var(--pix--primary-hover);\n  --pix--accordion-close-summary-color: var(--pix--color);\n  --pix--accordion-open-summary-color: var(--pix--muted-color);\n  --pix--card-background-color: #181c25;\n  --pix--card-border-color: var(--pix--card-background-color);\n  --pix--card-box-shadow: var(--pix--box-shadow);\n  --pix--card-sectioning-background-color: #1a1f28;\n  --pix--loading-spinner-opacity: .5;\n  --pix--modal-overlay-background-color: #08090abf;\n  --pix--progress-background-color: #202632;\n  --pix--progress-color: var(--pix--primary-background);\n  --pix--tooltip-background-color: var(--pix--contrast-background);\n  --pix--tooltip-color: var(--pix--contrast-inverse);\n  color-scheme: dark;\n}\n";

},{}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["h5XN6","a6HBJ"], "a6HBJ", "parcelRequire94c2")

//# sourceMappingURL=pix.bd668477.js.map

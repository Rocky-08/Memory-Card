// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"HhbGK":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d231a23f43d60e28ed500b93b4f5078c"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
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
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
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
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4ThtM":[function(require,module,exports) {
let add_box = document.querySelector('.add_box');
let btn_add = document.querySelector('.add');
let btn_addCard = document.querySelector('.add_card');
let cards_container = document.querySelector('.cards');
let AllCards;
let user_memory = [];
let ques;
let ans;
let card_front;
let count = 0;
let card_back;
let pagination_text = document.querySelector('#current');
let pagination = document.querySelector('.pagination');
let noOfmemory = [];
let navigation = document.querySelector('.navigation');
let btn_close = document.querySelector('#hide');
let flip_text = document.querySelector('.flip_text');
btn_close.addEventListener('click', function() {
    add_box.classList.add('hidden');
    navigation.classList.remove('hidden');
    if (user_memory.length != 0) {
        flip_text.classList.remove('hidden');
        cards_container.classList.remove('hidden');
        pagination.classList.remove('hidden');
    }
});
// ------------------------- Local Storage ------------------------------------
let showPageAfterReload = (retriveData)=>{
    pagination.classList.remove('hidden');
    flip_text.classList.remove('hidden');
    /*   retriveData.map((ele,index) => {

        pagination_text.textContent = `${index}/${retriveData.length}`;
    }) */ pagination_bar();
};
let showRetrieveData = (retriveData)=>{
    retriveData.forEach((ele)=>{
        let html = `\n        <div class="card">\n        <div class="card_front">\n              \n            <div class="ques">${ele.ques}</div>\n             \n        </div>\n    \n        <div class="card_back ">\n            \n            <div class="answer">${ele.ans}</div>\n        </div>\n    </div>\n        `;
        cards_container.insertAdjacentHTML('beforeend', html);
        AllCards = document.querySelectorAll('.card');
    });
};
let setLocalStorageData = ()=>{
    localStorage.setItem('memory', JSON.stringify(user_memory));
};
let setLocalStorageNo = ()=>{
    localStorage.setItem('pageNo', JSON.stringify(noOfmemory));
};
let getLocalStorage = ()=>{
    let retriveMemory = JSON.parse(localStorage.getItem('memory'));
    let retriveNo = JSON.parse(localStorage.getItem('pageNo'));
    count = retriveNo.length;
    /* noOfmemory = retriveMemory; */ user_memory = retriveMemory.map((ele)=>{
        return ele;
    });
    noOfmemory = retriveNo.map((ele)=>{
        return ele;
    });
    /* console.log(noOfmemory); */ if (retriveMemory.length != 0) {
        showRetrieveData(retriveMemory);
        showPageAfterReload(retriveMemory);
        cards_container.classList.remove('hidden');
        slideMove();
    }
};
// -----------------------------------------
let pagination_bar = ()=>{
    pagination_text.textContent = `${1}/${noOfmemory.length}`;
};
let addData = (user_data)=>{
    let html = `\n     <div class="card">\n     <div class="card_front">\n     \n         <div class="ques">${user_data.ques}</div>\n          \n     </div>\n\n     <div class="card_back ">\n     \n         <div class="answer">${user_data.ans}</div>\n     </div>\n </div>\n     `;
    /*  card_front = document.querySelectorAll('.card_front');
      card_back = document.querySelectorAll('.card_back'); */ cards_container.insertAdjacentHTML('beforeend', html);
};
btn_add.addEventListener('click', function() {
    add_box.classList.remove('hidden');
    navigation.classList.add('hidden');
    cards_container.classList.add('hidden');
    pagination.classList.add('hidden');
    flip_text.classList.add('hidden');
});
btn_addCard.addEventListener('click', function() {
    navigation.classList.remove('hidden');
    ques = document.querySelector('.question_text').value;
    ans = document.querySelector('.answer_text').value;
    document.querySelector('.answer_text').value = '';
    document.querySelector('.question_text').value = '';
    let user_data = {
        ques: ques,
        ans: ans
    };
    pagination.classList.remove('hidden');
    count++;
    noOfmemory.push(count);
    user_memory.push(user_data);
    setLocalStorageData();
    setLocalStorageNo();
    addData(user_data);
    cards_container.classList.remove('hidden');
    flip_text.classList.remove('hidden');
    add_box.classList.add('hidden');
    // UPdate All CardsSection
    AllCards = document.querySelectorAll('.card');
    // show pagination buttons
    pagination_bar();
    // show slideMove
    slideMove();
});
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('card_front')) {
        console.log(e.target);
        let className = e.target.classList.contains('flip');
        if (className) {
            e.target.classList.toggle('flip');
            /*      e.target.classList.toggle('deactive');
                e.target.nextElementSibling.classList.toggle('active');   */ setTimeout(function() {
                e.target.classList.toggle('deactive');
                e.target.nextElementSibling.classList.toggle('active');
            }, 300);
        } else {
            e.target.classList.toggle('flip');
            setTimeout(function() {
                e.target.classList.toggle('deactive');
                e.target.nextElementSibling.classList.toggle('active');
            }, 900);
        }
    }
    if (e.target.classList.contains('card_back')) {
        console.log('Hell0');
        console.log(e.target.previousElementSibling);
        e.target.classList.add('flip');
        setTimeout(function() {
            e.target.classList.add('deactive');
            e.target.previousElementSibling.classList.add('active');
            e.target.previousElementSibling.classList.remove('deactive');
        }, 900);
    }
});
let shiftSlide = ()=>{
    AllCards.forEach((card, index)=>{
        card.style.transform = translateX(`${index * 100}%`);
    });
};
// Slides Animation
let pageno = ()=>{
    pagination_text.textContent = `${currentSlide}/${noOfmemory.length}`;
};
let currentSlide = 1;
let slideMove = ()=>{
    AllCards.forEach((ele, index)=>{
        ele.style.transform = `translateX(${index * 100}%)`;
    });
};
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let move = (currentSlide1)=>{
    pageno(currentSlide1);
    AllCards.forEach((ele, index)=>{
        ele.style.transform = `translateX(${(index - currentSlide1 + 1) * 100}%)`;
    });
};
let move1 = (currentSlide1)=>{
    pageno(currentSlide1);
    AllCards.forEach((ele, index)=>{
        ele.style.transform = `translateX(${(index - currentSlide1 + 1) * 100}%)`;
    });
};
prevBtn.addEventListener('click', function() {
    if (noOfmemory.length != 1) {
        if (currentSlide > 1) {
            currentSlide--;
            move1(currentSlide);
        }
    }
});
nextBtn.addEventListener('click', function() {
    if (currentSlide < noOfmemory.length) {
        currentSlide++;
        move(currentSlide);
    }
});
let btnDelete = document.querySelector('.clear');
btnDelete.addEventListener('click', function() {
    user_memory = [];
    noOfmemory = [];
    setLocalStorageData();
    setLocalStorageNo();
    cards_container.classList.add('hidden');
    pagination.classList.add('hidden');
    flip_text.classList.add('hidden');
});
window.addEventListener('load', getLocalStorage);

},{}]},["HhbGK","4ThtM"], "4ThtM", "parcelRequiree291")

//# sourceMappingURL=index.b4f5078c.js.map

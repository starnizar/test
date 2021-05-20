// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/nizar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/nizar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/nizar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/nizar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"data.json":[function(require,module,exports) {
module.exports = {
  "page_meta": {
    "h1": "DAF - TRUCKS FOR SALE FROM NETHERLANDS",
    "title": "Used DAF trucks from Netherlands for sale at SuperTrucks NL",
    "meta_keywords": "trucks, offers, prices, used, new, marketplace",
    "meta_description": "Keyword: daf netherlands. 26 trucks. Find new or used trucks in any price range fast and easy!"
  },
  "nav": [{
    "href": "#",
    "text": "Home"
  }, {
    "href": "#",
    "text": "Trucks"
  }, {
    "href": "#",
    "text": "About Us"
  }, {
    "href": "#",
    "text": "Contact"
  }],
  "breadcrumbs": [{
    "href": "#",
    "text": "Home"
  }, {
    "href": "#",
    "text": "Trucks"
  }, {
    "href": "#",
    "text": "DAF"
  }],
  "stock": [{
    "href": "#",
    "title": "DAF XF 440 6X2 SSC Intarder Standklima Liftachse ACC Euro 6",
    "price": 25900,
    "price_currency": "EUR",
    "make": "DAF",
    "model": "XF 440 SSC",
    "type": "Container transporter/ swap body truck",
    "year": 2014,
    "mileage": 486647,
    "mileage_measure": "km",
    "axle_configuration": "6x2",
    "power": 440,
    "power_measure": "hp",
    "payload": "16 550 kg",
    "gross_weight": "25 700 kg",
    "image": "1.jpg"
  }, {
    "href": "#",
    "title": "DAF XF 460 SSC 6X2 SSC ACC Liftachse Intarder Euro 6",
    "price": 29900,
    "price_currency": "EUR",
    "make": "DAF",
    "model": "XF 440 SSC",
    "type": "Container transporter/ swap body truck",
    "year": 2016,
    "mileage": 554317,
    "mileage_measure": "km",
    "axle_configuration": "6x2",
    "power": 460,
    "power_measure": "hp",
    "payload": "15 761 kg",
    "gross_weight": "26 000 kg",
    "image": "2.jpg"
  }, {
    "href": "#",
    "title": "DAF CF 75.310 + Manual",
    "price": 7950,
    "price_currency": "EUR",
    "make": "DAF",
    "model": "CF 75.310",
    "type": "Cab chassis truck",
    "year": 2006,
    "mileage": 1026087,
    "mileage_measure": "km",
    "axle_configuration": "4x4",
    "power": 310,
    "power_measure": "hp",
    "payload": "10 710 kg",
    "gross_weight": "18 600 kg",
    "image": "3.jpg"
  }, {
    "href": "#",
    "title": "DAF CF 65.300 + Euro 5 + lift",
    "price": 25950,
    "price_currency": "EUR",
    "make": "DAF",
    "model": "CF 65.300",
    "type": "Curtainsider truck",
    "year": 2014,
    "mileage": 537307,
    "mileage_measure": "km",
    "axle_configuration": "4x2",
    "power": 300,
    "power_measure": "hp",
    "payload": "9 634 kg",
    "gross_weight": "19 000 kg",
    "image": "4.jpg"
  }, {
    "href": "#",
    "title": "DAF XF 105.410 + Combi floor + Euro 5",
    "price": 19500,
    "price_currency": "EUR",
    "make": "FORD",
    "model": "XF 105.410",
    "type": "Box truck",
    "year": 2009,
    "mileage": 1142998,
    "mileage_measure": "km",
    "axle_configuration": "4x2",
    "power": 408,
    "power_measure": "hp",
    "payload": "7 445 kg",
    "gross_weight": "19 000 kg",
    "image": "5.jpg"
  }, {
    "href": "#",
    "title": "DAF 105 XF 460 6x2, EURO 5, Airco, Combi",
    "price": 18750,
    "price_currency": "EUR",
    "make": "FORD",
    "model": "XF 105.460",
    "type": "Curtainsider truck",
    "year": 2012,
    "mileage": 897000,
    "mileage_measure": "km",
    "axle_configuration": "6x2",
    "power": 460,
    "power_measure": "hp",
    "payload": "14 960 kg",
    "gross_weight": "26 000 kg",
    "image": "6.jpg"
  }],
  "page_text": [{
    "tag": "p",
    "content": "A truck (a heavy load vehicle) – is a means of transport intended for load transportation. The concept of a “truck” has a rather broad definition and includes tractor units, as well as commercial vehicles and even pick-ups. A truck consists of a traction part and a load platform. Now let’s take into consideration trucks with the integral load platform and the GVW that reaches up to 7, 5 tons."
  }, {
    "tag": "p",
    "content": "Trucks’ axle configuration may vary from 4x2 to 8x8 according to the engine capacity and the purpose of a truck. Thus, quarry and construction dump trucks are equipped with 4x4, 6x4, 6x6 and 8x6 wheel-bases more often."
  }, {
    "tag": "p",
    "content": "Trucks are equipped with all modern passive and active safety systems in order to use the truck in urban areas or on the highways. These systems include collision prevention system, hill hold control, self-adjusting headlights, etc. Moreover, a contemporary truck meets all the requirements concerning driver’s comfort and the ergonomics of the cabin."
  }]
};
},{}],"src/images/1.jpg":[function(require,module,exports) {
module.exports = "/1.dc490b2a.jpg";
},{}],"src/images/2.jpg":[function(require,module,exports) {
module.exports = "/2.edab4a9e.jpg";
},{}],"src/images/3.jpg":[function(require,module,exports) {
module.exports = "/3.9244bfb5.jpg";
},{}],"src/images/4.jpg":[function(require,module,exports) {
module.exports = "/4.09d11d79.jpg";
},{}],"src/images/5.jpg":[function(require,module,exports) {
module.exports = "/5.512058a9.jpg";
},{}],"src/images/6.jpg":[function(require,module,exports) {
module.exports = "/6.7a641bd3.jpg";
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./style.scss");

var _data = _interopRequireDefault(require("./data.json"));

var _ = _interopRequireDefault(require("./src/images/1.jpg"));

var _2 = _interopRequireDefault(require("./src/images/2.jpg"));

var _3 = _interopRequireDefault(require("./src/images/3.jpg"));

var _4 = _interopRequireDefault(require("./src/images/4.jpg"));

var _5 = _interopRequireDefault(require("./src/images/5.jpg"));

var _6 = _interopRequireDefault(require("./src/images/6.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgArr = [_.default, _2.default, _3.default, _4.default, _5.default, _6.default];
var head = document.querySelector('head');
var breadcrumbs = document.querySelector('.breadcrumbs');
var navBar = document.querySelector('nav');
var stockItems = document.querySelector('.items');
var resultTitle = document.querySelector('.resultTitle');
var pageTxt = document.querySelector('.pageText');
var metaDesc = document.createElement('meta');
metaDesc.setAttribute('name', 'description');
metaDesc.setAttribute('content', _data.default.page_meta.meta_description);
var metaKey = document.createElement('meta');
metaKey.setAttribute('name', 'keywords');
metaKey.setAttribute('content', _data.default.page_meta.meta_keywords);
head.appendChild(metaDesc);
head.appendChild(metaKey);

_data.default.nav.map(function (item) {
  var navLink = document.createElement('a');
  navLink.setAttribute('href', item.href);
  navLink.innerHTML = "".concat(item.text);
  navBar.appendChild(navLink);
});

_data.default.breadcrumbs.map(function (item) {
  var crumb = document.createElement('a');
  crumb.setAttribute('href', item.href);
  crumb.innerHTML = "".concat(item.text, " >");
  breadcrumbs.appendChild(crumb);
});

resultTitle.innerHTML = "\n    <h1>".concat(_data.default.page_meta.h1, "<h1/>\n    <h2>").concat(_data.default.page_meta.title, "<h2/>\n");
var i = 0;

_data.default.stock.map(function (item) {
  var stockItem = document.createElement('div');
  stockItem.classList.add('stockItem');
  stockItem.innerHTML = "\n        <div class='imgBox'>\n            <img src=".concat(imgArr[i], " alt=").concat(item.image, "/>\n        </div>\n        <div class='description'>\n            <h3><a href=").concat(item.href, ">").concat(item.title, "</a></h3>\n            <div>\n                <p>").concat(item.make, " ").concat(item.model, "</p>\n                <p>").concat(item.type, "</p>\n            </div>\n            <div class='mainInfo'>\n                <p>").concat(item.year, "</p>\n                <p>").concat(item.mileage, " ").concat(item.mileage_measure, "</p>\n                <p>").concat(item.axle_configuration, "</p>\n                <p>").concat(item.payload, "</p>\n                <p>").concat(item.power, " ").concat(item.power_measure, "</p>\n            </div>\n        </div>   \n        <div>\n            <h3 class='price'>").concat(item.price, " ").concat(item.price_currency, "</h3>\n        </div>\n    ");
  stockItems.appendChild(stockItem);
  i++;
});

_data.default.page_text.map(function (item) {
  var para = document.createElement('p');
  para.innerHTML = "".concat(item.content);
  pageTxt.appendChild(para);
});
},{"./style.scss":"style.scss","./data.json":"data.json","./src/images/1.jpg":"src/images/1.jpg","./src/images/2.jpg":"src/images/2.jpg","./src/images/3.jpg":"src/images/3.jpg","./src/images/4.jpg":"src/images/4.jpg","./src/images/5.jpg":"src/images/5.jpg","./src/images/6.jpg":"src/images/6.jpg"}],"C:/Users/nizar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50833" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/nizar/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/index.js.map
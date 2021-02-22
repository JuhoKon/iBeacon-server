module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GJqy");


/***/ }),

/***/ "GJqy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var _backend_services_FirebaseInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h9mq");
//in form of /api/beacon_info?groupId=123&beaconId=123

const FirebaseInstance = _backend_services_FirebaseInstance__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getInstance();
async function handler(req, res) {
  // Get data from your database
  if (req.method === "GET") {
    // Process a GET request
    const data = await FirebaseInstance.getLocalizations();
    res.status(200).json({
      data
    });
  } else {
    // Handle any other HTTP method
    res.status(404).json({
      Error: "That's an error."
    });
  }
}

/***/ }),

/***/ "HLqK":
/***/ (function(module, exports) {

module.exports = require("@google-cloud/firestore");

/***/ }),

/***/ "O2tK":
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),

/***/ "h9mq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@google-cloud/firestore"
var firestore_ = __webpack_require__("HLqK");

// CONCATENATED MODULE: ./lib/Constants.ts
const LOCALIZATION = "localizations";
// EXTERNAL MODULE: external "redis"
var external_redis_ = __webpack_require__("O2tK");
var external_redis_default = /*#__PURE__*/__webpack_require__.n(external_redis_);

// CONCATENATED MODULE: ./backend/services/RedisInstance.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RedisInstance_SRedis {
  constructor() {
    _defineProperty(this, "redisClient", void 0);

    const options = {
      port: parseInt(process.env.REDIS_PORT),
      host: process.env.REDIS_HOST
    };
    const redisClient = external_redis_default.a.createClient(options);
    this.redisClient = redisClient;
  }

  static getInstance() {
    if (!RedisInstance_SRedis.instance) {
      RedisInstance_SRedis.instance = new RedisInstance_SRedis();
    }

    return RedisInstance_SRedis.instance;
  }

  setKey(id, value) {
    const timeToStoreSeconds = 60;
    this.redisClient.setex(id, timeToStoreSeconds, JSON.stringify(value));
  }

  async getValue(id) {
    return new Promise((resolve, reject) => {
      this.redisClient.get(id, (err, reply) => {
        if (reply) {
          resolve(JSON.parse(reply));
        }

        if (err) {
          reject(err);
        }
      });
    });
  }

}

_defineProperty(RedisInstance_SRedis, "instance", void 0);

/* harmony default export */ var services_RedisInstance = (RedisInstance_SRedis);
// CONCATENATED MODULE: ./backend/services/FirebaseInstance.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { FirebaseInstance_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FirebaseInstance_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FirebaseInstance_SFirestore {
  constructor() {
    FirebaseInstance_defineProperty(this, "firestore", void 0);

    FirebaseInstance_defineProperty(this, "redisInstance", void 0);

    const firestore = new firestore_["Firestore"]();
    const RedisInstance = services_RedisInstance.getInstance();
    this.firestore = firestore;
    this.redisInstance = RedisInstance;
  }

  static getInstance() {
    if (!FirebaseInstance_SFirestore.instance) {
      FirebaseInstance_SFirestore.instance = new FirebaseInstance_SFirestore();
    }

    return FirebaseInstance_SFirestore.instance;
  }

  async getLocalizations() {
    // TODO error handling
    const valueFromCache = await this.redisInstance.getValue(LOCALIZATION);

    if (valueFromCache) {
      console.log("Serving from cache");
      return valueFromCache;
    }

    const snapshot = await this.firestore.collection(LOCALIZATION).get();
    const data = snapshot.docs.map(doc => {
      return _objectSpread({
        localizationId: doc.id
      }, doc.data());
    });
    this.redisInstance.setKey(LOCALIZATION, data);
    return data;
  } // setup listener for changes in documents by collections
  // also can update redis-keys for them


}

FirebaseInstance_defineProperty(FirebaseInstance_SFirestore, "instance", void 0);

/* harmony default export */ var FirebaseInstance = __webpack_exports__["a"] = (FirebaseInstance_SFirestore);

/***/ })

/******/ });
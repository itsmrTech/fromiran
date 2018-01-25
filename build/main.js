require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sensitive_Hash__ = __webpack_require__(29);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 *          .::USER MODEL::.
 * User Mongoose model
 * 
 */


var userSchema = mongoose.Schema({

	username: {
		type: String,
		required: true
	}
});

userSchema.plugin(mongooseTimestamp);
//UPDATING HASH WHEN PASSWORD IS CHANGED
userSchema.virtual('password').set(function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(password) {
		return __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return __WEBPACK_IMPORTED_MODULE_1__sensitive_Hash__["a" /* default */].update({ user: this._id }, { user: this._id, hash: password }, { upsert: true });

					case 2:
						return _context.abrupt('return', _context.sent);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}());

//AUTHORIZE USER
userSchema.statics.authorize = function (user) {
	return new Promise(function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(resolve, reject) {
			var savedHash, match;
			return __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_context2.next = 3;
							return __WEBPACK_IMPORTED_MODULE_1__sensitive_Hash__["a" /* default */].findOne({ user: user._id });

						case 3:
							savedHash = _context2.sent;

							if (savedHash) {
								_context2.next = 6;
								break;
							}

							return _context2.abrupt('return', reject("hash was not found"));

						case 6:
							_context2.next = 8;
							return bcrypt.compare(user.password, savedHash.hash);

						case 8:
							match = _context2.sent;

							if (!match) {
								_context2.next = 11;
								break;
							}

							return _context2.abrupt('return', resolve(true));

						case 11:
							return _context2.abrupt('return', resolve(false));

						case 14:
							_context2.prev = 14;
							_context2.t0 = _context2['catch'](0);
							return _context2.abrupt('return', reject(_context2.t0));

						case 17:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 14]]);
		}));

		return function (_x2, _x3) {
			return _ref2.apply(this, arguments);
		};
	}());
};

/* harmony default export */ __webpack_exports__["a"] = (mongoose.model('User', userSchema));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_env__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_env___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config_env__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_project__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_database__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_middlewares_CORS__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_middlewares_ExpressPlugins__ = __webpack_require__(33);
/**
 *          .::MAIN FILE::.
 * 
 * 
 */




if (process.env.projectMode == "Production") {
  //Don't print logs in production mode
  console.config({
    activeLevel: 2
  });
}
//STARTUP
console.intro({
  Name: __WEBPACK_IMPORTED_MODULE_2__config_project__["a" /* default */].Name,
  Description: __WEBPACK_IMPORTED_MODULE_2__config_project__["a" /* default */].Description,
  Notes: __WEBPACK_IMPORTED_MODULE_2__config_project__["a" /* default */].Notes,
  Mode: process.env.projectMode
});






var app = express();

// Middlewares
app.use(bodyParser.json());
app.use(__WEBPACK_IMPORTED_MODULE_5__app_middlewares_CORS__["a" /* default */]);
app.use(__WEBPACK_IMPORTED_MODULE_6__app_middlewares_ExpressPlugins__["a" /* default */]);

// Routes
__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* default */].post('/', function (req, res) {
  return res.json({
    message: __WEBPACK_IMPORTED_MODULE_2__config_project__["a" /* default */].Name + ' API'
  });
});
app.use('/', __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* default */]);
app.use(express.static(path.join(__dirname, '../public')));

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  if (!err) return res.validSend(201, {});
  if (!err.status) err.status = 500;
  return res.validSend(err.status, { error: err.message });
});

var port = process.env.API_PORT || 3000;

app.listen(port, function (err) {
  if (err) {
    console.error(err);
  }

  console.info('listening on port', Number(port));
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vars__ = __webpack_require__(21);
/**
 *          .::GLOBALS::.
 * ALL DATA THAT SHOULD BE AVAILABLE EVERYWHERE
 * 
 */


__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.mapKeys(__WEBPACK_IMPORTED_MODULE_1__modules__["a" /* default */], function (value, name) {
  global[name] = value;
});


global.globals = __WEBPACK_IMPORTED_MODULE_2__vars__["a" /* default */];

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *          .::GLOBAL MODULES::.
 * Require any module here and it will be available everywhere
 * 
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    //Sherytech modules
    sherylogger: __webpack_require__(7),

    //Data storing modules
    mongoose: __webpack_require__(8),
    mongooseTimestamp: __webpack_require__(9),

    //Tool modules
    _: __webpack_require__(1),
    async: __webpack_require__(10),
    validator: __webpack_require__(11),
    isJSON: __webpack_require__(12),
    logger: __webpack_require__(13),
    bodyParser: __webpack_require__(14),
    path: __webpack_require__(15),
    request: __webpack_require__(16),

    //Encryption modules
    bcrypt: __webpack_require__(17),
    jwt: __webpack_require__(18),

    //Server handling modules
    express: __webpack_require__(19),

    //Configuration modules
    dotenv: __webpack_require__(20)
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("shery-logger");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mongoose-timestamp");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("is-json");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("request-promise-native");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *          .::GLOBAL VARIABLES::. 
 * 
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  //Add global variables here
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {/**
 *          .::ENVIRONMENT PARSING::.
 * Parsing .env files and defining Project mode(Development, Production)
 * 
 */
var dotenvPath = "../../.dev.env";
var projectMode = "Development";
process.argv.forEach(function (val, index, array) {
  switch (val) {
    case "--production":
      projectMode = "Production";
      return dotenvPath = '../../.env';
      break;

    //Add more commands here
    default:
  }
});

dotenv.config({
  path: path.resolve(__dirname, dotenvPath)
});
process.env.projectMode = projectMode;
/* WEBPACK VAR INJECTION */}.call(exports, "src\\config"))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 *          .::PROJECT CONFIGURATION::.
 * Project configuration and all project's information are defined here.
 * 
 */
var Project = {

    Name: "fromiran",
    Description: "A middle finger from Iran to all banned systems.",
    Notes: ["Some Notes to think", "List of works to do"]

};
var DevProjectInfoKeys = ["Notes"];
if (process.env.projectMode == "Production") {
    Project = _.omit(Project, DevProjectInfoKeys);
}
/* harmony default export */ __webpack_exports__["a"] = (Project);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 *          .::DATABASE CONFIGURATION::.
 * Connecting to Mongo Server and Database Configuration
 * 
 */
mongoose.Promise = global.Promise;

var _process$env = process.env,
    DB_USERNAME = _process$env.DB_USERNAME,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_HOST = _process$env.DB_HOST,
    DB_PORT = _process$env.DB_PORT,
    DB_NAME = _process$env.DB_NAME;


var mongoOptions = {
	useMongoClient: true
};

//GENERATING MONGODB URI
var loginInfo = "";
var authSource = "";
if (DB_USERNAME) {
	loginInfo = DB_USERNAME + ":" + DB_PASSWORD + "@";
	authSource = "?authSource=" + DB_AUTHSOURCE;
}
var uri = "mongodb://" + loginInfo + DB_HOST + ":" + DB_PORT + "/" + DB_NAME + authSource;

//CONNECTING TO MONGODB SERVER
mongoose.connect(uri, mongoOptions);
var db = mongoose.connection;

//LOGS
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
	return console.log('Connected to mongo server.');
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__requests__ = __webpack_require__(26);
/**
 *          .::ROUTES::.
 * All routes are imported here.
 * 
 */
var routes = express.Router();


//USING ROUTES
routes.use('/req', __WEBPACK_IMPORTED_MODULE_0__requests__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__middlewares_Auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_RequestsController__ = __webpack_require__(31);
/**
 *          .::REQUESTS ROUTES::.
 * All request's apis are routed here.
 * 
 */
var routes = express.Router();




//ENDPOINTS
routes.all('/', __WEBPACK_IMPORTED_MODULE_1__controllers_RequestsController__["a" /* send */]);

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Token__ = __webpack_require__(30);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 *          .::AUTHENTICATION::.
 * Authentication operations belong here.
 * 
 */


//The KEY that has token
var TOKENKEY = "x-access-token";

//API AUTHENTICATION
/* unused harmony default export */ var _unused_webpack_default_export = ((function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res, next) {
		var api_token, verified;
		return __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						//Getting Token
						if (req.headers[TOKENKEY]) api_token = req.headers[TOKENKEY];
						//TOKENNOTFOUND Handling

						if (api_token) {
							_context.next = 3;
							break;
						}

						return _context.abrupt('return', res.validSend(401, "The following keys are required in request header: \n " + TOKENKEY + "\n"));

					case 3:
						_context.next = 5;
						return Object(__WEBPACK_IMPORTED_MODULE_2__Token__["a" /* verify */])(api_token);

					case 5:
						verified = _context.sent;

						if (!verified.error) {
							_context.next = 8;
							break;
						}

						return _context.abrupt('return', res.validSend(401, verified));

					case 8:
						//Adding verified user information to request object.
						_.mapKeys(verified, function (value, key) {
							return req[key] = value;
						});

						next();

					case 10:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function auth(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	}

	return auth;
})());

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__);


//HASHING PASSWORD
var doHash = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(next) {
        var password;
        return __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        password = this.getUpdate().$set.hash;
                        _context.next = 4;
                        return bcrypt.hash(password, 10);

                    case 4:
                        this.getUpdate().$set.hash = _context.sent;

                        next();
                        _context.next = 11;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);

                        next(_context.t0);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 8]]);
    }));

    return function doHash(_x) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 *          .::HASH MODEL::.
 * User's password hashes model
 * 
 */

var hashSchema = mongoose.Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hash: String
});

hashSchema.plugin(mongooseTimestamp);
hashSchema.pre('update', doHash);
hashSchema.pre('findOneAndUpdate', doHash);

/* harmony default export */ __webpack_exports__["a"] = (mongoose.model('Hash', hashSchema));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return verify; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__(2);


var _this = this;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 *          .::TOKENIZATION::.
 * Generating, Verifying and all related operations to Token are here.
 * 
 */


//TOKEN CONFIGURATION
/**
 *  basedCollection: Name of the schema that token is generating from it.
 *  useridKey: Name of the field that userid is stored there in the told collection
 * 
 * Example: {
 *      collection: 'Device',
 *      useridKey: 'userid'
 *  } 
 * This example generates token based on user's Device.
 */
var config = {
    basedCollection: 'User',
    useridKey: '_id'
};

var validationConfig = function validationConfig() {
    if (!config) return {
        valid: false,
        error: "config is not defined"
    };
    if (!config.basedCollection) return {
        valid: false,
        error: "collection name is not defined"
    };
    if (!config.useridKey) return {
        valid: false,
        error: "userid key is not defined"
    };
    return {
        valid: true
    };
};
//GENERATING TOKEN
/**
 *  @param {string} userid User unique identifier
 *  @param {string} docid Optional- Unique Identifier of basedCollection's document that is related to user. If it's null, this function will find it in database automatically. 
 */
/* unused harmony default export */ var _unused_webpack_default_export = ((function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(userid, docid) {
        var validation, basedCollection, useridKey, schema, doc;
        return __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        //CHECKING TOKENIZATION CONFIG
                        validation = validationConfig();

                        if (validation.valid) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt('return', {
                            error: validation.error
                        });

                    case 3:
                        basedCollection = config.basedCollection, useridKey = config.useridKey;
                        //IF BASEDCOLLECTION IS USER, USERID AND _ID SHOULD BE SAME.

                        if (!(basedCollection == 'User')) {
                            _context.next = 8;
                            break;
                        }

                        _context.next = 7;
                        return jwt.sign({
                            userid: userid,
                            basedCollection: basedCollection,
                            _id: userid
                        }, process.env.JWT_SECRET);

                    case 7:
                        return _context.abrupt('return', _context.sent);

                    case 8:
                        schema = mongoose.model(basedCollection);
                        //IF DOCID IS NOT DEFINED, FIND IT IN BASEDCOLLECTION

                        if (docid) {
                            _context.next = 16;
                            break;
                        }

                        _context.next = 12;
                        return schema.findOne(_defineProperty({}, useridKey, userid));

                    case 12:
                        doc = _context.sent;

                        if (doc) {
                            _context.next = 15;
                            break;
                        }

                        return _context.abrupt('return', {
                            error: "No " + basedCollection + "'s document with passed " + useridKey + " was found."
                        });

                    case 15:
                        docid = doc._id;

                    case 16:
                        _context.next = 18;
                        return jwt.sign({
                            userid: userid,
                            basedCollection: basedCollection,
                            docid: docid
                        }, process.env.JWT_SECRET);

                    case 18:
                        return _context.abrupt('return', _context.sent);

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})());
//VERIFYING TOKEN
var verify = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(token) {
        var authenticationInfo, basedCollection, userid, docid, user, result, schema, doc;
        return __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return jwt.verify(token, process.env.JWT_SECRET);

                    case 3:
                        authenticationInfo = _context2.sent;
                        basedCollection = authenticationInfo.basedCollection, userid = authenticationInfo.userid, docid = authenticationInfo.docid;
                        //FINDING USER OBJECT

                        _context2.next = 7;
                        return __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* default */].findById(userid);

                    case 7:
                        user = _context2.sent;
                        result = { User: user };

                        if (!(basedCollection != 'User')) {
                            _context2.next = 15;
                            break;
                        }

                        //FINDING BASEDCOLLECTION DOCUMENT
                        schema = mongoose.model(basedCollection);
                        _context2.next = 13;
                        return schema.findById(docid);

                    case 13:
                        doc = _context2.sent;

                        result[basedCollection] = doc;

                    case 15:
                        return _context2.abrupt('return', result);

                    case 18:
                        _context2.prev = 18;
                        _context2.t0 = _context2['catch'](0);
                        return _context2.abrupt('return', { error: "Token is not valid." });

                    case 21:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this, [[0, 18]]);
    }));

    return function verify(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return send; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 *          .::REQUEST CONTROLLER::.
 * All related operations to Request belong here. 
 * 
 */

/*          POST /api/req/send            */
var send = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
        var url, method, body, headers, response;
        return __WEBPACK_IMPORTED_MODULE_0_F_projects_fromiran_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        url = req.query.url;

                        if (url) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt("return", res.status(400).json({ errorFromIran: "url is missed" }));

                    case 3:
                        method = req.method, body = req.body, headers = req.headers;
                        _context.prev = 4;
                        _context.next = 7;
                        return request({
                            url: url,
                            json: body,
                            headers: headers,
                            method: method

                        });

                    case 7:
                        response = _context.sent;
                        return _context.abrupt("return", res.status(200).json(response));

                    case 11:
                        _context.prev = 11;
                        _context.t0 = _context["catch"](4);

                        if (!_context.t0.statusCode) _context.t0.statusCode = 500;
                        return _context.abrupt("return", res.status(_context.t0.statusCode).json(_context.t0));

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, _this, [[4, 11]]);
    }));

    return function send(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CORS;
/**
 *          .::CORS::.
 * Cross-Origin Resource Sharing configuration
 * 
 */
function CORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, HEAD, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Api-Token, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isValid__ = __webpack_require__(34);
/**
 *          .::EXPRESS PLUGINS::.
 * Express plugins and all adding data to req and res are here.
 * 
 */

/* harmony default export */ __webpack_exports__["a"] = (function (req, res, next) {
	validators(req, res);

	next();
});
//ADDING REQUEST AND RESPONSE VALIDATORS TO REQUEST
var validators = function validators(req, res) {
	res.validSend = __WEBPACK_IMPORTED_MODULE_0__isValid__["a" /* default */].res;
	req.res = res;
	req.validate = __WEBPACK_IMPORTED_MODULE_0__isValid__["a" /* default */].req;
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export req */
/* unused harmony export res */
/**
 *          .::VALIDATION::.
 * All validation operations belong here.
 * 
 */

/**
 * Returns a json object that has `foundKeys` and `notFoundKeys`
 * @param {*} object
 * @param {*[]} keys keys to find in `object`
 */
var findKeys = function findKeys(object, keys) {
    var foundKeys = [];
    var notFoundKeys = [];
    keys.forEach(function (key) {
        notFoundKeys.push(key);
        _.mapKeys(object, function (objectValue, objectKey) {
            if (key == objectKey) {
                if (object[key] && object[key] != null && object[key] != "") {

                    foundKeys.push(key);
                    notFoundKeys.pop();
                }
            }
        });
    });
    return {
        foundKeys: foundKeys,
        notFoundKeys: notFoundKeys
    };
};
var deepOmit = function deepOmit(object, keys) {
    object = _.omit(object, keys);

    return _.mapValues(object, function (o) {
        if (isJSON(o, true)) return deepOmit(o, keys);
        return o;
    });
};
/**
 * request validation
 * @param requiredKeys {string[]} Keys that are required in req.body
 * @param forbiddenKeys {string[]} Keys that are not allowed to be in req.body
 * 
 */
function req(requiredKeys, forbiddenKeys) {
    var req = this;
    var res = req.res;
    var body = req.body;

    if (!requiredKeys) requiredKeys = [];
    if (!forbiddenKeys) forbiddenKeys = [];

    var missedKeys = findKeys(body, requiredKeys).notFoundKeys;
    var notAllowedKeys = findKeys(body, forbiddenKeys).foundKeys;

    var error = "";
    if (missedKeys.length > 0) error = "The following keys are required in request body:\n " + _.join(missedKeys, " , ") + "\n";
    if (forbiddenKeys.length > 0) error = "The following keys are forbidden in request body:\n" + _.join(forbiddenKeys, " , ") + "\n";

    if (error == "") return true;
    res.validSend(400, {
        error: error
    });
    return false;
}
/**
 * 
 * @param {number} status http status code
 * @param {*} body response body
 * @param {string[]} omitKeys Optional - keys to omit from response body
 */
function res(status, body, omitKeys) {
    if (!status) status = 200;
    if (body) if (validator.isJSON(JSON.stringify(body))) {

        if (body["$__"]) body = body.$__;

        if (body._doc) body = body._doc;

        var defaultOmitKeys = ["__v"];
        if (!omitKeys) omitKeys = defaultOmitKeys;
        body = deepOmit(body, omitKeys);
    }

    return this.status(status).json(body);
}

/* harmony default export */ __webpack_exports__["a"] = ({
    req: req,
    res: res
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.map
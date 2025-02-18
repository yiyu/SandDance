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
})({"b0rV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorScaleNone = exports.Other = exports.SignalNames = exports.ScaleNames = exports.DataNames = exports.FieldNames = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const FieldNames = {
  Active: "__SandDance__Active",
  Collapsed: "__SandDance__Collapsed",
  Selected: "__SandDance__Selected",
  Top: "__SandDance__Top",
  Index: "__SandDance__Index"
};
exports.FieldNames = FieldNames;
const DataNames = {
  Pre: "PreData",
  Main: "MainData",
  EmptyBin: "EmptyBinsData",
  TopLookup: "TopData",
  Legend: "LegendData",
  FacetGroupCell: "FacetGroupCellData",
  FacetCellTitles: "FacetCellTitlesData"
};
exports.DataNames = DataNames;
const ScaleNames = {
  Color: "ColorScale",
  X: "MainXScale",
  Y: "MainYScale",
  Z: "MainZScale"
}; //Signal names

exports.ScaleNames = ScaleNames;
const SignalNames = {
  ColorBinCount: "RoleColor_BinCountSignal",
  ColorReverse: "RoleColor_ReverseSignal",
  FacetColumns: "RoleFacet_ColumnsSignal",
  FacetRows: "RoleFacet_RowsSignal",
  InnerPadding: "Chart_InnerPadding",
  OuterPadding: "Chart_OuterPadding",
  PointSize: "Chart_PointSizeSignal",
  TextAngleX: "Text_AngleXSignal",
  TextAngleY: "Text_AngleYSignal",
  TextScale: "Text_ScaleSignal",
  TextSize: "Text_SizeSignal",
  TextTitleSize: "Text_TitleSizeSignal",
  TreeMapMethod: "Chart_TreeMapMethodSignal",
  XBins: "RoleX_BinsSignal",
  XGridSize: "Chart_XGridSize",
  YBins: "RoleY_BinsSignal",
  YDomain: "RoleY_DomainSignal",
  YGridSize: "Chart_YGridSize",
  ZHeight: "RoleZ_HeightSignal",
  ZProportion: "RoleZ_ProportionSignal"
}; //These are special formulaic data values

exports.SignalNames = SignalNames;
const Other = "__Other"; //name of the "no-color" palette

exports.Other = Other;
const ColorScaleNone = "none";
exports.ColorScaleNone = ColorScaleNone;
},{}],"Syc7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FieldNames", {
  enumerable: true,
  get: function () {
    return _constants.FieldNames;
  }
});
Object.defineProperty(exports, "ScaleNames", {
  enumerable: true,
  get: function () {
    return _constants.ScaleNames;
  }
});
Object.defineProperty(exports, "ColorScaleNone", {
  enumerable: true,
  get: function () {
    return _constants.ColorScaleNone;
  }
});
Object.defineProperty(exports, "SignalNames", {
  enumerable: true,
  get: function () {
    return _constants.SignalNames;
  }
});

var _constants = require("./specs/constants");
},{"./specs/constants":"b0rV"}],"yy6X":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSearchExpressionGroup = isSearchExpressionGroup;
exports.createGroupFromExpression = createGroupFromExpression;
exports.ensureSearchExpressionGroupArray = ensureSearchExpressionGroupArray;

function isSearchExpressionGroup(search) {
  if (!search) {
    return false;
  }

  return !!search.expressions;
}

function createGroupFromExpression(input) {
  const output = {
    expressions: [input]
  };
  return output;
}

function ensureSearchExpressionGroupArray(search) {
  if (Array.isArray(search)) {
    return [...search];
  } else if (isSearchExpressionGroup(search)) {
    return [search];
  } else {
    return [createGroupFromExpression(search)];
  }
}
},{}],"r4by":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareExpression = compareExpression;
exports.compareGroup = compareGroup;
exports.compare = compare;

var _group = require("./group");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const expressionKeys = Object.keys({
  clause: null,
  name: null,
  operator: null,
  value: null
});

function compareExpression(a, b) {
  for (let k = 0; k < expressionKeys.length; k++) {
    let key = expressionKeys[k];
    if (a[key] != b[key]) return false;
  }

  return true;
}

const groupKeys = Object.keys({
  clause: null
});

function compareGroup(a, b) {
  for (let k = 0; k < groupKeys.length; k++) {
    let key = groupKeys[k];
    if (a[key] != b[key]) return false;
  }

  if (a.expressions.length != b.expressions.length) return false;

  for (let i = 0; i < a.expressions.length; i++) {
    if (!compareExpression(a.expressions[i], b.expressions[i])) return false;
  }

  return true;
}

function compare(a, b) {
  if (a == b) return true;
  if (!a || !b) return false;
  let arrs = [a, b].map(_group.ensureSearchExpressionGroupArray);
  let [arrA, arrB] = arrs;
  if (arrA.length != arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    if (!compareGroup(arrA[i], arrB[i])) return false;
  }

  return true;
}
},{"./group":"yy6X"}],"4wNj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invert = invert;

var _group = require("./group");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function invertSearchExpressionGroup(input) {
  //this only works if all expressions in this group have the same clause
  const output = {
    expressions: input.expressions.map(invertSearchExpression)
  };

  if (input.clause) {
    output.clause = invertedClauses[input.clause];
  }

  return output;
}

const invertedOperators = {
  '!=': '==',
  '==': '!=',
  '<': '>=',
  '>=': '<',
  '<=': '>',
  '>': '<=',
  '!contains': 'contains',
  'contains': '!contains',
  '!isnullorEmpty': 'isnullorEmpty',
  'isnullorEmpty': '!isnullorEmpty',
  '!starts': 'starts',
  'starts': '!starts'
};
const invertedClauses = {
  '&&': '||',
  '||': '&&'
};

function invertSearchExpression(input) {
  const operator = invertedOperators[input.operator];
  const output = Object.assign({}, input, {
    operator
  });

  if (input.clause) {
    output.clause = invertedClauses[input.clause];
  }

  return output;
}

function invert(search) {
  if (Array.isArray(search)) {
    return search.map(invertSearchExpressionGroup);
  } else if ((0, _group.isSearchExpressionGroup)(search)) {
    return invertSearchExpressionGroup(search);
  } else {
    return invertSearchExpression(search);
  }
}
},{"./group":"yy6X"}],"hTOx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.narrow = narrow;

var _group = require("./group");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function narrow(a, b) {
  if (!a) {
    return b;
  }

  let arrs = [a, b].map(_group.ensureSearchExpressionGroupArray);
  let [arrA, arrB] = arrs;
  arrB[0].clause = '&&';
  return arrA.concat(arrB);
}
},{"./group":"yy6X"}],"0mJg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compare = require("./compare");

Object.keys(_compare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compare[key];
    }
  });
});

var _invert = require("./invert");

Object.keys(_invert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invert[key];
    }
  });
});

var _narrow = require("./narrow");

Object.keys(_narrow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _narrow[key];
    }
  });
});
},{"./compare":"r4by","./invert":"4wNj","./narrow":"hTOx"}],"JCLk":[function(require,module,exports) {

},{}],"ipKi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerNames = exports.GL_ORDINAL = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const GL_ORDINAL = "GL_ORDINAL";
exports.GL_ORDINAL = GL_ORDINAL;
const layerNames = {
  cubes: "LAYER_CUBES",
  lines: "LAYER_LINES",
  text: "LAYER_TEXT"
};
exports.layerNames = layerNames;
},{}],"+DOk":[function(require,module,exports) {
var global = arguments[3];
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*!
 * XRegExp 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2007-2017 MIT License
 */

/**
 * XRegExp provides augmented, extensible regular expressions. You get additional regex syntax and
 * flags, beyond what browsers support natively. XRegExp is also a regex utility belt with tools to
 * make your client-side grepping simpler and more powerful, while freeing you from related
 * cross-browser inconsistencies.
 */

// ==--------------------------==
// Private stuff
// ==--------------------------==

// Property name used for extended regex instance data
var REGEX_DATA = 'xregexp';
// Optional features that can be installed and uninstalled
var features = {
    astral: false
};
// Native methods to use and restore ('native' is an ES3 reserved keyword)
var nativ = {
    exec: RegExp.prototype.exec,
    test: RegExp.prototype.test,
    match: String.prototype.match,
    replace: String.prototype.replace,
    split: String.prototype.split
};
// Storage for fixed/extended native methods
var fixed = {};
// Storage for regexes cached by `XRegExp.cache`
var regexCache = {};
// Storage for pattern details cached by the `XRegExp` constructor
var patternCache = {};
// Storage for regex syntax tokens added internally or by `XRegExp.addToken`
var tokens = [];
// Token scopes
var defaultScope = 'default';
var classScope = 'class';
// Regexes that match native regex syntax, including octals
var nativeTokens = {
    // Any native multicharacter token in default scope, or any single character
    'default': /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
    // Any native multicharacter token in character class scope, or any single character
    'class': /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
};
// Any backreference or dollar-prefixed character in replacement strings
var replacementToken = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g;
// Check for correct `exec` handling of nonparticipating capturing groups
var correctExecNpcg = nativ.exec.call(/()??/, '')[1] === undefined;
// Check for ES6 `flags` prop support
var hasFlagsProp = /x/.flags !== undefined;
// Shortcut to `Object.prototype.toString`
var toString = {}.toString;

function hasNativeFlag(flag) {
    // Can't check based on the presence of properties/getters since browsers might support such
    // properties even when they don't support the corresponding flag in regex construction (tested
    // in Chrome 48, where `'unicode' in /x/` is true but trying to construct a regex with flag `u`
    // throws an error)
    var isSupported = true;
    try {
        // Can't use regex literals for testing even in a `try` because regex literals with
        // unsupported flags cause a compilation error in IE
        new RegExp('', flag);
    } catch (exception) {
        isSupported = false;
    }
    return isSupported;
}
// Check for ES6 `u` flag support
var hasNativeU = hasNativeFlag('u');
// Check for ES6 `y` flag support
var hasNativeY = hasNativeFlag('y');
// Tracker for known flags, including addon flags
var registeredFlags = {
    g: true,
    i: true,
    m: true,
    u: hasNativeU,
    y: hasNativeY
};

/**
 * Attaches extended data and `XRegExp.prototype` properties to a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to augment.
 * @param {Array} captureNames Array with capture names, or `null`.
 * @param {String} xSource XRegExp pattern used to generate `regex`, or `null` if N/A.
 * @param {String} xFlags XRegExp flags used to generate `regex`, or `null` if N/A.
 * @param {Boolean} [isInternalOnly=false] Whether the regex will be used only for internal
 *   operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *   skipping some operations like attaching `XRegExp.prototype` properties.
 * @returns {RegExp} Augmented regex.
 */
function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
    var p = void 0;

    regex[REGEX_DATA] = {
        captureNames: captureNames
    };

    if (isInternalOnly) {
        return regex;
    }

    // Can't auto-inherit these since the XRegExp constructor returns a nonprimitive value
    if (regex.__proto__) {
        regex.__proto__ = XRegExp.prototype;
    } else {
        for (p in XRegExp.prototype) {
            // An `XRegExp.prototype.hasOwnProperty(p)` check wouldn't be worth it here, since this
            // is performance sensitive, and enumerable `Object.prototype` or `RegExp.prototype`
            // extensions exist on `regex.prototype` anyway
            regex[p] = XRegExp.prototype[p];
        }
    }

    regex[REGEX_DATA].source = xSource;
    // Emulate the ES6 `flags` prop by ensuring flags are in alphabetical order
    regex[REGEX_DATA].flags = xFlags ? xFlags.split('').sort().join('') : xFlags;

    return regex;
}

/**
 * Removes any duplicate characters from the provided string.
 *
 * @private
 * @param {String} str String to remove duplicate characters from.
 * @returns {String} String with any duplicate characters removed.
 */
function clipDuplicates(str) {
    return nativ.replace.call(str, /([\s\S])(?=[\s\S]*\1)/g, '');
}

/**
 * Copies a regex object while preserving extended data and augmenting with `XRegExp.prototype`
 * properties. The copy has a fresh `lastIndex` property (set to zero). Allows adding and removing
 * flags g and y while copying the regex.
 *
 * @private
 * @param {RegExp} regex Regex to copy.
 * @param {Object} [options] Options object with optional properties:
 *   - `addG` {Boolean} Add flag g while copying the regex.
 *   - `addY` {Boolean} Add flag y while copying the regex.
 *   - `removeG` {Boolean} Remove flag g while copying the regex.
 *   - `removeY` {Boolean} Remove flag y while copying the regex.
 *   - `isInternalOnly` {Boolean} Whether the copied regex will be used only for internal
 *     operations, and never exposed to users. For internal-only regexes, we can improve perf by
 *     skipping some operations like attaching `XRegExp.prototype` properties.
 *   - `source` {String} Overrides `<regex>.source`, for special cases.
 * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
 */
function copyRegex(regex, options) {
    if (!XRegExp.isRegExp(regex)) {
        throw new TypeError('Type RegExp expected');
    }

    var xData = regex[REGEX_DATA] || {};
    var flags = getNativeFlags(regex);
    var flagsToAdd = '';
    var flagsToRemove = '';
    var xregexpSource = null;
    var xregexpFlags = null;

    options = options || {};

    if (options.removeG) {
        flagsToRemove += 'g';
    }
    if (options.removeY) {
        flagsToRemove += 'y';
    }
    if (flagsToRemove) {
        flags = nativ.replace.call(flags, new RegExp('[' + flagsToRemove + ']+', 'g'), '');
    }

    if (options.addG) {
        flagsToAdd += 'g';
    }
    if (options.addY) {
        flagsToAdd += 'y';
    }
    if (flagsToAdd) {
        flags = clipDuplicates(flags + flagsToAdd);
    }

    if (!options.isInternalOnly) {
        if (xData.source !== undefined) {
            xregexpSource = xData.source;
        }
        // null or undefined; don't want to add to `flags` if the previous value was null, since
        // that indicates we're not tracking original precompilation flags
        if (xData.flags != null) {
            // Flags are only added for non-internal regexes by `XRegExp.globalize`. Flags are never
            // removed for non-internal regexes, so don't need to handle it
            xregexpFlags = flagsToAdd ? clipDuplicates(xData.flags + flagsToAdd) : xData.flags;
        }
    }

    // Augment with `XRegExp.prototype` properties, but use the native `RegExp` constructor to avoid
    // searching for special tokens. That would be wrong for regexes constructed by `RegExp`, and
    // unnecessary for regexes constructed by `XRegExp` because the regex has already undergone the
    // translation to native regex syntax
    regex = augment(new RegExp(options.source || regex.source, flags), hasNamedCapture(regex) ? xData.captureNames.slice(0) : null, xregexpSource, xregexpFlags, options.isInternalOnly);

    return regex;
}

/**
 * Converts hexadecimal to decimal.
 *
 * @private
 * @param {String} hex
 * @returns {Number}
 */
function dec(hex) {
    return parseInt(hex, 16);
}

/**
 * Returns a pattern that can be used in a native RegExp in place of an ignorable token such as an
 * inline comment or whitespace with flag x. This is used directly as a token handler function
 * passed to `XRegExp.addToken`.
 *
 * @private
 * @param {String} match Match arg of `XRegExp.addToken` handler
 * @param {String} scope Scope arg of `XRegExp.addToken` handler
 * @param {String} flags Flags arg of `XRegExp.addToken` handler
 * @returns {String} Either '' or '(?:)', depending on which is needed in the context of the match.
 */
function getContextualTokenSeparator(match, scope, flags) {
    if (
    // No need to separate tokens if at the beginning or end of a group
    match.input[match.index - 1] === '(' || match.input[match.index + match[0].length] === ')' ||
    // Avoid separating tokens when the following token is a quantifier
    isQuantifierNext(match.input, match.index + match[0].length, flags)) {
        return '';
    }
    // Keep tokens separated. This avoids e.g. inadvertedly changing `\1 1` or `\1(?#)1` to `\11`.
    // This also ensures all tokens remain as discrete atoms, e.g. it avoids converting the syntax
    // error `(? :` into `(?:`.
    return '(?:)';
}

/**
 * Returns native `RegExp` flags used by a regex object.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {String} Native flags in use.
 */
function getNativeFlags(regex) {
    return hasFlagsProp ? regex.flags :
    // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
    // with an empty string) allows this to continue working predictably when
    // `XRegExp.proptotype.toString` is overridden
    nativ.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(regex))[1];
}

/**
 * Determines whether a regex has extended instance data used to track capture names.
 *
 * @private
 * @param {RegExp} regex Regex to check.
 * @returns {Boolean} Whether the regex uses named capture.
 */
function hasNamedCapture(regex) {
    return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames);
}

/**
 * Converts decimal to hexadecimal.
 *
 * @private
 * @param {Number|String} dec
 * @returns {String}
 */
function hex(dec) {
    return parseInt(dec, 10).toString(16);
}

/**
 * Checks whether the next nonignorable token after the specified position is a quantifier.
 *
 * @private
 * @param {String} pattern Pattern to search within.
 * @param {Number} pos Index in `pattern` to search at.
 * @param {String} flags Flags used by the pattern.
 * @returns {Boolean} Whether the next nonignorable token is a quantifier.
 */
function isQuantifierNext(pattern, pos, flags) {
    var inlineCommentPattern = '\\(\\?#[^)]*\\)';
    var lineCommentPattern = '#[^#\\n]*';
    var quantifierPattern = '[?*+]|{\\d+(?:,\\d*)?}';
    return nativ.test.call(flags.indexOf('x') !== -1 ?
    // Ignore any leading whitespace, line comments, and inline comments
    /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ :
    // Ignore any leading inline comments
    /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/, pattern.slice(pos));
}

/**
 * Determines whether a value is of the specified type, by resolving its internal [[Class]].
 *
 * @private
 * @param {*} value Object to check.
 * @param {String} type Type to check for, in TitleCase.
 * @returns {Boolean} Whether the object matches the type.
 */
function isType(value, type) {
    return toString.call(value) === '[object ' + type + ']';
}

/**
 * Adds leading zeros if shorter than four characters. Used for fixed-length hexadecimal values.
 *
 * @private
 * @param {String} str
 * @returns {String}
 */
function pad4(str) {
    while (str.length < 4) {
        str = '0' + str;
    }
    return str;
}

/**
 * Checks for flag-related errors, and strips/applies flags in a leading mode modifier. Offloads
 * the flag preparation logic from the `XRegExp` constructor.
 *
 * @private
 * @param {String} pattern Regex pattern, possibly with a leading mode modifier.
 * @param {String} flags Any combination of flags.
 * @returns {Object} Object with properties `pattern` and `flags`.
 */
function prepareFlags(pattern, flags) {
    var i = void 0;

    // Recent browsers throw on duplicate flags, so copy this behavior for nonnative flags
    if (clipDuplicates(flags) !== flags) {
        throw new SyntaxError('Invalid duplicate regex flag ' + flags);
    }

    // Strip and apply a leading mode modifier with any combination of flags except g or y
    pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function ($0, $1) {
        if (nativ.test.call(/[gy]/, $1)) {
            throw new SyntaxError('Cannot use flag g or y in mode modifier ' + $0);
        }
        // Allow duplicate flags within the mode modifier
        flags = clipDuplicates(flags + $1);
        return '';
    });

    // Throw on unknown native or nonnative flags
    for (i = 0; i < flags.length; ++i) {
        if (!registeredFlags[flags[i]]) {
            throw new SyntaxError('Unknown regex flag ' + flags[i]);
        }
    }

    return {
        pattern: pattern,
        flags: flags
    };
}

/**
 * Prepares an options object from the given value.
 *
 * @private
 * @param {String|Object} value Value to convert to an options object.
 * @returns {Object} Options object.
 */
function prepareOptions(value) {
    var options = {};

    if (isType(value, 'String')) {
        XRegExp.forEach(value, /[^\s,]+/, function (match) {
            options[match] = true;
        });

        return options;
    }

    return value;
}

/**
 * Registers a flag so it doesn't throw an 'unknown flag' error.
 *
 * @private
 * @param {String} flag Single-character flag to register.
 */
function registerFlag(flag) {
    if (!/^[\w$]$/.test(flag)) {
        throw new Error('Flag must be a single character A-Za-z0-9_$');
    }

    registeredFlags[flag] = true;
}

/**
 * Runs built-in and custom regex syntax tokens in reverse insertion order at the specified
 * position, until a match is found.
 *
 * @private
 * @param {String} pattern Original pattern from which an XRegExp object is being built.
 * @param {String} flags Flags being used to construct the regex.
 * @param {Number} pos Position to search for tokens within `pattern`.
 * @param {Number} scope Regex scope to apply: 'default' or 'class'.
 * @param {Object} context Context object to use for token handler functions.
 * @returns {Object} Object with properties `matchLength`, `output`, and `reparse`; or `null`.
 */
function runTokens(pattern, flags, pos, scope, context) {
    var i = tokens.length;
    var leadChar = pattern[pos];
    var result = null;
    var match = void 0;
    var t = void 0;

    // Run in reverse insertion order
    while (i--) {
        t = tokens[i];
        if (t.leadChar && t.leadChar !== leadChar || t.scope !== scope && t.scope !== 'all' || t.flag && !(flags.indexOf(t.flag) !== -1)) {
            continue;
        }

        match = XRegExp.exec(pattern, t.regex, pos, 'sticky');
        if (match) {
            result = {
                matchLength: match[0].length,
                output: t.handler.call(context, match, scope, flags),
                reparse: t.reparse
            };
            // Finished with token tests
            break;
        }
    }

    return result;
}

/**
 * Enables or disables implicit astral mode opt-in. When enabled, flag A is automatically added to
 * all new regexes created by XRegExp. This causes an error to be thrown when creating regexes if
 * the Unicode Base addon is not available, since flag A is registered by that addon.
 *
 * @private
 * @param {Boolean} on `true` to enable; `false` to disable.
 */
function setAstral(on) {
    features.astral = on;
}

/**
 * Returns the object, or throws an error if it is `null` or `undefined`. This is used to follow
 * the ES5 abstract operation `ToObject`.
 *
 * @private
 * @param {*} value Object to check and return.
 * @returns {*} The provided object.
 */
function toObject(value) {
    // null or undefined
    if (value == null) {
        throw new TypeError('Cannot convert null or undefined to object');
    }

    return value;
}

// ==--------------------------==
// Constructor
// ==--------------------------==

/**
 * Creates an extended regular expression object for matching text with a pattern. Differs from a
 * native regular expression in that additional syntax and flags are supported. The returned object
 * is in fact a native `RegExp` and works with all native methods.
 *
 * @class XRegExp
 * @constructor
 * @param {String|RegExp} pattern Regex pattern string, or an existing regex object to copy.
 * @param {String} [flags] Any combination of flags.
 *   Native flags:
 *     - `g` - global
 *     - `i` - ignore case
 *     - `m` - multiline anchors
 *     - `u` - unicode (ES6)
 *     - `y` - sticky (Firefox 3+, ES6)
 *   Additional XRegExp flags:
 *     - `n` - explicit capture
 *     - `s` - dot matches all (aka singleline)
 *     - `x` - free-spacing and line comments (aka extended)
 *     - `A` - astral (requires the Unicode Base addon)
 *   Flags cannot be provided when constructing one `RegExp` from another.
 * @returns {RegExp} Extended regular expression object.
 * @example
 *
 * // With named capture and flag x
 * XRegExp(`(?<year>  [0-9]{4} ) -?  # year
 *          (?<month> [0-9]{2} ) -?  # month
 *          (?<day>   [0-9]{2} )     # day`, 'x');
 *
 * // Providing a regex object copies it. Native regexes are recompiled using native (not XRegExp)
 * // syntax. Copies maintain extended data, are augmented with `XRegExp.prototype` properties, and
 * // have fresh `lastIndex` properties (set to zero).
 * XRegExp(/regex/);
 */
function XRegExp(pattern, flags) {
    if (XRegExp.isRegExp(pattern)) {
        if (flags !== undefined) {
            throw new TypeError('Cannot supply flags when copying a RegExp');
        }
        return copyRegex(pattern);
    }

    // Copy the argument behavior of `RegExp`
    pattern = pattern === undefined ? '' : String(pattern);
    flags = flags === undefined ? '' : String(flags);

    if (XRegExp.isInstalled('astral') && !(flags.indexOf('A') !== -1)) {
        // This causes an error to be thrown if the Unicode Base addon is not available
        flags += 'A';
    }

    if (!patternCache[pattern]) {
        patternCache[pattern] = {};
    }

    if (!patternCache[pattern][flags]) {
        var context = {
            hasNamedCapture: false,
            captureNames: []
        };
        var scope = defaultScope;
        var output = '';
        var pos = 0;
        var result = void 0;

        // Check for flag-related errors, and strip/apply flags in a leading mode modifier
        var applied = prepareFlags(pattern, flags);
        var appliedPattern = applied.pattern;
        var appliedFlags = applied.flags;

        // Use XRegExp's tokens to translate the pattern to a native regex pattern.
        // `appliedPattern.length` may change on each iteration if tokens use `reparse`
        while (pos < appliedPattern.length) {
            do {
                // Check for custom tokens at the current position
                result = runTokens(appliedPattern, appliedFlags, pos, scope, context);
                // If the matched token used the `reparse` option, splice its output into the
                // pattern before running tokens again at the same position
                if (result && result.reparse) {
                    appliedPattern = appliedPattern.slice(0, pos) + result.output + appliedPattern.slice(pos + result.matchLength);
                }
            } while (result && result.reparse);

            if (result) {
                output += result.output;
                pos += result.matchLength || 1;
            } else {
                // Get the native token at the current position
                var token = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, 'sticky')[0];
                output += token;
                pos += token.length;
                if (token === '[' && scope === defaultScope) {
                    scope = classScope;
                } else if (token === ']' && scope === classScope) {
                    scope = defaultScope;
                }
            }
        }

        patternCache[pattern][flags] = {
            // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
            // groups are sometimes inserted during regex transpilation in order to keep tokens
            // separated. However, more than one empty group in a row is never needed.
            pattern: nativ.replace.call(output, /(?:\(\?:\))+/g, '(?:)'),
            // Strip all but native flags
            flags: nativ.replace.call(appliedFlags, /[^gimuy]+/g, ''),
            // `context.captureNames` has an item for each capturing group, even if unnamed
            captures: context.hasNamedCapture ? context.captureNames : null
        };
    }

    var generated = patternCache[pattern][flags];
    return augment(new RegExp(generated.pattern, generated.flags), generated.captures, pattern, flags);
}

// Add `RegExp.prototype` to the prototype chain
XRegExp.prototype = /(?:)/;

// ==--------------------------==
// Public properties
// ==--------------------------==

/**
 * The XRegExp version number as a string containing three dot-separated parts. For example,
 * '2.0.0-beta-3'.
 *
 * @static
 * @memberOf XRegExp
 * @type String
 */
XRegExp.version = '4.0.0';

// ==--------------------------==
// Public methods
// ==--------------------------==

// Intentionally undocumented; used in tests and addons
XRegExp._clipDuplicates = clipDuplicates;
XRegExp._hasNativeFlag = hasNativeFlag;
XRegExp._dec = dec;
XRegExp._hex = hex;
XRegExp._pad4 = pad4;

/**
 * Extends XRegExp syntax and allows custom flags. This is used internally and can be used to
 * create XRegExp addons. If more than one token can match the same string, the last added wins.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex object that matches the new token.
 * @param {Function} handler Function that returns a new pattern string (using native regex syntax)
 *   to replace the matched token within all future XRegExp regexes. Has access to persistent
 *   properties of the regex being built, through `this`. Invoked with three arguments:
 *   - The match array, with named backreference properties.
 *   - The regex scope where the match was found: 'default' or 'class'.
 *   - The flags used by the regex, including any flags in a leading mode modifier.
 *   The handler function becomes part of the XRegExp construction process, so be careful not to
 *   construct XRegExps within the function or you will trigger infinite recursion.
 * @param {Object} [options] Options object with optional properties:
 *   - `scope` {String} Scope where the token applies: 'default', 'class', or 'all'.
 *   - `flag` {String} Single-character flag that triggers the token. This also registers the
 *     flag, which prevents XRegExp from throwing an 'unknown flag' error when the flag is used.
 *   - `optionalFlags` {String} Any custom flags checked for within the token `handler` that are
 *     not required to trigger the token. This registers the flags, to prevent XRegExp from
 *     throwing an 'unknown flag' error when any of the flags are used.
 *   - `reparse` {Boolean} Whether the `handler` function's output should not be treated as
 *     final, and instead be reparseable by other tokens (including the current token). Allows
 *     token chaining or deferring.
 *   - `leadChar` {String} Single character that occurs at the beginning of any successful match
 *     of the token (not always applicable). This doesn't change the behavior of the token unless
 *     you provide an erroneous value. However, providing it can increase the token's performance
 *     since the token can be skipped at any positions where this character doesn't appear.
 * @example
 *
 * // Basic usage: Add \a for the ALERT control code
 * XRegExp.addToken(
 *   /\\a/,
 *   () => '\\x07',
 *   {scope: 'all'}
 * );
 * XRegExp('\\a[\\a-\\n]+').test('\x07\n\x07'); // -> true
 *
 * // Add the U (ungreedy) flag from PCRE and RE2, which reverses greedy and lazy quantifiers.
 * // Since `scope` is not specified, it uses 'default' (i.e., transformations apply outside of
 * // character classes only)
 * XRegExp.addToken(
 *   /([?*+]|{\d+(?:,\d*)?})(\??)/,
 *   (match) => `${match[1]}${match[2] ? '' : '?'}`,
 *   {flag: 'U'}
 * );
 * XRegExp('a+', 'U').exec('aaa')[0]; // -> 'a'
 * XRegExp('a+?', 'U').exec('aaa')[0]; // -> 'aaa'
 */
XRegExp.addToken = function (regex, handler, options) {
    options = options || {};
    var optionalFlags = options.optionalFlags;
    var i = void 0;

    if (options.flag) {
        registerFlag(options.flag);
    }

    if (optionalFlags) {
        optionalFlags = nativ.split.call(optionalFlags, '');
        for (i = 0; i < optionalFlags.length; ++i) {
            registerFlag(optionalFlags[i]);
        }
    }

    // Add to the private list of syntax tokens
    tokens.push({
        regex: copyRegex(regex, {
            addG: true,
            addY: hasNativeY,
            isInternalOnly: true
        }),
        handler: handler,
        scope: options.scope || defaultScope,
        flag: options.flag,
        reparse: options.reparse,
        leadChar: options.leadChar
    });

    // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and flags
    // might now produce different results
    XRegExp.cache.flush('patterns');
};

/**
 * Caches and returns the result of calling `XRegExp(pattern, flags)`. On any subsequent call with
 * the same pattern and flag combination, the cached copy of the regex is returned.
 *
 * @memberOf XRegExp
 * @param {String} pattern Regex pattern string.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @returns {RegExp} Cached XRegExp object.
 * @example
 *
 * while (match = XRegExp.cache('.', 'gs').exec(str)) {
 *   // The regex is compiled once only
 * }
 */
XRegExp.cache = function (pattern, flags) {
    if (!regexCache[pattern]) {
        regexCache[pattern] = {};
    }
    return regexCache[pattern][flags] || (regexCache[pattern][flags] = XRegExp(pattern, flags));
};

// Intentionally undocumented; used in tests
XRegExp.cache.flush = function (cacheName) {
    if (cacheName === 'patterns') {
        // Flush the pattern cache used by the `XRegExp` constructor
        patternCache = {};
    } else {
        // Flush the regex cache populated by `XRegExp.cache`
        regexCache = {};
    }
};

/**
 * Escapes any regular expression metacharacters, for use when matching literal strings. The result
 * can safely be used at any point within a regex that uses any flags.
 *
 * @memberOf XRegExp
 * @param {String} str String to escape.
 * @returns {String} String with regex metacharacters escaped.
 * @example
 *
 * XRegExp.escape('Escaped? <.>');
 * // -> 'Escaped\?\ <\.>'
 */
XRegExp.escape = function (str) {
    return nativ.replace.call(toObject(str), /[-\[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

/**
 * Executes a regex search in a specified string. Returns a match array or `null`. If the provided
 * regex uses named capture, named backreference properties are included on the match array.
 * Optional `pos` and `sticky` arguments specify the search start position, and whether the match
 * must start at the specified position only. The `lastIndex` property of the provided regex is not
 * used, but is updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.exec` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Array} Match array with named backreference properties, or `null`.
 * @example
 *
 * // Basic use, with named backreference
 * let match = XRegExp.exec('U+2620', XRegExp('U\\+(?<hex>[0-9A-F]{4})'));
 * match.hex; // -> '2620'
 *
 * // With pos and sticky, in a loop
 * let pos = 2, result = [], match;
 * while (match = XRegExp.exec('<1><2><3><4>5<6>', /<(\d)>/, pos, 'sticky')) {
 *   result.push(match[1]);
 *   pos = match.index + match[0].length;
 * }
 * // result -> ['2', '3', '4']
 */
XRegExp.exec = function (str, regex, pos, sticky) {
    var cacheKey = 'g';
    var addY = false;
    var fakeY = false;
    var match = void 0;

    addY = hasNativeY && !!(sticky || regex.sticky && sticky !== false);
    if (addY) {
        cacheKey += 'y';
    } else if (sticky) {
        // Simulate sticky matching by appending an empty capture to the original regex. The
        // resulting regex will succeed no matter what at the current index (set with `lastIndex`),
        // and will not search the rest of the subject string. We'll know that the original regex
        // has failed if that last capture is `''` rather than `undefined` (i.e., if that last
        // capture participated in the match).
        fakeY = true;
        cacheKey += 'FakeY';
    }

    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

    // Shares cached copies with `XRegExp.match`/`replace`
    var r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
        addG: true,
        addY: addY,
        source: fakeY ? regex.source + '|()' : undefined,
        removeY: sticky === false,
        isInternalOnly: true
    }));

    pos = pos || 0;
    r2.lastIndex = pos;

    // Fixed `exec` required for `lastIndex` fix, named backreferences, etc.
    match = fixed.exec.call(r2, str);

    // Get rid of the capture added by the pseudo-sticky matcher if needed. An empty string means
    // the original regexp failed (see above).
    if (fakeY && match && match.pop() === '') {
        match = null;
    }

    if (regex.global) {
        regex.lastIndex = match ? r2.lastIndex : 0;
    }

    return match;
};

/**
 * Executes a provided function once per regex match. Searches always start at the beginning of the
 * string and continue until the end, regardless of the state of the regex's `global` property and
 * initial `lastIndex`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Function} callback Function to execute for each match. Invoked with four arguments:
 *   - The match array, with named backreference properties.
 *   - The zero-based match index.
 *   - The string being traversed.
 *   - The regex object being used to traverse the string.
 * @example
 *
 * // Extracts every other digit from a string
 * const evens = [];
 * XRegExp.forEach('1a2345', /\d/, (match, i) => {
 *   if (i % 2) evens.push(+match[0]);
 * });
 * // evens -> [2, 4]
 */
XRegExp.forEach = function (str, regex, callback) {
    var pos = 0;
    var i = -1;
    var match = void 0;

    while (match = XRegExp.exec(str, regex, pos)) {
        // Because `regex` is provided to `callback`, the function could use the deprecated/
        // nonstandard `RegExp.prototype.compile` to mutate the regex. However, since `XRegExp.exec`
        // doesn't use `lastIndex` to set the search position, this can't lead to an infinite loop,
        // at least. Actually, because of the way `XRegExp.exec` caches globalized versions of
        // regexes, mutating the regex will not have any effect on the iteration or matched strings,
        // which is a nice side effect that brings extra safety.
        callback(match, ++i, str, regex);

        pos = match.index + (match[0].length || 1);
    }
};

/**
 * Copies a regex object and adds flag `g`. The copy maintains extended data, is augmented with
 * `XRegExp.prototype` properties, and has a fresh `lastIndex` property (set to zero). Native
 * regexes are not recompiled using XRegExp syntax.
 *
 * @memberOf XRegExp
 * @param {RegExp} regex Regex to globalize.
 * @returns {RegExp} Copy of the provided regex with flag `g` added.
 * @example
 *
 * const globalCopy = XRegExp.globalize(/regex/);
 * globalCopy.global; // -> true
 */
XRegExp.globalize = function (regex) {
    return copyRegex(regex, { addG: true });
};

/**
 * Installs optional features according to the specified options. Can be undone using
 * `XRegExp.uninstall`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.install({
 *   // Enables support for astral code points in Unicode addons (implicitly sets flag A)
 *   astral: true
 * });
 *
 * // With an options string
 * XRegExp.install('astral');
 */
XRegExp.install = function (options) {
    options = prepareOptions(options);

    if (!features.astral && options.astral) {
        setAstral(true);
    }
};

/**
 * Checks whether an individual optional feature is installed.
 *
 * @memberOf XRegExp
 * @param {String} feature Name of the feature to check. One of:
 *   - `astral`
 * @returns {Boolean} Whether the feature is installed.
 * @example
 *
 * XRegExp.isInstalled('astral');
 */
XRegExp.isInstalled = function (feature) {
    return !!features[feature];
};

/**
 * Returns `true` if an object is a regex; `false` if it isn't. This works correctly for regexes
 * created in another frame, when `instanceof` and `constructor` checks would fail.
 *
 * @memberOf XRegExp
 * @param {*} value Object to check.
 * @returns {Boolean} Whether the object is a `RegExp` object.
 * @example
 *
 * XRegExp.isRegExp('string'); // -> false
 * XRegExp.isRegExp(/regex/i); // -> true
 * XRegExp.isRegExp(RegExp('^', 'm')); // -> true
 * XRegExp.isRegExp(XRegExp('(?s).')); // -> true
 */
XRegExp.isRegExp = function (value) {
    return toString.call(value) === '[object RegExp]';
}; // isType(value, 'RegExp');

/**
 * Returns the first matched string, or in global mode, an array containing all matched strings.
 * This is essentially a more convenient re-implementation of `String.prototype.match` that gives
 * the result types you actually want (string instead of `exec`-style array in match-first mode,
 * and an empty array instead of `null` when no matches are found in match-all mode). It also lets
 * you override flag g and ignore `lastIndex`, and fixes browser bugs.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {String} [scope='one'] Use 'one' to return the first match as a string. Use 'all' to
 *   return an array of all matched strings. If not explicitly specified and `regex` uses flag g,
 *   `scope` is 'all'.
 * @returns {String|Array} In match-first mode: First match as a string, or `null`. In match-all
 *   mode: Array of all matched strings, or an empty array.
 * @example
 *
 * // Match first
 * XRegExp.match('abc', /\w/); // -> 'a'
 * XRegExp.match('abc', /\w/g, 'one'); // -> 'a'
 * XRegExp.match('abc', /x/g, 'one'); // -> null
 *
 * // Match all
 * XRegExp.match('abc', /\w/g); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /\w/, 'all'); // -> ['a', 'b', 'c']
 * XRegExp.match('abc', /x/, 'all'); // -> []
 */
XRegExp.match = function (str, regex, scope) {
    var global = regex.global && scope !== 'one' || scope === 'all';
    var cacheKey = (global ? 'g' : '') + (regex.sticky ? 'y' : '') || 'noGY';

    regex[REGEX_DATA] = regex[REGEX_DATA] || {};

    // Shares cached copies with `XRegExp.exec`/`replace`
    var r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
        addG: !!global,
        removeG: scope === 'one',
        isInternalOnly: true
    }));

    var result = nativ.match.call(toObject(str), r2);

    if (regex.global) {
        regex.lastIndex = scope === 'one' && result ?
        // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
        result.index + result[0].length : 0;
    }

    return global ? result || [] : result && result[0];
};

/**
 * Retrieves the matches from searching a string using a chain of regexes that successively search
 * within previous matches. The provided `chain` array can contain regexes and or objects with
 * `regex` and `backref` properties. When a backreference is specified, the named or numbered
 * backreference is passed forward to the next regex or returned.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} chain Regexes that each search for matches within preceding results.
 * @returns {Array} Matches by the last regex in the chain, or an empty array.
 * @example
 *
 * // Basic usage; matches numbers within <b> tags
 * XRegExp.matchChain('1 <b>2</b> 3 <b>4 a 56</b>', [
 *   XRegExp('(?is)<b>.*?</b>'),
 *   /\d+/
 * ]);
 * // -> ['2', '4', '56']
 *
 * // Passing forward and returning specific backreferences
 * html = '<a href="http://xregexp.com/api/">XRegExp</a>\
 *         <a href="http://www.google.com/">Google</a>';
 * XRegExp.matchChain(html, [
 *   {regex: /<a href="([^"]+)">/i, backref: 1},
 *   {regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain'}
 * ]);
 * // -> ['xregexp.com', 'www.google.com']
 */
XRegExp.matchChain = function (str, chain) {
    return function recurseChain(values, level) {
        var item = chain[level].regex ? chain[level] : { regex: chain[level] };
        var matches = [];

        function addMatch(match) {
            if (item.backref) {
                // Safari 4.0.5 (but not 5.0.5+) inappropriately uses sparse arrays to hold the
                // `undefined`s for backreferences to nonparticipating capturing groups. In such
                // cases, a `hasOwnProperty` or `in` check on its own would inappropriately throw
                // the exception, so also check if the backreference is a number that is within the
                // bounds of the array.
                if (!(match.hasOwnProperty(item.backref) || +item.backref < match.length)) {
                    throw new ReferenceError('Backreference to undefined group: ' + item.backref);
                }

                matches.push(match[item.backref] || '');
            } else {
                matches.push(match[0]);
            }
        }

        for (var i = 0; i < values.length; ++i) {
            XRegExp.forEach(values[i], item.regex, addMatch);
        }

        return level === chain.length - 1 || !matches.length ? matches : recurseChain(matches, level + 1);
    }([str], 0);
};

/**
 * Returns a new string with one or all matches of a pattern replaced. The pattern can be a string
 * or regex, and the replacement can be a string or a function to be called for each match. To
 * perform a global search and replace, use the optional `scope` argument or include flag g if using
 * a regex. Replacement strings can use `${n}` or `$<n>` for named and numbered backreferences.
 * Replacement functions can use named backreferences via `arguments[0].name`. Also fixes browser
 * bugs compared to the native `String.prototype.replace` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 *   Replacement strings can include special replacement syntax:
 *     - $$ - Inserts a literal $ character.
 *     - $&, $0 - Inserts the matched substring.
 *     - $` - Inserts the string that precedes the matched substring (left context).
 *     - $' - Inserts the string that follows the matched substring (right context).
 *     - $n, $nn - Where n/nn are digits referencing an existent capturing group, inserts
 *       backreference n/nn.
 *     - ${n}, $<n> - Where n is a name or any number of digits that reference an existent capturing
 *       group, inserts backreference n.
 *   Replacement functions are invoked with three or more arguments:
 *     - The matched substring (corresponds to $& above). Named backreferences are accessible as
 *       properties of this first argument.
 *     - 0..n arguments, one for each backreference (corresponding to $1, $2, etc. above).
 *     - The zero-based index of the match within the total search string.
 *     - The total string being searched.
 * @param {String} [scope='one'] Use 'one' to replace the first match only, or 'all'. If not
 *   explicitly specified and using a regex with flag g, `scope` is 'all'.
 * @returns {String} New string with one or all matches replaced.
 * @example
 *
 * // Regex search, using named backreferences in replacement string
 * const name = XRegExp('(?<first>\\w+) (?<last>\\w+)');
 * XRegExp.replace('John Smith', name, '$<last>, $<first>');
 * // -> 'Smith, John'
 *
 * // Regex search, using named backreferences in replacement function
 * XRegExp.replace('John Smith', name, (match) => `${match.last}, ${match.first}`);
 * // -> 'Smith, John'
 *
 * // String search, with replace-all
 * XRegExp.replace('RegExp builds RegExps', 'RegExp', 'XRegExp', 'all');
 * // -> 'XRegExp builds XRegExps'
 */
XRegExp.replace = function (str, search, replacement, scope) {
    var isRegex = XRegExp.isRegExp(search);
    var global = search.global && scope !== 'one' || scope === 'all';
    var cacheKey = (global ? 'g' : '') + (search.sticky ? 'y' : '') || 'noGY';
    var s2 = search;

    if (isRegex) {
        search[REGEX_DATA] = search[REGEX_DATA] || {};

        // Shares cached copies with `XRegExp.exec`/`match`. Since a copy is used, `search`'s
        // `lastIndex` isn't updated *during* replacement iterations
        s2 = search[REGEX_DATA][cacheKey] || (search[REGEX_DATA][cacheKey] = copyRegex(search, {
            addG: !!global,
            removeG: scope === 'one',
            isInternalOnly: true
        }));
    } else if (global) {
        s2 = new RegExp(XRegExp.escape(String(search)), 'g');
    }

    // Fixed `replace` required for named backreferences, etc.
    var result = fixed.replace.call(toObject(str), s2, replacement);

    if (isRegex && search.global) {
        // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
        search.lastIndex = 0;
    }

    return result;
};

/**
 * Performs batch processing of string replacements. Used like `XRegExp.replace`, but accepts an
 * array of replacement details. Later replacements operate on the output of earlier replacements.
 * Replacement details are accepted as an array with a regex or string to search for, the
 * replacement string or function, and an optional scope of 'one' or 'all'. Uses the XRegExp
 * replacement text syntax, which supports named backreference properties via `${name}` or
 * `$<name>`.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {Array} replacements Array of replacement detail arrays.
 * @returns {String} New string with all replacements.
 * @example
 *
 * str = XRegExp.replaceEach(str, [
 *   [XRegExp('(?<name>a)'), 'z${name}'],
 *   [/b/gi, 'y'],
 *   [/c/g, 'x', 'one'], // scope 'one' overrides /g
 *   [/d/, 'w', 'all'],  // scope 'all' overrides lack of /g
 *   ['e', 'v', 'all'],  // scope 'all' allows replace-all for strings
 *   [/f/g, ($0) => $0.toUpperCase()]
 * ]);
 */
XRegExp.replaceEach = function (str, replacements) {
    var i = void 0;
    var r = void 0;

    for (i = 0; i < replacements.length; ++i) {
        r = replacements[i];
        str = XRegExp.replace(str, r[0], r[1], r[2]);
    }

    return str;
};

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * XRegExp.split('a b c', ' ');
 * // -> ['a', 'b', 'c']
 *
 * // With limit
 * XRegExp.split('a b c', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * XRegExp.split('..word1..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', '..']
 */
XRegExp.split = function (str, separator, limit) {
    return fixed.split.call(toObject(str), separator, limit);
};

/**
 * Executes a regex search in a specified string. Returns `true` or `false`. Optional `pos` and
 * `sticky` arguments specify the search start position, and whether the match must start at the
 * specified position only. The `lastIndex` property of the provided regex is not used, but is
 * updated for compatibility. Also fixes browser bugs compared to the native
 * `RegExp.prototype.test` and can be used reliably cross-browser.
 *
 * @memberOf XRegExp
 * @param {String} str String to search.
 * @param {RegExp} regex Regex to search with.
 * @param {Number} [pos=0] Zero-based index at which to start the search.
 * @param {Boolean|String} [sticky=false] Whether the match must start at the specified position
 *   only. The string `'sticky'` is accepted as an alternative to `true`.
 * @returns {Boolean} Whether the regex matched the provided value.
 * @example
 *
 * // Basic use
 * XRegExp.test('abc', /c/); // -> true
 *
 * // With pos and sticky
 * XRegExp.test('abc', /c/, 0, 'sticky'); // -> false
 * XRegExp.test('abc', /c/, 2, 'sticky'); // -> true
 */
// Do this the easy way :-)
XRegExp.test = function (str, regex, pos, sticky) {
    return !!XRegExp.exec(str, regex, pos, sticky);
};

/**
 * Uninstalls optional features according to the specified options. All optional features start out
 * uninstalled, so this is used to undo the actions of `XRegExp.install`.
 *
 * @memberOf XRegExp
 * @param {Object|String} options Options object or string.
 * @example
 *
 * // With an options object
 * XRegExp.uninstall({
 *   // Disables support for astral code points in Unicode addons
 *   astral: true
 * });
 *
 * // With an options string
 * XRegExp.uninstall('astral');
 */
XRegExp.uninstall = function (options) {
    options = prepareOptions(options);

    if (features.astral && options.astral) {
        setAstral(false);
    }
};

/**
 * Returns an XRegExp object that is the union of the given patterns. Patterns can be provided as
 * regex objects or strings. Metacharacters are escaped in patterns provided as strings.
 * Backreferences in provided regex objects are automatically renumbered to work correctly within
 * the larger combined pattern. Native flags used by provided regexes are ignored in favor of the
 * `flags` argument.
 *
 * @memberOf XRegExp
 * @param {Array} patterns Regexes and strings to combine.
 * @param {String} [flags] Any combination of XRegExp flags.
 * @param {Object} [options] Options object with optional properties:
 *   - `conjunction` {String} Type of conjunction to use: 'or' (default) or 'none'.
 * @returns {RegExp} Union of the provided regexes and strings.
 * @example
 *
 * XRegExp.union(['a+b*c', /(dogs)\1/, /(cats)\1/], 'i');
 * // -> /a\+b\*c|(dogs)\1|(cats)\2/i
 *
 * XRegExp.union([/man/, /bear/, /pig/], 'i', {conjunction: 'none'});
 * // -> /manbearpig/i
 */
XRegExp.union = function (patterns, flags, options) {
    options = options || {};
    var conjunction = options.conjunction || 'or';
    var numCaptures = 0;
    var numPriorCaptures = void 0;
    var captureNames = void 0;

    function rewrite(match, paren, backref) {
        var name = captureNames[numCaptures - numPriorCaptures];

        // Capturing group
        if (paren) {
            ++numCaptures;
            // If the current capture has a name, preserve the name
            if (name) {
                return '(?<' + name + '>';
            }
            // Backreference
        } else if (backref) {
            // Rewrite the backreference
            return '\\' + (+backref + numPriorCaptures);
        }

        return match;
    }

    if (!(isType(patterns, 'Array') && patterns.length)) {
        throw new TypeError('Must provide a nonempty array of patterns to merge');
    }

    var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
    var output = [];
    var pattern = void 0;
    for (var i = 0; i < patterns.length; ++i) {
        pattern = patterns[i];

        if (XRegExp.isRegExp(pattern)) {
            numPriorCaptures = numCaptures;
            captureNames = pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames || [];

            // Rewrite backreferences. Passing to XRegExp dies on octals and ensures patterns are
            // independently valid; helps keep this simple. Named captures are put back
            output.push(nativ.replace.call(XRegExp(pattern.source).source, parts, rewrite));
        } else {
            output.push(XRegExp.escape(pattern));
        }
    }

    var separator = conjunction === 'none' ? '' : '|';
    return XRegExp(output.join(separator), flags);
};

// ==--------------------------==
// Fixed/extended native methods
// ==--------------------------==

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `RegExp.prototype.exec`. Use via `XRegExp.exec`.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Array} Match array with named backreference properties, or `null`.
 */
fixed.exec = function (str) {
    var origLastIndex = this.lastIndex;
    var match = nativ.exec.apply(this, arguments);

    if (match) {
        // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating capturing
        // groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of older IEs. IE 9
        // in standards mode follows the spec.
        if (!correctExecNpcg && match.length > 1 && match.indexOf('') !== -1) {
            var r2 = copyRegex(this, {
                removeG: true,
                isInternalOnly: true
            });
            // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
            // matching due to characters outside the match
            nativ.replace.call(String(str).slice(match.index), r2, function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var len = args.length;
                // Skip index 0 and the last 2
                for (var i = 1; i < len - 2; ++i) {
                    if (args[i] === undefined) {
                        match[i] = undefined;
                    }
                }
            });
        }

        // Attach named capture properties
        if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
            // Skip index 0
            for (var i = 1; i < match.length; ++i) {
                var name = this[REGEX_DATA].captureNames[i - 1];
                if (name) {
                    match[name] = match[i];
                }
            }
        }

        // Fix browsers that increment `lastIndex` after zero-length matches
        if (this.global && !match[0].length && this.lastIndex > match.index) {
            this.lastIndex = match.index;
        }
    }

    if (!this.global) {
        // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
        this.lastIndex = origLastIndex;
    }

    return match;
};

/**
 * Fixes browser bugs in the native `RegExp.prototype.test`.
 *
 * @memberOf RegExp
 * @param {String} str String to search.
 * @returns {Boolean} Whether the regex matched the provided value.
 */
fixed.test = function (str) {
    // Do this the easy way :-)
    return !!fixed.exec.call(this, str);
};

/**
 * Adds named capture support (with backreferences returned as `result.name`), and fixes browser
 * bugs in the native `String.prototype.match`.
 *
 * @memberOf String
 * @param {RegExp|*} regex Regex to search with. If not a regex object, it is passed to `RegExp`.
 * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
 *   the result of calling `regex.exec(this)`.
 */
fixed.match = function (regex) {
    if (!XRegExp.isRegExp(regex)) {
        // Use the native `RegExp` rather than `XRegExp`
        regex = new RegExp(regex);
    } else if (regex.global) {
        var result = nativ.match.apply(this, arguments);
        // Fixes IE bug
        regex.lastIndex = 0;

        return result;
    }

    return fixed.exec.call(regex, toObject(this));
};

/**
 * Adds support for `${n}` (or `$<n>`) tokens for named and numbered backreferences in replacement
 * text, and provides named backreferences to replacement functions as `arguments[0].name`. Also
 * fixes browser bugs in replacement text syntax when performing a replacement using a nonregex
 * search value, and the value of a replacement regex's `lastIndex` property during replacement
 * iterations and upon completion. Note that this doesn't support SpiderMonkey's proprietary third
 * (`flags`) argument. Use via `XRegExp.replace`.
 *
 * @memberOf String
 * @param {RegExp|String} search Search pattern to be replaced.
 * @param {String|Function} replacement Replacement string or a function invoked to create it.
 * @returns {String} New string with one or all matches replaced.
 */
fixed.replace = function (search, replacement) {
    var isRegex = XRegExp.isRegExp(search);
    var origLastIndex = void 0;
    var captureNames = void 0;
    var result = void 0;

    if (isRegex) {
        if (search[REGEX_DATA]) {
            captureNames = search[REGEX_DATA].captureNames;
        }
        // Only needed if `search` is nonglobal
        origLastIndex = search.lastIndex;
    } else {
        search += ''; // Type-convert
    }

    // Don't use `typeof`; some older browsers return 'function' for regex objects
    if (isType(replacement, 'Function')) {
        // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
        // functions isn't type-converted to a string
        result = nativ.replace.call(String(this), search, function () {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            if (captureNames) {
                // Change the `args[0]` string primitive to a `String` object that can store
                // properties. This really does need to use `String` as a constructor
                args[0] = new String(args[0]);
                // Store named backreferences on the first argument
                for (var i = 0; i < captureNames.length; ++i) {
                    if (captureNames[i]) {
                        args[0][captureNames[i]] = args[i + 1];
                    }
                }
            }
            // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox, Safari
            // bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
            if (isRegex && search.global) {
                search.lastIndex = args[args.length - 2] + args[0].length;
            }
            // ES6 specs the context for replacement functions as `undefined`
            return replacement.apply(undefined, args);
        });
    } else {
        // Ensure that the last value of `args` will be a string when given nonstring `this`,
        // while still throwing on null or undefined context
        result = nativ.replace.call(this == null ? this : String(this), search, function () {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return nativ.replace.call(String(replacement), replacementToken, replacer);

            function replacer($0, bracketed, angled, dollarToken) {
                bracketed = bracketed || angled;
                // Named or numbered backreference with curly or angled braces
                if (bracketed) {
                    // XRegExp behavior for `${n}` or `$<n>`:
                    // 1. Backreference to numbered capture, if `n` is an integer. Use `0` for the
                    //    entire match. Any number of leading zeros may be used.
                    // 2. Backreference to named capture `n`, if it exists and is not an integer
                    //    overridden by numbered capture. In practice, this does not overlap with
                    //    numbered capture since XRegExp does not allow named capture to use a bare
                    //    integer as the name.
                    // 3. If the name or number does not refer to an existing capturing group, it's
                    //    an error.
                    var n = +bracketed; // Type-convert; drop leading zeros
                    if (n <= args.length - 3) {
                        return args[n] || '';
                    }
                    // Groups with the same name is an error, else would need `lastIndexOf`
                    n = captureNames ? captureNames.indexOf(bracketed) : -1;
                    if (n < 0) {
                        throw new SyntaxError('Backreference to undefined group ' + $0);
                    }
                    return args[n + 1] || '';
                }
                // Else, special variable or numbered backreference without curly braces
                if (dollarToken === '$') {
                    // $$
                    return '$';
                }
                if (dollarToken === '&' || +dollarToken === 0) {
                    // $&, $0 (not followed by 1-9), $00
                    return args[0];
                }
                if (dollarToken === '`') {
                    // $` (left context)
                    return args[args.length - 1].slice(0, args[args.length - 2]);
                }
                if (dollarToken === "'") {
                    // $' (right context)
                    return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
                }
                // Else, numbered backreference without braces
                dollarToken = +dollarToken; // Type-convert; drop leading zero
                // XRegExp behavior for `$n` and `$nn`:
                // - Backrefs end after 1 or 2 digits. Use `${..}` or `$<..>` for more digits.
                // - `$1` is an error if no capturing groups.
                // - `$10` is an error if less than 10 capturing groups. Use `${1}0` or `$<1>0`
                //   instead.
                // - `$01` is `$1` if at least one capturing group, else it's an error.
                // - `$0` (not followed by 1-9) and `$00` are the entire match.
                // Native behavior, for comparison:
                // - Backrefs end after 1 or 2 digits. Cannot reference capturing group 100+.
                // - `$1` is a literal `$1` if no capturing groups.
                // - `$10` is `$1` followed by a literal `0` if less than 10 capturing groups.
                // - `$01` is `$1` if at least one capturing group, else it's a literal `$01`.
                // - `$0` is a literal `$0`.
                if (!isNaN(dollarToken)) {
                    if (dollarToken > args.length - 3) {
                        throw new SyntaxError('Backreference to undefined group ' + $0);
                    }
                    return args[dollarToken] || '';
                }
                // `$` followed by an unsupported char is an error, unlike native JS
                throw new SyntaxError('Invalid token ' + $0);
            }
        });
    }

    if (isRegex) {
        if (search.global) {
            // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
            search.lastIndex = 0;
        } else {
            // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
            search.lastIndex = origLastIndex;
        }
    }

    return result;
};

/**
 * Fixes browser bugs in the native `String.prototype.split`. Use via `XRegExp.split`.
 *
 * @memberOf String
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 */
fixed.split = function (separator, limit) {
    if (!XRegExp.isRegExp(separator)) {
        // Browsers handle nonregex split correctly, so use the faster native method
        return nativ.split.apply(this, arguments);
    }

    var str = String(this);
    var output = [];
    var origLastIndex = separator.lastIndex;
    var lastLastIndex = 0;
    var lastLength = void 0;

    // Values for `limit`, per the spec:
    // If undefined: pow(2,32) - 1
    // If 0, Infinity, or NaN: 0
    // If positive number: limit = floor(limit); if (limit >= pow(2,32)) limit -= pow(2,32);
    // If negative number: pow(2,32) - floor(abs(limit))
    // If other: Type-convert, then use the above rules
    // This line fails in very strange ways for some values of `limit` in Opera 10.5-10.63, unless
    // Opera Dragonfly is open (go figure). It works in at least Opera 9.5-10.1 and 11+
    limit = (limit === undefined ? -1 : limit) >>> 0;

    XRegExp.forEach(str, separator, function (match) {
        // This condition is not the same as `if (match[0].length)`
        if (match.index + match[0].length > lastLastIndex) {
            output.push(str.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < str.length) {
                Array.prototype.push.apply(output, match.slice(1));
            }
            lastLength = match[0].length;
            lastLastIndex = match.index + lastLength;
        }
    });

    if (lastLastIndex === str.length) {
        if (!nativ.test.call(separator, '') || lastLength) {
            output.push('');
        }
    } else {
        output.push(str.slice(lastLastIndex));
    }

    separator.lastIndex = origLastIndex;
    return output.length > limit ? output.slice(0, limit) : output;
};

// ==--------------------------==
// Built-in syntax/flag tokens
// ==--------------------------==

/*
 * Letter escapes that natively match literal characters: `\a`, `\A`, etc. These should be
 * SyntaxErrors but are allowed in web reality. XRegExp makes them errors for cross-browser
 * consistency and to reserve their syntax, but lets them be superseded by addons.
 */
XRegExp.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function (match, scope) {
    // \B is allowed in default scope only
    if (match[1] === 'B' && scope === defaultScope) {
        return match[0];
    }
    throw new SyntaxError('Invalid escape ' + match[0]);
}, {
    scope: 'all',
    leadChar: '\\'
});

/*
 * Unicode code point escape with curly braces: `\u{N..}`. `N..` is any one or more digit
 * hexadecimal number from 0-10FFFF, and can include leading zeros. Requires the native ES6 `u` flag
 * to support code points greater than U+FFFF. Avoids converting code points above U+FFFF to
 * surrogate pairs (which could be done without flag `u`), since that could lead to broken behavior
 * if you follow a `\u{N..}` token that references a code point above U+FFFF with a quantifier, or
 * if you use the same in a character class.
 */
XRegExp.addToken(/\\u{([\dA-Fa-f]+)}/, function (match, scope, flags) {
    var code = dec(match[1]);
    if (code > 0x10FFFF) {
        throw new SyntaxError('Invalid Unicode code point ' + match[0]);
    }
    if (code <= 0xFFFF) {
        // Converting to \uNNNN avoids needing to escape the literal character and keep it
        // separate from preceding tokens
        return '\\u' + pad4(hex(code));
    }
    // If `code` is between 0xFFFF and 0x10FFFF, require and defer to native handling
    if (hasNativeU && flags.indexOf('u') !== -1) {
        return match[0];
    }
    throw new SyntaxError('Cannot use Unicode code point above \\u{FFFF} without flag u');
}, {
    scope: 'all',
    leadChar: '\\'
});

/*
 * Empty character class: `[]` or `[^]`. This fixes a critical cross-browser syntax inconsistency.
 * Unless this is standardized (per the ES spec), regex syntax can't be accurately parsed because
 * character class endings can't be determined.
 */
XRegExp.addToken(/\[(\^?)\]/,
// For cross-browser compatibility with ES3, convert [] to \b\B and [^] to [\s\S].
// (?!) should work like \b\B, but is unreliable in some versions of Firefox
/* eslint-disable no-confusing-arrow */
function (match) {
    return match[1] ? '[\\s\\S]' : '\\b\\B';
},
/* eslint-enable no-confusing-arrow */
{ leadChar: '[' });

/*
 * Comment pattern: `(?# )`. Inline comments are an alternative to the line comments allowed in
 * free-spacing mode (flag x).
 */
XRegExp.addToken(/\(\?#[^)]*\)/, getContextualTokenSeparator, { leadChar: '(' });

/*
 * Whitespace and line comments, in free-spacing mode (aka extended mode, flag x) only.
 */
XRegExp.addToken(/\s+|#[^\n]*\n?/, getContextualTokenSeparator, { flag: 'x' });

/*
 * Dot, in dotall mode (aka singleline mode, flag s) only.
 */
XRegExp.addToken(/\./, function () {
    return '[\\s\\S]';
}, {
    flag: 's',
    leadChar: '.'
});

/*
 * Named backreference: `\k<name>`. Backreference names can use the characters A-Z, a-z, 0-9, _,
 * and $ only. Also allows numbered backreferences as `\k<n>`.
 */
XRegExp.addToken(/\\k<([\w$]+)>/, function (match) {
    // Groups with the same name is an error, else would need `lastIndexOf`
    var index = isNaN(match[1]) ? this.captureNames.indexOf(match[1]) + 1 : +match[1];
    var endIndex = match.index + match[0].length;
    if (!index || index > this.captureNames.length) {
        throw new SyntaxError('Backreference to undefined group ' + match[0]);
    }
    // Keep backreferences separate from subsequent literal numbers. This avoids e.g.
    // inadvertedly changing `(?<n>)\k<n>1` to `()\11`.
    return '\\' + index + (endIndex === match.input.length || isNaN(match.input[endIndex]) ? '' : '(?:)');
}, { leadChar: '\\' });

/*
 * Numbered backreference or octal, plus any following digits: `\0`, `\11`, etc. Octals except `\0`
 * not followed by 0-9 and backreferences to unopened capture groups throw an error. Other matches
 * are returned unaltered. IE < 9 doesn't support backreferences above `\99` in regex syntax.
 */
XRegExp.addToken(/\\(\d+)/, function (match, scope) {
    if (!(scope === defaultScope && /^[1-9]/.test(match[1]) && +match[1] <= this.captureNames.length) && match[1] !== '0') {
        throw new SyntaxError('Cannot use octal escape or backreference to undefined group ' + match[0]);
    }
    return match[0];
}, {
    scope: 'all',
    leadChar: '\\'
});

/*
 * Named capturing group; match the opening delimiter only: `(?<name>`. Capture names can use the
 * characters A-Z, a-z, 0-9, _, and $ only. Names can't be integers. Supports Python-style
 * `(?P<name>` as an alternate syntax to avoid issues in some older versions of Opera which natively
 * supported the Python-style syntax. Otherwise, XRegExp might treat numbered backreferences to
 * Python-style named capture as octals.
 */
XRegExp.addToken(/\(\?P?<([\w$]+)>/, function (match) {
    // Disallow bare integers as names because named backreferences are added to match arrays
    // and therefore numeric properties may lead to incorrect lookups
    if (!isNaN(match[1])) {
        throw new SyntaxError('Cannot use integer as capture name ' + match[0]);
    }
    if (match[1] === 'length' || match[1] === '__proto__') {
        throw new SyntaxError('Cannot use reserved word as capture name ' + match[0]);
    }
    if (this.captureNames.indexOf(match[1]) !== -1) {
        throw new SyntaxError('Cannot use same name for multiple groups ' + match[0]);
    }
    this.captureNames.push(match[1]);
    this.hasNamedCapture = true;
    return '(';
}, { leadChar: '(' });

/*
 * Capturing group; match the opening parenthesis only. Required for support of named capturing
 * groups. Also adds explicit capture mode (flag n).
 */
XRegExp.addToken(/\((?!\?)/, function (match, scope, flags) {
    if (flags.indexOf('n') !== -1) {
        return '(?:';
    }
    this.captureNames.push(null);
    return '(';
}, {
    optionalFlags: 'n',
    leadChar: '('
});

exports.default = XRegExp;
module.exports = exports['default'];
},{}],"DN8N":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*!
 * XRegExp.build 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2017 MIT License
 */

exports.default = function (XRegExp) {
    var REGEX_DATA = 'xregexp';
    var subParts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
    var parts = XRegExp.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, subParts], 'g', {
        conjunction: 'or'
    });

    /**
     * Strips a leading `^` and trailing unescaped `$`, if both are present.
     *
     * @private
     * @param {String} pattern Pattern to process.
     * @returns {String} Pattern with edge anchors removed.
     */
    function deanchor(pattern) {
        // Allow any number of empty noncapturing groups before/after anchors, because regexes
        // built/generated by XRegExp sometimes include them
        var leadingAnchor = /^(?:\(\?:\))*\^/;
        var trailingAnchor = /\$(?:\(\?:\))*$/;

        if (leadingAnchor.test(pattern) && trailingAnchor.test(pattern) &&
        // Ensure that the trailing `$` isn't escaped
        trailingAnchor.test(pattern.replace(/\\[\s\S]/g, ''))) {
            return pattern.replace(leadingAnchor, '').replace(trailingAnchor, '');
        }

        return pattern;
    }

    /**
     * Converts the provided value to an XRegExp. Native RegExp flags are not preserved.
     *
     * @private
     * @param {String|RegExp} value Value to convert.
     * @param {Boolean} [addFlagX] Whether to apply the `x` flag in cases when `value` is not
     *   already a regex generated by XRegExp
     * @returns {RegExp} XRegExp object with XRegExp syntax applied.
     */
    function asXRegExp(value, addFlagX) {
        var flags = addFlagX ? 'x' : '';
        return XRegExp.isRegExp(value) ? value[REGEX_DATA] && value[REGEX_DATA].captureNames ?
        // Don't recompile, to preserve capture names
        value :
        // Recompile as XRegExp
        XRegExp(value.source, flags) :
        // Compile string as XRegExp
        XRegExp(value, flags);
    }

    function interpolate(substitution) {
        return substitution instanceof RegExp ? substitution : XRegExp.escape(substitution);
    }

    function reduceToSubpatternsObject(subpatterns, interpolated, subpatternIndex) {
        subpatterns['subpattern' + subpatternIndex] = interpolated;
        return subpatterns;
    }

    function embedSubpatternAfter(raw, subpatternIndex, rawLiterals) {
        var hasSubpattern = subpatternIndex < rawLiterals.length - 1;
        return raw + (hasSubpattern ? '{{subpattern' + subpatternIndex + '}}' : '');
    }

    /**
     * Provides tagged template literals that create regexes with XRegExp syntax and flags. The
     * provided pattern is handled as a raw string, so backslashes don't need to be escaped.
     *
     * Interpolation of strings and regexes shares the features of `XRegExp.build`. Interpolated
     * patterns are treated as atomic units when quantified, interpolated strings have their special
     * characters escaped, a leading `^` and trailing unescaped `$` are stripped from interpolated
     * regexes if both are present, and any backreferences within an interpolated regex are
     * rewritten to work within the overall pattern.
     *
     * @memberOf XRegExp
     * @param {String} [flags] Any combination of XRegExp flags.
     * @returns {Function} Handler for template literals that construct regexes with XRegExp syntax.
     * @example
     *
     * const h12 = /1[0-2]|0?[1-9]/;
     * const h24 = /2[0-3]|[01][0-9]/;
     * const hours = XRegExp.tag('x')`${h12} : | ${h24}`;
     * const minutes = /^[0-5][0-9]$/;
     * // Note that explicitly naming the 'minutes' group is required for named backreferences
     * const time = XRegExp.tag('x')`^ ${hours} (?<minutes>${minutes}) $`;
     * time.test('10:59'); // -> true
     * XRegExp.exec('10:59', time).minutes; // -> '59'
     */
    XRegExp.tag = function (flags) {
        return function (literals) {
            for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                substitutions[_key - 1] = arguments[_key];
            }

            var subpatterns = substitutions.map(interpolate).reduce(reduceToSubpatternsObject, {});
            var pattern = literals.raw.map(embedSubpatternAfter).join('');
            return XRegExp.build(pattern, subpatterns, flags);
        };
    };

    /**
     * Builds regexes using named subpatterns, for readability and pattern reuse. Backreferences in
     * the outer pattern and provided subpatterns are automatically renumbered to work correctly.
     * Native flags used by provided subpatterns are ignored in favor of the `flags` argument.
     *
     * @memberOf XRegExp
     * @param {String} pattern XRegExp pattern using `{{name}}` for embedded subpatterns. Allows
     *   `({{name}})` as shorthand for `(?<name>{{name}})`. Patterns cannot be embedded within
     *   character classes.
     * @param {Object} subs Lookup object for named subpatterns. Values can be strings or regexes. A
     *   leading `^` and trailing unescaped `$` are stripped from subpatterns, if both are present.
     * @param {String} [flags] Any combination of XRegExp flags.
     * @returns {RegExp} Regex with interpolated subpatterns.
     * @example
     *
     * const time = XRegExp.build('(?x)^ {{hours}} ({{minutes}}) $', {
     *   hours: XRegExp.build('{{h12}} : | {{h24}}', {
     *     h12: /1[0-2]|0?[1-9]/,
     *     h24: /2[0-3]|[01][0-9]/
     *   }, 'x'),
     *   minutes: /^[0-5][0-9]$/
     * });
     * time.test('10:59'); // -> true
     * XRegExp.exec('10:59', time).minutes; // -> '59'
     */
    XRegExp.build = function (pattern, subs, flags) {
        flags = flags || '';
        // Used with `asXRegExp` calls for `pattern` and subpatterns in `subs`, to work around how
        // some browsers convert `RegExp('\n')` to a regex that contains the literal characters `\`
        // and `n`. See more details at <https://github.com/slevithan/xregexp/pull/163>.
        var addFlagX = flags.indexOf('x') !== -1;
        var inlineFlags = /^\(\?([\w$]+)\)/.exec(pattern);
        // Add flags within a leading mode modifier to the overall pattern's flags
        if (inlineFlags) {
            flags = XRegExp._clipDuplicates(flags + inlineFlags[1]);
        }

        var data = {};
        for (var p in subs) {
            if (subs.hasOwnProperty(p)) {
                // Passing to XRegExp enables extended syntax and ensures independent validity,
                // lest an unescaped `(`, `)`, `[`, or trailing `\` breaks the `(?:)` wrapper. For
                // subpatterns provided as native regexes, it dies on octals and adds the property
                // used to hold extended regex instance data, for simplicity.
                var sub = asXRegExp(subs[p], addFlagX);
                data[p] = {
                    // Deanchoring allows embedding independently useful anchored regexes. If you
                    // really need to keep your anchors, double them (i.e., `^^...$$`).
                    pattern: deanchor(sub.source),
                    names: sub[REGEX_DATA].captureNames || []
                };
            }
        }

        // Passing to XRegExp dies on octals and ensures the outer pattern is independently valid;
        // helps keep this simple. Named captures will be put back.
        var patternAsRegex = asXRegExp(pattern, addFlagX);

        // 'Caps' is short for 'captures'
        var numCaps = 0;
        var numPriorCaps = void 0;
        var numOuterCaps = 0;
        var outerCapsMap = [0];
        var outerCapNames = patternAsRegex[REGEX_DATA].captureNames || [];
        var output = patternAsRegex.source.replace(parts, function ($0, $1, $2, $3, $4) {
            var subName = $1 || $2;
            var capName = void 0;
            var intro = void 0;
            var localCapIndex = void 0;
            // Named subpattern
            if (subName) {
                if (!data.hasOwnProperty(subName)) {
                    throw new ReferenceError('Undefined property ' + $0);
                }
                // Named subpattern was wrapped in a capturing group
                if ($1) {
                    capName = outerCapNames[numOuterCaps];
                    outerCapsMap[++numOuterCaps] = ++numCaps;
                    // If it's a named group, preserve the name. Otherwise, use the subpattern name
                    // as the capture name
                    intro = '(?<' + (capName || subName) + '>';
                } else {
                    intro = '(?:';
                }
                numPriorCaps = numCaps;
                var rewrittenSubpattern = data[subName].pattern.replace(subParts, function (match, paren, backref) {
                    // Capturing group
                    if (paren) {
                        capName = data[subName].names[numCaps - numPriorCaps];
                        ++numCaps;
                        // If the current capture has a name, preserve the name
                        if (capName) {
                            return '(?<' + capName + '>';
                        }
                        // Backreference
                    } else if (backref) {
                        localCapIndex = +backref - 1;
                        // Rewrite the backreference
                        return data[subName].names[localCapIndex] ?
                        // Need to preserve the backreference name in case using flag `n`
                        '\\k<' + data[subName].names[localCapIndex] + '>' : '\\' + (+backref + numPriorCaps);
                    }
                    return match;
                });
                return '' + intro + rewrittenSubpattern + ')';
            }
            // Capturing group
            if ($3) {
                capName = outerCapNames[numOuterCaps];
                outerCapsMap[++numOuterCaps] = ++numCaps;
                // If the current capture has a name, preserve the name
                if (capName) {
                    return '(?<' + capName + '>';
                }
                // Backreference
            } else if ($4) {
                localCapIndex = +$4 - 1;
                // Rewrite the backreference
                return outerCapNames[localCapIndex] ?
                // Need to preserve the backreference name in case using flag `n`
                '\\k<' + outerCapNames[localCapIndex] + '>' : '\\' + outerCapsMap[+$4];
            }
            return $0;
        });

        return XRegExp(output, flags);
    };
};

module.exports = exports['default'];
},{}],"1/0w":[function(require,module,exports) {
var global = arguments[3];
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*!
 * XRegExp.matchRecursive 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2009-2017 MIT License
 */

exports.default = function (XRegExp) {

    /**
     * Returns a match detail object composed of the provided values.
     *
     * @private
     */
    function row(name, value, start, end) {
        return {
            name: name,
            value: value,
            start: start,
            end: end
        };
    }

    /**
     * Returns an array of match strings between outermost left and right delimiters, or an array of
     * objects with detailed match parts and position data. An error is thrown if delimiters are
     * unbalanced within the data.
     *
     * @memberOf XRegExp
     * @param {String} str String to search.
     * @param {String} left Left delimiter as an XRegExp pattern.
     * @param {String} right Right delimiter as an XRegExp pattern.
     * @param {String} [flags] Any native or XRegExp flags, used for the left and right delimiters.
     * @param {Object} [options] Lets you specify `valueNames` and `escapeChar` options.
     * @returns {Array} Array of matches, or an empty array.
     * @example
     *
     * // Basic usage
     * let str = '(t((e))s)t()(ing)';
     * XRegExp.matchRecursive(str, '\\(', '\\)', 'g');
     * // -> ['t((e))s', '', 'ing']
     *
     * // Extended information mode with valueNames
     * str = 'Here is <div> <div>an</div></div> example';
     * XRegExp.matchRecursive(str, '<div\\s*>', '</div>', 'gi', {
     *   valueNames: ['between', 'left', 'match', 'right']
     * });
     * // -> [
     * // {name: 'between', value: 'Here is ',       start: 0,  end: 8},
     * // {name: 'left',    value: '<div>',          start: 8,  end: 13},
     * // {name: 'match',   value: ' <div>an</div>', start: 13, end: 27},
     * // {name: 'right',   value: '</div>',         start: 27, end: 33},
     * // {name: 'between', value: ' example',       start: 33, end: 41}
     * // ]
     *
     * // Omitting unneeded parts with null valueNames, and using escapeChar
     * str = '...{1}.\\{{function(x,y){return {y:x}}}';
     * XRegExp.matchRecursive(str, '{', '}', 'g', {
     *   valueNames: ['literal', null, 'value', null],
     *   escapeChar: '\\'
     * });
     * // -> [
     * // {name: 'literal', value: '...',  start: 0, end: 3},
     * // {name: 'value',   value: '1',    start: 4, end: 5},
     * // {name: 'literal', value: '.\\{', start: 6, end: 9},
     * // {name: 'value',   value: 'function(x,y){return {y:x}}', start: 10, end: 37}
     * // ]
     *
     * // Sticky mode via flag y
     * str = '<1><<<2>>><3>4<5>';
     * XRegExp.matchRecursive(str, '<', '>', 'gy');
     * // -> ['1', '<<2>>', '3']
     */
    XRegExp.matchRecursive = function (str, left, right, flags, options) {
        flags = flags || '';
        options = options || {};
        var global = flags.indexOf('g') !== -1;
        var sticky = flags.indexOf('y') !== -1;
        // Flag `y` is controlled internally
        var basicFlags = flags.replace(/y/g, '');
        var escapeChar = options.escapeChar;
        var vN = options.valueNames;
        var output = [];
        var openTokens = 0;
        var delimStart = 0;
        var delimEnd = 0;
        var lastOuterEnd = 0;
        var outerStart = void 0;
        var innerStart = void 0;
        var leftMatch = void 0;
        var rightMatch = void 0;
        var esc = void 0;
        left = XRegExp(left, basicFlags);
        right = XRegExp(right, basicFlags);

        if (escapeChar) {
            if (escapeChar.length > 1) {
                throw new Error('Cannot use more than one escape character');
            }
            escapeChar = XRegExp.escape(escapeChar);
            // Example of concatenated `esc` regex:
            // `escapeChar`: '%'
            // `left`: '<'
            // `right`: '>'
            // Regex is: /(?:%[\S\s]|(?:(?!<|>)[^%])+)+/
            esc = new RegExp('(?:' + escapeChar + '[\\S\\s]|(?:(?!' +
            // Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
            // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
            // transformation resulting from those flags was already applied to `left` and
            // `right` when they were passed through the XRegExp constructor above.
            XRegExp.union([left, right], '', { conjunction: 'or' }).source + ')[^' + escapeChar + '])+)+',
            // Flags `gy` not needed here
            flags.replace(/[^imu]+/g, ''));
        }

        while (true) {
            // If using an escape character, advance to the delimiter's next starting position,
            // skipping any escaped characters in between
            if (escapeChar) {
                delimEnd += (XRegExp.exec(str, esc, delimEnd, 'sticky') || [''])[0].length;
            }
            leftMatch = XRegExp.exec(str, left, delimEnd);
            rightMatch = XRegExp.exec(str, right, delimEnd);
            // Keep the leftmost match only
            if (leftMatch && rightMatch) {
                if (leftMatch.index <= rightMatch.index) {
                    rightMatch = null;
                } else {
                    leftMatch = null;
                }
            }
            // Paths (LM: leftMatch, RM: rightMatch, OT: openTokens):
            // LM | RM | OT | Result
            // 1  | 0  | 1  | loop
            // 1  | 0  | 0  | loop
            // 0  | 1  | 1  | loop
            // 0  | 1  | 0  | throw
            // 0  | 0  | 1  | throw
            // 0  | 0  | 0  | break
            // The paths above don't include the sticky mode special case. The loop ends after the
            // first completed match if not `global`.
            if (leftMatch || rightMatch) {
                delimStart = (leftMatch || rightMatch).index;
                delimEnd = delimStart + (leftMatch || rightMatch)[0].length;
            } else if (!openTokens) {
                break;
            }
            if (sticky && !openTokens && delimStart > lastOuterEnd) {
                break;
            }
            if (leftMatch) {
                if (!openTokens) {
                    outerStart = delimStart;
                    innerStart = delimEnd;
                }
                ++openTokens;
            } else if (rightMatch && openTokens) {
                if (! --openTokens) {
                    if (vN) {
                        if (vN[0] && outerStart > lastOuterEnd) {
                            output.push(row(vN[0], str.slice(lastOuterEnd, outerStart), lastOuterEnd, outerStart));
                        }
                        if (vN[1]) {
                            output.push(row(vN[1], str.slice(outerStart, innerStart), outerStart, innerStart));
                        }
                        if (vN[2]) {
                            output.push(row(vN[2], str.slice(innerStart, delimStart), innerStart, delimStart));
                        }
                        if (vN[3]) {
                            output.push(row(vN[3], str.slice(delimStart, delimEnd), delimStart, delimEnd));
                        }
                    } else {
                        output.push(str.slice(innerStart, delimStart));
                    }
                    lastOuterEnd = delimEnd;
                    if (!global) {
                        break;
                    }
                }
            } else {
                throw new Error('Unbalanced delimiter found in string');
            }
            // If the delimiter matched an empty string, avoid an infinite loop
            if (delimStart === delimEnd) {
                ++delimEnd;
            }
        }

        if (global && !sticky && vN && vN[0] && str.length > lastOuterEnd) {
            output.push(row(vN[0], str.slice(lastOuterEnd), lastOuterEnd, str.length));
        }

        return output;
    };
};

module.exports = exports['default'];
},{}],"/s3h":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*!
 * XRegExp Unicode Base 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2008-2017 MIT License
 */

exports.default = function (XRegExp) {

    /**
     * Adds base support for Unicode matching:
     * - Adds syntax `\p{..}` for matching Unicode tokens. Tokens can be inverted using `\P{..}` or
     *   `\p{^..}`. Token names ignore case, spaces, hyphens, and underscores. You can omit the
     *   braces for token names that are a single letter (e.g. `\pL` or `PL`).
     * - Adds flag A (astral), which enables 21-bit Unicode support.
     * - Adds the `XRegExp.addUnicodeData` method used by other addons to provide character data.
     *
     * Unicode Base relies on externally provided Unicode character data. Official addons are
     * available to provide data for Unicode categories, scripts, blocks, and properties.
     *
     * @requires XRegExp
     */

    // ==--------------------------==
    // Private stuff
    // ==--------------------------==

    // Storage for Unicode data
    var unicode = {};

    // Reuse utils
    var dec = XRegExp._dec;
    var hex = XRegExp._hex;
    var pad4 = XRegExp._pad4;

    // Generates a token lookup name: lowercase, with hyphens, spaces, and underscores removed
    function normalize(name) {
        return name.replace(/[- _]+/g, '').toLowerCase();
    }

    // Gets the decimal code of a literal code unit, \xHH, \uHHHH, or a backslash-escaped literal
    function charCode(chr) {
        var esc = /^\\[xu](.+)/.exec(chr);
        return esc ? dec(esc[1]) : chr.charCodeAt(chr[0] === '\\' ? 1 : 0);
    }

    // Inverts a list of ordered BMP characters and ranges
    function invertBmp(range) {
        var output = '';
        var lastEnd = -1;

        XRegExp.forEach(range, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function (m) {
            var start = charCode(m[1]);
            if (start > lastEnd + 1) {
                output += '\\u' + pad4(hex(lastEnd + 1));
                if (start > lastEnd + 2) {
                    output += '-\\u' + pad4(hex(start - 1));
                }
            }
            lastEnd = charCode(m[2] || m[1]);
        });

        if (lastEnd < 0xFFFF) {
            output += '\\u' + pad4(hex(lastEnd + 1));
            if (lastEnd < 0xFFFE) {
                output += '-\\uFFFF';
            }
        }

        return output;
    }

    // Generates an inverted BMP range on first use
    function cacheInvertedBmp(slug) {
        var prop = 'b!';
        return unicode[slug][prop] || (unicode[slug][prop] = invertBmp(unicode[slug].bmp));
    }

    // Combines and optionally negates BMP and astral data
    function buildAstral(slug, isNegated) {
        var item = unicode[slug];
        var combined = '';

        if (item.bmp && !item.isBmpLast) {
            combined = '[' + item.bmp + ']' + (item.astral ? '|' : '');
        }
        if (item.astral) {
            combined += item.astral;
        }
        if (item.isBmpLast && item.bmp) {
            combined += (item.astral ? '|' : '') + '[' + item.bmp + ']';
        }

        // Astral Unicode tokens always match a code point, never a code unit
        return isNegated ? '(?:(?!' + combined + ')(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-\uFFFF]))' : '(?:' + combined + ')';
    }

    // Builds a complete astral pattern on first use
    function cacheAstral(slug, isNegated) {
        var prop = isNegated ? 'a!' : 'a=';
        return unicode[slug][prop] || (unicode[slug][prop] = buildAstral(slug, isNegated));
    }

    // ==--------------------------==
    // Core functionality
    // ==--------------------------==

    /*
     * Add astral mode (flag A) and Unicode token syntax: `\p{..}`, `\P{..}`, `\p{^..}`, `\pC`.
     */
    XRegExp.addToken(
    // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
    /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/, function (match, scope, flags) {
        var ERR_DOUBLE_NEG = 'Invalid double negation ';
        var ERR_UNKNOWN_NAME = 'Unknown Unicode token ';
        var ERR_UNKNOWN_REF = 'Unicode token missing data ';
        var ERR_ASTRAL_ONLY = 'Astral mode required for Unicode token ';
        var ERR_ASTRAL_IN_CLASS = 'Astral mode does not support Unicode tokens within character classes';
        // Negated via \P{..} or \p{^..}
        var isNegated = match[1] === 'P' || !!match[2];
        // Switch from BMP (0-FFFF) to astral (0-10FFFF) mode via flag A
        var isAstralMode = flags.indexOf('A') !== -1;
        // Token lookup name. Check `[4]` first to avoid passing `undefined` via `\p{}`
        var slug = normalize(match[4] || match[3]);
        // Token data object
        var item = unicode[slug];

        if (match[1] === 'P' && match[2]) {
            throw new SyntaxError(ERR_DOUBLE_NEG + match[0]);
        }
        if (!unicode.hasOwnProperty(slug)) {
            throw new SyntaxError(ERR_UNKNOWN_NAME + match[0]);
        }

        // Switch to the negated form of the referenced Unicode token
        if (item.inverseOf) {
            slug = normalize(item.inverseOf);
            if (!unicode.hasOwnProperty(slug)) {
                throw new ReferenceError(ERR_UNKNOWN_REF + match[0] + ' -> ' + item.inverseOf);
            }
            item = unicode[slug];
            isNegated = !isNegated;
        }

        if (!(item.bmp || isAstralMode)) {
            throw new SyntaxError(ERR_ASTRAL_ONLY + match[0]);
        }
        if (isAstralMode) {
            if (scope === 'class') {
                throw new SyntaxError(ERR_ASTRAL_IN_CLASS);
            }

            return cacheAstral(slug, isNegated);
        }

        return scope === 'class' ? isNegated ? cacheInvertedBmp(slug) : item.bmp : (isNegated ? '[^' : '[') + item.bmp + ']';
    }, {
        scope: 'all',
        optionalFlags: 'A',
        leadChar: '\\'
    });

    /**
     * Adds to the list of Unicode tokens that XRegExp regexes can match via `\p` or `\P`.
     *
     * @memberOf XRegExp
     * @param {Array} data Objects with named character ranges. Each object may have properties
     *   `name`, `alias`, `isBmpLast`, `inverseOf`, `bmp`, and `astral`. All but `name` are
     *   optional, although one of `bmp` or `astral` is required (unless `inverseOf` is set). If
     *   `astral` is absent, the `bmp` data is used for BMP and astral modes. If `bmp` is absent,
     *   the name errors in BMP mode but works in astral mode. If both `bmp` and `astral` are
     *   provided, the `bmp` data only is used in BMP mode, and the combination of `bmp` and
     *   `astral` data is used in astral mode. `isBmpLast` is needed when a token matches orphan
     *   high surrogates *and* uses surrogate pairs to match astral code points. The `bmp` and
     *   `astral` data should be a combination of literal characters and `\xHH` or `\uHHHH` escape
     *   sequences, with hyphens to create ranges. Any regex metacharacters in the data should be
     *   escaped, apart from range-creating hyphens. The `astral` data can additionally use
     *   character classes and alternation, and should use surrogate pairs to represent astral code
     *   points. `inverseOf` can be used to avoid duplicating character data if a Unicode token is
     *   defined as the exact inverse of another token.
     * @example
     *
     * // Basic use
     * XRegExp.addUnicodeData([{
     *   name: 'XDigit',
     *   alias: 'Hexadecimal',
     *   bmp: '0-9A-Fa-f'
     * }]);
     * XRegExp('\\p{XDigit}:\\p{Hexadecimal}+').test('0:3D'); // -> true
     */
    XRegExp.addUnicodeData = function (data) {
        var ERR_NO_NAME = 'Unicode token requires name';
        var ERR_NO_DATA = 'Unicode token has no character data ';
        var item = void 0;

        for (var i = 0; i < data.length; ++i) {
            item = data[i];
            if (!item.name) {
                throw new Error(ERR_NO_NAME);
            }
            if (!(item.inverseOf || item.bmp || item.astral)) {
                throw new Error(ERR_NO_DATA + item.name);
            }
            unicode[normalize(item.name)] = item;
            if (item.alias) {
                unicode[normalize(item.alias)] = item;
            }
        }

        // Reset the pattern cache used by the `XRegExp` constructor, since the same pattern and
        // flags might now produce different results
        XRegExp.cache.flush('patterns');
    };

    /**
     * @ignore
     *
     * Return a reference to the internal Unicode definition structure for the given Unicode
     * Property if the given name is a legal Unicode Property for use in XRegExp `\p` or `\P` regex
     * constructs.
     *
     * @memberOf XRegExp
     * @param {String} name Name by which the Unicode Property may be recognized (case-insensitive),
     *   e.g. `'N'` or `'Number'`. The given name is matched against all registered Unicode
     *   Properties and Property Aliases.
     * @returns {Object} Reference to definition structure when the name matches a Unicode Property.
     *
     * @note
     * For more info on Unicode Properties, see also http://unicode.org/reports/tr18/#Categories.
     *
     * @note
     * This method is *not* part of the officially documented API and may change or be removed in
     * the future. It is meant for userland code that wishes to reuse the (large) internal Unicode
     * structures set up by XRegExp.
     */
    XRegExp._getUnicodeProperty = function (name) {
        var slug = normalize(name);
        return unicode[slug];
    };
};

module.exports = exports['default'];
},{}],"YWjk":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*!
 * XRegExp Unicode Blocks 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

exports.default = function (XRegExp) {

    /**
     * Adds support for all Unicode blocks. Block names use the prefix 'In'. E.g.,
     * `\p{InBasicLatin}`. Token names are case insensitive, and any spaces, hyphens, and
     * underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Blocks');
    }

    XRegExp.addUnicodeData([{
        name: 'InAdlam',
        astral: '\uD83A[\uDD00-\uDD5F]'
    }, {
        name: 'InAegean_Numbers',
        astral: '\uD800[\uDD00-\uDD3F]'
    }, {
        name: 'InAhom',
        astral: '\uD805[\uDF00-\uDF3F]'
    }, {
        name: 'InAlchemical_Symbols',
        astral: '\uD83D[\uDF00-\uDF7F]'
    }, {
        name: 'InAlphabetic_Presentation_Forms',
        bmp: '\uFB00-\uFB4F'
    }, {
        name: 'InAnatolian_Hieroglyphs',
        astral: '\uD811[\uDC00-\uDE7F]'
    }, {
        name: 'InAncient_Greek_Musical_Notation',
        astral: '\uD834[\uDE00-\uDE4F]'
    }, {
        name: 'InAncient_Greek_Numbers',
        astral: '\uD800[\uDD40-\uDD8F]'
    }, {
        name: 'InAncient_Symbols',
        astral: '\uD800[\uDD90-\uDDCF]'
    }, {
        name: 'InArabic',
        bmp: '\u0600-\u06FF'
    }, {
        name: 'InArabic_Extended_A',
        bmp: '\u08A0-\u08FF'
    }, {
        name: 'InArabic_Mathematical_Alphabetic_Symbols',
        astral: '\uD83B[\uDE00-\uDEFF]'
    }, {
        name: 'InArabic_Presentation_Forms_A',
        bmp: '\uFB50-\uFDFF'
    }, {
        name: 'InArabic_Presentation_Forms_B',
        bmp: '\uFE70-\uFEFF'
    }, {
        name: 'InArabic_Supplement',
        bmp: '\u0750-\u077F'
    }, {
        name: 'InArmenian',
        bmp: '\u0530-\u058F'
    }, {
        name: 'InArrows',
        bmp: '\u2190-\u21FF'
    }, {
        name: 'InAvestan',
        astral: '\uD802[\uDF00-\uDF3F]'
    }, {
        name: 'InBalinese',
        bmp: '\u1B00-\u1B7F'
    }, {
        name: 'InBamum',
        bmp: '\uA6A0-\uA6FF'
    }, {
        name: 'InBamum_Supplement',
        astral: '\uD81A[\uDC00-\uDE3F]'
    }, {
        name: 'InBasic_Latin',
        bmp: '\0-\x7F'
    }, {
        name: 'InBassa_Vah',
        astral: '\uD81A[\uDED0-\uDEFF]'
    }, {
        name: 'InBatak',
        bmp: '\u1BC0-\u1BFF'
    }, {
        name: 'InBengali',
        bmp: '\u0980-\u09FF'
    }, {
        name: 'InBhaiksuki',
        astral: '\uD807[\uDC00-\uDC6F]'
    }, {
        name: 'InBlock_Elements',
        bmp: '\u2580-\u259F'
    }, {
        name: 'InBopomofo',
        bmp: '\u3100-\u312F'
    }, {
        name: 'InBopomofo_Extended',
        bmp: '\u31A0-\u31BF'
    }, {
        name: 'InBox_Drawing',
        bmp: '\u2500-\u257F'
    }, {
        name: 'InBrahmi',
        astral: '\uD804[\uDC00-\uDC7F]'
    }, {
        name: 'InBraille_Patterns',
        bmp: '\u2800-\u28FF'
    }, {
        name: 'InBuginese',
        bmp: '\u1A00-\u1A1F'
    }, {
        name: 'InBuhid',
        bmp: '\u1740-\u175F'
    }, {
        name: 'InByzantine_Musical_Symbols',
        astral: '\uD834[\uDC00-\uDCFF]'
    }, {
        name: 'InCJK_Compatibility',
        bmp: '\u3300-\u33FF'
    }, {
        name: 'InCJK_Compatibility_Forms',
        bmp: '\uFE30-\uFE4F'
    }, {
        name: 'InCJK_Compatibility_Ideographs',
        bmp: '\uF900-\uFAFF'
    }, {
        name: 'InCJK_Compatibility_Ideographs_Supplement',
        astral: '\uD87E[\uDC00-\uDE1F]'
    }, {
        name: 'InCJK_Radicals_Supplement',
        bmp: '\u2E80-\u2EFF'
    }, {
        name: 'InCJK_Strokes',
        bmp: '\u31C0-\u31EF'
    }, {
        name: 'InCJK_Symbols_and_Punctuation',
        bmp: '\u3000-\u303F'
    }, {
        name: 'InCJK_Unified_Ideographs',
        bmp: '\u4E00-\u9FFF'
    }, {
        name: 'InCJK_Unified_Ideographs_Extension_A',
        bmp: '\u3400-\u4DBF'
    }, {
        name: 'InCJK_Unified_Ideographs_Extension_B',
        astral: '[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]'
    }, {
        name: 'InCJK_Unified_Ideographs_Extension_C',
        astral: '\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F]'
    }, {
        name: 'InCJK_Unified_Ideographs_Extension_D',
        astral: '\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]'
    }, {
        name: 'InCJK_Unified_Ideographs_Extension_E',
        astral: '\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF]'
    }, {
        name: 'InCarian',
        astral: '\uD800[\uDEA0-\uDEDF]'
    }, {
        name: 'InCaucasian_Albanian',
        astral: '\uD801[\uDD30-\uDD6F]'
    }, {
        name: 'InChakma',
        astral: '\uD804[\uDD00-\uDD4F]'
    }, {
        name: 'InCham',
        bmp: '\uAA00-\uAA5F'
    }, {
        name: 'InCherokee',
        bmp: '\u13A0-\u13FF'
    }, {
        name: 'InCherokee_Supplement',
        bmp: '\uAB70-\uABBF'
    }, {
        name: 'InCombining_Diacritical_Marks',
        bmp: '\u0300-\u036F'
    }, {
        name: 'InCombining_Diacritical_Marks_Extended',
        bmp: '\u1AB0-\u1AFF'
    }, {
        name: 'InCombining_Diacritical_Marks_Supplement',
        bmp: '\u1DC0-\u1DFF'
    }, {
        name: 'InCombining_Diacritical_Marks_for_Symbols',
        bmp: '\u20D0-\u20FF'
    }, {
        name: 'InCombining_Half_Marks',
        bmp: '\uFE20-\uFE2F'
    }, {
        name: 'InCommon_Indic_Number_Forms',
        bmp: '\uA830-\uA83F'
    }, {
        name: 'InControl_Pictures',
        bmp: '\u2400-\u243F'
    }, {
        name: 'InCoptic',
        bmp: '\u2C80-\u2CFF'
    }, {
        name: 'InCoptic_Epact_Numbers',
        astral: '\uD800[\uDEE0-\uDEFF]'
    }, {
        name: 'InCounting_Rod_Numerals',
        astral: '\uD834[\uDF60-\uDF7F]'
    }, {
        name: 'InCuneiform',
        astral: '\uD808[\uDC00-\uDFFF]'
    }, {
        name: 'InCuneiform_Numbers_and_Punctuation',
        astral: '\uD809[\uDC00-\uDC7F]'
    }, {
        name: 'InCurrency_Symbols',
        bmp: '\u20A0-\u20CF'
    }, {
        name: 'InCypriot_Syllabary',
        astral: '\uD802[\uDC00-\uDC3F]'
    }, {
        name: 'InCyrillic',
        bmp: '\u0400-\u04FF'
    }, {
        name: 'InCyrillic_Extended_A',
        bmp: '\u2DE0-\u2DFF'
    }, {
        name: 'InCyrillic_Extended_B',
        bmp: '\uA640-\uA69F'
    }, {
        name: 'InCyrillic_Extended_C',
        bmp: '\u1C80-\u1C8F'
    }, {
        name: 'InCyrillic_Supplement',
        bmp: '\u0500-\u052F'
    }, {
        name: 'InDeseret',
        astral: '\uD801[\uDC00-\uDC4F]'
    }, {
        name: 'InDevanagari',
        bmp: '\u0900-\u097F'
    }, {
        name: 'InDevanagari_Extended',
        bmp: '\uA8E0-\uA8FF'
    }, {
        name: 'InDingbats',
        bmp: '\u2700-\u27BF'
    }, {
        name: 'InDomino_Tiles',
        astral: '\uD83C[\uDC30-\uDC9F]'
    }, {
        name: 'InDuployan',
        astral: '\uD82F[\uDC00-\uDC9F]'
    }, {
        name: 'InEarly_Dynastic_Cuneiform',
        astral: '\uD809[\uDC80-\uDD4F]'
    }, {
        name: 'InEgyptian_Hieroglyphs',
        astral: '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F]'
    }, {
        name: 'InElbasan',
        astral: '\uD801[\uDD00-\uDD2F]'
    }, {
        name: 'InEmoticons',
        astral: '\uD83D[\uDE00-\uDE4F]'
    }, {
        name: 'InEnclosed_Alphanumeric_Supplement',
        astral: '\uD83C[\uDD00-\uDDFF]'
    }, {
        name: 'InEnclosed_Alphanumerics',
        bmp: '\u2460-\u24FF'
    }, {
        name: 'InEnclosed_CJK_Letters_and_Months',
        bmp: '\u3200-\u32FF'
    }, {
        name: 'InEnclosed_Ideographic_Supplement',
        astral: '\uD83C[\uDE00-\uDEFF]'
    }, {
        name: 'InEthiopic',
        bmp: '\u1200-\u137F'
    }, {
        name: 'InEthiopic_Extended',
        bmp: '\u2D80-\u2DDF'
    }, {
        name: 'InEthiopic_Extended_A',
        bmp: '\uAB00-\uAB2F'
    }, {
        name: 'InEthiopic_Supplement',
        bmp: '\u1380-\u139F'
    }, {
        name: 'InGeneral_Punctuation',
        bmp: '\u2000-\u206F'
    }, {
        name: 'InGeometric_Shapes',
        bmp: '\u25A0-\u25FF'
    }, {
        name: 'InGeometric_Shapes_Extended',
        astral: '\uD83D[\uDF80-\uDFFF]'
    }, {
        name: 'InGeorgian',
        bmp: '\u10A0-\u10FF'
    }, {
        name: 'InGeorgian_Supplement',
        bmp: '\u2D00-\u2D2F'
    }, {
        name: 'InGlagolitic',
        bmp: '\u2C00-\u2C5F'
    }, {
        name: 'InGlagolitic_Supplement',
        astral: '\uD838[\uDC00-\uDC2F]'
    }, {
        name: 'InGothic',
        astral: '\uD800[\uDF30-\uDF4F]'
    }, {
        name: 'InGrantha',
        astral: '\uD804[\uDF00-\uDF7F]'
    }, {
        name: 'InGreek_Extended',
        bmp: '\u1F00-\u1FFF'
    }, {
        name: 'InGreek_and_Coptic',
        bmp: '\u0370-\u03FF'
    }, {
        name: 'InGujarati',
        bmp: '\u0A80-\u0AFF'
    }, {
        name: 'InGurmukhi',
        bmp: '\u0A00-\u0A7F'
    }, {
        name: 'InHalfwidth_and_Fullwidth_Forms',
        bmp: '\uFF00-\uFFEF'
    }, {
        name: 'InHangul_Compatibility_Jamo',
        bmp: '\u3130-\u318F'
    }, {
        name: 'InHangul_Jamo',
        bmp: '\u1100-\u11FF'
    }, {
        name: 'InHangul_Jamo_Extended_A',
        bmp: '\uA960-\uA97F'
    }, {
        name: 'InHangul_Jamo_Extended_B',
        bmp: '\uD7B0-\uD7FF'
    }, {
        name: 'InHangul_Syllables',
        bmp: '\uAC00-\uD7AF'
    }, {
        name: 'InHanunoo',
        bmp: '\u1720-\u173F'
    }, {
        name: 'InHatran',
        astral: '\uD802[\uDCE0-\uDCFF]'
    }, {
        name: 'InHebrew',
        bmp: '\u0590-\u05FF'
    }, {
        name: 'InHigh_Private_Use_Surrogates',
        bmp: '\uDB80-\uDBFF'
    }, {
        name: 'InHigh_Surrogates',
        bmp: '\uD800-\uDB7F'
    }, {
        name: 'InHiragana',
        bmp: '\u3040-\u309F'
    }, {
        name: 'InIPA_Extensions',
        bmp: '\u0250-\u02AF'
    }, {
        name: 'InIdeographic_Description_Characters',
        bmp: '\u2FF0-\u2FFF'
    }, {
        name: 'InIdeographic_Symbols_and_Punctuation',
        astral: '\uD81B[\uDFE0-\uDFFF]'
    }, {
        name: 'InImperial_Aramaic',
        astral: '\uD802[\uDC40-\uDC5F]'
    }, {
        name: 'InInscriptional_Pahlavi',
        astral: '\uD802[\uDF60-\uDF7F]'
    }, {
        name: 'InInscriptional_Parthian',
        astral: '\uD802[\uDF40-\uDF5F]'
    }, {
        name: 'InJavanese',
        bmp: '\uA980-\uA9DF'
    }, {
        name: 'InKaithi',
        astral: '\uD804[\uDC80-\uDCCF]'
    }, {
        name: 'InKana_Supplement',
        astral: '\uD82C[\uDC00-\uDCFF]'
    }, {
        name: 'InKanbun',
        bmp: '\u3190-\u319F'
    }, {
        name: 'InKangxi_Radicals',
        bmp: '\u2F00-\u2FDF'
    }, {
        name: 'InKannada',
        bmp: '\u0C80-\u0CFF'
    }, {
        name: 'InKatakana',
        bmp: '\u30A0-\u30FF'
    }, {
        name: 'InKatakana_Phonetic_Extensions',
        bmp: '\u31F0-\u31FF'
    }, {
        name: 'InKayah_Li',
        bmp: '\uA900-\uA92F'
    }, {
        name: 'InKharoshthi',
        astral: '\uD802[\uDE00-\uDE5F]'
    }, {
        name: 'InKhmer',
        bmp: '\u1780-\u17FF'
    }, {
        name: 'InKhmer_Symbols',
        bmp: '\u19E0-\u19FF'
    }, {
        name: 'InKhojki',
        astral: '\uD804[\uDE00-\uDE4F]'
    }, {
        name: 'InKhudawadi',
        astral: '\uD804[\uDEB0-\uDEFF]'
    }, {
        name: 'InLao',
        bmp: '\u0E80-\u0EFF'
    }, {
        name: 'InLatin_Extended_Additional',
        bmp: '\u1E00-\u1EFF'
    }, {
        name: 'InLatin_Extended_A',
        bmp: '\u0100-\u017F'
    }, {
        name: 'InLatin_Extended_B',
        bmp: '\u0180-\u024F'
    }, {
        name: 'InLatin_Extended_C',
        bmp: '\u2C60-\u2C7F'
    }, {
        name: 'InLatin_Extended_D',
        bmp: '\uA720-\uA7FF'
    }, {
        name: 'InLatin_Extended_E',
        bmp: '\uAB30-\uAB6F'
    }, {
        name: 'InLatin_1_Supplement',
        bmp: '\x80-\xFF'
    }, {
        name: 'InLepcha',
        bmp: '\u1C00-\u1C4F'
    }, {
        name: 'InLetterlike_Symbols',
        bmp: '\u2100-\u214F'
    }, {
        name: 'InLimbu',
        bmp: '\u1900-\u194F'
    }, {
        name: 'InLinear_A',
        astral: '\uD801[\uDE00-\uDF7F]'
    }, {
        name: 'InLinear_B_Ideograms',
        astral: '\uD800[\uDC80-\uDCFF]'
    }, {
        name: 'InLinear_B_Syllabary',
        astral: '\uD800[\uDC00-\uDC7F]'
    }, {
        name: 'InLisu',
        bmp: '\uA4D0-\uA4FF'
    }, {
        name: 'InLow_Surrogates',
        bmp: '\uDC00-\uDFFF'
    }, {
        name: 'InLycian',
        astral: '\uD800[\uDE80-\uDE9F]'
    }, {
        name: 'InLydian',
        astral: '\uD802[\uDD20-\uDD3F]'
    }, {
        name: 'InMahajani',
        astral: '\uD804[\uDD50-\uDD7F]'
    }, {
        name: 'InMahjong_Tiles',
        astral: '\uD83C[\uDC00-\uDC2F]'
    }, {
        name: 'InMalayalam',
        bmp: '\u0D00-\u0D7F'
    }, {
        name: 'InMandaic',
        bmp: '\u0840-\u085F'
    }, {
        name: 'InManichaean',
        astral: '\uD802[\uDEC0-\uDEFF]'
    }, {
        name: 'InMarchen',
        astral: '\uD807[\uDC70-\uDCBF]'
    }, {
        name: 'InMathematical_Alphanumeric_Symbols',
        astral: '\uD835[\uDC00-\uDFFF]'
    }, {
        name: 'InMathematical_Operators',
        bmp: '\u2200-\u22FF'
    }, {
        name: 'InMeetei_Mayek',
        bmp: '\uABC0-\uABFF'
    }, {
        name: 'InMeetei_Mayek_Extensions',
        bmp: '\uAAE0-\uAAFF'
    }, {
        name: 'InMende_Kikakui',
        astral: '\uD83A[\uDC00-\uDCDF]'
    }, {
        name: 'InMeroitic_Cursive',
        astral: '\uD802[\uDDA0-\uDDFF]'
    }, {
        name: 'InMeroitic_Hieroglyphs',
        astral: '\uD802[\uDD80-\uDD9F]'
    }, {
        name: 'InMiao',
        astral: '\uD81B[\uDF00-\uDF9F]'
    }, {
        name: 'InMiscellaneous_Mathematical_Symbols_A',
        bmp: '\u27C0-\u27EF'
    }, {
        name: 'InMiscellaneous_Mathematical_Symbols_B',
        bmp: '\u2980-\u29FF'
    }, {
        name: 'InMiscellaneous_Symbols',
        bmp: '\u2600-\u26FF'
    }, {
        name: 'InMiscellaneous_Symbols_and_Arrows',
        bmp: '\u2B00-\u2BFF'
    }, {
        name: 'InMiscellaneous_Symbols_and_Pictographs',
        astral: '\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]'
    }, {
        name: 'InMiscellaneous_Technical',
        bmp: '\u2300-\u23FF'
    }, {
        name: 'InModi',
        astral: '\uD805[\uDE00-\uDE5F]'
    }, {
        name: 'InModifier_Tone_Letters',
        bmp: '\uA700-\uA71F'
    }, {
        name: 'InMongolian',
        bmp: '\u1800-\u18AF'
    }, {
        name: 'InMongolian_Supplement',
        astral: '\uD805[\uDE60-\uDE7F]'
    }, {
        name: 'InMro',
        astral: '\uD81A[\uDE40-\uDE6F]'
    }, {
        name: 'InMultani',
        astral: '\uD804[\uDE80-\uDEAF]'
    }, {
        name: 'InMusical_Symbols',
        astral: '\uD834[\uDD00-\uDDFF]'
    }, {
        name: 'InMyanmar',
        bmp: '\u1000-\u109F'
    }, {
        name: 'InMyanmar_Extended_A',
        bmp: '\uAA60-\uAA7F'
    }, {
        name: 'InMyanmar_Extended_B',
        bmp: '\uA9E0-\uA9FF'
    }, {
        name: 'InNKo',
        bmp: '\u07C0-\u07FF'
    }, {
        name: 'InNabataean',
        astral: '\uD802[\uDC80-\uDCAF]'
    }, {
        name: 'InNew_Tai_Lue',
        bmp: '\u1980-\u19DF'
    }, {
        name: 'InNewa',
        astral: '\uD805[\uDC00-\uDC7F]'
    }, {
        name: 'InNumber_Forms',
        bmp: '\u2150-\u218F'
    }, {
        name: 'InOgham',
        bmp: '\u1680-\u169F'
    }, {
        name: 'InOl_Chiki',
        bmp: '\u1C50-\u1C7F'
    }, {
        name: 'InOld_Hungarian',
        astral: '\uD803[\uDC80-\uDCFF]'
    }, {
        name: 'InOld_Italic',
        astral: '\uD800[\uDF00-\uDF2F]'
    }, {
        name: 'InOld_North_Arabian',
        astral: '\uD802[\uDE80-\uDE9F]'
    }, {
        name: 'InOld_Permic',
        astral: '\uD800[\uDF50-\uDF7F]'
    }, {
        name: 'InOld_Persian',
        astral: '\uD800[\uDFA0-\uDFDF]'
    }, {
        name: 'InOld_South_Arabian',
        astral: '\uD802[\uDE60-\uDE7F]'
    }, {
        name: 'InOld_Turkic',
        astral: '\uD803[\uDC00-\uDC4F]'
    }, {
        name: 'InOptical_Character_Recognition',
        bmp: '\u2440-\u245F'
    }, {
        name: 'InOriya',
        bmp: '\u0B00-\u0B7F'
    }, {
        name: 'InOrnamental_Dingbats',
        astral: '\uD83D[\uDE50-\uDE7F]'
    }, {
        name: 'InOsage',
        astral: '\uD801[\uDCB0-\uDCFF]'
    }, {
        name: 'InOsmanya',
        astral: '\uD801[\uDC80-\uDCAF]'
    }, {
        name: 'InPahawh_Hmong',
        astral: '\uD81A[\uDF00-\uDF8F]'
    }, {
        name: 'InPalmyrene',
        astral: '\uD802[\uDC60-\uDC7F]'
    }, {
        name: 'InPau_Cin_Hau',
        astral: '\uD806[\uDEC0-\uDEFF]'
    }, {
        name: 'InPhags_pa',
        bmp: '\uA840-\uA87F'
    }, {
        name: 'InPhaistos_Disc',
        astral: '\uD800[\uDDD0-\uDDFF]'
    }, {
        name: 'InPhoenician',
        astral: '\uD802[\uDD00-\uDD1F]'
    }, {
        name: 'InPhonetic_Extensions',
        bmp: '\u1D00-\u1D7F'
    }, {
        name: 'InPhonetic_Extensions_Supplement',
        bmp: '\u1D80-\u1DBF'
    }, {
        name: 'InPlaying_Cards',
        astral: '\uD83C[\uDCA0-\uDCFF]'
    }, {
        name: 'InPrivate_Use_Area',
        bmp: '\uE000-\uF8FF'
    }, {
        name: 'InPsalter_Pahlavi',
        astral: '\uD802[\uDF80-\uDFAF]'
    }, {
        name: 'InRejang',
        bmp: '\uA930-\uA95F'
    }, {
        name: 'InRumi_Numeral_Symbols',
        astral: '\uD803[\uDE60-\uDE7F]'
    }, {
        name: 'InRunic',
        bmp: '\u16A0-\u16FF'
    }, {
        name: 'InSamaritan',
        bmp: '\u0800-\u083F'
    }, {
        name: 'InSaurashtra',
        bmp: '\uA880-\uA8DF'
    }, {
        name: 'InSharada',
        astral: '\uD804[\uDD80-\uDDDF]'
    }, {
        name: 'InShavian',
        astral: '\uD801[\uDC50-\uDC7F]'
    }, {
        name: 'InShorthand_Format_Controls',
        astral: '\uD82F[\uDCA0-\uDCAF]'
    }, {
        name: 'InSiddham',
        astral: '\uD805[\uDD80-\uDDFF]'
    }, {
        name: 'InSinhala',
        bmp: '\u0D80-\u0DFF'
    }, {
        name: 'InSinhala_Archaic_Numbers',
        astral: '\uD804[\uDDE0-\uDDFF]'
    }, {
        name: 'InSmall_Form_Variants',
        bmp: '\uFE50-\uFE6F'
    }, {
        name: 'InSora_Sompeng',
        astral: '\uD804[\uDCD0-\uDCFF]'
    }, {
        name: 'InSpacing_Modifier_Letters',
        bmp: '\u02B0-\u02FF'
    }, {
        name: 'InSpecials',
        bmp: '\uFFF0-\uFFFF'
    }, {
        name: 'InSundanese',
        bmp: '\u1B80-\u1BBF'
    }, {
        name: 'InSundanese_Supplement',
        bmp: '\u1CC0-\u1CCF'
    }, {
        name: 'InSuperscripts_and_Subscripts',
        bmp: '\u2070-\u209F'
    }, {
        name: 'InSupplemental_Arrows_A',
        bmp: '\u27F0-\u27FF'
    }, {
        name: 'InSupplemental_Arrows_B',
        bmp: '\u2900-\u297F'
    }, {
        name: 'InSupplemental_Arrows_C',
        astral: '\uD83E[\uDC00-\uDCFF]'
    }, {
        name: 'InSupplemental_Mathematical_Operators',
        bmp: '\u2A00-\u2AFF'
    }, {
        name: 'InSupplemental_Punctuation',
        bmp: '\u2E00-\u2E7F'
    }, {
        name: 'InSupplemental_Symbols_and_Pictographs',
        astral: '\uD83E[\uDD00-\uDDFF]'
    }, {
        name: 'InSupplementary_Private_Use_Area_A',
        astral: '[\uDB80-\uDBBF][\uDC00-\uDFFF]'
    }, {
        name: 'InSupplementary_Private_Use_Area_B',
        astral: '[\uDBC0-\uDBFF][\uDC00-\uDFFF]'
    }, {
        name: 'InSutton_SignWriting',
        astral: '\uD836[\uDC00-\uDEAF]'
    }, {
        name: 'InSyloti_Nagri',
        bmp: '\uA800-\uA82F'
    }, {
        name: 'InSyriac',
        bmp: '\u0700-\u074F'
    }, {
        name: 'InTagalog',
        bmp: '\u1700-\u171F'
    }, {
        name: 'InTagbanwa',
        bmp: '\u1760-\u177F'
    }, {
        name: 'InTags',
        astral: '\uDB40[\uDC00-\uDC7F]'
    }, {
        name: 'InTai_Le',
        bmp: '\u1950-\u197F'
    }, {
        name: 'InTai_Tham',
        bmp: '\u1A20-\u1AAF'
    }, {
        name: 'InTai_Viet',
        bmp: '\uAA80-\uAADF'
    }, {
        name: 'InTai_Xuan_Jing_Symbols',
        astral: '\uD834[\uDF00-\uDF5F]'
    }, {
        name: 'InTakri',
        astral: '\uD805[\uDE80-\uDECF]'
    }, {
        name: 'InTamil',
        bmp: '\u0B80-\u0BFF'
    }, {
        name: 'InTangut',
        astral: '[\uD81C-\uD821][\uDC00-\uDFFF]'
    }, {
        name: 'InTangut_Components',
        astral: '\uD822[\uDC00-\uDEFF]'
    }, {
        name: 'InTelugu',
        bmp: '\u0C00-\u0C7F'
    }, {
        name: 'InThaana',
        bmp: '\u0780-\u07BF'
    }, {
        name: 'InThai',
        bmp: '\u0E00-\u0E7F'
    }, {
        name: 'InTibetan',
        bmp: '\u0F00-\u0FFF'
    }, {
        name: 'InTifinagh',
        bmp: '\u2D30-\u2D7F'
    }, {
        name: 'InTirhuta',
        astral: '\uD805[\uDC80-\uDCDF]'
    }, {
        name: 'InTransport_and_Map_Symbols',
        astral: '\uD83D[\uDE80-\uDEFF]'
    }, {
        name: 'InUgaritic',
        astral: '\uD800[\uDF80-\uDF9F]'
    }, {
        name: 'InUnified_Canadian_Aboriginal_Syllabics',
        bmp: '\u1400-\u167F'
    }, {
        name: 'InUnified_Canadian_Aboriginal_Syllabics_Extended',
        bmp: '\u18B0-\u18FF'
    }, {
        name: 'InVai',
        bmp: '\uA500-\uA63F'
    }, {
        name: 'InVariation_Selectors',
        bmp: '\uFE00-\uFE0F'
    }, {
        name: 'InVariation_Selectors_Supplement',
        astral: '\uDB40[\uDD00-\uDDEF]'
    }, {
        name: 'InVedic_Extensions',
        bmp: '\u1CD0-\u1CFF'
    }, {
        name: 'InVertical_Forms',
        bmp: '\uFE10-\uFE1F'
    }, {
        name: 'InWarang_Citi',
        astral: '\uD806[\uDCA0-\uDCFF]'
    }, {
        name: 'InYi_Radicals',
        bmp: '\uA490-\uA4CF'
    }, {
        name: 'InYi_Syllables',
        bmp: '\uA000-\uA48F'
    }, {
        name: 'InYijing_Hexagram_Symbols',
        bmp: '\u4DC0-\u4DFF'
    }]);
};

module.exports = exports['default'];
},{}],"nPWq":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*!
 * XRegExp Unicode Categories 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

exports.default = function (XRegExp) {

    /**
     * Adds support for Unicode's general categories. E.g., `\p{Lu}` or `\p{Uppercase Letter}`. See
     * category descriptions in UAX #44 <http://unicode.org/reports/tr44/#GC_Values_Table>. Token
     * names are case insensitive, and any spaces, hyphens, and underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Categories');
    }

    XRegExp.addUnicodeData([{
        name: 'C',
        alias: 'Other',
        isBmpLast: true,
        bmp: '\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E45-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF',
        astral: '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD83D[\uDED3-\uDEDF\uDEED-\uDEEF\uDEF7-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD1F\uDD28-\uDD2F\uDD31\uDD32\uDD3F\uDD4C-\uDD4F\uDD5F-\uDD7F\uDD92-\uDDBF\uDDC1-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]'
    }, {
        name: 'Cc',
        alias: 'Control',
        bmp: '\0-\x1F\x7F-\x9F'
    }, {
        name: 'Cf',
        alias: 'Format',
        bmp: '\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB',
        astral: '\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]'
    }, {
        name: 'Cn',
        alias: 'Unassigned',
        bmp: '\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u05FF\u061D\u070E\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E45-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF',
        astral: '\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD83D[\uDED3-\uDEDF\uDEED-\uDEEF\uDEF7-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD1F\uDD28-\uDD2F\uDD31\uDD32\uDD3F\uDD4C-\uDD4F\uDD5F-\uDD7F\uDD92-\uDDBF\uDDC1-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]'
    }, {
        name: 'Co',
        alias: 'Private_Use',
        bmp: '\uE000-\uF8FF',
        astral: '[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]'
    }, {
        name: 'Cs',
        alias: 'Surrogate',
        bmp: '\uD800-\uDFFF'
    }, {
        name: 'L',
        alias: 'Letter',
        bmp: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
    }, {
        name: 'Ll',
        alias: 'Lowercase_Letter',
        bmp: 'a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
        astral: '\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]'
    }, {
        name: 'Lm',
        alias: 'Modifier_Letter',
        bmp: '\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F',
        astral: '\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0]'
    }, {
        name: 'Lo',
        alias: 'Other_Letter',
        bmp: '\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
    }, {
        name: 'Lt',
        alias: 'Titlecase_Letter',
        bmp: '\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC'
    }, {
        name: 'Lu',
        alias: 'Uppercase_Letter',
        bmp: 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A',
        astral: '\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]'
    }, {
        name: 'M',
        alias: 'Mark',
        bmp: '\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
        astral: '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDCA-\uDDCC\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
    }, {
        name: 'Mc',
        alias: 'Spacing_Mark',
        bmp: '\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\u1CF3\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC',
        astral: '\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4]|\uD81B[\uDF51-\uDF7E]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]'
    }, {
        name: 'Me',
        alias: 'Enclosing_Mark',
        bmp: '\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672'
    }, {
        name: 'Mn',
        alias: 'Nonspacing_Mark',
        bmp: '\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F',
        astral: '\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDCA-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]'
    }, {
        name: 'N',
        alias: 'Number',
        bmp: '0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
        astral: '\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD807[\uDC50-\uDC6C]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83C[\uDD00-\uDD0C]'
    }, {
        name: 'Nd',
        alias: 'Decimal_Number',
        bmp: '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19',
        astral: '\uD801[\uDCA0-\uDCA9]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD807[\uDC50-\uDC59]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDD50-\uDD59]'
    }, {
        name: 'Nl',
        alias: 'Letter_Number',
        bmp: '\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF',
        astral: '\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]'
    }, {
        name: 'No',
        alias: 'Other_Number',
        bmp: '\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835',
        astral: '\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C]|\uD81A[\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD83A[\uDCC7-\uDCCF]|\uD83C[\uDD00-\uDD0C]'
    }, {
        name: 'P',
        alias: 'Punctuation',
        bmp: '\x21-\x23\x25-\\x2A\x2C-\x2F\x3A\x3B\\x3F\x40\\x5B-\\x5D\x5F\\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65',
        astral: '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
    }, {
        name: 'Pc',
        alias: 'Connector_Punctuation',
        bmp: '\x5F\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F'
    }, {
        name: 'Pd',
        alias: 'Dash_Punctuation',
        bmp: '\\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D'
    }, {
        name: 'Pe',
        alias: 'Close_Punctuation',
        bmp: '\\x29\\x5D\x7D\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63'
    }, {
        name: 'Pf',
        alias: 'Final_Punctuation',
        bmp: '\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21'
    }, {
        name: 'Pi',
        alias: 'Initial_Punctuation',
        bmp: '\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20'
    }, {
        name: 'Po',
        alias: 'Other_Punctuation',
        bmp: '\x21-\x23\x25-\x27\\x2A\x2C\\x2E\x2F\x3A\x3B\\x3F\x40\\x5C\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166D\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43\u2E44\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65',
        astral: '\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]'
    }, {
        name: 'Ps',
        alias: 'Open_Punctuation',
        bmp: '\\x28\\x5B\\x7B\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62'
    }, {
        name: 'S',
        alias: 'Symbol',
        bmp: '\\x24\\x2B\x3C-\x3E\\x5E\x60\\x7C\x7E\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BE\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u23FE\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD',
        astral: '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83B[\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]'
    }, {
        name: 'Sc',
        alias: 'Currency_Symbol',
        bmp: '\\x24\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BE\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6'
    }, {
        name: 'Sk',
        alias: 'Modifier_Symbol',
        bmp: '\\x5E\x60\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uFBB2-\uFBC1\uFF3E\uFF40\uFFE3',
        astral: '\uD83C[\uDFFB-\uDFFF]'
    }, {
        name: 'Sm',
        alias: 'Math_Symbol',
        bmp: '\\x2B\x3C-\x3E\\x7C\x7E\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC',
        astral: '\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]'
    }, {
        name: 'So',
        alias: 'Other_Symbol',
        bmp: '\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u23FE\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFDFD\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD',
        astral: '\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]'
    }, {
        name: 'Z',
        alias: 'Separator',
        bmp: '\x20\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
    }, {
        name: 'Zl',
        alias: 'Line_Separator',
        bmp: '\u2028'
    }, {
        name: 'Zp',
        alias: 'Paragraph_Separator',
        bmp: '\u2029'
    }, {
        name: 'Zs',
        alias: 'Space_Separator',
        bmp: '\x20\xA0\u1680\u2000-\u200A\u202F\u205F\u3000'
    }]);
};

module.exports = exports['default'];
},{}],"sqgh":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*!
 * XRegExp Unicode Properties 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

exports.default = function (XRegExp) {

    /**
     * Adds properties to meet the UTS #18 Level 1 RL1.2 requirements for Unicode regex support. See
     * <http://unicode.org/reports/tr18/#RL1.2>. Following are definitions of these properties from
     * UAX #44 <http://unicode.org/reports/tr44/>:
     *
     * - Alphabetic
     *   Characters with the Alphabetic property. Generated from: Lowercase + Uppercase + Lt + Lm +
     *   Lo + Nl + Other_Alphabetic.
     *
     * - Default_Ignorable_Code_Point
     *   For programmatic determination of default ignorable code points. New characters that should
     *   be ignored in rendering (unless explicitly supported) will be assigned in these ranges,
     *   permitting programs to correctly handle the default rendering of such characters when not
     *   otherwise supported.
     *
     * - Lowercase
     *   Characters with the Lowercase property. Generated from: Ll + Other_Lowercase.
     *
     * - Noncharacter_Code_Point
     *   Code points permanently reserved for internal use.
     *
     * - Uppercase
     *   Characters with the Uppercase property. Generated from: Lu + Other_Uppercase.
     *
     * - White_Space
     *   Spaces, separator characters and other control characters which should be treated by
     *   programming languages as "white space" for the purpose of parsing elements.
     *
     * The properties ASCII, Any, and Assigned are also included but are not defined in UAX #44. UTS
     * #18 RL1.2 additionally requires support for Unicode scripts and general categories. These are
     * included in XRegExp's Unicode Categories and Unicode Scripts addons.
     *
     * Token names are case insensitive, and any spaces, hyphens, and underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Properties');
    }

    var unicodeData = [{
        name: 'ASCII',
        bmp: '\0-\x7F'
    }, {
        name: 'Alphabetic',
        bmp: 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA7E-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
        astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC45\uDC82-\uDCB8\uDCD0-\uDCE8\uDD00-\uDD32\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDF00-\uDF19\uDF1D-\uDF2A]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF36\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
    }, {
        name: 'Any',
        isBmpLast: true,
        bmp: '\0-\uFFFF',
        astral: '[\uD800-\uDBFF][\uDC00-\uDFFF]'
    }, {
        name: 'Default_Ignorable_Code_Point',
        bmp: '\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8',
        astral: '\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]'
    }, {
        name: 'Lowercase',
        bmp: 'a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A',
        astral: '\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]'
    }, {
        name: 'Noncharacter_Code_Point',
        bmp: '\uFDD0-\uFDEF\uFFFE\uFFFF',
        astral: '[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]'
    }, {
        name: 'Uppercase',
        bmp: 'A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A',
        astral: '\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]'
    }, {
        name: 'White_Space',
        bmp: '\x09-\x0D\x20\x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000'
    }];

    // Add non-generated data
    unicodeData.push({
        name: 'Assigned',
        // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
        // Categories addon is required to use this property
        inverseOf: 'Cn'
    });

    XRegExp.addUnicodeData(unicodeData);
};

module.exports = exports['default'];
},{}],"RtWW":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*!
 * XRegExp Unicode Scripts 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */

exports.default = function (XRegExp) {

    /**
     * Adds support for all Unicode scripts. E.g., `\p{Latin}`. Token names are case insensitive,
     * and any spaces, hyphens, and underscores are ignored.
     *
     * Uses Unicode 9.0.0.
     *
     * @requires XRegExp, Unicode Base
     */

    if (!XRegExp.addUnicodeData) {
        throw new ReferenceError('Unicode Base must be loaded before Unicode Scripts');
    }

    XRegExp.addUnicodeData([{
        name: 'Adlam',
        astral: '\uD83A[\uDD00-\uDD4A\uDD50-\uDD59\uDD5E\uDD5F]'
    }, {
        name: 'Ahom',
        astral: '\uD805[\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF3F]'
    }, {
        name: 'Anatolian_Hieroglyphs',
        astral: '\uD811[\uDC00-\uDE46]'
    }, {
        name: 'Arabic',
        bmp: '\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC',
        astral: '\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]'
    }, {
        name: 'Armenian',
        bmp: '\u0531-\u0556\u0559-\u055F\u0561-\u0587\u058A\u058D-\u058F\uFB13-\uFB17'
    }, {
        name: 'Avestan',
        astral: '\uD802[\uDF00-\uDF35\uDF39-\uDF3F]'
    }, {
        name: 'Balinese',
        bmp: '\u1B00-\u1B4B\u1B50-\u1B7C'
    }, {
        name: 'Bamum',
        bmp: '\uA6A0-\uA6F7',
        astral: '\uD81A[\uDC00-\uDE38]'
    }, {
        name: 'Bassa_Vah',
        astral: '\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]'
    }, {
        name: 'Batak',
        bmp: '\u1BC0-\u1BF3\u1BFC-\u1BFF'
    }, {
        name: 'Bengali',
        bmp: '\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB'
    }, {
        name: 'Bhaiksuki',
        astral: '\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]'
    }, {
        name: 'Bopomofo',
        bmp: '\u02EA\u02EB\u3105-\u312D\u31A0-\u31BA'
    }, {
        name: 'Brahmi',
        astral: '\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F]'
    }, {
        name: 'Braille',
        bmp: '\u2800-\u28FF'
    }, {
        name: 'Buginese',
        bmp: '\u1A00-\u1A1B\u1A1E\u1A1F'
    }, {
        name: 'Buhid',
        bmp: '\u1740-\u1753'
    }, {
        name: 'Canadian_Aboriginal',
        bmp: '\u1400-\u167F\u18B0-\u18F5'
    }, {
        name: 'Carian',
        astral: '\uD800[\uDEA0-\uDED0]'
    }, {
        name: 'Caucasian_Albanian',
        astral: '\uD801[\uDD30-\uDD63\uDD6F]'
    }, {
        name: 'Chakma',
        astral: '\uD804[\uDD00-\uDD34\uDD36-\uDD43]'
    }, {
        name: 'Cham',
        bmp: '\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F'
    }, {
        name: 'Cherokee',
        bmp: '\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF'
    }, {
        name: 'Common',
        bmp: '\0-\x40\\x5B-\x60\\x7B-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0589\u0605\u060C\u061B\u061C\u061F\u0640\u06DD\u08E2\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20BE\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u23FE\u2400-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2E00-\u2E44\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD',
        astral: '\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9B\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDF00-\uDF56\uDF60-\uDF71]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDD0C\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]|\uDB40[\uDC01\uDC20-\uDC7F]'
    }, {
        name: 'Coptic',
        bmp: '\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF'
    }, {
        name: 'Cuneiform',
        astral: '\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]'
    }, {
        name: 'Cypriot',
        astral: '\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]'
    }, {
        name: 'Cyrillic',
        bmp: '\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F'
    }, {
        name: 'Deseret',
        astral: '\uD801[\uDC00-\uDC4F]'
    }, {
        name: 'Devanagari',
        bmp: '\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FD'
    }, {
        name: 'Duployan',
        astral: '\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]'
    }, {
        name: 'Egyptian_Hieroglyphs',
        astral: '\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]'
    }, {
        name: 'Elbasan',
        astral: '\uD801[\uDD00-\uDD27]'
    }, {
        name: 'Ethiopic',
        bmp: '\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E'
    }, {
        name: 'Georgian',
        bmp: '\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D'
    }, {
        name: 'Glagolitic',
        bmp: '\u2C00-\u2C2E\u2C30-\u2C5E',
        astral: '\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]'
    }, {
        name: 'Gothic',
        astral: '\uD800[\uDF30-\uDF4A]'
    }, {
        name: 'Grantha',
        astral: '\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]'
    }, {
        name: 'Greek',
        bmp: '\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65',
        astral: '\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]'
    }, {
        name: 'Gujarati',
        bmp: '\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9'
    }, {
        name: 'Gurmukhi',
        bmp: '\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75'
    }, {
        name: 'Han',
        bmp: '\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9',
        astral: '[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]'
    }, {
        name: 'Hangul',
        bmp: '\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC'
    }, {
        name: 'Hanunoo',
        bmp: '\u1720-\u1734'
    }, {
        name: 'Hatran',
        astral: '\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]'
    }, {
        name: 'Hebrew',
        bmp: '\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F'
    }, {
        name: 'Hiragana',
        bmp: '\u3041-\u3096\u309D-\u309F',
        astral: '\uD82C\uDC01|\uD83C\uDE00'
    }, {
        name: 'Imperial_Aramaic',
        astral: '\uD802[\uDC40-\uDC55\uDC57-\uDC5F]'
    }, {
        name: 'Inherited',
        bmp: '\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951\u0952\u1AB0-\u1ABE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D',
        astral: '\uD800[\uDDFD\uDEE0]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]'
    }, {
        name: 'Inscriptional_Pahlavi',
        astral: '\uD802[\uDF60-\uDF72\uDF78-\uDF7F]'
    }, {
        name: 'Inscriptional_Parthian',
        astral: '\uD802[\uDF40-\uDF55\uDF58-\uDF5F]'
    }, {
        name: 'Javanese',
        bmp: '\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF'
    }, {
        name: 'Kaithi',
        astral: '\uD804[\uDC80-\uDCC1]'
    }, {
        name: 'Kannada',
        bmp: '\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2'
    }, {
        name: 'Katakana',
        bmp: '\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D',
        astral: '\uD82C\uDC00'
    }, {
        name: 'Kayah_Li',
        bmp: '\uA900-\uA92D\uA92F'
    }, {
        name: 'Kharoshthi',
        astral: '\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F-\uDE47\uDE50-\uDE58]'
    }, {
        name: 'Khmer',
        bmp: '\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF'
    }, {
        name: 'Khojki',
        astral: '\uD804[\uDE00-\uDE11\uDE13-\uDE3E]'
    }, {
        name: 'Khudawadi',
        astral: '\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]'
    }, {
        name: 'Lao',
        bmp: '\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF'
    }, {
        name: 'Latin',
        bmp: 'A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A'
    }, {
        name: 'Lepcha',
        bmp: '\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F'
    }, {
        name: 'Limbu',
        bmp: '\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F'
    }, {
        name: 'Linear_A',
        astral: '\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]'
    }, {
        name: 'Linear_B',
        astral: '\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]'
    }, {
        name: 'Lisu',
        bmp: '\uA4D0-\uA4FF'
    }, {
        name: 'Lycian',
        astral: '\uD800[\uDE80-\uDE9C]'
    }, {
        name: 'Lydian',
        astral: '\uD802[\uDD20-\uDD39\uDD3F]'
    }, {
        name: 'Mahajani',
        astral: '\uD804[\uDD50-\uDD76]'
    }, {
        name: 'Malayalam',
        bmp: '\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F'
    }, {
        name: 'Mandaic',
        bmp: '\u0840-\u085B\u085E'
    }, {
        name: 'Manichaean',
        astral: '\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]'
    }, {
        name: 'Marchen',
        astral: '\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]'
    }, {
        name: 'Meetei_Mayek',
        bmp: '\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9'
    }, {
        name: 'Mende_Kikakui',
        astral: '\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]'
    }, {
        name: 'Meroitic_Cursive',
        astral: '\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]'
    }, {
        name: 'Meroitic_Hieroglyphs',
        astral: '\uD802[\uDD80-\uDD9F]'
    }, {
        name: 'Miao',
        astral: '\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]'
    }, {
        name: 'Modi',
        astral: '\uD805[\uDE00-\uDE44\uDE50-\uDE59]'
    }, {
        name: 'Mongolian',
        bmp: '\u1800\u1801\u1804\u1806-\u180E\u1810-\u1819\u1820-\u1877\u1880-\u18AA',
        astral: '\uD805[\uDE60-\uDE6C]'
    }, {
        name: 'Mro',
        astral: '\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]'
    }, {
        name: 'Multani',
        astral: '\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]'
    }, {
        name: 'Myanmar',
        bmp: '\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F'
    }, {
        name: 'Nabataean',
        astral: '\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]'
    }, {
        name: 'New_Tai_Lue',
        bmp: '\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF'
    }, {
        name: 'Newa',
        astral: '\uD805[\uDC00-\uDC59\uDC5B\uDC5D]'
    }, {
        name: 'Nko',
        bmp: '\u07C0-\u07FA'
    }, {
        name: 'Ogham',
        bmp: '\u1680-\u169C'
    }, {
        name: 'Ol_Chiki',
        bmp: '\u1C50-\u1C7F'
    }, {
        name: 'Old_Hungarian',
        astral: '\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]'
    }, {
        name: 'Old_Italic',
        astral: '\uD800[\uDF00-\uDF23]'
    }, {
        name: 'Old_North_Arabian',
        astral: '\uD802[\uDE80-\uDE9F]'
    }, {
        name: 'Old_Permic',
        astral: '\uD800[\uDF50-\uDF7A]'
    }, {
        name: 'Old_Persian',
        astral: '\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]'
    }, {
        name: 'Old_South_Arabian',
        astral: '\uD802[\uDE60-\uDE7F]'
    }, {
        name: 'Old_Turkic',
        astral: '\uD803[\uDC00-\uDC48]'
    }, {
        name: 'Oriya',
        bmp: '\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77'
    }, {
        name: 'Osage',
        astral: '\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]'
    }, {
        name: 'Osmanya',
        astral: '\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]'
    }, {
        name: 'Pahawh_Hmong',
        astral: '\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]'
    }, {
        name: 'Palmyrene',
        astral: '\uD802[\uDC60-\uDC7F]'
    }, {
        name: 'Pau_Cin_Hau',
        astral: '\uD806[\uDEC0-\uDEF8]'
    }, {
        name: 'Phags_Pa',
        bmp: '\uA840-\uA877'
    }, {
        name: 'Phoenician',
        astral: '\uD802[\uDD00-\uDD1B\uDD1F]'
    }, {
        name: 'Psalter_Pahlavi',
        astral: '\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]'
    }, {
        name: 'Rejang',
        bmp: '\uA930-\uA953\uA95F'
    }, {
        name: 'Runic',
        bmp: '\u16A0-\u16EA\u16EE-\u16F8'
    }, {
        name: 'Samaritan',
        bmp: '\u0800-\u082D\u0830-\u083E'
    }, {
        name: 'Saurashtra',
        bmp: '\uA880-\uA8C5\uA8CE-\uA8D9'
    }, {
        name: 'Sharada',
        astral: '\uD804[\uDD80-\uDDCD\uDDD0-\uDDDF]'
    }, {
        name: 'Shavian',
        astral: '\uD801[\uDC50-\uDC7F]'
    }, {
        name: 'Siddham',
        astral: '\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]'
    }, {
        name: 'SignWriting',
        astral: '\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]'
    }, {
        name: 'Sinhala',
        bmp: '\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4',
        astral: '\uD804[\uDDE1-\uDDF4]'
    }, {
        name: 'Sora_Sompeng',
        astral: '\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]'
    }, {
        name: 'Sundanese',
        bmp: '\u1B80-\u1BBF\u1CC0-\u1CC7'
    }, {
        name: 'Syloti_Nagri',
        bmp: '\uA800-\uA82B'
    }, {
        name: 'Syriac',
        bmp: '\u0700-\u070D\u070F-\u074A\u074D-\u074F'
    }, {
        name: 'Tagalog',
        bmp: '\u1700-\u170C\u170E-\u1714'
    }, {
        name: 'Tagbanwa',
        bmp: '\u1760-\u176C\u176E-\u1770\u1772\u1773'
    }, {
        name: 'Tai_Le',
        bmp: '\u1950-\u196D\u1970-\u1974'
    }, {
        name: 'Tai_Tham',
        bmp: '\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD'
    }, {
        name: 'Tai_Viet',
        bmp: '\uAA80-\uAAC2\uAADB-\uAADF'
    }, {
        name: 'Takri',
        astral: '\uD805[\uDE80-\uDEB7\uDEC0-\uDEC9]'
    }, {
        name: 'Tamil',
        bmp: '\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA'
    }, {
        name: 'Tangut',
        astral: '\uD81B\uDFE0|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]'
    }, {
        name: 'Telugu',
        bmp: '\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F'
    }, {
        name: 'Thaana',
        bmp: '\u0780-\u07B1'
    }, {
        name: 'Thai',
        bmp: '\u0E01-\u0E3A\u0E40-\u0E5B'
    }, {
        name: 'Tibetan',
        bmp: '\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA'
    }, {
        name: 'Tifinagh',
        bmp: '\u2D30-\u2D67\u2D6F\u2D70\u2D7F'
    }, {
        name: 'Tirhuta',
        astral: '\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]'
    }, {
        name: 'Ugaritic',
        astral: '\uD800[\uDF80-\uDF9D\uDF9F]'
    }, {
        name: 'Vai',
        bmp: '\uA500-\uA62B'
    }, {
        name: 'Warang_Citi',
        astral: '\uD806[\uDCA0-\uDCF2\uDCFF]'
    }, {
        name: 'Yi',
        bmp: '\uA000-\uA48C\uA490-\uA4C6'
    }]);
};

module.exports = exports['default'];
},{}],"iuSj":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xregexp = require('./xregexp');

var _xregexp2 = _interopRequireDefault(_xregexp);

var _build = require('./addons/build');

var _build2 = _interopRequireDefault(_build);

var _matchrecursive = require('./addons/matchrecursive');

var _matchrecursive2 = _interopRequireDefault(_matchrecursive);

var _unicodeBase = require('./addons/unicode-base');

var _unicodeBase2 = _interopRequireDefault(_unicodeBase);

var _unicodeBlocks = require('./addons/unicode-blocks');

var _unicodeBlocks2 = _interopRequireDefault(_unicodeBlocks);

var _unicodeCategories = require('./addons/unicode-categories');

var _unicodeCategories2 = _interopRequireDefault(_unicodeCategories);

var _unicodeProperties = require('./addons/unicode-properties');

var _unicodeProperties2 = _interopRequireDefault(_unicodeProperties);

var _unicodeScripts = require('./addons/unicode-scripts');

var _unicodeScripts2 = _interopRequireDefault(_unicodeScripts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _build2.default)(_xregexp2.default);
(0, _matchrecursive2.default)(_xregexp2.default);
(0, _unicodeBase2.default)(_xregexp2.default);
(0, _unicodeBlocks2.default)(_xregexp2.default);
(0, _unicodeCategories2.default)(_xregexp2.default);
(0, _unicodeProperties2.default)(_xregexp2.default);
(0, _unicodeScripts2.default)(_xregexp2.default);

exports.default = _xregexp2.default;
module.exports = exports['default'];
},{"./xregexp":"+DOk","./addons/build":"DN8N","./addons/matchrecursive":"1/0w","./addons/unicode-base":"/s3h","./addons/unicode-blocks":"YWjk","./addons/unicode-categories":"nPWq","./addons/unicode-properties":"sqgh","./addons/unicode-scripts":"RtWW"}],"U3j9":[function(require,module,exports) {
'use strict';

const xRegExp = require('xregexp');

module.exports = (text, separator) => {
  if (typeof text !== 'string') {
    throw new TypeError('Expected a string');
  }

  separator = typeof separator === 'undefined' ? '_' : separator;
  const regex1 = xRegExp('([\\p{Ll}\\d])(\\p{Lu})', 'g');
  const regex2 = xRegExp('(\\p{Lu}+)(\\p{Lu}[\\p{Ll}\\d]+)', 'g');
  return text // TODO: Use this instead of `xregexp` when targeting Node.js 10:
  // .replace(/([\p{Lowercase_Letter}\d])(\p{Uppercase_Letter})/gu, `$1${separator}$2`)
  // .replace(/(\p{Lowercase_Letter}+)(\p{Uppercase_Letter}[\p{Lowercase_Letter}\d]+)/gu, `$1${separator}$2`)
  .replace(regex1, "$1".concat(separator, "$2")).replace(regex2, "$1".concat(separator, "$2")).toLowerCase();
};
},{"xregexp":"iuSj"}],"QGtg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.mount = mount;

var _decamelize = _interopRequireWildcard(require("decamelize"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//handle es6 / bundling
const decamelize = _decamelize['default'] || _decamelize;

function createElement(tag, attrs, ...children) {
  if (typeof tag === 'function') {
    const fn = tag;
    const props = attrs;
    props.children = children;
    return fn(props);
  } else {
    const el = document.createElement(tag);
    const map = attrs;

    for (let name in map) {
      if (name && map.hasOwnProperty(name)) {
        let value = map[name];

        if (name === 'className' && value !== void 0) {
          el.setAttribute('class', value.toString());
        } else if (value === false || value === null || value === undefined) {
          continue;
        } else if (value === true) {
          el.setAttribute(name, name);
        } else if (typeof value === 'function') {
          el[name.toLowerCase()] = value;
        } else if (typeof value === 'object') {
          el.setAttribute(name, flatten(value));
        } else {
          el.setAttribute(name, value.toString());
        }
      }
    }

    if (children && children.length > 0) {
      appendChildren(el, children);
    }

    return el;
  }
}

function flatten(o) {
  const arr = [];

  for (let prop in o) arr.push(`${decamelize(prop, '-')}:${o[prop]}`);

  return arr.join(';');
}

function addChild(parentElement, child) {
  if (child === null || child === undefined || typeof child === "boolean") {
    return;
  } else if (Array.isArray(child)) {
    appendChildren(parentElement, child);
  } else if (isElement(child)) {
    parentElement.appendChild(child);
  } else {
    parentElement.appendChild(document.createTextNode(child.toString()));
  }
}

function appendChildren(parentElement, children) {
  children.forEach(child => addChild(parentElement, child));
}

function isElement(el) {
  //nodeType cannot be zero https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  return !!el.nodeType;
}

function mount(element, container) {
  const activeChildPositions = getActiveChildPositions(container);
  container.innerHTML = '';

  if (element) {
    addChild(container, element);
    if (activeChildPositions) focusChildAtPosition(container, activeChildPositions);
  }
}

function focusChildAtPosition(element, childPositions) {
  while (element && childPositions.length) element = element.children.item(childPositions.shift());

  if (element) element.focus();
}

function getActiveChildPositions(containerElement) {
  var active = document.activeElement;
  var childPositions = [];

  while (active !== document.body && active !== containerElement) {
    childPositions.unshift(childPosition(active));
    active = active.parentElement;
  }

  if (active === containerElement && childPositions.length) return childPositions;
}

function childPosition(element) {
  let i = 0;

  while (element = element.previousElementSibling) i++;

  return i;
}
},{"decamelize":"U3j9"}],"AQhe":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _tsxCreateElement = require("tsx-create-element");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const KeyCodes = {
  ENTER: 13
};

const Table = props => {
  return (0, _tsxCreateElement.createElement)("table", {
    className: props.className
  }, props.children, props.rows.map((row, i) => (0, _tsxCreateElement.createElement)("tr", {
    className: props.rowClassName || '',
    onClick: e => props.onRowClick && props.onRowClick(e, i),
    tabIndex: props.onRowClick ? 0 : -1,
    onKeyUp: e => {
      if (e.keyCode === KeyCodes.ENTER && props.onRowClick) {
        props.onRowClick(e, i);
      }
    }
  }, row.cells.map((cell, i) => (0, _tsxCreateElement.createElement)("td", {
    className: cell.className || '',
    title: cell.title || ''
  }, cell.content)))));
};

exports.Table = Table;
},{"tsx-create-element":"QGtg"}],"P7sC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function () {
    return _controls.Table;
  }
});

var _controls = require("../controls");
},{"../controls":"AQhe"}],"28lv":[function(require,module,exports) {
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

},{}],"+tod":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEl = addEl;
exports.addDiv = addDiv;

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Create a new element as a child of another element.
 * @param tagName Tag name of the new tag to create.
 * @param parentElement Reference of the element to append to.
 * @returns new HTMLElement.
 */
function addEl(tagName, parentElement) {
  const el = document.createElement(tagName);
  parentElement.appendChild(el);
  return el;
}
/**
 * Create a new div HTMLElement as a child of another element.
 * @param parentElement Reference of the element to append to.
 * @param className Optional css class name to apply to the div.
 */


function addDiv(parentElement, className) {
  const div = addEl('div', parentElement);

  if (className) {
    div.className = className;
  }

  return div;
}
},{}],"/AEP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    Object.keys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  Object.keys(source).forEach(function (key) {
    if (!options.isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    } else {
      destination[key] = deepmerge(target[key], source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
var _default = deepmerge_1;
exports.default = _default;
},{}],"+1k3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.deepMerge = deepMerge;

var _deepmerge = _interopRequireWildcard(require("deepmerge"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const deepmerge = _deepmerge.default || _deepmerge;

function clone(objectToClone) {
  if (!objectToClone) return objectToClone;
  return deepmerge.all([objectToClone]);
}

const dontMerge = (destination, source) => source;

function deepMerge(...objectsToMerge) {
  const objects = objectsToMerge.filter(Boolean);
  return deepmerge.all(objects, {
    arrayMerge: dontMerge
  });
}
},{"deepmerge":"/AEP"}],"VlPU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.extend = extend;

function _default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);

  for (var key in definition) prototype[key] = definition[key];

  return prototype;
}
},{}],"LQD5":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = Color;
exports.default = color;
exports.rgbConvert = rgbConvert;
exports.rgb = rgb;
exports.Rgb = Rgb;
exports.hslConvert = hslConvert;
exports.hsl = hsl;
exports.brighter = exports.darker = void 0;

var _define = _interopRequireWildcard(require("./define"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function Color() {}

var darker = 0.7;
exports.darker = darker;
var brighter = 1 / darker;
exports.brighter = brighter;
var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};
(0, _define.default)(Color, color, {
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: function () {
    return this.rgb().hex();
  },
  toString: function () {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
  ) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
  : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
  : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
  : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
  : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
  : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
  : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
  : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define.default)(Rgb, rgb, (0, _define.extend)(Color, {
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function () {
    return this;
  },
  displayable: function () {
    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: function () {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function () {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;

  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }

  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define.default)(Hsl, hsl, (0, _define.extend)(Color, {
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function () {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function () {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }
}));
/* From FvD 13.37, CSS Color Module Level 3 */

function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
},{"./define":"VlPU"}],"SQ+m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rad2deg = exports.deg2rad = void 0;
var deg2rad = Math.PI / 180;
exports.deg2rad = deg2rad;
var rad2deg = 180 / Math.PI;
exports.rad2deg = rad2deg;
},{}],"tX36":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gray = gray;
exports.default = lab;
exports.Lab = Lab;
exports.lch = lch;
exports.hcl = hcl;
exports.Hcl = Hcl;

var _define = _interopRequireWildcard(require("./define"));

var _color = require("./color");

var _math = require("./math");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);

  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * _math.deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }

  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn),
      x,
      z;
  if (r === g && g === b) x = z = y;else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

(0, _define.default)(Lab, lab, (0, _define.extend)(_color.Color, {
  brighter: function (k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function (k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function () {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color.Rgb(lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);

  var h = Math.atan2(o.b, o.a) * _math.rad2deg;

  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define.default)(Hcl, hcl, (0, _define.extend)(_color.Color, {
  brighter: function (k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function (k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function () {
    return labConvert(this).rgb();
  }
}));
},{"./define":"VlPU","./color":"LQD5","./math":"SQ+m"}],"rRwN":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cubehelix;
exports.Cubehelix = Cubehelix;

var _define = _interopRequireWildcard(require("./define"));

var _color = require("./color");

var _math = require("./math");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color.Rgb)) o = (0, _color.rgbConvert)(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),
      // NaN if l=0 or l=1
  h = s ? Math.atan2(k, bl) * _math.rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

(0, _define.default)(Cubehelix, cubehelix, (0, _define.extend)(_color.Color, {
  brighter: function (k) {
    k = k == null ? _color.brighter : Math.pow(_color.brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? _color.darker : Math.pow(_color.darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function () {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math.deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color.Rgb(255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
  }
}));
},{"./define":"VlPU","./color":"LQD5","./math":"SQ+m"}],"BlmO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "color", {
  enumerable: true,
  get: function () {
    return _color.default;
  }
});
Object.defineProperty(exports, "rgb", {
  enumerable: true,
  get: function () {
    return _color.rgb;
  }
});
Object.defineProperty(exports, "hsl", {
  enumerable: true,
  get: function () {
    return _color.hsl;
  }
});
Object.defineProperty(exports, "lab", {
  enumerable: true,
  get: function () {
    return _lab.default;
  }
});
Object.defineProperty(exports, "hcl", {
  enumerable: true,
  get: function () {
    return _lab.hcl;
  }
});
Object.defineProperty(exports, "lch", {
  enumerable: true,
  get: function () {
    return _lab.lch;
  }
});
Object.defineProperty(exports, "gray", {
  enumerable: true,
  get: function () {
    return _lab.gray;
  }
});
Object.defineProperty(exports, "cubehelix", {
  enumerable: true,
  get: function () {
    return _cubehelix.default;
  }
});

var _color = _interopRequireWildcard(require("./color"));

var _lab = _interopRequireWildcard(require("./lab"));

var _cubehelix = _interopRequireDefault(require("./cubehelix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
},{"./color":"LQD5","./lab":"tX36","./cubehelix":"rRwN"}],"yCoU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorFromString = colorFromString;
exports.colorToString = colorToString;
exports.desaturate = desaturate;

var _d3Color = require("d3-color");

function rgbToDeckglColor(c) {
  return [c.r, c.g, c.b, c.opacity * 255];
}
/**
 * Convert a CSS color string to a Deck.gl Color array - (The rgba color of each object, in r, g, b, [a]. Each component is in the 0-255 range.).
 * @param cssColorSpecifier A CSS Color Module Level 3 specifier string.
 */


function colorFromString(cssColorSpecifier) {
  const c = (0, _d3Color.color)(cssColorSpecifier).rgb();
  return rgbToDeckglColor(c);
}
/**
 * Convert a Deck.gl color to a CSS rgba() string.
 * @param color A Deck.gl Color array - (The rgba color of each object, in r, g, b, [a]. Each component is in the 0-255 range.)
 */


function colorToString(color) {
  const c = [...color];

  if (c.length > 3) {
    c[3] /= 255;
  }

  return `rgba(${c.join(',')})`;
}

function desaturate(color, value) {
  const rgb = (0, _d3Color.rgb)(color[0], color[1], color[2], color[3] / 255);
  const hslColor = (0, _d3Color.hsl)(rgb);
  hslColor.s = value;
  const c = hslColor.rgb();
  return rgbToDeckglColor(c);
}
},{"d3-color":"BlmO"}],"nnlJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.use = use;
exports.base = void 0;
let vega = {
  CanvasHandler: null,
  inferType: null,
  inferTypes: null,
  loader: null,
  parse: null,
  read: null,
  renderModule: null,
  Renderer: null,
  sceneVisit: null,
  scheme: null,
  View: null
};
let deck = {
  COORDINATE_SYSTEM: null,
  Deck: null,
  Layer: null,
  LinearInterpolator: null,
  OrbitView: null,
  _OrbitController: null
};
let layers = {
  LineLayer: null,
  PolygonLayer: null,
  TextLayer: null
};
let luma = {
  CubeGeometry: null,
  fp64: null,
  Model: null
};
/**
 * References to dependency libraries.
 */

const base = {
  deck,
  layers,
  luma,
  vega
};
/**
 * Specify the dependency libraries to use for rendering.
 * @param vega Vega library.
 * @param deck deck/core library.
 * @param layers deck/layers library.
 * @param luma luma.gl library.
 */

exports.base = base;

function use(vega, deck, layers, luma) {
  base.deck = deck;
  base.layers = layers;
  base.luma = luma;
  base.vega = vega;
}
},{}],"gfAs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function concat(...args) {
  return args.reduce((p, c) => c ? p.concat(c) : p, []);
}
},{}],"kKa0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var _default = `\
#define SHADER_NAME cube-layer-fragment-shader

precision highp float;

varying vec4 vColor;

void main(void) {
  gl_FragColor = vColor;

  // use highlight color if this fragment belongs to the selected object.
  gl_FragColor = picking_filterHighlightColor(gl_FragColor);

  // use picking color if rendering to picking FBO.
  gl_FragColor = picking_filterPickingColor(gl_FragColor);
}
`;
exports.default = _default;
},{}],"JuFU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStage = createStage;
exports.min3dDepth = exports.defaultView = exports.lineZ = exports.groupStrokeWidth = exports.defaultPresenterConfig = exports.defaultPresenterStyle = exports.minWidth = exports.minHeight = void 0;
const minHeight = '100px';
exports.minHeight = minHeight;
const minWidth = '100px';
exports.minWidth = minWidth;
const lightSettings = {
  "2d": {},
  "3d": {
    lightsPosition: [-122.45, 37.66, 8000, -122.0, 38.0, 8000],
    ambientRatio: 0.3,
    diffuseRatio: 0.6,
    specularRatio: 0.4,
    lightsStrength: [0.3, 0.0, 0.8, 0.0],
    numberOfLights: 2
  }
};
const defaultPresenterStyle = {
  cssPrefix: 'vega-deckgl-',
  defaultCubeColor: [128, 128, 128, 171],
  highlightColor: [0, 0, 0, 255],
  lightSettings
};
exports.defaultPresenterStyle = defaultPresenterStyle;
const defaultPresenterConfig = {
  onCubeClick: (e, cube) => {},
  onCubeHover: (e, cube) => {},
  transitionDurations: {
    color: 100,
    position: 600,
    size: 600,
    view: 600
  }
};
exports.defaultPresenterConfig = defaultPresenterConfig;

function createStage(view) {
  const stage = {
    view,
    cubeData: [],
    axes: {
      x: [],
      y: []
    },
    gridLines: [],
    textData: [],
    legend: {
      rows: {}
    },
    facets: []
  };
  return stage;
}

const groupStrokeWidth = 1;
exports.groupStrokeWidth = groupStrokeWidth;
const lineZ = -1;
exports.lineZ = lineZ;
const defaultView = "2d";
exports.defaultView = defaultView;
const min3dDepth = 0.05;
exports.min3dDepth = min3dDepth;
},{}],"3LG2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaults = require("../defaults");

// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var _default = `\
#define SHADER_NAME cube-layer-vertex-shader

attribute vec3 positions;
attribute vec3 normals;

attribute vec3 instancePositions;
attribute vec2 instancePositions64xyLow;
attribute vec3 instanceSizes;
attribute vec4 instanceColors;
attribute vec3 instancePickingColors;

// Custom uniforms
uniform float lightingMix;

// Result
varying vec4 vColor;

void main(void) {

  // if alpha == 0.0, do not render element
  float noRender = float(instanceColors.a == 0.0);
  float finalXScale = project_scale(instanceSizes.x) * mix(1.0, 0.0, noRender);
  float finalYScale = project_scale(instanceSizes.y) * mix(1.0, 0.0, noRender);
  float finalZScale = project_scale(instanceSizes.z) * mix(1.0, 0.0, noRender);

  // cube geometry vertics are between -1 to 1, scale and transform it to between 0, 1
  vec3 offset = vec3(
    (positions.x + 1.0) / 2.0 * finalXScale,
    (positions.y + 1.0) / 2.0 * finalYScale,
    (positions.z + 1.0) / 2.0 * finalZScale);

  // extrude positions
  vec4 position_worldspace;
  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset, position_worldspace);

  float lightWeight = 1.0;
  
  //allow for a small amount of error around the min3dDepth 
  if (instanceSizes.z >= ${_defaults.min3dDepth} - 0.0001) {
    lightWeight = lighting_getLightWeight(
      position_worldspace.xyz, // the w component is always 1.0
      normals
    );
  }

  vec3 lightWeightedColor = lightWeight * instanceColors.rgb;
  vec3 mixedLight = mix(instanceColors.rgb, lightWeightedColor, lightingMix);
  vec4 color = vec4(mixedLight, instanceColors.a) / 255.0;
  vColor = color;

  // Set color to be rendered to picking fbo (also used to check for selection highlight).
  picking_setPickingColor(instancePickingColors);
}
`;
exports.default = _default;
},{"../defaults":"JuFU"}],"OJks":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CubeLayer = void 0;

var _cubeLayerFragment = _interopRequireDefault(require("./cube-layer-fragment.glsl"));

var _cubeLayerVertex = _interopRequireDefault(require("./cube-layer-vertex.glsl"));

var _base = require("../base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// Adapted from https://github.com/uber/deck.gl/blob/5.3-release/modules/layers/src/grid-cell-layer/grid-cell-layer.js
//https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
const UNSIGNED_BYTE = 0x1401;
const DEFAULT_COLOR = [255, 0, 255, 255];
const defaultProps = {
  lightingMix: 0.5,
  fp64: false,
  getSize: x => x.size,
  getPosition: x => x.position,
  getColor: x => x.color
};

function _CubeLayer(props) {
  //dynamic superclass, since we don't know have deck.Layer in the declaration phase
  class __CubeLayer extends _base.base.deck.Layer {
    getShaders() {
      const projectModule = this.use64bitProjection() ? 'project64' : 'project32';
      return {
        vs: _cubeLayerVertex.default,
        fs: _cubeLayerFragment.default,
        modules: [projectModule, 'lighting', 'picking']
      };
    }

    initializeState() {
      const attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        instancePositions: {
          size: 3,
          transition: true,
          accessor: 'getPosition'
        },
        instancePositions64xyLow: {
          size: 3,
          accessor: 'getPosition',
          update: this.calculateInstancePositions64xyLow
        },
        instanceSizes: {
          size: 3,
          transition: true,
          accessor: 'getSize'
        },
        instanceColors: {
          size: 4,
          type: UNSIGNED_BYTE,
          transition: true,
          accessor: 'getColor',
          defaultValue: DEFAULT_COLOR
        }
      });
    }

    updateState({
      props,
      oldProps,
      changeFlags
    }) {
      super.updateState({
        props,
        oldProps,
        changeFlags
      }); //TODO add parameter type to deck.gl-typings
      // Re-generate model if geometry changed

      if (props.fp64 !== oldProps.fp64) {
        const {
          gl
        } = this.context;

        if (this.state.model) {
          this.state.model.delete();
        }

        this.setState({
          model: this._getModel(gl)
        });
        this.getAttributeManager().invalidateAll();
      }
    }

    _getModel(gl) {
      return new _base.base.luma.Model(gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _base.base.luma.CubeGeometry(),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }

    draw({
      uniforms
    }) {
      let {
        lightingMix
      } = this.props;

      if (this.props.interpolator && this.props.interpolator.layerInterpolatedProps) {
        lightingMix = this.props.interpolator.layerInterpolatedProps.lightingMix;
      }

      this.state.model.render(Object.assign({}, uniforms, {
        lightingMix
      }));
    }

    calculateInstancePositions64xyLow(attribute) {
      const isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(2);
        return;
      }

      const {
        data,
        getPosition
      } = this.props;
      const {
        value
      } = attribute;
      let i = 0;

      for (const point of data) {
        const position = getPosition(point);
        value[i++] = _base.base.luma.fp64.fp64LowPart(position[0]);
        value[i++] = _base.base.luma.fp64.fp64LowPart(position[1]);
      }
    }

  }

  __CubeLayer.layerName = 'CubeLayer';
  __CubeLayer.defaultProps = defaultProps;
  const instance = new __CubeLayer(props);
  return instance;
} //signature to allow this function to be used with the 'new' keyword.
//need to trick the compiler by casting to 'any'.

/**
 * CubeLayer - a Deck.gl layer to render cuboids.
 * This is instantiatable by calling `new CubeLayer()`.
 */


const CubeLayer = _CubeLayer;
exports.CubeLayer = CubeLayer;
},{"./cube-layer-fragment.glsl":"kKa0","./cube-layer-vertex.glsl":"3LG2","../base":"nnlJ"}],"4wV6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = linear;

function linear(t) {
  return +t;
}
},{}],"hUrk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quadIn = quadIn;
exports.quadOut = quadOut;
exports.quadInOut = quadInOut;

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
},{}],"M57D":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cubicIn = cubicIn;
exports.cubicOut = cubicOut;
exports.cubicInOut = cubicInOut;

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
},{}],"uaRh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyInOut = exports.polyOut = exports.polyIn = void 0;
var exponent = 3;

var polyIn = function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;
  return polyIn;
}(exponent);

exports.polyIn = polyIn;

var polyOut = function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;
  return polyOut;
}(exponent);

exports.polyOut = polyOut;

var polyInOut = function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;
  return polyInOut;
}(exponent);

exports.polyInOut = polyInOut;
},{}],"Hzi1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sinIn = sinIn;
exports.sinOut = sinOut;
exports.sinInOut = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}
},{}],"1MKk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expIn = expIn;
exports.expOut = expOut;
exports.expInOut = expInOut;

function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}
},{}],"EaEa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.circleIn = circleIn;
exports.circleOut = circleOut;
exports.circleInOut = circleInOut;

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}
},{}],"SQ3i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bounceIn = bounceIn;
exports.bounceOut = bounceOut;
exports.bounceInOut = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}
},{}],"yoXf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backInOut = exports.backOut = exports.backIn = void 0;
var overshoot = 1.70158;

var backIn = function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;
  return backIn;
}(overshoot);

exports.backIn = backIn;

var backOut = function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;
  return backOut;
}(overshoot);

exports.backOut = backOut;

var backInOut = function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;
  return backInOut;
}(overshoot);

exports.backInOut = backInOut;
},{}],"DpDB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elasticInOut = exports.elasticOut = exports.elasticIn = void 0;
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function (a) {
    return custom(a, p * tau);
  };

  elasticIn.period = function (p) {
    return custom(a, p);
  };

  return elasticIn;
}(amplitude, period);

exports.elasticIn = elasticIn;

var elasticOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function (a) {
    return custom(a, p * tau);
  };

  elasticOut.period = function (p) {
    return custom(a, p);
  };

  return elasticOut;
}(amplitude, period);

exports.elasticOut = elasticOut;

var elasticInOut = function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function (a) {
    return custom(a, p * tau);
  };

  elasticInOut.period = function (p) {
    return custom(a, p);
  };

  return elasticInOut;
}(amplitude, period);

exports.elasticInOut = elasticInOut;
},{}],"7bMs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "easeLinear", {
  enumerable: true,
  get: function () {
    return _linear.linear;
  }
});
Object.defineProperty(exports, "easeQuad", {
  enumerable: true,
  get: function () {
    return _quad.quadInOut;
  }
});
Object.defineProperty(exports, "easeQuadIn", {
  enumerable: true,
  get: function () {
    return _quad.quadIn;
  }
});
Object.defineProperty(exports, "easeQuadOut", {
  enumerable: true,
  get: function () {
    return _quad.quadOut;
  }
});
Object.defineProperty(exports, "easeQuadInOut", {
  enumerable: true,
  get: function () {
    return _quad.quadInOut;
  }
});
Object.defineProperty(exports, "easeCubic", {
  enumerable: true,
  get: function () {
    return _cubic.cubicInOut;
  }
});
Object.defineProperty(exports, "easeCubicIn", {
  enumerable: true,
  get: function () {
    return _cubic.cubicIn;
  }
});
Object.defineProperty(exports, "easeCubicOut", {
  enumerable: true,
  get: function () {
    return _cubic.cubicOut;
  }
});
Object.defineProperty(exports, "easeCubicInOut", {
  enumerable: true,
  get: function () {
    return _cubic.cubicInOut;
  }
});
Object.defineProperty(exports, "easePoly", {
  enumerable: true,
  get: function () {
    return _poly.polyInOut;
  }
});
Object.defineProperty(exports, "easePolyIn", {
  enumerable: true,
  get: function () {
    return _poly.polyIn;
  }
});
Object.defineProperty(exports, "easePolyOut", {
  enumerable: true,
  get: function () {
    return _poly.polyOut;
  }
});
Object.defineProperty(exports, "easePolyInOut", {
  enumerable: true,
  get: function () {
    return _poly.polyInOut;
  }
});
Object.defineProperty(exports, "easeSin", {
  enumerable: true,
  get: function () {
    return _sin.sinInOut;
  }
});
Object.defineProperty(exports, "easeSinIn", {
  enumerable: true,
  get: function () {
    return _sin.sinIn;
  }
});
Object.defineProperty(exports, "easeSinOut", {
  enumerable: true,
  get: function () {
    return _sin.sinOut;
  }
});
Object.defineProperty(exports, "easeSinInOut", {
  enumerable: true,
  get: function () {
    return _sin.sinInOut;
  }
});
Object.defineProperty(exports, "easeExp", {
  enumerable: true,
  get: function () {
    return _exp.expInOut;
  }
});
Object.defineProperty(exports, "easeExpIn", {
  enumerable: true,
  get: function () {
    return _exp.expIn;
  }
});
Object.defineProperty(exports, "easeExpOut", {
  enumerable: true,
  get: function () {
    return _exp.expOut;
  }
});
Object.defineProperty(exports, "easeExpInOut", {
  enumerable: true,
  get: function () {
    return _exp.expInOut;
  }
});
Object.defineProperty(exports, "easeCircle", {
  enumerable: true,
  get: function () {
    return _circle.circleInOut;
  }
});
Object.defineProperty(exports, "easeCircleIn", {
  enumerable: true,
  get: function () {
    return _circle.circleIn;
  }
});
Object.defineProperty(exports, "easeCircleOut", {
  enumerable: true,
  get: function () {
    return _circle.circleOut;
  }
});
Object.defineProperty(exports, "easeCircleInOut", {
  enumerable: true,
  get: function () {
    return _circle.circleInOut;
  }
});
Object.defineProperty(exports, "easeBounce", {
  enumerable: true,
  get: function () {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceIn", {
  enumerable: true,
  get: function () {
    return _bounce.bounceIn;
  }
});
Object.defineProperty(exports, "easeBounceOut", {
  enumerable: true,
  get: function () {
    return _bounce.bounceOut;
  }
});
Object.defineProperty(exports, "easeBounceInOut", {
  enumerable: true,
  get: function () {
    return _bounce.bounceInOut;
  }
});
Object.defineProperty(exports, "easeBack", {
  enumerable: true,
  get: function () {
    return _back.backInOut;
  }
});
Object.defineProperty(exports, "easeBackIn", {
  enumerable: true,
  get: function () {
    return _back.backIn;
  }
});
Object.defineProperty(exports, "easeBackOut", {
  enumerable: true,
  get: function () {
    return _back.backOut;
  }
});
Object.defineProperty(exports, "easeBackInOut", {
  enumerable: true,
  get: function () {
    return _back.backInOut;
  }
});
Object.defineProperty(exports, "easeElastic", {
  enumerable: true,
  get: function () {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticIn", {
  enumerable: true,
  get: function () {
    return _elastic.elasticIn;
  }
});
Object.defineProperty(exports, "easeElasticOut", {
  enumerable: true,
  get: function () {
    return _elastic.elasticOut;
  }
});
Object.defineProperty(exports, "easeElasticInOut", {
  enumerable: true,
  get: function () {
    return _elastic.elasticInOut;
  }
});

var _linear = require("./linear");

var _quad = require("./quad");

var _cubic = require("./cubic");

var _poly = require("./poly");

var _sin = require("./sin");

var _exp = require("./exp");

var _circle = require("./circle");

var _bounce = require("./bounce");

var _back = require("./back");

var _elastic = require("./elastic");
},{"./linear":"4wV6","./quad":"hUrk","./cubic":"M57D","./poly":"uaRh","./sin":"Hzi1","./exp":"1MKk","./circle":"EaEa","./bounce":"SQ3i","./back":"yoXf","./elastic":"DpDB"}],"BGdw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayers = getLayers;
exports.getCubeLayer = getCubeLayer;
exports.getCubes = getCubes;

var _base = require("./base");

var _array = require("./array");

var _cubeLayer = require("./cube-layer/cube-layer");

var _d3Ease = require("d3-ease");

var _constants = require("./constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function getLayers(presenter, config, stage, highlightColor, lightSettings, lightingMix, interpolator, guideLines) {
  const cubeLayer = newCubeLayer(presenter, config, stage.cubeData, highlightColor, lightSettings, lightingMix, interpolator);
  const {
    x,
    y
  } = stage.axes;
  const lines = (0, _array.concat)(stage.gridLines, guideLines);
  const texts = [...stage.textData];
  [x, y].forEach(axes => {
    axes.forEach(axis => {
      if (axis.domain) lines.push(axis.domain);
      if (axis.ticks) lines.push.apply(lines, axis.ticks);
      if (axis.tickText) texts.push.apply(texts, axis.tickText);
    });
  });

  if (stage.facets) {
    stage.facets.forEach(f => {
      if (f.lines) lines.push.apply(lines, f.lines);
      if (f.facetTitle) texts.push(f.facetTitle);
    });
  }

  const lineLayer = newLineLayer(_constants.layerNames.lines, lines);
  const textLayer = newTextLayer(_constants.layerNames.text, texts);
  return [textLayer, cubeLayer, lineLayer];
}

function newCubeLayer(presenter, config, cubeData, highlightColor, lightSettings, lightingMix, interpolator) {
  const getPosition = getTiming(config.transitionDurations.position, _d3Ease.easeExpInOut);
  const getSize = getTiming(config.transitionDurations.size, _d3Ease.easeExpInOut);
  const getColor = getTiming(config.transitionDurations.color);
  const cubeLayerProps = {
    interpolator,
    lightingMix,
    id: _constants.layerNames.cubes,
    data: cubeData,
    coordinateSystem: _base.base.deck.COORDINATE_SYSTEM.IDENTITY,
    pickable: true,
    autoHighlight: true,
    highlightColor,
    onClick: (o, e) => {
      config.onCubeClick(e && e.srcEvent, o.object);
    },
    onHover: (o, e) => {
      if (o.index === -1) {
        presenter.deckgl.interactiveState.onCube = false;
      } else {
        presenter.deckgl.interactiveState.onCube = true;
        config.onCubeHover(e && e.srcEvent, o.object);
      }
    },
    lightSettings,
    transitions: {
      getPosition,
      getColor,
      getSize
    }
  };
  return new _cubeLayer.CubeLayer(cubeLayerProps);
}

function newLineLayer(id, data) {
  return new _base.base.layers.LineLayer({
    id,
    data,
    coordinateSystem: _base.base.deck.COORDINATE_SYSTEM.IDENTITY,
    getColor: o => o.color,
    getStrokeWidth: o => o.strokeWidth
  });
}

function newTextLayer(id, data) {
  return new _base.base.layers.TextLayer({
    id,
    data,
    coordinateSystem: _base.base.deck.COORDINATE_SYSTEM.IDENTITY,
    getColor: o => o.color,
    getTextAnchor: o => o.textAnchor,
    getSize: o => o.size,
    getAngle: o => o.angle
  });
}

function getTiming(duration, easing) {
  let timing;

  if (duration) {
    timing = {
      duration
    };

    if (easing) {
      timing.easing = easing;
    }
  }

  return timing;
}

function getCubeLayer(deckProps) {
  return deckProps.layers.filter(layer => layer.id === _constants.layerNames.cubes)[0];
}

function getCubes(deckProps) {
  const cubeLayer = getCubeLayer(deckProps);
  if (!cubeLayer) return;
  const cubeLayerProps = cubeLayer.props;
  return cubeLayerProps.data;
}
},{"./base":"nnlJ","./array":"gfAs","./cube-layer/cube-layer":"OJks","d3-ease":"7bMs","./constants":"ipKi"}],"y8T8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addDiv", {
  enumerable: true,
  get: function () {
    return _htmlHelpers.addDiv;
  }
});
Object.defineProperty(exports, "addEl", {
  enumerable: true,
  get: function () {
    return _htmlHelpers.addEl;
  }
});
Object.defineProperty(exports, "clone", {
  enumerable: true,
  get: function () {
    return _clone.clone;
  }
});
Object.defineProperty(exports, "deepMerge", {
  enumerable: true,
  get: function () {
    return _clone.deepMerge;
  }
});
Object.defineProperty(exports, "colorFromString", {
  enumerable: true,
  get: function () {
    return _color.colorFromString;
  }
});
Object.defineProperty(exports, "colorToString", {
  enumerable: true,
  get: function () {
    return _color.colorToString;
  }
});
Object.defineProperty(exports, "getCubeLayer", {
  enumerable: true,
  get: function () {
    return _layers.getCubeLayer;
  }
});
Object.defineProperty(exports, "getCubes", {
  enumerable: true,
  get: function () {
    return _layers.getCubes;
  }
});

var _htmlHelpers = require("../htmlHelpers");

var _clone = require("../clone");

var _color = require("../color");

var _layers = require("../layers");
},{"../htmlHelpers":"+tod","../clone":"+1k3","../color":"yCoU","../layers":"BGdw"}],"LdiJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.box = box;
exports.default = void 0;

var _base = require("../base");

var _color = require("../color");

var _defaults = require("../defaults");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const markStager = (options, stage, scene, x, y, groupType) => {
  _base.base.vega.sceneVisit(scene, function (item) {
    var x1, y1, x2, y2;
    x1 = item.x || 0;
    y1 = item.y || 0;
    x2 = item.x2 != null ? item.x2 : x1;
    y2 = item.y2 != null ? item.y2 : y1;
    const lineItem = styledLine(x1 + x - options.offsetX, y1 + y - options.offsetY, x2 + x - options.offsetX, y2 + y - options.offsetY, item.stroke, item.strokeWidth);

    if (item.mark.role === 'axis-tick') {
      options.currAxis.ticks.push(lineItem);
    } else if (item.mark.role === 'axis-domain') {
      options.currAxis.domain = lineItem;
    } else {
      stage.gridLines.push(lineItem);
    }
  });
};

function styledLine(x1, y1, x2, y2, stroke, strokeWidth) {
  const line = {
    sourcePosition: [x1, -y1, _defaults.lineZ],
    targetPosition: [x2, -y2, _defaults.lineZ],
    color: (0, _color.colorFromString)(stroke),
    strokeWidth: strokeWidth * 10 //translate width to deck.gl

  };
  return line;
}

function box(gx, gy, height, width, stroke, strokeWidth, diagonals = false) {
  const lines = [styledLine(gx, gy, gx + width, gy, stroke, strokeWidth), styledLine(gx + width, gy, gx + width, gy + height, stroke, strokeWidth), styledLine(gx + width, gy + height, gx, gy + height, stroke, strokeWidth), styledLine(gx, gy + height, gx, gy, stroke, strokeWidth)];

  if (diagonals) {
    lines.push(styledLine(gx, gy, gx + width, gy + height, stroke, strokeWidth));
    lines.push(styledLine(gx, gy + height, gx + width, gy, stroke, strokeWidth));
  }

  return lines;
}

var _default = markStager;
exports.default = _default;
},{"../base":"nnlJ","../color":"yCoU","../defaults":"JuFU"}],"tDiU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresenterElement = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * HTML elements outputted by the presenter.
 */
var PresenterElement;
exports.PresenterElement = PresenterElement;

(function (PresenterElement) {
  PresenterElement[PresenterElement["root"] = 0] = "root";
  PresenterElement[PresenterElement["gl"] = 1] = "gl";
  PresenterElement[PresenterElement["panel"] = 2] = "panel";
  PresenterElement[PresenterElement["legend"] = 3] = "legend";
  PresenterElement[PresenterElement["vegaControls"] = 4] = "vegaControls";
})(PresenterElement || (exports.PresenterElement = PresenterElement = {}));
},{}],"r2Xb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializePanel = initializePanel;
exports.className = className;

var _tsxCreateElement = require("tsx-create-element");

var _defaults = require("./defaults");

var _enums = require("./enums");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function initializePanel(presenter) {
  const rootDiv = (0, _tsxCreateElement.createElement)("div", {
    className: className(_enums.PresenterElement.root, presenter)
  }, (0, _tsxCreateElement.createElement)("div", {
    className: className(_enums.PresenterElement.gl, presenter),
    style: {
      minHeight: _defaults.minHeight,
      minWidth: _defaults.minWidth
    }
  }), (0, _tsxCreateElement.createElement)("div", {
    className: className(_enums.PresenterElement.panel, presenter)
  }, (0, _tsxCreateElement.createElement)("div", {
    className: className(_enums.PresenterElement.vegaControls, presenter)
  }), (0, _tsxCreateElement.createElement)("div", {
    className: className(_enums.PresenterElement.legend, presenter)
  })));
  (0, _tsxCreateElement.mount)(rootDiv, presenter.el);
}

function className(type, presenter) {
  return `${presenter.style.cssPrefix}${_enums.PresenterElement[type]}`;
}
},{"tsx-create-element":"QGtg","./defaults":"JuFU","./enums":"tDiU"}],"H2bu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrbitControllerClass = createOrbitControllerClass;

var _base = require("../base");

function createOrbitControllerClass(factoryOptions) {
  function wrapper(props) {
    class OrbitControllerInternal extends _base.base.deck._OrbitController {
      constructor(props) {
        super(props);
        this.invertPan = true;
      }

      _onDoubleTap(event) {
        if (factoryOptions && factoryOptions.doubleClickHandler) {
          factoryOptions.doubleClickHandler(event, this);
        } else {
          super._onDoubleTap(event);
        }
      }

      _onPanRotate(event) {
        if (!this.dragRotate) {
          return false;
        }

        return this._onPanRotateStandard(event);
      }

    }

    const instance = new OrbitControllerInternal(props);
    return instance;
  }

  return wrapper;
}
},{"../base":"nnlJ"}],"KTEt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeckGLClassesForPresenter = createDeckGLClassesForPresenter;

var _base = require("../base");

var _orbitController = require("./orbitController");

//adapted from https://github.com/uber/deck.gl/blob/5.3-release/modules/lite/src/deckgl.js
const CANVAS_STYLE = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}; // Create canvas elements for map and deck

function createCanvas(props) {
  let {
    container = document.body
  } = props;

  if (typeof container === 'string') {
    container = document.getElementById(container);
  }

  if (!container) {
    throw Error('Deck: container not found');
  } // Add DOM elements


  const containerStyle = window.getComputedStyle(container);

  if (containerStyle.position === 'static') {
    container.style.position = 'relative';
  }

  const deckCanvas = document.createElement('canvas');
  container.appendChild(deckCanvas);
  Object.assign(deckCanvas.style, CANVAS_STYLE);
  return {
    container,
    deckCanvas
  };
}
/**
 * Creates Deck.gl classes for rendering WebGL.
 * DEck.gl is instantiatable by calling `new createDeckGLClassesForPresenter(controlleroptions)(deckProps)`.
 */


function createDeckGLClassesForPresenter(factoryOptions) {
  const OrbitControllerClass = (0, _orbitController.createOrbitControllerClass)(factoryOptions); //dynamic superclass lets us create a subclass at execution phase instead of declaration phase.
  //This allows us to retrieve Deck from either UMD or ES6 consumers of this class.

  function wrapper(props) {
    /**
     * @params container (Element) - DOM element to add deck.gl canvas to
     * @params controller (Object) - Controller class. Leave empty for auto detection
     */
    class DeckGLInternal extends _base.base.deck.Deck {
      constructor(props = {}) {
        if (typeof document === 'undefined') {
          // Not browser
          throw Error('Deck can only be used in the browser');
        }

        const {
          deckCanvas
        } = createCanvas(props);
        const viewState = props.initialViewState || props.viewState || {};
        super(Object.assign({}, props, {
          width: '100%',
          height: '100%',
          canvas: deckCanvas,
          controller: OrbitControllerClass,
          initialViewState: viewState
        })); // Callback for the controller

        this._updateViewState = params => {
          if (this.onViewStateChange) {
            this.onViewStateChange(params);
          }
        };
      }

      setProps(props) {
        // this._updateViewState must be bound to `this`
        // but we don't have access to the current instance before calling super().
        if ('onViewStateChange' in props && this._updateViewState) {
          // This is called at least once at _onRendererInitialized
          this.onViewStateChange = props.onViewStateChange;
          props.onViewStateChange = this._updateViewState;
        }

        super.setProps(props);
      }

    }

    const instance = new DeckGLInternal(props);
    return instance;
  }

  return {
    OrbitControllerClass,
    DeckGL_Class: wrapper
  };
}
},{"../base":"nnlJ","./orbitController":"H2bu"}],"JaRI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendView = void 0;

var _tsxCreateElement = require("tsx-create-element");

var _controls = require("./controls");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const LegendView = props => {
  const rows = [];

  const addRow = (row, i) => {
    const fn = symbolMap[row.symbol.shape];
    let jsx;

    if (fn) {
      jsx = fn(row.symbol);
    } else {
      jsx = (0, _tsxCreateElement.createElement)("span", null, "x"); //console.log(`need to render ${row.symbol.shape} symbol shape`);
    }

    rows.push({
      cells: [{
        className: 'symbol',
        content: jsx
      }, {
        className: 'label',
        content: row.label,
        title: row.label
      }]
    });
  };

  var sorted = Object.keys(props.legend.rows).sort((a, b) => +a - +b);
  sorted.forEach(i => addRow(props.legend.rows[i], +i));

  if (sorted.length) {
    return (0, _tsxCreateElement.createElement)(_controls.Table, {
      rows: rows,
      rowClassName: "legend-row",
      onRowClick: (e, i) => props.onClick(e, props.legend, i)
    }, props.legend.title !== void 0 && (0, _tsxCreateElement.createElement)("tr", null, (0, _tsxCreateElement.createElement)("th", {
      colSpan: 2
    }, props.legend.title)));
  }
};

exports.LegendView = LegendView;
const symbolMap = {
  'square': function (symbol) {
    return (0, _tsxCreateElement.createElement)("div", {
      style: {
        height: `${symbol.bounds.y2 - symbol.bounds.y1}px`,
        width: `${symbol.bounds.x2 - symbol.bounds.x1}px`,
        backgroundColor: symbol.fill,
        borderColor: symbol.fill
      }
    });
  }
};
},{"tsx-create-element":"QGtg","./controls":"AQhe"}],"xmKH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinearInterpolator = void 0;

var _base = require("../base");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function wrapper(props) {
  class LinearInterpolatorInternal extends _base.base.deck.LinearInterpolator {
    constructor(transitionProps) {
      super(transitionProps);
    }

    interpolateProps(viewStateStartProps, viewStateEndProps, t) {
      if (this.layerStartProps && this.layerEndProps) {
        this.layerInterpolatedProps = super.interpolateProps(this.layerStartProps, this.layerEndProps, t);
      }

      return super.interpolateProps(viewStateStartProps, viewStateEndProps, t);
    }

  }

  const instance = new LinearInterpolatorInternal(props);
  return instance;
}

const LinearInterpolator = wrapper;
exports.LinearInterpolator = LinearInterpolator;
},{"../base":"nnlJ"}],"eg4f":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchCubeArray = patchCubeArray;

function patchCubeArray(allocatedSize, empty, cubes) {
  const patched = new Array(allocatedSize);
  patched.fill(empty);
  cubes.forEach(cube => patched[cube.ordinal] = cube);
  return patched;
}
},{}],"/bdV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = require("../base");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const legendMap = {
  'legend-title': function (legend, textItem) {
    legend.title = textItem.text;
  },
  'legend-symbol': function (legend, symbol) {
    const {
      bounds,
      fill,
      shape
    } = symbol; //this object is safe for serialization

    const legendRowSymbol = {
      bounds,
      fill,
      shape
    };
    const i = symbol.datum.index;
    legend.rows[i] = legend.rows[i] || {};
    legend.rows[i].symbol = legendRowSymbol;
  },
  'legend-label': function (legend, label) {
    const i = label.datum.index;
    legend.rows[i] = legend.rows[i] || {};
    const row = legend.rows[i];
    row.label = row.value = label.text;
  }
};

const markStager = (options, stage, scene, x, y, groupType) => {
  _base.base.vega.sceneVisit(scene, function (item) {
    const fn = legendMap[item.mark.role];

    if (fn) {
      fn(stage.legend, item);
    } else {//console.log(`need to render legend ${item.mark.role}`);
    }
  });
};

var _default = markStager;
exports.default = _default;
},{"../base":"nnlJ"}],"e5xB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = require("../base");

var _color = require("../color");

var _defaults = require("../defaults");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const markStager = (options, stage, scene, x, y, groupType) => {
  let i = 0;

  _base.base.vega.sceneVisit(scene, function (item) {
    //for orthographic (2d) - always use 0 or else Deck will not show them
    const z = stage.view === "2d" ? 0 : item.z || 0;
    const depth = (stage.view === "2d" ? 0 : item.depth || 0) + _defaults.min3dDepth; //change direction of y from SVG to GL

    const ty = -1;
    let ordinal = i;

    if (item.datum.GL_ORDINAL !== void 0) {
      options.ordinalsSpecified = true;
      ordinal = item.datum.GL_ORDINAL;

      if (ordinal > options.maxOrdinal) {
        options.maxOrdinal = ordinal;
      }
    }

    const cube = {
      ordinal,
      size: [item.width, item.height, depth],
      position: [x + (item.x || 0) - options.offsetX, ty * (y + (item.y || 0) - options.offsetY) - item.height, z],
      color: item.fill ? (0, _color.colorFromString)(item.fill) : [128, 128, 128, 128]
    };
    stage.cubeData.push(cube);
    i++;
  });
};

var _default = markStager;
exports.default = _default;
},{"../base":"nnlJ","../color":"yCoU","../defaults":"JuFU"}],"U2Rd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = require("../base");

var _color = require("../color");

const markStager = (options, stage, scene, x, y, groupType) => {
  //scale Deck.Gl text to Vega size
  const fontScale = 6; //Deck.gl centers text on Y. TODO: is this correct on x axis?

  const offsetYCenter = 16; //change direction of y from SVG to GL

  const ty = -1;

  _base.base.vega.sceneVisit(scene, function (item) {
    if (!item.text) return;
    const size = item.fontSize * fontScale;
    const textItem = {
      color: (0, _color.colorFromString)(item.fill),
      text: item.text.toString(),
      position: [x + item.x - options.offsetX, ty * (y + item.y + offsetYCenter - options.offsetY), 0],
      size,
      angle: convertAngle(item.angle),
      textAnchor: convertAlignment(item.align),
      alignmentBaseline: convertBaseline(item.baseline)
    };

    if (item.mark.role === "axis-label") {
      const tickText = textItem;
      tickText.value = item.datum['value'];
      options.currAxis.tickText.push(tickText);
    } else if (options.currFacetRect && !options.currFacetRect.facetTitle) {
      options.currFacetRect.facetTitle = textItem;
    } else {
      stage.textData.push(textItem);
    }
  });
};

function convertAngle(vegaTextAngle) {
  return 360 - vegaTextAngle;
}

function convertAlignment(textAlign) {
  switch (textAlign) {
    case 'center':
      return 'middle';

    case 'left':
      return 'start';

    case 'right':
      return 'end';
  }
}

function convertBaseline(baseline) {
  switch (baseline) {
    case 'middle':
      return 'center';
  }

  return baseline;
}

var _default = markStager;
exports.default = _default;
},{"../base":"nnlJ","../color":"yCoU"}],"nMFB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupType = void 0;
var GroupType;
exports.GroupType = GroupType;

(function (GroupType) {
  GroupType[GroupType["none"] = 0] = "none";
  GroupType[GroupType["legend"] = 1] = "legend";
  GroupType[GroupType["xAxis"] = 2] = "xAxis";
  GroupType[GroupType["yAxis"] = 3] = "yAxis";
})(GroupType || (exports.GroupType = GroupType = {}));
},{}],"nVwG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sceneToStage = sceneToStage;

var _legend = _interopRequireDefault(require("./marks/legend"));

var _rect = _interopRequireDefault(require("./marks/rect"));

var _rule = _interopRequireWildcard(require("./marks/rule"));

var _text = _interopRequireDefault(require("./marks/text"));

var _base = require("./base");

var _color = require("./color");

var _defaults = require("./defaults");

var _interfaces = require("./marks/interfaces");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function convertGroupRole(group) {
  if (group.mark.role === "legend") return _interfaces.GroupType.legend;

  if (group.mark.role === "axis") {
    var vegaAxisDatum = group.datum;

    if (vegaAxisDatum) {
      switch (vegaAxisDatum.orient) {
        case "bottom":
        case "top":
          return _interfaces.GroupType.xAxis;

        case "left":
        case "right":
          return _interfaces.GroupType.yAxis;
      }
    }
  }
}

const group = (options, stage, scene, x, y, groupType) => {
  _base.base.vega.sceneVisit(scene, function (g) {
    if (g.bounds.x1 < options.offsetX) {
      options.offsetX = g.bounds.x1;
    }

    if (g.bounds.y1 < options.offsetY) {
      options.offsetY = g.bounds.y1;
    }

    const gx = g.x || 0,
          gy = g.y || 0;

    if (g.context && g.context.background && !stage.backgroundColor) {
      stage.backgroundColor = (0, _color.colorFromString)(g.context.background);
    }

    if (g.stroke) {
      const facetRect = {
        lines: (0, _rule.box)(gx + x - options.offsetX, gy + y - options.offsetY, g.height, g.width, g.stroke, _defaults.groupStrokeWidth)
      };
      stage.facets.push(facetRect);
      options.currFacetRect = facetRect;
    }

    groupType = convertGroupRole(g) || groupType;
    setCurrentAxis(options, stage, groupType); // draw group contents

    _base.base.vega.sceneVisit(g, function (item) {
      mainStager(options, stage, item, gx + x, gy + y, groupType);
    });
  });
};

function setCurrentAxis(options, stage, groupType) {
  let axes;

  switch (groupType) {
    case _interfaces.GroupType.xAxis:
      axes = stage.axes.x;
      break;

    case _interfaces.GroupType.yAxis:
      axes = stage.axes.y;
      break;

    default:
      return;
  }

  options.currAxis = {
    domain: null,
    tickText: [],
    ticks: []
  };
  axes.push(options.currAxis);
}

const markStagers = {
  group,
  legend: _legend.default,
  rect: _rect.default,
  rule: _rule.default,
  text: _text.default
};

var mainStager = (options, stage, scene, x, y, groupType) => {
  if (scene.marktype !== 'group' && groupType === _interfaces.GroupType.legend) {
    (0, _legend.default)(options, stage, scene, x, y, groupType);
  } else {
    var markStager = markStagers[scene.marktype];

    if (markStager) {
      markStager(options, stage, scene, x, y, groupType);
    } else {//console.log(`need to render ${scene.marktype}`);
    }
  }
};

function sceneToStage(options, stage, scene) {
  mainStager(options, stage, scene, 0, 0, null);
  sortAxis(stage.axes.x, 0);
  sortAxis(stage.axes.y, 1);
}

function sortAxis(axes, dim) {
  axes.forEach(axis => {
    if (axis.domain) orderDomain(axis.domain, dim);
    axis.ticks.sort((a, b) => a.sourcePosition[dim] - b.sourcePosition[dim]);
    axis.tickText.sort((a, b) => a.position[dim] - b.position[dim]);
  });
}

function orderDomain(domain, dim) {
  if (domain.sourcePosition[dim] > domain.targetPosition[dim]) {
    const temp = domain.targetPosition;
    domain.targetPosition = domain.sourcePosition;
    domain.sourcePosition = temp;
  }
}
},{"./marks/legend":"/bdV","./marks/rect":"e5xB","./marks/rule":"LdiJ","./marks/text":"U2Rd","./base":"nnlJ","./color":"yCoU","./defaults":"JuFU","./marks/interfaces":"nMFB"}],"PXqU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.targetViewState = targetViewState;
exports.viewStateProps = void 0;
const viewStateProps = ['distance', 'fov', 'lookAt', 'rotationOrbit', 'rotationX', 'zoom'];
exports.viewStateProps = viewStateProps;

function targetViewState(height, width, view) {
  const distance = 10;
  const fov = 60;
  const lookAt = [width / 2, -height / 2, 0]; //add a 4th dimension to make transitions work

  lookAt.push(1);

  if (view === '2d') {
    return {
      distance,
      fov,
      lookAt,
      rotationOrbit: 0,
      rotationX: 0,
      zoom: 10 / height
    };
  } else {
    return {
      distance,
      fov,
      lookAt,
      rotationOrbit: -25,
      rotationX: 60,
      zoom: 9 / height
    };
  }
}
},{}],"Ft4K":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presenter = void 0;

var _base = require("./base");

var _rule = require("./marks/rule");

var _panel = require("./panel");

var _clone = require("./clone");

var _color = require("./color");

var _deckgl = require("./deck.gl-classes/deckgl");

var _defaults = require("./defaults");

var _d3Ease = require("d3-ease");

var _layers = require("./layers");

var _legend = require("./legend");

var _linearInterpolator = require("./deck.gl-classes/linearInterpolator");

var _tsxCreateElement = require("tsx-create-element");

var _patchedCubeArray = require("./patchedCubeArray");

var _enums = require("./enums");

var _stagers = require("./stagers");

var _viewState = require("./viewState");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Class which presents a Stage of chart data using Deck.gl to render.
 */
class Presenter {
  /**
   * Instantiate a new Presenter.
   * @param el Parent HTMLElement to present within.
   * @param style Optional PresenterStyle styling options.
   */
  constructor(el, style) {
    this.el = el;
    this.style = (0, _clone.deepMerge)(_defaults.defaultPresenterStyle, style);
    (0, _panel.initializePanel)(this);
    this._last = {
      view: null,
      height: null,
      width: null,
      cubeCount: null,
      stage: null
    };
  }
  /**
   * Get the previously rendered Stage object.
   */


  get stage() {
    return this._last.stage;
  }
  /**
   * Get the current View camera type.
   */


  get view() {
    return this._last.view;
  }
  /**
   * Cancels any pending animation, calling animationCanceled() on original queue.
   */


  animationCancel() {
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
      this.animationTimer = null;

      if (this.logger) {
        this.logger(`canceling animation ${this.queuedAnimationOptions && this.queuedAnimationOptions.handlerLabel || 'handler'}`);
      }

      if (this.queuedAnimationOptions && this.queuedAnimationOptions.animationCanceled) {
        this.queuedAnimationOptions.animationCanceled.call(null);
      }
    }
  }
  /**
   * Stops the current animation and queues a new animation.
   * @param handler Function to invoke when timeout is complete.
   * @param timeout Length of time to wait before invoking the handler.
   * @param options Optional QueuedAnimationOptions object.
   */


  animationQueue(handler, timeout, options) {
    if (this.logger) {
      this.logger(`queueing animation ${options && options.waitingLabel || 'waiting'}...`);
    }

    this.animationCancel();
    this.animationTimer = setTimeout(() => {
      if (this.logger) {
        this.logger(`queueing animation ${options && options.handlerLabel || 'handler'}...`);
      }

      handler();
    }, timeout);
  }
  /**
   * Retrieve a sub-element of the rendered output.
   * @param type PresenterElement type of the HTMLElement to retrieve.
   */


  getElement(type) {
    const elements = this.el.getElementsByClassName((0, _panel.className)(type, this));

    if (elements && elements.length) {
      return elements[0];
    }
  }
  /**
   * Present the Vega Scene, or Stage object using Deck.gl.
   * @param sceneOrStage Vega Scene object, or Stage object containing chart layout info.
   * @param height Height of the rendering area.
   * @param width Width of the rendering area.
   * @param config Optional presentation configuration object.
   */


  present(sceneOrStage, height, width, config) {
    this.animationCancel();
    let scene = sceneOrStage;
    let stage;
    let options = {
      offsetX: 0,
      offsetY: 0,
      maxOrdinal: -1,
      ordinalsSpecified: false,
      currAxis: null,
      currFacetRect: null
    }; //determine if this is a vega scene

    if (scene.marktype) {
      stage = (0, _defaults.createStage)(scene.view);
      (0, _stagers.sceneToStage)(options, stage, scene);
    } else {
      stage = sceneOrStage;
    }

    if (stage.cubeData.length === 0) {
      return;
    }

    if (!this.deckgl) {
      const classes = (0, _deckgl.createDeckGLClassesForPresenter)({
        doubleClickHandler: () => {
          this.homeCamera();
        }
      });
      this.OrbitControllerClass = classes.OrbitControllerClass;
      const deckProps = {
        onLayerClick: config && config.onLayerClick,
        views: [new _base.base.deck.OrbitView({
          controller: this.OrbitControllerClass
        })],
        container: this.getElement(_enums.PresenterElement.gl),
        getCursor: x => {
          if (x.onCube) {
            return 'default';
          } else {
            return 'grab';
          }
        }
      };

      if (stage.backgroundColor) {
        deckProps.style = {
          "background-color": (0, _color.colorToString)(stage.backgroundColor)
        };
      }

      this.deckgl = new classes.DeckGL_Class(deckProps);
    }

    let cubeCount = Math.max(this._last.cubeCount, stage.cubeData.length);

    if (options.ordinalsSpecified) {
      cubeCount = Math.max(cubeCount, options.maxOrdinal + 1);
      const empty = {
        isEmpty: true,
        color: [0, 0, 0, 0] // possibly a bug in Deck.gl? set color to invisible.

      };
      stage.cubeData = (0, _patchedCubeArray.patchCubeArray)(cubeCount, empty, stage.cubeData);
    }

    this.setDeckProps(stage, height, width, cubeCount, config);
    (0, _tsxCreateElement.mount)((0, _legend.LegendView)({
      legend: stage.legend,
      onClick: config && config.onLegendClick
    }), this.getElement(_enums.PresenterElement.legend));

    if (config && config.onPresent) {
      config.onPresent();
    }
  }
  /**
   * Present the same recently rendered Stage with only slight modifications such as a color change,
   * using the previous Stage values as a basis.
   * @param stage Partially populated Stage object containing changes.
   * @param modifyConfig Optional presentation configuration object.
   */


  rePresent(stage, modifyConfig) {
    const newStage = Object.assign({}, this._last.stage, stage);
    this.setDeckProps(newStage, this._last.height, this._last.width, this._last.cubeCount, modifyConfig);
  }

  isNewBounds(view, height, width, cubeCount) {
    const lastBounds = this.lastBounds();

    for (let prop in lastBounds) {
      if (lastBounds[prop] === null) return true;
    }

    const newBounds = {
      cubeCount,
      height,
      view,
      width
    };

    for (let prop in lastBounds) {
      if (lastBounds[prop] !== newBounds[prop]) return true;
    }
  }

  lastBounds() {
    const {
      cubeCount,
      height,
      view,
      width
    } = this._last;
    return {
      cubeCount,
      height,
      view,
      width
    };
  }

  setDeckProps(stage, height, width, cubeCount, modifyConfig) {
    const config = (0, _clone.deepMerge)(_defaults.defaultPresenterConfig, modifyConfig);
    const newBounds = this.isNewBounds(stage.view, height, width, cubeCount);
    let lightSettings = this.style.lightSettings[stage.view];
    let lightingMix = stage.view === '3d' ? 1.0 : 0.0;
    let linearInterpolator; //choose the current OrbitView viewstate if possible

    let viewState = this.deckgl.viewState && Object.keys(this.deckgl.viewState).length && this.deckgl.viewState.OrbitView || //otherwise use the initial viewstate if any
    this.deckgl.props.viewState;

    if (!viewState || newBounds || config.shouldViewstateTransition && config.shouldViewstateTransition()) {
      viewState = (0, _viewState.targetViewState)(height, width, stage.view);
      const oldCubeLayer = (0, _layers.getCubeLayer)(this.deckgl.props);

      if (oldCubeLayer) {
        linearInterpolator = new _linearInterpolator.LinearInterpolator(_viewState.viewStateProps);
        linearInterpolator.layerStartProps = {
          lightingMix: oldCubeLayer.props.lightingMix
        };
        linearInterpolator.layerEndProps = {
          lightingMix
        };
        viewState.transitionDuration = config.transitionDurations.view;
        viewState.transitionEasing = _d3Ease.easeExpInOut;
        viewState.transitionInterpolator = linearInterpolator;
      }

      if (stage.view === '2d') {
        lightSettings = this.style.lightSettings['3d'];
      }
    }

    const guideLines = this._showGuides && (0, _rule.box)(0, 0, height, width, '#0f0', 1, true);
    const layers = (0, _layers.getLayers)(this, config, stage, this.style.highlightColor, lightSettings, lightingMix, linearInterpolator, guideLines);
    const deckProps = {
      views: [new _base.base.deck.OrbitView({
        controller: this.OrbitControllerClass
      })],
      viewState,
      layers
    };

    if (config && config.preStage) {
      config.preStage(stage, deckProps);
    }

    this.deckgl.setProps(deckProps);
    delete stage.cubeData;
    this._last = {
      cubeCount,
      height,
      width,
      stage: stage,
      view: stage.view
    };
  }
  /**
   * Home the camera to the last initial position.
   */


  homeCamera() {
    const viewState = (0, _viewState.targetViewState)(this._last.height, this._last.width, this._last.view);
    viewState.transitionDuration = _defaults.defaultPresenterConfig.transitionDurations.view;
    viewState.transitionEasing = _d3Ease.easeExpInOut;
    viewState.transitionInterpolator = new _linearInterpolator.LinearInterpolator(_viewState.viewStateProps);
    const deckProps = {
      views: this.deckgl.props.views,
      viewState,
      layers: this.deckgl.props.layers
    };
    this.deckgl.setProps(deckProps);
  }
  /**
   * Get cube data array from the cubes layer.
   */


  getCubeData() {
    return (0, _layers.getCubes)(this.deckgl.props);
  }
  /**
   * Show guidelines of rendering height/width and center of OrbitView.
   */


  showGuides() {
    this._showGuides = true;
    this.getElement(_enums.PresenterElement.gl).classList.add('show-center');
    this.rePresent(Object.assign({}, this._last.stage, {
      cubeData: this.getCubeData()
    }));
  }

}

exports.Presenter = Presenter;
},{"./base":"nnlJ","./marks/rule":"LdiJ","./panel":"r2Xb","./clone":"+1k3","./color":"yCoU","./deck.gl-classes/deckgl":"KTEt","./defaults":"JuFU","d3-ease":"7bMs","./layers":"BGdw","./legend":"JaRI","./deck.gl-classes/linearInterpolator":"xmKH","tsx-create-element":"QGtg","./patchedCubeArray":"eg4f","./enums":"tDiU","./stagers":"nVwG","./viewState":"PXqU"}],"ySLZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RendererGl = void 0;

var _base = require("../base");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
//pass in the SuperClass, which should be a vega.View
function _RendererGl(loader) {
  //dynamic superclass, since we don't know have vega.View in the declaration phase
  class RendererGlInternal extends _base.base.vega.Renderer {
    initialize(el, width, height, origin) {
      this.height = height;
      this.width = width; // this method will invoke resize to size the canvas appropriately

      return super.initialize(el, width, height, origin);
    }

    resize(width, height, origin) {
      super.resize(width, height, origin);
      this.origin = origin;
      this.height = height;
      this.width = width; //rteturn this for vega

      return this;
    }

    _render(scene, items) {
      const scene3d = scene;
      scene3d.view = this.getView();
      this.presenter.present(scene3d, this.height, this.width, this.presenterConfig); //return this for vega

      return this;
    }

  }

  const instance = new RendererGlInternal(loader);
  return instance;
} //signature to allow this function to be used with the 'new' keyword.
//need to trick the compiler by casting to 'any'.

/**
 * Subclass of Vega.Renderer, with added properties for accessing a Presenter.
 * This is instantiated by ViewGl.
 */


const RendererGl = _RendererGl;
exports.RendererGl = RendererGl;
},{"../base":"nnlJ"}],"C81u":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewGl = void 0;

var _base = require("../base");

var _defaults = require("../defaults");

var _presenter = require("../presenter");

var _enums = require("../enums");

var _rendererGl = require("./rendererGl");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
let registered = false; //dynamic superclass lets us create a subclass at execution phase instead of declaration phase.
//This allows us to retrieve vega.View from either UMD or ES6 consumers of this class.
//pass in the SuperClass, which should be a vega.View

function _ViewGl(runtime, config) {
  //dynamic superclass, since we don't know have vega.View in the declaration phase
  class ViewGlInternal extends _base.base.vega.View {
    constructor(runtime, config = {}) {
      super(runtime, config);
      this.config = config;
      this.presenter = config.presenter;
      config.presenterConfig = config.presenterConfig || {};

      config.presenterConfig.redraw = () => {
        this._redraw = true; //use Vega View private member _redraw

        this.run();
      };
    }

    renderer(renderer) {
      if (renderer === 'deck.gl' && !registered) {
        _base.base.vega.renderModule('deck.gl', {
          handler: _base.base.vega.CanvasHandler,
          renderer: _rendererGl.RendererGl
        });

        registered = true;
      }

      return super.renderer(renderer);
    }

    initialize(el) {
      if (!this.presenter) {
        this.presenter = new _presenter.Presenter(el);
      }

      super.initialize(this.presenter.getElement(_enums.PresenterElement.vegaControls));
      const renderer = this._renderer;
      renderer.presenterConfig = this.config.presenterConfig;
      renderer.presenter = this.presenter;

      renderer.getView = this.config && this.config.getView || (() => this.presenter.view || _defaults.defaultView);

      return this;
    }

    error(e) {
      if (this.presenter.logger) {
        this.presenter.logger(e);
      }
    }

  }

  const instance = new ViewGlInternal(runtime, config);
  return instance;
} //signature to allow this function to be used with the 'new' keyword.
//need to trick the compiler by casting to 'any'.

/**
 * Subclass of Vega.View, with added properties for accessing a Presenter.
 * This is instantiatable by calling `new ViewGl()`. See https://vega.github.io/vega/docs/api/view/
 */


const ViewGl = _ViewGl;
exports.ViewGl = ViewGl;
},{"../base":"nnlJ","../defaults":"JuFU","../presenter":"Ft4K","../enums":"tDiU","./rendererGl":"ySLZ"}],"Uns8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  constants: true,
  controls: true,
  types: true,
  util: true,
  base: true,
  use: true,
  Presenter: true,
  ViewGl: true
};
Object.defineProperty(exports, "base", {
  enumerable: true,
  get: function () {
    return _base.base;
  }
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function () {
    return _base.use;
  }
});
Object.defineProperty(exports, "Presenter", {
  enumerable: true,
  get: function () {
    return _presenter.Presenter;
  }
});
Object.defineProperty(exports, "ViewGl", {
  enumerable: true,
  get: function () {
    return _viewGl.ViewGl;
  }
});
exports.util = exports.types = exports.controls = exports.constants = void 0;

var constants = _interopRequireWildcard(require("./constants"));

exports.constants = constants;

var controls = _interopRequireWildcard(require("./exports/controls"));

exports.controls = controls;

var types = _interopRequireWildcard(require("./exports/types"));

exports.types = types;

var util = _interopRequireWildcard(require("./exports/util"));

exports.util = util;

var _base = require("./base");

var _presenter = require("./presenter");

var _viewGl = require("./vega-classes/viewGl");

var _enums = require("./enums");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
},{"./constants":"ipKi","./exports/controls":"P7sC","./exports/types":"28lv","./exports/util":"y8T8","./base":"nnlJ","./presenter":"Ft4K","./vega-classes/viewGl":"C81u","./enums":"tDiU"}],"SLia":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnsFromData = getColumnsFromData;
exports.inferAll = inferAll;

var VegaDeckGl = _interopRequireWildcard(require("../vega-deck.gl"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function isQuantitative(column) {
  return column.type === 'number' || column.type === 'integer';
}
/**
 * Derive column metadata from the data array.
 * @param data Array of data objects.
 */


function getColumnsFromData(data, columnTypes) {
  const fields = Object.keys(data[0]);
  const inferences = Object.assign({}, VegaDeckGl.base.vega.inferTypes(data, fields), columnTypes);
  const columns = fields.map(name => {
    const column = {
      name,
      type: inferences[name]
    };
    return column;
  });
  inferAll(columns, data);
  return columns;
}
/**
 * Populate columns with type inferences and stats.
 * @param columns Array of columns.
 * @param data Array of data objects.
 */


function inferAll(columns, data) {
  columns.forEach(column => {
    if (column) {
      if (typeof column.quantitative !== 'boolean') {
        column.quantitative = isQuantitative(column);
      }

      if (!column.stats) {
        column.stats = getStats(data, column);
      }
    }
  });
}

function getStats(data, column) {
  const distinctMap = {};
  const stats = {
    distinctValueCount: null,
    max: null,
    min: null
  };

  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    let value = row[column.name];
    distinctMap[value] = true;

    if (stats.max === null || value > stats.max) {
      stats.max = value;
    }

    if (stats.min === null || value < stats.min) {
      stats.min = value;
    }
  }

  stats.distinctValueCount = Object.keys(distinctMap).length;
  return stats;
}
},{"../vega-deck.gl":"Uns8"}],"G0Md":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPresenterStyle = getPresenterStyle;
exports.dualColorSchemeColors = exports.cssPrefix = exports.defaultViewerOptions = void 0;

var _defaults = require("./vega-deck.gl/defaults");

var _color = require("./vega-deck.gl/color");

const defaultViewerOptions = {
  colors: {
    activeCube: [128, 0, 128, 255],
    defaultCube: _defaults.defaultPresenterStyle.defaultCubeColor,
    hoveredCube: _defaults.defaultPresenterStyle.highlightColor,
    selectedCube: [255, 255, 0, 255],
    axisSelectHighlight: [128, 128, 128, 128],
    axisLine: [0, 0, 0, 255],
    axisText: [0, 0, 0, 255],
    cellFillerLine: [128, 128, 128, 255],
    unselectedColorMethod: color => {
      const c = (0, _color.desaturate)(color, 0.05);
      c[3] = 171;
      return c;
    }
  },
  language: {
    headers: {
      chart: 'Chart',
      details: 'Details',
      legend: 'Legend',
      selection: 'Select & Filter'
    },
    bing: 'bing',
    newColorMap: 'remap color to filtered items',
    oldColorMap: 'keep same colors',
    deselect: 'deselect',
    exclude: 'exclude',
    isolate: 'isolate',
    legendOther: 'other',
    nextDetail: '>',
    previousDetail: '<',
    reset: 'reset',
    colorBinCount: 'Color bin count',
    colorReverse: 'Color reverse',
    count: 'Count',
    scatterPointSize: 'Point size',
    XBinSize: 'X axis bin size',
    YBinSize: 'Y axis bin size',
    XGridSize: 'X grid size',
    YGridSize: 'Y grid size',
    InnerPaddingSize: 'Inner padding size',
    OuterPaddingSize: 'Outer padding size',
    treeMapMethod: 'Method',
    facetColumns: 'Facet columns',
    facetRows: 'Facet rows',
    textScaleSignal: "Text scale",
    xAxisTextAngleSignal: "X axis text angle",
    yAxisTextAngleSignal: "Y axis text angle",
    zScaleProportion: "Z scale proportion to Y",
    selectionCount: count => `${count} items selected`
  },
  maxLegends: 19,
  onError: errors => {//console.log(`UnitVisViewer errors: ${errors.join('\n')}`);
  },
  transitionDurations: Object.assign({}, _defaults.defaultPresenterConfig.transitionDurations, {
    scope: 600
  }),
  selectionPolygonZ: -1,
  tickSize: 10,
  facetMargins: {
    column: 40,
    row: 40,
    title: 40
  }
};
exports.defaultViewerOptions = defaultViewerOptions;

function getPresenterStyle(options) {
  var style = {
    cssPrefix,
    defaultCubeColor: options.colors.defaultCube
  };

  if (options.colors.hoveredCube) {
    style.highlightColor = options.colors.hoveredCube;
  }

  if (options.lightSettings) {
    style.lightSettings = options.lightSettings;
  }

  return style;
}

const cssPrefix = 'sanddance-';
exports.cssPrefix = cssPrefix;
const dualColorSchemeColors = {
  black: '#212121',
  gray: '#D2D2D2',
  blue: '#0060F0',
  green: '#00C000',
  orange: '#FF9900',
  red: '#E00000'
};
exports.dualColorSchemeColors = dualColorSchemeColors;
},{"./vega-deck.gl/defaults":"JuFU","./vega-deck.gl/color":"yCoU"}],"BTLl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getColumnsFromData", {
  enumerable: true,
  get: function () {
    return _inference.getColumnsFromData;
  }
});
Object.defineProperty(exports, "inferAll", {
  enumerable: true,
  get: function () {
    return _inference.inferAll;
  }
});
Object.defineProperty(exports, "ensureSearchExpressionGroupArray", {
  enumerable: true,
  get: function () {
    return _group.ensureSearchExpressionGroupArray;
  }
});
Object.defineProperty(exports, "getPresenterStyle", {
  enumerable: true,
  get: function () {
    return _defaults.getPresenterStyle;
  }
});

var _inference = require("./specs/inference");

var _group = require("./searchExpression/group");

var _defaults = require("./defaults");
},{"./specs/inference":"SLia","./searchExpression/group":"yy6X","./defaults":"G0Md"}],"kNpg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerColorSchemes = registerColorSchemes;
exports.colorSchemes = void 0;

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

var _constants = require("./specs/constants");

var _defaults = require("./defaults");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const dualPairs = [[_defaults.dualColorSchemeColors.black, _defaults.dualColorSchemeColors.gray], [_defaults.dualColorSchemeColors.red, _defaults.dualColorSchemeColors.green], [_defaults.dualColorSchemeColors.red, _defaults.dualColorSchemeColors.blue], [_defaults.dualColorSchemeColors.black, _defaults.dualColorSchemeColors.red], [_defaults.dualColorSchemeColors.black, _defaults.dualColorSchemeColors.orange], [_defaults.dualColorSchemeColors.black, _defaults.dualColorSchemeColors.green]];
/**
 * Array of color schemes.
 */

const colorSchemes = [{
  scheme: _constants.ColorScaleNone,
  colors: [VegaDeckGl.util.colorToString(_defaults.defaultViewerOptions.colors.defaultCube)]
}];
exports.colorSchemes = colorSchemes;
createDualColorSchemes();

function registerColorSchemes(vega) {
  colorSchemes.forEach(cs => {
    if (cs.colors.length === 1) {
      vega.scheme(cs.scheme, x => cs.colors[0]);
    } else {
      vega.scheme(cs.scheme, cs.colors);
    }
  });
}

function createPair(names, colors) {
  const scheme = `dual_${names[0]}${names[1]}`;
  colorSchemes.push({
    scheme,
    colors
  });
}

function createDualColorSchemes() {
  dualPairs.forEach(colors => {
    const names = colors.map(color => {
      for (let key in _defaults.dualColorSchemeColors) if (color === _defaults.dualColorSchemeColors[key]) return key;
    });
    createPair(names, colors);
    createPair([...names].reverse(), [...colors].reverse());
  });
}
},{"./vega-deck.gl":"Uns8","./specs/constants":"b0rV","./defaults":"G0Md"}],"U1OZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animator = exports.DataLayoutChange = void 0;
var DataLayoutChange;
exports.DataLayoutChange = DataLayoutChange;

(function (DataLayoutChange) {
  DataLayoutChange[DataLayoutChange["same"] = 0] = "same";
  DataLayoutChange[DataLayoutChange["reset"] = 1] = "reset";
  DataLayoutChange[DataLayoutChange["refine"] = 2] = "refine";
})(DataLayoutChange || (exports.DataLayoutChange = DataLayoutChange = {}));

class Animator {
  constructor(dataScope, props) {
    this.dataScope = dataScope;
    this.props = props;
  }

  select(search) {
    return new Promise((resolve, reject) => {
      this.dataScope.select(search);
      this.props.onDataChanged(DataLayoutChange.same);
      resolve();
    });
  }

  deselect() {
    return new Promise((resolve, reject) => {
      this.dataScope.deselect();
      this.props.onDataChanged(DataLayoutChange.same);
      resolve();
    });
  }

  filter(search, keepData, collapseData) {
    this.dataScope.collapse(true, collapseData);
    return new Promise((resolve, reject) => {
      this.props.onAnimateDataChange(DataLayoutChange.refine, 'before refine', 'refine').then(() => {
        this.dataScope.deselect();
        this.dataScope.filteredData = keepData;
        this.props.onDataChanged(DataLayoutChange.refine, search);
        resolve();
      }).catch(reject);
    });
  }

  reset() {
    return new Promise((resolve, reject) => {
      this.dataScope.deselect();
      this.dataScope.filteredData = null;
      this.props.onAnimateDataChange(DataLayoutChange.reset, 'before reset', 'reset').then(() => {
        this.dataScope.collapse(false);
        this.props.onDataChanged(DataLayoutChange.reset);
        resolve();
      }).catch(reject);
    });
  }

  activate(datum) {
    return new Promise((resolve, reject) => {
      this.dataScope.activate(datum);
      this.props.onDataChanged(DataLayoutChange.same);
      resolve();
    });
  }

  deactivate() {
    return new Promise((resolve, reject) => {
      this.dataScope.deactivate();
      this.props.onDataChanged(DataLayoutChange.same);
      resolve();
    });
  }

}

exports.Animator = Animator;
},{}],"PfBA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedColorMap = getSelectedColorMap;
exports.colorMapFromCubes = colorMapFromCubes;
exports.populateColorContext = populateColorContext;
exports.applyColorMapToCubes = applyColorMapToCubes;

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

var _constants = require("./specs/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function getSelectedColorMap(currentData, showSelectedData, showActive, viewerOptions) {
  function getSelectionColorItem(datum) {
    let item;

    if (showSelectedData) {
      item = datum[_constants.FieldNames.Selected] ? {
        color: viewerOptions.colors.selectedCube
      } : {
        unSelected: true
      };
    }

    if (showActive && datum[_constants.FieldNames.Active]) {
      item = {
        color: viewerOptions.colors.activeCube
      };
    }

    return item;
  }

  const colorMap = {};
  currentData.forEach(datum => {
    const selectionColor = getSelectionColorItem(datum);

    if (selectionColor) {
      const ordinal = datum[VegaDeckGl.constants.GL_ORDINAL];
      colorMap[ordinal] = selectionColor;
    }
  });
  return colorMap;
}

function colorMapFromCubes(cubes) {
  const map = {};
  cubes.forEach(cube => {
    map[cube.ordinal] = {
      color: cube.color
    };
  });
  return map;
}

function populateColorContext(colorContext, presenter) {
  if (!colorContext.colorMap) {
    const cubes = presenter.getCubeData();
    colorContext.colorMap = colorMapFromCubes(cubes);
  }

  colorContext.legend = VegaDeckGl.util.clone(presenter.stage.legend);
  colorContext.legendElement = presenter.getElement(VegaDeckGl.PresenterElement.legend).children[0];
}

function applyColorMapToCubes(maps, cubes, unselectedColorMethod) {
  Object.keys(maps[0]).forEach(ordinal => {
    const cube = cubes[+ordinal];

    if (cube && !cube.isEmpty) {
      const actualColorMappedItem = maps[0][ordinal];

      if (maps.length > 1) {
        const selectedColorMappedItem = maps[1][ordinal];

        if (selectedColorMappedItem) {
          if (selectedColorMappedItem.unSelected && unselectedColorMethod) {
            cube.color = unselectedColorMethod(actualColorMappedItem.color);
          } else {
            cube.color = selectedColorMappedItem.color;
          }

          return;
        }
      }

      cube.color = actualColorMappedItem.color;
    }
  });
}
},{"./vega-deck.gl":"Uns8","./specs/constants":"b0rV"}],"jmI2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applySignalValues = applySignalValues;
exports.extractSignalValuesFromView = extractSignalValuesFromView;

function applySignalValues(sv, b) {
  if (!sv || !b || !b.signals || !b.signals.length) return;

  for (let key in sv) {
    let value = sv[key];
    let signalB = b.signals.filter(signal => signal.name === key)[0];

    if (signalB && signalB.bind) {
      signalB.value = value;
    }
  }
}

function extractSignalValuesFromView(view, spec) {
  if (!view || !spec || !spec.signals || !spec.signals.length) return;
  const result = {};
  spec.signals.forEach(signalA => {
    //bound to a UI control
    if (signalA.bind) {
      try {
        result[signalA.name] = view.signal(signalA.name);
      } catch (e) {}
    }
  });
  return result;
}
},{}],"/0dx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignOrdinals = assignOrdinals;
exports.getSpecColumns = getSpecColumns;

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function assignOrdinals(columns, data, ordinalMap) {
  const uCol = columns.uid && columns.uid.name;

  if (ordinalMap) {
    data.forEach((d, i) => {
      const key = uCol ? d[uCol] : i;
      d[VegaDeckGl.constants.GL_ORDINAL] = ordinalMap[key];
    });
  } else {
    ordinalMap = {};
    data.forEach((d, i) => {
      d[VegaDeckGl.constants.GL_ORDINAL] = i;
      const uColValue = uCol ? d[uCol] : i;
      ordinalMap[uColValue] = i;
    });
  }

  return ordinalMap;
}

function getSpecColumns(insight, columns) {
  function getColumnByName(name) {
    return columns.filter(c => c.name === name)[0];
  }

  return {
    color: getColumnByName(insight.columns && insight.columns.color),
    facet: getColumnByName(insight.columns && insight.columns.facet),
    group: getColumnByName(insight.columns && insight.columns.group),
    size: getColumnByName(insight.columns && insight.columns.size),
    sort: getColumnByName(insight.columns && insight.columns.sort),
    uid: getColumnByName(insight.columns && insight.columns.uid),
    x: getColumnByName(insight.columns && insight.columns.x),
    y: getColumnByName(insight.columns && insight.columns.y),
    z: getColumnByName(insight.columns && insight.columns.z)
  };
}
},{"./vega-deck.gl":"Uns8"}],"7Ifg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.facetSignals = facetSignals;
exports.checkForFacetErrors = checkForFacetErrors;
exports.facetSize = facetSize;
exports.layout = layout;
exports.facetBinStep = facetBinStep;
exports.facetSourceData = facetSourceData;
exports.facetGroupData = facetGroupData;
exports.facetTransforms = facetTransforms;
exports.facetMarks = facetMarks;
exports.facetTitleSeparator = void 0;

var _constants = require("./constants");

var _vegaDeck = require("../vega-deck.gl");

const FacetColumnsSequence = "FacetColumnsSequence";
const FacetRowsSequence = "FacetRowsSequence";
const SequenceNumber = "SequenceNumber";
const CellTitle = "CellTitle";
const CellFiller = "CellFiller";
const facetTitleSeparator = ' - ';
exports.facetTitleSeparator = facetTitleSeparator;

function facetSignals(facets, specViewOptions) {
  const signals = [{
    "name": _constants.SignalNames.FacetColumns,
    "value": facets.columns
  }, {
    "name": _constants.SignalNames.FacetRows,
    "value": facets.rows
  }];
  return signals;
}

function checkForFacetErrors(facets, errors) {
  if (facets) {
    const gridCapacity = facets.columns * facets.rows;

    if (!gridCapacity) {
      errors.push('Must set facets columns & rows to non-zero.');
    }

    if (gridCapacity < 2) {
      errors.push('Not enough facets to facet.');
    }

    if (!facets.columns || facets.columns < 1) {
      errors.push('Facet column columns must be greater than 1.');
    }

    if (!facets.rows || facets.rows < 1) {
      errors.push('Facet column rows must be greater than 1.');
    }
  }
}

function facetSize(facets, size, specViewOptions) {
  return {
    height: (size.height - (facets.rows + 1) * (specViewOptions.tickSize + specViewOptions.facetMargins.column)) / facets.columns,
    width: (size.width - (facets.columns + 1) * (specViewOptions.tickSize + specViewOptions.facetMargins.row)) / facets.rows
  };
}

function layout(specViewOptions) {
  const layout = {
    "columns": {
      "signal": _constants.SignalNames.FacetColumns
    },
    "bounds": "full",
    "padding": {
      "column": specViewOptions.facetMargins.column,
      "row": specViewOptions.facetMargins.row
    }
  };
  return layout;
}

function facetBinStep(facetColumn, facetCount) {
  const range = facetColumn.stats.max - facetColumn.stats.min;
  return range / facetCount;
}

function emptyBinsDataSource(name, facetColumn, facets) {
  const gridCapacity = facets.columns * facets.rows;
  const step = facetBinStep(facetColumn, gridCapacity);
  const steps = [];

  for (let i = 0; i < gridCapacity; i++) {
    steps[i] = facetColumn.stats.min + i * step + step / 2;
  }

  const values = steps.map(s => {
    const obj = {};
    obj[_constants.FieldNames.Collapsed] = true;
    obj[facetColumn.name] = s;
    return obj;
  });
  const data = {
    name,
    values
  };
  return data;
}

function facetSourceData(facetColumn, facets, name) {
  let data;

  if (facetColumn && facetColumn.quantitative) {
    data = [{
      "name": _constants.DataNames.Pre
    }, emptyBinsDataSource(_constants.DataNames.EmptyBin, facetColumn, facets), {
      name,
      "source": [_constants.DataNames.Pre, _constants.DataNames.EmptyBin]
    }];
  } else {
    data = [{
      name
    }];
  }

  return data;
}

function facetGroupData(source) {
  const data = [{
    "name": _constants.DataNames.FacetCellTitles,
    source,
    "transform": [{
      "type": "aggregate",
      "groupby": [CellTitle]
    }]
  }, {
    "name": CellFiller,
    "transform": [{
      "type": "sequence",
      "start": 0,
      "step": 1,
      "stop": {
        "signal": `${_constants.SignalNames.FacetColumns} * ${_constants.SignalNames.FacetRows} - length(data('${_constants.DataNames.FacetCellTitles}'))`
      }
    }]
  }, {
    "name": FacetColumnsSequence,
    "transform": [{
      "type": "sequence",
      "start": 0,
      "stop": {
        "signal": _constants.SignalNames.FacetColumns
      },
      "as": SequenceNumber
    }]
  }, {
    "name": FacetRowsSequence,
    "transform": [{
      "type": "sequence",
      "start": 0,
      "stop": {
        "signal": _constants.SignalNames.FacetRows
      },
      "as": SequenceNumber
    }]
  }];
  return data;
}

function facetTransforms(facetColumn, facets) {
  let transforms;

  if (facetColumn.quantitative) {
    const gridCapacity = facets.columns * facets.rows;
    const step = facetBinStep(facetColumn, gridCapacity);
    transforms = [{
      "type": "bin",
      "field": facetColumn.name,
      step,
      nice: false,
      "extent": [facetColumn.stats.min, facetColumn.stats.max],
      "as": ["facetBin0", "facetBin1"]
    }, {
      "type": "collect",
      "sort": {
        "field": "facetBin0"
      }
    }, {
      "type": "formula",
      "expr": `format(datum.facetBin0, '~r') + '${facetTitleSeparator}' + format(datum.facetBin1, '~r')`,
      "as": CellTitle
    }];
  } else {
    transforms = [{
      "type": "formula",
      "expr": `datum[${JSON.stringify(facetColumn.name)}]`,
      "as": CellTitle
    }];
  }

  return transforms;
}

function facetMarks(specViewOptions, sourceDataName, childMarks, childAxes, childData) {
  //TODO: create a style
  const cellFillerLineColor = _vegaDeck.util.colorToString(specViewOptions.colors.cellFillerLine);

  const style = "cell";
  const mark = {
    style,
    "type": "group",
    "from": {
      "facet": {
        "name": _constants.DataNames.FacetGroupCell,
        "data": sourceDataName,
        "groupby": [CellTitle]
      }
    },
    "title": {
      "frame": "group",
      "offset": specViewOptions.facetMargins.title,
      "text": {
        "signal": `parent['${CellTitle}']`
      },
      "limit": {
        "signal": "width"
      },
      "color": _vegaDeck.util.colorToString(specViewOptions.colors.axisText),
      "fontSize": {
        "signal": _constants.SignalNames.TextSize
      }
    },
    "encode": {
      "update": {
        "width": {
          "signal": "width"
        },
        "height": {
          "signal": "height"
        }
      }
    },
    "data": childData,
    "marks": childMarks.map(mark => {
      if (mark.from && mark.from.data && mark.from.data === sourceDataName) {
        mark.from.data = _constants.DataNames.FacetGroupCell;
      }

      return mark;
    })
  };

  if (childAxes) {
    mark.axes = childAxes.map(axis => {
      const clone = _vegaDeck.util.clone(axis); //remove all labels and titles


      clone.labels = false;
      delete clone.title;
      delete clone.titleAlign;
      delete clone.titleAngle;
      delete clone.titleFontSize;
      return clone;
    });
  }

  const filler = {
    "style": "cell",
    "type": "group",
    "from": {
      "data": CellFiller
    },
    "title": {
      "frame": "group",
      "offset": specViewOptions.facetMargins.title,
      "text": "",
      "fontSize": {
        "signal": _constants.SignalNames.TextSize
      }
    },
    "encode": {
      "update": {
        "width": {
          "signal": "width"
        },
        "height": {
          "signal": "height"
        }
      }
    }
  };

  if (childAxes) {
    filler.axes = childAxes.map(axis => {
      const clone = _vegaDeck.util.clone(axis); //remove all labels and titles


      clone.labels = false;
      delete clone.title;
      delete clone.titleAlign;
      delete clone.titleAngle;
      delete clone.titleFontSize; //change tick & domain color

      clone.tickColor = cellFillerLineColor;
      clone.domainColor = cellFillerLineColor;
      return clone;
    });
  }

  const rowHeader = {
    "type": "group",
    "role": "row-header",
    "from": {
      "facet": {
        "name": "row-headers",
        "data": FacetRowsSequence,
        "groupby": [SequenceNumber]
      }
    }
  };

  if (childAxes) {
    rowHeader.axes = [cloneAndOffsetAxis(childAxes.filter(axis => axis.orient === 'left')[0], specViewOptions.facetMargins.column)];
  }

  const columnFooter = {
    "type": "group",
    "role": "column-footer",
    "from": {
      "facet": {
        "name": "column-footers",
        "data": FacetColumnsSequence,
        "groupby": [SequenceNumber]
      }
    }
  };

  if (childAxes) {
    columnFooter.axes = [cloneAndOffsetAxis(childAxes.filter(axis => axis.orient === 'bottom')[0], specViewOptions.facetMargins.row)];
  }

  const marks = [mark, filler, rowHeader, columnFooter];
  return marks;
}

function cloneAndOffsetAxis(axis, margin) {
  if (axis) {
    const clone = _vegaDeck.util.clone(axis);

    clone.offset = margin;
    return clone;
  }
}
},{"./constants":"b0rV","../vega-deck.gl":"Uns8"}],"JTcr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notNice = notNice;
exports.selectNullOrEmpty = selectNullOrEmpty;
exports.selectExact = selectExact;
exports.selectNone = selectNone;
exports.selectExactAxis = selectExactAxis;
exports.selectBetween = selectBetween;
exports.selectBetweenAxis = selectBetweenAxis;
exports.selectBetweenFacet = selectBetweenFacet;

var _facet = require("./specs/facet");

function notNice(niceValue) {
  //convert "nice" numbers to numeric value
  return niceValue.replace(/,/g, '');
}

function tickValue(axis, i) {
  const tick = axis.tickText[i];
  let value;

  if (tick) {
    value = axis.tickText[i].value;
  }

  return {
    tick,
    value
  };
}

function selectNullOrEmpty(column) {
  const searchExpression = {
    name: column.name,
    operator: 'isnullorEmpty'
  };
  return searchExpression;
}

function selectExact(column, value) {
  const searchExpression = {
    name: column.name,
    operator: '==',
    value
  };
  return searchExpression;
}

function selectNone(column, values) {
  const expressions = values.map((value, i) => {
    const searchExpression = {
      name: column.name,
      operator: '!=',
      value
    };

    if (i) {
      searchExpression.clause = '&&';
    }

    return searchExpression;
  });
  const searchExpressionGroup = {
    expressions
  };
  return searchExpressionGroup;
}

function selectExactAxis(axis, column, i) {
  const result = tickValue(axis, i);

  if (result.tick) {
    return selectExact(column, result.value);
  }
}

function selectBetween(column, lowValue, highValue, lowOperator = '>=', highOperator = '<') {
  const expressions = [];

  if (lowValue !== undefined) {
    expressions.push({
      name: column.name,
      operator: lowOperator,
      value: lowValue
    });
  }

  if (highValue !== undefined) {
    expressions.push({
      name: column.name,
      operator: highOperator,
      value: highValue
    });
  }

  if (expressions.length > 1) {
    expressions[1].clause = '&&';
  }

  const searchExpressionGroup = {
    expressions
  };
  return searchExpressionGroup;
}

function selectBetweenAxis(axis, column, i) {
  const low = tickValue(axis, i);
  const high = tickValue(axis, i + 1);
  return selectBetween(column, low.value, high.value);
}

function selectBetweenFacet(column, title, isFirst, isLast) {
  const values = title.split(_facet.facetTitleSeparator);
  return selectBetween(column, isFirst ? undefined : values[0], isLast ? undefined : values[1]);
}
},{"./specs/facet":"7Ifg"}],"oIzg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.axisSelectionLayer = axisSelectionLayer;

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

var _expression = require("./expression");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function axisSelectionLayer(specCapabilities, columns, stage, clickHandler, highlightColor, polygonZ) {
  const polygons = [];
  const xRole = specCapabilities.roles.filter(r => r.role === 'x')[0];

  if (xRole && xRole.axisSelection) {
    stage.axes.x.filter(axis => axis.tickText.length).forEach(axis => {
      polygons.push.apply(polygons, axisSelectionPolygons(axis, false, xRole.axisSelection, columns.x));
    });
  }

  const yRole = specCapabilities.roles.filter(r => r.role === 'y')[0];

  if (yRole && yRole.axisSelection) {
    stage.axes.y.filter(axis => axis.tickText.length).forEach(axis => {
      polygons.push.apply(polygons, axisSelectionPolygons(axis, true, yRole.axisSelection, columns.y));
    });
  }

  if (stage.facets) {
    polygons.push.apply(polygons, facetSelectionPolygons(stage.facets, columns.facet));
  } //move polygons to Z


  polygons.forEach(datum => {
    datum.polygon.forEach(p => {
      p[2] = polygonZ;
    });
  });

  const onClick = (o, e) => clickHandler(e.srcEvent, o.object.search);

  const polygonLayer = new VegaDeckGl.base.layers.PolygonLayer({
    autoHighlight: true,
    coordinateSystem: VegaDeckGl.base.deck.COORDINATE_SYSTEM.IDENTITY,
    data: polygons,
    extruded: false,
    highlightColor,
    id: 'selections',
    onClick,
    getElevation: () => 0,
    getFillColor: () => [0, 0, 0, 0],
    pickable: true,
    stroked: false
  });
  return polygonLayer;
}

function axisSelectionPolygons(axis, vertical, axisSelectionType, column) {
  const polygons = [];
  const size = 50;
  const getSearch = axisSelectionType === 'exact' ? (a, c, i) => ({
    expressions: [(0, _expression.selectExactAxis)(a, c, i)]
  }) : _expression.selectBetweenAxis;
  const {
    domain,
    ticks
  } = axis;

  if (ticks.length > 0 && domain) {
    const dim = vertical ? 1 : 0;
    const between = Math.abs(ticks[0].sourcePosition[dim] - domain.sourcePosition[dim]) > 1;
    let divisions;

    if (between) {
      divisions = [];

      for (let i = 1; i < ticks.length; i++) {
        divisions.push((ticks[i].sourcePosition[dim] + ticks[i - 1].sourcePosition[dim]) / 2);
      }
    } else {
      divisions = ticks.slice(1, -1).map(tick => tick.sourcePosition[dim]);
    }

    function add(p2, i) {
      var coords = [[p1, q1], [p2, q1], [p2, q2], [p1, q2]];
      polygons.push({
        search: getSearch(axis, column, i),
        polygon: vertical ? coords.map(xy => xy.reverse()) : coords
      });
      p1 = p2;
    }

    let p1 = domain.sourcePosition[dim];
    const q1 = domain.sourcePosition[vertical ? 0 : 1];
    const q2 = q1 - size;
    divisions.forEach(add);
    add(domain.targetPosition[dim], ticks.length - (between ? 1 : 2));
  }

  return polygons;
}

function facetSelectionPolygons(facetRects, facetColumn) {
  const polygons = [];
  facetRects.forEach((facetRect, i) => {
    //take any 2 lines to get a box dimension
    const [x, y] = minMaxPoints(facetRect.lines.slice(2));
    const search = facetRect.facetTitle ? facetColumn.quantitative ? (0, _expression.selectBetweenFacet)(facetColumn, facetRect.facetTitle.text, i === 0, i === facetRects.length - 1) : {
      expressions: [(0, _expression.selectExact)(facetColumn, facetRect.facetTitle.text)]
    } : {
      expressions: [(0, _expression.selectNullOrEmpty)(facetColumn)]
    };
    polygons.push({
      search,
      polygon: [[x.min, y.min], [x.max, y.min], [x.max, y.max], [x.min, y.max]]
    });
  });
  return polygons;
}

function minMaxPoints(lines) {
  const points = [];
  lines.forEach(line => {
    [line.sourcePosition, line.targetPosition].forEach(point => {
      points.push(point);
    });
  });
  return [0, 1].map(dim => {
    let minMax = {
      min: null,
      max: null
    };
    points.forEach(point => {
      if (minMax.max == null) {
        minMax.max = point[dim];
      } else {
        minMax.max = Math.max(minMax.max, point[dim]);
      }

      if (minMax.min == null) {
        minMax.min = point[dim];
      } else {
        minMax.min = Math.min(minMax.min, point[dim]);
      }
    });
    return minMax;
  });
}
},{"./vega-deck.gl":"Uns8","./expression":"JTcr"}],"m4Pj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partialAxes = partialAxes;

var _constants = require("./constants");

var _vegaDeck = require("../vega-deck.gl");

function partialAxes(specViewOptions, xColumnQuantitative, yColumnQuantitative) {
  const lineColor = _vegaDeck.util.colorToString(specViewOptions.colors.axisLine);

  const axisColor = {
    "domainColor": lineColor,
    "tickColor": lineColor,
    "labelColor": _vegaDeck.util.colorToString(specViewOptions.colors.axisText)
  };
  const bottom = Object.assign({
    "orient": "bottom",
    "labelAlign": "left",
    "labelAngle": {
      "signal": _constants.SignalNames.TextAngleX
    },
    "labelFontSize": {
      "signal": _constants.SignalNames.TextSize
    },
    "titleAngle": {
      "signal": _constants.SignalNames.TextAngleX
    },
    "titleAlign": "left",
    "titleFontSize": {
      "signal": _constants.SignalNames.TextTitleSize
    },
    "titleColor": _vegaDeck.util.colorToString(specViewOptions.colors.axisText),
    "tickSize": specViewOptions.tickSize
  }, axisColor);

  if (xColumnQuantitative) {
    bottom.format = "~r";
  }

  const left = Object.assign({
    "orient": "left",
    "labelAlign": "right",
    "labelAngle": {
      "signal": _constants.SignalNames.TextAngleY
    },
    "labelFontSize": {
      "signal": _constants.SignalNames.TextSize
    },
    "titleAngle": {
      "signal": _constants.SignalNames.TextAngleY
    },
    "titleAlign": "right",
    "titleFontSize": {
      "signal": _constants.SignalNames.TextTitleSize
    },
    "titleColor": _vegaDeck.util.colorToString(specViewOptions.colors.axisText),
    "tickSize": specViewOptions.tickSize
  }, axisColor);

  if (yColumnQuantitative) {
    left.format = "~r";
  }

  return {
    left,
    bottom
  };
}
},{"./constants":"b0rV","../vega-deck.gl":"Uns8"}],"vXYY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _axes = require("../axes");

var _constants = require("../constants");

function _default(specViewOptions, columns) {
  const pa = (0, _axes.partialAxes)(specViewOptions, columns.x.quantitative, true);
  const axes = [Object.assign({
    "scale": _constants.ScaleNames.X,
    "title": columns.x.name
  }, pa.bottom), Object.assign({
    "scale": "yscalelabel",
    "title": specViewOptions.language.count,
    "encode": {
      "labels": {
        "update": {
          "text": {
            "signal": "shapesPerRow * datum.value"
          }
        }
      }
    }
  }, pa.left)];
  return axes;
}
},{"../axes":"m4Pj","../constants":"b0rV"}],"jWo5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(columns) {
  const stackTransform = {
    "type": "stack",
    "groupby": [{
      "field": columns.x.name
    }]
  };

  if (columns.sort) {
    stackTransform.sort = {
      "field": columns.sort.name
    };
  }

  const transforms = [stackTransform, {
    "type": "extent",
    "signal": "xtent",
    "field": "y1"
  }];
  return transforms;
}
},{}],"sqk8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _constants = require("../constants");

function _default(columns, groupBy) {
  const stackTransform = {
    "type": "stack",
    "groupby": ["__bin0"]
  };

  if (groupBy) {
    stackTransform.groupby.push(groupBy.name);
  }

  if (columns.sort) {
    stackTransform.sort = {
      "field": columns.sort.name
    };
  }

  const transforms = [{
    "type": "extent",
    "field": columns.x.name,
    "signal": "var_extent"
  }, {
    "type": "bin",
    "field": columns.x.name,
    "extent": {
      "signal": "var_extent"
    },
    "maxbins": {
      "signal": _constants.SignalNames.XBins
    },
    "as": ["__bin0", "__bin1"],
    "signal": "binSignal"
  }, stackTransform, {
    "type": "extent",
    "signal": "xtent",
    "field": "y1"
  }];
  return transforms;
}
},{"../constants":"b0rV"}],"b//p":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allTruthy = allTruthy;

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Returns array with items which are truthy.
 * @param args array or arrays to concat into a single array.
 */
function allTruthy(...args) {
  return args.reduce((p, c) => c ? p.concat(c) : p, []).filter(Boolean);
}
},{}],"83Xo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topLookup = topLookup;

var _constants = require("./constants");

function topLookup(column, count) {
  const data = [{
    "name": _constants.DataNames.TopLookup,
    "source": _constants.DataNames.Main,
    "transform": [{
      "type": "aggregate",
      "groupby": [column.name]
    }, {
      "type": "identifier",
      "as": "id"
    }, {
      "type": "filter",
      "expr": `datum.id <= ${count}`
    }]
  }, {
    "name": _constants.DataNames.Legend,
    "source": _constants.DataNames.Main,
    "transform": [{
      "type": "lookup",
      "from": _constants.DataNames.TopLookup,
      "key": column.name,
      "fields": [column.name],
      "values": [column.name],
      "as": [_constants.FieldNames.Top]
    }, {
      "type": "formula",
      "expr": `datum.${_constants.FieldNames.Top} || '${_constants.Other}'`,
      "as": _constants.FieldNames.Top
    }]
  }];
  return data;
}
},{"./constants":"b0rV"}],"Ou2c":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.nested = nested;
exports.stacked = stacked;

var _transform = _interopRequireDefault(require("./transform.qualitative"));

var _transform2 = _interopRequireDefault(require("./transform.quantitative"));

var _array = require("../../array");

var _constants = require("../constants");

var _facet = require("../facet");

var _top = require("../top");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(namespace, insight, columns, specViewOptions) {
  const categoricalColor = columns.color && !columns.color.quantitative;
  const nestedDataName = columns.facet && columns.facet.quantitative ? _constants.DataNames.Pre : _constants.DataNames.Main;
  const data = (0, _array.allTruthy)((0, _facet.facetSourceData)(columns.facet, insight.facets, _constants.DataNames.Main), categoricalColor && (0, _top.topLookup)(columns.color, specViewOptions.maxLegends), [nested(namespace, categoricalColor ? _constants.DataNames.Legend : nestedDataName, columns), stacked(namespace, namespace.nested, columns.facet && (0, _facet.facetTransforms)(columns.facet, insight.facets))], columns.x.quantitative && [{
    "name": "xaxisdata",
    "transform": [{
      "type": "sequence",
      "start": {
        "signal": "binSignal.start"
      },
      "stop": {
        "signal": "binSignal.stop"
      },
      "step": {
        "signal": "binSignal.step"
      }
    }]
  }], columns.facet && (0, _facet.facetGroupData)(namespace.stacked));
  return data;
}

function nested(namespace, source, columns) {
  const data = {
    "name": namespace.nested,
    source,
    "transform": columns.x.quantitative ? (0, _transform2.default)(columns, columns.facet) : (0, _transform.default)(columns)
  };
  return data;
}

function stacked(namespace, source, transforms) {
  const data = {
    "name": namespace.stacked,
    source,
    "transform": (0, _array.allTruthy)(transforms, xy(namespace))
  };
  return data;
}

function xy(namespace) {
  const transforms = [{
    "type": "formula",
    "expr": "floor(datum.y0 / shapesPerRow)",
    "as": namespace.__row
  }, {
    "type": "formula",
    "expr": "datum.y0 % shapesPerRow",
    "as": namespace.__column
  }];
  return transforms;
}
},{"./transform.qualitative":"jWo5","./transform.quantitative":"sqk8","../../array":"b//p","../constants":"b0rV","../facet":"7Ifg","../top":"83Xo"}],"Dq8R":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zeroIfCollapsed = zeroIfCollapsed;
exports.collapseY = collapseY;

var _constants = require("./constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function testForCollapseSelection() {
  return `datum.${_constants.FieldNames.Collapsed}`;
}

function zeroIfCollapsed(numericValueRef) {
  const rules = [{
    "test": testForCollapseSelection(),
    "value": 0
  }, numericValueRef];
  return rules;
}

function collapseY(numericValueRef) {
  const rules = [{
    "scale": _constants.ScaleNames.Y,
    "test": testForCollapseSelection(),
    "signal": `${_constants.SignalNames.YDomain}[0]`
  }, numericValueRef];
  return rules;
}
},{"./constants":"b0rV"}],"S7Dm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = fill;

var _constants = require("./constants");

var _vegaDeck = require("../vega-deck.gl");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function fill(colorColumn, specViewOptions) {
  return colorColumn ? {
    "scale": _constants.ScaleNames.Color,
    "field": colorColumn.quantitative ? colorColumn.name : _constants.FieldNames.Top
  } : {
    "value": _vegaDeck.util.colorToString(specViewOptions.colors.defaultCube)
  };
}
},{"./constants":"b0rV","../vega-deck.gl":"Uns8"}],"3Y6I":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _selection = require("../selection");

var _constants = require("../constants");

var _fill = require("../fill");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(namespace, columns, specViewOptions) {
  const mark = {
    "type": "rect",
    "from": {
      "data": namespace.stacked
    },
    "encode": {
      "update": {
        "x": {
          "scale": _constants.ScaleNames.X,
          "field": columns.x.quantitative ? "__bin0" : columns.x.name,
          "offset": {
            "scale": "xnewinternalscale",
            "field": namespace.__column
          }
        },
        "width": {
          "scale": "xnewinternalscale",
          "band": true
        },
        "y": (0, _selection.collapseY)({
          "scale": _constants.ScaleNames.Y,
          "field": namespace.__row,
          "band": true,
          "offset": {
            "signal": `-bandwidth('${_constants.ScaleNames.Y}')-1`
          }
        }),
        "height": (0, _selection.zeroIfCollapsed)({
          "scale": _constants.ScaleNames.Y,
          "band": true
        }),
        "fill": (0, _fill.fill)(columns.color, specViewOptions)
      }
    }
  };

  if (columns.z) {
    const update = mark.encode.update;
    update.z = {
      "value": 0
    };
    update.depth = (0, _selection.zeroIfCollapsed)({
      "scale": _constants.ScaleNames.Z,
      "field": columns.z.name
    });
  }

  return [mark];
}
},{"../selection":"Dq8R","../constants":"b0rV","../fill":"S7Dm"}],"X355":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(namespace, columns) {
  const scales = [{
    "name": "xscaleavailable",
    "type": "band",
    "range": "width",
    "domain": {
      "data": namespace.nested,
      "field": columns.x.name,
      "sort": true
    }
  }, {
    "name": _constants.ScaleNames.X,
    "type": "band",
    "range": [0, {
      "signal": "width"
    }],
    "padding": 0.01,
    "domain": {
      "data": namespace.stacked,
      "field": columns.x.name,
      "sort": true
    }
  }];
  return scales;
}
},{"../constants":"b0rV"}],"gCjg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(namespace, columns) {
  const scales = [{
    "name": "xscaleavailable",
    "type": "band",
    "range": "width",
    "domain": {
      "data": namespace.nested,
      "field": "__bin0",
      "sort": true
    }
  }, {
    "name": _constants.ScaleNames.X,
    "type": "band",
    "range": [0, {
      "signal": "width"
    }],
    "padding": 0.01,
    "domain": {
      "data": "xaxisdata",
      "field": "data",
      "sort": true
    }
  }];
  return scales;
}
},{"../constants":"b0rV"}],"v/y+":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearScale = linearScale;
exports.pointScale = pointScale;
exports.binnableColorScale = binnableColorScale;

var _constants = require("./constants");

function linearScale(name, data, field, range, reverse, zero) {
  const scale = {
    name,
    "type": "linear",
    range,
    "round": true,
    reverse,
    "domain": {
      data,
      field
    },
    zero,
    "nice": true
  };
  return scale;
}

function pointScale(name, data, range, field, reverse) {
  const scale = {
    name,
    "type": "point",
    range,
    "domain": {
      data,
      field,
      sort: true
    },
    "padding": 0.5
  };

  if (reverse !== undefined) {
    scale.reverse = reverse;
  }

  return scale;
}

function binnableColorScale(colorBin, data, field, scheme) {
  scheme = scheme || _constants.ColorScaleNone;
  const name = _constants.ScaleNames.Color;
  const domain = {
    data,
    field
  };
  const range = {
    scheme
  };
  const reverse = {
    "signal": _constants.SignalNames.ColorReverse
  };

  if (colorBin !== 'continuous') {
    range.count = {
      signal: _constants.SignalNames.ColorBinCount
    };
  }

  switch (colorBin) {
    case 'continuous':
      const sequentialScale = {
        name,
        "type": "sequential",
        domain,
        range,
        reverse
      };
      return sequentialScale;

    case 'quantile':
      const quantileScale = {
        name,
        "type": "quantile",
        domain,
        range,
        reverse
      };
      return quantileScale;

    default:
      const quantizeScale = {
        name,
        "type": "quantize",
        domain,
        range,
        reverse
      };
      return quantizeScale;
  }
}
},{"./constants":"b0rV"}],"UQ/Q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _scales = _interopRequireDefault(require("./scales.qualitative"));

var _scales2 = _interopRequireDefault(require("./scales.quantitative"));

var _constants = require("../constants");

var _scales3 = require("../scales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(namespace, insight, columns) {
  const scales = [{
    "name": "xnewinternalscale",
    "type": "band",
    "range": [0, {
      "signal": "xdesbandwidth"
    }],
    "padding": 0.1,
    "domain": {
      "signal": "sequence(0, shapesPerRow+1, 1)"
    }
  }, {
    "name": "yscalelabel",
    "range": [{
      "signal": "height"
    }, {
      "signal": "0"
    }],
    "round": true,
    "domain": {
      "data": namespace.stacked,
      "field": namespace.__row,
      "sort": true
    },
    "zero": true,
    "nice": true
  }, {
    "name": _constants.ScaleNames.Y,
    "type": "band",
    "range": [{
      "signal": "height"
    }, {
      "signal": "0"
    }],
    "padding": 0.1,
    "round": true,
    "reverse": false,
    "align": 1,
    "domain": {
      "data": namespace.stacked,
      "field": namespace.__row,
      "sort": true
    }
  }];

  if (columns.color) {
    if (columns.color.quantitative) {
      scales.push((0, _scales3.binnableColorScale)(insight.colorBin, namespace.nested, columns.color.name, insight.scheme));
    } else {
      scales.push({
        "name": _constants.ScaleNames.Color,
        "type": "ordinal",
        "domain": {
          "data": namespace.nested,
          "field": _constants.FieldNames.Top,
          "sort": true
        },
        "range": {
          "scheme": insight.scheme || _constants.ColorScaleNone
        },
        "reverse": {
          "signal": _constants.SignalNames.ColorReverse
        }
      });
    }
  }

  if (columns.z) {
    const zRange = [0, {
      "signal": _constants.SignalNames.ZHeight
    }];
    scales.push(columns.z.quantitative ? (0, _scales3.linearScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, columns.z.name, zRange, false, true) : (0, _scales3.pointScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, zRange, columns.z.name));
  }

  return scales.concat(columns.x.quantitative ? (0, _scales2.default)(namespace, columns) : (0, _scales.default)(namespace, columns));
}
},{"./scales.qualitative":"X355","./scales.quantitative":"gCjg","../constants":"b0rV","../scales":"v/y+"}],"N3c7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textSignals = textSignals;
exports.colorBinCountSignal = colorBinCountSignal;
exports.colorReverseSignal = colorReverseSignal;

var _constants = require("./constants");

function textSignals(specViewOptions) {
  const signals = [{
    "name": _constants.SignalNames.ZProportion,
    "value": 0.6,
    "bind": {
      "name": specViewOptions.language.zScaleProportion,
      "debounce": 50,
      "input": "range",
      "min": 0.2,
      "max": 2,
      "step": 0.1
    }
  }, {
    "name": _constants.SignalNames.ZHeight,
    "update": `height * ${_constants.SignalNames.ZProportion}`
  }, {
    "name": _constants.SignalNames.TextScale,
    "value": 2,
    "bind": {
      "name": specViewOptions.language.textScaleSignal,
      "debounce": 50,
      "input": "range",
      "min": 1,
      "max": 5,
      "step": 0.5
    }
  }, {
    "name": _constants.SignalNames.TextSize,
    "update": `${_constants.SignalNames.TextScale} * 10`
  }, {
    "name": _constants.SignalNames.TextTitleSize,
    "update": `${_constants.SignalNames.TextScale} * 15`
  }, {
    "name": _constants.SignalNames.TextAngleX,
    "value": 30,
    "bind": {
      "name": specViewOptions.language.xAxisTextAngleSignal,
      "debounce": 50,
      "input": "range",
      "min": 0,
      "max": 90,
      "step": 1
    }
  }, {
    "name": _constants.SignalNames.TextAngleY,
    "value": 0,
    "bind": {
      "name": specViewOptions.language.yAxisTextAngleSignal,
      "debounce": 50,
      "input": "range",
      "min": -90,
      "max": 0,
      "step": 1
    }
  }];
  return signals;
}

function colorBinCountSignal(specViewOptions) {
  const signal = {
    "name": _constants.SignalNames.ColorBinCount,
    "value": 7,
    "bind": {
      "name": specViewOptions.language.colorBinCount,
      "input": "range",
      "min": 1,
      "max": specViewOptions.maxLegends + 1,
      "step": 1
    }
  };
  return signal;
}

function colorReverseSignal(specViewOptions) {
  const signal = {
    "name": _constants.SignalNames.ColorReverse,
    "value": false,
    "bind": {
      "name": specViewOptions.language.colorReverse,
      "input": "checkbox"
    }
  };
  return signal;
}
},{"./constants":"b0rV"}],"I0up":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _signals = require("../signals");

var _facet = require("../facet");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, columns, specViewOptions) {
  const signals = (0, _array.allTruthy)((0, _signals.textSignals)(specViewOptions), [{
    "name": _constants.SignalNames.YDomain,
    "update": `domain('${_constants.ScaleNames.Y}')`
  }, columns.x.quantitative && {
    "name": _constants.SignalNames.XBins,
    "value": 7,
    "bind": {
      "name": specViewOptions.language.XBinSize,
      "input": "range",
      "min": 1,
      "max": 20,
      "step": 1
    }
  }, {
    "name": "xdesbandwidth",
    "update": `bandwidth('${columns.x.quantitative ? _constants.ScaleNames.X : 'xscaleavailable'}')`
  }, {
    "name": "binAspect",
    "update": "xdesbandwidth/height"
  }, {
    "name": "shapesPerRow",
    "update": "ceil(sqrt(binAspect*xtent[1]))"
  }, (0, _signals.colorBinCountSignal)(specViewOptions), (0, _signals.colorReverseSignal)(specViewOptions)], columns.facet && (0, _facet.facetSignals)(insight.facets, specViewOptions));
  return signals;
}
},{"../../array":"b//p","../signals":"N3c7","../facet":"7Ifg","../constants":"b0rV"}],"6oTL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.legend = legend;

var _constants = require("./constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function legend(column) {
  const legend = {
    "orient": "none",
    "title": column.name,
    "fill": _constants.ScaleNames.Color,
    "encode": {
      "symbols": {
        "update": {
          "shape": {
            "value": "square"
          }
        }
      }
    }
  };

  if (column.quantitative) {
    legend.type = "symbol";
  }

  return legend;
}
},{"./constants":"b0rV"}],"bs4R":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NameSpace = void 0;

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
class NameSpace {
  constructor(nameSpace = '') {
    ['nested', 'stacked', '__column', '__row'].forEach(name => {
      this[name] = `${name}${nameSpace}`;
    });
  }

}

exports.NameSpace = NameSpace;
},{}],"MNJW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.barchart = void 0;

var _axes = _interopRequireDefault(require("./axes"));

var _data = _interopRequireWildcard(require("./data"));

var _marks = _interopRequireDefault(require("./marks"));

var _scales = _interopRequireDefault(require("./scales"));

var _signals = _interopRequireDefault(require("./signals"));

var _facet = require("../facet");

var _constants = require("../constants");

var _legends = require("../legends");

var _namespace = require("./namespace");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const barchart = (insight, columns, specViewOptions) => {
  const errors = [];
  if (!columns.x) errors.push(`Must set a field for x axis`);
  (0, _facet.checkForFacetErrors)(insight.facets, errors);
  const specCapabilities = {
    roles: [{
      role: 'x',
      binnable: true,
      axisSelection: columns.x && columns.x.quantitative ? 'range' : 'exact',
      signals: [_constants.SignalNames.XBins]
    }, {
      role: 'z',
      allowNone: true
    }, {
      role: 'color',
      allowNone: true
    }, {
      role: 'sort',
      allowNone: true
    }, {
      role: 'facet',
      allowNone: true
    }]
  };

  if (errors.length) {
    return {
      errors,
      specCapabilities,
      vegaSpec: null
    };
  }

  const rootNamespace = new _namespace.NameSpace();
  let axes;

  if (!insight.hideAxes) {
    axes = (0, _axes.default)(specViewOptions, columns);
  }

  let marks;

  if (columns.facet) {
    const cellNamespace = new _namespace.NameSpace('Cell');
    const cellMarks = (0, _marks.default)(cellNamespace, columns, specViewOptions);
    const cd = columns.x.quantitative ? [(0, _data.stacked)(cellNamespace, _constants.DataNames.FacetGroupCell)] : [(0, _data.nested)(cellNamespace, _constants.DataNames.FacetGroupCell, columns), (0, _data.stacked)(cellNamespace, cellNamespace.nested)];
    marks = (0, _facet.facetMarks)(specViewOptions, rootNamespace.stacked, cellMarks, axes, cd);
    axes = [];
  } else {
    marks = (0, _marks.default)(rootNamespace, columns, specViewOptions);
  }

  const size = columns.facet ? (0, _facet.facetSize)(insight.facets, insight.size, specViewOptions) : insight.size;
  var vegaSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "height": size.height,
    "width": size.width,
    signals: (0, _signals.default)(insight, columns, specViewOptions),
    scales: (0, _scales.default)(rootNamespace, insight, columns),
    data: (0, _data.default)(rootNamespace, insight, columns, specViewOptions),
    marks
  };

  if (!insight.hideAxes && axes && axes.length) {
    vegaSpec.axes = axes;
  }

  if (columns.color && !insight.hideLegend) {
    vegaSpec.legends = [(0, _legends.legend)(columns.color)];
  }

  if (columns.facet) {
    vegaSpec.layout = (0, _facet.layout)(specViewOptions);
  } else {
    //use autosize only when not faceting
    vegaSpec.autosize = "fit";
  }

  return {
    vegaSpec,
    specCapabilities
  };
};

exports.barchart = barchart;
},{"./axes":"vXYY","./data":"Ou2c","./marks":"3Y6I","./scales":"UQ/Q","./signals":"I0up","../facet":"7Ifg","../constants":"b0rV","../legends":"6oTL","./namespace":"bs4R"}],"0BUb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _axes = require("../axes");

function _default(specViewOptions, columns) {
  const pa = (0, _axes.partialAxes)(specViewOptions, columns.x.quantitative, columns.y.quantitative);
  const axes = [Object.assign({
    "scale": "xscale",
    "title": columns.x.name,
    "bandPosition": 0.5,
    "grid": true,
    "labelFlush": true
  }, pa.bottom), Object.assign({
    "scale": "yscale",
    "title": columns.y.name,
    "bandPosition": columns.y.quantitative ? 0 : 0.5,
    "grid": true,
    "labelFlush": true
  }, pa.left)];
  return axes;
}
},{"../axes":"m4Pj"}],"Y16r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _constants = require("../constants");

var _top = require("../top");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, columns, specViewOptions) {
  const categoricalColor = columns.color && !columns.color.quantitative;
  const data = (0, _array.allTruthy)([{
    "name": _constants.DataNames.Main,
    "transform": (0, _array.allTruthy)([{
      "type": "formula",
      "as": "ff_field1",
      "expr": `datum[${JSON.stringify(columns.x.name)}]`
    }, {
      "type": "formula",
      "as": "ff_field2",
      "expr": `datum[${JSON.stringify(columns.y.name)}]`
    }], columns.x.quantitative && [{
      "type": "extent",
      "field": columns.x.name,
      "signal": "var_Xextent"
    }, {
      "type": "bin",
      "field": columns.x.name,
      "extent": {
        "signal": "var_Xextent"
      },
      "maxbins": {
        "signal": _constants.SignalNames.XBins
      },
      "as": ["__binx0", "__binx1"],
      "signal": "binXSignal"
    }], columns.y.quantitative && [{
      "type": "extent",
      "field": columns.y.name,
      "signal": "var_Yextent"
    }, {
      "type": "bin",
      "field": columns.y.name,
      "extent": {
        "signal": "var_Yextent"
      },
      "maxbins": {
        "signal": _constants.SignalNames.YBins
      },
      "as": ["__biny0", "__biny1"],
      "signal": "binYSignal"
    }])
  }], columns.x.quantitative && [{
    "name": "xaxisdata",
    "transform": [{
      "type": "sequence",
      "start": {
        "signal": "binXSignal.start"
      },
      "stop": {
        "signal": "binXSignal.stop"
      },
      "step": {
        "signal": "binXSignal.step"
      }
    }]
  }], columns.y.quantitative && [{
    "name": "yaxisdata",
    "transform": [{
      "type": "sequence",
      "start": {
        "signal": "binYSignal.start"
      },
      "stop": {
        "signal": "binYSignal.stop"
      },
      "step": {
        "signal": "binYSignal.step"
      }
    }]
  }], categoricalColor && (0, _top.topLookup)(columns.color, specViewOptions.maxLegends), [{
    "name": "aggregated",
    "source": categoricalColor ? _constants.DataNames.Legend : _constants.DataNames.Main,
    "transform": [{
      "type": "joinaggregate",
      "groupby": [columns.x.quantitative ? "__binx0" : "ff_field1", columns.y.quantitative ? "__biny0" : "ff_field2"],
      "ops": ["count"],
      "as": ["count"]
    }, windowTransform(columns), {
      "type": "extent",
      "field": "s1",
      "signal": "cextent"
    }]
  }]);
  return data;
}

function windowTransform(columns) {
  const t = {
    "type": "window",
    "groupby": [columns.x.quantitative ? "__binx0" : "ff_field1", columns.y.quantitative ? "__biny0" : "ff_field2"],
    "ops": ["row_number"],
    "as": ["s1"]
  };

  if (columns.sort) {
    t.sort = {
      "field": [columns.sort.name],
      "order": ["descending"]
    };
  }

  return t;
}
},{"../../array":"b//p","../constants":"b0rV","../top":"83Xo"}],"+gFU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _fill = require("../fill");

var _constants = require("../constants");

var _selection = require("../selection");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, specViewOptions) {
  const mark = {
    "type": "rect",
    "from": {
      "data": "aggregated"
    },
    "sort": {
      "field": ["ff_field1", "ff_field2"],
      "order": ["ascending", "ascending"]
    },
    "encode": {
      "update": {
        "xc": {
          "scale": "xscale",
          "field": columns.x.quantitative ? "__binx0" : "ff_field1",
          "offset": {
            "signal": "scale('sizescale', ((datum.s1-1) % floor(sqrt(datum.count))))-scale('sizescale', sqrt(datum.count)-2)/2"
          }
        },
        "yc": {
          "scale": "yscale",
          "field": columns.y.quantitative ? "__biny0" : "ff_field2",
          "offset": {
            "signal": "scale('sizescale',height/width*floor(((datum.s1-1) / floor(sqrt(datum.count))))) - scale('sizescale', height/width*sqrt(datum.count)+2)/2"
          }
        },
        "width": {
          "signal": "unitsize"
        },
        "height": {
          "signal": "height/width*unitsize"
        },
        "fill": (0, _fill.fill)(columns.color, specViewOptions)
      }
    }
  };

  if (columns.z) {
    const update = mark.encode.update;
    update.z = {
      "value": 0
    };
    update.depth = (0, _selection.zeroIfCollapsed)({
      "scale": _constants.ScaleNames.Z,
      "field": columns.z.name
    });
  }

  return [mark];
}
},{"../fill":"S7Dm","../constants":"b0rV","../selection":"Dq8R"}],"PKQh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _scales = require("../scales");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, insight) {
  const scales = [{
    "name": "xscale",
    "type": "point",
    "domain": columns.x.quantitative ? {
      "data": "xaxisdata",
      "field": "data",
      "sort": true
    } : {
      "data": _constants.DataNames.Main,
      "field": columns.x.name,
      "sort": true
    },
    "range": "width",
    "padding": 0.5
  }, {
    "name": "yscale",
    "type": "point",
    "domain": columns.y.quantitative ? {
      "data": "yaxisdata",
      "field": "data",
      "sort": true
    } : {
      "data": _constants.DataNames.Main,
      "field": columns.y.name,
      "sort": true
    },
    "range": "height",
    "reverse": true,
    "padding": 0.5
  }, {
    "name": "sizescale",
    "type": "linear",
    "domain": [0, {
      "signal": "sqrt(cextent[1])"
    }],
    "range": [0, {
      "signal": "width/max(xsize,ysize)"
    }]
  }];

  if (columns.color) {
    if (columns.color.quantitative) {
      scales.push((0, _scales.binnableColorScale)(insight.colorBin, _constants.DataNames.Main, columns.color.name, insight.scheme));
    } else {
      scales.push({
        "name": _constants.ScaleNames.Color,
        "type": "ordinal",
        "domain": {
          "data": _constants.DataNames.Legend,
          "field": _constants.FieldNames.Top,
          "sort": true
        },
        "range": {
          "scheme": insight.scheme || _constants.ColorScaleNone
        },
        "reverse": {
          "signal": _constants.SignalNames.ColorReverse
        }
      });
    }
  }

  if (columns.z) {
    const zRange = [0, {
      "signal": _constants.SignalNames.ZHeight
    }];
    scales.push(columns.z.quantitative ? (0, _scales.linearScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, columns.z.name, zRange, false, true) : (0, _scales.pointScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, zRange, columns.z.name));
  }

  return scales;
}
},{"../scales":"v/y+","../constants":"b0rV"}],"5olt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _signals = require("../signals");

var _facet = require("../facet");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, columns, specViewOptions) {
  const signals = (0, _array.allTruthy)((0, _signals.textSignals)(specViewOptions), [(0, _signals.colorBinCountSignal)(specViewOptions), (0, _signals.colorReverseSignal)(specViewOptions), {
    "name": "unitpad",
    "value": 0.1,
    "bind": {
      "name": _constants.SignalNames.InnerPadding,
      "input": "range",
      "min": 0.1,
      "max": 1.0,
      "step": 0.1
    }
  }, {
    "name": "xsize",
    "update": "domain('xscale').length"
  }, {
    "name": "ysize",
    "update": "domain('yscale').length"
  }, {
    "name": "cellwidth",
    "update": "width/max(xsize,ysize)"
  }, {
    "name": "maxnumbers",
    "update": "sqrt(cextent[1])"
  }, {
    "name": "unitsize",
    "update": "cellwidth/((1 + unitpad)*maxnumbers)"
  }, columns.x.quantitative && {
    "name": _constants.SignalNames.XBins,
    "value": 30,
    "bind": {
      "name": specViewOptions.language.XBinSize,
      "input": "range",
      "min": 1,
      "max": 60,
      "step": 1
    }
  }, columns.y.quantitative && {
    "name": _constants.SignalNames.YBins,
    "value": 30,
    "bind": {
      "name": specViewOptions.language.YBinSize,
      "input": "range",
      "min": 1,
      "max": 60,
      "step": 1
    }
  }], insight.columns.facet && (0, _facet.facetSignals)(insight.facets, specViewOptions));
  return signals;
}
},{"../../array":"b//p","../signals":"N3c7","../facet":"7Ifg","../constants":"b0rV"}],"7yaW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.density = void 0;

var _axes = _interopRequireDefault(require("./axes"));

var _data = _interopRequireDefault(require("./data"));

var _marks = _interopRequireDefault(require("./marks"));

var _scales = _interopRequireDefault(require("./scales"));

var _signals = _interopRequireDefault(require("./signals"));

var _facet = require("../facet");

var _legends = require("../legends");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const density = (insight, columns, specViewOptions) => {
  const errors = [];
  if (!columns.x) errors.push(`Must set a field for x axis`);
  if (!columns.y) errors.push(`Must set a field for y axis`);
  (0, _facet.checkForFacetErrors)(insight.facets, errors);
  const specCapabilities = {
    roles: [{
      role: 'x',
      binnable: true,
      axisSelection: columns.x && columns.x.quantitative ? 'range' : 'exact',
      signals: [_constants.SignalNames.XBins]
    }, {
      role: 'y',
      binnable: true,
      axisSelection: columns.y && columns.y.quantitative ? 'range' : 'exact',
      signals: [_constants.SignalNames.YBins]
    }, {
      role: 'z',
      allowNone: true
    }, {
      role: 'color',
      allowNone: true
    }, {
      role: 'sort',
      allowNone: true
    }]
  };

  if (errors.length) {
    return {
      errors,
      specCapabilities,
      vegaSpec: null
    };
  }

  const size = columns.facet ? (0, _facet.facetSize)(insight.facets, insight.size, specViewOptions) : insight.size;
  var vegaSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "height": size.height,
    "width": size.width,
    signals: (0, _signals.default)(insight, columns, specViewOptions),
    data: (0, _data.default)(insight, columns, specViewOptions),
    scales: (0, _scales.default)(columns, insight),
    marks: (0, _marks.default)(columns, specViewOptions)
  };

  if (!insight.hideAxes) {
    vegaSpec.axes = (0, _axes.default)(specViewOptions, columns);
  }

  if (columns.color && !insight.hideLegend) {
    vegaSpec.legends = [(0, _legends.legend)(columns.color)];
  }

  if (columns.facet) {
    vegaSpec.layout = (0, _facet.layout)(specViewOptions);
  } else {
    //use autosize only when not faceting
    vegaSpec.autosize = "fit";
  }

  return {
    vegaSpec,
    specCapabilities
  };
};

exports.density = density;
},{"./axes":"0BUb","./data":"Y16r","./marks":"+gFU","./scales":"PKQh","./signals":"5olt","../facet":"7Ifg","../legends":"6oTL","../constants":"b0rV"}],"iQ8b":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _constants = require("../constants");

var _top = require("../top");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, specViewOptions) {
  const categoricalColor = columns.color && !columns.color.quantitative;
  const data = (0, _array.allTruthy)([{
    "name": _constants.DataNames.Main,
    "transform": (0, _array.allTruthy)([columns.sort && {
      "type": "collect",
      "sort": {
        "field": columns.sort.name
      }
    }, {
      "type": "window",
      "ops": ["count"],
      "as": [_constants.FieldNames.Index]
    }])
  }], categoricalColor && (0, _top.topLookup)(columns.color, specViewOptions.maxLegends));
  return data;
}
},{"../../array":"b//p","../constants":"b0rV","../top":"83Xo"}],"gPej":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Total = exports.RowCount = exports.ColumnCount = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const ColumnCount = "columncount";
exports.ColumnCount = ColumnCount;
const RowCount = "rowcount";
exports.RowCount = RowCount;
const Total = "total";
exports.Total = Total;
},{}],"qxOY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _constants = require("./constants");

var _constants2 = require("../constants");

var _fill = require("../fill");

var _selection = require("../selection");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(data, columns, specViewOptions) {
  const marks = [{
    "type": "rect",
    "from": {
      data
    },
    "encode": {
      "update": {
        "x": {
          "signal": `(datum['${_constants2.FieldNames.Index}']-1)%${_constants.ColumnCount}`,
          "scale": _constants2.ScaleNames.X
        },
        "width": {
          "scale": _constants2.ScaleNames.X,
          "band": true
        },
        "y": {
          "signal": `floor((datum['${_constants2.FieldNames.Index}']-1)/${_constants.ColumnCount})`,
          "scale": _constants2.ScaleNames.Y
        },
        "height": {
          "scale": _constants2.ScaleNames.Y,
          "band": true
        },
        "fill": (0, _fill.fill)(columns.color, specViewOptions)
      }
    }
  }];

  if (columns.z) {
    const update = marks[0].encode.update;
    update.z = {
      "value": 0
    };
    update.depth = (0, _selection.zeroIfCollapsed)({
      "scale": _constants2.ScaleNames.Z,
      "field": columns.z.name
    });
  }

  return marks;
}
},{"./constants":"gPej","../constants":"b0rV","../fill":"S7Dm","../selection":"Dq8R"}],"q7IG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _scales = require("../scales");

var _constants = require("../constants");

var _constants2 = require("./constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, insight) {
  const scales = [{
    "name": _constants.ScaleNames.X,
    "type": "band",
    "domain": {
      "signal": `sequence(0, ${_constants2.ColumnCount}, 1)`
    },
    "range": "width",
    "paddingInner": 0.1,
    "paddingOuter": 0
  }, {
    "name": _constants.ScaleNames.Y,
    "type": "band",
    "domain": {
      "signal": `sequence(0, ${_constants2.RowCount}, 1)`
    },
    "range": "height",
    "paddingInner": 0.1,
    "paddingOuter": 0
  }];

  if (columns.color) {
    if (columns.color.quantitative) {
      scales.push((0, _scales.binnableColorScale)(insight.colorBin, _constants.DataNames.Main, columns.color.name, insight.scheme));
    } else {
      scales.push({
        "name": _constants.ScaleNames.Color,
        "type": "ordinal",
        "domain": {
          "data": _constants.DataNames.Legend,
          "field": _constants.FieldNames.Top,
          "sort": true
        },
        "range": {
          "scheme": insight.scheme || _constants.ColorScaleNone
        },
        "reverse": {
          "signal": _constants.SignalNames.ColorReverse
        }
      });
    }
  }

  if (columns.z) {
    const zRange = [0, {
      "signal": _constants.SignalNames.ZHeight
    }];
    scales.push(columns.z.quantitative ? (0, _scales.linearScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, columns.z.name, zRange, false, false) : (0, _scales.pointScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, zRange, columns.z.name));
  }

  return scales;
}
},{"../scales":"v/y+","../constants":"b0rV","./constants":"gPej"}],"5Qhd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _signals = require("../signals");

var _constants = require("./constants");

var _constants2 = require("../constants");

var _facet = require("../facet");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, specViewOptions) {
  const signals = (0, _array.allTruthy)((0, _signals.textSignals)(specViewOptions), [(0, _signals.colorBinCountSignal)(specViewOptions), {
    "name": _constants.Total,
    "update": `data('${_constants2.DataNames.Main}').length`
  }, {
    "name": _constants.ColumnCount,
    "update": `ceil(sqrt((width/height)*${_constants.Total}))`
  }, {
    "name": _constants.RowCount,
    "update": `${_constants.Total}/${_constants.ColumnCount}`
  }, (0, _signals.colorReverseSignal)(specViewOptions)], insight.columns && insight.columns.facet && (0, _facet.facetSignals)(insight.facets, specViewOptions));
  return signals;
}
},{"../../array":"b//p","../signals":"N3c7","./constants":"gPej","../constants":"b0rV","../facet":"7Ifg"}],"m34o":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grid = void 0;

var _data = _interopRequireDefault(require("./data"));

var _marks = _interopRequireDefault(require("./marks"));

var _scales = _interopRequireDefault(require("./scales"));

var _signals = _interopRequireDefault(require("./signals"));

var _constants = require("../constants");

var _legends = require("../legends");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const grid = (insight, columns, specViewOptions) => {
  const errors = [];
  const specCapabilities = {
    roles: [{
      role: 'z',
      allowNone: true
    }, {
      role: 'color',
      allowNone: true
    }, {
      role: 'sort',
      allowNone: true
    }]
  };

  if (errors.length) {
    return {
      errors,
      specCapabilities,
      vegaSpec: null
    };
  }

  const categoricalColor = columns.color && !columns.color.quantitative;
  const dataName = categoricalColor ? _constants.DataNames.Legend : _constants.DataNames.Main;
  const size = insight.size;
  var vegaSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "height": size.height,
    "width": size.width,
    signals: (0, _signals.default)(insight, specViewOptions),
    scales: (0, _scales.default)(columns, insight),
    data: (0, _data.default)(columns, specViewOptions),
    marks: (0, _marks.default)(dataName, columns, specViewOptions)
  };

  if (columns.color && !insight.hideLegend) {
    vegaSpec.legends = [(0, _legends.legend)(columns.color)];
  } //use autosize only when not faceting


  vegaSpec.autosize = "fit";
  return {
    vegaSpec,
    specCapabilities
  };
};

exports.grid = grid;
},{"./data":"iQ8b","./marks":"qxOY","./scales":"q7IG","./signals":"5Qhd","../constants":"b0rV","../legends":"6oTL"}],"DRuS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _axes = require("../axes");

var _constants = require("../constants");

function _default(specViewOptions, columns) {
  const pa = (0, _axes.partialAxes)(specViewOptions, columns.x.quantitative, columns.y.quantitative);
  const axes = [Object.assign({
    "scale": _constants.ScaleNames.X,
    "title": columns.x.name
  }, pa.bottom), Object.assign({
    "scale": _constants.ScaleNames.Y,
    "title": columns.y.name
  }, pa.left)];
  return axes;
}
},{"../axes":"m4Pj","../constants":"b0rV"}],"4cCo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _constants = require("../constants");

var _facet = require("../facet");

var _top = require("../top");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, columns, specViewOptions) {
  const categoricalColor = columns.color && !columns.color.quantitative;
  const ScatterDataName = "SandDanceScatterPlotData";
  const data = (0, _array.allTruthy)((0, _facet.facetSourceData)(columns.facet, insight.facets, ScatterDataName), [{
    "name": _constants.DataNames.Main,
    "source": ScatterDataName,
    "transform": (0, _array.allTruthy)(columns.facet && (0, _facet.facetTransforms)(columns.facet, insight.facets))
  }], categoricalColor && (0, _top.topLookup)(columns.color, specViewOptions.maxLegends), columns.facet && (0, _facet.facetGroupData)(_constants.DataNames.Main));
  return data;
}
},{"../../array":"b//p","../constants":"b0rV","../facet":"7Ifg","../top":"83Xo"}],"Vq7N":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _selection = require("../selection");

var _constants = require("../constants");

var _fill = require("../fill");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, specViewOptions) {
  const categoricalColor = columns.color && !columns.color.quantitative;
  const marks = [{
    "type": "rect",
    "from": {
      "data": categoricalColor ? _constants.DataNames.Legend : _constants.DataNames.Main
    },
    "encode": {
      "update": {
        "x": {
          "scale": _constants.ScaleNames.X,
          "field": columns.x.name,
          "offset": 1
        },
        "width": {
          "signal": _constants.SignalNames.PointSize
        },
        "y": (0, _selection.collapseY)({
          "scale": _constants.ScaleNames.Y,
          "field": columns.y.name,
          "offset": {
            "signal": `-${_constants.SignalNames.PointSize}`
          }
        }),
        "height": (0, _selection.zeroIfCollapsed)({
          "signal": _constants.SignalNames.PointSize
        }),
        "fill": (0, _fill.fill)(columns.color, specViewOptions)
      }
    }
  }];

  if (columns.z) {
    const update = marks[0].encode.update;
    update.z = (0, _selection.zeroIfCollapsed)({
      "scale": _constants.ScaleNames.Z,
      "field": columns.z.name
    });
    update.depth = {
      "signal": _constants.SignalNames.PointSize
    };
  }

  return marks;
}
},{"../selection":"Dq8R","../constants":"b0rV","../fill":"S7Dm"}],"vZre":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _scales = require("../scales");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, insight) {
  const scales = [columns.x.quantitative ? (0, _scales.linearScale)(_constants.ScaleNames.X, _constants.DataNames.Main, columns.x.name, "width", false, false) : (0, _scales.pointScale)(_constants.ScaleNames.X, _constants.DataNames.Main, "width", columns.x.name), columns.y.quantitative ? (0, _scales.linearScale)(_constants.ScaleNames.Y, _constants.DataNames.Main, columns.y.name, "height", false, false) : (0, _scales.pointScale)(_constants.ScaleNames.Y, _constants.DataNames.Main, "height", columns.y.name, true)];

  if (columns.color) {
    if (columns.color.quantitative) {
      scales.push((0, _scales.binnableColorScale)(insight.colorBin, _constants.DataNames.Main, columns.color.name, insight.scheme));
    } else {
      scales.push({
        "name": _constants.ScaleNames.Color,
        "type": "ordinal",
        "domain": {
          "data": _constants.DataNames.Legend,
          "field": _constants.FieldNames.Top,
          "sort": true
        },
        "range": {
          "scheme": insight.scheme || _constants.ColorScaleNone
        },
        "reverse": {
          "signal": _constants.SignalNames.ColorReverse
        }
      });
    }
  }

  if (columns.z) {
    const zRange = [0, {
      "signal": _constants.SignalNames.ZHeight
    }];
    scales.push(columns.z.quantitative ? (0, _scales.linearScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, columns.z.name, zRange, false, false) : (0, _scales.pointScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, zRange, columns.z.name));
  }

  return scales;
}
},{"../scales":"v/y+","../constants":"b0rV"}],"jiD2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _signals = require("../signals");

var _facet = require("../facet");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, specViewOptions) {
  const signals = (0, _array.allTruthy)((0, _signals.textSignals)(specViewOptions), [{
    "name": _constants.SignalNames.YDomain,
    "update": `domain('${_constants.ScaleNames.Y}')`
  }, {
    "name": _constants.SignalNames.PointSize,
    "value": 5,
    "bind": {
      "name": specViewOptions.language.scatterPointSize,
      "debounce": 50,
      "input": "range",
      "min": 1,
      "max": 25,
      "step": 1
    }
  }, (0, _signals.colorBinCountSignal)(specViewOptions), (0, _signals.colorReverseSignal)(specViewOptions)], insight.columns.facet && (0, _facet.facetSignals)(insight.facets, specViewOptions));
  return signals;
}
},{"../../array":"b//p","../signals":"N3c7","../facet":"7Ifg","../constants":"b0rV"}],"Rl9U":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scatterplot = void 0;

var _axes = _interopRequireDefault(require("./axes"));

var _data = _interopRequireDefault(require("./data"));

var _marks = _interopRequireDefault(require("./marks"));

var _scales = _interopRequireDefault(require("./scales"));

var _signals = _interopRequireDefault(require("./signals"));

var _facet = require("../facet");

var _legends = require("../legends");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const scatterplot = (insight, columns, specViewOptions) => {
  const errors = [];
  if (!columns.x) errors.push(`Must set a field for x axis`);
  if (!columns.y) errors.push(`Must set a field for y axis`);
  (0, _facet.checkForFacetErrors)(insight.facets, errors);
  const specCapabilities = {
    roles: [{
      role: 'x',
      axisSelection: columns.x && columns.x.quantitative ? 'range' : 'exact'
    }, {
      role: 'y',
      axisSelection: columns.y && columns.y.quantitative ? 'range' : 'exact'
    }, {
      role: 'z',
      allowNone: true
    }, {
      role: 'color',
      allowNone: true
    }, {
      role: 'sort',
      allowNone: true
    }, {
      role: 'facet',
      allowNone: true
    }],
    signals: [_constants.SignalNames.PointSize]
  };

  if (errors.length) {
    return {
      errors,
      specCapabilities,
      vegaSpec: null
    };
  }

  let axes;

  if (!insight.hideAxes) {
    axes = (0, _axes.default)(specViewOptions, columns);
  }

  let marks = (0, _marks.default)(columns, specViewOptions);

  if (columns.facet) {
    marks = (0, _facet.facetMarks)(specViewOptions, marks[0].from.data, marks, axes);
    axes = [];
  }

  const size = columns.facet ? (0, _facet.facetSize)(insight.facets, insight.size, specViewOptions) : insight.size;
  var vegaSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "height": size.height,
    "width": size.width,
    signals: (0, _signals.default)(insight, specViewOptions),
    data: (0, _data.default)(insight, columns, specViewOptions),
    scales: (0, _scales.default)(columns, insight),
    marks
  };

  if (!insight.hideAxes && axes && axes.length) {
    vegaSpec.axes = axes;
  }

  if (columns.color && !insight.hideLegend) {
    vegaSpec.legends = [(0, _legends.legend)(columns.color)];
  }

  if (columns.facet) {
    vegaSpec.layout = (0, _facet.layout)(specViewOptions);
  } else {
    //use autosize only when not faceting
    vegaSpec.autosize = "fit";
  }

  return {
    vegaSpec,
    specCapabilities
  };
};

exports.scatterplot = scatterplot;
},{"./axes":"DRuS","./data":"4cCo","./marks":"Vq7N","./scales":"vZre","./signals":"jiD2","../facet":"7Ifg","../legends":"6oTL","../constants":"b0rV"}],"uVNM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _axes = require("../axes");

function _default(specViewOptions, columns) {
  const pa = (0, _axes.partialAxes)(specViewOptions, columns.x.quantitative, columns.y.quantitative);
  const axes = [Object.assign({
    "scale": "xband",
    "title": columns.x.name,
    "bandPosition": 0.5,
    "grid": true,
    "labelFlush": true
  }, pa.bottom), Object.assign({
    "scale": "yband",
    "title": columns.y.name,
    "bandPosition": columns.y.quantitative ? 0 : 0.5,
    "grid": true,
    "labelFlush": true
  }, pa.left)];
  return axes;
}
},{"../axes":"m4Pj"}],"wBrd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _constants = require("../constants");

var _top = require("../top");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, columns, specViewOptions) {
  const categoricalColor = columns.color && !columns.color.quantitative;
  const data = (0, _array.allTruthy)([{
    "name": _constants.DataNames.Main,
    "transform": (0, _array.allTruthy)([{
      "type": "extent",
      "field": columns.x.name,
      "signal": "long_extent"
    }, {
      "type": "extent",
      "field": columns.y.name,
      "signal": "lat_extent"
    }, columns.x.quantitative && {
      "type": "bin",
      "field": columns.x.name,
      "extent": {
        "signal": "long_extent"
      },
      "maxbins": {
        "signal": _constants.SignalNames.XBins
      },
      "nice": false,
      "as": ["long0", "long1"],
      "signal": "binXSignal"
    }, columns.y.quantitative && {
      "type": "bin",
      "field": columns.y.name,
      "extent": {
        "signal": "lat_extent"
      },
      "nice": false,
      "maxbins": {
        "signal": _constants.SignalNames.YBins
      },
      "as": ["lat0", "lat1"],
      "signal": "binYSignal"
    }])
  }], columns.x.quantitative && [{
    "name": "xaxisdata",
    "transform": [{
      "type": "sequence",
      "start": {
        "signal": "binXSignal.start"
      },
      "stop": {
        "signal": "binXSignal.stop"
      },
      "step": {
        "signal": "binXSignal.step"
      }
    }]
  }], columns.y.quantitative && [{
    "name": "yaxisdata",
    "transform": [{
      "type": "sequence",
      "start": {
        "signal": "binYSignal.start"
      },
      "stop": {
        "signal": "binYSignal.stop"
      },
      "step": {
        "signal": "binYSignal.step"
      }
    }]
  }], categoricalColor && (0, _top.topLookup)(columns.color, specViewOptions.maxLegends), [{
    "name": "stackedgroup",
    "source": categoricalColor ? _constants.DataNames.Legend : _constants.DataNames.Main,
    "transform": [stackTransform(columns.sort, columns.x, columns.y), {
      "type": "extent",
      "signal": "xtent",
      "field": "s1"
    }, {
      "type": "formula",
      "expr": "datum.s2 % columns",
      "as": "_columns"
    }, {
      "type": "formula",
      "expr": "floor(datum.s1 / columns)",
      "as": "row"
    }, {
      "type": "formula",
      "expr": `datum.s1 % ${_constants.SignalNames.XGridSize}`,
      "as": "column"
    }, {
      "type": "formula",
      "expr": `floor((datum.s1 % columns)/ ${_constants.SignalNames.XGridSize})`,
      "as": "depth"
    }, {
      "type": "extent",
      "signal": "rowxtent",
      "field": "row"
    }]
  }]);
  return data;
}

function stackTransform(sortColumn, xColumn, yColumn) {
  const st = {
    "type": "stack",
    "groupby": [yColumn.quantitative ? "lat0" : yColumn.name, xColumn.quantitative ? "long0" : xColumn.name],
    "as": ["s1", "s2"]
  };

  if (sortColumn) {
    st.sort = {
      "field": sortColumn.name
    };
  }

  return st;
}
},{"../../array":"b//p","../constants":"b0rV","../top":"83Xo"}],"x3xn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _fill = require("../fill");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, specViewOptions) {
  const marks = [{
    "name": "marks2",
    "type": "rect",
    "from": {
      "data": "stackedgroup"
    },
    "encode": {
      "update": {
        "x": {
          "scale": "xband",
          "field": columns.x.quantitative ? "long0" : columns.x.name,
          "offset": {
            "scale": "xinternalscale",
            "field": "column"
          }
        },
        "y": {
          "scale": "yband",
          "field": columns.y.quantitative ? "lat0" : columns.y.name,
          "offset": {
            "scale": "yinternalscale",
            "field": "depth"
          }
        },
        "z": {
          "scale": "zband",
          "field": "row"
        },
        "depth": {
          "scale": "zband",
          "band": true
        },
        "width": {
          "signal": "actsize"
        },
        "height": {
          "signal": "actsize"
        },
        "fill": (0, _fill.fill)(columns.color, specViewOptions)
      }
    }
  }];
  return marks;
}
},{"../fill":"S7Dm"}],"evLm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _scales = require("../scales");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, insight) {
  const scales = [{
    "name": "xband",
    "type": "band",
    "domain": columns.x.quantitative ? {
      "data": "xaxisdata",
      "field": "data",
      "sort": true
    } : {
      "data": _constants.DataNames.Main,
      "field": columns.x.quantitative ? "long0" : columns.x.name,
      "sort": true
    },
    "range": [0, {
      "signal": "width"
    }],
    "padding": {
      "signal": _constants.SignalNames.OuterPadding
    },
    "round": true
  }, {
    "name": "yband",
    "type": "band",
    "reverse": true,
    "domain": columns.y.quantitative ? {
      "data": "yaxisdata",
      "field": "data",
      "sort": true
    } : {
      "data": _constants.DataNames.Main,
      "field": columns.y.quantitative ? "lat0" : columns.y.name,
      "sort": true
    },
    "range": "height",
    "padding": {
      "signal": _constants.SignalNames.OuterPadding
    },
    "round": true
  }, {
    "name": "zband",
    "type": "band",
    "reverse": false,
    "domain": {
      "data": "stackedgroup",
      "field": "row",
      "sort": true
    },
    "align": 0.0,
    "range": [0, {
      "signal": "countheight"
    }],
    "padding": {
      "signal": _constants.SignalNames.InnerPadding
    },
    "round": false
  }, {
    "name": "xinternalscale",
    "type": "band",
    "range": [0, {
      "signal": "xbandw"
    }],
    "padding": {
      "signal": _constants.SignalNames.InnerPadding
    },
    "domain": {
      "data": "stackedgroup",
      "field": "column",
      "sort": true
    }
  }, {
    "name": "yinternalscale",
    "type": "band",
    "range": [0, {
      "signal": "ybandw"
    }],
    "padding": {
      "signal": _constants.SignalNames.InnerPadding
    },
    "domain": {
      "data": "stackedgroup",
      "field": "depth",
      "sort": true
    }
  }];

  if (columns.color) {
    if (columns.color.quantitative) {
      scales.push((0, _scales.binnableColorScale)(insight.colorBin, _constants.DataNames.Main, columns.color.name, insight.scheme));
    } else {
      scales.push({
        "name": _constants.ScaleNames.Color,
        "type": "ordinal",
        "domain": {
          "data": _constants.DataNames.Legend,
          "field": _constants.FieldNames.Top,
          "sort": true
        },
        "range": {
          "scheme": insight.scheme || _constants.ColorScaleNone
        },
        "reverse": {
          "signal": _constants.SignalNames.ColorReverse
        }
      });
    }
  }

  return scales;
}
},{"../scales":"v/y+","../constants":"b0rV"}],"uY1G":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _signals = require("../signals");

var _facet = require("../facet");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, columns, specViewOptions) {
  const signals = (0, _array.allTruthy)((0, _signals.textSignals)(specViewOptions), [(0, _signals.colorBinCountSignal)(specViewOptions), (0, _signals.colorReverseSignal)(specViewOptions), {
    "name": _constants.SignalNames.XGridSize,
    "value": 3,
    "bind": {
      "name": specViewOptions.language.XGridSize,
      "input": "range",
      "min": 1,
      "max": 20,
      "step": 1
    }
  }, {
    "name": _constants.SignalNames.YGridSize,
    "value": 3,
    "bind": {
      "name": specViewOptions.language.YGridSize,
      "input": "range",
      "min": 1,
      "max": 20,
      "step": 1
    }
  }, columns.x.quantitative && {
    "name": _constants.SignalNames.XBins,
    "value": 30,
    "bind": {
      "name": specViewOptions.language.XBinSize,
      "input": "range",
      "min": 1,
      "max": 60,
      "step": 1
    }
  }, columns.y.quantitative && {
    "name": _constants.SignalNames.YBins,
    "value": 30,
    "bind": {
      "name": specViewOptions.language.YBinSize,
      "input": "range",
      "min": 1,
      "max": 60,
      "step": 1
    }
  }, {
    "name": _constants.SignalNames.InnerPadding,
    "value": 0.1,
    "bind": {
      "name": specViewOptions.language.InnerPaddingSize,
      "input": "range",
      "min": 0.1,
      "max": 0.6,
      "step": 0.1
    }
  }, {
    "name": _constants.SignalNames.OuterPadding,
    "value": 0.2,
    "bind": {
      "name": specViewOptions.language.OuterPaddingSize,
      "input": "range",
      "min": 0.1,
      "max": 0.6,
      "step": 0.1
    }
  }, {
    "name": "columns",
    "update": `${_constants.SignalNames.XGridSize}*${_constants.SignalNames.YGridSize}`
  }, {
    "name": "xbandw",
    "update": `bandwidth('xband')`
  }, {
    "name": "xbandsize",
    "update": `(xbandw / (${_constants.SignalNames.XGridSize} + ${_constants.SignalNames.InnerPadding}))*(1-${_constants.SignalNames.InnerPadding})`
  }, {
    "name": "ybandw",
    "update": `height/((${columns.y.quantitative ? _constants.SignalNames.YBins : columns.y.stats.distinctValueCount}) * (1 + ${_constants.SignalNames.OuterPadding}))`
  }, {
    "name": "ybandsize",
    "update": `(ybandw / (${_constants.SignalNames.YGridSize} + ${_constants.SignalNames.InnerPadding}))*(1-${_constants.SignalNames.InnerPadding})`
  }, {
    "name": "actsize",
    "update": "min(xbandsize,ybandsize)"
  }, {
    "name": "countheight",
    "update": "rowxtent[1]*actsize"
  }], insight.columns.facet && (0, _facet.facetSignals)(insight.facets, specViewOptions));
  return signals;
}
},{"../../array":"b//p","../signals":"N3c7","../facet":"7Ifg","../constants":"b0rV"}],"oOWF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stacks = void 0;

var _axes = _interopRequireDefault(require("./axes"));

var _data = _interopRequireDefault(require("./data"));

var _marks = _interopRequireDefault(require("./marks"));

var _scales = _interopRequireDefault(require("./scales"));

var _signals = _interopRequireDefault(require("./signals"));

var _facet = require("../facet");

var _legends = require("../legends");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const stacks = (insight, columns, specViewOptions) => {
  const errors = [];
  if (!columns.x) errors.push(`Must set a field for x axis`);
  if (!columns.y) errors.push(`Must set a field for y axis`);
  (0, _facet.checkForFacetErrors)(insight.facets, errors);
  const specCapabilities = {
    roles: [{
      role: 'x',
      binnable: true,
      axisSelection: columns.x && columns.x.quantitative ? 'range' : 'exact',
      signals: [_constants.SignalNames.XBins]
    }, {
      role: 'y',
      binnable: true,
      axisSelection: columns.y && columns.y.quantitative ? 'range' : 'exact',
      signals: [_constants.SignalNames.YBins]
    }, {
      role: 'z',
      allowNone: true
    }, {
      role: 'color',
      allowNone: true
    }, {
      role: 'sort',
      allowNone: true
    }]
  };

  if (errors.length) {
    return {
      errors,
      specCapabilities,
      vegaSpec: null
    };
  }

  const size = columns.facet ? (0, _facet.facetSize)(insight.facets, insight.size, specViewOptions) : insight.size;
  var vegaSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "height": size.height,
    "width": size.width,
    signals: (0, _signals.default)(insight, columns, specViewOptions),
    data: (0, _data.default)(insight, columns, specViewOptions),
    scales: (0, _scales.default)(columns, insight),
    marks: (0, _marks.default)(columns, specViewOptions)
  };

  if (!insight.hideAxes) {
    vegaSpec.axes = (0, _axes.default)(specViewOptions, columns);
  }

  if (columns.color && !insight.hideLegend) {
    vegaSpec.legends = [(0, _legends.legend)(columns.color)];
  }

  if (columns.facet) {
    vegaSpec.layout = (0, _facet.layout)(specViewOptions);
  } else {
    //use autosize only when not faceting
    vegaSpec.autosize = "fit";
  }

  return {
    vegaSpec,
    specCapabilities
  };
};

exports.stacks = stacks;
},{"./axes":"uVNM","./data":"wBrd","./marks":"x3xn","./scales":"evLm","./signals":"uY1G","../facet":"7Ifg","../legends":"6oTL","../constants":"b0rV"}],"IV9v":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.treemapTransforms = treemapTransforms;

var _array = require("../../array");

var _constants = require("../constants");

var _facet = require("../facet");

var _top = require("../top");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, columns, specViewOptions) {
  const categoricalColor = columns.color && !columns.color.quantitative;
  const TreeMapDataName = "SandDanceTreeMapData";
  const data = (0, _array.allTruthy)((0, _facet.facetSourceData)(columns.facet, insight.facets, TreeMapDataName), [{
    "name": _constants.DataNames.Main,
    "source": TreeMapDataName,
    "transform": (0, _array.allTruthy)(columns.facet && (0, _facet.facetTransforms)(columns.facet, insight.facets), !columns.facet && treemapTransforms(insight))
  }], categoricalColor && (0, _top.topLookup)(columns.color, specViewOptions.maxLegends), columns.facet && (0, _facet.facetGroupData)(_constants.DataNames.Main));
  return data;
}

function treemapTransforms(insight) {
  const transforms = [{
    "type": "nest",
    "keys": [insight.columns.group || "__NONE__"]
  }, {
    "type": "treemap",
    "field": insight.columns.size,
    "sort": {
      "field": "value",
      "order": "descending"
    },
    "round": true,
    "method": {
      "signal": _constants.SignalNames.TreeMapMethod
    },
    "padding": 1,
    "size": [{
      "signal": "width"
    }, {
      "signal": "height"
    }]
  }];
  return transforms;
}
},{"../../array":"b//p","../constants":"b0rV","../facet":"7Ifg","../top":"83Xo"}],"vhMR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _fill = require("../fill");

var _constants = require("../constants");

var _selection = require("../selection");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(data, columns, specViewOptions) {
  const marks = [{
    "type": "rect",
    "from": {
      data
    },
    "encode": {
      "update": {
        "x": {
          "field": "x0"
        },
        "y": {
          "field": "y0"
        },
        "x2": {
          "field": "x1"
        },
        "y2": {
          "field": "y1"
        },
        "fill": (0, _fill.fill)(columns.color, specViewOptions)
      }
    }
  }];

  if (columns.z) {
    const update = marks[0].encode.update;
    update.z = {
      "value": 0
    };
    update.depth = (0, _selection.zeroIfCollapsed)({
      "scale": _constants.ScaleNames.Z,
      "field": columns.z.name
    });
  }

  return marks;
}
},{"../fill":"S7Dm","../constants":"b0rV","../selection":"Dq8R"}],"2dh3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _scales = require("../scales");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(columns, insight) {
  const scales = [];

  if (columns.color) {
    if (columns.color.quantitative) {
      scales.push((0, _scales.binnableColorScale)(insight.colorBin, _constants.DataNames.Main, columns.color.name, insight.scheme));
    } else {
      scales.push({
        "name": _constants.ScaleNames.Color,
        "type": "ordinal",
        "domain": {
          "data": _constants.DataNames.Legend,
          "field": _constants.FieldNames.Top,
          "sort": true
        },
        "range": {
          "scheme": insight.scheme || _constants.ColorScaleNone
        },
        "reverse": {
          "signal": _constants.SignalNames.ColorReverse
        }
      });
    }
  }

  if (columns.z) {
    const zRange = [0, {
      "signal": _constants.SignalNames.ZHeight
    }];
    scales.push(columns.z.quantitative ? (0, _scales.linearScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, columns.z.name, zRange, false, false) : (0, _scales.pointScale)(_constants.ScaleNames.Z, _constants.DataNames.Main, zRange, columns.z.name));
  }

  return scales;
}
},{"../scales":"v/y+","../constants":"b0rV"}],"Qrog":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _array = require("../../array");

var _signals = require("../signals");

var _facet = require("../facet");

var _constants = require("../constants");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function _default(insight, specViewOptions) {
  const signals = (0, _array.allTruthy)((0, _signals.textSignals)(specViewOptions), [(0, _signals.colorBinCountSignal)(specViewOptions), {
    "name": _constants.SignalNames.TreeMapMethod,
    "value": "squarify",
    "bind": {
      "name": specViewOptions.language.treeMapMethod,
      "input": "select",
      "options": ["squarify", "binary"]
    }
  }, (0, _signals.colorReverseSignal)(specViewOptions)], insight.columns.facet && (0, _facet.facetSignals)(insight.facets, specViewOptions));
  return signals;
}
},{"../../array":"b//p","../signals":"N3c7","../facet":"7Ifg","../constants":"b0rV"}],"MNHb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.treemap = void 0;

var _data = _interopRequireWildcard(require("./data"));

var _marks = _interopRequireDefault(require("./marks"));

var _scales = _interopRequireDefault(require("./scales"));

var _signals = _interopRequireDefault(require("./signals"));

var _facet = require("../facet");

var _constants = require("../constants");

var _legends = require("../legends");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const treemap = (insight, columns, specViewOptions) => {
  const errors = [];
  if (!columns.size) errors.push(`Must set a field for size`);
  (0, _facet.checkForFacetErrors)(insight.facets, errors);
  const specCapabilities = {
    roles: [{
      role: 'size',
      excludeCategoric: true
    }, {
      role: 'group',
      allowNone: true
    }, {
      role: 'z',
      allowNone: true
    }, {
      role: 'color',
      allowNone: true
    }, {
      role: 'facet',
      allowNone: true
    }],
    signals: [_constants.SignalNames.TreeMapMethod]
  };

  if (errors.length) {
    return {
      errors,
      specCapabilities,
      vegaSpec: null
    };
  }

  const categoricalColor = columns.color && !columns.color.quantitative;
  const dataName = categoricalColor ? _constants.DataNames.Legend : _constants.DataNames.Main;
  const TreeMapName = "SandDanceTreeMapFaceted";
  const data = (0, _data.default)(insight, columns, specViewOptions);
  let marks = (0, _marks.default)(columns.facet ? TreeMapName : dataName, columns, specViewOptions);

  if (columns.facet) {
    const childData = {
      "name": TreeMapName,
      "source": _constants.DataNames.FacetGroupCell,
      "transform": (0, _data.treemapTransforms)(insight)
    };
    marks = (0, _facet.facetMarks)(specViewOptions, dataName, marks, null, [childData]);
    marks[0].marks;
  }

  const size = columns.facet ? (0, _facet.facetSize)(insight.facets, insight.size, specViewOptions) : insight.size;
  var vegaSpec = {
    "$schema": "https://vega.github.io/schema/vega/v3.json",
    "height": size.height,
    "width": size.width,
    signals: (0, _signals.default)(insight, specViewOptions),
    data,
    scales: (0, _scales.default)(columns, insight),
    marks
  };

  if (columns.color && !insight.hideLegend) {
    vegaSpec.legends = [(0, _legends.legend)(columns.color)];
  }

  if (columns.facet) {
    vegaSpec.layout = (0, _facet.layout)(specViewOptions);
  } else {
    //use autosize only when not faceting
    vegaSpec.autosize = "fit";
  }

  return {
    vegaSpec,
    specCapabilities
  };
};

exports.treemap = treemap;
},{"./data":"IV9v","./marks":"vhMR","./scales":"2dh3","./signals":"Qrog","../facet":"7Ifg","../constants":"b0rV","../legends":"6oTL"}],"6zwM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.constants = exports.creators = void 0;

var constants = _interopRequireWildcard(require("./constants"));

exports.constants = constants;

var _stableBarChart = require("./stableBarChart");

var _density = require("./density");

var _grid = require("./grid");

var _scatterPlot = require("./scatterPlot");

var _stacks = require("./stacks");

var _treeMap = require("./treeMap");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const creators = {
  barchart: _stableBarChart.barchart,
  density: _density.density,
  grid: _grid.grid,
  scatterplot: _scatterPlot.scatterplot,
  stacks: _stacks.stacks,
  treemap: _treeMap.treemap
};
exports.creators = creators;

function create(insight, specColumns, specViewOptions) {
  const creator = creators[insight.chart];

  if (creator) {
    const specResult = creator(insight, specColumns, specViewOptions); //TODO: find why Vega is doing this. fixup for facets

    if (specResult.vegaSpec && insight.columns && insight.columns.facet && insight.facets.columns === 2 && insight.facets.rows === 1) {
      specResult.vegaSpec.width = insight.size.width / 3;
    }

    return specResult;
  }
}
},{"./constants":"b0rV","./stableBarChart":"MNJW","./density":"7yaW","./grid":"m34o","./scatterPlot":"Rl9U","./stacks":"oOWF","./treeMap":"MNHb"}],"DO07":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneVegaSpecWithData = cloneVegaSpecWithData;

var _ = require(".");

var _inference = require("./inference");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function cloneVegaSpecWithData(insight, specColumns, specViewOptions, currData) {
  const columns = [specColumns.color, specColumns.facet, specColumns.group, specColumns.size, specColumns.sort, specColumns.x, specColumns.y, specColumns.z];
  (0, _inference.inferAll)(columns, currData);
  const specResult = (0, _.create)(insight, specColumns, specViewOptions);

  if (!specResult.errors) {
    const data0 = specResult.vegaSpec.data[0];
    data0.values = currData;
  }

  return specResult;
}
},{".":"6zwM","./inference":"SLia"}],"+TNG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exec = void 0;

var VegaDeckGl = _interopRequireWildcard(require("../vega-deck.gl"));

var _group = require("./group");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function valueToString(value) {
  if (value == null) {
    return '';
  }

  switch (typeof value) {
    case 'string':
      return value;

    case 'boolean':
    case 'number':
      return value.toString();
  }

  return '';
}

function isStringOperation(ex) {
  switch (ex.operator) {
    case 'contains':
    case '!contains':
    case 'starts':
    case '!starts':
      return true;
  }

  return false;
}

function isnullorEmpty(value) {
  if (value == null) return true; //double equal sign to also catch undefined

  if (typeof value === 'string' && value.length === 0) return true;
  return false;
}

class Exec {
  constructor(search, columns) {
    this.columns = columns;
    this.groups = VegaDeckGl.util.clone((0, _group.ensureSearchExpressionGroupArray)(search));
    this.groups.forEach(group => {
      group.expressions.forEach(ex => {
        ex.column = this.getColumn(ex.name);
        ex.valueLow = valueToString(ex.value).toLocaleLowerCase();
        ex.stringOperation = isStringOperation(ex);
      });
    });
  }

  getColumn(name) {
    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].name == name) {
        return this.columns[i];
      }
    }
  }

  runExpressionOnColumn(datum, ex) {
    const actualDataValue = datum[ex.name];

    if (ex.operator === 'isnullorEmpty') {
      return isnullorEmpty(actualDataValue);
    } else if (ex.operator === '!isnullorEmpty') {
      return !isnullorEmpty(actualDataValue);
    }

    let dataValue = actualDataValue;
    let expressionValue = ex.value;

    if (ex.column && ex.column.type === 'string' || ex.stringOperation) {
      dataValue = valueToString(actualDataValue).toLocaleLowerCase();
      expressionValue = ex.valueLow;
    }

    switch (ex.operator) {
      case '!=':
        return dataValue != expressionValue;

      case '<':
        return dataValue < expressionValue;

      case '<=':
        return dataValue <= expressionValue;

      case '==':
        return dataValue == expressionValue;

      case '>':
        return dataValue > expressionValue;

      case '>=':
        return dataValue >= expressionValue;

      case 'contains':
        return dataValue.indexOf(expressionValue) >= 0;

      case '!contains':
        return dataValue.indexOf(expressionValue) < 0;

      case 'starts':
        return dataValue.indexOf(expressionValue) == 0;

      case '!starts':
        return dataValue.indexOf(expressionValue) !== 0;
    }
  }

  runExpression(datum, ex) {
    if (ex.name == null) {
      //run on all columns
      const group = {
        expressions: this.columns.map((column, i) => {
          const ex2 = Object.assign({}, ex, {
            column,
            name: column.name
          });

          if (i) {
            ex2.clause = '||';
          }

          return ex2;
        })
      };
      return this.runGroup(datum, group);
    } else {
      return this.runExpressionOnColumn(datum, ex);
    }
  }

  runGroup(datum, group) {
    let accumulator = this.runExpression(datum, group.expressions[0]);

    for (let i = 1; i < group.expressions.length; i++) {
      let ex = group.expressions[i];

      switch (ex.clause) {
        case '&&':
          accumulator = accumulator && this.runExpression(datum, ex);
          break;

        case '||':
          accumulator = accumulator || this.runExpression(datum, ex);
          break;
      }
    }

    return accumulator;
  }

  run(datum) {
    let accumulator = this.runGroup(datum, this.groups[0]);

    for (let i = 1; i < this.groups.length; i++) {
      let group = this.groups[i];

      switch (group.clause) {
        case '&&':
          accumulator = accumulator && this.runGroup(datum, group);
          break;

        case '||':
          accumulator = accumulator || this.runGroup(datum, group);
          break;
      }
    }

    return accumulator;
  }

}

exports.Exec = Exec;
},{"../vega-deck.gl":"Uns8","./group":"yy6X"}],"5MJ1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataScope = void 0;

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

var _constants = require("./specs/constants");

var _exec = require("./searchExpression/exec");

var _inference = require("./specs/inference");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
class DataScope {
  setData(data, columns) {
    const differentData = this.data !== data;

    if (differentData) {
      if (this.data) {
        //clean up things we added to old data
        this.deselect();
      }

      this.data = data;
      this.columns = columns;
      this.filteredData = null;
    }

    return differentData;
  }

  getColumns(columnTypes) {
    if (!this.columns) {
      this.columns = (0, _inference.getColumnsFromData)(this.data, columnTypes);
    }

    return this.columns;
  }

  currentData() {
    return this.filteredData || this.data;
  }

  select(search) {
    this.deselect();

    if (search) {
      this.selection = this.createUserSelection(search, true);

      if (this.selection.included.length) {
        this.activate(this.selection.included[0]);
      }
    }
  }

  createUserSelection(search, assign) {
    const exec = new _exec.Exec(search, this.getColumns());
    const s = {
      search,
      included: [],
      excluded: []
    };
    this.currentData().forEach(datum => {
      if (exec.run(datum)) {
        if (assign) {
          datum[_constants.FieldNames.Selected] = true;
        }

        s.included.push(datum);
      } else {
        s.excluded.push(datum);
      }
    });
    return s;
  }

  deselect() {
    this.deactivate();
    this.data.forEach(datum => {
      delete datum[_constants.FieldNames.Selected];
    });
    this.selection = null;
  }

  hasSelectedData() {
    return !!this.selection;
  }

  collapse(collapsed, data = this.data) {
    data.forEach(datum => {
      datum[_constants.FieldNames.Collapsed] = collapsed;
    });
    this.isCollapsed = collapsed;
  }

  activate(datum) {
    this.deactivate();
    datum[_constants.FieldNames.Active] = true;
    this.active = datum;
  }

  deactivate() {
    if (this.active) {
      delete this.active[_constants.FieldNames.Active];
    }

    this.active = null;
  }

  ordinalIndexWithinSelection(ordinal) {
    if (this.selection) {
      for (let i = 0; i < this.selection.included.length; i++) {
        let datum = this.selection.included[i];

        if (datum[VegaDeckGl.constants.GL_ORDINAL] === ordinal) {
          return {
            datum,
            index: i
          };
        }
      }
    }

    return {
      datum: null,
      index: -1
    };
  }

}

exports.DataScope = DataScope;
},{"./vega-deck.gl":"Uns8","./specs/constants":"b0rV","./searchExpression/exec":"+TNG","./specs/inference":"SLia"}],"1/KC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Details = void 0;

var searchExpression = _interopRequireWildcard(require("./searchExpression"));

var _constants = require("./specs/constants");

var _vegaDeck = require("./vega-deck.gl");

var _tsxCreateElement = require("tsx-create-element");

var _defaults = require("./defaults");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var Action;

(function (Action) {
  Action[Action["deselect"] = 0] = "deselect";
  Action[Action["isolate"] = 1] = "isolate";
  Action[Action["exclude"] = 2] = "exclude";
  Action[Action["reset"] = 3] = "reset";
  Action[Action["next"] = 4] = "next";
  Action[Action["previous"] = 5] = "previous";
})(Action || (Action = {}));

class Details {
  constructor(parentElement, language, animator, dataScope, colorMapHandler, hasColorMaps) {
    this.language = language;
    this.animator = animator;
    this.dataScope = dataScope;
    this.colorMapHandler = colorMapHandler;
    this.hasColorMaps = hasColorMaps;
    this.element = _vegaDeck.util.addDiv(parentElement, `${_defaults.cssPrefix}unitControls`);
    this.clear();
  }

  clear() {
    this.state = {
      userSelection: null,
      index: -1,
      remapColor: false
    };
    this.render();
  }

  clearSelection() {
    this.state.userSelection = null;
    this.state.index = -1;
    this.render();
  }

  populate(userSelection, index = 0) {
    this.state.userSelection = userSelection;
    this.state.index = index;
    this.render();
  }

  selectByNameValue(columnName, value) {
    const search = {
      name: columnName,
      operator: '==',
      value
    };
    this.clearSelection();
    this.animator.select(search);
    this.populate(this.dataScope.selection);
  }

  remapChanged(remap) {
    this.state.remapColor = remap;
    this.colorMapHandler(remap);
    this.render();
  }

  handleAction(action) {
    let p;
    const u = this.state.userSelection;

    switch (action) {
      case Action.deselect:
        this.clearSelection();
        p = this.animator.deselect();
        break;

      case Action.exclude:
        this.clearSelection();
        p = this.animator.filter(searchExpression.invert(u.search), u.excluded, u.included);
        this.state.remapColor = false;
        break;

      case Action.isolate:
        this.clearSelection();
        p = this.animator.filter(u.search, u.included, u.excluded);
        this.state.remapColor = false;
        break;

      case Action.reset:
        this.clear();
        p = this.animator.reset();
        break;

      default:
        switch (action) {
          case Action.previous:
            this.state.index--;

            if (this.state.index < 0) {
              this.state.index = this.state.userSelection.included.length - 1;
            }

            break;

          case Action.next:
            this.state.index++;

            if (this.state.index >= this.state.userSelection.included.length) {
              this.state.index = 0;
            }

            break;
        }

        this.render();
        p = this.animator.activate(this.state.userSelection.included[this.state.index]);
    }

    p.then(() => this.render());
  }

  render() {
    const hasRefinedData = !!this.dataScope.filteredData;
    const renderProps = {
      language: this.language,
      actionHandler: action => this.handleAction(action),
      selectionHandler: (columnName, value) => this.selectByNameValue(columnName, value),
      count: this.state.userSelection && this.state.userSelection.included.length,
      hasRefinedData,
      item: this.state.userSelection && this.state.userSelection.included[this.state.index],
      remapColorHandler: remap => this.remapChanged(remap),
      hasColorMaps: this.hasColorMaps() && hasRefinedData,
      remapColor: this.state.remapColor
    };
    (0, _tsxCreateElement.mount)(renderDetails(renderProps), this.element);
  }

}

exports.Details = Details;

const renderDetails = props => {
  const controlButtons = [(0, _tsxCreateElement.createElement)("button", {
    disabled: !props.item,
    onClick: e => props.actionHandler(Action.deselect)
  }, props.language.deselect), (0, _tsxCreateElement.createElement)("button", {
    disabled: !props.item,
    onClick: e => props.actionHandler(Action.isolate)
  }, props.language.isolate), (0, _tsxCreateElement.createElement)("button", {
    disabled: !props.item,
    onClick: e => props.actionHandler(Action.exclude)
  }, props.language.exclude)];
  const colorMapping = (0, _tsxCreateElement.createElement)("div", null, (0, _tsxCreateElement.createElement)("button", {
    disabled: props.remapColor,
    onClick: e => props.remapColorHandler(true)
  }, props.language.newColorMap), (0, _tsxCreateElement.createElement)("button", {
    disabled: !props.remapColor,
    onClick: e => props.remapColorHandler(false)
  }, props.language.oldColorMap));
  const singleItem = props.count === 1;
  const scrollButtons = [(0, _tsxCreateElement.createElement)("button", {
    disabled: singleItem,
    onClick: e => props.actionHandler(Action.previous)
  }, props.language.previousDetail), (0, _tsxCreateElement.createElement)("button", {
    disabled: singleItem,
    onClick: e => props.actionHandler(Action.next)
  }, props.language.nextDetail), (0, _tsxCreateElement.createElement)("span", null, " ", props.language.selectionCount(props.count))];
  const rows = [];

  for (let prop in props.item) {
    switch (prop) {
      case _constants.FieldNames.Active:
      case _constants.FieldNames.Collapsed:
      case _constants.FieldNames.Selected:
      case _vegaDeck.constants.GL_ORDINAL:
        continue;

      default:
        rows.push({
          cells: [{
            content: prop
          }, {
            content: linkSelect(props.language, prop, props.item[prop], props.selectionHandler)
          }]
        });
    }
  }

  return (0, _tsxCreateElement.createElement)("div", null, props.hasColorMaps && colorMapping, (0, _tsxCreateElement.createElement)("h4", null, props.language.headers.selection), (0, _tsxCreateElement.createElement)("div", {
    className: `${_defaults.cssPrefix}selection`
  }, controlButtons, (0, _tsxCreateElement.createElement)("button", {
    disabled: !props.hasRefinedData,
    onClick: e => props.actionHandler(Action.reset)
  }, "reset")), props.item && (0, _tsxCreateElement.createElement)("h4", null, props.language.headers.details), (0, _tsxCreateElement.createElement)("div", null, (0, _tsxCreateElement.createElement)("div", {
    className: `${_defaults.cssPrefix}details-scroll`
  }, props.item && scrollButtons), (0, _tsxCreateElement.createElement)("div", {
    className: `${_defaults.cssPrefix}details`
  }, props.item && (0, _tsxCreateElement.createElement)(_vegaDeck.controls.Table, {
    rows: rows
  }))));
};

function linkSelect(language, columnName, value, selectionHandler) {
  return (0, _tsxCreateElement.createElement)("span", null, (0, _tsxCreateElement.createElement)("a", {
    href: "#",
    onClick: e => selectionHandler(columnName, value)
  }, value), isNaN(value) ? [' ', (0, _tsxCreateElement.createElement)("a", {
    className: "bing-search",
    href: `https://www.bing.com/search?q=${encodeURIComponent(value)}`,
    target: "_blank"
  }, language.bing)] : '');
}
},{"./searchExpression":"0mJg","./specs/constants":"b0rV","./vega-deck.gl":"Uns8","tsx-create-element":"QGtg","./defaults":"G0Md"}],"nQLz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureHeaders = ensureHeaders;

var _vegaDeck = require("./vega-deck.gl");

function ensureHeaders(presenter, headers) {
  const vegaControls = presenter.getElement(_vegaDeck.PresenterElement.vegaControls);
  conditionalHeader(!!vegaControls.querySelectorAll('.vega-bindings > *').length, vegaControls, headers.chart);
  const legend = presenter.getElement(_vegaDeck.PresenterElement.legend);
  conditionalHeader(!!legend.children.length, legend, headers.legend);
}

function conditionalHeader(condition, element, header) {
  var existing = existingHeader(element, header);

  if (condition && !existing) {
    addHeader(element, header);
  }

  if (!condition && existing) {
    existing.remove();
  }
}

function addHeader(element, header) {
  const h = document.createElement('h4');
  h.innerHTML = header;
  element.insertAdjacentElement('beforebegin', h);
}

function existingHeader(element, header) {
  const {
    previousElementSibling
  } = element;

  if (previousElementSibling && previousElementSibling.innerHTML === header) {
    return previousElementSibling;
  }
}
},{"./vega-deck.gl":"Uns8"}],"9/rI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalizeLegend = finalizeLegend;

var _expression = require("./expression");

var _constants = require("./specs/constants");

function legendRange(colorBinType, column, legend, clickedIndex) {
  if (column.quantitative) {
    return selectQuantitative(colorBinType, column, legend, clickedIndex);
  } else {
    return selectCategorical(column, legend, clickedIndex);
  }
}

function selectCategorical(column, legend, clickedIndex) {
  const value = legend.rows[clickedIndex].value;

  if (value === _constants.Other) {
    const values = [];

    for (let i in legend.rows) {
      if (+i !== clickedIndex) {
        values.push(legend.rows[i].value);
      }
    }

    return (0, _expression.selectNone)(column, values);
  } else {
    //select equal
    return {
      expressions: [(0, _expression.selectExact)(column, legend.rows[clickedIndex].value)]
    };
  }
}

function selectQuantitative(colorBinType, column, legend, clickedIndex) {
  const keys = Object.keys(legend.rows).map(key => +key).sort((a, b) => +a - +b);
  let lowValue;
  let lowOperator;
  let highValue;
  let highOperator;
  const rowText = legend.rows[clickedIndex].value;

  switch (colorBinType) {
    case 'continuous':
      lowValue = rowText;

      if (clickedIndex < keys.length - 1) {
        highValue = legend.rows[clickedIndex + 1].value;
      }

      break;

    default:
      if (rowText.indexOf('null') > 0) {
        const ex = {
          expressions: [(0, _expression.selectNullOrEmpty)(column)]
        };
        return ex;
      }

      const dash = rowText.indexOf('–'); //this is not the common dash character!

      if (dash > 0) {
        //bug in Vega for quantize?
        //lowOperator = '>';
        //highOperator = '<=';
        lowValue = rowText.substr(0, dash);
        highValue = rowText.substr(dash + 1);
      } else {
        if (rowText.indexOf('<') >= 0) {
          highValue = rowText.substring(2);
        } else {
          if (rowText.indexOf('≥') >= 0) {
            lowValue = rowText.substring(2);
          }
        }
      }

  }

  if (lowValue) lowValue = (0, _expression.notNice)(lowValue);
  if (highValue) highValue = (0, _expression.notNice)(highValue);
  return (0, _expression.selectBetween)(column, lowValue, highValue, lowOperator, highOperator);
}

function finalizeLegend(colorBinType, colorColumn, legend, language) {
  const rowTexts = [];

  for (let i in legend.rows) {
    let row = legend.rows[i];
    row.search = legendRange(colorBinType, colorColumn, legend, +i);

    if (row.value === _constants.Other) {
      row.label = language.legendOther;
    } else if (rowTexts.indexOf(row.value) >= 0) {
      delete legend.rows[i];
    } else {
      rowTexts.push(row.value);
    }
  }
}
},{"./expression":"JTcr","./specs/constants":"b0rV"}],"A7xy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recolorAxes = recolorAxes;

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function cloneAxis(axes, axisColor, axisTextColor) {
  return axes.map(axis => {
    const newAxis = VegaDeckGl.util.deepMerge(axis);
    newAxis.domain.color = axisColor;
    newAxis.ticks.forEach(t => {
      t.color = axisColor;
    });
    newAxis.tickText.forEach(t => {
      t.color = axisTextColor;
    });
    return newAxis;
  });
}

function cloneTextData(textData, color) {
  return textData.map(t => {
    return Object.assign({}, t, {
      color
    });
  });
}

function colorEquals(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function recolorAxes(stage, oldColors, newColors) {
  const hasNewLineColor = newColors.axisLine && !colorEquals(newColors.axisLine, oldColors.axisLine);
  const hasNewTextColor = newColors.axisText && !colorEquals(newColors.axisText, oldColors.axisText);
  let axes;
  let textData;

  if (hasNewLineColor || hasNewTextColor) {
    const lineColor = newColors.axisLine || oldColors.axisLine;
    const textColor = newColors.axisText || oldColors.axisText;
    axes = {
      x: cloneAxis(stage.axes.x, lineColor, textColor),
      y: cloneAxis(stage.axes.y, lineColor, textColor)
    };
  }

  if (hasNewTextColor) {
    textData = cloneTextData(stage.textData, newColors.axisText);
  }

  return {
    axes,
    textData
  };
}
},{"./vega-deck.gl":"Uns8"}],"CdFf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Viewer = void 0;

var searchExpression = _interopRequireWildcard(require("./searchExpression"));

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

var _animator = require("./animator");

var _colorCubes = require("./colorCubes");

var _signals = require("./signals");

var _ordinal = require("./ordinal");

var _axisSelection = require("./axisSelection");

var _clone = require("./specs/clone");

var _dataScope = require("./dataScope");

var _defaults = require("./vega-deck.gl/defaults");

var _defaults2 = require("./defaults");

var _details = require("./details");

var _headers = require("./headers");

var _legend = require("./legend");

var _tsxCreateElement = require("tsx-create-element");

var _axes = require("./axes");

var _colorSchemes = require("./colorSchemes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
let didRegisterColorSchemes = false;
/**
 * Component to view a SandDance data visualization.
 */

class Viewer {
  /**
   * Instantiate a new Viewer.
   * @param element Parent HTMLElement to present within.
   * @param options Optional viewer options object.
   */
  constructor(element, options) {
    this.element = element;
    this.options = VegaDeckGl.util.deepMerge(_defaults2.defaultViewerOptions, options);
    this.presenter = new VegaDeckGl.Presenter(element, (0, _defaults2.getPresenterStyle)(this.options));
    this._dataScope = new _dataScope.DataScope();
    this._animator = new _animator.Animator(this._dataScope, {
      onDataChanged: this.onDataChanged.bind(this),
      onAnimateDataChange: this.onAnimateDataChange.bind(this)
    });
    this._details = new _details.Details(this.presenter.getElement(VegaDeckGl.PresenterElement.panel), this.options.language, this._animator, this._dataScope, remap => {
      this.currentColorContext = ~~remap;
      this.renderSameLayout();
    }, () => this.insight && this.insight.columns && !!this.insight.columns.color && this.colorContexts && this.colorContexts.length > 1);
    this.insight = {};
    this._signalValues = {};
  }

  changeColorContexts(colorContexts) {
    this.colorContexts = colorContexts;
    this.currentColorContext = 0;
    this.options.onColorContextChange && this.options.onColorContextChange();
  }

  applyLegendColorContext(colorContext) {
    (0, _tsxCreateElement.mount)(colorContext.legendElement, this.presenter.getElement(VegaDeckGl.PresenterElement.legend));
    this.presenter.stage.legend = colorContext.legend;
  }

  onAnimateDataChange(dataChange, waitingLabel, handlerLabel) {
    if (dataChange === _animator.DataLayoutChange.refine) {
      const oldColorContext = this.colorContexts[this.currentColorContext];
      this.renderNewLayout({
        preStage: (stage, deckProps) => {
          (0, _legend.finalizeLegend)(this.insight.colorBin, this._specColumns.color, stage.legend, this.options.language);
          (0, _colorCubes.applyColorMapToCubes)([oldColorContext.colorMap], VegaDeckGl.util.getCubes(deckProps));

          if (this.options.onStage) {
            this.options.onStage(stage, deckProps);
          }
        }
      }); //apply old legend

      this.applyLegendColorContext(oldColorContext);
    } else {
      this.renderNewLayout({
        preStage: (stage, deckProps) => {
          (0, _legend.finalizeLegend)(this.insight.colorBin, this._specColumns.color, stage.legend, this.options.language);

          if (this.options.onStage) {
            this.options.onStage(stage, deckProps);
          }
        }
      });
    }

    return new Promise((resolve, reject) => {
      this.presenter.animationQueue(resolve, this.options.transitionDurations.position, {
        waitingLabel,
        handlerLabel,
        animationCanceled: reject
      });
    });
  }

  onDataChanged(dataLayout, filter) {
    switch (dataLayout) {
      case _animator.DataLayoutChange.same:
        this.renderSameLayout();
        break;

      case _animator.DataLayoutChange.refine:
        //save cube colors
        const oldColorContext = this.colorContexts[this.currentColorContext];
        let colorMap;
        this.renderNewLayout({
          preStage: (stage, deckProps) => {
            //save off the spec colors
            colorMap = (0, _colorCubes.colorMapFromCubes)(stage.cubeData);
            (0, _colorCubes.applyColorMapToCubes)([oldColorContext.colorMap], VegaDeckGl.util.getCubes(deckProps));
            this.preStage(stage, deckProps);
          },
          onPresent: () => {
            //save new legend
            const newColorContext = {
              colorMap,
              legend: VegaDeckGl.util.clone(this.presenter.stage.legend),
              legendElement: this.presenter.getElement(VegaDeckGl.PresenterElement.legend).children[0]
            }; //apply old legend

            this.applyLegendColorContext(oldColorContext);
            this.changeColorContexts([oldColorContext, newColorContext]);
          }
        });
        this.insight.filter = searchExpression.narrow(this.insight.filter, filter);

        if (this.options.onDataFilter) {
          this.options.onDataFilter(this.insight.filter, this._dataScope.currentData());
        }

        break;

      case _animator.DataLayoutChange.reset:
        const colorContext = {
          colorMap: null,
          legend: null,
          legendElement: null
        };
        this.changeColorContexts([colorContext]);
        this.renderNewLayout({
          onPresent: () => {
            (0, _colorCubes.populateColorContext)(colorContext, this.presenter);
          }
        });
        delete this.insight.filter;

        if (this.options.onDataFilter) {
          this.options.onDataFilter(null, null);
        }

        break;
    }

    if (this.options.onSelectionChanged) {
      const sel = this.getSelection();
      this.options.onSelectionChanged(sel && sel.search || null);
    }
  }

  renderNewLayout(c, view) {
    const currData = this._dataScope.currentData();

    const specResult = (0, _clone.cloneVegaSpecWithData)(this.insight, this._specColumns, this.options, currData);

    if (!specResult.errors) {
      const uiValues = (0, _signals.extractSignalValuesFromView)(this.vegaViewGl, this.vegaSpec);
      this._signalValues = Object.assign({}, this._signalValues, uiValues, this.insight.signalValues);
      (0, _signals.applySignalValues)(this._signalValues, specResult.vegaSpec);
      this.vegaSpec = specResult.vegaSpec;
      this.options.onVegaSpec && this.options.onVegaSpec(this.vegaSpec);
      this.specCapabilities = specResult.specCapabilities;
      const config = this.createConfig(c);

      if (view) {
        config.getView = () => view;
      }

      if (!didRegisterColorSchemes) {
        (0, _colorSchemes.registerColorSchemes)(VegaDeckGl.base.vega);
        didRegisterColorSchemes = true;
      }

      try {
        const runtime = VegaDeckGl.base.vega.parse(this.vegaSpec);
        this.vegaViewGl = new VegaDeckGl.ViewGl(runtime, config).renderer('deck.gl').initialize(this.element).run(); //capture new color color contexts via signals

        this.configForSignalCapture(config.presenterConfig);
      } catch (e) {
        specResult.errors = [e.message];
      }

      if (!specResult.errors) {
        (0, _headers.ensureHeaders)(this.presenter, this.options.language.headers);
      }
    }

    if (specResult.errors) {
      if (this.options.onError) {
        this.options.onError(specResult.errors);
      } else if (this.presenter.logger) {
        this.presenter.logger(`errors rendering Vega spec:${specResult.errors.join('\n')}`);
      }
    }

    return specResult;
  }
  /**
   * Render the same layout with new options.
   * @param newViewerOptions New options object.
   */


  renderSameLayout(newViewerOptions) {
    const colorContext = this.colorContexts[this.currentColorContext];
    const clonedCubes = this.presenter.getCubeData().map(cube => {
      return Object.assign({}, cube);
    });
    this.applyLegendColorContext(colorContext);
    let {
      axes,
      textData
    } = this.presenter.stage;
    let recoloredAxes;

    if (newViewerOptions) {
      if (newViewerOptions.colors) {
        recoloredAxes = (0, _axes.recolorAxes)(this.presenter.stage, this.options.colors, newViewerOptions.colors);
        axes = recoloredAxes.axes || axes;
        textData = recoloredAxes.textData || textData;
      }

      this.options = VegaDeckGl.util.deepMerge(this.options, newViewerOptions);
    }

    let colorMaps = [colorContext.colorMap];
    let colorMethod;

    const hasSelectedData = this._dataScope.hasSelectedData();

    const hasActive = !!this._dataScope.active;

    if (hasSelectedData || hasActive) {
      const selectedColorMap = (0, _colorCubes.getSelectedColorMap)(this._dataScope.currentData(), hasSelectedData, hasActive, this.options);
      colorMaps.push(selectedColorMap);
      colorMethod = this.options.colors.unselectedColorMethod;
    }

    (0, _colorCubes.applyColorMapToCubes)(colorMaps, clonedCubes, colorMethod);
    const stage = {
      cubeData: clonedCubes,
      axes,
      textData
    };
    this.vegaViewGl.presenter.rePresent(stage, this.createConfig().presenterConfig);
  }

  getView(view) {
    if (view === undefined) {
      if (this.presenter.view === null) {
        return _defaults.defaultView;
      } else {
        return this.presenter.view;
      }
    } else {
      return view;
    }
  }
  /**
   * Render data into a visualization.
   * @param insight Object to create a visualization specification.
   * @param data Array of data objects.
   * @param view Optional View to specify camera type.
   * @param ordinalMap Optional map of ordinals to assign to the data such that the same cubes can be re-used for new data.
   */


  render(insight, data, options = {}) {
    return new Promise((resolve, reject) => {
      let result;

      const layout = () => {
        result = this._render(insight, data, options);
      }; //see if refine expression has changed


      if (!searchExpression.compare(insight.filter, this.insight.filter)) {
        if (insight.filter) {
          //refining
          layout();
          this.presenter.animationQueue(() => {
            this.filter(insight.filter);
          }, this.options.transitionDurations.position, {
            waitingLabel: 'layout before refine',
            handlerLabel: 'refine after layout'
          });
        } else {
          //not refining
          this._dataScope.filteredData = null;
          layout();
          this.presenter.animationQueue(() => {
            this.reset();
          }, 0, {
            waitingLabel: 'layout before reset',
            handlerLabel: 'reset after layout'
          });
        }
      } else {
        layout();
      }

      resolve(result);
    });
  }

  shouldViewstateTransition(newInsight, oldInsight) {
    if (!oldInsight.columns) return false;
    if (oldInsight.chart !== newInsight.chart) return true;
    if (oldInsight.size.height !== newInsight.size.height) return true;
    if (oldInsight.size.width !== newInsight.size.width) return true;
    if (oldInsight.columns.facet !== newInsight.columns.facet) return true;
    return false;
  }

  configForSignalCapture(presenterConfig) {
    const colorContext = {
      colorMap: null,
      legend: null,
      legendElement: null
    }; //now be ready to capture color changing signals 

    presenterConfig.preStage = (stage, deckProps) => {
      if (this._shouldSaveColorContext()) {
        //save off the colors from Vega layout
        colorContext.colorMap = (0, _colorCubes.colorMapFromCubes)(stage.cubeData);
      }

      this.preStage(stage, deckProps);
    };

    presenterConfig.onPresent = () => {
      if (this._shouldSaveColorContext()) {
        (0, _colorCubes.populateColorContext)(colorContext, this.presenter);
        this.changeColorContexts([colorContext]);

        this._dataScope.deselect();
      }
    };
  }

  _render(insight, data, options) {
    if (this._dataScope.setData(data, options.columns)) {
      //data is different, reset the signal value cache
      this._signalValues = {};
    }

    this._specColumns = (0, _ordinal.getSpecColumns)(insight, this._dataScope.getColumns(options.columnTypes));
    const ordinalMap = (0, _ordinal.assignOrdinals)(this._specColumns, data, options.ordinalMap);
    this.insight = VegaDeckGl.util.clone(insight);

    this._shouldSaveColorContext = () => !options.initialColorContext;

    const colorContext = options.initialColorContext || {
      colorMap: null,
      legend: null,
      legendElement: null
    };
    const specResult = this.renderNewLayout({
      preStage: (stage, deckProps) => {
        if (this._shouldSaveColorContext()) {
          //save off the colors from Vega layout
          colorContext.colorMap = (0, _colorCubes.colorMapFromCubes)(stage.cubeData);
        } else {
          //apply passed colorContext
          (0, _colorCubes.applyColorMapToCubes)([colorContext.colorMap], VegaDeckGl.util.getCubes(deckProps));
        } //if items are selected, repaint


        const hasSelectedData = !!this._dataScope.hasSelectedData();
        const hasActive = !!this._dataScope.active;

        if (this._dataScope.hasSelectedData() || this._dataScope.active) {
          const selectedColorMap = (0, _colorCubes.getSelectedColorMap)(this._dataScope.currentData(), hasSelectedData, hasActive, this.options);
          (0, _colorCubes.applyColorMapToCubes)([colorContext.colorMap, selectedColorMap], stage.cubeData, this.options.colors.unselectedColorMethod);
        }

        this.preStage(stage, deckProps);
      },
      onPresent: () => {
        if (this._shouldSaveColorContext()) {
          (0, _colorCubes.populateColorContext)(colorContext, this.presenter);
          this.changeColorContexts([colorContext]);
        } else {
          //apply passed colorContext
          this.applyLegendColorContext(colorContext);
        }
      },
      shouldViewstateTransition: () => this.shouldViewstateTransition(insight, this.insight)
    }, this.getView(insight.view)); //future signal changes should save the color context

    this._shouldSaveColorContext = () => !options.discardColorContextUpdates || !options.discardColorContextUpdates();

    this._details.render();

    const result = {
      ordinalMap,
      specResult
    };
    return result;
  }

  preStage(stage, deckProps) {
    const onClick = (e, search) => {
      if (this.options.onAxisClick) {
        this.options.onAxisClick(e, search);
      } else {
        this.select(search);
      }
    };

    const polygonLayer = (0, _axisSelection.axisSelectionLayer)(this.specCapabilities, this._specColumns, stage, onClick, this.options.colors.axisSelectHighlight, this.options.selectionPolygonZ);
    const order = 1; //after textlayer but before others

    deckProps.layers.splice(order, 0, polygonLayer);
    (0, _legend.finalizeLegend)(this.insight.colorBin, this._specColumns.color, stage.legend, this.options.language);

    if (this.options.onStage) {
      this.options.onStage(stage, deckProps);
    }
  }

  onCubeClick(e, cube) {
    const hasSelectedData = this._dataScope.hasSelectedData();

    if (hasSelectedData && this._dataScope.selection.included.length > 1) {
      //if active is within selection, keep the selection and activate the one.
      const indexWithinSelection = this._dataScope.ordinalIndexWithinSelection(cube.ordinal);

      if (indexWithinSelection.index >= 0) {
        this.activate(indexWithinSelection.datum);

        this._details.populate(this._dataScope.selection, indexWithinSelection.index);

        if (this.options.onSelectionChanged) {
          const sel = this.getSelection();
          this.options.onSelectionChanged(sel.search, indexWithinSelection.index);
        }

        return;
      }
    }

    if (hasSelectedData && this._dataScope.selection.included.length === 1 && this._dataScope.selection.included[0][VegaDeckGl.constants.GL_ORDINAL] === cube.ordinal) {
      this.deselect();
      return;
    }

    const search = {
      name: VegaDeckGl.constants.GL_ORDINAL,
      operator: '==',
      value: cube.ordinal
    };
    this.select(search);
  }

  createConfig(c) {
    const defaultPresenterConfig = {
      onCubeClick: this.onCubeClick.bind(this),
      preStage: this.preStage.bind(this),
      onPresent: this.options.onPresent,
      onLayerClick: (info, pickedInfos, e) => {
        if (!info) {
          this.deselect();
        }
      },
      onLegendClick: (e, legend, clickedIndex) => {
        const legendRow = legend.rows[clickedIndex] && legend.rows[clickedIndex];

        if (legendRow) {
          if (this.options.onLegendRowClick) {
            this.options.onLegendRowClick(e, legendRow);
          } else {
            this.select(legendRow.search);
          }
        }
      }
    };
    const config = {
      presenter: this.presenter,
      presenterConfig: Object.assign(defaultPresenterConfig, c)
    };

    if (this.options.transitionDurations) {
      config.presenterConfig.transitionDurations = this.options.transitionDurations;
    }

    return config;
  }
  /**
   * Filter the data and animate.
   * @param search Filter expression, see https://vega.github.io/vega/docs/expressions/
   */


  filter(search) {
    const u = this._dataScope.createUserSelection(search, false);

    return new Promise((resolve, reject) => {
      this._animator.filter(search, u.included, u.excluded).then(() => {
        this._details.clear();

        this._details.clearSelection();

        this._details.populate(this._dataScope.selection);

        resolve();
      });
    });
  }
  /**
   * Remove any filtration and animate.
   */


  reset() {
    return new Promise((resolve, reject) => {
      this._animator.reset().then(() => {
        this._details.clear();

        this._details.clearSelection();

        resolve();
      });
    });
  }
  /**
   * Select cubes by a filter expression.
   * @param search Filter expression, see https://vega.github.io/vega/docs/expressions/
   */


  select(search) {
    return new Promise((resolve, reject) => {
      this._animator.select(search).then(() => {
        this._details.populate(this._dataScope.selection);

        resolve();
      });
    });
  }
  /**
   * Removes any selection.
   */


  deselect() {
    return new Promise((resolve, reject) => {
      this._animator.deselect().then(() => {
        this._details.clearSelection();

        resolve();
      });
    });
  }
  /**
   * Gets the current selection.
   */


  getSelection() {
    const selectionState = {
      search: this._dataScope.selection && this._dataScope.selection.search || null,
      selectedData: this._dataScope.selection && this._dataScope.selection.included || null,
      active: this._dataScope.active
    };
    return selectionState;
  }
  /**
   * Set one data row to the active state.
   */


  activate(datum) {
    return new Promise((resolve, reject) => {
      this._animator.activate(datum).then(() => {
        this._details.render();

        resolve();
      });
    });
  }
  /**
   * Deactivate item.
   */


  deActivate() {
    return new Promise((resolve, reject) => {
      if (this._dataScope.active) {
        this._animator.deactivate().then(() => {
          this._details.render();

          resolve();
        });
      } else {
        resolve();
      }
    });
  }
  /**
   * Gets the current insight with signal values.
   */


  getInsight() {
    const insight = Object.assign({}, this.insight);
    insight.signalValues = this.getSignalValues();
    return insight;
  }
  /**
   * Gets current signal values.
   */


  getSignalValues() {
    return (0, _signals.extractSignalValuesFromView)(this.vegaViewGl, this.vegaSpec);
  }

}
/**
 * Default Viewer options.
 */


exports.Viewer = Viewer;
Viewer.defaultViewerOptions = _defaults2.defaultViewerOptions;
},{"./searchExpression":"0mJg","./vega-deck.gl":"Uns8","./animator":"U1OZ","./colorCubes":"PfBA","./signals":"jmI2","./ordinal":"/0dx","./axisSelection":"oIzg","./specs/clone":"DO07","./dataScope":"5MJ1","./vega-deck.gl/defaults":"JuFU","./defaults":"G0Md","./details":"1/KC","./headers":"nQLz","./legend":"9/rI","tsx-create-element":"QGtg","./axes":"A7xy","./colorSchemes":"kNpg"}],"rZaE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function () {
    return VegaDeckGl.use;
  }
});
Object.defineProperty(exports, "colorSchemes", {
  enumerable: true,
  get: function () {
    return _colorSchemes.colorSchemes;
  }
});
Object.defineProperty(exports, "Viewer", {
  enumerable: true,
  get: function () {
    return _viewer.Viewer;
  }
});
exports.VegaDeckGl = exports.util = exports.types = exports.searchExpression = exports.constants = void 0;

var constants = _interopRequireWildcard(require("./constants"));

exports.constants = constants;

var searchExpression = _interopRequireWildcard(require("./searchExpression"));

exports.searchExpression = searchExpression;

var types = _interopRequireWildcard(require("./types"));

exports.types = types;

var util = _interopRequireWildcard(require("./util"));

exports.util = util;

var VegaDeckGl = _interopRequireWildcard(require("./vega-deck.gl"));

exports.VegaDeckGl = VegaDeckGl;

var _colorSchemes = require("./colorSchemes");

var _viewer = require("./viewer");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
},{"./constants":"Syc7","./searchExpression":"0mJg","./types":"JCLk","./util":"BTLl","./vega-deck.gl":"Uns8","./colorSchemes":"kNpg","./viewer":"CdFf"}],"wkaK":[function(require,module,exports) {
module.exports = compare;

/*
  primitives: value1 === value2
  functions: value1.toString == value2.toString
  arrays: if length, sequence and values of properties are identical
  objects: if length, names and values of properties are identical
  compare([[1, [2, 3]], [[1, [2, 3]]); // true
  compare([[1, [2, 3], 4], [[1, [2, 3]]); // false
  compare({a: 2, b: 3}, {a: 2, b: 3}); // true
  compare({a: 2, b: 3}, {b: 3, a: 2}); // true
  compare({a: 2, b: 3, c: 4}, {a: 2, b: 3}); // false
  compare({a: 2, b: 3}, {a: 2, b: 3, c: 4}); // false
  compare([[1, [2, {a: 4}], 4], [[1, [2, {a: 4}]]); // true
*/

function compare(value1, value2) {
  if (value1 === value2) {
    return true;
  }
  /* eslint-disable no-self-compare */
  // if both values are NaNs return true
  if ((value1 !== value1) && (value2 !== value2)) {
    return true;
  }
  if ({}.toString.call(value1) != {}.toString.call(value2)) {
    return false;
  }
  if (value1 !== Object(value1)) {
    // non equal primitives
    return false;
  }
  if (!value1) {
    return false;
  }
  if (Array.isArray(value1)) {
    return compareArrays(value1, value2);
  }
  if ({}.toString.call(value1) == '[object Object]') {
    return compareObjects(value1, value2);
  } else {
    return compareNativeSubtypes(value1, value2);
  }
}

function compareNativeSubtypes(value1, value2) {
  // e.g. Function, RegExp, Date
  return value1.toString() === value2.toString();
}

function compareArrays(value1, value2) {
  var len = value1.length;
  if (len != value2.length) {
    return false;
  }
  var alike = true;
  for (var i = 0; i < len; i++) {
    if (!compare(value1[i], value2[i])) {
      alike = false;
      break;
    }
  }
  return alike;
}

function compareObjects(value1, value2) {
  var keys1 = Object.keys(value1).sort();
  var keys2 = Object.keys(value2).sort();
  var len = keys1.length;
  if (len != keys2.length) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var key1 = keys1[i];
    var key2 = keys2[i];
    if (!(key1 == key2 && compare(value1[key1], value2[key2]))) {
      return false;
    }
  }
  return true;
}

},{}],"HI4Z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCompare = exports.classList = void 0;

var compare = _interopRequireWildcard(require("just-compare"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
const classList = (...args) => {
  return args.filter(Boolean).join(' ');
};

exports.classList = classList;
const deepCompare = compare.default || compare;
exports.deepCompare = deepCompare;
},{"just-compare":"wkaK"}],"4x5u":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"N4VU":[function(require,module,exports) {
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var k = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    aa = n ? Symbol.for("react.memo") : 60115,
    ba = n ? Symbol.for("react.lazy") : 60116,
    A = "function" === typeof Symbol && Symbol.iterator;

function ca(a, b, d, c, e, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [d, c, e, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function B(a) {
  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) d += "&args[]=" + encodeURIComponent(arguments[c + 1]);

  ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
}

var C = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    D = {};

function E(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? B("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

var H = G.prototype = new F();
H.constructor = G;
k(H, E.prototype);
H.isPureReactComponent = !0;
var I = {
  current: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === e[c] && (e[c] = f[c]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    e = a[h];
    var f = b + T(e, h);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) e = e.value, f = b + T(e, h++), g += S(e, f, d, c);else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = I.current;
  null === a ? B("321") : void 0;
  return a;
}

var X = {
  Children: {
    map: function (a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function (a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function (a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      N(a) ? void 0 : B("143");
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: E,
  PureComponent: G,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ba,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: aa,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: M,
  cloneElement: function (a, b, d) {
    null === a || void 0 === a ? B("267", a) : void 0;
    var c = void 0,
        e = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: e,
      _owner: f
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.8.6",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: I,
    ReactCurrentOwner: J,
    assign: k
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;
},{"object-assign":"4x5u"}],"W4rj":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"N4VU"}],"W2Ku":[function(require,module,exports) {
var global = arguments[3];
/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};

},{}],"KTa4":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"W2Ku"}],"t7dJ":[function(require,module,exports) {
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),r=require("scheduler");function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b)}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;

},{"react":"W4rj","object-assign":"4x5u","scheduler":"KTa4"}],"UiuB":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"t7dJ"}],"qyfj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SandDanceReact = void 0;

var React = _interopRequireWildcard(require("react"));

var _util = require("./util");

var _reactDom = require("react-dom");

var _sanddance = require("@msrvida/sanddance");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function addNullable(insight, signalValues) {
  const withNulls = Object.assign({
    view: null,
    filter: null
  }, insight, {
    signalValues
  });
  return withNulls;
}

class SandDanceReact extends React.Component {
  areLayoutPropsSame() {
    const currentInsight = this.viewer.getInsight();
    const a = addNullable(currentInsight, Object.assign({}, this.viewer.insight.signalValues, currentInsight.signalValues));
    const b = addNullable(this.props.insight, Object.assign({}, a.signalValues, this.props.insight.signalValues));
    const compare = (0, _util.deepCompare)(a, b);
    return compare && this.props.data === this.lastData;
  }

  needsLayout() {
    return this.props.insight && this.props.data && !this.areLayoutPropsSame();
  }

  layout() {
    this.lastData = this.props.data;
    this.viewer.render(this.props.insight, this.props.data, this.props.renderOptions).then(renderResult => {
      //TODO: show errors if any
      //console.log('viewer render');
      this.props.onView && this.props.onView(renderResult);
    }).catch(() => {//console.log('viewer error');
    });
  }

  view() {
    const needsLayout = this.needsLayout();

    if (needsLayout) {
      this.layout();
    }
  }

  componentDidMount() {
    const element = (0, _reactDom.findDOMNode)(this.viewerDiv);
    this.viewer = new _sanddance.Viewer(element, this.props.viewerOptions);

    if (this.props.onMount) {
      if (this.props.onMount(this.viewer.presenter.getElement(_sanddance.VegaDeckGl.PresenterElement.gl))) {
        this.view();
      }
    } else {
      this.view();
    }
  }

  componentDidUpdate() {
    this.viewer.options = _sanddance.VegaDeckGl.util.deepMerge(this.viewer.options, this.props.viewerOptions);
    this.view();
  }

  render() {
    return React.createElement("div", {
      className: "sanddance-ReactViewer",
      ref: div => this.viewerDiv = div
    });
  }

}

exports.SandDanceReact = SandDanceReact;
},{"react":"W4rj","./util":"HI4Z","react-dom":"UiuB","@msrvida/sanddance":"rZaE"}],"MjKu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SandDanceReact", {
  enumerable: true,
  get: function () {
    return _viewer.SandDanceReact;
  }
});
exports.util = exports.SandDance = void 0;

var SandDance = _interopRequireWildcard(require("@msrvida/sanddance"));

exports.SandDance = SandDance;

var util = _interopRequireWildcard(require("./util"));

exports.util = util;

var _viewer = require("./viewer");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
},{"@msrvida/sanddance":"rZaE","./util":"HI4Z","./viewer":"qyfj"}],"Vlbn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.use = use;
exports.base = void 0;

var _sanddanceReact = require("@msrvida/sanddance-react");

var base = {
  fabric: null
};
/**
 * Specify the dependency libraries to use for rendering.
 * @param fabric Office UI Fabric React library.
 */

exports.base = base;

function use(fabric, vega, deck, layers, luma) {
  _sanddanceReact.SandDance.VegaDeckGl.use(vega, deck, layers, luma);

  base.fabric = fabric;
}
},{"@msrvida/sanddance-react":"MjKu"}],"CgE3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themePalettes = void 0;
var themePalettes = {};
exports.themePalettes = themePalettes;
themePalettes[''] = {
  themePrimary: '#0078d4',
  themeLighterAlt: '#eff6fc',
  themeLighter: '#deecf9',
  themeLight: '#c7e0f4',
  themeTertiary: '#71afe5',
  themeSecondary: '#2b88d8',
  themeDarkAlt: '#106ebe',
  themeDark: '#005a9e',
  themeDarker: '#004578',
  neutralLighterAlt: '#f8f8f8',
  neutralLighter: '#f4f4f4',
  neutralLight: '#eaeaea',
  neutralQuaternaryAlt: '#dadada',
  neutralQuaternary: '#d0d0d0',
  neutralTertiaryAlt: '#c8c8c8',
  neutralTertiary: '#c2c2c2',
  neutralSecondary: '#858585',
  neutralPrimaryAlt: '#4b4b4b',
  neutralPrimary: '#333333',
  neutralDark: '#272727',
  black: '#1d1d1d',
  white: '#ffffff'
};
themePalettes['dark-theme'] = {
  "themePrimary": "#00b4f0",
  "themeLighterAlt": "#00070a",
  "themeLighter": "#001d26",
  "themeLight": "#003648",
  "themeTertiary": "#006c90",
  "themeSecondary": "#009ed3",
  "themeDarkAlt": "#18bbf1",
  "themeDark": "#3ac5f3",
  "themeDarker": "#6cd4f6",
  "neutralLighterAlt": "#0b0b0b",
  "neutralLighter": "#151515",
  "neutralLight": "#252525",
  "neutralQuaternaryAlt": "#2f2f2f",
  "neutralQuaternary": "#373737",
  "neutralTertiaryAlt": "#595959",
  "neutralTertiary": "#929292",
  "neutralSecondary": "#a7a7a7",
  "neutralPrimaryAlt": "#b4b4b4",
  "neutralPrimary": "#cccccc",
  "neutralDark": "#d8d8d8",
  "black": "#f5f5f5",
  "white": "#000000"
};
},{}],"8Xy5":[function(require,module,exports) {
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var k = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    aa = n ? Symbol.for("react.memo") : 60115,
    ba = n ? Symbol.for("react.lazy") : 60116,
    A = "function" === typeof Symbol && Symbol.iterator;

function ca(a, b, d, c, e, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [d, c, e, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function B(a) {
  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) d += "&args[]=" + encodeURIComponent(arguments[c + 1]);

  ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
}

var C = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    D = {};

function E(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? B("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

var H = G.prototype = new F();
H.constructor = G;
k(H, E.prototype);
H.isPureReactComponent = !0;
var I = {
  current: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === e[c] && (e[c] = f[c]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    e = a[h];
    var f = b + T(e, h);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) e = e.value, f = b + T(e, h++), g += S(e, f, d, c);else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = I.current;
  null === a ? B("321") : void 0;
  return a;
}

var X = {
  Children: {
    map: function (a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function (a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function (a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      N(a) ? void 0 : B("143");
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: E,
  PureComponent: G,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ba,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: aa,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: M,
  cloneElement: function (a, b, d) {
    null === a || void 0 === a ? B("267", a) : void 0;
    var c = void 0,
        e = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: e,
      _owner: f
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.8.6",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: I,
    ReactCurrentOwner: J,
    assign: k
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;
},{"object-assign":"4x5u"}],"ccIB":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"8Xy5"}],"dH6z":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"W2Ku"}],"9MtQ":[function(require,module,exports) {
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),r=require("scheduler");function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b)}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;

},{"react":"ccIB","object-assign":"4x5u","scheduler":"dH6z"}],"x9tB":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"9MtQ"}],"5dQN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = IconButton;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function IconButton(props) {
  return React.createElement(_base.base.fabric.IconButton, Object.assign({}, props, {
    styles: {
      rootHovered: {
        color: props.themePalette.themePrimary
      },
      menuIcon: {
        display: 'none'
      }
    },
    iconProps: {
      iconName: props.iconName
    },
    menuProps: props.menuProps
  }));
}
},{"react":"ccIB","../base":"Vlbn"}],"hk5u":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var strings = {
  appName: "SandDance",
  bingsearch: "Bing",
  buttonClose: "Close",
  buttonSelect: "Search & Select",
  buttonColorSchemeMap: "Map color scheme to filtered data",
  buttonColorSchemeRemap: "Remap color to filtered data",
  buttonColorSchemeKeep: "Keep same color scheme",
  buttonCopyToClipboard: "Copy to clipboard",
  buttonExclude: "Exclude",
  buttonIsolate: "Isolate",
  buttonReset: "Stop filtering",
  buttonDeselect: "Clear selection",
  buttonToolbarFloat: "Float toolbar",
  buttonToolbarDock: "Dock toolbar",
  buttonToolbarHide: "Hide toolbar",
  buttonToolbarShow: "Show toolbar",
  buttonNextDataItem: "Next data item",
  buttonPrevDataItem: "Previous data item",
  buttonCreateSnapshot: "Create snapshot",
  buttonAddExpression: "add expression",
  buttonAddExpressionGroup: "add group",
  buttonDeleteExpression: "delete",
  buttonDeleteExpressionGroup: "delete group",
  buttonDeleteSnapshot: "delete snapshot",
  buttonShowVegaSpec: "Show Vega spec",
  buttonLaunchVegaEditor: "Open Vega Editor",
  buttonCameraHome: "Center chart in window",
  chartTypeBarChart: "Bar chart",
  chartTypeDensity: "Density",
  chartTypeGrid: "Grid",
  chartTypeScatterPlot: "Scatter plot",
  chartTypeStacks: "Stacks",
  chartTypeTreeMap: "Tree map",
  labelChartSettings: "Chart settings",
  labelDataBrowser: "Data browser",
  labelTools: "Tools",
  labelVegaSpec: "Vega specification",
  labelColor: "Chart color",
  labelError: "Error",
  labelSnapshots: "Snapshots",
  labelSearch: "Select by search",
  labelChart: "Chart",
  labelChartCanvas: "Chart canvas",
  labelColumnMapping: "Column Mapping",
  labelChartTypeOptions: "Chart options",
  labelColorBin: "Color binning",
  labelColorBinExplanation: "For numeric columns",
  labelColorBinNone: "None (continuous)",
  labelColorBinQuantize: "Quantize",
  labelColorBinQuantile: "Quantile",
  labelColorFilter: "Note: Colors will be re-mapped to the filter when viewing this snapshot.",
  labelColorScheme: "Scheme",
  labelColumnColor: "Color by",
  labelColumnFacet: "Facet by",
  labelColumnSort: "Sort by",
  labelColumnX: "X Axis",
  labelColumnY: "Y Axis",
  labelColumnZ: "Z Axis",
  labelColumnSize: "Size by",
  labelColumnGroup: "Group by",
  labelDataItemIsFiltered: "Item is filtered from view",
  labelShowLegend: "Show legend",
  labelShowAxes: "Show axes",
  labelSnapshotDescription: "Description",
  labelTransitionDurations: "Transition durations",
  labelTransitionCamera: "2D / 3D view",
  labelTransitionColor: "Color",
  labelTransitionPosition: "Position",
  labelTransitionSize: "Size",
  labelVegaSpecData: "Data reference",
  labelVegaSpecNotes: "Note: You may need to change the color scheme to make this visible in Vega.",
  loading: "Loading...",
  schemeCategorical: "Categorical",
  schemeDiverging: "Diverging",
  schemeDual: "Dual",
  schemeSequentialMultiHue: "Sequential Multi Hue",
  schemeSequentialSingleHue: "Sequential Single Hue",
  selectDataSpanAll: "All rows",
  selectDataSpanFilter: "Filtered",
  selectDataSpanSelection: "Selected",
  selectVegaSpecDataNone: "None",
  selectVegaSpecDataInline: "Inline - WARNING this may use substantial browser/clipboard memory for large data sets.",
  selectVegaSpecDataUrl: "URL",
  record: function record(current, total) {
    return "".concat(current, " of ").concat(total);
  },
  searchEQ: "=",
  searchNEQ: "<>",
  searchGT: ">",
  searchGTE: ">=",
  searchLT: "<",
  searchLTE: "<=",
  searchNULL: "is null or empty",
  searchIN: "contains",
  searchSW: "starts with",
  searchWHERE: "Where",
  searchAND: "and",
  searchOR: "or",
  selectAny: "-- any --",
  selectNone: "-- none --",
  selectNumeric: "Numeric",
  selectNumericWithBinning: "Numeric (with binning)",
  selectNonNumeric: "Categorical",
  tooltipSearch: function tooltipSearch(column, value) {
    return "Click to search in '".concat(column, "' for \"").concat(value, "\"");
  },
  labelRequired: "required",
  lavelViewType2d: "View in 2D",
  labelViewType3d: "View in 3D",
  labelDataNullAll: "Loading data...",
  labelDataNullFiltered: "You can filter by first making a selection, then choosing <b>Isolate</b> or <b>Exclude</b> in the top bar.",
  labelDataNullSelection: "You can select by: <ul><li>clicking the chart axes</li><li>clicking in the legend</li><li>searching</li</ul>",
  labelZeroAll: "Dataset contains zero rows.",
  labelZeroSearchResults: "No rows matched your search.",
  signalGroups: [{
    prefix: "Chart",
    label: "Chart options"
  }, {
    prefix: "RoleColor",
    label: "Color options"
  }, {
    prefix: "RoleFacet",
    label: "Facet options"
  }, {
    prefix: "RoleSort",
    label: "Sort options"
  }, {
    prefix: "RoleX",
    label: "X axis options"
  }, {
    prefix: "RoleY",
    label: "Y axis options"
  }, {
    prefix: "RoleZ",
    label: "Z axis options"
  }, {
    prefix: "Text",
    label: "Text options"
  }, {
    prefix: "*",
    label: "Options"
  }]
};
exports.strings = strings;
},{}],"E67y":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyColorButtons = applyColorButtons;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _iconButton = require("./controls/iconButton");

var _sanddanceReact = require("@msrvida/sanddance-react");

var _language = require("./language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var className = 'sanddance-panel-tools';

function ensureToolbar(panel) {
  var existing = panel.getElementsByClassName(className);

  if (existing.length > 0) {
    return existing[0];
  } else {
    var div = _sanddanceReact.SandDance.VegaDeckGl.util.addDiv(panel, className);

    panel.insertAdjacentElement('afterbegin', div);
    return div;
  }
}

function applyColorButtons(presenter, showLegend, props) {
  var panel = presenter.getElement(_sanddanceReact.SandDance.VegaDeckGl.PresenterElement.panel);
  var div = ensureToolbar(panel);
  ReactDOM.render(ColorMap(props), div);
  panel.style.display = showLegend ? '' : 'none';
}

function ColorMap(props) {
  var menuProps = {
    items: [{
      key: 'new',
      text: _language.strings.buttonColorSchemeRemap,
      disabled: !props.canRemap || props.isRemap,
      onClick: function onClick() {
        return props.colorMapHandler(true);
      }
    }, {
      key: 'old',
      text: _language.strings.buttonColorSchemeKeep,
      disabled: !props.canRemap || !props.isRemap,
      onClick: function onClick() {
        return props.colorMapHandler(false);
      }
    }]
  };
  return React.createElement("div", null, React.createElement(_iconButton.IconButton, {
    themePalette: props.themePalette,
    title: _language.strings.buttonColorSchemeMap,
    onClick: null,
    iconName: props.canRemap ? "FiltersSolid" : "Filters",
    menuProps: menuProps
  }));
}
},{"react":"ccIB","react-dom":"x9tB","./controls/iconButton":"5dQN","@msrvida/sanddance-react":"MjKu","./language":"hk5u"}],"L8O2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bestColorScheme = bestColorScheme;

function bestColorScheme(newColumn, oldColumn, oldScheme) {
  if (oldColumn && oldColumn.quantitative === newColumn.quantitative && defaultColorScheme(oldColumn) === defaultColorScheme(newColumn)) {
    return oldScheme;
  }

  return defaultColorScheme(newColumn);
}

function defaultColorScheme(c) {
  if (c.quantitative) {
    return 'redyellowgreen';
  } else if (c.stats.distinctValueCount === 2) {
    return 'dual_redgreen';
  } else if (c.stats.distinctValueCount <= 10) {
    return 'category10';
  }

  return 'category20';
}
},{}],"Uyrp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = Dropdown;
exports.dropdownWidth = void 0;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var dropdownWidth = 200;
exports.dropdownWidth = dropdownWidth;

function Dropdown(props) {
  var selectedKey = null;

  if (props.options && props.options.length > 1) {
    var selectedOptions = props.options.filter(function (option) {
      return option.selected;
    });

    if (selectedOptions && selectedOptions.length > 0) {
      selectedKey = selectedOptions[0].key;
    }
  }

  return React.createElement(_base.base.fabric.Dropdown, Object.assign({
    dropdownWidth: dropdownWidth
  }, props, {
    label: props.collapseLabel ? null : props.label,
    selectedKey: selectedKey,
    onRenderTitle: props.collapseLabel && function (a, b) {
      return React.createElement("span", null, props.label, ": ", a[0].text);
    }
  }));
}
},{"react":"ccIB","../base":"Vlbn"}],"OWDI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signal = Signal;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Signal(props) {
  if (!props.explorer.viewer || !props.signal) {
    return null;
  }

  if (props.signal.bind) {
    var input = props.signal.bind.input;

    if (input) {
      var fn = map[input];

      if (fn) {
        var prefix = props.prefix ? "".concat(props.prefix, " ") : '';
        var initialValue;

        try {
          initialValue = props.explorer.viewer.vegaViewGl.signal(props.signal.name);
        } catch (error) {}

        var control = fn(prefix, props.signal.bind, initialValue, function (value) {
          props.onChange && props.onChange(value);
          props.explorer.signal(props.signal.name, value);
        }, props.disabled);
        return React.createElement("div", {
          className: "sanddance-signal"
        }, control);
      }
    }
  }

  return null;
}

var map = {};

map['range'] = function (prefix, bind, initialValue, onChange, disabled) {
  return React.createElement(_base.base.fabric.Slider, {
    label: prefix + bind.name,
    max: bind.max,
    min: bind.min,
    step: bind.step,
    value: initialValue,
    onChange: onChange,
    disabled: disabled
  });
};

map['select'] = function (prefix, bind, initialValue, _onChange, disabled) {
  var options = bind.options.map(function (o, i) {
    var option = {
      key: o,
      text: o
    };
    return option;
  });
  return React.createElement(_base.base.fabric.Dropdown, {
    defaultSelectedKey: initialValue,
    label: prefix + bind.name,
    options: options,
    onChange: function onChange(e, o) {
      return _onChange(o.text);
    },
    disabled: disabled
  });
};

map['checkbox'] = function (prefix, bind, initialValue, _onChange2, disabled) {
  return React.createElement(_base.base.fabric.Toggle, {
    defaultChecked: initialValue,
    label: prefix + bind.name,
    onChange: function onChange(e, checked) {
      return _onChange2(checked);
    },
    disabled: disabled
  });
}; //TODO other signal types
},{"react":"ccIB","../base":"Vlbn"}],"DSho":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnMap = ColumnMap;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _dropdown = require("./dropdown");

var _sanddanceReact = require("@msrvida/sanddance-react");

var _signal = require("./signal");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var maxFacets = 50;
var roleLabels = {
  color: _language.strings.labelColumnColor,
  facet: _language.strings.labelColumnFacet,
  group: _language.strings.labelColumnGroup,
  size: _language.strings.labelColumnSize,
  sort: _language.strings.labelColumnSort,
  uid: null,
  x: _language.strings.labelColumnX,
  y: _language.strings.labelColumnY,
  z: _language.strings.labelColumnZ
};

function filterColumnList(context, columns) {
  switch (context) {
    case "facet":
      return columns.filter(function (column) {
        return column.quantitative || column.stats.distinctValueCount && column.stats.distinctValueCount < maxFacets;
      });

    default:
      return columns.slice();
  }
}

function optionsForSpecColumn(sectionName, columns, role, selectedColumnName) {
  var filtered = filterColumnList(role, columns);
  var sorted = filtered.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  var options = sorted.map(function (column, i) {
    var option = {
      key: column.name,
      text: column.name,
      data: column,
      selected: selectedColumnName === column.name
    };
    return option;
  });

  if (options.length) {
    var option = {
      key: sectionName,
      text: sectionName,
      itemType: _base.base.fabric.DropdownMenuItemType.Header
    };
    options.unshift(option);
  }

  return options;
}

function selectFirst(options) {
  for (var i = 0; i < options.length; i++) {
    if (options[i].itemType === _base.base.fabric.DropdownMenuItemType.Header) continue;
    options[i].selected = true;
    return;
  }
}

function ColumnMap(props) {
  if (!props.specRole) return null;
  var numericLabel = _language.strings.selectNumeric;

  if (props.specRole.binnable) {
    numericLabel = _language.strings.selectNumericWithBinning;
  }

  var qoptions = optionsForSpecColumn(numericLabel, props.quantitativeColumns, props.specRole.role, props.selectedColumnName);
  var coptions = props.specRole.excludeCategoric ? null : optionsForSpecColumn(_language.strings.selectNonNumeric, props.categoricalColumns, props.specRole.role, props.selectedColumnName);
  var options = qoptions.concat(coptions).filter(Boolean);

  if (props.specRole.allowNone) {
    options.unshift({
      key: -1,
      text: _language.strings.selectNone
    });
  }

  var hasSelection = options.reduce(function (p, c) {
    return p || c.selected;
  }, false);

  if (!hasSelection) {
    selectFirst(options);
  }

  var signals;

  if (props.explorer.viewer && props.explorer.viewer.vegaSpec) {
    if (props.specRole.signals) {
      signals = props.explorer.viewer.vegaSpec.signals.filter(function (s) {
        return props.specRole.signals.indexOf(s.name) >= 0;
      });
    }
  }

  var label = roleLabels[props.specRole.role];
  return React.createElement("div", {
    className: "sanddance-columnMap"
  }, React.createElement(_dropdown.Dropdown, {
    collapseLabel: true,
    disabled: props.disabled,
    label: label,
    options: options,
    onChange: function onChange(e, o) {
      return props.changeColumnMapping(props.specRole.role, _sanddanceReact.SandDance.VegaDeckGl.util.clone(o.data));
    }
  }), signals && signals.map(function (signal, i) {
    return React.createElement(_signal.Signal, {
      key: i,
      explorer: props.explorer,
      signal: signal,
      onChange: function onChange(value) {
        return props.onChangeSignal && props.onChangeSignal(signal.name, value);
      }
    });
  }));
}
},{"react":"ccIB","../base":"Vlbn","./dropdown":"Uyrp","@msrvida/sanddance-react":"MjKu","./signal":"OWDI","../language":"hk5u"}],"4Q3h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = Group;

var React = _interopRequireWildcard(require("react"));

var _sanddanceReact = require("@msrvida/sanddance-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Group(props) {
  return React.createElement("div", {
    className: _sanddanceReact.util.classList("sanddance-group", props.className)
  }, React.createElement("div", {
    className: "group-head"
  }, React.createElement("label", null, props.label), props.labelCount && React.createElement("span", {
    className: "count"
  }, "(", props.labelCount, ")")), props.children && React.createElement("div", {
    className: "group-body"
  }, props.children));
}
},{"react":"ccIB","@msrvida/sanddance-react":"MjKu"}],"NGSt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = Chart;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _columnMap = require("../controls/columnMap");

var _group = require("../controls/group");

var _signal = require("../controls/signal");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Chart(props) {
  var signals = props.explorer.viewer && props.explorer.viewer.vegaSpec && props.specCapabilities && props.specCapabilities.signals && props.explorer.viewer.vegaSpec.signals.filter(function (s) {
    return props.specCapabilities.signals.indexOf(s.name) >= 0;
  });
  return React.createElement("div", null, React.createElement(_group.Group, {
    label: _language.strings.labelChart
  }, React.createElement("div", {
    className: "calculator"
  }, React.createElement(_base.base.fabric.ChoiceGroup, {
    options: [{
      key: 'grid',
      text: _language.strings.chartTypeGrid,
      checked: props.chart === 'grid',
      disabled: props.disabled
    }, {
      key: 'scatterplot',
      text: _language.strings.chartTypeScatterPlot,
      checked: props.chart === 'scatterplot',
      disabled: props.disabled
    }, {
      key: 'density',
      text: _language.strings.chartTypeDensity,
      checked: props.chart === 'density',
      disabled: props.disabled
    }, {
      key: 'barchart',
      text: _language.strings.chartTypeBarChart,
      checked: props.chart === 'barchart',
      disabled: props.disabled
    }, {
      key: 'treemap',
      text: _language.strings.chartTypeTreeMap,
      checked: props.chart === 'treemap',
      disabled: props.disabled
    }, {
      key: 'stacks',
      text: _language.strings.chartTypeStacks,
      checked: props.chart === 'stacks',
      disabled: props.disabled
    }],
    onChange: function onChange(e, o) {
      return props.onChangeChartType(o.key);
    }
  }))), signals && React.createElement(_group.Group, {
    label: _language.strings.labelChartTypeOptions
  }, signals.map(function (signal, i) {
    return React.createElement(_signal.Signal, {
      key: i,
      signal: signal,
      explorer: props.explorer,
      disabled: props.disabled
    });
  })), React.createElement(_group.Group, {
    label: _language.strings.labelColumnMapping
  }, props.specCapabilities && props.specCapabilities.roles.map(function (specRole, i) {
    var specColumnInRole = props.columns[specRole.role];
    var selectedColumnName = specColumnInRole;
    var disabled = props.disabled || props.view === '2d' && specRole.role === 'z';
    return React.createElement(_columnMap.ColumnMap, Object.assign({}, props, {
      disabled: disabled,
      selectedColumnName: selectedColumnName,
      specRole: specRole,
      key: i,
      onChangeSignal: function onChangeSignal(name, value) {
        return props.onChangeSignal(specRole.role, selectedColumnName, name, value);
      }
    }));
  })));
}
},{"react":"ccIB","../base":"Vlbn","../controls/columnMap":"DSho","../controls/group":"4Q3h","../controls/signal":"OWDI","../language":"hk5u"}],"BSWy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemeOption = schemeOption;
exports.schemesJSX = void 0;

function schemeOption(selected, scheme) {
  return {
    key: scheme,
    text: scheme,
    selected: selected === scheme,
    scheme: scheme,
    children: schemesJSX[scheme]
  };
}

var schemesJSX = {};
exports.schemesJSX = schemesJSX;
},{}],"JrIT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categorical = categorical;

var React = _interopRequireWildcard(require("react"));

var _scheme = require("./scheme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var p8 = "".concat(100 / 8, "%");
var p9 = "".concat(100 / 9, "%");
var p10 = "".concat(100 / 10, "%");
var p12 = "".concat(100 / 12, "%");
var p20 = "".concat(100 / 20, "%");
_scheme.schemesJSX["accent"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#7fc97f",
  style: {
    width: p8,
    background: "rgb(127, 201, 127)"
  }
}), React.createElement("div", {
  title: "#beaed4",
  style: {
    width: p8,
    background: "rgb(190, 174, 212)"
  }
}), React.createElement("div", {
  title: "#fdc086",
  style: {
    width: p8,
    background: "rgb(253, 192, 134)"
  }
}), React.createElement("div", {
  title: "#ffff99",
  style: {
    width: p8,
    background: "rgb(255, 255, 153)"
  }
}), React.createElement("div", {
  title: "#386cb0",
  style: {
    width: p8,
    background: "rgb(56, 108, 176)"
  }
}), React.createElement("div", {
  title: "#f0027f",
  style: {
    width: p8,
    background: "rgb(240, 2, 127)"
  }
}), React.createElement("div", {
  title: "#bf5b17",
  style: {
    width: p8,
    background: "rgb(191, 91, 23)"
  }
}), React.createElement("div", {
  title: "#666666",
  style: {
    width: p8,
    background: "rgb(102, 102, 102)"
  }
}));
_scheme.schemesJSX["category10"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#1f77b4",
  style: {
    width: p10,
    background: "rgb(31, 119, 180)"
  }
}), React.createElement("div", {
  title: "#ff7f0e",
  style: {
    width: p10,
    background: "rgb(255, 127, 14)"
  }
}), React.createElement("div", {
  title: "#2ca02c",
  style: {
    width: p10,
    background: "rgb(44, 160, 44)"
  }
}), React.createElement("div", {
  title: "#d62728",
  style: {
    width: p10,
    background: "rgb(214, 39, 40)"
  }
}), React.createElement("div", {
  title: "#9467bd",
  style: {
    width: p10,
    background: "rgb(148, 103, 189)"
  }
}), React.createElement("div", {
  title: "#8c564b",
  style: {
    width: p10,
    background: "rgb(140, 86, 75)"
  }
}), React.createElement("div", {
  title: "#e377c2",
  style: {
    width: p10,
    background: "rgb(227, 119, 194)"
  }
}), React.createElement("div", {
  title: "#7f7f7f",
  style: {
    width: p10,
    background: "rgb(127, 127, 127)"
  }
}), React.createElement("div", {
  title: "#bcbd22",
  style: {
    width: p10,
    background: "rgb(188, 189, 34)"
  }
}), React.createElement("div", {
  title: "#17becf",
  style: {
    width: p10,
    background: "rgb(23, 190, 207)"
  }
}));
_scheme.schemesJSX["category20"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#1f77b4",
  style: {
    width: p20,
    background: "rgb(31, 119, 180)"
  }
}), React.createElement("div", {
  title: "#aec7e8",
  style: {
    width: p20,
    background: "rgb(174, 199, 232)"
  }
}), React.createElement("div", {
  title: "#ff7f0e",
  style: {
    width: p20,
    background: "rgb(255, 127, 14)"
  }
}), React.createElement("div", {
  title: "#ffbb78",
  style: {
    width: p20,
    background: "rgb(255, 187, 120)"
  }
}), React.createElement("div", {
  title: "#2ca02c",
  style: {
    width: p20,
    background: "rgb(44, 160, 44)"
  }
}), React.createElement("div", {
  title: "#98df8a",
  style: {
    width: p20,
    background: "rgb(152, 223, 138)"
  }
}), React.createElement("div", {
  title: "#d62728",
  style: {
    width: p20,
    background: "rgb(214, 39, 40)"
  }
}), React.createElement("div", {
  title: "#ff9896",
  style: {
    width: p20,
    background: "rgb(255, 152, 150)"
  }
}), React.createElement("div", {
  title: "#9467bd",
  style: {
    width: p20,
    background: "rgb(148, 103, 189)"
  }
}), React.createElement("div", {
  title: "#c5b0d5",
  style: {
    width: p20,
    background: "rgb(197, 176, 213)"
  }
}), React.createElement("div", {
  title: "#8c564b",
  style: {
    width: p20,
    background: "rgb(140, 86, 75)"
  }
}), React.createElement("div", {
  title: "#c49c94",
  style: {
    width: p20,
    background: "rgb(196, 156, 148)"
  }
}), React.createElement("div", {
  title: "#e377c2",
  style: {
    width: p20,
    background: "rgb(227, 119, 194)"
  }
}), React.createElement("div", {
  title: "#f7b6d2",
  style: {
    width: p20,
    background: "rgb(247, 182, 210)"
  }
}), React.createElement("div", {
  title: "#7f7f7f",
  style: {
    width: p20,
    background: "rgb(127, 127, 127)"
  }
}), React.createElement("div", {
  title: "#c7c7c7",
  style: {
    width: p20,
    background: "rgb(199, 199, 199)"
  }
}), React.createElement("div", {
  title: "#bcbd22",
  style: {
    width: p20,
    background: "rgb(188, 189, 34)"
  }
}), React.createElement("div", {
  title: "#dbdb8d",
  style: {
    width: p20,
    background: "rgb(219, 219, 141)"
  }
}), React.createElement("div", {
  title: "#17becf",
  style: {
    width: p20,
    background: "rgb(23, 190, 207)"
  }
}), React.createElement("div", {
  title: "#9edae5",
  style: {
    width: p20,
    background: "rgb(158, 218, 229)"
  }
}));
_scheme.schemesJSX["category20b"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#393b79",
  style: {
    width: p20,
    background: "rgb(57, 59, 121)"
  }
}), React.createElement("div", {
  title: "#5254a3",
  style: {
    width: p20,
    background: "rgb(82, 84, 163)"
  }
}), React.createElement("div", {
  title: "#6b6ecf",
  style: {
    width: p20,
    background: "rgb(107, 110, 207)"
  }
}), React.createElement("div", {
  title: "#9c9ede",
  style: {
    width: p20,
    background: "rgb(156, 158, 222)"
  }
}), React.createElement("div", {
  title: "#637939",
  style: {
    width: p20,
    background: "rgb(99, 121, 57)"
  }
}), React.createElement("div", {
  title: "#8ca252",
  style: {
    width: p20,
    background: "rgb(140, 162, 82)"
  }
}), React.createElement("div", {
  title: "#b5cf6b",
  style: {
    width: p20,
    background: "rgb(181, 207, 107)"
  }
}), React.createElement("div", {
  title: "#cedb9c",
  style: {
    width: p20,
    background: "rgb(206, 219, 156)"
  }
}), React.createElement("div", {
  title: "#8c6d31",
  style: {
    width: p20,
    background: "rgb(140, 109, 49)"
  }
}), React.createElement("div", {
  title: "#bd9e39",
  style: {
    width: p20,
    background: "rgb(189, 158, 57)"
  }
}), React.createElement("div", {
  title: "#e7ba52",
  style: {
    width: p20,
    background: "rgb(231, 186, 82)"
  }
}), React.createElement("div", {
  title: "#e7cb94",
  style: {
    width: p20,
    background: "rgb(231, 203, 148)"
  }
}), React.createElement("div", {
  title: "#843c39",
  style: {
    width: p20,
    background: "rgb(132, 60, 57)"
  }
}), React.createElement("div", {
  title: "#ad494a",
  style: {
    width: p20,
    background: "rgb(173, 73, 74)"
  }
}), React.createElement("div", {
  title: "#d6616b",
  style: {
    width: p20,
    background: "rgb(214, 97, 107)"
  }
}), React.createElement("div", {
  title: "#e7969c",
  style: {
    width: p20,
    background: "rgb(231, 150, 156)"
  }
}), React.createElement("div", {
  title: "#7b4173",
  style: {
    width: p20,
    background: "rgb(123, 65, 115)"
  }
}), React.createElement("div", {
  title: "#a55194",
  style: {
    width: p20,
    background: "rgb(165, 81, 148)"
  }
}), React.createElement("div", {
  title: "#ce6dbd",
  style: {
    width: p20,
    background: "rgb(206, 109, 189)"
  }
}), React.createElement("div", {
  title: "#de9ed6",
  style: {
    width: p20,
    background: "rgb(222, 158, 214)"
  }
}));
_scheme.schemesJSX["category20c"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#3182bd",
  style: {
    width: p20,
    background: "rgb(49, 130, 189)"
  }
}), React.createElement("div", {
  title: "#6baed6",
  style: {
    width: p20,
    background: "rgb(107, 174, 214)"
  }
}), React.createElement("div", {
  title: "#9ecae1",
  style: {
    width: p20,
    background: "rgb(158, 202, 225)"
  }
}), React.createElement("div", {
  title: "#c6dbef",
  style: {
    width: p20,
    background: "rgb(198, 219, 239)"
  }
}), React.createElement("div", {
  title: "#e6550d",
  style: {
    width: p20,
    background: "rgb(230, 85, 13)"
  }
}), React.createElement("div", {
  title: "#fd8d3c",
  style: {
    width: p20,
    background: "rgb(253, 141, 60)"
  }
}), React.createElement("div", {
  title: "#fdae6b",
  style: {
    width: p20,
    background: "rgb(253, 174, 107)"
  }
}), React.createElement("div", {
  title: "#fdd0a2",
  style: {
    width: p20,
    background: "rgb(253, 208, 162)"
  }
}), React.createElement("div", {
  title: "#31a354",
  style: {
    width: p20,
    background: "rgb(49, 163, 84)"
  }
}), React.createElement("div", {
  title: "#74c476",
  style: {
    width: p20,
    background: "rgb(116, 196, 118)"
  }
}), React.createElement("div", {
  title: "#a1d99b",
  style: {
    width: p20,
    background: "rgb(161, 217, 155)"
  }
}), React.createElement("div", {
  title: "#c7e9c0",
  style: {
    width: p20,
    background: "rgb(199, 233, 192)"
  }
}), React.createElement("div", {
  title: "#756bb1",
  style: {
    width: p20,
    background: "rgb(117, 107, 177)"
  }
}), React.createElement("div", {
  title: "#9e9ac8",
  style: {
    width: p20,
    background: "rgb(158, 154, 200)"
  }
}), React.createElement("div", {
  title: "#bcbddc",
  style: {
    width: p20,
    background: "rgb(188, 189, 220)"
  }
}), React.createElement("div", {
  title: "#dadaeb",
  style: {
    width: p20,
    background: "rgb(218, 218, 235)"
  }
}), React.createElement("div", {
  title: "#636363",
  style: {
    width: p20,
    background: "rgb(99, 99, 99)"
  }
}), React.createElement("div", {
  title: "#969696",
  style: {
    width: p20,
    background: "rgb(150, 150, 150)"
  }
}), React.createElement("div", {
  title: "#bdbdbd",
  style: {
    width: p20,
    background: "rgb(189, 189, 189)"
  }
}), React.createElement("div", {
  title: "#d9d9d9",
  style: {
    width: p20,
    background: "rgb(217, 217, 217)"
  }
}));
_scheme.schemesJSX["dark2"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#1b9e77",
  style: {
    width: p8,
    background: "rgb(27, 158, 119)"
  }
}), React.createElement("div", {
  title: "#d95f02",
  style: {
    width: p8,
    background: "rgb(217, 95, 2)"
  }
}), React.createElement("div", {
  title: "#7570b3",
  style: {
    width: p8,
    background: "rgb(117, 112, 179)"
  }
}), React.createElement("div", {
  title: "#e7298a",
  style: {
    width: p8,
    background: "rgb(231, 41, 138)"
  }
}), React.createElement("div", {
  title: "#66a61e",
  style: {
    width: p8,
    background: "rgb(102, 166, 30)"
  }
}), React.createElement("div", {
  title: "#e6ab02",
  style: {
    width: p8,
    background: "rgb(230, 171, 2)"
  }
}), React.createElement("div", {
  title: "#a6761d",
  style: {
    width: p8,
    background: "rgb(166, 118, 29)"
  }
}), React.createElement("div", {
  title: "#666666",
  style: {
    width: p8,
    background: "rgb(102, 102, 102)"
  }
}));
_scheme.schemesJSX["paired"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#a6cee3",
  style: {
    width: p12,
    background: "rgb(166, 206, 227)"
  }
}), React.createElement("div", {
  title: "#1f78b4",
  style: {
    width: p12,
    background: "rgb(31, 120, 180)"
  }
}), React.createElement("div", {
  title: "#b2df8a",
  style: {
    width: p12,
    background: "rgb(178, 223, 138)"
  }
}), React.createElement("div", {
  title: "#33a02c",
  style: {
    width: p12,
    background: "rgb(51, 160, 44)"
  }
}), React.createElement("div", {
  title: "#fb9a99",
  style: {
    width: p12,
    background: "rgb(251, 154, 153)"
  }
}), React.createElement("div", {
  title: "#e31a1c",
  style: {
    width: p12,
    background: "rgb(227, 26, 28)"
  }
}), React.createElement("div", {
  title: "#fdbf6f",
  style: {
    width: p12,
    background: "rgb(253, 191, 111)"
  }
}), React.createElement("div", {
  title: "#ff7f00",
  style: {
    width: p12,
    background: "rgb(255, 127, 0)"
  }
}), React.createElement("div", {
  title: "#cab2d6",
  style: {
    width: p12,
    background: "rgb(202, 178, 214)"
  }
}), React.createElement("div", {
  title: "#6a3d9a",
  style: {
    width: p12,
    background: "rgb(106, 61, 154)"
  }
}), React.createElement("div", {
  title: "#ffff99",
  style: {
    width: p12,
    background: "rgb(255, 255, 153)"
  }
}), React.createElement("div", {
  title: "#b15928",
  style: {
    width: p12,
    background: "rgb(177, 89, 40)"
  }
}));
_scheme.schemesJSX["pastel1"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#fbb4ae",
  style: {
    width: p9,
    background: "rgb(251, 180, 174)"
  }
}), React.createElement("div", {
  title: "#b3cde3",
  style: {
    width: p9,
    background: "rgb(179, 205, 227)"
  }
}), React.createElement("div", {
  title: "#ccebc5",
  style: {
    width: p9,
    background: "rgb(204, 235, 197)"
  }
}), React.createElement("div", {
  title: "#decbe4",
  style: {
    width: p9,
    background: "rgb(222, 203, 228)"
  }
}), React.createElement("div", {
  title: "#fed9a6",
  style: {
    width: p9,
    background: "rgb(254, 217, 166)"
  }
}), React.createElement("div", {
  title: "#ffffcc",
  style: {
    width: p9,
    background: "rgb(255, 255, 204)"
  }
}), React.createElement("div", {
  title: "#e5d8bd",
  style: {
    width: p9,
    background: "rgb(229, 216, 189)"
  }
}), React.createElement("div", {
  title: "#fddaec",
  style: {
    width: p9,
    background: "rgb(253, 218, 236)"
  }
}), React.createElement("div", {
  title: "#f2f2f2",
  style: {
    width: p9,
    background: "rgb(242, 242, 242)"
  }
}));
_scheme.schemesJSX["pastel2"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#b3e2cd",
  style: {
    width: p8,
    background: "rgb(179, 226, 205)"
  }
}), React.createElement("div", {
  title: "#fdcdac",
  style: {
    width: p8,
    background: "rgb(253, 205, 172)"
  }
}), React.createElement("div", {
  title: "#cbd5e8",
  style: {
    width: p8,
    background: "rgb(203, 213, 232)"
  }
}), React.createElement("div", {
  title: "#f4cae4",
  style: {
    width: p8,
    background: "rgb(244, 202, 228)"
  }
}), React.createElement("div", {
  title: "#e6f5c9",
  style: {
    width: p8,
    background: "rgb(230, 245, 201)"
  }
}), React.createElement("div", {
  title: "#fff2ae",
  style: {
    width: p8,
    background: "rgb(255, 242, 174)"
  }
}), React.createElement("div", {
  title: "#f1e2cc",
  style: {
    width: p8,
    background: "rgb(241, 226, 204)"
  }
}), React.createElement("div", {
  title: "#cccccc",
  style: {
    width: p8,
    background: "rgb(204, 204, 204)"
  }
}));
_scheme.schemesJSX["set1"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#e41a1c",
  style: {
    width: p9,
    background: "rgb(228, 26, 28)"
  }
}), React.createElement("div", {
  title: "#377eb8",
  style: {
    width: p9,
    background: "rgb(55, 126, 184)"
  }
}), React.createElement("div", {
  title: "#4daf4a",
  style: {
    width: p9,
    background: "rgb(77, 175, 74)"
  }
}), React.createElement("div", {
  title: "#984ea3",
  style: {
    width: p9,
    background: "rgb(152, 78, 163)"
  }
}), React.createElement("div", {
  title: "#ff7f00",
  style: {
    width: p9,
    background: "rgb(255, 127, 0)"
  }
}), React.createElement("div", {
  title: "#ffff33",
  style: {
    width: p9,
    background: "rgb(255, 255, 51)"
  }
}), React.createElement("div", {
  title: "#a65628",
  style: {
    width: p9,
    background: "rgb(166, 86, 40)"
  }
}), React.createElement("div", {
  title: "#f781bf",
  style: {
    width: p9,
    background: "rgb(247, 129, 191)"
  }
}), React.createElement("div", {
  title: "#999999",
  style: {
    width: p9,
    background: "rgb(153, 153, 153)"
  }
}));
_scheme.schemesJSX["set2"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#66c2a5",
  style: {
    width: p8,
    background: "rgb(102, 194, 165)"
  }
}), React.createElement("div", {
  title: "#fc8d62",
  style: {
    width: p8,
    background: "rgb(252, 141, 98)"
  }
}), React.createElement("div", {
  title: "#8da0cb",
  style: {
    width: p8,
    background: "rgb(141, 160, 203)"
  }
}), React.createElement("div", {
  title: "#e78ac3",
  style: {
    width: p8,
    background: "rgb(231, 138, 195)"
  }
}), React.createElement("div", {
  title: "#a6d854",
  style: {
    width: p8,
    background: "rgb(166, 216, 84)"
  }
}), React.createElement("div", {
  title: "#ffd92f",
  style: {
    width: p8,
    background: "rgb(255, 217, 47)"
  }
}), React.createElement("div", {
  title: "#e5c494",
  style: {
    width: p8,
    background: "rgb(229, 196, 148)"
  }
}), React.createElement("div", {
  title: "#b3b3b3",
  style: {
    width: p8,
    background: "rgb(179, 179, 179)"
  }
}));
_scheme.schemesJSX["set3"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#8dd3c7",
  style: {
    width: p12,
    background: "rgb(141, 211, 199)"
  }
}), React.createElement("div", {
  title: "#ffffb3",
  style: {
    width: p12,
    background: "rgb(255, 255, 179)"
  }
}), React.createElement("div", {
  title: "#bebada",
  style: {
    width: p12,
    background: "rgb(190, 186, 218)"
  }
}), React.createElement("div", {
  title: "#fb8072",
  style: {
    width: p12,
    background: "rgb(251, 128, 114)"
  }
}), React.createElement("div", {
  title: "#80b1d3",
  style: {
    width: p12,
    background: "rgb(128, 177, 211)"
  }
}), React.createElement("div", {
  title: "#fdb462",
  style: {
    width: p12,
    background: "rgb(253, 180, 98)"
  }
}), React.createElement("div", {
  title: "#b3de69",
  style: {
    width: p12,
    background: "rgb(179, 222, 105)"
  }
}), React.createElement("div", {
  title: "#fccde5",
  style: {
    width: p12,
    background: "rgb(252, 205, 229)"
  }
}), React.createElement("div", {
  title: "#d9d9d9",
  style: {
    width: p12,
    background: "rgb(217, 217, 217)"
  }
}), React.createElement("div", {
  title: "#bc80bd",
  style: {
    width: p12,
    background: "rgb(188, 128, 189)"
  }
}), React.createElement("div", {
  title: "#ccebc5",
  style: {
    width: p12,
    background: "rgb(204, 235, 197)"
  }
}), React.createElement("div", {
  title: "#ffed6f",
  style: {
    width: p12,
    background: "rgb(255, 237, 111)"
  }
}));
_scheme.schemesJSX["tableau10"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#4c78a8",
  style: {
    width: p10,
    background: "rgb(76, 120, 168)"
  }
}), React.createElement("div", {
  title: "#f58518",
  style: {
    width: p10,
    background: "rgb(245, 133, 24)"
  }
}), React.createElement("div", {
  title: "#e45756",
  style: {
    width: p10,
    background: "rgb(228, 87, 86)"
  }
}), React.createElement("div", {
  title: "#72b7b2",
  style: {
    width: p10,
    background: "rgb(114, 183, 178)"
  }
}), React.createElement("div", {
  title: "#54a24b",
  style: {
    width: p10,
    background: "rgb(84, 162, 75)"
  }
}), React.createElement("div", {
  title: "#eeca3b",
  style: {
    width: p10,
    background: "rgb(238, 202, 59)"
  }
}), React.createElement("div", {
  title: "#b279a2",
  style: {
    width: p10,
    background: "rgb(178, 121, 162)"
  }
}), React.createElement("div", {
  title: "#ff9da6",
  style: {
    width: p10,
    background: "rgb(255, 157, 166)"
  }
}), React.createElement("div", {
  title: "#9d755d",
  style: {
    width: p10,
    background: "rgb(157, 117, 93)"
  }
}), React.createElement("div", {
  title: "#bab0ac",
  style: {
    width: p10,
    background: "rgb(186, 176, 172)"
  }
}));
_scheme.schemesJSX["tableau20"] = React.createElement("div", {
  className: "swatch"
}, React.createElement("div", {
  title: "#4c78a8",
  style: {
    width: p20,
    background: "rgb(76, 120, 168)"
  }
}), React.createElement("div", {
  title: "#9ecae9",
  style: {
    width: p20,
    background: "rgb(158, 202, 233)"
  }
}), React.createElement("div", {
  title: "#f58518",
  style: {
    width: p20,
    background: "rgb(245, 133, 24)"
  }
}), React.createElement("div", {
  title: "#ffbf79",
  style: {
    width: p20,
    background: "rgb(255, 191, 121)"
  }
}), React.createElement("div", {
  title: "#54a24b",
  style: {
    width: p20,
    background: "rgb(84, 162, 75)"
  }
}), React.createElement("div", {
  title: "#88d27a",
  style: {
    width: p20,
    background: "rgb(136, 210, 122)"
  }
}), React.createElement("div", {
  title: "#b79a20",
  style: {
    width: p20,
    background: "rgb(183, 154, 32)"
  }
}), React.createElement("div", {
  title: "#f2cf5b",
  style: {
    width: p20,
    background: "rgb(242, 207, 91)"
  }
}), React.createElement("div", {
  title: "#439894",
  style: {
    width: p20,
    background: "rgb(67, 152, 148)"
  }
}), React.createElement("div", {
  title: "#83bcb6",
  style: {
    width: p20,
    background: "rgb(131, 188, 182)"
  }
}), React.createElement("div", {
  title: "#e45756",
  style: {
    width: p20,
    background: "rgb(228, 87, 86)"
  }
}), React.createElement("div", {
  title: "#ff9d98",
  style: {
    width: p20,
    background: "rgb(255, 157, 152)"
  }
}), React.createElement("div", {
  title: "#79706e",
  style: {
    width: p20,
    background: "rgb(121, 112, 110)"
  }
}), React.createElement("div", {
  title: "#bab0ac",
  style: {
    width: p20,
    background: "rgb(186, 176, 172)"
  }
}), React.createElement("div", {
  title: "#d67195",
  style: {
    width: p20,
    background: "rgb(214, 113, 149)"
  }
}), React.createElement("div", {
  title: "#fcbfd2",
  style: {
    width: p20,
    background: "rgb(252, 191, 210)"
  }
}), React.createElement("div", {
  title: "#b279a2",
  style: {
    width: p20,
    background: "rgb(178, 121, 162)"
  }
}), React.createElement("div", {
  title: "#d6a5c9",
  style: {
    width: p20,
    background: "rgb(214, 165, 201)"
  }
}), React.createElement("div", {
  title: "#9e765f",
  style: {
    width: p20,
    background: "rgb(158, 118, 95)"
  }
}), React.createElement("div", {
  title: "#d8b5a5",
  style: {
    width: p20,
    background: "rgb(216, 181, 165)"
  }
}));

function categorical(selected) {
  return [(0, _scheme.schemeOption)(selected, "accent"), (0, _scheme.schemeOption)(selected, "category10"), (0, _scheme.schemeOption)(selected, "category20"), (0, _scheme.schemeOption)(selected, "category20b"), (0, _scheme.schemeOption)(selected, "category20c"), (0, _scheme.schemeOption)(selected, "dark2"), (0, _scheme.schemeOption)(selected, "paired"), (0, _scheme.schemeOption)(selected, "pastel1"), (0, _scheme.schemeOption)(selected, "pastel2"), (0, _scheme.schemeOption)(selected, "set1"), (0, _scheme.schemeOption)(selected, "set2"), (0, _scheme.schemeOption)(selected, "set3"), (0, _scheme.schemeOption)(selected, "tableau10"), (0, _scheme.schemeOption)(selected, "tableau20")];
}
},{"react":"ccIB","./scheme":"BSWy"}],"1wtj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diverging = diverging;

var React = _interopRequireWildcard(require("react"));

var _scheme = require("./scheme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
_scheme.schemesJSX["blueorange"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-blueorange"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(5, 48, 97)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(34, 101, 163)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(75, 148, 196)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(143, 194, 221)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(205, 227, 238)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(242, 240, 235)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(253, 221, 179)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(248, 182, 100)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(221, 132, 31)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(178, 90, 9)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(127, 59, 8)"
}))), React.createElement("rect", {
  fill: "url(#gradient-blueorange)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["brownbluegreen"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-brownbluegreen"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(84, 48, 5)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(139, 84, 15)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(188, 132, 53)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(222, 190, 123)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(242, 228, 192)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(238, 241, 234)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(195, 231, 226)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(127, 201, 191)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(57, 152, 143)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(10, 103, 95)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(0, 60, 48)"
}))), React.createElement("rect", {
  fill: "url(#gradient-brownbluegreen)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["purplegreen"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-purplegreen"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(64, 0, 75)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(115, 47, 128)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(154, 109, 170)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(193, 164, 205)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(228, 210, 230)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(239, 240, 239)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(214, 238, 209)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(162, 215, 158)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(92, 173, 101)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(33, 120, 57)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(0, 68, 27)"
}))), React.createElement("rect", {
  fill: "url(#gradient-purplegreen)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["pinkyellowgreen"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-pinkyellowgreen"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(142, 1, 82)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(192, 38, 126)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(221, 114, 173)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(240, 179, 214)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(250, 221, 237)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(245, 243, 239)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(225, 242, 202)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(182, 222, 135)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(128, 187, 71)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(79, 145, 37)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(39, 100, 25)"
}))), React.createElement("rect", {
  fill: "url(#gradient-pinkyellowgreen)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["purpleorange"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-purpleorange"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(45, 0, 75)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(85, 45, 132)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(129, 112, 172)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(176, 170, 208)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(215, 215, 233)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(243, 238, 234)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(253, 221, 179)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(248, 182, 100)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(221, 132, 31)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(178, 90, 9)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(127, 59, 8)"
}))), React.createElement("rect", {
  fill: "url(#gradient-purpleorange)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["redblue"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-redblue"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(103, 0, 31)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(172, 32, 47)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(213, 96, 80)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(241, 163, 133)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(251, 215, 196)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(242, 239, 238)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(205, 227, 238)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(143, 194, 221)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(75, 148, 196)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(34, 101, 163)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(5, 48, 97)"
}))), React.createElement("rect", {
  fill: "url(#gradient-redblue)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["redgrey"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-redgrey"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(103, 0, 31)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(172, 32, 47)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(213, 96, 80)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(241, 163, 133)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(252, 216, 197)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(250, 244, 241)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(223, 223, 223)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(184, 184, 184)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(134, 134, 134)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(78, 78, 78)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(26, 26, 26)"
}))), React.createElement("rect", {
  fill: "url(#gradient-redgrey)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["redyellowblue"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-redyellowblue"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(165, 0, 38)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(212, 50, 44)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(241, 110, 67)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(252, 172, 100)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(254, 221, 144)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(250, 248, 193)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(220, 241, 236)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(171, 214, 232)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(117, 171, 208)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(74, 116, 180)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(49, 54, 149)"
}))), React.createElement("rect", {
  fill: "url(#gradient-redyellowblue)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["redyellowgreen"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-redyellowgreen"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(165, 0, 38)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(212, 50, 44)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(241, 110, 67)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(252, 172, 99)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(254, 221, 141)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(249, 247, 174)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(215, 238, 142)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(164, 216, 110)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(100, 188, 97)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(34, 150, 79)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(0, 104, 55)"
}))), React.createElement("rect", {
  fill: "url(#gradient-redyellowgreen)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["spectral"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-spectral"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(158, 1, 66)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(209, 60, 75)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(240, 112, 74)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(252, 172, 99)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(254, 221, 141)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(251, 248, 176)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(224, 243, 161)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(169, 221, 162)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(105, 189, 169)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(66, 136, 181)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(94, 79, 162)"
}))), React.createElement("rect", {
  fill: "url(#gradient-spectral)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));

function diverging(selected) {
  return [(0, _scheme.schemeOption)(selected, "blueorange"), (0, _scheme.schemeOption)(selected, "brownbluegreen"), (0, _scheme.schemeOption)(selected, "purplegreen"), (0, _scheme.schemeOption)(selected, "pinkyellowgreen"), (0, _scheme.schemeOption)(selected, "purpleorange"), (0, _scheme.schemeOption)(selected, "redblue"), (0, _scheme.schemeOption)(selected, "redgrey"), (0, _scheme.schemeOption)(selected, "redyellowblue"), (0, _scheme.schemeOption)(selected, "redyellowgreen"), (0, _scheme.schemeOption)(selected, "spectral")];
}
},{"react":"ccIB","./scheme":"BSWy"}],"uM5k":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dual = dual;

var React = _interopRequireWildcard(require("react"));

var _sanddanceReact = require("@msrvida/sanddance-react");

var _scheme = require("./scheme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
_sanddanceReact.SandDance.colorSchemes.filter(function (cs) {
  return cs.colors.length === 2;
}).map(function (binaryScheme, i) {
  _scheme.schemesJSX[binaryScheme.scheme] = React.createElement("div", {
    className: "swatch"
  }, binaryScheme.colors.map(function (color, j) {
    return React.createElement("div", {
      key: j,
      title: color,
      style: {
        width: '50%',
        backgroundColor: color
      }
    });
  }));
});

function dual(selected) {
  return _sanddanceReact.SandDance.colorSchemes.filter(function (cs) {
    return cs.colors.length === 2;
  }).map(function (binaryScheme, i) {
    return (0, _scheme.schemeOption)(selected, binaryScheme.scheme);
  });
}
},{"react":"ccIB","@msrvida/sanddance-react":"MjKu","./scheme":"BSWy"}],"rVQa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequentialMultiHue = sequentialMultiHue;

var React = _interopRequireWildcard(require("react"));

var _scheme = require("./scheme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
_scheme.schemesJSX["viridis"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-viridis"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "#440154"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "#482475"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "#414487"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "#355f8d"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "#2a788e"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "#21918c"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "#22a884"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "#44bf70"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "#7ad151"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "#bddf26"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "#fde725"
}))), React.createElement("rect", {
  fill: "url(#gradient-viridis)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["inferno"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-inferno"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "#000004"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "#160b39"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "#420a68"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "#6a176e"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "#932667"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "#bc3754"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "#dd513a"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "#f37819"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "#fca50a"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "#f6d746"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "#fcffa4"
}))), React.createElement("rect", {
  fill: "url(#gradient-inferno)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["magma"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-magma"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "#000004"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "#140e36"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "#3b0f70"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "#641a80"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "#8c2981"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "#b73779"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "#de4968"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "#f7705c"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "#fe9f6d"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "#fecf92"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "#fcfdbf"
}))), React.createElement("rect", {
  fill: "url(#gradient-magma)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["plasma"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-plasma"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "#0d0887"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "#41049d"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "#6a00a8"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "#8f0da4"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "#b12a90"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "#cc4778"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "#e16462"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "#f2844b"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "#fca636"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "#fcce25"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "#f0f921"
}))), React.createElement("rect", {
  fill: "url(#gradient-plasma)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["bluegreen"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-bluegreen"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(247, 252, 253)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(232, 246, 249)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(213, 239, 237)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(183, 228, 218)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(143, 211, 193)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(104, 194, 163)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(73, 177, 127)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(47, 153, 89)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(21, 127, 60)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(3, 100, 41)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(0, 68, 27)"
}))), React.createElement("rect", {
  fill: "url(#gradient-bluegreen)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["bluepurple"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-bluepurple"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(247, 252, 253)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(228, 238, 245)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(204, 221, 236)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(178, 202, 225)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(156, 179, 213)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(143, 149, 198)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(140, 116, 181)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(137, 82, 165)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(133, 45, 143)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(115, 15, 113)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(77, 0, 75)"
}))), React.createElement("rect", {
  fill: "url(#gradient-bluepurple)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["greenblue"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-greenblue"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(247, 252, 240)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(229, 245, 223)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(211, 238, 206)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(189, 229, 191)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(158, 217, 187)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(123, 203, 196)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(88, 183, 205)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(57, 156, 198)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(29, 126, 183)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(11, 96, 161)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(8, 64, 129)"
}))), React.createElement("rect", {
  fill: "url(#gradient-greenblue)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["orangered"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-orangered"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 247, 236)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(254, 235, 207)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(253, 220, 175)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(253, 202, 148)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(253, 176, 122)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(250, 142, 93)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(241, 108, 73)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(224, 69, 48)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(200, 29, 19)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(167, 4, 3)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(127, 0, 0)"
}))), React.createElement("rect", {
  fill: "url(#gradient-orangered)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["purplebluegreen"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-purplebluegreen"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 247, 251)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(239, 231, 242)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(219, 216, 234)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(190, 201, 226)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(152, 185, 217)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(105, 168, 207)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(64, 150, 192)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(25, 135, 159)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(3, 120, 119)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(1, 99, 83)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(1, 70, 54)"
}))), React.createElement("rect", {
  fill: "url(#gradient-purplebluegreen)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["purpleblue"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-purpleblue"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 247, 251)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(239, 234, 244)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(219, 218, 235)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(191, 201, 226)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(155, 185, 217)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(114, 168, 207)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(67, 148, 195)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(26, 125, 182)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(6, 103, 161)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(4, 82, 129)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(2, 56, 88)"
}))), React.createElement("rect", {
  fill: "url(#gradient-purpleblue)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["purplered"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-purplered"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(247, 244, 249)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(234, 227, 240)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(220, 201, 226)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(208, 170, 210)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(208, 138, 194)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(221, 99, 174)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(227, 56, 144)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(215, 28, 108)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(183, 11, 79)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(143, 2, 58)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(103, 0, 31)"
}))), React.createElement("rect", {
  fill: "url(#gradient-purplered)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["redpurple"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-redpurple"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 247, 243)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(253, 228, 225)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(252, 207, 204)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(251, 181, 188)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(249, 147, 176)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(243, 105, 163)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(224, 62, 152)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(192, 23, 136)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(153, 3, 124)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(112, 1, 116)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(73, 0, 106)"
}))), React.createElement("rect", {
  fill: "url(#gradient-redpurple)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["yellowgreenblue"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-yellowgreenblue"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 255, 217)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(239, 249, 189)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(213, 238, 179)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(169, 221, 183)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(115, 201, 189)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(69, 180, 194)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(40, 151, 191)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(32, 115, 178)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(35, 78, 160)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(28, 49, 133)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(8, 29, 88)"
}))), React.createElement("rect", {
  fill: "url(#gradient-yellowgreenblue)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["yellowgreen"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-yellowgreen"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 255, 229)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(247, 252, 196)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(228, 244, 172)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(199, 232, 155)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(162, 216, 138)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(120, 197, 120)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(78, 175, 99)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(47, 148, 78)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(21, 121, 63)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(3, 96, 52)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(0, 69, 41)"
}))), React.createElement("rect", {
  fill: "url(#gradient-yellowgreen)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["yelloworangebrown"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-yelloworangebrown"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 255, 229)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(255, 248, 196)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(254, 234, 161)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(254, 214, 118)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(254, 186, 74)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(251, 153, 44)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(238, 121, 24)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(216, 91, 10)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(183, 67, 4)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(143, 50, 4)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(102, 37, 6)"
}))), React.createElement("rect", {
  fill: "url(#gradient-yelloworangebrown)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["yelloworangered"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-yelloworangered"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 255, 204)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(255, 240, 169)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(254, 224, 135)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(254, 201, 101)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(254, 171, 75)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(253, 137, 60)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(250, 92, 46)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(236, 48, 35)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(211, 17, 33)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(175, 2, 37)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(128, 0, 38)"
}))), React.createElement("rect", {
  fill: "url(#gradient-yelloworangered)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));

function sequentialMultiHue(selected) {
  return [(0, _scheme.schemeOption)(selected, "viridis"), (0, _scheme.schemeOption)(selected, "inferno"), (0, _scheme.schemeOption)(selected, "magma"), (0, _scheme.schemeOption)(selected, "plasma"), (0, _scheme.schemeOption)(selected, "bluegreen"), (0, _scheme.schemeOption)(selected, "bluepurple"), (0, _scheme.schemeOption)(selected, "greenblue"), (0, _scheme.schemeOption)(selected, "orangered"), (0, _scheme.schemeOption)(selected, "purplebluegreen"), (0, _scheme.schemeOption)(selected, "purpleblue"), (0, _scheme.schemeOption)(selected, "purplered"), (0, _scheme.schemeOption)(selected, "redpurple"), (0, _scheme.schemeOption)(selected, "yellowgreenblue"), (0, _scheme.schemeOption)(selected, "yellowgreen"), (0, _scheme.schemeOption)(selected, "yelloworangebrown"), (0, _scheme.schemeOption)(selected, "yelloworangered")];
}
},{"react":"ccIB","./scheme":"BSWy"}],"Prvn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequentialSingleHue = sequentialSingleHue;

var React = _interopRequireWildcard(require("react"));

var _scheme = require("./scheme");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
_scheme.schemesJSX["blues"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-blues"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(247, 251, 255)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(227, 238, 249)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(207, 225, 242)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(181, 212, 233)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(147, 195, 223)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(109, 174, 213)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(75, 151, 201)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(47, 126, 188)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(24, 100, 170)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(10, 74, 144)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(8, 48, 107)"
}))), React.createElement("rect", {
  fill: "url(#gradient-blues)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["greens"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-greens"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(247, 252, 245)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(232, 246, 227)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(211, 238, 205)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(183, 226, 177)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(151, 212, 148)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(115, 195, 120)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(77, 175, 98)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(47, 152, 79)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(21, 127, 59)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(3, 100, 41)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(0, 68, 27)"
}))), React.createElement("rect", {
  fill: "url(#gradient-greens)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["greys"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-greys"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 255, 255)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(242, 242, 242)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(226, 226, 226)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(206, 206, 206)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(180, 180, 180)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(151, 151, 151)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(122, 122, 122)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(95, 95, 95)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(64, 64, 64)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(30, 30, 30)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(0, 0, 0)"
}))), React.createElement("rect", {
  fill: "url(#gradient-greys)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["purples"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-purples"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(252, 251, 253)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(241, 239, 246)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(226, 225, 239)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(206, 206, 229)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(182, 181, 216)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(158, 155, 201)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(135, 130, 188)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(115, 99, 172)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(97, 64, 155)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(80, 31, 140)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(63, 0, 125)"
}))), React.createElement("rect", {
  fill: "url(#gradient-purples)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["reds"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-reds"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 245, 240)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(254, 227, 214)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(253, 201, 180)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(252, 170, 142)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(252, 138, 107)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(249, 105, 76)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(239, 69, 51)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(217, 39, 35)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(187, 21, 26)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(151, 11, 19)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(103, 0, 13)"
}))), React.createElement("rect", {
  fill: "url(#gradient-reds)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));
_scheme.schemesJSX["oranges"] = React.createElement("svg", {
  viewBox: "0,0,1,1",
  preserveAspectRatio: "none"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: "gradient-oranges"
}, React.createElement("stop", {
  offset: "0%",
  stopColor: "rgb(255, 245, 235)"
}), React.createElement("stop", {
  offset: "10%",
  stopColor: "rgb(254, 232, 211)"
}), React.createElement("stop", {
  offset: "20%",
  stopColor: "rgb(253, 216, 179)"
}), React.createElement("stop", {
  offset: "30%",
  stopColor: "rgb(253, 194, 140)"
}), React.createElement("stop", {
  offset: "40%",
  stopColor: "rgb(253, 167, 98)"
}), React.createElement("stop", {
  offset: "50%",
  stopColor: "rgb(251, 141, 61)"
}), React.createElement("stop", {
  offset: "60%",
  stopColor: "rgb(242, 112, 29)"
}), React.createElement("stop", {
  offset: "70%",
  stopColor: "rgb(226, 86, 9)"
}), React.createElement("stop", {
  offset: "80%",
  stopColor: "rgb(196, 65, 3)"
}), React.createElement("stop", {
  offset: "90%",
  stopColor: "rgb(159, 51, 3)"
}), React.createElement("stop", {
  offset: "100%",
  stopColor: "rgb(127, 39, 4)"
}))), React.createElement("rect", {
  fill: "url(#gradient-oranges)",
  x: "0",
  y: "0",
  width: "1",
  height: "1"
}));

function sequentialSingleHue(selected) {
  return [(0, _scheme.schemeOption)(selected, "blues"), (0, _scheme.schemeOption)(selected, "greens"), (0, _scheme.schemeOption)(selected, "greys"), (0, _scheme.schemeOption)(selected, "purples"), (0, _scheme.schemeOption)(selected, "reds"), (0, _scheme.schemeOption)(selected, "oranges")];
}
},{"react":"ccIB","./scheme":"BSWy"}],"otJp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Palette = Palette;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _categorical = require("./categorical");

var _diverging = require("./diverging");

var _dropdown = require("../controls/dropdown");

var _dual = require("./dual");

var _scheme = require("./scheme");

var _sequentialMultiHue = require("./sequentialMultiHue");

var _sequentialSingleHue = require("./sequentialSingleHue");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var maxDistinctColors = 20;

function Palette(props) {
  if (!props.colorColumn) return null;
  var distinctValueCount = props.colorColumn.stats.distinctValueCount;
  var isDual = distinctValueCount === 2;
  var categoricalNumeric = distinctValueCount > 0 && distinctValueCount < maxDistinctColors;
  var isQualitative = false;
  var isQuantitative = false;

  switch (props.colorColumn.type) {
    case "boolean":
    case "string":
      isQualitative = true;
      break;

    case "number":
      isQuantitative = true;
      break;

    case "date":
    case "integer":
      isQuantitative = true;
      isQualitative = categoricalNumeric;
  }

  var selected = props.scheme;
  var options = [];

  function menu(name, opts) {
    options.push({
      key: name,
      text: name,
      itemType: _base.base.fabric.DropdownMenuItemType.Header
    });
    options.push.apply(options, opts);
  }

  isQualitative && menu(_language.strings.schemeCategorical, (0, _categorical.categorical)(selected));
  isQuantitative && menu(_language.strings.schemeSequentialSingleHue, (0, _sequentialSingleHue.sequentialSingleHue)(selected));
  isQuantitative && menu(_language.strings.schemeSequentialMultiHue, (0, _sequentialMultiHue.sequentialMultiHue)(selected));
  isQuantitative && menu(_language.strings.schemeDiverging, (0, _diverging.diverging)(selected));
  isDual && menu(_language.strings.schemeDual, (0, _dual.dual)(selected));
  return React.createElement("div", {
    className: "sanddance-palette"
  }, React.createElement("div", {
    className: "sanddance-explanation"
  }, "Field ", React.createElement("span", {
    className: "fieldname"
  }, props.colorColumn.name), " is of type ", React.createElement("span", {
    className: "fieldtype"
  }, props.colorColumn.type), categoricalNumeric && " and has ".concat(distinctValueCount, " distinct values"), "."), React.createElement(_dropdown.Dropdown, {
    collapseLabel: true,
    dropdownWidth: 400,
    label: _language.strings.labelColorScheme,
    onRenderOption: function onRenderOption(option) {
      if (option.itemType === _base.base.fabric.DropdownMenuItemType.Header) {
        return React.createElement("span", null, option.text);
      } else {
        return React.createElement("div", {
          className: "sanddance-scheme option"
        }, React.createElement("span", {
          className: "name"
        }, option.scheme), option.children);
      }
    },
    options: options,
    onChange: function onChange(e, o) {
      props.changeColorScheme(o.scheme);
    }
  }), React.createElement("div", {
    className: "sanddance-scheme"
  }, props.scheme && _scheme.schemesJSX[props.scheme]));
}
},{"react":"ccIB","../base":"Vlbn","./categorical":"JrIT","./diverging":"1wtj","../controls/dropdown":"Uyrp","./dual":"uM5k","./scheme":"BSWy","./sequentialMultiHue":"rVQa","./sequentialSingleHue":"Prvn","../language":"hk5u"}],"N8IJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = Color;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _columnMap = require("../controls/columnMap");

var _palettes = require("../palettes");

var _signal = require("../controls/signal");

var _language = require("../language");

var _group = require("../controls/group");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Color(props) {
  var colorColumn = props.dataContent.columns.filter(function (c) {
    return c.name === props.colorColumn;
  })[0];
  var disabledColorBin = !colorColumn || !colorColumn.quantitative;
  var colorBin = props.colorBin || 'quantize';
  return React.createElement("div", {
    className: "sanddance-color-dialog"
  }, React.createElement(_group.Group, {
    label: _language.strings.labelColor
  }, React.createElement(_columnMap.ColumnMap, Object.assign({}, props, {
    selectedColumnName: props.colorColumn,
    specRole: props.specCapabilities && props.specCapabilities.roles.filter(function (r) {
      return r.role === 'color';
    })[0],
    key: 0
  })), React.createElement(_palettes.Palette, {
    scheme: props.scheme,
    colorColumn: colorColumn,
    changeColorScheme: function changeColorScheme(scheme) {
      props.changeColorScheme(scheme);
    },
    dataContent: props.dataContent
  }), React.createElement(_signal.Signal, {
    disabled: props.disabled,
    signal: props.colorReverseSignal,
    explorer: props.explorer,
    onChange: props.onColorReverseChange
  })), React.createElement(_group.Group, {
    label: _language.strings.labelColorBin
  }, React.createElement("div", {
    className: "sanddance-explanation"
  }, _language.strings.labelColorBinExplanation), React.createElement(_base.base.fabric.ChoiceGroup, {
    options: [{
      key: "continuous",
      text: _language.strings.labelColorBinNone,
      checked: colorBin === 'continuous',
      disabled: disabledColorBin
    }, {
      key: "quantize",
      text: _language.strings.labelColorBinQuantize,
      checked: colorBin === 'quantize',
      disabled: disabledColorBin
    }, {
      key: "quantile",
      text: _language.strings.labelColorBinQuantile,
      checked: colorBin === 'quantile',
      disabled: disabledColorBin
    }],
    onChange: function onChange(e, o) {
      props.changeColorBin(o.key);
    }
  }), React.createElement(_signal.Signal, {
    disabled: props.disabled || disabledColorBin || props.colorBin === 'continuous',
    signal: props.colorBinSignal,
    explorer: props.explorer,
    onChange: props.onColorBinCountChange
  })));
}
},{"react":"ccIB","../base":"Vlbn","../controls/columnMap":"DSho","../palettes":"otJp","../controls/signal":"OWDI","../language":"hk5u","../controls/group":"4Q3h"}],"f19h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDataArray = exports.loadDataFile = void 0;

var _sanddanceReact = require("@msrvida/sanddance-react");

var loadDataFile = function loadDataFile(dataFile) {
  return new Promise(function (resolve, reject) {
    var vega = _sanddanceReact.SandDance.VegaDeckGl.base.vega;
    var loader = vega.loader();

    function handleRawText(text) {
      var data = vega.read(text, {
        type: dataFile.type,
        parse: "auto"
      });
      loadDataArray(data).then(resolve).catch(reject);
    }

    ;

    if (dataFile.dataUrl) {
      loader.load(dataFile.dataUrl).then(handleRawText).catch(reject);
    } else if (dataFile.rawText) {
      handleRawText(dataFile.rawText);
    } else {
      reject('dataFile object must have either dataUrl or rawText property set.');
    }
  });
};

exports.loadDataFile = loadDataFile;

var loadDataArray = function loadDataArray(data) {
  return new Promise(function (resolve, reject) {
    var columns = _sanddanceReact.SandDance.util.getColumnsFromData(data);

    resolve([{
      data: data,
      columns: columns
    }, getInsightColumns(columns)]);
  });
};

exports.loadDataArray = loadDataArray;

function getInsightColumns(columnArray) {
  var scheme;
  var colorColumn = columnArray[3];

  if (colorColumn) {
    scheme = colorColumn.quantitative ? 'redyellowgreen' : 'category20';
  }

  var columns = {
    uid: columnArray[0] && columnArray[0].name,
    x: columnArray[1] && columnArray[1].name,
    y: columnArray[2] && columnArray[2].name,
    color: colorColumn && colorColumn.name,
    z: columnArray[4] && columnArray[4].name
  };
  var numericColumn = columnArray.filter(function (c) {
    return c.quantitative;
  })[0];

  if (numericColumn) {
    columns.size = numericColumn.name;
  }

  return {
    scheme: scheme,
    columns: columns
  };
}
},{"@msrvida/sanddance-react":"MjKu"}],"tb7d":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initPrefs = initPrefs;
exports.saveSignalValuePref = saveSignalValuePref;
exports.copyPrefToNewState = copyPrefToNewState;
exports.savePref = savePref;

var _sanddanceReact = require("@msrvida/sanddance-react");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function initPrefs(prefs, partialInsight) {
  if (partialInsight) {
    var specTypePrefs = prefs[partialInsight.chart] || {};
    prefs[partialInsight.chart] = specTypePrefs;

    for (var _role in partialInsight.columns) {
      var role = _role;

      if (role === 'color' || role === 'x') {
        (function () {
          var rolePrefs = specTypePrefs[role] || {};
          specTypePrefs[role] = rolePrefs;
          var column = partialInsight.columns[role];

          var copySignalValue = function copySignalValue(signalName) {
            if (partialInsight.signalValues && partialInsight.signalValues[signalName] && rolePrefs[column]) {
              var signalValues = rolePrefs[column].signalValues || {};
              signalValues[signalName] = partialInsight.signalValues[signalName];
              rolePrefs[column].signalValues = signalValues;
            }
          };

          switch (role) {
            case 'color':
              rolePrefs[column] = {
                scheme: partialInsight.scheme,
                colorBin: partialInsight.colorBin
              };
              copySignalValue(_sanddanceReact.SandDance.constants.SignalNames.ColorBinCount);
              break;

            case 'x':
              copySignalValue(_sanddanceReact.SandDance.constants.SignalNames.XBins);
              break;
          }
        })();
      }
    }
  }
}

function saveSignalValuePref(prefs, chart, role, column, signalName, signalValue) {
  var partialInsight = savePref(prefs, chart, role, column, {
    signalValues: {}
  });
  partialInsight.signalValues[signalName] = signalValue;
}

function copyPrefToNewState(prefs, chart, role, columnName) {
  var specTypePrefs = _sanddanceReact.SandDance.VegaDeckGl.util.deepMerge({}, prefs['*'], prefs[chart]);

  var rolePrefs = _sanddanceReact.SandDance.VegaDeckGl.util.deepMerge({}, specTypePrefs['*'], specTypePrefs[role]);

  var partialInsight = _sanddanceReact.SandDance.VegaDeckGl.util.deepMerge({}, rolePrefs['*'], rolePrefs[columnName]);

  return partialInsight;
}

function savePref(prefs, chart, role, column, partialInsight) {
  var SpecTypePrefs = prefs[chart] || {};
  prefs[chart] = SpecTypePrefs;
  var rolePrefs = SpecTypePrefs[role] || {};
  SpecTypePrefs[role] = rolePrefs;
  rolePrefs[column] = _sanddanceReact.SandDance.VegaDeckGl.util.deepMerge({}, rolePrefs[column], partialInsight);
  return rolePrefs[column];
}
},{"@msrvida/sanddance-react":"MjKu"}],"Gai8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataItem = DataItem;

var React = _interopRequireWildcard(require("react"));

var _sanddanceReact = require("@msrvida/sanddance-react");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function isNumber(value) {
  if (typeof value === "number") return true;
  if (!isNaN(value)) return true;
  return false;
}

function isBoolean(value) {
  if (typeof value === "boolean") return true;

  if (typeof value === "string") {
    switch (value.toLowerCase()) {
      case true + '':
      case false + '':
        return true;
    }
  }

  return false;
}

function bingSearchLink(column, value) {
  if (isNumber(value)) return null;
  if (isBoolean(value)) return null;
  if (column && column.stats.distinctValueCount === 2) return null;
  return React.createElement("div", {
    className: "bing-search"
  }, React.createElement("a", {
    href: "https://www.bing.com/search?q=".concat(encodeURIComponent(value)),
    target: "_blank"
  }, _language.strings.bingsearch));
}

function displayValue(value) {
  switch (value) {
    case '':
      return React.createElement("i", null, "blank");

    case null:
      return React.createElement("i", null, "null");

    default:
      return value;
  }
}

function DataItem(props) {
  if (!props.item) {
    return null;
  }

  var nameValuePairs = [];

  var _loop = function _loop(columnName) {
    switch (columnName) {
      case _sanddanceReact.SandDance.constants.FieldNames.Active:
      case _sanddanceReact.SandDance.constants.FieldNames.Collapsed:
      case _sanddanceReact.SandDance.constants.FieldNames.Selected:
        return "continue";

      default:
        if (columnName === _sanddanceReact.SandDance.VegaDeckGl.constants.GL_ORDINAL && !props.showSystemFields) {
          return "continue";
        }

        var nameValuePair = {
          columnName: columnName,
          value: props.item[columnName]
        };
        nameValuePair.bingSearch = bingSearchLink(props.columns.filter(function (c) {
          return c.name === columnName;
        })[0], props.item[columnName]);
        nameValuePairs.push(nameValuePair);
    }
  };

  for (var columnName in props.item) {
    var _ret = _loop(columnName);

    if (_ret === "continue") continue;
  }

  return React.createElement("div", {
    className: "sanddance-dataItem"
  }, nameValuePairs.map(function (nameValuePair, i) {
    var ex = {
      key: 0,
      name: nameValuePair.columnName,
      operator: '==',
      value: nameValuePair.value
    };

    var searchClick = function searchClick(e) {
      var search = {
        key: 0,
        expressions: [ex]
      };
      props.onSearch(e, [search]);
    };

    var title = _language.strings.tooltipSearch(nameValuePair.columnName, nameValuePair.value);

    return React.createElement("div", {
      key: i,
      onClick: !props.disabled ? searchClick : null,
      title: title,
      className: "name-value"
    }, React.createElement("div", {
      className: "column-name"
    }, nameValuePair.columnName), React.createElement("div", {
      className: "column-value"
    }, displayValue(nameValuePair.value)), nameValuePair.bingSearch);
  }));
}
},{"react":"ccIB","@msrvida/sanddance-react":"MjKu","../language":"hk5u"}],"8pJL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataBrowser = DataBrowser;

var React = _interopRequireWildcard(require("react"));

var _dataItem = require("../controls/dataItem");

var _group = require("../controls/group");

var _iconButton = require("../controls/iconButton");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function DataBrowser(props) {
  function activateRecord(newIndex) {
    props.onActivate(props.data[newIndex], newIndex);
  }

  var index = props.index;
  var length = props.data && props.data.length || 0;
  return React.createElement(_group.Group, {
    label: props.title,
    className: "sanddance-dataIndex"
  }, !props.data && React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.nullMessage
    }
  }), props.data && !props.data.length && React.createElement("div", null, props.zeroMessage), !!length && React.createElement("div", null, React.createElement("div", {
    className: "index"
  }, React.createElement(_iconButton.IconButton, {
    themePalette: props.themePalette,
    iconName: "ChevronLeftMed",
    onClick: function onClick(e) {
      return activateRecord(index <= 0 ? length - 1 : index - 1);
    },
    disabled: props.disabled || length === 1,
    title: _language.strings.buttonPrevDataItem
  }), React.createElement("span", null, _language.strings.record(index + 1, length)), React.createElement(_iconButton.IconButton, {
    themePalette: props.themePalette,
    iconName: "ChevronRightMed",
    onClick: function onClick(e) {
      return activateRecord(index >= length - 1 ? 0 : index + 1);
    },
    disabled: props.disabled || length === 1,
    title: _language.strings.buttonNextDataItem
  })), !props.itemVisible && React.createElement("div", {
    className: "item-filtered"
  }, _language.strings.labelDataItemIsFiltered), React.createElement(_dataItem.DataItem, {
    columns: props.columns,
    item: props.data[index],
    disabled: props.disabled,
    onSearch: props.onSearch
  })));
}
},{"react":"ccIB","../controls/dataItem":"Gai8","../controls/group":"4Q3h","../controls/iconButton":"5dQN","../language":"hk5u"}],"eqtW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Button(props) {
  return React.createElement(_base.base.fabric.DefaultButton, Object.assign({}, props, {
    styles: {
      root: {
        backgroundColor: "transparent",
        height: "30px",
        width: props.width,
        padding: 0
      },
      rootDisabled: {
        backgroundColor: "transparent"
      },
      icon: {
        color: props.themePalette.themePrimary
      },
      label: {
        fontWeight: "400",
        textAlign: props.textAlign || "left"
      }
    },
    iconProps: {
      iconName: props.iconName
    }
  }));
}
},{"react":"ccIB","../base":"Vlbn"}],"fiGR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function _default(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity

  var i,
      coefficient = x.slice(0, i); // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).

  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}
},{}],"G46r":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _formatDecimal = _interopRequireDefault(require("./formatDecimal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(x) {
  return x = (0, _formatDecimal.default)(Math.abs(x)), x ? x[1] : NaN;
}
},{"./formatDecimal":"fiGR"}],"CupU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(grouping, thousands) {
  return function (value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}
},{}],"mUgz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
}
},{}],"Nf4q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
},{}],"s/ik":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function _default(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;

      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;

      default:
        if (i0 > 0) {
          if (!+s[i]) break out;
          i0 = 0;
        }

        break;
    }
  }

  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
},{}],"WMxc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.prefixExponent = void 0;

var _formatDecimal = _interopRequireDefault(require("./formatDecimal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixExponent;
exports.prefixExponent = prefixExponent;

function _default(x, p) {
  var d = (0, _formatDecimal.default)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (exports.prefixExponent = prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, _formatDecimal.default)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}
},{"./formatDecimal":"fiGR"}],"gMFS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _formatDecimal = _interopRequireDefault(require("./formatDecimal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(x, p) {
  var d = (0, _formatDecimal.default)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}
},{"./formatDecimal":"fiGR"}],"w40g":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatPrefixAuto = _interopRequireDefault(require("./formatPrefixAuto"));

var _formatRounded = _interopRequireDefault(require("./formatRounded"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  "%": function (x, p) {
    return (x * 100).toFixed(p);
  },
  "b": function (x) {
    return Math.round(x).toString(2);
  },
  "c": function (x) {
    return x + "";
  },
  "d": function (x) {
    return Math.round(x).toString(10);
  },
  "e": function (x, p) {
    return x.toExponential(p);
  },
  "f": function (x, p) {
    return x.toFixed(p);
  },
  "g": function (x, p) {
    return x.toPrecision(p);
  },
  "o": function (x) {
    return Math.round(x).toString(8);
  },
  "p": function (x, p) {
    return (0, _formatRounded.default)(x * 100, p);
  },
  "r": _formatRounded.default,
  "s": _formatPrefixAuto.default,
  "X": function (x) {
    return Math.round(x).toString(16).toUpperCase();
  },
  "x": function (x) {
    return Math.round(x).toString(16);
  }
};
exports.default = _default;
},{"./formatPrefixAuto":"WMxc","./formatRounded":"gMFS"}],"7Ecm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(x) {
  return x;
}
},{}],"Iakc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _exponent = _interopRequireDefault(require("./exponent"));

var _formatGroup = _interopRequireDefault(require("./formatGroup"));

var _formatNumerals = _interopRequireDefault(require("./formatNumerals"));

var _formatSpecifier = _interopRequireDefault(require("./formatSpecifier"));

var _formatTrim = _interopRequireDefault(require("./formatTrim"));

var _formatTypes = _interopRequireDefault(require("./formatTypes"));

var _formatPrefixAuto = require("./formatPrefixAuto");

var _identity = _interopRequireDefault(require("./identity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function _default(locale) {
  var group = locale.grouping && locale.thousands ? (0, _formatGroup.default)(locale.grouping, locale.thousands) : _identity.default,
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? (0, _formatNumerals.default)(locale.numerals) : _identity.default,
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = (0, _formatSpecifier.default)(specifier);
    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type; // The "n" type is an alias for ",g".

    if (type === "n") comma = true, type = "g"; // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes.default[type]) precision == null && (precision = 12), trim = true, type = "g"; // If zero fill is specified, padding goes after sign and before digits.

    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "="; // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.

    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : ""; // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?

    var formatType = _formatTypes.default[type],
        maybeSuffix = /[defgprs%]/.test(type); // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].

    precision = precision == null ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i,
          n,
          c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value; // Perform the initial formatting.

        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision); // Trim insignificant zeros.

        if (trim) value = (0, _formatTrim.default)(value); // If a negative value rounds to zero during formatting, treat as positive.

        if (valueNegative && +value === 0) valueNegative = false; // Compute the prefix and suffix.

        valuePrefix = (valueNegative ? sign === "(" ? sign : "-" : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto.prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : ""); // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.

        if (maybeSuffix) {
          i = -1, n = value.length;

          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      } // If the fill character is not "0", grouping is applied before padding.


      if (comma && !zero) value = group(value, Infinity); // Compute the padding.

      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : ""; // If the fill character is "0", grouping is applied after padding.

      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = ""; // Reconstruct the final output based on the desired alignment.

      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;

        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;

        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;

        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = (0, _formatSpecifier.default)(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor((0, _exponent.default)(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}
},{"./exponent":"G46r","./formatGroup":"CupU","./formatNumerals":"mUgz","./formatSpecifier":"Nf4q","./formatTrim":"s/ik","./formatTypes":"w40g","./formatPrefixAuto":"WMxc","./identity":"7Ecm"}],"00VI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultLocale;
exports.formatPrefix = exports.format = void 0;

var _locale = _interopRequireDefault(require("./locale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale;
var format;
exports.format = format;
var formatPrefix;
exports.formatPrefix = formatPrefix;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = (0, _locale.default)(definition);
  exports.format = format = locale.format;
  exports.formatPrefix = formatPrefix = locale.formatPrefix;
  return locale;
}
},{"./locale":"Iakc"}],"cTEw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _exponent = _interopRequireDefault(require("./exponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(step) {
  return Math.max(0, -(0, _exponent.default)(Math.abs(step)));
}
},{"./exponent":"G46r"}],"aFxy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _exponent = _interopRequireDefault(require("./exponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, _exponent.default)(value) / 3))) * 3 - (0, _exponent.default)(Math.abs(step)));
}
},{"./exponent":"G46r"}],"we+8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _exponent = _interopRequireDefault(require("./exponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, (0, _exponent.default)(max) - (0, _exponent.default)(step)) + 1;
}
},{"./exponent":"G46r"}],"SA6z":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "formatDefaultLocale", {
  enumerable: true,
  get: function () {
    return _defaultLocale.default;
  }
});
Object.defineProperty(exports, "format", {
  enumerable: true,
  get: function () {
    return _defaultLocale.format;
  }
});
Object.defineProperty(exports, "formatPrefix", {
  enumerable: true,
  get: function () {
    return _defaultLocale.formatPrefix;
  }
});
Object.defineProperty(exports, "formatLocale", {
  enumerable: true,
  get: function () {
    return _locale.default;
  }
});
Object.defineProperty(exports, "formatSpecifier", {
  enumerable: true,
  get: function () {
    return _formatSpecifier.default;
  }
});
Object.defineProperty(exports, "precisionFixed", {
  enumerable: true,
  get: function () {
    return _precisionFixed.default;
  }
});
Object.defineProperty(exports, "precisionPrefix", {
  enumerable: true,
  get: function () {
    return _precisionPrefix.default;
  }
});
Object.defineProperty(exports, "precisionRound", {
  enumerable: true,
  get: function () {
    return _precisionRound.default;
  }
});

var _defaultLocale = _interopRequireWildcard(require("./defaultLocale"));

var _locale = _interopRequireDefault(require("./locale"));

var _formatSpecifier = _interopRequireDefault(require("./formatSpecifier"));

var _precisionFixed = _interopRequireDefault(require("./precisionFixed"));

var _precisionPrefix = _interopRequireDefault(require("./precisionPrefix"));

var _precisionRound = _interopRequireDefault(require("./precisionRound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
},{"./defaultLocale":"00VI","./locale":"Iakc","./formatSpecifier":"Nf4q","./precisionFixed":"cTEw","./precisionPrefix":"aFxy","./precisionRound":"we+8"}],"Os+N":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataScope = DataScope;
exports.DataScopeId = void 0;

var React = _interopRequireWildcard(require("react"));

var _button = require("./button");

var _d3Format = require("d3-format");

var _language = require("../language");

var _sanddanceReact = require("@msrvida/sanddance-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var DataScopeId;
exports.DataScopeId = DataScopeId;

(function (DataScopeId) {
  DataScopeId[DataScopeId["AllData"] = 0] = "AllData";
  DataScopeId[DataScopeId["SelectedData"] = 1] = "SelectedData";
  DataScopeId[DataScopeId["FilteredData"] = 2] = "FilteredData";
})(DataScopeId || (exports.DataScopeId = DataScopeId = {}));

var shortFormat = (0, _d3Format.format)(".2~s");

function short(n) {
  return n === -1 ? '--' : n ? shortFormat(n) : "0";
}

function DataScope(props) {
  var dataCount = Object.assign({
    all: -1,
    filtered: -1,
    selected: -1
  }, props.dataCount);
  return props.compact ? React.createElement("div", {
    className: _sanddanceReact.util.classList("sanddance-datascope", "compact"),
    onClick: props.onCompactClick
  }, React.createElement(Compact, Object.assign({}, props, {
    dataScopeId: DataScopeId.AllData,
    text: _language.strings.selectDataSpanAll,
    count: dataCount.all
  })), React.createElement(Compact, Object.assign({}, props, {
    dataScopeId: DataScopeId.FilteredData,
    text: _language.strings.selectDataSpanFilter,
    count: dataCount.filtered
  })), React.createElement(Compact, Object.assign({}, props, {
    dataScopeId: DataScopeId.SelectedData,
    text: _language.strings.selectDataSpanSelection,
    count: dataCount.selected
  }))) : React.createElement("div", {
    className: _sanddanceReact.util.classList("sanddance-datascope", "extended", props.active && "active")
  }, React.createElement("div", null, React.createElement("div", null, props.dataSet), React.createElement("div", {
    className: "datascope-buttons"
  }, React.createElement(DataScopeButton, Object.assign({}, props, {
    dataScopeId: DataScopeId.AllData,
    text: _language.strings.selectDataSpanAll,
    count: dataCount.all
  })), React.createElement(DataScopeButton, Object.assign({}, props, {
    dataScopeId: DataScopeId.FilteredData,
    text: _language.strings.selectDataSpanFilter,
    count: dataCount.filtered
  })), React.createElement(DataScopeButton, Object.assign({}, props, {
    dataScopeId: DataScopeId.SelectedData,
    text: _language.strings.selectDataSpanSelection,
    count: dataCount.selected
  })))));
}

function Compact(props) {
  return React.createElement("div", {
    title: props.text,
    onClick: function onClick() {
      props.onDataScopeClick(props.dataScopeId);
    }
  }, short(props.count));
}

function DataScopeButton(props) {
  return React.createElement(_button.Button, {
    themePalette: props.themePalette,
    className: _sanddanceReact.util.classList("datascope-button", props.selectedDataScope === props.dataScopeId && "selected"),
    disabled: props.disabled,
    text: props.text,
    onClick: function onClick() {
      props.onDataScopeClick(props.dataScopeId);
    },
    onRenderText: function onRenderText() {
      return React.createElement("div", {
        title: props.count > 0 ? props.count.toString() : ''
      }, React.createElement("label", null, props.text), React.createElement("div", null, short(props.count)));
    },
    onRenderIcon: function onRenderIcon() {
      return null;
    }
  });
}
},{"react":"ccIB","./button":"eqtW","d3-format":"SA6z","../language":"hk5u","@msrvida/sanddance-react":"MjKu"}],"cFWm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = Dialog;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Dialog(props) {
  return React.createElement(_base.base.fabric.Dialog, Object.assign({}, props, {
    dialogContentProps: {
      type: _base.base.fabric.DialogType.normal,
      title: props.title
    }
  }), props.children, React.createElement(_base.base.fabric.DialogFooter, null, props.buttons, React.createElement(_base.base.fabric.DefaultButton, {
    onClick: props.onDismiss,
    text: _language.strings.buttonClose
  })));
}
},{"react":"ccIB","../base":"Vlbn","../language":"hk5u"}],"7xB+":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidOperators = getValidOperators;
exports.SearchTerm = SearchTerm;
exports.maxAutocomplete = void 0;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _dropdown = require("./dropdown");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var maxAutocomplete = 100;
exports.maxAutocomplete = maxAutocomplete;

function getValidOperators(column) {
  var type = column && column.type;

  switch (type) {
    case "boolean":
      return [['==', _language.strings.searchEQ], ['!=', _language.strings.searchNEQ], ['isnullorEmpty', _language.strings.searchNULL]];

    case "date":
    case "integer":
    case "number":
      return [['==', _language.strings.searchEQ], ['!=', _language.strings.searchNEQ], ['>', _language.strings.searchGT], ['>=', _language.strings.searchGTE], ['<', _language.strings.searchLT], ['<=', _language.strings.searchLTE], ['isnullorEmpty', _language.strings.searchNULL]];

    case "string":
    default:
      return [['==', _language.strings.searchEQ], ['!=', _language.strings.searchNEQ], ['>', _language.strings.searchGT], ['>=', _language.strings.searchGTE], ['<', _language.strings.searchLT], ['<=', _language.strings.searchLTE], ['contains', _language.strings.searchIN], ['starts', _language.strings.searchSW], ['isnullorEmpty', _language.strings.searchNULL]];
  }
}

function getExpressionClauses(currClause, index) {
  var keys = [['&&', _language.strings.searchAND], ['||', _language.strings.searchOR]];
  return keys.map(function (key, i) {
    var _key = _slicedToArray(key, 2),
        clause = _key[0],
        text = _key[1];

    var selected = currClause == clause; //deliberate double equal 

    var option = {
      key: i,
      text: text,
      data: clause,
      selected: selected
    };
    return option;
  });
}

function getOperators(ex, column) {
  var anySelected = false;
  var validOperators = getValidOperators(column);
  var options = validOperators.map(function (validoperator) {
    var _validoperator = _slicedToArray(validoperator, 2),
        op = _validoperator[0],
        text = _validoperator[1];

    var selected = ex.operator === op;
    anySelected = anySelected || selected;
    var option = {
      key: op,
      text: text,
      data: op,
      selected: selected
    };
    return option;
  });

  if (!anySelected) {
    options[0].selected = true;
  }

  return options;
}

function getDistinctValues(data, columnName) {
  var distinctMap = {};

  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var value = row[columnName];
    distinctMap[value] = true;
  }

  return Object.keys(distinctMap).sort();
}

function getValues(ex, column, data, autoCompleteDistinctValues) {
  var stats = column && column.stats;

  if (stats && stats.distinctValueCount < maxAutocomplete) {
    if (!autoCompleteDistinctValues[column.name]) {
      autoCompleteDistinctValues[column.name] = getDistinctValues(data, column.name);
    }

    return autoCompleteDistinctValues[column.name].map(function (v, i) {
      return {
        key: i,
        text: v
      };
    });
  }

  return [];
}

function getText(ex) {
  if (ex.operator === 'isnullorEmpty') return '';
  return typeof ex.value === 'string' ? ex.value : ex.value.toString();
}

function SearchTerm(props) {
  var ex = props.searchExpression;
  var possibleValues = getValues(ex, props.column, props.data, props.autoCompleteDistinctValues); //TODO better date handling with calendar picker

  return React.createElement("div", null, props.index > 0 && React.createElement(_dropdown.Dropdown, {
    className: "search-field",
    //label={strings.labelSearchClause}
    dropdownWidth: 120,
    disabled: !ex.unlocked,
    options: getExpressionClauses(ex.clause, props.index),
    onChange: function onChange(e, o) {
      return props.onUpdateExpression({
        clause: o.data
      }, props.index);
    }
  }), React.createElement(_dropdown.Dropdown, {
    className: "search-field",
    //label={strings.labelSearchColumn}
    options: [{
      key: '',
      text: _language.strings.selectAny,
      data: null,
      selected: ex.name === null
    }].concat(props.columns.map(function (c, i) {
      return {
        key: c.name,
        text: c.name,
        data: c,
        selected: c.name === ex.name
      };
    })),
    onChange: function onChange(e, o) {
      return props.onUpdateExpression({
        name: o.data && o.data.name || null
      }, props.index);
    }
  }), React.createElement(_dropdown.Dropdown, {
    className: "search-field",
    //label={strings.labelSearchOperator}
    dropdownWidth: 120,
    options: getOperators(ex, props.column),
    onChange: function onChange(e, o) {
      return props.onUpdateExpression({
        operator: o.data
      }, props.index);
    }
  }), possibleValues.length > 0 && React.createElement(_base.base.fabric.ComboBox, {
    className: "search-field",
    //label={strings.labelSearchValue}
    disabled: ex.operator === 'isnullorEmpty',
    dropdownWidth: _dropdown.dropdownWidth,
    allowFreeform: true,
    autoComplete: "on",
    errorMessage: ex.errorMessage,
    text: getText(ex),
    options: getValues(ex, props.column, props.data, props.autoCompleteDistinctValues),
    onChange: function onChange(e, o, i, value) {
      if (o) {
        value = o.text;
      }

      props.onUpdateExpression({
        value: value
      }, props.index);
    }
  }), possibleValues.length === 0 && React.createElement(_base.base.fabric.TextField, {
    className: "search-field",
    //label={strings.labelSearchValue}
    disabled: ex.operator === 'isnullorEmpty',
    errorMessage: ex.errorMessage,
    value: getText(ex),
    onChange: function onChange(e, v) {
      return props.onUpdateExpression({
        value: v
      }, props.index);
    }
  }));
}
},{"react":"ccIB","../base":"Vlbn","./dropdown":"Uyrp","../language":"hk5u"}],"ozxe":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;

var React = _interopRequireWildcard(require("react"));

var _searchTerm = require("../controls/searchTerm");

var _base = require("../base");

var _button = require("../controls/button");

var _dropdown = require("../controls/dropdown");

var _group = require("../controls/group");

var _sanddanceReact = require("@msrvida/sanddance-react");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var maxClauses = 5;

function getColumnWithName(columnName, columns) {
  for (var i = 0; i < columns.length; i++) {
    if (columns[i].name === columnName) return columns[i];
  }
}

function validateExpression(ex) {
  if (ex.operator === 'isnullorEmpty') {
    ex.errorMessage = null;
    return;
  }

  var s = typeof ex.value === 'string' ? ex.value : ex.value.toString();

  if (s.length === 0) {
    ex.errorMessage = _language.strings.labelRequired;
  } else {
    ex.errorMessage = null;
  }
}

function clearExpressionValidation(ex) {
  if (ex.operator === 'isnullorEmpty') {
    ex.errorMessage = null;
    return;
  }

  var s = typeof ex.value === 'string' ? ex.value : ex.value.toString();

  if (s.length !== 0) {
    ex.errorMessage = null;
  }
}

function getGroupClauses(currClause, index) {
  var keys;

  if (index === 0) {
    keys = [[null, _language.strings.searchWHERE]];
  } else {
    keys = [['&&', _language.strings.searchAND], ['||', _language.strings.searchOR]];
  }

  return keys.map(function (key, i) {
    var _key = _slicedToArray(key, 2),
        clause = _key[0],
        text = _key[1];

    var selected = currClause == clause; //deliberate double equal 

    var option = {
      key: i,
      text: text,
      data: clause,
      selected: selected
    };
    return option;
  });
}

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    _this.state = _this.getInitialState(_this.props);
    return _this;
  }

  _createClass(Search, [{
    key: "getInitialState",
    value: function getInitialState(props) {
      var initialState = {
        groups: props.initializer.search || [this.newGroup(0, null)],
        sortedColumns: _toConsumableArray(props.initializer.columns).sort(function (a, b) {
          return a.name.localeCompare(b.name);
        }),
        initializer: props.initializer
      };
      initialState.groups.forEach(function (group) {
        group.expressions.forEach(function (ex) {
          return ex.unlocked = group.expressions.length <= 2;
        });
      });
      return initialState;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!_sanddanceReact.util.deepCompare(this.props.initializer, this.state.initializer)) {
        this.setState(this.getInitialState(this.props));
      }
    }
  }, {
    key: "validateAndSearch",
    value: function validateAndSearch() {
      var _this2 = this;

      var groups = _toConsumableArray(this.state.groups);

      groups.forEach(function (group) {
        group.expressions.forEach(validateExpression);
        var errors = group.expressions.reduce(function (p, c) {
          return p || c.errorMessage;
        }, '');

        if (errors) {
          _this2.setState({
            groups: groups
          });
        } else {
          _this2.props.onSelect(_this2.state.groups);
        }
      });
    }
  }, {
    key: "newGroup",
    value: function newGroup(key, clause) {
      var group = {
        key: key,
        clause: clause,
        expressions: [this.newExpression(0, null)]
      };
      return group;
    }
  }, {
    key: "updateGroup",
    value: function updateGroup(partialGroup, groupIndex) {
      var groups = _toConsumableArray(this.state.groups);

      var group = Object.assign({}, groups[groupIndex], partialGroup);
      groups[groupIndex] = group;
      this.setState({
        groups: groups
      });
    }
  }, {
    key: "addGroup",
    value: function addGroup() {
      var groups = _toConsumableArray(this.state.groups);

      var maxKey = groups.reduce(function (max, p) {
        return p.key > max ? p.key : max;
      }, groups[0].key);
      var newGroup = this.newGroup(maxKey + 1, '&&');
      groups.push(newGroup);
      this.setState({
        groups: groups
      });
    }
  }, {
    key: "deleteGroup",
    value: function deleteGroup(groupIndex) {
      var groups = _toConsumableArray(this.state.groups);

      groups.splice(groupIndex, 1);
      this.setState({
        groups: groups
      });
    }
  }, {
    key: "newExpression",
    value: function newExpression(key, clause) {
      var ex = {
        key: key,
        clause: clause,
        name: null,
        operator: 'contains',
        value: ''
      };
      return ex;
    }
  }, {
    key: "addExpression",
    value: function addExpression(groupIndex) {
      var groups = _toConsumableArray(this.state.groups);

      var group = groups[groupIndex];
      var maxKey = group.expressions.reduce(function (max, p) {
        return p.key > max ? p.key : max;
      }, group.expressions[0].key);
      var newEx = this.newExpression(maxKey + 1, '&&');
      group.expressions.push(newEx);

      if (group.expressions.length === 2) {
        newEx.unlocked = true;
      } else {
        group.expressions.forEach(function (ex) {
          return ex.unlocked = false;
        });
        newEx.clause = group.expressions[1].clause;
      }

      this.setState({
        groups: groups
      });
    }
  }, {
    key: "updateExpression",
    value: function updateExpression(partialEx, groupIndex, index) {
      var groups = _toConsumableArray(this.state.groups);

      var group = groups[groupIndex];

      var ex = _sanddanceReact.SandDance.VegaDeckGl.util.clone(group.expressions[index]);

      if (ex.name !== partialEx.name) {
        //choose an appropriate operator when switching data type
        var oldColumn = getColumnWithName(ex.name, this.state.sortedColumns);
        var newColumn = getColumnWithName(partialEx.name, this.state.sortedColumns);
        var oldType = oldColumn && oldColumn.type;
        var newType = newColumn && newColumn.type;

        if (oldType !== newType) {
          var newOperators = (0, _searchTerm.getValidOperators)(newColumn).map(function (validOperator) {
            return validOperator[0];
          }); //see if old operator is compatible

          if (newOperators.indexOf(ex.operator) < 0) {
            //not compatible, so choose "equal"
            partialEx.operator = '==';
          }
        }
      }

      Object.assign(ex, partialEx);
      clearExpressionValidation(ex);
      group.expressions[index] = ex;
      this.setState({
        groups: groups
      });
    }
  }, {
    key: "deleteExpression",
    value: function deleteExpression(groupIndex, index) {
      var groups = _toConsumableArray(this.state.groups);

      var group = groups[groupIndex];

      var expressions = _toConsumableArray(group.expressions);

      expressions.splice(index, 1);

      if (expressions.length === 2) {
        expressions[1].unlocked = true;
      }

      group.expressions = expressions;
      this.setState({
        groups: groups
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(_group.Group, {
        className: "sanddance-search",
        label: _language.strings.labelSearch
      }, React.createElement("div", null, this.state.groups.map(function (group, groupIndex) {
        return React.createElement("div", {
          className: "sanddance-search-group",
          key: group.key
        }, React.createElement(_dropdown.Dropdown, {
          className: "search-group-clause",
          //label={strings.labelSearchClause}
          disabled: groupIndex === 0,
          dropdownWidth: 120,
          options: getGroupClauses(group.clause, groupIndex),
          onChange: function onChange(e, o) {
            return _this3.updateGroup({
              clause: o.data
            }, groupIndex);
          }
        }), React.createElement("div", null, group.expressions.map(function (ex, i) {
          return React.createElement("div", {
            className: "sanddance-search-expression",
            key: ex.key
          }, React.createElement(_searchTerm.SearchTerm, {
            onUpdateExpression: function onUpdateExpression(ex, i) {
              return _this3.updateExpression(ex, groupIndex, i);
            },
            autoCompleteDistinctValues: _this3.props.autoCompleteDistinctValues,
            index: i,
            columns: _this3.state.sortedColumns,
            data: _this3.props.data,
            searchExpression: ex,
            column: getColumnWithName(ex.name, _this3.state.sortedColumns)
          }), group.expressions.length > 1 && React.createElement(_button.Button, {
            themePalette: _this3.props.themePalette,
            className: "search-action",
            iconName: "Cancel",
            onClick: function onClick() {
              return _this3.deleteExpression(groupIndex, i);
            },
            text: _language.strings.buttonDeleteExpression
          }));
        })), group.expressions.length < maxClauses && React.createElement("div", null, React.createElement(_button.Button, {
          themePalette: _this3.props.themePalette,
          className: "search-action",
          iconName: "Add",
          onClick: function onClick() {
            return _this3.addExpression(groupIndex);
          },
          text: _language.strings.buttonAddExpression
        })), _this3.state.groups.length > 1 && React.createElement(_button.Button, {
          themePalette: _this3.props.themePalette,
          className: "search-action",
          iconName: "Cancel",
          onClick: function onClick() {
            return _this3.deleteGroup(groupIndex);
          },
          text: _language.strings.buttonDeleteExpressionGroup
        }));
      }), this.state.groups.length < maxClauses && React.createElement("div", null, React.createElement(_button.Button, {
        themePalette: this.props.themePalette,
        className: "search-action search-bottom-action",
        iconName: "Add",
        onClick: function onClick() {
          return _this3.addGroup();
        },
        text: _language.strings.buttonAddExpressionGroup
      }))), React.createElement(_base.base.fabric.PrimaryButton, {
        className: "search-action search-bottom-action",
        text: _language.strings.buttonSelect,
        onClick: function onClick() {
          return _this3.validateAndSearch();
        }
      }));
    }
  }]);

  return Search;
}(React.Component);

exports.Search = Search;
},{"react":"ccIB","../controls/searchTerm":"7xB+","../base":"Vlbn","../controls/button":"eqtW","../controls/dropdown":"Uyrp","../controls/group":"4Q3h","@msrvida/sanddance-react":"MjKu","../language":"hk5u"}],"zKGJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settings = void 0;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _dialog = require("../controls/dialog");

var _dropdown = require("../controls/dropdown");

var _group = require("../controls/group");

var _sanddanceReact = require("@msrvida/sanddance-react");

var _signal = require("../controls/signal");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DataRefType;

(function (DataRefType) {
  DataRefType[DataRefType["none"] = 0] = "none";
  DataRefType[DataRefType["inline"] = 1] = "inline";
  DataRefType[DataRefType["url"] = 2] = "url";
})(DataRefType || (DataRefType = {}));

function filterSignals(signal) {
  switch (signal.name) {
    case _sanddanceReact.SandDance.constants.SignalNames.XBins:
    case _sanddanceReact.SandDance.constants.SignalNames.YBins:
    case _sanddanceReact.SandDance.constants.SignalNames.ColorBinCount:
    case _sanddanceReact.SandDance.constants.SignalNames.ColorReverse:
    case _sanddanceReact.SandDance.constants.SignalNames.PointSize:
    case _sanddanceReact.SandDance.constants.SignalNames.TreeMapMethod:
      return false;

    default:
      return !!signal.bind;
  }
}

function cloneData(vegaSpec) {
  var data0 = vegaSpec.data[0];
  var valuesData = data0;
  var values = valuesData.values;
  delete valuesData.values;

  var data = _sanddanceReact.SandDance.VegaDeckGl.util.clone(vegaSpec.data);

  valuesData.values = values;
  return data;
}

function cloneScales(vegaSpec) {
  return _sanddanceReact.SandDance.VegaDeckGl.util.clone(vegaSpec.scales);
}

function serializeSpec(vegaSpec, datafile, dataRefType, scheme) {
  var scales = cloneScales(vegaSpec);
  var colorScale = scales.filter(function (scale) {
    return scale.name === _sanddanceReact.SandDance.constants.ScaleNames.Color;
  })[0];

  if (scheme.indexOf('dual_') >= 0) {
    colorScale.range = _sanddanceReact.SandDance.colorSchemes.filter(function (cs) {
      return cs.scheme === scheme;
    })[0].colors;
  }

  if (dataRefType === DataRefType.inline) {
    return Object.assign({}, vegaSpec, {
      scales: scales
    });
  }

  var data = cloneData(vegaSpec);
  var data0 = data[0];

  if (dataRefType === DataRefType.none) {
    var valuesData = data0;
    valuesData.values = [];
  } else if (dataRefType === DataRefType.url) {
    var urlData = data0;
    urlData.url = datafile.dataUrl;
    urlData.format = {
      parse: 'auto',
      type: datafile.type
    };
  }

  return Object.assign({}, vegaSpec, {
    data: data,
    scales: scales
  });
}

function defaultDataRefType(datafile) {
  if (datafile.dataUrl) {
    return DataRefType.url;
  }

  return DataRefType.none;
}

function initState(props) {
  return {
    showVegaDialog: false,
    dataRefType: defaultDataRefType(props.dataFile),
    spec: null
  };
}

function signalGroupKey(key) {
  for (var i = 0; i < _language.strings.signalGroups.length; i++) {
    if (_language.strings.signalGroups[i].prefix === key) {
      return key;
    }
  }

  return '*';
}

function vegaSignalGroups(vegaSignals) {
  var signalGroupMap = {};
  vegaSignals.forEach(function (vs) {
    var split = vs.name.split('_');
    var key = signalGroupKey(split[0]);
    signalGroupMap[key] = signalGroupMap[key] || [];
    signalGroupMap[key].push(vs);
  });
  return signalGroupMap;
}

var Settings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings(props) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, props));
    _this.state = initState(props);
    return _this;
  }

  _createClass(Settings, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      if (!props.explorer.viewer || !props.explorer.viewer.vegaSpec) return null;
      var options = [{
        key: DataRefType.none,
        text: _language.strings.selectVegaSpecDataNone,
        selected: this.state.dataRefType === DataRefType.none,
        data: DataRefType.none
      }, !props.dataFile.rawText && {
        key: DataRefType.url,
        text: _language.strings.selectVegaSpecDataUrl,
        selected: this.state.dataRefType === DataRefType.url,
        data: DataRefType.url
      }, {
        key: DataRefType.inline,
        text: _language.strings.selectVegaSpecDataInline,
        selected: this.state.dataRefType === DataRefType.inline,
        data: DataRefType.inline
      }].filter(Boolean);
      var signalGroupMap = vegaSignalGroups(props.explorer.viewer.vegaSpec.signals);
      return React.createElement("div", null, _language.strings.signalGroups.map(function (sg) {
        var vegaSignals = signalGroupMap[sg.prefix];

        if (vegaSignals) {
          var filteredVegaSignals = vegaSignals.filter(filterSignals);

          if (filteredVegaSignals.length > 0) {
            return React.createElement(_group.Group, {
              key: sg.prefix,
              label: sg.label
            }, filteredVegaSignals.map(function (signal, i) {
              return React.createElement(_signal.Signal, {
                key: i,
                signal: signal,
                explorer: props.explorer
              });
            }));
          }
        }
      }), React.createElement(_group.Group, {
        label: _language.strings.labelChartCanvas
      }, React.createElement(_base.base.fabric.Toggle, {
        label: _language.strings.labelShowAxes,
        defaultChecked: !props.hideAxes,
        onChange: function onChange(e, checked) {
          return props.onToggleAxes(!checked);
        }
      }), React.createElement(_base.base.fabric.Toggle, {
        label: _language.strings.labelShowLegend,
        defaultChecked: !props.hideLegend,
        onChange: function onChange(e, checked) {
          return props.onToggleLegend(!checked);
        }
      })), React.createElement(_group.Group, {
        label: _language.strings.labelTools
      }, React.createElement(_base.base.fabric.DefaultButton, {
        text: _language.strings.buttonShowVegaSpec,
        onClick: function onClick() {
          return _this2.setState({
            showVegaDialog: true,
            spec: serializeSpec(props.explorer.viewer.vegaSpec, props.dataFile, _this2.state.dataRefType, _this2.props.scheme)
          });
        }
      })), React.createElement(_group.Group, {
        label: _language.strings.labelTransitionDurations
      }, React.createElement(_base.base.fabric.Slider, {
        label: _language.strings.labelTransitionColor,
        onChange: function onChange(value) {
          _this2.props.explorer.viewerOptions.transitionDurations.color = value;
        },
        min: 0,
        max: 10000,
        defaultValue: this.props.explorer.viewerOptions.transitionDurations.color
      }), React.createElement(_base.base.fabric.Slider, {
        label: _language.strings.labelTransitionPosition,
        onChange: function onChange(value) {
          _this2.props.explorer.viewerOptions.transitionDurations.position = value;
        },
        min: 0,
        max: 10000,
        defaultValue: this.props.explorer.viewerOptions.transitionDurations.position
      }), React.createElement(_base.base.fabric.Slider, {
        label: _language.strings.labelTransitionSize,
        onChange: function onChange(value) {
          _this2.props.explorer.viewerOptions.transitionDurations.size = value;
        },
        min: 0,
        max: 10000,
        defaultValue: this.props.explorer.viewerOptions.transitionDurations.size
      }), React.createElement(_base.base.fabric.Slider, {
        label: _language.strings.labelTransitionCamera,
        onChange: function onChange(value) {
          _this2.props.explorer.viewerOptions.transitionDurations.view = value;
        },
        min: 0,
        max: 10000,
        defaultValue: this.props.explorer.viewerOptions.transitionDurations.view
      })), React.createElement(_dialog.Dialog, {
        hidden: !state.showVegaDialog,
        onDismiss: function onDismiss() {
          return _this2.setState(initState(_this2.props));
        },
        minWidth: "80%",
        title: _language.strings.labelVegaSpec,
        buttons: [React.createElement(_base.base.fabric.PrimaryButton, {
          key: "copy",
          iconProps: {
            iconName: 'Copy'
          },
          text: _language.strings.buttonCopyToClipboard,
          onClick: function onClick() {
            var pre = document.getElementById("sanddance-vega-spec");
            var range = document.createRange();
            range.selectNode(pre);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
          }
        }), React.createElement(_base.base.fabric.DefaultButton, {
          key: "edit",
          iconProps: {
            iconName: 'OpenInNewWindow'
          },
          text: _language.strings.buttonLaunchVegaEditor,
          onClick: function onClick() {
            window.open('https://vega.github.io/editor/', '_blank');
          }
        })]
      }, React.createElement(_dropdown.Dropdown, {
        label: _language.strings.labelVegaSpecData,
        options: options,
        onChange: function onChange(e, o) {
          return _this2.setState({
            dataRefType: o.data,
            spec: serializeSpec(props.explorer.viewer.vegaSpec, props.dataFile, o.data, _this2.props.scheme)
          });
        }
      }), React.createElement("pre", {
        id: "sanddance-vega-spec"
      }, JSON.stringify(this.state.spec, null, 2)), React.createElement("div", null, _language.strings.labelVegaSpecNotes)));
    }
  }]);

  return Settings;
}(React.Component);

exports.Settings = Settings;
},{"react":"ccIB","../base":"Vlbn","../controls/dialog":"cFWm","../controls/dropdown":"Uyrp","../controls/group":"4Q3h","@msrvida/sanddance-react":"MjKu","../controls/signal":"OWDI","../language":"hk5u"}],"GuKX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollable = Scrollable;

var React = _interopRequireWildcard(require("react"));

var _sanddanceReact = require("@msrvida/sanddance-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Scrollable(props) {
  return React.createElement("div", {
    className: _sanddanceReact.util.classList("scrollable-container", props.className)
  }, React.createElement("div", {
    className: "scrollable"
  }, props.children));
}
},{"react":"ccIB","@msrvida/sanddance-react":"MjKu"}],"f8Jx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = Sidebar;
exports.Sidebutton = Sidebutton;
exports.SideTabId = void 0;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _dataScope = require("./dataScope");

var _iconButton = require("./iconButton");

var _scrollable = require("./scrollable");

var _language = require("../language");

var _sanddanceReact = require("@msrvida/sanddance-react");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var SideTabId;
exports.SideTabId = SideTabId;

(function (SideTabId) {
  SideTabId[SideTabId["ChartType"] = 0] = "ChartType";
  SideTabId[SideTabId["Data"] = 1] = "Data";
  SideTabId[SideTabId["Search"] = 2] = "Search";
  SideTabId[SideTabId["Color"] = 3] = "Color";
  SideTabId[SideTabId["Snapshots"] = 4] = "Snapshots";
  SideTabId[SideTabId["Settings"] = 5] = "Settings";
  SideTabId[SideTabId["Pin"] = 6] = "Pin";
  SideTabId[SideTabId["Collapse"] = 7] = "Collapse";
})(SideTabId || (exports.SideTabId = SideTabId = {}));

function Sidebar(props) {
  var sidebuttons = [{
    sideTabId: SideTabId.ChartType,
    iconName: "BIDashboard",
    title: _language.strings.labelChart
  }, {
    sideTabId: SideTabId.Color,
    iconName: "Color",
    title: _language.strings.labelColor
  }, {
    sideTabId: SideTabId.Data,
    iconName: "Table",
    title: _language.strings.labelDataBrowser
  }, {
    sideTabId: SideTabId.Search,
    iconName: "Search",
    title: _language.strings.labelSearch
  }, {
    sideTabId: SideTabId.Snapshots,
    iconName: "Camera",
    title: _language.strings.labelSnapshots
  }, {
    sideTabId: SideTabId.Settings,
    iconName: "Settings",
    title: _language.strings.labelChartSettings
  }];
  return React.createElement("div", {
    className: _sanddanceReact.util.classList("sanddance-sidebar", "calculator", props.pinned && "pinned", props.closed && "closed")
  }, React.createElement(_dataScope.DataScope, Object.assign({}, props.dataScopeProps)), React.createElement("div", {
    className: "vbuttons"
  }, React.createElement("div", {
    className: "sidebar-dialogs"
  }, sidebuttons.map(function (sidebutton, i) {
    return React.createElement(Sidebutton, Object.assign({
      key: i
    }, props, sidebutton, {
      themePalette: props.themePalette
    }));
  })), !props.hideSidebarControls && React.createElement("div", {
    className: "sidebar-controls"
  }, React.createElement(Sidebutton, Object.assign({}, props, {
    sideTabId: SideTabId.Pin,
    iconName: props.pinned ? "Pinned" : "Pin",
    title: props.pinned ? _language.strings.buttonToolbarFloat : _language.strings.buttonToolbarDock
  })), React.createElement(Sidebutton, Object.assign({}, props, {
    sideTabId: SideTabId.Collapse,
    iconName: props.closed ? "DoubleChevronRight12" : "DoubleChevronLeft12",
    title: props.closed ? _language.strings.buttonToolbarShow : _language.strings.buttonToolbarHide
  })))), React.createElement(_scrollable.Scrollable, null, React.createElement("div", {
    className: "sidetab"
  }, props.children)), props.calculating && React.createElement("div", {
    className: "calculating"
  }, React.createElement(_base.base.fabric.Spinner, {
    size: _base.base.fabric.SpinnerSize.large
  })));
}

function Sidebutton(props) {
  return React.createElement("div", {
    className: _sanddanceReact.util.classList("vbutton", !props.closed && props.selectedSideTab === props.sideTabId && "selected")
  }, props.badgeText && React.createElement("div", {
    className: "count"
  }, props.badgeText), React.createElement(_iconButton.IconButton, {
    themePalette: props.themePalette,
    className: "vbutton",
    iconName: props.iconName,
    title: props.title,
    onClick: function onClick() {
      props.onSideTabClick(props.sideTabId);
    }
  }));
}
},{"react":"ccIB","../base":"Vlbn","./dataScope":"Os+N","./iconButton":"5dQN","./scrollable":"GuKX","../language":"hk5u","@msrvida/sanddance-react":"MjKu"}],"3oc9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snapshots = void 0;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _dialog = require("../controls/dialog");

var _group = require("../controls/group");

var _iconButton = require("../controls/iconButton");

var _sanddanceReact = require("@msrvida/sanddance-react");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var thumbWidth = 300;

var Snapshots =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Snapshots, _React$Component);

  function Snapshots(props) {
    var _this;

    _classCallCheck(this, Snapshots);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snapshots).call(this, props));
    _this.state = {
      formHidden: true,
      description: '',
      image: null,
      bgColor: null,
      insight: null
    };
    return _this;
  }

  _createClass(Snapshots, [{
    key: "saveSnapshot",
    value: function saveSnapshot() {
      var snapshot = {
        description: this.state.description,
        insight: this.state.insight,
        image: this.state.image,
        bgColor: this.state.bgColor
      };
      this.props.modifySnapShot && this.props.modifySnapShot(snapshot);
      this.props.onCreateSnapshot(snapshot);
      this.setState({
        formHidden: true,
        description: ''
      });
    }
  }, {
    key: "resize",
    value: function resize(src) {
      var _this2 = this;

      if (!src) return;
      var img = new Image();

      img.onload = function () {
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        var ratio = img.width / thumbWidth;
        canvas.height = img.height / ratio;
        canvas.width = thumbWidth;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var image = canvas.toDataURL();

        _this2.setState({
          image: image
        });
      };

      img.src = src;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(_group.Group, {
        className: "sanddance-snapshots",
        label: _language.strings.labelSnapshots
      }, React.createElement(_base.base.fabric.PrimaryButton, {
        text: _language.strings.buttonCreateSnapshot,
        onClick: function onClick(e) {
          var canvas = _this3.props.explorer.viewer.presenter.getElement(_sanddanceReact.SandDance.VegaDeckGl.PresenterElement.gl).getElementsByTagName('canvas')[0];

          _this3.resize(canvas && canvas.toDataURL("image/png"));

          var bgColor = canvas && window.getComputedStyle(canvas).backgroundColor;

          var insight = _this3.props.explorer.viewer.getInsight();

          var description = _this3.props.getDescription && _this3.props.getDescription(insight) || '';

          _this3.setState({
            formHidden: false,
            bgColor: bgColor,
            description: description,
            insight: insight
          });
        }
      }), React.createElement(_dialog.Dialog, {
        minWidth: "".concat(thumbWidth + 64, "px"),
        hidden: this.state.formHidden,
        onDismiss: function onDismiss() {
          return _this3.setState({
            formHidden: true
          });
        },
        title: _language.strings.buttonCreateSnapshot,
        buttons: [React.createElement(_base.base.fabric.PrimaryButton, {
          key: 0,
          onClick: function onClick(e) {
            return _this3.saveSnapshot();
          },
          text: _language.strings.buttonCreateSnapshot
        })]
      }, React.createElement(_base.base.fabric.TextField, {
        label: _language.strings.labelSnapshotDescription,
        onKeyUp: function onKeyUp(e) {
          return e.keyCode === 13 && _this3.saveSnapshot();
        },
        onChange: function onChange(e, description) {
          return _this3.setState({
            description: description
          });
        },
        value: this.state.description
      }), React.createElement("img", {
        src: this.state.image,
        style: {
          backgroundColor: this.state.bgColor,
          width: "".concat(thumbWidth, "px")
        }
      }), this.props.explorer.viewer.colorContexts.length > 1 && React.createElement("div", null, _language.strings.labelColorFilter)), React.createElement("div", null, this.props.snapshots.map(function (snapshot, i) {
        var actions = _this3.props.getActions && _this3.props.getActions(snapshot, i) || [];
        actions.push({
          iconButtonProps: {
            themePalette: _this3.props.themePalette,
            title: _language.strings.buttonDeleteSnapshot,
            onClick: function onClick(e) {
              return _this3.props.onRemoveSnapshot(i);
            },
            iconName: "Delete"
          }
        });
        return React.createElement("div", {
          key: i,
          className: "snapshot"
        }, React.createElement("div", {
          onClick: function onClick(e) {
            return _this3.props.onSnapshotClick(snapshot);
          }
        }, React.createElement("div", {
          className: "title"
        }, snapshot.description), React.createElement("img", {
          src: snapshot.image,
          style: {
            backgroundColor: snapshot.bgColor
          }
        })), React.createElement(Actions, {
          actions: actions,
          snapshot: snapshot
        }));
      })));
    }
  }]);

  return Snapshots;
}(React.Component);

exports.Snapshots = Snapshots;

function Actions(props) {
  return React.createElement("div", {
    className: "actions"
  }, props.actions.map(function (action, i) {
    if (action.iconButtonProps) {
      return React.createElement(_iconButton.IconButton, Object.assign({
        key: i
      }, action.iconButtonProps));
    }

    if (action.element) {
      return action.element;
    }
  }));
}
},{"react":"ccIB","../base":"Vlbn","../controls/dialog":"cFWm","../controls/group":"4Q3h","../controls/iconButton":"5dQN","@msrvida/sanddance-react":"MjKu","../language":"hk5u"}],"yzxM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSearch = toggleSearch;

var _sanddanceReact = require("@msrvida/sanddance-react");

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function comparableGroup(group) {
  return Object.assign({}, group, {
    clause: null
  });
}

function compareGroup(a, b) {
  return _sanddanceReact.SandDance.searchExpression.compareGroup(comparableGroup(a), comparableGroup(b));
}

function toggleSearch(haystack, needle) {
  var groups = [];
  var found = false; //look for item in all

  haystack.forEach(function (group) {
    if (compareGroup(group, needle)) {
      //if it exists, don't add it
      found = true;
    } else {
      groups.push(group);
    }
  });
  return {
    groups: groups,
    found: found
  };
}
},{"@msrvida/sanddance-react":"MjKu"}],"hH4t":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandBarButtonStyles = void 0;

var _base = require("../base");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CommandBarButtonStyles = function CommandBarButtonStyles(props) {
  var theme = props.theme;

  if (!theme) {
    throw new Error('Theme is undefined or null.');
  }

  var palette = theme.palette,
      semanticColors = theme.semanticColors;
  var BUTTON_ICON_CLASSNAME = '.ms-Button-icon';
  return {
    root: [Object.assign({}, _base.base.fabric.getFocusStyle(theme, {
      inset: 2
    })), {
      backgroundColor: palette.white
    }],
    rootHovered: {
      backgroundColor: palette.neutralLighter,
      selectors: _defineProperty({}, BUTTON_ICON_CLASSNAME, {
        color: palette.themeDarkAlt
      })
    },
    rootPressed: {
      backgroundColor: palette.neutralLight,
      color: palette.neutralDark,
      selectors: _defineProperty({}, BUTTON_ICON_CLASSNAME, {
        color: palette.themeDark
      })
    },
    rootChecked: {
      backgroundColor: palette.neutralLight,
      color: palette.neutralDark,
      selectors: _defineProperty({}, BUTTON_ICON_CLASSNAME, {
        color: palette.themeDark
      })
    },
    rootCheckedHovered: {
      backgroundColor: palette.neutralQuaternaryAlt,
      color: palette.neutralDark
    },
    rootExpanded: {
      color: palette.neutralDark,
      backgroundColor: palette.neutralLight,
      selectors: _defineProperty({}, BUTTON_ICON_CLASSNAME, {
        color: palette.themeDark
      })
    },
    rootExpandedHovered: {
      background: palette.neutralQuaternaryAlt
    },
    rootDisabled: {
      backgroundColor: palette.white,
      selectors: _defineProperty({}, BUTTON_ICON_CLASSNAME, {
        color: semanticColors.disabledBodySubtext
      })
    },
    splitButtonMenuButton: {
      backgroundColor: palette.white,
      color: palette.neutralSecondary,
      selectors: {
        ':hover': {
          backgroundColor: palette.neutralLighter,
          selectors: _defineProperty({}, BUTTON_ICON_CLASSNAME, {
            color: palette.neutralPrimary
          })
        },
        ':active': {
          backgroundColor: palette.neutralLight,
          selectors: _defineProperty({}, BUTTON_ICON_CLASSNAME, {
            color: palette.neutralPrimary
          })
        }
      }
    },
    splitButtonMenuButtonDisabled: {
      backgroundColor: palette.white
    },
    icon: {
      color: palette.themePrimary
    }
  };
};

exports.CommandBarButtonStyles = CommandBarButtonStyles;
},{"../base":"Vlbn"}],"GBuN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = Logo;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var s = "\n ......\n.......\n...\n......\n ......\n    ...\n.......\n......\n";
var d = s.split('\n').map(function (row, irow) {
  return row.length ? row.split('').map(function (char, icol) {
    return char.trim() ? "M".concat(2 * icol + 1, " ").concat(2 * (irow - 1) + 1, " v1 h1 v-1 Z") : '';
  }).join(' ') : '';
}).join('\n');

function Logo() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, React.createElement("path", {
    d: d
  }));
}
},{"react":"ccIB"}],"Afi9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Topbar = Topbar;

var React = _interopRequireWildcard(require("react"));

var _base = require("../base");

var _CommandBarButton = require("./CommandBarButton.styles");

var _logo = require("./logo");

var _sanddanceReact = require("@msrvida/sanddance-react");

var _language = require("../language");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
function Topbar(props) {
  var zeroResults = props.selectionState.selectedData && props.selectionState.selectedData.length === 0;
  var disabled = !props.loaded;
  var items = [{
    key: 'deselect',
    name: _language.strings.buttonDeselect,
    iconProps: {
      iconName: 'Cancel'
    },
    disabled: disabled || !props.selectionSearch,
    onClick: props.doDeselect
  }, {
    key: 'isolate',
    name: _language.strings.buttonIsolate,
    iconProps: {
      iconName: "Filter"
    },
    disabled: disabled || !props.selectionSearch || zeroResults,
    onClick: function onClick() {
      return props.doFilter(props.selectionSearch);
    }
  }, {
    key: 'exclude',
    name: _language.strings.buttonExclude,
    iconProps: {
      iconName: "ClearFilter"
    },
    disabled: disabled || !props.selectionSearch || zeroResults,
    onClick: function onClick() {
      return props.doFilter(_sanddanceReact.SandDance.searchExpression.invert(props.selectionSearch));
    }
  }, {
    key: 'reset',
    name: _language.strings.buttonReset,
    iconProps: {
      iconName: "RemoveFilter"
    },
    disabled: disabled || !props.filter,
    onClick: props.doUnfilter
  }];

  if (props.buttons) {
    items.push.apply(items, props.buttons);
  }

  var farItems = [{
    key: 'view',
    iconProps: {
      iconName: props.view === '2d' ? "Product" : "Page"
    },
    title: props.view === '2d' ? _language.strings.labelViewType3d : _language.strings.lavelViewType2d,
    onClick: props.onViewClick
  }, {
    key: 'home',
    iconProps: {
      iconName: "PicturePosition"
    },
    title: _language.strings.buttonCameraHome,
    onClick: props.onHomeClick
  }];
  return React.createElement("div", {
    className: "sanddance-explorer-topbar"
  }, React.createElement("div", {
    className: "logo"
  }, React.createElement(_logo.Logo, null), React.createElement("a", {
    href: props.logoClickUrl || "/SandDance/",
    target: props.logoClickTarget || '_blank'
  }, _language.strings.appName)), React.createElement("div", {
    className: "sanddance-explorer-commandbar"
  }, React.createElement(_base.base.fabric.Customizer, {
    scopedSettings: {
      CommandBarButton: {
        styles: function styles(buttonProps) {
          buttonProps.theme.palette = props.themePalette;
          return (0, _CommandBarButton.CommandBarButtonStyles)(buttonProps);
        }
      }
    }
  }, React.createElement(_base.base.fabric.CommandBar, {
    items: items,
    farItems: farItems,
    styles: {
      root: {
        backgroundColor: "transparent",
        height: "unset",
        paddingLeft: 0,
        paddingRight: 0
      }
    }
  }))));
}
},{"react":"ccIB","../base":"Vlbn","./CommandBarButton.styles":"hH4t","./logo":"GBuN","@msrvida/sanddance-react":"MjKu","../language":"hk5u"}],"KeW6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Explorer = void 0;

var React = _interopRequireWildcard(require("react"));

var _colorMap = require("./colorMap");

var _base = require("./base");

var _colorScheme = require("./colorScheme");

var _chart = require("./dialogs/chart");

var _color = require("./dialogs/color");

var _dataLoader = require("./dataLoader");

var _partialInsight = require("./partialInsight");

var _dataBrowser = require("./dialogs/dataBrowser");

var _dataScope = require("./controls/dataScope");

var _dialog = require("./controls/dialog");

var _search = require("./dialogs/search");

var _sanddanceReact = require("@msrvida/sanddance-react");

var _settings = require("./dialogs/settings");

var _sidebar = require("./controls/sidebar");

var _snapshots = require("./dialogs/snapshots");

var _language = require("./language");

var _themes = require("./themes");

var _toggleSearch = require("./toggleSearch");

var _topbar = require("./controls/topbar");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var dataBrowserTitles = {};
dataBrowserTitles[_dataScope.DataScopeId.AllData] = _language.strings.selectDataSpanAll;
dataBrowserTitles[_dataScope.DataScopeId.FilteredData] = _language.strings.selectDataSpanFilter;
dataBrowserTitles[_dataScope.DataScopeId.SelectedData] = _language.strings.selectDataSpanSelection;
var dataBrowserZeroMessages = {};
dataBrowserZeroMessages[_dataScope.DataScopeId.AllData] = _language.strings.labelZeroAll;
dataBrowserZeroMessages[_dataScope.DataScopeId.FilteredData] = null; //empty array is not used

dataBrowserZeroMessages[_dataScope.DataScopeId.SelectedData] = _language.strings.labelZeroSearchResults;
var dataBrowserNullMessages = {};
dataBrowserNullMessages[_dataScope.DataScopeId.AllData] = _language.strings.labelDataNullAll;
dataBrowserNullMessages[_dataScope.DataScopeId.FilteredData] = _language.strings.labelDataNullFiltered;
dataBrowserNullMessages[_dataScope.DataScopeId.SelectedData] = _language.strings.labelDataNullSelection;

function createInputSearch(search) {
  var groups = _sanddanceReact.SandDance.util.ensureSearchExpressionGroupArray(search);

  var dialogSearch = groups.map(function (group, groupIndex) {
    return Object.assign({
      key: groupIndex
    }, group, {
      expressions: group.expressions.map(function (ex, i) {
        var ex2 = Object.assign({
          key: i
        }, ex);
        return ex2;
      })
    });
  });
  return dialogSearch;
}

var Explorer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Explorer, _React$Component);

  function Explorer(props) {
    var _this;

    _classCallCheck(this, Explorer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Explorer).call(this, props));
    _this.state = {
      calculating: null,
      errors: null,
      autoCompleteDistinctValues: {},
      colorBin: null,
      dataContent: null,
      dataFile: null,
      search: null,
      facets: null,
      filter: null,
      filteredData: null,
      specCapabilities: null,
      size: {
        height: null,
        width: null
      },
      scheme: null,
      columns: null,
      chart: "grid",
      signalValues: null,
      hideAxes: false,
      hideLegend: false,
      sideTabId: _sidebar.SideTabId.ChartType,
      dataScopeId: _dataScope.DataScopeId.AllData,
      selectedItemIndex: {},
      sidebarClosed: false,
      sidebarPinned: true,
      view: props.initialView || "2d",
      snapshots: []
    };
    _this.state.selectedItemIndex[_dataScope.DataScopeId.AllData] = 0;
    _this.state.selectedItemIndex[_dataScope.DataScopeId.FilteredData] = 0;
    _this.state.selectedItemIndex[_dataScope.DataScopeId.SelectedData] = 0;
    _this.discardColorContextUpdates = true;

    _this.updateViewerOptions(Object.assign({}, _sanddanceReact.SandDance.VegaDeckGl.util.clone(_sanddanceReact.SandDance.Viewer.defaultViewerOptions), props.viewerOptions));

    return _this;
  }

  _createClass(Explorer, [{
    key: "updateViewerOptions",
    value: function updateViewerOptions(viewerOptions) {
      var _this2 = this;

      this.viewerOptions = Object.assign({}, this.viewerOptions, viewerOptions, {
        onColorContextChange: function onColorContextChange() {
          return _this2.manageColorToolbar();
        },
        onDataFilter: function onDataFilter(dataFilter, filteredData) {
          var selectedItemIndex = Object.assign({}, _this2.state.selectedItemIndex);
          selectedItemIndex[_dataScope.DataScopeId.FilteredData] = 0;

          _this2.changeInsight({
            filter: dataFilter,
            filteredData: filteredData,
            selectedItemIndex: selectedItemIndex
          });

          if (_this2.state.sideTabId === _sidebar.SideTabId.Data && _this2.state.dataScopeId === _dataScope.DataScopeId.FilteredData) {
            //make sure item is active
            setTimeout(function () {
              return _this2.silentActivation(filteredData[0]);
            }, 0);
          }

          viewerOptions && viewerOptions.onDataFilter && viewerOptions.onDataFilter(dataFilter, filteredData);
        },
        onSelectionChanged: function onSelectionChanged(newSearch, index) {
          if (_this2.ignoreSelectionChange) return;
          var selectedItemIndex = Object.assign({}, _this2.state.selectedItemIndex);
          selectedItemIndex[_dataScope.DataScopeId.SelectedData] = index || 0;
          var _this2$state = _this2.state,
              search = _this2$state.search,
              sideTabId = _this2$state.sideTabId;

          if (newSearch) {
            search = createInputSearch(newSearch); //} else {
            //sideTabId = SideTabId.ChartType;
          }

          _this2.setState({
            search: search,
            selectedItemIndex: selectedItemIndex,
            sideTabId: sideTabId
          });

          viewerOptions && viewerOptions.onSelectionChanged && viewerOptions.onSelectionChanged(newSearch);
        },
        onAxisClick: function onAxisClick(e, search) {
          _this2.toggleableSearch(e, search);

          viewerOptions && viewerOptions.onLegendRowClick && viewerOptions.onAxisClick(e, search);
        },
        onLegendRowClick: function onLegendRowClick(e, legendRow) {
          _this2.toggleableSearch(e, legendRow.search);

          viewerOptions && viewerOptions.onLegendRowClick && viewerOptions.onLegendRowClick(e, legendRow);
        },
        onError: function onError(errors) {
          _this2.setState({
            errors: errors
          });

          viewerOptions && viewerOptions.onError && viewerOptions.onError(errors);
        }
      });

      if (this.viewer && this.viewer.presenter) {
        var newPresenterStyle = _sanddanceReact.SandDance.util.getPresenterStyle(this.viewerOptions);

        var mergePrenterStyle = Object.assign({}, this.viewer.presenter.style, newPresenterStyle);
        this.viewer.presenter.style = mergePrenterStyle;
        this.viewer.options = _sanddanceReact.SandDance.VegaDeckGl.util.deepMerge(this.viewer.options, this.props.viewerOptions, this.viewerOptions);
      }
    }
  }, {
    key: "signal",
    value: function signal(signalName, signalValue) {
      switch (signalName) {
        case _sanddanceReact.SandDance.constants.SignalNames.ColorBinCount:
        case _sanddanceReact.SandDance.constants.SignalNames.ColorReverse:
          this.discardColorContextUpdates = false;
          break;
      }

      this.viewer.vegaViewGl.signal(signalName, signalValue);
      this.viewer.vegaViewGl.run();
      this.discardColorContextUpdates = true;
      this.props.onSignalChanged && this.props.onSignalChanged();
    }
  }, {
    key: "manageColorToolbar",
    value: function manageColorToolbar() {
      var _this3 = this;

      var canRemap = this.viewer.colorContexts && this.viewer.colorContexts.length > 1;
      (0, _colorMap.applyColorButtons)(this.viewer.presenter, !!this.state.columns.color, {
        themePalette: _themes.themePalettes[this.props.theme || ''],
        canRemap: canRemap,
        isRemap: canRemap && this.viewer.currentColorContext > 0,
        colorMapHandler: function colorMapHandler(remap) {
          _this3.viewer.currentColorContext = ~~remap;

          _this3.viewer.renderSameLayout();

          _this3.manageColorToolbar();
        }
      });
    }
  }, {
    key: "setInsight",
    value: function setInsight(partialInsight) {
      var selectedItemIndex = Object.assign({}, this.state.selectedItemIndex);
      selectedItemIndex[_dataScope.DataScopeId.AllData] = 0;
      selectedItemIndex[_dataScope.DataScopeId.FilteredData] = 0;
      selectedItemIndex[_dataScope.DataScopeId.SelectedData] = 0;
      var newState = Object.assign({
        chart: null,
        scheme: null,
        columns: null,
        filter: null,
        filteredData: null,
        selectedItemIndex: selectedItemIndex
      }, partialInsight);
      this.getColorContext = null;
      this.changeInsight(newState);
    }
  }, {
    key: "load",
    value: function load(data, getPartialInsight, prefs) {
      var _this4 = this;

      this.changeInsight({
        columns: null
      });
      return new Promise(function (resolve, reject) {
        var loadFinal = function loadFinal(result) {
          var _result = _slicedToArray(result, 2),
              dataContent = _result[0],
              columnsAndScheme = _result[1];

          var scheme = columnsAndScheme.scheme,
              columns = columnsAndScheme.columns;
          var partialInsight;
          _this4.prefs = prefs || {};

          if (getPartialInsight) {
            partialInsight = getPartialInsight(dataContent.columns);
            (0, _partialInsight.initPrefs)(_this4.prefs, partialInsight);
          }

          var selectedItemIndex = Object.assign({}, _this4.state.selectedItemIndex);
          var sideTabId = _sidebar.SideTabId.ChartType;
          selectedItemIndex[_dataScope.DataScopeId.AllData] = 0;
          selectedItemIndex[_dataScope.DataScopeId.FilteredData] = 0;
          selectedItemIndex[_dataScope.DataScopeId.SelectedData] = 0;
          var newState = Object.assign({
            dataFile: dataFile,
            dataContent: dataContent,
            scheme: scheme,
            columns: columns,
            autoCompleteDistinctValues: {},
            filter: null,
            filteredData: null,
            selectedItemIndex: selectedItemIndex,
            sideTabId: sideTabId
          }, partialInsight);
          _this4.getColorContext = null;

          _this4.changeInsight(newState); //make sure item is active


          _this4.activateDataBrowserItem(sideTabId, _this4.state.dataScopeId);

          resolve();
        };

        var dataFile;

        if (Array.isArray(data)) {
          return (0, _dataLoader.loadDataArray)(data).then(function (result) {
            dataFile = {
              type: "json"
            };
            loadFinal(result);
          }).catch(reject);
        } else {
          dataFile = data;
          return (0, _dataLoader.loadDataFile)(dataFile).then(loadFinal).catch(reject);
        }
      });
    }
  }, {
    key: "changeChartType",
    value: function changeChartType(chart) {
      var _this5 = this;

      var partialInsight = (0, _partialInsight.copyPrefToNewState)(this.prefs, chart, '*', '*');
      var newState = Object.assign({
        chart: chart
      }, partialInsight); //special case mappings when switching chart type

      if (this.state.chart === 'scatterplot' && chart === 'barchart') {
        newState.columns = Object.assign({}, this.state.columns, {
          sort: this.state.columns.y
        });
      } else if (chart === 'treemap') {
        newState.view = '2d';

        if (!this.state.columns.size) {
          //make sure size exists and is numeric
          var sizeColumn = this.state.dataContent.columns.filter(function (c) {
            return c.quantitative;
          })[0];

          if (!sizeColumn) {//TODO error - no numeric columns
          } else {
            newState.columns = Object.assign({}, this.state.columns, {
              size: sizeColumn.name
            });
          }
        }
      } else if (chart === 'stacks') {
        newState.view = '3d';
      }

      this.calculate(function () {
        return _this5.changeInsight(newState);
      });
    }
  }, {
    key: "calculate",
    value: function calculate(calculating) {
      this.setState({
        calculating: calculating
      });
    }
  }, {
    key: "changeView",
    value: function changeView(view) {
      this.changeInsight({
        view: view
      });
    } //state members which change the insight

  }, {
    key: "changeInsight",
    value: function changeInsight(newState) {
      if (!newState.signalValues) {
        newState.signalValues = null;
      }

      this.setState(newState);
    }
  }, {
    key: "changespecCapabilities",
    value: function changespecCapabilities(specCapabilities) {
      this.setState({
        specCapabilities: specCapabilities
      });
    }
  }, {
    key: "changeColumnMapping",
    value: function changeColumnMapping(role, column, options) {
      var _this6 = this;

      var columns = Object.assign({}, this.state.columns);

      var final = function final() {
        columns[role] = column && column.name;

        _this6.changeInsight({
          columns: columns
        });
      };

      if (column) {
        switch (role) {
          case "facet":
            (function () {
              var facetColumn = column;
              var facets;

              if (facetColumn.quantitative) {
                facets = {
                  columns: 3,
                  rows: 3
                };
              } else {
                switch (facetColumn.stats.distinctValueCount) {
                  case 2:
                    facets = {
                      columns: 2,
                      rows: 1
                    };
                    break;

                  default:
                    facets = {
                      columns: null,
                      rows: null
                    };
                    var square = 1;

                    while (square * square < facetColumn.stats.distinctValueCount) {
                      square++;
                    }

                    facets.columns = facets.rows = square;
                }
              }

              columns['facet'] = column.name;

              _this6.changeInsight({
                facets: facets,
                columns: columns
              });
            })();

            break;

          case "color":
            (function () {
              var newState = {
                scheme: options && options.scheme,
                columns: columns,
                colorBin: _this6.state.colorBin
              };

              if (!newState.scheme) {
                var partialInsight = (0, _partialInsight.copyPrefToNewState)(_this6.prefs, _this6.state.chart, 'color', column.name);
                newState = Object.assign({}, newState, partialInsight);
              }

              if (!newState.scheme) {
                newState.scheme = (0, _colorScheme.bestColorScheme)(column, null, _this6.state.scheme);
              }

              _this6.ignoreSelectionChange = true;

              _this6.viewer.deselect().then(function () {
                _this6.ignoreSelectionChange = false; //allow deselection to render

                setTimeout(function () {
                  columns['color'] = column.name;
                  _this6.getColorContext = null;

                  _this6.changeInsight(newState);
                }, 0);
              });
            })();

            break;

          case 'x':
            (function () {
              var partialInsight = (0, _partialInsight.copyPrefToNewState)(_this6.prefs, _this6.state.chart, 'x', column.name);
              var newState = Object.assign({
                columns: columns
              }, partialInsight);
              columns['x'] = column.name;

              _this6.changeInsight(newState);
            })();

            break;

          default:
            final();
            break;
        }
      } else {
        final();
      }
    }
  }, {
    key: "setSideTabId",
    value: function setSideTabId(sideTabId, dataScopeId) {
      if (sideTabId === _sidebar.SideTabId.Data && dataScopeId == null) {
        //choose most relevant DataScopeId
        dataScopeId = this.getBestDataScopeId();
      }

      if (dataScopeId == null) {
        dataScopeId = this.state.dataScopeId;
      }

      this.setState({
        sideTabId: sideTabId,
        dataScopeId: dataScopeId,
        sidebarClosed: false
      });
      this.activateDataBrowserItem(sideTabId, dataScopeId);
    }
  }, {
    key: "getBestDataScopeId",
    value: function getBestDataScopeId() {
      var dataScopeId;
      var selectionState = this.viewer && this.viewer.getSelection();

      if (selectionState && selectionState.selectedData && selectionState.selectedData.length) {
        dataScopeId = _dataScope.DataScopeId.SelectedData;
      } else if (this.state.filteredData) {
        dataScopeId = _dataScope.DataScopeId.FilteredData;
      } else {
        dataScopeId = _dataScope.DataScopeId.AllData;
      }

      return dataScopeId;
    }
  }, {
    key: "activateDataBrowserItem",
    value: function activateDataBrowserItem(sideTabId, dataScopeId) {
      if (!this.viewer) return;
      var itemToActivate;

      if (sideTabId === _sidebar.SideTabId.Data) {
        switch (dataScopeId) {
          case _dataScope.DataScopeId.AllData:
            itemToActivate = this.state.dataContent && this.state.dataContent.data[this.state.selectedItemIndex[_dataScope.DataScopeId.AllData]];
            break;

          case _dataScope.DataScopeId.FilteredData:
            itemToActivate = this.state.filteredData && this.state.filteredData[this.state.selectedItemIndex[_dataScope.DataScopeId.FilteredData]];
            break;

          case _dataScope.DataScopeId.SelectedData:
            var selection = this.viewer.getSelection() || {};
            itemToActivate = selection.selectedData && selection.selectedData[this.state.selectedItemIndex[_dataScope.DataScopeId.SelectedData]];
            break;
        }
      }

      this.silentActivation(itemToActivate);
    }
  }, {
    key: "silentActivation",
    value: function silentActivation(itemToActivate) {
      var _this7 = this;

      this.ignoreSelectionChange = true;

      var done = function done() {
        _this7.ignoreSelectionChange = false;
      };

      if (itemToActivate) {
        return this.viewer.activate(itemToActivate).then(done);
      } else {
        return this.viewer.deActivate().then(done);
      }
    }
  }, {
    key: "sidebar",
    value: function sidebar(sidebarClosed, sidebarPinned) {
      this.setState({
        sidebarClosed: sidebarClosed,
        sidebarPinned: sidebarPinned
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this8 = this;

      this.setState({
        calculating: function calculating() {
          return _this8._resize();
        }
      });
    }
  }, {
    key: "_resize",
    value: function _resize() {
      this.changeInsight({
        size: this.getLayoutDivSize(this.state.sidebarPinned, this.state.sidebarClosed)
      });
    }
  }, {
    key: "viewerMounted",
    value: function viewerMounted(glDiv) {
      var _this9 = this;

      window.addEventListener("resize", function () {
        //TODO: throttle events
        _this9.resize();
      });
      this.setState({
        size: this.getLayoutDivSize(this.state.sidebarPinned, this.state.sidebarClosed),
        signalValues: this.state.signalValues //keep initialized signalValues

      });
    }
  }, {
    key: "getLayoutDivSize",
    value: function getLayoutDivSize(pinned, closed) {
      var div = pinned && !closed ? this.layoutDivPinned : this.layoutDivUnpinned;
      return {
        height: div.offsetHeight,
        width: div.offsetWidth
      };
    }
  }, {
    key: "toggleableSearch",
    value: function toggleableSearch(e, search) {
      if (e.ctrlKey) {
        this.setState({
          search: createInputSearch(search)
        });
        this.setSideTabId(_sidebar.SideTabId.Search);
      } else {
        var oldSelection = this.viewer.getSelection();

        if (oldSelection.search) {
          //look for matching groups and toggle them
          var result = (0, _toggleSearch.toggleSearch)(_sanddanceReact.SandDance.util.ensureSearchExpressionGroupArray(oldSelection.search), search);

          if (result.found) {
            //removing a group
            if (result.groups.length === 0) {
              this.doDeselect();
            } else {
              //select with new search removed
              this.doSelect(result.groups);
            }
          } else {
            //adding a new group
            if (e.altKey || e.shiftKey) {
              if (e.shiftKey) {
                search.clause = '||';
              } else if (e.altKey) {
                search.clause = '&&';
              }

              result.groups.push(search);
              this.doSelect(result.groups);
            } else {
              //replace
              this.doSelect(search);
            }
          }
        } else {
          this.doSelect(search);
        }
      }
    }
  }, {
    key: "doFilter",
    value: function doFilter(search) {
      this.viewer.filter(search);
    }
  }, {
    key: "doUnfilter",
    value: function doUnfilter() {
      this.viewer.reset();
    }
  }, {
    key: "doSelect",
    value: function doSelect(search) {
      this.viewer.select(search);
    }
  }, {
    key: "doDeselect",
    value: function doDeselect() {
      return this.viewer.deselect();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mounted) {
        this.props.mounted(this);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var _this$state = this.state,
          colorBin = _this$state.colorBin,
          columns = _this$state.columns,
          facets = _this$state.facets,
          filter = _this$state.filter,
          hideAxes = _this$state.hideAxes,
          hideLegend = _this$state.hideLegend,
          scheme = _this$state.scheme,
          signalValues = _this$state.signalValues,
          size = _this$state.size,
          chart = _this$state.chart,
          view = _this$state.view;
      var insight = {
        colorBin: colorBin,
        columns: columns,
        facets: facets,
        filter: filter,
        hideAxes: hideAxes,
        hideLegend: hideLegend,
        scheme: scheme,
        signalValues: signalValues,
        size: size,
        chart: chart,
        view: view
      };
      var loaded = !!(this.state.columns && this.state.dataContent);
      var selectionState = this.viewer && this.viewer.getSelection() || {};
      var selectionSearch = selectionState && selectionState.search;
      var quantitativeColumns = this.state.dataContent && this.state.dataContent.columns.filter(function (c) {
        return c.quantitative;
      });
      var categoricalColumns = this.state.dataContent && this.state.dataContent.columns.filter(function (c) {
        return !c.quantitative;
      });
      var columnMapProps = {
        changeColumnMapping: function changeColumnMapping(role, column) {
          return _this10.changeColumnMapping(role, column);
        },
        quantitativeColumns: quantitativeColumns,
        categoricalColumns: categoricalColumns,
        explorer: this
      };
      var datas = {};
      datas[_dataScope.DataScopeId.AllData] = this.state.dataContent && this.state.dataContent.data;
      datas[_dataScope.DataScopeId.FilteredData] = this.state.filteredData;
      datas[_dataScope.DataScopeId.SelectedData] = selectionState && selectionState.selectedData;

      if (this.state.calculating) {
        setTimeout(function () {
          //allow render to complete
          if (_this10.state.calculating) {
            _this10.state.calculating();

            _this10.setState({
              calculating: null
            });
          }
        }, 0);
      }

      var theme = this.props.theme || '';
      var themePalette = _themes.themePalettes[theme];
      return React.createElement("div", {
        className: _sanddanceReact.util.classList("sanddance-explorer", this.props.theme)
      }, React.createElement(_topbar.Topbar, {
        logoClickUrl: this.props.logoClickUrl,
        logoClickTarget: this.props.logoClickTarget,
        themePalette: themePalette,
        loaded: loaded,
        doDeselect: this.doDeselect.bind(this),
        doFilter: this.doFilter.bind(this),
        doUnfilter: this.doUnfilter.bind(this),
        filter: this.state.filter,
        selectionSearch: selectionSearch,
        selectionState: selectionState,
        buttons: this.props.topBarButtonProps,
        view: this.state.view,
        onViewClick: function onViewClick() {
          var view = _this10.state.view === '2d' ? '3d' : '2d';

          _this10.changeInsight({
            view: view
          });
        },
        onHomeClick: function onHomeClick() {
          return _this10.viewer.presenter.homeCamera();
        }
      }), React.createElement("div", {
        className: _sanddanceReact.util.classList("sanddance-main", this.state.sidebarPinned && "pinned", this.state.sidebarClosed && "closed", this.state.hideLegend && "hide-legend")
      }, React.createElement("div", {
        ref: function ref(div) {
          if (div && !_this10.layoutDivUnpinned) _this10.layoutDivUnpinned = div;
        },
        className: "sanddance-layout-unpinned"
      }), React.createElement("div", {
        ref: function ref(div) {
          if (div && !_this10.layoutDivPinned) _this10.layoutDivPinned = div;
        },
        className: "sanddance-layout-pinned"
      }), !loaded && React.createElement("div", {
        className: "loading"
      }, React.createElement(_base.base.fabric.Spinner, {
        size: _base.base.fabric.SpinnerSize.large,
        label: _language.strings.loading
      })), React.createElement(_sidebar.Sidebar, {
        themePalette: themePalette,
        calculating: !!this.state.calculating,
        closed: this.state.sidebarClosed,
        hideSidebarControls: this.props.hideSidebarControls,
        pinned: this.state.sidebarPinned,
        disabled: !loaded,
        dataScopeProps: {
          themePalette: themePalette,
          compact: this.state.sidebarClosed,
          onCompactClick: function onCompactClick() {
            _this10.changeInsight({
              sidebarClosed: false,
              size: _this10.getLayoutDivSize(_this10.state.sidebarPinned, false)
            });
          },
          dataSet: this.props.datasetElement,
          dataCount: loaded && {
            all: this.state.dataContent && this.state.dataContent.data.length,
            filtered: this.state.filteredData && this.state.filteredData.length,
            selected: selectionState && selectionState.selectedData && selectionState.selectedData.length
          },
          active: this.state.sideTabId === _sidebar.SideTabId.Data,
          onDataScopeClick: function onDataScopeClick(dataScopeId) {
            return _this10.setSideTabId(_sidebar.SideTabId.Data, dataScopeId);
          },
          selectedDataScope: this.state.dataScopeId,
          disabled: !loaded
        },
        onSideTabClick: function onSideTabClick(sideTabId) {
          //collapse or toggle
          if (sideTabId === _sidebar.SideTabId.Collapse || _this10.state.sideTabId === sideTabId) {
            var _this10$state = _this10.state,
                dataScopeId = _this10$state.dataScopeId,
                sidebarClosed = _this10$state.sidebarClosed;

            if (sidebarClosed && sideTabId === _sidebar.SideTabId.Data) {
              dataScopeId = _this10.getBestDataScopeId();
            }

            sidebarClosed = !_this10.state.sidebarClosed;

            _this10.changeInsight({
              dataScopeId: dataScopeId,
              sidebarClosed: sidebarClosed,
              size: _this10.getLayoutDivSize(_this10.state.sidebarPinned, sidebarClosed)
            });
          } else if (sideTabId === _sidebar.SideTabId.Pin) {
            _this10.changeInsight({
              sidebarPinned: !_this10.state.sidebarPinned,
              size: _this10.getLayoutDivSize(!_this10.state.sidebarPinned, _this10.state.sidebarClosed)
            });
          } else {
            _this10.setSideTabId(sideTabId);
          }
        },
        selectedSideTab: this.state.sideTabId
      }, loaded && function () {
        switch (_this10.state.sideTabId) {
          case _sidebar.SideTabId.ChartType:
            return React.createElement(_chart.Chart, Object.assign({
              specCapabilities: _this10.state.specCapabilities,
              disabled: !loaded || _this10.state.sidebarClosed
            }, columnMapProps, {
              chart: _this10.state.chart,
              view: _this10.state.view,
              onChangeChartType: function onChangeChartType(chart) {
                return _this10.changeChartType(chart);
              },
              columns: _this10.state.columns,
              onChangeSignal: function onChangeSignal(role, column, name, value) {
                (0, _partialInsight.saveSignalValuePref)(_this10.prefs, _this10.state.chart, role, column, name, value);
              }
            }));

          case _sidebar.SideTabId.Color:
            return React.createElement(_color.Color, Object.assign({
              specCapabilities: _this10.state.specCapabilities,
              disabled: !loaded || _this10.state.sidebarClosed
            }, columnMapProps, {
              dataContent: _this10.state.dataContent,
              scheme: _this10.state.scheme,
              colorBin: _this10.state.colorBin,
              colorBinSignal: _this10.viewer && _this10.viewer.vegaSpec && _this10.viewer.vegaSpec.signals.filter(function (s) {
                return s.name === _sanddanceReact.SandDance.constants.SignalNames.ColorBinCount;
              })[0],
              colorReverseSignal: _this10.viewer && _this10.viewer.vegaSpec && _this10.viewer.vegaSpec.signals.filter(function (s) {
                return s.name === _sanddanceReact.SandDance.constants.SignalNames.ColorReverse;
              })[0],
              colorColumn: _this10.state.columns.color,
              changeColorBin: function changeColorBin(colorBin) {
                _this10.ignoreSelectionChange = true;

                _this10.viewer.deselect().then(function () {
                  _this10.ignoreSelectionChange = false; //allow deselection to render

                  setTimeout(function () {
                    _this10.getColorContext = null;

                    _this10.changeInsight({
                      colorBin: colorBin
                    });

                    (0, _partialInsight.savePref)(_this10.prefs, _this10.state.chart, 'color', _this10.state.columns.color, {
                      colorBin: colorBin
                    });
                  }, 0);
                });
              },
              changeColorScheme: function changeColorScheme(scheme) {
                _this10.changeColumnMapping('color', _this10.state.dataContent.columns.filter(function (c) {
                  return c.name === _this10.state.columns.color;
                })[0], {
                  scheme: scheme
                });

                (0, _partialInsight.savePref)(_this10.prefs, _this10.state.chart, 'color', _this10.state.columns.color, {
                  scheme: scheme
                });
              },
              onColorBinCountChange: function onColorBinCountChange(value) {
                var signalValues = {};
                signalValues[_sanddanceReact.SandDance.constants.SignalNames.ColorBinCount] = value;
                (0, _partialInsight.savePref)(_this10.prefs, _this10.state.chart, 'color', _this10.state.columns.color, {
                  signalValues: signalValues
                });
              },
              onColorReverseChange: function onColorReverseChange(value) {
                _this10.getColorContext = null;
                var signalValues = {};
                signalValues[_sanddanceReact.SandDance.constants.SignalNames.ColorReverse] = value;
              }
            }));

          case _sidebar.SideTabId.Data:
            var data = datas[_this10.state.dataScopeId];
            var itemVisible = true;

            switch (_this10.state.dataScopeId) {
              case _dataScope.DataScopeId.AllData:
                var item = _this10.state.selectedItemIndex[_this10.state.dataScopeId];
                itemVisible = _this10.state.dataContent && !_this10.state.filteredData || _this10.state.filteredData.indexOf(data[item]) >= 0;
            }

            return React.createElement(_dataBrowser.DataBrowser, {
              themePalette: themePalette,
              disabled: !loaded || _this10.state.sidebarClosed,
              columns: _this10.state.dataContent && _this10.state.dataContent.columns,
              data: data,
              title: dataBrowserTitles[_this10.state.dataScopeId],
              nullMessage: dataBrowserNullMessages[_this10.state.dataScopeId],
              zeroMessage: dataBrowserZeroMessages[_this10.state.dataScopeId],
              index: _this10.state.selectedItemIndex[_this10.state.dataScopeId],
              itemVisible: itemVisible,
              onActivate: function onActivate(row, index) {
                var selectedItemIndex = Object.assign({}, _this10.state.selectedItemIndex);
                selectedItemIndex[_this10.state.dataScopeId] = index;

                _this10.setState({
                  selectedItemIndex: selectedItemIndex
                });

                _this10.silentActivation(row);
              },
              onSearch: function onSearch(e, search) {
                if (e.ctrlKey) {
                  _this10.setState({
                    sideTabId: _sidebar.SideTabId.Search,
                    search: search
                  });
                } else {
                  _this10.doSelect(search);
                }
              }
            });

          case _sidebar.SideTabId.Search:
            return React.createElement(_search.Search, {
              themePalette: themePalette,
              disabled: !loaded || _this10.state.sidebarClosed,
              initializer: {
                columns: _this10.state.dataContent.columns,
                search: _this10.state.search
              },
              autoCompleteDistinctValues: _this10.state.autoCompleteDistinctValues,
              onSelect: function onSelect(expr) {
                _this10.doSelect(expr);
              },
              data: _this10.state.dataContent.data
            });

          case _sidebar.SideTabId.Snapshots:
            return React.createElement(_snapshots.Snapshots, Object.assign({}, _this10.props.snapshotProps, {
              themePalette: themePalette,
              explorer: _this10,
              snapshots: _this10.state.snapshots,
              onCreateSnapshot: function onCreateSnapshot(snapshot) {
                _this10.setState({
                  snapshots: _this10.state.snapshots.concat(snapshot)
                });
              },
              onRemoveSnapshot: function onRemoveSnapshot(i) {
                var snapshots = _toConsumableArray(_this10.state.snapshots);

                snapshots.splice(i, 1);

                _this10.setState({
                  snapshots: snapshots
                });
              },
              onSnapshotClick: function onSnapshotClick(snapshot) {
                _this10.calculate(function () {
                  if (_this10.props.onSnapshotClick) {
                    _this10.props.onSnapshotClick(snapshot);
                  } else {
                    _this10.setInsight(snapshot.insight);
                  }
                });
              }
            }));

          case _sidebar.SideTabId.Settings:
            return React.createElement(_settings.Settings, {
              explorer: _this10,
              dataFile: _this10.state.dataFile,
              scheme: _this10.state.scheme,
              hideLegend: _this10.state.hideLegend,
              onToggleLegend: function onToggleLegend(hideLegend) {
                return _this10.setState({
                  hideLegend: hideLegend,
                  calculating: function calculating() {
                    return _this10._resize();
                  }
                });
              },
              hideAxes: _this10.state.hideAxes,
              onToggleAxes: function onToggleAxes(hideAxes) {
                return _this10.setState({
                  calculating: function calculating() {
                    return _this10.setState({
                      hideAxes: hideAxes
                    });
                  }
                });
              }
            });
        }
      }()), loaded && React.createElement("div", {
        className: "sanddance-view"
      }, React.createElement(_sanddanceReact.SandDanceReact, {
        renderOptions: {
          initialColorContext: this.getColorContext && this.getColorContext(this.viewer.insight, insight),
          discardColorContextUpdates: function discardColorContextUpdates() {
            return _this10.discardColorContextUpdates;
          }
        },
        viewerOptions: this.viewerOptions,
        ref: function ref(reactViewer) {
          if (reactViewer) {
            _this10.viewer = reactViewer.viewer;
          }
        },
        onView: function onView(renderResult) {
          _this10.changespecCapabilities(renderResult.specResult.errors ? renderResult.specResult.specCapabilities : _this10.viewer.specCapabilities);

          _this10.getColorContext = function (oldInsight, newInsight) {
            if (!oldInsight && !newInsight) {
              return null;
            }

            if (!oldInsight || !newInsight) {
              return null;
            }

            if (oldInsight.scheme !== newInsight.scheme) {
              return null;
            }

            if (oldInsight.columns.color !== newInsight.columns.color) {
              return null;
            }

            return _this10.viewer.colorContexts && _this10.viewer.colorContexts[_this10.viewer.currentColorContext];
          }; //don't allow tabbing to the canvas


          _this10.viewer.presenter.getElement(_sanddanceReact.SandDance.VegaDeckGl.PresenterElement.gl).getElementsByTagName('canvas')[0].tabIndex = -1;
          _this10.props.onView && _this10.props.onView();
        },
        data: this.state.dataContent.data,
        insight: insight,
        onMount: function onMount(el) {
          return _this10.viewerMounted(el);
        }
      })), React.createElement(_dialog.Dialog, {
        title: _language.strings.labelError,
        hidden: !this.state.errors,
        onDismiss: function onDismiss() {
          _this10.setState({
            errors: null
          });
        }
      }, this.state.errors && this.state.errors.map(function (error, i) {
        return React.createElement("div", {
          key: i
        }, error);
      }))));
    }
  }]);

  return Explorer;
}(React.Component);

exports.Explorer = Explorer;
},{"react":"ccIB","./colorMap":"E67y","./base":"Vlbn","./colorScheme":"L8O2","./dialogs/chart":"NGSt","./dialogs/color":"N8IJ","./dataLoader":"f19h","./partialInsight":"tb7d","./dialogs/dataBrowser":"8pJL","./controls/dataScope":"Os+N","./controls/dialog":"cFWm","./dialogs/search":"ozxe","@msrvida/sanddance-react":"MjKu","./dialogs/settings":"zKGJ","./controls/sidebar":"f8Jx","./dialogs/snapshots":"3oc9","./language":"hk5u","./themes":"CgE3","./toggleSearch":"yzxM","./controls/topbar":"Afi9"}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SandDance: true,
  util: true,
  use: true,
  themePalettes: true
};
Object.defineProperty(exports, "SandDance", {
  enumerable: true,
  get: function () {
    return _sanddanceReact.SandDance;
  }
});
Object.defineProperty(exports, "util", {
  enumerable: true,
  get: function () {
    return _sanddanceReact.util;
  }
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function () {
    return _base.use;
  }
});
Object.defineProperty(exports, "themePalettes", {
  enumerable: true,
  get: function () {
    return _themes.themePalettes;
  }
});

var _sanddanceReact = require("@msrvida/sanddance-react");

var _base = require("./base");

var _themes = require("./themes");

var _explorer = require("./explorer");

Object.keys(_explorer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _explorer[key];
    }
  });
});
},{"@msrvida/sanddance-react":"MjKu","./base":"Vlbn","./themes":"CgE3","./explorer":"KeW6"}]},{},["Focm"], "SandDanceExplorer")
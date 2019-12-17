/* eslint no-param-reassign:0, no-console:0, max-len:0 */

import clone from "lodash.clonedeep";
import arrayObjectOrBoth from "util-array-object-or-both";
import checkTypes from "check-types-mini";
import types from "type-detect";
import astCompare from "ast-compare";
import traverse from "ast-monkey-traverse";

const DEBUG = false;

// import isEqual from 'lodash.isequal'
// import matcher from 'matcher'

// -----------------------------------------------------------------------------

function existy(x) {
  return x != null;
}
function notUndef(x) {
  return x !== undefined;
}
// function isStr(x) { return typeof x === 'string' }
function compareIsEqual(a, b) {
  if (types(a) !== types(b)) {
    return false;
  }
  return astCompare(a, b, { matchStrictly: true, useWildcards: true });
}
function isObj(something) {
  return typeof something === "object" && something !== null;
}

// -----------------------------------------------------------------------------

function monkey(inputOriginal, opts) {
  // -----------------------------------
  // precautions
  if (!existy(inputOriginal)) {
    throw new Error(
      "ast-monkey/main.js/monkey(): [THROW_ID_01] Please provide an input"
    );
  }
  let input = clone(inputOriginal);
  opts = Object.assign(
    {
      key: null,
      val: undefined
    },
    opts
  );
  // ---------------------------------------------------------------------------
  // action

  if (DEBUG || opts.mode === "info") {
    console.log(`mode: ${opts.mode}`);
  }
  const data = { count: 0, gatherPath: [], finding: null };
  const findings = [];

  let ko = false; // key only
  let vo = false; // value only
  if (existy(opts.key) && !notUndef(opts.val)) {
    ko = true;
  }
  if (!existy(opts.key) && notUndef(opts.val)) {
    vo = true;
  }

  if (DEBUG || opts.mode === "info") {
    console.log(
      `ORIGINAL INPUT:\ninput = ${JSON.stringify(
        input,
        null,
        4
      )}\n========================`
    );
  }
  if (DEBUG || opts.mode === "info") {
    console.log("-----------");
  }

  if (
    opts.mode === "arrayFirstOnly" &&
    Array.isArray(input) &&
    input.length > 0
  ) {
    input = [input[0]];
  }

  //
  //
  //

  input = traverse(input, (key, val, innerObj) => {
    let temp;
    data.count += 1;
    if (DEBUG || opts.mode === "info") {
      console.log(`    #${data.count}\n`);
    }
    if (DEBUG || opts.mode === "info") {
      console.log(`key = ${JSON.stringify(key, null, 4)}`);
    }
    if (DEBUG || opts.mode === "info") {
      console.log(`val = ${JSON.stringify(val, null, 4)}`);
    }
    data.gatherPath.length = innerObj.depth;
    data.gatherPath.push(data.count);
    if (DEBUG || opts.mode === "info") {
      console.log(
        `data.gatherPath = ${JSON.stringify(data.gatherPath, null, 4)}`
      );
    }
    if (opts.mode === "get") {
      if (data.count === opts.index) {
        if (notUndef(val)) {
          data.finding = {};
          data.finding[key] = val;
        } else {
          data.finding = key;
        }
      }
    } else if (opts.mode === "find" || opts.mode === "del") {
      if (
        // opts.only satisfied
        (opts.only === "any" ||
          (opts.only === "array" && val === undefined) ||
          (opts.only === "object" && val !== undefined)) && // match
        ((ko && compareIsEqual(key, opts.key)) ||
          (vo && compareIsEqual(val, opts.val)) ||
          (!ko &&
            !vo &&
            compareIsEqual(key, opts.key) &&
            compareIsEqual(val, opts.val)))
      ) {
        if (opts.mode === "find") {
          temp = {};
          temp.index = data.count;
          temp.key = key;
          temp.val = val; // can be also undefined!
          temp.path = clone(data.gatherPath);
          findings.push(temp);
        } else {
          // del() then!
          return NaN;
        }
      } else {
        return val !== undefined ? val : key;
      }
    }

    if (DEBUG || opts.mode === "info") {
      console.log("-----------");
    }
    if (opts.mode === "set" && data.count === opts.index) {
      return opts.val;
    } else if (opts.mode === "drop" && data.count === opts.index) {
      return NaN;
    } else if (opts.mode === "arrayFirstOnly") {
      if (notUndef(val) && Array.isArray(val)) {
        return [val[0]];
      } else if (existy(key) && Array.isArray(key)) {
        return [key[0]];
      }
      return val !== undefined ? val : key;
    }
    return val !== undefined ? val : key;
  });

  // returns
  if (opts.mode === "get") {
    return data.finding;
  } else if (opts.mode === "find") {
    return findings.length > 0 ? findings : null;
  }
  return input;
}

// -----------------------------------------------------------------------------
// Validate and prep all the options right here

function find(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/find(): [THROW_ID_02] Please provide the input"
    );
  }
  if (!isObj(opts) || (opts.key === undefined && opts.val === undefined)) {
    throw new Error(
      "ast-monkey/main.js/find(): [THROW_ID_03] Please provide opts.key or opts.val"
    );
  }
  checkTypes(opts, null, {
    schema: {
      key: ["null", "string"],
      val: "any",
      only: ["undefined", "null", "string"]
    },
    msg: "ast-monkey/get(): [THROW_ID_04*]"
  });
  if (typeof opts.only === "string" && opts.only.length > 0) {
    opts.only = arrayObjectOrBoth(opts.only, {
      optsVarName: "opts.only",
      msg: "ast-monkey/find(): [THROW_ID_05*]"
    });
  } else {
    opts.only = "any";
  }
  return monkey(input, Object.assign({}, opts, { mode: "find" }));
}

function get(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/get(): [THROW_ID_06] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/get(): [THROW_ID_07] Please provide the opts"
    );
  }
  if (!existy(opts.index)) {
    throw new Error(
      "ast-monkey/main.js/get(): [THROW_ID_08] Please provide opts.index"
    );
  }
  if (typeof opts.index === "string") {
    if (Number.isInteger(parseFloat(opts.index, 10), { includeZero: true })) {
      opts.index = parseInt(opts.index, 10);
    } else {
      throw new Error(
        `ast-monkey/main.js/get(): [THROW_ID_09] opts.index must be a natural number. It was given as: ${opts.index}`
      );
    }
  }
  checkTypes(opts, null, {
    schema: {
      index: "number"
    },
    msg: "ast-monkey/get(): [THROW_ID_10*]"
  });
  if (!Number.isInteger(opts.index, { includeZero: true })) {
    throw new Error(
      `ast-monkey/main.js/get(): [THROW_ID_11] opts.index must be a natural number. It was given as: ${opts.index}`
    );
  }
  return monkey(input, Object.assign({}, opts, { mode: "get" }));
}

function set(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_12] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_13] Please provide the input"
    );
  }
  if (!existy(opts.key) && !notUndef(opts.val)) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_14] Please provide opts.val"
    );
  }
  if (!existy(opts.index)) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_15] Please provide opts.index"
    );
  }
  if (typeof opts.index === "string") {
    if (Number.isInteger(parseFloat(opts.index, 10), { includeZero: true })) {
      opts.index = parseInt(opts.index, 10);
    } else {
      throw new Error(
        `ast-monkey/main.js/set(): [THROW_ID_16] opts.index must be a natural number. It was given as: ${opts.index}`
      );
    }
  } else if (!Number.isInteger(opts.index, { includeZero: true })) {
    throw new Error(
      `ast-monkey/main.js/set(): [THROW_ID_17] opts.index must be a natural number. It was given as: ${opts.index}`
    );
  }
  if (existy(opts.key) && !notUndef(opts.val)) {
    opts.val = opts.key;
  }
  checkTypes(opts, null, {
    schema: {
      key: [null, "string"],
      val: "any",
      index: "number"
    },
    msg: "ast-monkey/set(): [THROW_ID_18*]"
  });
  return monkey(input, Object.assign({}, opts, { mode: "set" }));
}

function drop(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/drop(): [THROW_ID_19] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/drop(): [THROW_ID_20] Please provide the input"
    );
  }
  if (!existy(opts.index)) {
    throw new Error(
      "ast-monkey/main.js/drop(): [THROW_ID_21] Please provide opts.index"
    );
  }
  if (typeof opts.index === "string") {
    if (Number.isInteger(parseFloat(opts.index, 10), { includeZero: true })) {
      opts.index = parseInt(opts.index, 10);
    } else {
      throw new Error(
        `ast-monkey/main.js/drop(): [THROW_ID_22] opts.index must be a natural number. It was given as: ${opts.index}`
      );
    }
  }
  if (!Number.isInteger(opts.index, { includeZero: true })) {
    throw new Error(
      `ast-monkey/main.js/drop(): [THROW_ID_23] opts.index must be a natural number. It was given as: ${opts.index}`
    );
  }
  checkTypes(opts, null, {
    schema: {
      index: "number"
    },
    msg: "ast-monkey/drop(): [THROW_ID_24*]"
  });
  return monkey(input, Object.assign({}, opts, { mode: "drop" }));
}

function info(input) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/info(): [THROW_ID_25] Please provide the input"
    );
  }
  return monkey(input, { mode: "info" });
}

function del(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/del(): [THROW_ID_26] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/del(): [THROW_ID_27] Please provide the opts object"
    );
  }
  if (!existy(opts.key) && !notUndef(opts.val)) {
    throw new Error(
      "ast-monkey/main.js/del(): [THROW_ID_28] Please provide opts.key or opts.val"
    );
  }
  checkTypes(opts, null, {
    schema: {
      key: [null, "string"],
      val: "any",
      only: ["undefined", "null", "string"]
    },
    msg: "ast-monkey/drop(): [THROW_ID_29*]"
  });
  if (typeof opts.only === "string" && opts.only.length > 0) {
    opts.only = arrayObjectOrBoth(opts.only, {
      msg: "ast-monkey/del(): [THROW_ID_30*]",
      optsVarName: "opts.only"
    });
  } else {
    opts.only = "any";
  }
  return monkey(input, Object.assign({}, opts, { mode: "del" }));
}

function arrayFirstOnly(input) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/arrayFirstOnly(): [THROW_ID_31] Please provide the input"
    );
  }
  return monkey(input, { mode: "arrayFirstOnly" });
}

// -----------------------------------------------------------------------------

export { find, get, set, drop, info, del, arrayFirstOnly, traverse };

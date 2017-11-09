'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isInt = _interopDefault(require('is-natural-number'));
var isNumStr = _interopDefault(require('is-natural-number-string'));
var ordinal = _interopDefault(require('ordinal-number-suffix'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint no-param-reassign:0, security/detect-object-injection:0 */

var isArr = Array.isArray;

function existy(x) {
  return x != null;
}
function isStr(something) {
  return typeof something === 'string';
}

function replaceSlicesArr(str, rangesArr) {
  if (arguments.length === 0) {
    throw new Error('string-replace-slices-array/replaceSlicesArr(): [THROW_ID_01] inputs missing!');
  }
  if (!isStr(str)) {
    throw new TypeError('string-replace-slices-array/replaceSlicesArr(): [THROW_ID_02] first input argument must be a string! Currently it\'s: ' + (typeof str === 'undefined' ? 'undefined' : _typeof(str)) + ', equal to: ' + str);
  }
  if (!isArr(rangesArr)) {
    throw new TypeError('string-replace-slices-array/replaceSlicesArr(): [THROW_ID_03] second input argument must be an array! Currently it\'s: ' + (typeof rangesArr === 'undefined' ? 'undefined' : _typeof(rangesArr)) + ', equal to: ' + rangesArr);
  }
  rangesArr.forEach(function (el, i) {
    if (!isArr(el)) {
      throw new TypeError('string-replace-slices-array/replaceSlicesArr(): [THROW_ID_05] ranges array, second input arg., has ' + i + ordinal(i) + ' element not an array: ' + JSON.stringify(el, null, 4) + ', which is ' + (typeof el === 'undefined' ? 'undefined' : _typeof(el)));
    }
    if (!isInt(el[0], { includeZero: true })) {
      if (isNumStr(el[0])) {
        rangesArr[i][0] = Number.parseInt(rangesArr[i][0], 10);
      } else {
        throw new TypeError('string-replace-slices-array/replaceSlicesArr(): [THROW_ID_06] ranges array, second input arg. has ' + i + ordinal(i) + ' element, array [' + el[0] + ',' + el[1] + ']. That array has first element not an integer, but ' + _typeof(el[0]) + ', equal to: ' + JSON.stringify(el[0], null, 4) + '. Computer doesn\'t like this.');
      }
    }
    if (!isInt(el[1], { includeZero: true })) {
      if (isNumStr(el[1])) {
        rangesArr[i][1] = Number.parseInt(rangesArr[i][1], 10);
      } else {
        throw new TypeError('string-replace-slices-array/replaceSlicesArr(): [THROW_ID_07] ranges array, second input arg. has ' + i + ordinal(i) + ' element, array [' + el[0] + ',' + el[1] + ']. That array has second element not an integer, but ' + _typeof(el[1]) + ', equal to: ' + JSON.stringify(el[1], null, 4) + '. Computer doesn\'t like this.');
      }
    }
  });

  if (rangesArr.length > 0) {
    var tails = str.slice(rangesArr[rangesArr.length - 1][1]);
    str = rangesArr.reduce(function (acc, val, i, arr) {
      var beginning = i === 0 ? 0 : arr[i - 1][1];
      var ending = arr[i][0];
      return acc + str.slice(beginning, ending) + (existy(arr[i][2]) ? arr[i][2] : '');
    }, '');
    str += tails;
  }
  return str;
}

module.exports = replaceSlicesArr;

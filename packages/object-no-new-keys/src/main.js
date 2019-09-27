/* eslint no-param-reassign:0 */

import isObj from "lodash.isplainobject";

function objectNoNewKeys(inputOuter, referenceOuter, originalOptsOuter) {
  const isArr = Array.isArray;
  const defaults = {
    mode: 2
  };
  if (Number.isFinite(originalOptsOuter)) {
    if (!Number.isInteger(originalOptsOuter)) {
      throw new TypeError(
        `object-no-new-keys/objectNoNewKeys(): [THROW_ID_03] The third argument, options object, is not only not an object, it's not even an integer! It's currently: ${originalOptsOuter} and computer doesn't like it very much.`
      );
    } else {
      throw new TypeError(
        `object-no-new-keys/objectNoNewKeys(): [THROW_ID_02] Please pass a plain object with a key "mode" set to 1 or 2, not the number ${originalOptsOuter} directly! Computer doesn't like that.`
      );
    }
  }
  const optsOuter = Object.assign({}, defaults, originalOptsOuter);
  if (typeof optsOuter.mode === "string") {
    optsOuter.mode = parseInt(optsOuter.mode, 10);
  }
  if (optsOuter.mode !== 1 && optsOuter.mode !== 2) {
    throw new TypeError(
      `object-no-new-keys/objectNoNewKeys(): [THROW_ID_01] opts.mode was customised to be a wrong thing, "${optsOuter.mode}" while it should be either natural number 1 or 2.`
    );
  }

  function objectNoNewKeysInternal(input, reference, opts, innerVar) {
    let temp;
    if (innerVar === undefined) {
      innerVar = { path: "", res: [] };
    }
    if (isObj(input)) {
      if (isObj(reference)) {
        // input and reference both are objects.
        // match the keys and record any unique-ones.
        // then traverse recursively.
        Object.keys(input).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(reference, key)) {
            temp = innerVar.path.length > 0 ? `${innerVar.path}.${key}` : key;
            innerVar.res.push(temp);
          } else if (isObj(input[key]) || isArr(input[key])) {
            temp = {
              path: innerVar.path.length > 0 ? `${innerVar.path}.${key}` : key,
              res: innerVar.res
            };
            innerVar.res = objectNoNewKeysInternal(
              input[key],
              reference[key],
              opts,
              temp
            ).res;
          }
        });
      } else {
        // input is object, but reference is not.
        // record all the keys of the input, but don't traverse deeper
        innerVar.res = innerVar.res.concat(
          Object.keys(input).map(key =>
            innerVar.path.length > 0 ? `${innerVar.path}.${key}` : key
          )
        );
      }
    } else if (isArr(input)) {
      if (isArr(reference)) {
        // both input and reference are arrays.
        // traverse each
        for (let i = 0, len = input.length; i < len; i++) {
          temp = {
            path: `${innerVar.path.length > 0 ? innerVar.path : ""}[${i}]`,
            res: innerVar.res
          };
          if (opts.mode === 2) {
            innerVar.res = objectNoNewKeysInternal(
              input[i],
              reference[0],
              opts,
              temp
            ).res;
          } else {
            innerVar.res = objectNoNewKeysInternal(
              input[i],
              reference[i],
              opts,
              temp
            ).res;
          }
        }
      } else {
        // mismatch
        // traverse all elements of the input and put their locations to innerVar.res
        innerVar.res = innerVar.res.concat(
          input.map(
            (el, i) => `${innerVar.path.length > 0 ? innerVar.path : ""}[${i}]`
          )
        );
      }
    }
    return innerVar;
  }
  return objectNoNewKeysInternal(inputOuter, referenceOuter, optsOuter).res;
}

export default objectNoNewKeys;

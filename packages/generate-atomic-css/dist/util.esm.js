import split from 'split-lines';

const isArr = Array.isArray;
function isStr(something) {
  return typeof something === "string";
}
function trimBlankLinesFromLinesArray(lineArr) {
  const copyArr = Array.from(lineArr);
  if (copyArr.length && isStr(copyArr[0]) && !copyArr[0].trim().length) {
    do {
      copyArr.shift();
    } while (!copyArr[0].trim().length);
  }
  if (
    copyArr.length &&
    isStr(copyArr[copyArr.length - 1]) &&
    !copyArr[copyArr.length - 1].trim().length
  ) {
    do {
      copyArr.pop();
    } while (!copyArr[copyArr.length - 1].trim().length);
  }
  return copyArr;
}
function prepLine(str, progressFn, subsetFrom, subsetTo) {
  let currentPercentageDone;
  let lastPercentage = 0;
  const split = str.split("|").filter(val => val.length);
  let from = 0;
  let to = 500;
  if (split[1]) {
    if (split[2]) {
      from = Number.parseInt(split[1].trim());
      to = Number.parseInt(split[2].trim());
    } else {
      to = Number.parseInt(split[1].trim());
    }
  }
  let res = "";
  const subsetRange = subsetTo - subsetFrom;
  for (let i = from; i <= to; i++) {
    let newStr = split[0];
    const threeDollarRegexWithUnits = /\$\$\$(px|em|%|rem|cm|mm|in|pt|pc|ex|ch|vw|vmin|vmax)/g;
    const threeDollarRegex = /\$\$\$/g;
    const findingsThreeDollarWithUnits = newStr.match(
      threeDollarRegexWithUnits
    );
    if (
      isArr(findingsThreeDollarWithUnits) &&
      findingsThreeDollarWithUnits.length &&
      i === from &&
      i === 0
    ) {
      findingsThreeDollarWithUnits.forEach(valFound => {
        newStr = newStr.replace(
          valFound,
          `${i}`.padStart(valFound.length - 3 + String(to).length, " ")
        );
      });
    }
    res += `${i === from ? "" : "\n"}${newStr.replace(
      threeDollarRegex,
      i
    )}`.trimEnd();
    if (typeof progressFn === "function") {
      currentPercentageDone =
        subsetFrom + Math.floor((i / (to - from)) * subsetRange);
      if (currentPercentageDone !== lastPercentage) {
        lastPercentage = currentPercentageDone;
        progressFn(currentPercentageDone);
      }
    }
  }
  return res;
}
function prepConfig(str, progressFn, progressFrom, progressTo) {
  return trimBlankLinesFromLinesArray(
    split(str).map((rowStr, i, arr) =>
      rowStr.includes("$$$")
        ? prepLine(
            rowStr,
            progressFn,
            progressFrom + ((progressTo - progressFrom) / arr.length) * i,
            progressFrom + ((progressTo - progressFrom) / arr.length) * (i + 1)
          )
        : rowStr
    )
  ).join("\n");
}

export { prepConfig, prepLine };

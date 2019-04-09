import errors from "../src/errors-rules.json";
import { lint } from "../dist/emlint.esm";
import isObj from "lodash.isplainobject";
import clone from "lodash.clonedeep";
import apply from "ranges-apply";

// all rules turned off:
function generateAllRulesOffObj(errors) {
  const allOff = clone(errors);
  Object.keys(allOff).forEach(key => {
    allOff[key] = false;
  });
  return { rules: clone(allOff) };
}

function getUniqueIssueNames(issues) {
  return issues.reduce((accum, curr) => {
    if (!accum.includes(curr.name)) {
      return accum.concat([curr.name]);
    }
    return accum;
  }, []);
}

function c(bad, good, issuesArr, t, opts) {
  // zero issue inputs:
  if (arguments.length === 2) {
    // t is argument "good"
    good.deepEqual(lint(bad).issues, [], "part 1");
  } else if (arguments.length === 5 && !good && !issuesArr) {
    // all args are in place, but it's zero-issue checking, with opts
    t.deepEqual(lint(bad, opts).issues, [], "part 1");
  } else {
    const config = {
      enabled1: true,
      enabled2: true,
      enabled3: true
    };

    // get the linting result:
    const res1 = lint(bad, opts);
    // arrayiffy the issue if one was sent
    if (typeof issuesArr === "string") {
      issuesArr = [issuesArr];
    }

    if (config.enabled1) {
      // ensure fixes turn "bad" into "good":
      t.is(apply(bad, res1.fix), good, "part 1 - code fixed correctly");
    }

    //                    v
    //                    v
    //                    v
    //                    v
    //                    v
    //                    v

    if (config.enabled2) {
      // ensure rules list is as expected:
      t.deepEqual(
        getUniqueIssueNames(res1.issues).sort(),
        issuesArr.sort(),
        "part 2 - enabled rules list"
      );
    }

    if (config.enabled3) {
      // prepare a set of exactly the same rules, but disabled:
      const allRulesDisabled = Object.keys(res1.applicableRules)
        .filter(rule => res1.applicableRules[rule])
        .reduce((accum, curr) => {
          accum[curr] = false;
          return accum;
        }, {});
      // console.log("\n\n\n███████████████████████████████████████\n\n\n");
      // console.log(
      //   `060 test.js: ${`\u001b[${33}m${`allRulesDisabled`}\u001b[${39}m`} = ${JSON.stringify(
      //     allRulesDisabled,
      //     null,
      //     4
      //   )}`
      // );

      // additionally, some rules can come from opts.style, not from opts.rules
      // here, traverse all opts.rules (if any) and add "= false" overrides
      // to disable each, and put them under opts.rules.
      if (
        isObj(opts) &&
        isObj(opts.style) &&
        Object.keys(opts.style).length &&
        Object.keys(opts.style).includes("line_endings_CR_LF_CRLF")
      ) {
        allRulesDisabled["file-mixed-line-endings-file-is-CR-mainly"] = false;
        allRulesDisabled["file-mixed-line-endings-file-is-CRLF-mainly"] = false;
        allRulesDisabled["file-mixed-line-endings-file-is-LF-mainly"] = false;
      }
      t.deepEqual(
        lint(bad, { rules: allRulesDisabled }).issues,
        [],
        "part 3 - rules disabled"
      );
    }
  }
}

// c2() is used for rules which are unfixable
function c2(bad, resToCompareWith, t, opts) {
  const linted = lint(bad, opts);
  // console.log(
  //   `092 test.js: ${`\u001b[${33}m${`linted`}\u001b[${39}m`} = ${JSON.stringify(
  //     linted,
  //     null,
  //     4
  //   )}`
  // );
  t.deepEqual(linted.issues, resToCompareWith.issues);
  t.deepEqual(lint(bad, allOff).issues, []);
  t.is(apply(bad, linted.fix), bad);
}

const allOff = generateAllRulesOffObj(errors);

export { c, c2, allOff, getUniqueIssueNames };

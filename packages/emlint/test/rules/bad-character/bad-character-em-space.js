// rule: bad-character-em-space
// https://www.fileformat.info/info/unicode/char/2003/index.htm
// -----------------------------------------------------------------------------

import tap from "tap";
import { Linter } from "../../../dist/emlint.esm.js";

import { applyFixes } from "../../../t-util/util.js";

// -----------------------------------------------------------------------------

// 1. basic tests
tap.test(`01 - detects two EM SPACE characters`, (t) => {
  const str = "\u2003dlkgjld\u2003j";
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-character-em-space": 2,
    },
  });
  t.match(
    messages,
    [
      {
        ruleId: "bad-character-em-space",
        severity: 2,
        idxFrom: 0,
        idxTo: 1,
        line: 1,
        column: 1, // remember columns numbers start from 1, not zero
        message: "Bad character - EM SPACE.",
        fix: {
          ranges: [[0, 1, " "]],
        },
      },
      {
        ruleId: "bad-character-em-space",
        severity: 2,
        idxFrom: 8,
        idxTo: 9,
        line: 1,
        column: 9, // remember columns numbers start from 1, not zero
        message: "Bad character - EM SPACE.",
        fix: {
          ranges: [[8, 9, " "]],
        },
      },
    ],
    "01.01"
  );
  t.equal(applyFixes(str, messages), " dlkgjld j", "01.02");
  t.end();
});

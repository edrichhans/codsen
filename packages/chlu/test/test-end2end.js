import { readFileSync } from "fs";
import path from "path";
import tap from "tap";
import c from "../dist/chlu.esm";

const fixtures = path.join(__dirname, "fixtures");

function compare(t, name, gitTags = null) {
  const changelog = readFileSync(
    path.join(fixtures, `${name}_changelog.md`),
    "utf8"
  );
  const expected = readFileSync(
    path.join(fixtures, `${name}_changelog.expected.md`),
    "utf8"
  );
  const packageJson = readFileSync(
    path.join(fixtures, `${name}_package.json`),
    "utf8"
  );

  // const temp = c(changelog, gitTags, packageJson);
  // console.log(
  //   `${`\u001b[${33}m${`temp`}\u001b[${39}m`} = ${JSON.stringify(
  //     temp,
  //     null,
  //     4
  //   )}`
  // );

  return t.strictSame(c(changelog, gitTags, packageJson), expected);
}

function throws(t, name, gitTags = null) {
  const changelog = readFileSync(
    path.join(fixtures, `${name}_changelog.md`),
    "utf8"
  );
  const packageJson = readFileSync(
    path.join(fixtures, `${name}_package.json`),
    "utf8"
  );
  return t.throws(() => {
    c(changelog, gitTags, packageJson);
  });
}

// -----------------------------------------------------------------------------

tap.test("01. if no input, will silently return indefined", (t) => {
  t.strictSame(c(), undefined, "01");
  t.end();
});

tap.test("02. ascending order, with wrong package names", (t) => {
  compare(t, "01_asc_order_wrong_package");
  t.end();
});

tap.test("03. ascending order, with correct package names", (t) => {
  compare(t, "02_asc_order_correct_package");
  t.end();
});

tap.test("04. correct package names, no footer links at all", (t) => {
  compare(t, "03_no_footer_links");
  t.end();
});

tap.test("05. descending order, with wrong package names", (t) => {
  compare(t, "04_desc_order_wrong_package");
  t.end();
});

tap.test("06. descending order, with correct package names", (t) => {
  compare(t, "05_desc_order_correct_package");
  t.end();
});

tap.test("07. there are no linked titles", (t) => {
  compare(t, "06_not_linked_titles");
  t.end();
});

tap.test("08. non-GitHub package.json - throws", (t) => {
  throws(t, "07_gitlab_package_json");
  t.end();
});

tap.test("09. mid links missing in changelog.md", (t) => {
  compare(t, "08_mid_links_missing");
  t.end();
});

tap.test("10. sneaky cases with tight spacing", (t) => {
  compare(t, "09_tight_spacing");
  t.end();
});

tap.test("11. redundant footer links present, no git logs in context", (t) => {
  compare(t, "10_redundant_links");
  t.end();
});

tap.test(
  "12. title dates are in wrong formats, no git logs in context",
  (t) => {
    compare(t, "11_wrong_dates");
    t.end();
  }
);

tap.test(
  "13. footer links match titles but have wrong versions in URLs",
  (t) => {
    compare(t, "12_wrong_footer_link_versions");
    t.end();
  }
);

tap.test("14. Real world case - https://github.com/guigrpa/giu/", (t) => {
  compare(t, "13_real_world");
  t.end();
});

tap.test(
  "15. Real world case with slashes and letter v - https://github.com/keystonejs/keystone/",
  (t) => {
    compare(t, "14_slashes");
    t.end();
  }
);

tap.test("16. Unrecogniseable date - version gets still linked!", (t) => {
  compare(t, "15_bad_date");
  t.end();
});

tap.test("17. Git Tags supplemented", (t) => {
  const tags = {
    latest: "2017-04-18|v1.3.5",
    all: [
      // list is deliberately not sorted
      "2017-04-10|v1.2.0",
      "2017-04-11|v1.2.1",
      "2017-04-12|v1.2.2", // <------ will be used to diff against v1.3.0
      "2017-04-13|v1.3.0",
      "2017-04-14|v1.3.1",
      "2017-04-15|v1.3.2",
      "2017-04-16|v1.3.3",
      "2017-04-17|v1.3.4",
      "2017-04-18|v1.3.5", // <------ will be used to diff against v1.4.0
      "2017-04-01|v1.0.0",
      "2017-04-02|v1.0.1",
      "2017-04-03|v1.0.2",
      "2017-04-04|v1.0.3", // <------ will be used to diff against v1.1.0
      "2017-04-05|v1.1.0",
      "2017-04-06|v1.1.1",
      "2017-04-07|v1.1.2",
      "2017-04-08|v1.1.3",
      "2017-04-09|v1.1.4", // <------- will be used to diff against v.1.2.0
    ],
  };
  compare(t, "16_git_tags", tags);
  t.end();
});

tap.test("18. Unit test from chlu-cli", (t) => {
  const tags = {
    latest: "2018-06-14|v1.3.1",
    all: [
      "2018-06-14|v1.0.1",
      "2018-06-14|v1.0.2",
      "2018-06-14|v1.1.0",
      "2018-06-14|v1.1.1",
      "2018-06-14|v1.2.0",
      "2018-06-14|v1.3.0",
      "2018-06-14|v1.3.1",
    ],
  };
  compare(t, "17_chlu_cli", tags);
  t.end();
});

tap.test(
  `19. Both package.json and Git data are missing - ${`\u001b[${32}m${`github`}\u001b[${39}m`}`,
  (t) => {
    const original = `# Seed Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.4.0] - 2017-05-09
### Added
- blablabla

## 1.3.0 - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.2.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.1.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## 1.0.0 - 2017-04-03
### New
- First public release

[1.4.0]: https://github.com/codsen/correct-lib/compare/v1.3.0...v1.4.0
`;

    const expected = `# Seed Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.4.0] - 2017-05-09
### Added
- blablabla

## [1.3.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.2.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.1.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## 1.0.0 - 2017-04-03
### New
- First public release

[1.4.0]: https://github.com/codsen/correct-lib/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/codsen/correct-lib/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/codsen/correct-lib/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/codsen/correct-lib/compare/v1.0.0...v1.1.0
`;
    t.strictSame(c(original), expected, "19");

    t.end();
  }
);

tap.test(
  `20. Both package.json and Git data are missing - ${`\u001b[${32}m${`bitbucket`}\u001b[${39}m`}`,
  (t) => {
    const original = `# Seed Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.4.0] - 2017-05-09
### Added
- blablabla

## 1.3.0 - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.2.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.1.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## 1.0.0 - 2017-04-03
### New
- First public release

[1.4.0]: https://bitbucket.org/codsen/correct-lib/branches/compare/v1.4.0%0Dv1.3.0#diff
`;

    const expected = `# Seed Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.4.0] - 2017-05-09
### Added
- blablabla

## [1.3.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.2.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## [1.1.0] - 2017-04-20
### Added
- blablabla
- blablabla
### Improved
- blablabla
### Updated
- Readme
### Unchanged
- Code coverage is still 100%

## 1.0.0 - 2017-04-03
### New
- First public release

[1.4.0]: https://bitbucket.org/codsen/correct-lib/branches/compare/v1.4.0%0Dv1.3.0#diff
[1.3.0]: https://bitbucket.org/codsen/correct-lib/branches/compare/v1.3.0%0Dv1.2.0#diff
[1.2.0]: https://bitbucket.org/codsen/correct-lib/branches/compare/v1.2.0%0Dv1.1.0#diff
[1.1.0]: https://bitbucket.org/codsen/correct-lib/branches/compare/v1.1.0%0Dv1.0.0#diff
`;
    t.strictSame(
      c(original),
      expected,
      "20 - result has descending order links because source had one row only"
    );
    t.end();
  }
);

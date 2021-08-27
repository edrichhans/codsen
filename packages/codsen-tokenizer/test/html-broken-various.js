import tap from "tap";
import { tokenizer as ct } from "../dist/codsen-tokenizer.esm.js";

const BACKSLASH = "\u005C";

// 01. rule tag-space-after-opening-bracket
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${33}m${`tag-space-after-opening-bracket`}\u001b[${39}m`} - 1`,
  (t) => {
    const gathered = [];
    ct(`a < b class="">`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "text",
          start: 0,
          end: 2,
        },
        {
          type: "tag",
          start: 2,
          end: 15,
        },
      ],
      "01"
    );
    t.end();
  }
);

// 02. rule tag-closing-left-slash
// -----------------------------------------------------------------------------

tap.test(
  `02 - ${`\u001b[${33}m${`tag-closing-left-slash`}\u001b[${39}m`} - 1`,
  (t) => {
    const gathered = [];
    ct(`<br${BACKSLASH}>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 5,
        },
      ],
      "02"
    );
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${33}m${`tag-closing-left-slash`}\u001b[${39}m`} - 1`,
  (t) => {
    const gathered = [];
    ct(`<${BACKSLASH}br${BACKSLASH}>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 6,
        },
      ],
      "03"
    );
    t.end();
  }
);

// 03. Various
// -----------------------------------------------------------------------------

tap.test(`04 - xml`, (t) => {
  const gathered = [];
  ct(
    `a<!--[if]><z>
<AAAch>>
</o:Offict`,
    {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    }
  );
  t.strictSame(
    gathered,
    [
      {
        type: "text",
        start: 0,
        end: 1,
        value: "a",
      },
      {
        type: "comment",
        start: 1,
        end: 10,
        value: "<!--[if]>",
        kind: "only",
        closing: false,
        language: "html",
      },
      {
        type: "tag",
        start: 10,
        end: 13,
        value: "<z>",
        tagNameStartsAt: 11,
        tagNameEndsAt: 12,
        tagName: "z",
        recognised: false,
        closing: false,
        void: false,
        pureHTML: true,
        kind: null,
        attribs: [],
      },
      {
        type: "text",
        start: 13,
        end: 33,
        value: "\n<AAAch>>\n</o:Offict",
      },
    ],
    "04"
  );
  t.end();
});

tap.test(`05 - abrupty ended code`, (t) => {
  const gathered = [];
  ct(`<body id="l" style`, {
    tagCb: (obj) => {
      gathered.push(obj);
    },
  });
  t.match(
    gathered,
    [
      {
        type: "tag",
        start: 0,
        end: 18,
        value: '<body id="l" style',
        tagNameStartsAt: 1,
        tagNameEndsAt: 5,
        tagName: "body",
        recognised: true,
        closing: false,
        void: false,
        pureHTML: true,
        kind: null,
        attribs: [
          {
            attribName: "id",
            attribNameRecognised: true,
            attribNameStartsAt: 6,
            attribNameEndsAt: 8,
            attribOpeningQuoteAt: 9,
            attribClosingQuoteAt: 11,
            attribValueRaw: "l",
            attribValue: [
              {
                type: "text",
                start: 10,
                end: 11,
                value: "l",
              },
            ],
            attribValueStartsAt: 10,
            attribValueEndsAt: 11,
            attribStarts: 6,
            attribEnds: 12,
            attribLeft: 4,
          },
          {
            attribName: "style",
            attribNameRecognised: true,
            attribNameStartsAt: 13,
            attribNameEndsAt: 18,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValueRaw: null,
            attribValue: [],
            attribValueStartsAt: null,
            attribValueEndsAt: null,
            attribStarts: 13,
            attribEnds: 18,
            attribLeft: 11,
          },
        ],
      },
    ],
    "05"
  );
  t.end();
});

tap.test(`06 - abrupty ended code`, (t) => {
  const gathered = [];
  ct(`<body id="l" style="`, {
    tagCb: (obj) => {
      gathered.push(obj);
    },
  });
  t.match(
    gathered,
    [
      {
        type: "tag",
        start: 0,
        end: 20,
        value: '<body id="l" style="',
        tagNameStartsAt: 1,
        tagNameEndsAt: 5,
        tagName: "body",
        recognised: true,
        closing: false,
        void: false,
        pureHTML: true,
        kind: null,
        attribs: [
          {
            attribName: "id",
            attribNameRecognised: true,
            attribNameStartsAt: 6,
            attribNameEndsAt: 8,
            attribOpeningQuoteAt: 9,
            attribClosingQuoteAt: 11,
            attribValueRaw: "l",
            attribValue: [
              {
                type: "text",
                start: 10,
                end: 11,
                value: "l",
              },
            ],
            attribValueStartsAt: 10,
            attribValueEndsAt: 11,
            attribStarts: 6,
            attribEnds: 12,
            attribLeft: 4,
          },
          {
            attribName: "style",
            attribNameRecognised: true,
            attribNameStartsAt: 13,
            attribNameEndsAt: 18,
            attribOpeningQuoteAt: 19,
            attribClosingQuoteAt: null,
            attribValueRaw: null,
            attribValue: [],
            attribValueStartsAt: null,
            attribValueEndsAt: null,
            attribStarts: 13,
            attribEnds: 20,
            attribLeft: 11,
          },
        ],
      },
    ],
    "06"
  );
  t.end();
});

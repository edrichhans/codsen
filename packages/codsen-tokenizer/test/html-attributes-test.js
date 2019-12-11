const t = require("tap");
const ct = require("../dist/codsen-tokenizer.cjs");

// 01. basic - double quoted attributes
// -----------------------------------------------------------------------------

t.test(t => {
  const gathered = [];
  ct(`<a b="c" d='e'>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 15,
        attribs: [
          {
            attribName: "b",
            attribNameStartAt: 3,
            attribNameEndAt: 4,
            attribOpeningQuoteAt: 5,
            attribClosingQuoteAt: 7,
            attribValue: "c",
            attribValueStartAt: 6,
            attribValueEndAt: 7,
            attribStart: 3,
            attribEnd: 8
          },
          {
            attribName: "d",
            attribNameStartAt: 9,
            attribNameEndAt: 10,
            attribOpeningQuoteAt: 11,
            attribClosingQuoteAt: 13,
            attribValue: "e",
            attribValueStartAt: 12,
            attribValueEndAt: 13,
            attribStart: 9,
            attribEnd: 14
          }
        ]
      }
    ],
    `01.01 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - single- and double-quoted attr`
  );
  t.end();
});

t.test(t => {
  const gathered = [];
  ct(`<td nowrap class="z">`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 21,
        attribs: [
          {
            attribName: "nowrap",
            attribNameStartAt: 4,
            attribNameEndAt: 10,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 4,
            attribEnd: 10
          },
          {
            attribName: "class",
            attribNameStartAt: 11,
            attribNameEndAt: 16,
            attribOpeningQuoteAt: 17,
            attribClosingQuoteAt: 19,
            attribValue: "z",
            attribValueStartAt: 18,
            attribValueEndAt: 19,
            attribStart: 11,
            attribEnd: 20
          }
        ]
      }
    ],
    `01.02 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - value-less attribute`
  );
  t.end();
});

t.test(t => {
  const gathered = [];
  ct(`</td>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        tagNameStartAt: 2,
        tagNameEndAt: 4,
        tagName: "td",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 5,
        tail: null,
        kind: null,
        attribs: []
      }
    ],
    `01.03 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - a closing tag`
  );
  t.end();
});

// space inside tag
t.test(t => {
  const gathered = [];
  ct(`</td >`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        tagNameStartAt: 2,
        tagNameEndAt: 4,
        tagName: "td",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 6,
        tail: null,
        kind: null,
        attribs: []
      }
    ],
    `01.04 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - a closing tag`
  );
  t.end();
});

// TODO
// t.test(t => {
//   const gathered = [];
//   ct(`<td{% if something %} class="z"{% endif %} id="y">`, obj => {
//     gathered.push(obj);
//   });
//
//   t.match(
//     gathered,
//     [
//       {
//         type: "html",
//         start: 0,
//         end: 50,
//         attribs: [
//           {
//             parent: {
//               type: "esp",
//               start: 3,
//               end: 42,
//               ranges: [
//                 [3, 21],
//                 [31, 42]
//               ],
//               value: `{% if something %} class="z"{% endif %}`
//             },
//             attribName: "class",
//             attribNameStartAt: 22,
//             attribNameEndAt: 27,
//             attribOpeningQuoteAt: 28,
//             attribClosingQuoteAt: 30,
//             attribValue: "z",
//             attribValueStartAt: 29,
//             attribValueEndAt: 30,
//             attribStart: 22,
//             attribEnd: 31
//           },
//           {
//             parent: null,
//             attribName: "id",
//             attribNameStartAt: 43,
//             attribNameEndAt: 45,
//             attribOpeningQuoteAt: 46,
//             attribClosingQuoteAt: 48,
//             attribValue: "y",
//             attribValueStartAt: 47,
//             attribValueEndAt: 48,
//             attribStart: 43,
//             attribEnd: 49
//           }
//         ]
//       }
//     ],
//     `01.03 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - Nunjucks conditional class`
//   );
//   t.end();
// });

// 02. broken
// -----------------------------------------------------------------------------

t.test(t => {
  const gathered = [];
  ct(`<a b"c" d'e'>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 13,
        attribs: [
          {
            attribName: "b",
            attribNameStartAt: 3,
            attribNameEndAt: 4,
            attribOpeningQuoteAt: 4,
            attribClosingQuoteAt: 6,
            attribValue: "c",
            attribValueStartAt: 5,
            attribValueEndAt: 6,
            attribStart: 3,
            attribEnd: 7
          },
          {
            attribName: "d",
            attribNameStartAt: 8,
            attribNameEndAt: 9,
            attribOpeningQuoteAt: 9,
            attribClosingQuoteAt: 11,
            attribValue: "e",
            attribValueStartAt: 10,
            attribValueEndAt: 11,
            attribStart: 8,
            attribEnd: 12
          }
        ]
      }
    ],
    `02.01 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - no equals but quotes present`
  );
  t.end();
});

// TODO
// t.test(t => {
//   const gathered = [];
//   ct(`<a b=c" d=e'>`, obj => {
//     gathered.push(obj);
//   });
//
//   t.match(
//     gathered,
//     [
//       {
//         type: "html",
//         start: 0,
//         end: 13,
//         attribs: [
//           {
//             attribName: "b",
//             attribNameStartAt: 3,
//             attribNameEndAt: 4,
//             attribOpeningQuoteAt: 5,
//             attribClosingQuoteAt: 7,
//             attribValue: "c",
//             attribValueStartAt: 6,
//             attribValueEndAt: 7,
//             attribStart: 3,
//             attribEnd: 8
//           },
//           {
//             attribName: "d",
//             attribNameStartAt: 9,
//             attribNameEndAt: 10,
//             attribOpeningQuoteAt: 11,
//             attribClosingQuoteAt: 13,
//             attribValue: "e",
//             attribValueStartAt: 12,
//             attribValueEndAt: 13,
//             attribStart: 9,
//             attribEnd: 14
//           }
//         ]
//       }
//     ],
//     `02.02 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - no opening quotes but equals present`
//   );
//   t.end();
// });

t.test(t => {
  const gathered = [];
  ct(`<a b=="c" d=='e'>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 17,
        attribs: [
          {
            attribName: "b",
            attribNameStartAt: 3,
            attribNameEndAt: 4,
            attribOpeningQuoteAt: 6,
            attribClosingQuoteAt: 8,
            attribValue: "c",
            attribValueStartAt: 7,
            attribValueEndAt: 8,
            attribStart: 3,
            attribEnd: 9
          },
          {
            attribName: "d",
            attribNameStartAt: 10,
            attribNameEndAt: 11,
            attribOpeningQuoteAt: 13,
            attribClosingQuoteAt: 15,
            attribValue: "e",
            attribValueStartAt: 14,
            attribValueEndAt: 15,
            attribStart: 10,
            attribEnd: 16
          }
        ]
      }
    ],
    `02.03 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - two equals`
  );
  t.end();
});

// 03. bool attributes
// -----------------------------------------------------------------------------

t.test(t => {
  const gathered = [];
  ct(`<td nowrap>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        tagNameStartAt: 1,
        tagNameEndAt: 3,
        tagName: "td",
        recognised: true,
        closing: false,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 11,
        tail: null,
        kind: null,
        attribs: [
          {
            attribName: "nowrap",
            attribNameStartAt: 4,
            attribNameEndAt: 10,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 4,
            attribEnd: 10
          }
        ]
      }
    ],
    `03.01`
  );
  t.end();
});

// slash in the end
t.test(t => {
  const gathered = [];
  ct(`<td nowrap/>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        tagNameStartAt: 1,
        tagNameEndAt: 3,
        tagName: "td",
        recognised: true,
        closing: false,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 12,
        tail: null,
        kind: null,
        attribs: [
          {
            attribName: "nowrap",
            attribNameStartAt: 4,
            attribNameEndAt: 10,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 4,
            attribEnd: 10
          }
        ]
      }
    ],
    `03.02`
  );
  t.end();
});

// slash in front
t.test(t => {
  const gathered = [];
  ct(`</td nowrap>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        tagNameStartAt: 2,
        tagNameEndAt: 4,
        tagName: "td",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 12,
        tail: null,
        kind: null,
        attribs: [
          {
            attribName: "nowrap",
            attribNameStartAt: 5,
            attribNameEndAt: 11,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 5,
            attribEnd: 11
          }
        ]
      }
    ],
    `03.03`
  );
  t.end();
});

// now crazier
t.only(t => {
  const gathered = [];
  ct(`</td nowrap yo yo/>`, obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        tagNameStartAt: 2,
        tagNameEndAt: 4,
        tagName: "td",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 19,
        tail: null,
        kind: null,
        attribs: [
          {
            attribName: "nowrap",
            attribNameStartAt: 5,
            attribNameEndAt: 11,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 5,
            attribEnd: 11
          },
          {
            attribName: "yo",
            attribNameStartAt: 12,
            attribNameEndAt: 14,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 12,
            attribEnd: 14
          },
          {
            attribName: "yo",
            attribNameStartAt: 15,
            attribNameEndAt: 17,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 15,
            attribEnd: 17
          }
        ]
      }
    ],
    `03.04`
  );
  t.end();
});

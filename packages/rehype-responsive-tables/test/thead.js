import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { rehype } from "rehype";
import rehypeFormat from "rehype-format";
import rehypeResponsiveTables from "../dist/rehype-responsive-tables.esm.js";

// -----------------------------------------------------------------------------

test(`06 - thead, 2x3`, () => {
  let input = `
<table>
  <thead>
    <tr>
      <th>Foo</th>
      <th>Bar</th>
      <th>Baz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>a</td>
      <td>b</td>
      <td>c</td>
    </tr>
    <tr>
      <td>x</td>
      <td>y</td>
      <td>z</td>
    </tr>
  </tbody>
</table>
`;

  let intended = `
<table class="rrt-table">
  <thead>
    <tr>
      <th class="rrt-del-td">Foo</th>
      <th>Bar</th>
      <th>Baz</th>
    </tr>
  </thead>
  <tbody>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td colspan="2"><span class="rrt-new-tr-span">a</span></td>
    </tr>
    <tr>
      <td class="rrt-del-td">a</td>
      <td>b</td>
      <td>c</td>
    </tr>
    <tr class="rrt-gap-tr">
      <td class="rrt-del-td"></td>
      <td colspan="2"></td>
    </tr>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td colspan="2"><span class="rrt-new-tr-span">x</span></td>
    </tr>
    <tr>
      <td class="rrt-del-td">x</td>
      <td>y</td>
      <td>z</td>
    </tr>
  </tbody>
</table>
`;

  let res = rehype()
    .data("settings", { fragment: true })
    .use(rehypeResponsiveTables)
    .use(rehypeFormat)
    .processSync(input)
    .toString();

  equal(res, intended, "06");
});

test(`07 - empty thead, 2x2`, () => {
  let input = `
<table>
  <thead></thead>
  <tbody>
    <tr>
      <td>a</td>
      <td>b</td>
    </tr>
    <tr>
      <td>x</td>
      <td>y</td>
    </tr>
  </tbody>
</table>
`;

  let intended = `
<table class="rrt-table">
  <thead></thead>
  <tbody>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td><span class="rrt-new-tr-span">a</span></td>
    </tr>
    <tr>
      <td class="rrt-del-td">a</td>
      <td>b</td>
    </tr>
    <tr class="rrt-gap-tr">
      <td class="rrt-del-td"></td>
      <td></td>
    </tr>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td><span class="rrt-new-tr-span">x</span></td>
    </tr>
    <tr>
      <td class="rrt-del-td">x</td>
      <td>y</td>
    </tr>
  </tbody>
</table>
`;

  let res = rehype()
    .data("settings", { fragment: true })
    .use(rehypeResponsiveTables)
    .use(rehypeFormat)
    .processSync(input)
    .toString();

  equal(res, intended, "07");
});

test(`08 - empty thead tr, 2x2`, () => {
  let input = `
<table>
  <thead>
    <tr></tr>
  </thead>
  <tbody>
    <tr>
      <td>a</td>
      <td>b</td>
    </tr>
    <tr>
      <td>x</td>
      <td>y</td>
    </tr>
  </tbody>
</table>
`;

  let intended = `
<table class="rrt-table">
  <thead>
    <tr></tr>
  </thead>
  <tbody>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td><span class="rrt-new-tr-span">a</span></td>
    </tr>
    <tr>
      <td class="rrt-del-td">a</td>
      <td>b</td>
    </tr>
    <tr class="rrt-gap-tr">
      <td class="rrt-del-td"></td>
      <td></td>
    </tr>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td><span class="rrt-new-tr-span">x</span></td>
    </tr>
    <tr>
      <td class="rrt-del-td">x</td>
      <td>y</td>
    </tr>
  </tbody>
</table>
`;

  let res = rehype()
    .data("settings", { fragment: true })
    .use(rehypeResponsiveTables)
    .use(rehypeFormat)
    .processSync(input)
    .toString();

  equal(res, intended, "08");
});

test(`11 - thead, td with children`, () => {
  let input = `
<table>
  <thead>
    <tr>
      <th>
        Foo
      </th>
      <th>




      Bar
      </th>
      <th>Baz           </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        a
      </td>
      <td>
                  b
      </td>
      <td>   c   </td>
    </tr>
    <tr>
      <td>
        <code>x</code> y <code>z</code>
      </td>
      <td>
        o
      </td>
      <td>
        i
      </td>
    </tr>
  </tbody>
</table>
`;

  let intended = `
<table class="rrt-table">
  <thead>
    <tr>
      <th class="rrt-del-td">Foo</th>
      <th>Bar</th>
      <th>Baz</th>
    </tr>
  </thead>
  <tbody>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td colspan="2"><span class="rrt-new-tr-span">a</span></td>
    </tr>
    <tr>
      <td class="rrt-del-td">a</td>
      <td>b</td>
      <td>c</td>
    </tr>
    <tr class="rrt-gap-tr">
      <td class="rrt-del-td"></td>
      <td colspan="2"></td>
    </tr>
    <tr class="rrt-new-tr">
      <td class="rrt-del-td"></td>
      <td colspan="2"><span class="rrt-new-tr-span"><code>x</code> y <code>z</code></span></td>
    </tr>
    <tr>
      <td class="rrt-del-td"><code>x</code> y <code>z</code></td>
      <td>o</td>
      <td>i</td>
    </tr>
  </tbody>
</table>
`;

  let res = rehype()
    .data("settings", { fragment: true })
    .use(rehypeResponsiveTables)
    .use(rehypeFormat)
    .processSync(input)
    .toString();

  equal(res, intended, "11");
});

test.run();

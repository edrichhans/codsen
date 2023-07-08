import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { alts } from "../dist/html-img-alt.esm.js";

// gap between slash and closing bracket
// -----------------------------------------------------------------------------

test("01 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt=""    /    >zzz'),
    'zzz<img alt="" />zzz',
    "01.01",
  );
});

test("02 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt    =""    /    >zzz'),
    'zzz<img alt="" />zzz',
    "02.01",
  );
});

test("03 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt    =    ""    /    >zzz'),
    'zzz<img alt="" />zzz',
    "03.01",
  );
});

test("04 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt    =    ""/    >zzz'),
    'zzz<img alt="" />zzz',
    "04.01",
  );
});

test("05 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt="   "    /    >zzz'),
    'zzz<img alt="" />zzz',
    "05.01",
  );
});

test("06 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt    ="   "    /    >zzz'),
    'zzz<img alt="" />zzz',
    "06.01",
  );
});

test("07 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt    =    "   "    /    >zzz'),
    'zzz<img alt="" />zzz',
    "07.01",
  );
});

test("08 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt    =    "   "/    >zzz'),
    'zzz<img alt="" />zzz',
    "08.01",
  );
});

test("09 - alt with two double quotes, many spaces between slash & bracket, XHTML", () => {
  equal(
    alts('zzz<img     alt    =    "   "/    >zzz'),
    'zzz<img alt="" />zzz',
    "09.01",
  );
});

test.run();

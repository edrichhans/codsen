import tap from "tap";
import alt from "../dist/html-img-alt.esm";

// alt with only one double quote, one XHTML tag
// -----------------------------------------------------------------------------

tap.test("01 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt="/>zzz'), 'zzz<img alt="" />zzz', "01");
  t.end();
});

tap.test("02 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt ="/>zzz'), 'zzz<img alt="" />zzz', "02");
  t.end();
});

tap.test("03 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt= "/>zzz'), 'zzz<img alt="" />zzz', "03");
  t.end();
});

tap.test("04 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt=" />zzz'), 'zzz<img alt="" />zzz', "04");
  t.end();
});

tap.test("05 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt   ="/>zzz'), 'zzz<img alt="" />zzz', "05");
  t.end();
});

tap.test("06 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt\n="/>zzz'), 'zzz<img alt="" />zzz', "06");
  t.end();
});

tap.test("07 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt="   />zzz'), 'zzz<img alt="" />zzz', "07");
  t.end();
});

tap.test("08 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(alt('zzz<img alt   ="   />zzz'), 'zzz<img alt="" />zzz', "08");
  t.end();
});

tap.test("09 - alt with only one double quote, one XHTML tag", (t) => {
  t.strictSame(
    alt('<img alt="legit quote: \'" />'),
    '<img alt="legit quote: \'" />',
    "09"
  );
  t.end();
});

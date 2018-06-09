/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

require('usnam-pmb');
var notsep = require('../ts.js'), assert = require('assert');

function t(x, want, y) {
  try {
    y = notsep(x);
  } catch (e) {
    y = String(e.message || e);
  }
  if (want) {
    if (want.test && want.test(y)) { return; }
    if (want.substr) { want = 'Invalid duration: ' + want; }
  }
  assert.strictEqual(y, want);
}


t('1.002', /no time unit/i);
t('1,002', /no time unit/i);
t('1,002 min', /comma/i);
t('1.002 min', 60.12);
t('0.002 min', 0.12);
t('0,002 min', /comma/i);
t(',002 min', /comma/i);
t('1 hour,2 min', /comma/i);
t('1 hour, 2 min', 3720);
t('.002 min', 0.12);
t('123.456.789 min', /one decimal point/i);

















console.log("+OK tests passed.");   //= "+OK tests passed."

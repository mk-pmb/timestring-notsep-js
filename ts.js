/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
module.exports = (function () {
  var ts = require('timestring');
  function inval(x, why) {
    var err = new Error('Invalid duration: ' + why);
    err.name = 'InvalidDuration';
    err.invalid = why;
    err.spec = x;
    throw err;
  }
  function parseTimeStringNoTSep(x) {
    x = String(x || '');
    if (!/[a-z]/.test(x)) { inval(x, 'Found no time unit'); }
    if (!/\d/.test(x)) { inval(x, 'Found no number'); }
    if (/,\d/.test(x)) { inval(x, 'Comma directly preceding a number'); }
    if (/\.\d*\./.test(x)) {
      inval(x, 'Number can have at most one decimal point');
    }
    return ts(x);
  }
  return parseTimeStringNoTSep;
}());

/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
module.exports = (function () {
  var ts = require('timestring');
  function inval(why) { throw new Error('Invalid duration: ' + why); }
  function parseTimeStringNoTSep(x) {
    if (!/\d/.test(x)) { inval('Found no number'); }
    if (!/[a-z]/.test(x)) { inval('Found no time unit'); }
    if (/,\d/.test(x)) { inval('Comma directly preceding a number'); }
    if (/\.\d*\./.test(x)) { inval('Number can only have one decimal point'); }
    return ts(x);
  }
  return parseTimeStringNoTSep;
}());

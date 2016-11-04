'use strict';
const moment = require('moment');

module.exports = function(toParse) {
  const formats = [
    'X',
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMM YYYY',
    'D YYYY MMMM',
    'D YYYY MMM'
    ];
  const date = moment(toParse, formats, true);

  if (date.isValid()) {
    return {
      unix: Number(date.format('X')),
      natural: date.format('MMMM D, YYYY')
    };
  }

  return {
    unix: null,
    natural: null
  };
};

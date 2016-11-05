'use strict';
const expect = require('chai').expect;
const timestamp = require('../app/timestamp');

describe('Timestamp', function() {
  const nullOutput = {
    unix: null,
    natural: null
  };
  const validOutput = {
    unix: 1478217600,
    natural: 'November 4, 2016'
  };
  describe('From natural date', function() {
    it('should accept a date that contains a month, day, and year', function() {
      expect(timestamp('November 4, 2016')).to.deep.equal(validOutput);
      expect(timestamp('November 4 2016')).to.deep.equal(validOutput);
      expect(timestamp('Nov 4 2016')).to.deep.equal(validOutput);
      expect(timestamp('4 Nov 2016')).to.deep.equal(validOutput);
      expect(timestamp('4 2016 Nov')).to.deep.equal(validOutput);
    });
    it('should reject an incomplete date', function() {
      expect(timestamp('November 4')).to.deep.equal(nullOutput);
      expect(timestamp('November 2016')).to.deep.equal(nullOutput);
      expect(timestamp('Nov 2016')).to.deep.equal(nullOutput);
      expect(timestamp('11 2016')).to.deep.equal(nullOutput);
    });
    it('should reject an invalid date', function() {
      expect(timestamp('feb 29 2015')).to.deep.equal(nullOutput);
      expect(timestamp('rubbish 20 2016')).to.deep.equal(nullOutput);
      expect(timestamp('more rubbish')).to.deep.equal(nullOutput);
    });
  });
  describe('From Unix time', function() {
    it('should accept an integer', function() {
      expect(timestamp(1478217600)).to.deep.equal(validOutput);
      expect(timestamp(0)).to.deep.equal({
        unix: 0,
        natural: 'January 1, 1970'
      });
      expect(timestamp(-1)).to.deep.equal({
        unix: -1,
        natural: 'December 31, 1969'
      });
    });
  });
});

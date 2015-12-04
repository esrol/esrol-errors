'use strict';
let expect = require('chai').expect;
let Err = require('../lib/errors.js');
let errors = new Err();

describe('Errors', () => {

  describe('Register Success...', () => {

    describe('Set error with number and description', () => {
      it('Should return true', () => {
        expect(errors.registerErrorWithNumber('Some message', 1)).to.equal(true);
      });
    });

    describe('Get error message by error number', () => {

      it('Should return "Some message"', () => {
        expect(errors.getByNumber(1)).to.equal('Some message');
      });

      it('Should return "Message"', () => {
        errors.registerErrorWithNumber('Message', 2);
        expect(errors.getByNumber(2)).to.equal('Message');
      });

    });

    describe('Get all registered errors with numbers and descriptions', () => {
      let should = `Should have two keys: "1" and "2" with
          value: "Some message" and "Message"`;
      it(should, () => {
        let result = errors.getAllErrors();
        expect(result).to.have.all.keys('1', '2');
        expect(result[1]).to.equal('Some message');
        expect(result[2]).to.equal('Message');
      });
    });

  });

  describe('Errors Success...', () => {

    it('Should throw an error', () => {
      expect(() => { errors.error('Success', 1); }).to.throw(Error);
    });

    it('Should throw an error with message "Success" and number "1"', () => {
      try {
        errors.error('Success', 1);
      } catch(e) {
        expect(e.code).to.equal(1);
        expect(e.message).to.equal('Success');
        expect(e.explanation).to.equal('Some message');
      }
    });

    it('Should throw an error with message "Success #2" and number "2"', () => {
      try {
        errors.error('Success #2', 2);
      } catch(e) {
        expect(e.code).to.equal(2);
        expect(e.message).to.equal('Success #2');
        expect(e.explanation).to.equal('Message');
      }
    });

  });

  let should = 'Throw an error';

  describe('Register Fail...', () => {

    describe('Register the same number twice', () => {
      it(should, () => {
        expect(() => {
          errors.registerErrorWithNumber('message', 1);
        }).to.throw(Error);
      });
    });

    describe('When registerErrorWithNumber with non number', () => {
      it(should, () => {
        expect(() => {
          errors.registerErrorWithNumber('message', 2.3);
        }).to.throw(Error);
      });
    });

    describe('When registerErrorWithNumber without description', () => {
      it(should, () => {
        expect(() => {
          errors.registerErrorWithNumber(5);
        }).to.throw(Error);
      });
    });

  });

});
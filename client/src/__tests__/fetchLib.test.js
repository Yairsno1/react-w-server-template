import fetch from 'cross-fetch';
import {fetchJsonGet} from '../util/fetchLib';

jest.mock('cross-fetch');

test ("fetchJsonGet_OK", done => {
  const expectedOperands = {
    left: 3,
    right: 6
  };

  fetch.mockImplementation(() => Promise.resolve({ok:true, json: ()=>expectedOperands}));

  const successHandler = (results) => {
    try {
      expect(results).toEqual(expectedOperands);
      done();
    } catch (e) {
      done.fail();
    }
  };

  fetchJsonGet('q/Add', successHandler, ()=>{});
});

test ("fetchJsonGet_ERR", done => {
  const expectedErrText = 'Bad url';
  fetch.mockImplementation(() => Promise.resolve({
    ok:false,
    json: ()=>{},
    statusText:expectedErrText
  }));

  const errorHandler = (error) => {
    try {
      expect(error.message).toEqual(expectedErrText);
      done();
    } catch (e) {
      done.fail();
    }
  };

  fetchJsonGet('q/Add', ()=>{}, errorHandler);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {WaitCtrl, QCtrl} from '../view/activityArea/exprCtrl';

let handleReceiveQ = undefined;

beforeAll ( () => {
  handleReceiveQ = jest.fn();
});

//=====================================================
//  We don't need both smoke test of course, we use both
//just for reference and as an example.

//Smoke test
it('WaitCtrl_rendersWithoutCrashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WaitCtrl receiveQ={handleReceiveQ}/>, div);
});

//Smoke test using Enzyme
it('WaitCtrl_rendersWithoutCrashing (using Enzyme)', () => {
  shallow(<WaitCtrl receiveQ={handleReceiveQ}/>);
});
//=====================================================

//Take a snapshot
it('WaitCtrl_snapshot', () => {
  const waitCtrlComp = renderer.create(<WaitCtrl receiveQ={()=>{}}/>);
  let actualWaitCtrl = waitCtrlComp.toJSON();

  expect(actualWaitCtrl).toMatchSnapshot();
});

it('WaitCtrl_receiveQInitiated', () => {
  shallow(<WaitCtrl receiveQ={handleReceiveQ}/>);

  expect(handleReceiveQ).toHaveBeenCalled();
});

describe('QCtrl', () => {

  it('QCtrl_rendersWithoutCrashing', () => {
    shallow(<QCtrl text={"1 + 1 = ?"}/>);
  });

  it('QCtrl_snapshot', () => {
    const qCtrlComp = renderer.create(<QCtrl text={"1 + 1 = ?"}/>);
    let actualQCtrl = qCtrlComp.toJSON();

    expect(actualQCtrl).toMatchSnapshot();
  });

  it('QCtrl_propText', () => {
    const expectedText = '2 + 2 = ?';
    let actualText = '';

    const qCtrlComp = shallow(<QCtrl text={expectedText}/>);
    const p = qCtrlComp.find('p');

    actualText = p.text();

    expect(actualText).toEqual(expectedText);
  });

});


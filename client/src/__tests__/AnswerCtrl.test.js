import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AnswerCtrl from '../view/activityArea/AnswerCtrl';

let m_props;

beforeEach( () => {
  m_props = {
    submitBtnColor: 'red',
    submitAnswer: jest.fn(),
  };
  m_props.submitAnswer.mockReset();
});

it('AnswerCtrl_rendersWithoutCrashing', () => {
  mount(<AnswerCtrl {...m_props}/>);
});

it('AnswerCtrl_snapshot', () => {
  const answerCtrlComp = renderer.create(<AnswerCtrl {...m_props}/>);

  let actualAnswerCtrlComp = answerCtrlComp.toJSON();

  expect(actualAnswerCtrlComp).toMatchSnapshot();
});

it('AnswerCtrl_submitBtnTextColor', () => {
  const expectedTextColor = 'w3-text-' + m_props.submitBtnColor;

  const answerCtrlComp = shallow(<AnswerCtrl {...m_props}/>);

  const actualBtn = answerCtrlComp.find('button');

  expect(actualBtn).toHaveClassName(expectedTextColor);
});

it('AnswerCtrl_notSpinningOnMount', () => {
  const expectedSpinClass = 'w3-spin'

  const answerCtrlComp = shallow(<AnswerCtrl {...m_props}/>);

  const actualSppiner = answerCtrlComp.find('span');

  expect(actualSppiner).not.toHaveClassName(expectedSpinClass);
});

it('AnswerCtrl_emptyInputOnMount', () => {
  const expectedVal = '';

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const actualVal = answerCtrlComp.find('input').instance().value;

  expect(actualVal).toEqual(expectedVal);
});

it('AnswerCtrl_invalidInput', () => {
  const expectedVal = '';

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const input = answerCtrlComp.find('input');
  input.simulate('change', {
    target: {
      value: 'This is not a valid number',
    }
   });
  const actualVal = input.instance().value;

  expect(actualVal).toEqual(expectedVal);
});

it('AnswerCtrl_validInput', () => {
  const expectedVal = 100;

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const input = answerCtrlComp.find('input');
  input.simulate('change', {
    target: {
      value: expectedVal.toString(),
    }
  });
  const actualVal = Number(input.instance().value);

  expect(actualVal).toEqual(expectedVal);
});

it('AnswerCtrl_submit_validInput', () => {
  const answer = 100;

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const input = answerCtrlComp.find('input');
  input.simulate('change', {
    target: {
      value: answer.toString(),
    }
  });
  answerCtrlComp.find('form').simulate('submit');

  expect(m_props.submitAnswer).toHaveBeenCalled();
});

it('AnswerCtrl_submit_spinner_validInput', () => {
  const expectedSpinClass = 'w3-spin';
  const answer = 100;

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const input = answerCtrlComp.find('input');
  input.simulate('change', {
    target: {
      value: answer.toString(),
    }
  });
  answerCtrlComp.find('form').simulate('submit');

  const actualSppiner = answerCtrlComp.find('span');

  expect(actualSppiner).toHaveClassName(expectedSpinClass);
});

it('AnswerCtrl_submit_invalidInput', () => {
  const answer = '10z';

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const input = answerCtrlComp.find('input');
  input.simulate('change', {
    target: {
      value: answer.toString(),
    }
  });
  answerCtrlComp.find('form').simulate('submit');

  expect(m_props.submitAnswer).not.toHaveBeenCalled();
});

it('AnswerCtrl_submit_spinner_invalidInput', () => {
  const expectedSpinClass = 'w3-spin';
  const answer = '10z';

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const input = answerCtrlComp.find('input');
  input.simulate('change', {
    target: {
      value: answer.toString(),
    }
  });
  answerCtrlComp.find('form').simulate('submit');

  const actualSppiner = answerCtrlComp.find('span');

  expect(actualSppiner).not.toHaveClassName(expectedSpinClass);
});

it('AnswerCtrl_submit_submittedAnswer', () => {
  const expectedAnswer = 100;

  const answerCtrlComp = mount(<AnswerCtrl {...m_props}/>);

  const input = answerCtrlComp.find('input');
  input.simulate('change', {
    target: {
      value: expectedAnswer.toString(),
    }
  });
  answerCtrlComp.find('form').simulate('submit');

  expect(m_props.submitAnswer).lastCalledWith(expectedAnswer); // ≡ expect(m_props.submitAnswer.mock.calls[0][0]).toEqual(expectedAnswer);
});


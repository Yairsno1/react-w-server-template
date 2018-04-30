//Testing React component that compose children props
//Jest-Enzyme matchers
//https://github.com/FormidableLabs/enzyme-matchers/blob/master/README.md

import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AbsSidebarOptionButton from '../view/sidebar/AbsSidebarOptionButton';

let m_color;
let m_pText;
let m_children;

beforeAll(() => {
  m_color = 'red';
  m_pText = 'Woodoo child';
  m_children = <p>{m_pText}</p>;
});

it('AbsSidebarOptionButton_rendersWithoutCrashing', () => {
  shallow(
    <AbsSidebarOptionButton textColor={m_color}>
      {m_children}
    </AbsSidebarOptionButton>
  );
});

it('AbsSidebarOptionButton_snapshot', () => {
  const btn = renderer.create(
    <AbsSidebarOptionButton textColor={m_color}>
      {m_children}
    </AbsSidebarOptionButton>
  );
  let actualBtn = btn.toJSON();

  expect(actualBtn).toMatchSnapshot();
});

it('AbsSidebarOptionButton_textColor', () => {
  const expectedTextColor = 'w3-text-' + m_color;

  const optionBtn = shallow(
    <AbsSidebarOptionButton textColor={m_color}>
      {m_children}
    </AbsSidebarOptionButton>
  );

  const actualDOMBtn = optionBtn.find('button');

  expect(actualDOMBtn).toHaveClassName(expectedTextColor);
});

it('AbsSidebarOptionButton_hoverColor', () => {
  const expectedHoverColor = 'w3-hover-' + m_color;

  const optionBtn = shallow(
    <AbsSidebarOptionButton textColor={m_color}>
      {m_children}
    </AbsSidebarOptionButton>
  );

  const actualDOMBtn = optionBtn.find('button');

  expect(actualDOMBtn).toHaveClassName(expectedHoverColor);
});

it('AbsSidebarOptionButton_children', () => {
  const expectedChildren = m_children;

  const optionBtn = mount(
    <AbsSidebarOptionButton textColor={m_color}>
      {m_children}
    </AbsSidebarOptionButton>
  );

  expect(optionBtn).toContainReact(expectedChildren);
});

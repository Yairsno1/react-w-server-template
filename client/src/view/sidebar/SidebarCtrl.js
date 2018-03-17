import React, {Component} from 'react';
import SidebarOption from './SidebarOption';
import SidebarOptionIconButton from './SidebarOptionIconButton';
import SidebarOptionText from './SidebarOptionText';
import SidebarOptionTextButton from './SidebarOptionTextButton';
import sidebarOptionEnum from './sidebarOptionEnum';

const colors = {
  home: 'white',
  plus: 'green',
  minus: 'deep-orange',
  multiply: 'blue',
  divide: 'yellow',
};

const optionCtrls = {
  home: {
    color: colors.home,
    btn: (
      <SidebarOptionIconButton content={'fa fa-home'} iconColor={colors.home}>
      </SidebarOptionIconButton>
    ),
    txt: (
      <SidebarOptionText value={'ראשי'} color={colors.home}>
      </SidebarOptionText>
    ),
  },
  plus: {
    color: colors.plus,
    btn: (
      <SidebarOptionTextButton content="&#43;" textColor={colors.plus}>
      </SidebarOptionTextButton>
    ),
    txt: (
      <SidebarOptionText value={'חיבור'} color={colors.plus}>
      </SidebarOptionText>
    ),
  },
  minus: {
    color: colors.minus,
    btn: (
      <SidebarOptionTextButton content="&#8722;" textColor={colors.minus}>
      </SidebarOptionTextButton>
    ),
    txt: (
      <SidebarOptionText value={'חיסור'} color={colors.minus}>
      </SidebarOptionText>
    ),
  },
  multiply: {
    color: colors.multiply,
    btn: (
      <SidebarOptionTextButton content="&#215;" textColor={colors.multiply}>
      </SidebarOptionTextButton>
    ),
    txt: (
      <SidebarOptionText value={'כפל'} color={colors.multiply}>
      </SidebarOptionText>
    ),
  },
  divide: {
    color: colors.divide,
    btn: (
      <SidebarOptionTextButton content="&#247;" textColor={colors.divide}>
      </SidebarOptionTextButton>
    ),
    txt: (
      <SidebarOptionText value={'חילוק'} color={colors.divide}>
      </SidebarOptionText>
    ),
  },
};

class SidebarCtrl extends Component {
  render () {
    const selectedOption = this.props.selected;

    return (
      <div className="w3-sidebar w3-bar-block w3-col s3 m2 l1 w3-black">
        <SidebarOption
          isSelected={sidebarOptionEnum.idle === selectedOption}
          color={optionCtrls.home.color}
          theBtn={optionCtrls.home.btn}
          theTxt={optionCtrls.home.txt}>
        </SidebarOption>
        <SidebarOption
          isSelected={sidebarOptionEnum.add === selectedOption}
          color={optionCtrls.plus.color}
          theBtn={optionCtrls.plus.btn}
          theTxt={optionCtrls.plus.txt}>
        </SidebarOption>
        <SidebarOption
          isSelected={sidebarOptionEnum.minus === selectedOption}
          color={optionCtrls.minus.color}
          theBtn={optionCtrls.minus.btn}
          theTxt={optionCtrls.minus.txt}>
        </SidebarOption>
        <SidebarOption
          isSelected={sidebarOptionEnum.multiply === selectedOption}
          color={optionCtrls.multiply.color}
          theBtn={optionCtrls.multiply.btn}
          theTxt={optionCtrls.multiply.txt}>
        </SidebarOption>
        <SidebarOption
          isSelected={sidebarOptionEnum.divide === selectedOption}
          color={optionCtrls.divide.color}
          theBtn={optionCtrls.divide.btn}
          theTxt={optionCtrls.divide.txt}>
        </SidebarOption>
      </div>
    );
  }
}

export default SidebarCtrl;

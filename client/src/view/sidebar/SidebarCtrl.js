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

class SidebarCtrl extends Component {
  render () {
    const selectedOption = this.props.selected;

    return (
      <div className="w3-sidebar w3-bar-block w3-col s3 m2 l1 w3-black">
        <SidebarOption
          isSelected={sidebarOptionEnum.idle === selectedOption}
          color={colors.home}
          theBtn={
            <SidebarOptionIconButton
              content={'fa fa-home'}
              iconColor={colors.home}
              onSelected={() => this.props.onOptionSelected(sidebarOptionEnum.idle)}
            >
            </SidebarOptionIconButton>
          }
          theTxt={
            <SidebarOptionText value={'ראשי'} color={colors.home} />
          }
        >
        </SidebarOption>

        <SidebarOption
          isSelected={sidebarOptionEnum.add === selectedOption}
          color={colors.plus}
          theBtn={
            <SidebarOptionTextButton
              content="&#43;"
              textColor={colors.plus}
              onSelected={() => this.props.onOptionSelected(sidebarOptionEnum.add)}
            >
            </SidebarOptionTextButton>
          }
          theTxt={
            <SidebarOptionText value={'חיבור'} color={colors.plus} />
          }
        >
        </SidebarOption>

        <SidebarOption
          isSelected={sidebarOptionEnum.substract === selectedOption}
          color={colors.minus}
          theBtn={
            <SidebarOptionTextButton
              content="&#8722;"
              textColor={colors.minus}
              onSelected={() => this.props.onOptionSelected(sidebarOptionEnum.substract)}
            >
            </SidebarOptionTextButton>
          }
          theTxt={
            <SidebarOptionText value={'חיסור'} color={colors.minus} />
          }
        >
        </SidebarOption>

        <SidebarOption
          isSelected={sidebarOptionEnum.multiply === selectedOption}
          color={colors.multiply}
          theBtn={
            <SidebarOptionTextButton
              content="&#215;"
              textColor={colors.multiply}
              onSelected={() => this.props.onOptionSelected(sidebarOptionEnum.multiply)}
            >
            </SidebarOptionTextButton>
          }
          theTxt={
            <SidebarOptionText value={'כפל'} color={colors.multiply} />
          }
        >
        </SidebarOption>

        <SidebarOption
          isSelected={sidebarOptionEnum.divide === selectedOption}
          color={colors.divide}
          theBtn={
            <SidebarOptionTextButton
              content="&#247;"
              textColor={colors.divide}
              onSelected={() => this.props.onOptionSelected(sidebarOptionEnum.divide)}
            >
            </SidebarOptionTextButton>
          }
          theTxt={
            <SidebarOptionText value={'חילוק'} color={colors.divide}/>
          }
        >
        </SidebarOption>
      </div>
    );
  }
}

export default SidebarCtrl;

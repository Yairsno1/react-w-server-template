import React, {Component} from 'react';
import SidebarNavigation from './SidebarNavigation';
import {routeEnum} from '../../util/navHelper';
import SidebarOption from './SidebarOption';
import SidebarOptionIconButton from './SidebarOptionIconButton';
import SidebarOptionText from './SidebarOptionText';
import SidebarOptionTextButton from './SidebarOptionTextButton';
import PropTypes from 'prop-types';

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

        <SidebarNavigation url={routeEnum.home}>
          <SidebarOption
            isSelected={routeEnum.home === selectedOption}
            color={colors.home}
            theBtn={
              <SidebarOptionIconButton
                content={'fa fa-home'}
                iconColor={colors.home}
                onSelected={() => this.props.onOptionSelected(routeEnum.home)}
              >
              </SidebarOptionIconButton>
            }
            theTxt={
              <SidebarOptionText value={'ראשי'} color={colors.home} />
            }
          >
          </SidebarOption>
        </SidebarNavigation>

        <SidebarNavigation url={routeEnum.add}>
          <SidebarOption
            isSelected={routeEnum.add === selectedOption}
            color={colors.plus}
            theBtn={
              <SidebarOptionTextButton
                content="&#43;"
                textColor={colors.plus}
                onSelected={() => this.props.onOptionSelected(routeEnum.add)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'חיבור'} color={colors.plus} />
            }
          >
          </SidebarOption>
        </SidebarNavigation>

        <SidebarNavigation url={routeEnum.sub}>
          <SidebarOption
            isSelected={routeEnum.sub === selectedOption}
            color={colors.minus}
            theBtn={
              <SidebarOptionTextButton
                content="&#8722;"
                textColor={colors.minus}
                onSelected={() => this.props.onOptionSelected(routeEnum.sub)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'חיסור'} color={colors.minus} />
            }
          >
          </SidebarOption>
        </SidebarNavigation>

        <SidebarNavigation url={routeEnum.mult}>
          <SidebarOption
            isSelected={routeEnum.mult === selectedOption}
            color={colors.multiply}
            theBtn={
              <SidebarOptionTextButton
                content="&#215;"
                textColor={colors.multiply}
                onSelected={() => this.props.onOptionSelected(routeEnum.mult)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'כפל'} color={colors.multiply} />
            }
          >
          </SidebarOption>
        </SidebarNavigation>

        <SidebarNavigation url={routeEnum.div}>
          <SidebarOption
            isSelected={routeEnum.div === selectedOption}
            color={colors.divide}
            theBtn={
              <SidebarOptionTextButton
                content="&#247;"
                textColor={colors.divide}
                onSelected={() => this.props.onOptionSelected(routeEnum.div)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'חילוק'} color={colors.divide}/>
            }
          >
          </SidebarOption>
        </SidebarNavigation>

      </div>
    );
  }
}

SidebarCtrl.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default SidebarCtrl;

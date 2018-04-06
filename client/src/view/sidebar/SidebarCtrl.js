import React, {Component} from 'react';
import SidebarNavigation from './SidebarNavigation';
import {routeEnum, routeColors as colors} from '../../util/navHelper';
import SidebarOption from './SidebarOption';
import SidebarOptionIconButton from './SidebarOptionIconButton';
import SidebarOptionText from './SidebarOptionText';
import SidebarOptionTextButton from './SidebarOptionTextButton';
import PropTypes from 'prop-types';

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
            color={colors.add}
            theBtn={
              <SidebarOptionTextButton
                content="&#43;"
                textColor={colors.add}
                onSelected={() => this.props.onOptionSelected(routeEnum.add)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'חיבור'} color={colors.add} />
            }
          >
          </SidebarOption>
        </SidebarNavigation>

        <SidebarNavigation url={routeEnum.sub}>
          <SidebarOption
            isSelected={routeEnum.sub === selectedOption}
            color={colors.sub}
            theBtn={
              <SidebarOptionTextButton
                content="&#8722;"
                textColor={colors.sub}
                onSelected={() => this.props.onOptionSelected(routeEnum.sub)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'חיסור'} color={colors.sub} />
            }
          >
          </SidebarOption>
        </SidebarNavigation>

        <SidebarNavigation url={routeEnum.mult}>
          <SidebarOption
            isSelected={routeEnum.mult === selectedOption}
            color={colors.mult}
            theBtn={
              <SidebarOptionTextButton
                content="&#215;"
                textColor={colors.mult}
                onSelected={() => this.props.onOptionSelected(routeEnum.mult)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'כפל'} color={colors.mult} />
            }
          >
          </SidebarOption>
        </SidebarNavigation>

        <SidebarNavigation url={routeEnum.div}>
          <SidebarOption
            isSelected={routeEnum.div === selectedOption}
            color={colors.div}
            theBtn={
              <SidebarOptionTextButton
                content="&#247;"
                textColor={colors.div}
                onSelected={() => this.props.onOptionSelected(routeEnum.div)}
              >
              </SidebarOptionTextButton>
            }
            theTxt={
              <SidebarOptionText value={'חילוק'} color={colors.div}/>
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

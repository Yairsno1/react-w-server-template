import React, {Component} from 'react';
import {routeEnum} from '../../util/navHelper';
import PropTypes from 'prop-types';

function ActivityCrtlMock(props) {
  let c = 'w3-content w3-container w3-padding-16 w3-' + props.color;
  return (
    <div className={c}>
      <div className="w3-round-xlarge" style={{border: 'solid 3px black'}}>
        <div className="w3-container w3-center">
          <h1 dir="ltr" className="w3-text-black">
            {props.text}
          </h1>
        </div>
      </div>
    </div>
  );
}

class ActivityPanelCtrl extends Component {
  render() {
    const classItems = [
      'w3-col',
      's9',
      'm10',
      'l11',
      'w3-padding-48'];

      let activityCtrl = null;

      if (routeEnum.home === this.props.activity) {
        activityCtrl = <ActivityCrtlMock color={"white"} text={"חשבון, זה פשוט"}/>
      } else if (routeEnum.add === this.props.activity) {
        activityCtrl = <ActivityCrtlMock color={"green"} text={"2 + 2"}/>
      } else if (routeEnum.sub === this.props.activity) {
        activityCtrl = <ActivityCrtlMock color={"deep-orange"} text={"6-2"}/>
      } else if (routeEnum.mult === this.props.activity) {
        activityCtrl = <ActivityCrtlMock color={"blue"} text={"1 x 4"}/>
      }  else if (routeEnum.div === this.props.activity) {
        activityCtrl = <ActivityCrtlMock color={"yellow"} text={"8 : 2"}/>
      }

    return (
      <div className={classItems.join(' ')}>
        {activityCtrl}
      </div>
    );
  }
}

ActivityPanelCtrl.propTypes = {
  activity: PropTypes.string.isRequired,
};

export default ActivityPanelCtrl;

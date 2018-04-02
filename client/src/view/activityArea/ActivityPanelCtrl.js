import React, {Component} from 'react';
import {routeEnum} from '../../util/navHelper';
import Home from './Home';
import Activity from './Activity';
import PropTypes from 'prop-types';

// function ActivityCrtlMock(props) {
//   let c = 'w3-content w3-container w3-padding-16 w3-' + props.color;
//   return (
//     <div className={c}>
//       <div className="w3-round-xlarge" style={{border: 'solid 3px black'}}>
//         <div className="w3-container w3-center">
//           <h1 dir="ltr" className="w3-text-black">
//             {props.text}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }

class ActivityPanelCtrl extends Component {

  activityFactory() {
    let rv = null;
    let activityColor = "";

    if (routeEnum.add === this.props.activity) {
      activityColor = "green";
    } else if (routeEnum.sub === this.props.activity) {
      activityColor = "deep-orange";
    } else if (routeEnum.mult === this.props.activity) {
      activityColor = "blue";
    }  else if (routeEnum.div === this.props.activity) {
      activityColor = "yellow";
    }

    rv = <Activity
      key={this.props.activity}
      color={activityColor}
      onNextQ={this.props.onNextQ}
      onAnswer={(a) =>
        {this.props.onAnswer(a);}
      }
      onPlay={() =>
        {this.props.onPlay();}
      }
      onRetry={() =>
        {this.props.onRetry();}
      }
      onShowAnswer={() =>
        {this.props.onShowAnswer();}
      }
    />

    return rv;
  }

  render() {
    const classItems = [
      'w3-col',
      's9',
      'm10',
      'l11',
      'w3-padding-48'];

      let activityCtrl = null;

      if (routeEnum.home === this.props.activity) {
        activityCtrl = <Home key={routeEnum.home} />
      } else {
        activityCtrl = this.activityFactory();
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
  onNextQ: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onRetry: PropTypes.func.isRequired,
  onShowAnswer: PropTypes.func.isRequired,
};

export default ActivityPanelCtrl;

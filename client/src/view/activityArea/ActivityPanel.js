import { connect } from 'react-redux'
import {routeEnum} from '../../util/navHelper';
import ActivityPanelCtrl from './ActivityPanelCtrl';

const mapStateToProps = (state, ownProps) => {
  const activity = ownProps.route ? ownProps.route.toUpperCase() : routeEnum.home;

  return {
    activity: activity,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNextQ: () => {
      ownProps.onNextQ(dispatch);
    },
    onAnswer: (a) => {
      ownProps.onAnswer(dispatch, a);
    },
  };
};

const ActivityPanel = connect(
  mapStateToProps,
  mapDispatchToProps)(ActivityPanelCtrl);

export default ActivityPanel;

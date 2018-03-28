import { connect } from 'react-redux'
import ActivityCtrl from './ActivityCtrl';

const mapStateToProps = (state, ownProps) => {

  return {
    color: ownProps.color,
    activityStatus: state.activity.status,
    qText: state.activity.qText,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextQ: () => {
      ownProps.onNextQ(dispatch);
    },
  };
};

const Activity = connect(
  mapStateToProps,
  mapDispatchToProps)(ActivityCtrl);

export default Activity;

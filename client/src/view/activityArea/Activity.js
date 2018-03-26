import { connect } from 'react-redux'
import ActivityCtrl from './ActivityCtrl';

const mapStateToProps = (state, ownProps) => {

  return {
    activityStatus: state.activityStatus,
    color: ownProps.color,
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

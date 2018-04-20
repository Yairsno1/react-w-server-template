import { connect } from 'react-redux'
import ActivityCtrl from './ActivityCtrl';

const mapStateToProps = (state, ownProps) => {

  return {
    color: ownProps.color,
    activityStatus: state.activity.status,
    qText: state.activity.qText,
    error: state.error.isError,
    errorVisible: state.error.visible,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextQ: () => {
      ownProps.onNextQ(dispatch);
    },
    answer: (a) => {
      ownProps.onAnswer(dispatch, a);
    },
    play: () => {
      ownProps.onPlay(dispatch);
    },
    retry: () => {
      ownProps.onRetry(dispatch);
    },
    showAnswer: () => {
      ownProps.onShowAnswer(dispatch);
    },
    hideError: () => {
      ownProps.onHideError(dispatch);
    },

  };
};

const Activity = connect(
  mapStateToProps,
  mapDispatchToProps)(ActivityCtrl);

export default Activity;

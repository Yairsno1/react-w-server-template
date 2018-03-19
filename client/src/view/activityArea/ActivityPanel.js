import { connect } from 'react-redux'
import ActivityPanelCtrl from './ActivityPanelCtrl';

const mapStateToProps = (state) => {
  return {
    activity: state.activeOperation,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onOptionSelected: (option) => {
//       ownProps.onOptionSelected(dispatch, option);
//     },
//   };
// };

const ActivityPanel = connect(mapStateToProps/*, mapDispatchToProps*/)(ActivityPanelCtrl)

export default ActivityPanel;

import { connect } from 'react-redux'
import SidebarCtrl from './SidebarCtrl';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const option = ownProps.match.params.route || '';
  const selected = option.toUpperCase();

  return {
    selected: selected,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onOptionSelected: (option) => {
      ownProps.onOptionSelected(dispatch, option);
    },
  };
};

const Sidebar = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SidebarCtrl));

export default Sidebar;

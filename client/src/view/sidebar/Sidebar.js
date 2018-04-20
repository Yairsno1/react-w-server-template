import { connect } from 'react-redux'
import SidebarCtrl from './SidebarCtrl';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const option = ownProps.match.params.url || ''; //ownProps is set by withRouter(...)
  const selected = option.toUpperCase();

  return {
    selected: selected,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Sidebar = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(SidebarCtrl)
  );

export default Sidebar;

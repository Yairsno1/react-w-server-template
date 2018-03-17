import { connect } from 'react-redux'
import SidebarCtrl from './SidebarCtrl';

const mapStateToProps = (state) => {
  return {
    selected: state.activeOperation,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //onClick: () => {
    //  ownProps.onClick(dispatch);
    //},
  };
};

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(SidebarCtrl)

export default Sidebar;

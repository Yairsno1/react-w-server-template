import { connect } from 'react-redux'
import ErrorFloaterCtrl from './ErrorFloaterCtrl';

const mapStateToProps = (state, ownProps) => {

  return {
    message: state.error.message,
    text: state.error.text,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
     hideError: () => {
       ownProps.hideError();
     },
  };
};

const ErrorFloater = connect(
  mapStateToProps,
  mapDispatchToProps)(ErrorFloaterCtrl);

export default ErrorFloater;

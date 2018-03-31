import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WrongCtrl extends Component {
  render() {
    const btnClassItems = [
      'w3-button',
      'hp-btn',
      'w3-circle',
      'w3-xlarge',
      'w3-black',
      this.props.btnColor,
      'w3-hover-black'];

    return (
      <div className="w3-container w3-row hp-answer">
        <p className="w3-half w3-center">
          <button className={btnClassItems.join(' ')} onClick={this.props.showA}>
            <span className="fa fa-eye"></span>
          </button>
        </p>
        <p className="w3-half w3-center">
          <button className={btnClassItems.join(' ')} onClick={this.props.retry}>
            <span className="fa fa-repeat"></span>
          </button>
        </p>
      </div>
    );
  }
}

WrongCtrl.propTypes = {
  btnColor: PropTypes.string.isRequired,
  retry: PropTypes.func.isRequired,
};

export default WrongCtrl;

import React, {Component} from 'react';
import tooltipProps from './tooltipProps';
import PropTypes from 'prop-types';

class NextQCtrl extends Component {
  render() {
    const btnClassItems = [
      'w3-button',
      'hp-btn',
      'w3-circle',
      'w3-xlarge',
      'w3-black',
      'w3-text-' + this.props.btnColor,
      'w3-hover-black'];

    return (
      <div className="w3-container">
        <p className="w3-center w3-tooltip">
          <button className={btnClassItems.join(' ')} onClick={this.props.nextQ}>
            <span className="fa fa-play"></span>
            <span
              className={tooltipProps.classItems}
              style={tooltipProps.styleItems}>
              תרגיל נוסף
            </span>
          </button>
        </p>
      </div>
    );
  }
}

NextQCtrl.propTypes = {
  btnColor: PropTypes.string.isRequired,
  nextQ: PropTypes.func.isRequired,
};

export default NextQCtrl;

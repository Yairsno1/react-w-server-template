import React, {Component} from 'react';
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
        <p className="w3-center">
          <button className={btnClassItems.join(' ')}>
            <span className="fa fa-play"></span>
          </button>
        </p>
      </div>
    );
  }
}

NextQCtrl.propTypes = {
  btnColor: PropTypes.string.isRequired,
  //submitAnswer: PropTypes.func.isRequired,
};

export default NextQCtrl;

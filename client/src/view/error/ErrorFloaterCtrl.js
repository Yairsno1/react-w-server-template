import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorFloaterCtrl extends Component {
  constructor(props) {
    super(props);

    this.handleAdditionalDetails = this.handleAdditionalDetails.bind(this);

    this.state = {
      additionalDetails: false
    };
  }

  handleAdditionalDetails() {
    this.setState((currState, props) => ({
      additionalDetails: !(currState.additionalDetails),
    }));
  }

  render() {
    let adBtnClasses = [
      "w3-button",
      "hp-btn",
      "w3-small",
      "w3-text-gray",
      "w3-hover-white",
      "w3-hover-text-black"
    ];
    let adTxtClasses = [
      "w3-text-white"
    ];
    if (this.state.additionalDetails) {
      adBtnClasses.push("w3-hide");
    } else {
      adTxtClasses.push("w3-hide");
    }

    return (
      <div className="w3-display-topleft w3-opacity-min w3-animate-zoom" style={{padding: '8px'}}>
        <div className="w3-display-container w3-black">
          <header>
            <span
              className="w3-display-topleft w3-button hp-btn w3-circle w3-text-gray w3-hover-white w3-hover-text-black"
              onClick={this.props.hideError}
            >
              <b>X</b>
            </span>
          </header>
          <div className="w3-container">
            <div className="w3-panel" style={{maxWidth: '90%'}}>
              <span className="fa fa-bell w3-large w3-text-red"></span>
              <span>&#160;&#160;&#160;</span>
              <span className="w3-text-white">{this.props.message}</span>
            </div>
            <div className="w3-panel">
              <span
                className={adBtnClasses.join(' ')}
                onClick={this.handleAdditionalDetails}
              >
                פרטים נוספים >>
              </span>
              <div dir="ltr">
                <p
                  className={adTxtClasses.join(' ')}
                  style={{maxWidth: '80%'}}
                >
                  {this.props.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

ErrorFloaterCtrl.propTypes = {
  message: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hideError: PropTypes.func.isRequired,
};

export default ErrorFloaterCtrl;

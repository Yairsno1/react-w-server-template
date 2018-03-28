import React, {Component} from 'react';
//import PropTypes from 'prop-types';

export class QCtrl extends Component {
  render()
  {
    return(
      <div className="w3-container w3-center">
        <p dir="ltr" className="w3-xxxlarge w3-text-black">
          <b>{this.props.text}</b>
        </p>
      </div>
    );
  }
}

export class WaitCtrl extends Component {
  render()
  {
    return(
      <div className="w3-container w3-center">
        <p className="w3-xxxlarge w3-text-black">
          <span className="fa fa-gear w3-xxxlarge w3-spin"></span>
          <span>&#160;</span>
          <b>טוען תרגיל ...</b>
        </p>
      </div>
    );
  }
}

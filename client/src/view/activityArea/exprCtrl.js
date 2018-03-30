import React, {Component} from 'react';
//import PropTypes from 'prop-types';

export class ACtrl extends Component {
  render()
  {
    return(
      <div className="w3-container w3-center">
        <p dir="ltr" className="w3-xxxlarge w3-text-black">
          <b>{this.props.text}</b>
          <span>&#160;&#160;&#160;</span>
          <span className="fa fa-smile-o w3-xxxlarge"></span>
        </p>
      </div>
    );
  }
}

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
  componentDidMount() {
    this.props.receiveQ();
  }

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

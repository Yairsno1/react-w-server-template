import React, {Component} from 'react';
import welcome from '../../images/welcome.png'

class Home extends Component {
  render () {
    return (
      <div className={'w3-padding-48'}>
        <div className={'w3-content w3-border w3-border-black'}>
          <div className="w3-container w3-center">
            <h1>חשבון, זה פשוט</h1>
          </div>
          <img className="w3-border-top w3-border-black" src={welcome} alt="" style={{width: "100%",}} />
        </div>
      </div>
    );
  }

}

export default Home;

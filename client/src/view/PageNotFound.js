import React, { Component } from 'react';

class PageNotFound extends Component {
  render() {
    const classItems = [
      'w3-content',
      'w3-container',
      'w3-padding-16',
      'w3-red'];

     const style = {
       border: 'solid 3px black'
     };

    return (
      <div className={'w3-padding-48'}>
        <div className={classItems.join(' ')}>
          <div className="w3-round-xlarge" style={style}>
            <div className="w3-container w3-center">
              <p className="w3-xxxlarge w3-text-white">
                <b>אופס! דף לא נמצא</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;

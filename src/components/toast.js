import React from 'react';

export default class Toast extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
	      <div className="toast-msg-container">
	        <span id="toast-msg"></span>
	      </div>
	    </div>
    );
  }
}

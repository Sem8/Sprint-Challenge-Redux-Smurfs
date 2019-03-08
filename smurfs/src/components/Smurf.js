import React, { Component } from 'react';
import { deleteSmurf } from '../actions';
import { connect } from "react-redux";

class Smurf extends Component {
    // state = {  name: '', age: '', height: ''};
  render() {
    return (
      <div className='surroundingSmurfDiv'>
          {/* <div className='smurfDiv'> */}
            <p>{this.props.smurf.name}</p>
            <p>{this.props.smurf.age}</p>
            <p>{this.props.smurf.height}</p>            
          {/* </div>  */}
          <span><button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>Destroy!</button></span>       
      </div>
    )
  }
}

// export default Smurf;


export default connect(
    null,
    {deleteSmurf }
  )(Smurf);

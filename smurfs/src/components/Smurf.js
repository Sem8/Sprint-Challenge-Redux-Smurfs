import React, { Component } from 'react'

class Smurf extends Component {
    state = {  name: '', age: '', height: ''};
  render() {
    return (
      <div>
          <p>{this.props.smurf.name}</p>
          <p>{this.props.smurf.age}</p>
          <p>{this.props.smurf.height}</p>
        
      </div>
    )
  }
}

export default Smurf;





// export default connect(
//     null,
//     { }
//   )(Smurf);

import React, { Component } from 'react';
import { deleteSmurf, editSmurf } from '../actions';
import { connect } from "react-redux";

class Smurf extends Component {
    state = {  name: '', age: '', height: '', updatingSmurf: false};

    toggleEdit = () => {
        this.setState(prevState => ({ updatingSmurf: !prevState.updatingSmurf }));
    };
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        console.log('works');
        this.props.editSmurf(this.props.smurf.id, {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        });
        this.setState({
            name: this.props.smurf.name,
            age: this.props.smurf.name,
            height: this.props.smurf.height,
            updatingSmurf: false
        });
    };

  render() {
      if (!this.state.updatingSmurf) {

    return (
            <div className='surroundingSmurfDiv'>
          {/* <div className='smurfDiv'> */}
            <p>{this.props.smurf.name}</p>
            <p>{this.props.smurf.age}</p>
            <p>{this.props.smurf.height}</p>            
          {/* </div>  */}
          <span><button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>Destroy!</button></span>   
          <button onClick={this.toggleEdit}>Edit Smurf info</button>    
      </div>
    );
} else {
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <input
                type='text'
                name='name'
                placeholder={this.props.smurf.name}
                value={this.state.name}
                onChange={this.changeHandler}
                 />

                 <input
                type='number'
                name='age'
                placeholder={this.props.smurf.age}
                value={this.state.age}
                onChange={this.changeHandler}
                 />

                 <input
                type='text'
                name='height'
                placeholder={this.props.smurf.height}
                value={this.state.height}
                onChange={this.changeHandler}
                 />
                 <button onClick={this.submitHandler}>Submit changes</button>
            </form>

        </div>
        
    )
}
  }
}

// export default Smurf;

export default connect(
    null,
    {deleteSmurf, editSmurf }
  )(Smurf);

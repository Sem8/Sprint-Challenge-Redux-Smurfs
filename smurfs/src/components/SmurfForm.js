import React, { Component } from 'react';
import { connect } from "react-redux";
import Smurfs from './Smurfs';
import {addSmurf} from '../actions';

class SmurfForm extends Component {    
        state = {
            name: '',
            age: '',
            height: ''
        };

        changeHandler = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        };

        submitHandler = e => {
            e.preventDefault();
            this.props.addSmurf(this.state);
            this.setState({ name: '', age: '', height: ''});
        }


    
  render() {
    return (
      <div>
          <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type='text'
            placeholder="name"
            value={this.state.name}
            name="name"
            className='smurfInput'
          />
          <input
            onChange={this.changeHandler}
            type='number'
            placeholder="age"
            value={this.state.age}
            name="age"            
            className='smurfInput'
          />
          <input
            onChange={this.changeHandler}
            type='text'
            placeholder="height"
            value={this.state.height}
            name="height"
            className='smurfInput'
          />
          </form>
          <button onClick={this.submitHandler}>Add smurf</button> 
          <section className='allSmurfsSection'>
              <Smurfs />
          </section>       
      </div>
    )
  }
};


export default connect(null, { addSmurf })(SmurfForm);

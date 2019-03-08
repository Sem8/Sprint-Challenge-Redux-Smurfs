import React, { Component } from 'react';
import { connect } from "react-redux";
import Smurfs from './Smurfs';

class SmurfForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            className='smurfInput'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            className='smurfInput'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            className='smurfInput'
          />
          </form> 
          <section className='allSmurfsSection'>
              <Smurfs />
          </section>       
      </div>
    )
  }
};


export default connect(null, {/*imported action add smurfs */})(SmurfForm);

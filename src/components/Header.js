import React, { Component } from 'react';

/**
 * Header
 */
export class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
      <h1>{this.props.title}</h1>
      </div>
    );
  }
}


export default Header;

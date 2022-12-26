import React, { Component } from 'react'
import Result from './Result'
import JSON from "./Cendrol.json"


export default class App extends Component {
constructor()
{
    super();
    this.state={cenDetails:JSON}
}

  render() {
    return (
      <div>
        <Result cenDetails={this.state.cenDetails}/>
      </div>
    )
  }
}

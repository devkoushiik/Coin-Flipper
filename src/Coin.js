import React, { Component } from 'react'

export default class Coin extends Component {
  render() {
    return (
      <div>
        <img src={this.props.info.url} alt={this.props.info.side}/> 
      </div>
    )
  }
}

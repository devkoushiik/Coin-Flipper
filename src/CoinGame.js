import React, { Component } from 'react'
import img from "./img/coin (1).png"
import img2 from "./img/coin (2).png"
import './CoinGame.css'
import {choice} from './Helper'
import Coin from './Coin'

export default class CoinGame extends Component {
    static defaultProps = {
        coin : [
            {side: "heads", url: img},
            {side: "tails", url: img2}
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin : null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
    }

    flipCoin() {
        const newCoin = choice(this.props.coin);
        this.setState( st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
            }
        })
    }

    // handler
    handleChange = () => {
        this.flipCoin();
    }

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's Flip A Coin</h2>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>

       {this.state.currCoin && <Coin info={this.state.currCoin} />} 

       <button onClick={this.handleChange} class="glow-on-hover" type="button">Flip Coin</button>
       
      </div>
      
    )
  }
}

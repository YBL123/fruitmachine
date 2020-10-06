import React from 'react'
// import { getFloatValue } from '../lib/api'
import Float from '../components/Float'

class Home extends React.Component {
  state = {
    float: [],
    slot1: [ 'black', 'white', 'green', 'yellow' ],
    slot2: [ 'black', 'white', 'green', 'yellow' ],
    slot3: [ 'black', 'white', 'green', 'yellow' ],
    slot4: [ 'black', 'white', 'green', 'yellow' ],
    result: []
  }


  shuffle = (array) => {
    return array[Math.floor(Math.random()*array.length)]

  }
  

  playOnClick = async event => {
    // console.log('hello')
    // console.log(this.shuffle(this.state.slot1))
    let randomSlot1 = this.shuffle(this.state.slot1)
    let randomSlot2 = this.shuffle(this.state.slot2)
    let randomSlot3 = this.shuffle(this.state.slot3)
    let randomSlot4 = this.shuffle(this.state.slot4)

    let finalResult = this.state.result

    finalResult = [ randomSlot1, randomSlot2, randomSlot3, randomSlot4]

    console.log(finalResult)

    this.setState({ result: finalResult }) 
	}


  render() {

    return (
      <section>
        <div>
          <h1>FruitMachine</h1>
          <button onClick={this.playOnClick}>Play</button>
        </div>
        <div>
        {this.state.result.map((slot, index) => (
            <h1 key={index}>{slot}</h1>
          ))}
        </div>
      </section >
    )
  }

}

export default Home
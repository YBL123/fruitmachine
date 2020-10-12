import React from 'react'
import { getFloatValue } from '../lib/api'
import { updateFloatValue } from '../lib/api'
// import Float from '../components/Float'

class Home extends React.Component {
  state = {
    float: [],
    slot1: ['black', 'white', 'green', 'yellow'],
    slot2: ['black', 'white', 'green', 'yellow'],
    slot3: ['black', 'white', 'green', 'yellow'],
    slot4: ['black', 'white', 'green', 'yellow'],
    result: []
  }


  shuffle = (array) => {
    return array[Math.floor(Math.random() * array.length)]

  }

  increaseFloat = async () => {

    //* getting all data
    const data = await getFloatValue() 

    const floatId = data.data[0]._id

    //* getting single float value
    let floatValue = await updateFloatValue(floatId)

    let floatToUpdate

    //* ternary asking if this.state.flaot is an object -> if true then floatToUpdate is assigned the backend data for the float value. OR ':' if float is not an object then we add 5 altering the frontend
    typeof(this.state.float) === 'object' ? floatToUpdate = floatValue.data.value : floatToUpdate = this.state.float + 5

    //* setting state and updating the backend data
    this.setState({ float: floatToUpdate })
    console.log('last one', this.state.float)
    await updateFloatValue(floatId, floatToUpdate)

  }

  playOnClick = async event => {
    this.increaseFloat()
    let randomSlot1 = this.shuffle(this.state.slot1)
    let randomSlot2 = this.shuffle(this.state.slot2)
    let randomSlot3 = this.shuffle(this.state.slot3)
    let randomSlot4 = this.shuffle(this.state.slot4)

    let finalResult = this.state.result

    finalResult = [randomSlot1, randomSlot2, randomSlot3, randomSlot4]

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
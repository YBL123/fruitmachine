import React from 'react'
import { getFloatValue } from '../lib/api'
import { updateFloatValue } from '../lib/api'

class Home extends React.Component {
  state = {
    float: [],
    result: ['black', 'white', 'green', 'yellow']
  }


  shuffle = (array) => {
    const slotOptions = ['black', 'white', 'green', 'yellow']
    return slotOptions[Math.floor(Math.random() * slotOptions.length)]
  }

  increaseFloat = async () => {

    //* getting all data
    const data = await getFloatValue()

    //* getting single float data
    const floatId = data.data[0]._id
    let floatValue = await updateFloatValue(floatId)

    //* ternary asking if this.state.flaot is an object -> if true then floatToUpdate is assigned the backend data for the float value. OR ':' if float is not an object then we add 5 altering the frontend
    let floatToUpdate
    typeof (this.state.float) === 'object' ? floatToUpdate = floatValue.data.value : floatToUpdate = this.state.float + 5

    //* setting state and updating the backend data
    this.setState({ float: floatToUpdate })
    console.log('last one', this.state.float)
    await updateFloatValue(floatId, floatToUpdate)
  }

  playOnClick = async event => {
    this.increaseFloat()
    const finalRes = this.state.result.map(slot => this.shuffle())
    this.setState({ result: finalRes })
    
    const allUnique = (arr) => {
        //* creating object -> for looping array
        let valuesSoFar = Object.create(null);
        for (let i = 0; i < arr.length; ++i) {
          //* individual array item
          let value = arr[i];

          //* Checking to see if value (array item) exists within the valuesSoFar object -> if it does then return false 
          if (value in valuesSoFar) {
            return false;
          }
          //* If value is unique then adding it to object -> equals true 
          valuesSoFar[value] = true;
        }
        //* all values in object are unique so returning true
        return true;
    }

    const allSame = () => { return finalRes.every(item => item === finalRes[0]) }

    const adjacentDuplicates = (arr) => {
      let ref
      let ans
      for( let i = 0; i < arr.length; i++) {
        if(ref === arr[i]) ans = true
        ref = arr[i]
      }
      return ans
    }
    
    if (allSame(finalRes)) {
      console.log('You win the jackpot!')
    } else if (adjacentDuplicates(finalRes)) {
      console.log('You win 5 times the cost')
    } else if (allUnique(finalRes)) {
      console.log('You win half the Jackpot!')
    } else {
      console.log('Sorry try again')
    }
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
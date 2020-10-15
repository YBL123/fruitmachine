import React from 'react'
import { getFloatValue } from '../lib/api'
import { updateFloatValue } from '../lib/api'

class Home extends React.Component {
  state = {
    float: 500,
    message: '',
    result: ['black', 'white', 'green', 'yellow']
  }

  async componentDidMount() {
    try {
      this.updateFloat(500)
    } catch (err) {
      console.log(err)
    }
  }

  shuffle = (array) => {
    const slotOptions = ['black', 'white', 'green', 'yellow']
    return slotOptions[Math.floor(Math.random() * slotOptions.length)]
  }

  updateFloat = async (num) => {
    //* getting all data
    const data = await getFloatValue()

    //* getting single float data
    const floatId = data.data[0]._id
    let floatValue = await updateFloatValue(floatId)

    // * update state and backend
    this.setState({ float: num })
    await updateFloatValue(floatId, num)
  }

  increaseFloat = () => { this.updateFloat(this.state.float + 5) }

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
        if (value in valuesSoFar) return false;
        
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
      for (let i = 0; i < arr.length; i++) {
        if (ref === arr[i]) ans = true
        ref = arr[i]
      }
      return ans
    }

    //* win messages + float decrease
    if (allSame(finalRes)) {
      this.setState({ message: `You win the jackpot of ${this.state.float}!` })
      this.updateFloat(0)
    } else if (adjacentDuplicates(finalRes)) {
      this.setState({ message: `You win ${this.state.float >= 25 ? this.state.float - 25 : this.state.float}` })
      this.updateFloat(this.state.float >= 25 ? this.state.float - 25 : 0)
    } else if (allUnique(finalRes)) {
      this.setState({ message: `You win ${Math.floor(this.state.float / 2)}!` })
      this.updateFloat(Math.ceil(this.state.float / 2))
    } else {
      this.setState({ message: 'Sorry try again' })
    }
  }

  render() {

    return (
      <section className="page-wrap">
        <div className="title-wrapper">
          <h1 className="title">FRUITE MACHINE</h1>
          <h2>Jackpot: {this.state.float}</h2>
        </div>
        <div className="slots-play-button-wrapper">
          <div className="slots-wrapper">
            {this.state.result.map((slot, index) => (
              <h1 className="slots" key={index}>{slot}</h1>
            ))}
          </div>
          <p>{this.state.message}</p>
          <button className="play-button" onClick={this.playOnClick}>Play</button>
        </div>
      </section >
    )
  }

}

export default Home
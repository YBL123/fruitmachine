import React from 'react'
import { getValue } from '../lib/api'

class FloatValue extends React.Component {

  state = { float: [] }

  async componentDidMount() {
    try {
      const res = await getValue()
      console.log(res.data)
      const result = res.data
      const lastValue = result[result.length - 1]
      console.log(lastValue.value)
      this.setState({ updatedValue: lastValue.value, float: result })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section>
        <div>
          <h1>{this.state.updatedValue}</h1>
        </div>
      </section>
    )
  }
}

export default FloatValue
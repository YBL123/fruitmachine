import React from 'react'
import { getFloatValue } from '../lib/api'

class FloatValue extends React.Component {
  state = {
    float: []
  }

  async componentDidMount() {
    try {
      const res = await getFloatValue()
      // console.log(res.data[0].value)
      const value = res.data
      const lastValue = value[value.length - 1]
      console.log('this is lastValue.value', lastValue.value)
      this.setState({ float: value, updatedValue: lastValue.value })
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
      </section >
    )
  }

}

export default FloatValue
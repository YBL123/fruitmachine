import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

import Test from './components/Test'
// import Error from './common/Error'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Test} />
          {/* <Route path="/*" component={Error} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

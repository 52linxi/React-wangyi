import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// 看好了，仔细看，路由怎么完的
import Footer from './components/footer'
import routes from './config/routes'
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(route => {
            return <Route {...route} key={route.id} />
          })}
          <Redirect path="/" to="/msite" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

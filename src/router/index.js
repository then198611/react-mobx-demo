import React from 'react'
import { Route, Switch} from 'react-router'

import Index from '../pages/Index'
import List from '../pages/List'


export default () => (
  <Switch>
    <Route exact path="/" component={Index}/>
    <Route path="/list" component={List}/>
  </Switch>
)

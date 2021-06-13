import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Loader from '@utils/loader'
import config from '@src/config/route'

const defaultExact = true
const defaultType = 'route'

const build = routes => {
  let component = []

  Object.keys(routes).forEach(currentValue => {
    const curr = routes[currentValue],
      type = curr.hasOwnProperty('type') ? curr.type : defaultType,
      props = type === 'route'
        ? {
          key: curr.key,
          path: currentValue,
          exact: curr.hasOwnProperty('exact') ? curr.exact : defaultExact
        }
        : {
          key: curr.key,
          to: curr.to
        }

    if (type === 'redirect') {
      component.push(<Redirect {...props} />)
      return false
    }

    if (curr.component) {
      Object.assign(props, { component: Loader(() => import(`@pages/${curr.component}`)) })
      component.push(<Route {...props} />)
    }

    if (curr.children && Object.keys(curr.children).length > 0) {
      component.push(...build(curr.children))
    }
  })

  return component
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {build(config)}
        {/* <Route path="/" exact component={IndexPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
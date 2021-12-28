import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App';
import Blog from './Pages/Blog'
import NotFound from './Pages/NotFound'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'
import { Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import store from './redux/index'

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router history={history}>
        <Switch>
          <Route path='/' exact>
            <App />
          </Route>
          <Route path='/blog' exact>
            <Blog />
          </Route>
          <Route path='*' exact>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

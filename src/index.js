import React from 'react'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'

const history = createBrowserHistory()
const store = configureStore()

render(
      <Provider store={store}>
        <Router history={history}  >
          <App/>
        </Router>
      </Provider>
,
document.getElementById('root')
);


registerServiceWorker();

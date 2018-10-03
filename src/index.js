import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {firebase} from './firebase';

import Routes from './routes'

const App = (props) => {
  return (
      <BrowserRouter>
          <Routes {...props}/>
      </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user)=> {
    ReactDOM.render(<App  user={user}/>, document.getElementById('root'));
})

registerServiceWorker();

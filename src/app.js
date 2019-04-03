import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/toDoAppContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() { // Every react component has a render method.
    return ( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      <Provider store={store}>
        <ToDoAppContainer />
      </Provider>
    )
  }
}



ReactDOM.render(< App />, document.getElementById('app'));
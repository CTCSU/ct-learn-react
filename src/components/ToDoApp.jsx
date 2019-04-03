import React from 'react';
import List from './List';
import Input from './Input'


// state ys
class ToDoApp extends React.Component {

  // onInputChange = (event) => {
  //   this.setState({ newToDo: event.target.value });
  // };

  onInputSubmit = (event) => {
    event.preventDefault();
    this.setState((previousState) => ({
      list: [...previousState.list, { item: previousState.newToDo, done: false }],
      newToDo: ''
    }))
  };

  onListItemClick = (i) => {
    this.setState((preState) => ({
      list: [
        ...preState.list.slice(0, i),
        Object.assign({}, preState.list[i], { done: !preState.list[i].done }),
        ...preState.list.slice(i + 1)
      ]
    }));
  };

  deleteListItem = (i) => {
    console.log(i);
    this.setState((previousState) => ({ // using previous state again
      list: [
        ...previousState.list.slice(0, i), // again with the slice method
        ...previousState.list.slice(i + 1) // the only diffence here is we're leaving out the clicked element
      ]
    }))
  };

  // componentWillMount() { // run before the render method
  //   this.setState({ // add an array of strings to state.
  //     list: [{
  //       item: 'thing1',
  //       done: false
  //     }, {
  //       item: 'thing2',
  //       done: false
  //     }, {
  //       item: 'thing3',
  //       done: false
  //     }],
  //     newToDo: 'test'
  //   })
  // };

  render() {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              <hr />
              <List listItems={this.props.ToDoApp.list} onClick={this.props.clickItem} deleteListItem={this.props.deleteItem} />
              <Input value={this.props.ToDoApp.newToDo} clickInput={this.props.addItem} inputChange={this.props.inputChange} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoApp;
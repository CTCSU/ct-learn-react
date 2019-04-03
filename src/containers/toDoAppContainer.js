import {
  connect
} from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import {
  inputChange,
  addItem,
  deleteItem,
  clickItem
} from '../redux/modules/toDoApp';


function mapStateToProps(state) {
  return {
    ToDoApp: state.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(inputChange(value)),
    addItem: (value) => dispatch(addItem(value)),
    deleteItem: (i) => dispatch(deleteItem(i)),
    clickItem: (i) => dispatch(clickItem(i))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp);
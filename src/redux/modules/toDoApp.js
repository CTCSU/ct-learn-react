const initialState = {
  list: [{
    item: 'test',
    done: false
  }, {
    item: 'thing2',
    done: false
  }, {
    item: 'test3',
    done: false
  }],
  newToDo: ''
};

const INPUT_CHANGED = 'INPUT_CHANGED';
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const CLICK_ITEM = "CLICK_ITEM";

export function inputChange(e) {
  return {
    type: INPUT_CHANGED,
    value: e.target.value
  }
}

export function addItem(e) {
  e.preventDefault();
  return {
    type: ADD_ITEM
  }
}

export function deleteItem(i) {
  return {
    type: DELETE_ITEM,
    value: i
  }
}

export function clickItem(i) {
  return {
    type: CLICK_ITEM,
    value: i
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGED:
      return Object.assign({},
        state, {
          newToDo: action.value
        }
      );
    case ADD_ITEM:
      return Object.assign({}, state, {
        list: [...state.list, {
          item: state.newToDo,
          done: false
        }],
        newToDo: ''
      });
    case DELETE_ITEM:
      return Object.assign({}, state, {
        list: [...state.list.slice(0, action.value), ...state.list.slice(action.value + 1)]
      });
    case CLICK_ITEM:
      const i = action.value;
      return Object.assign({}, state, {
        list: [...state.list.slice(0, i), Object.assign({}, state.list[i], {
          done: !state.list[i].done
        }), ...state.list.slice(i + 1)]
      })
    default:
      return state;
  }
}
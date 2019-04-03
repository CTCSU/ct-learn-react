import React from 'react';

const Input = (props) => {
  return (
    <form>
      <div
        className="form-group">
        <label
          htmlFor="listInput">
          Email address
    </label>
        <input
          type="text"
          className="form-control"
          id="listItemInput"
          placeholder="Add new todo"
          onChange={props.inputChange.bind(this)}
          value={props.value}
        />
        <button
          className="btn btn-primary" onClick={props.clickInput.bind(this)}>
          Add Item
        </button>
      </div>
    </form>
  )
};

export default Input;
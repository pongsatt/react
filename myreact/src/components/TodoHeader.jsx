import React from 'react';

export default class TodoHeader extends React.Component {
    _handleKeyPress(e) {
    if (e.key === 'Enter' && this.refs.addTodoInput.value !== '') {
      const itemText = this.refs.addTodoInput.value;
      this.refs.addTodoInput.value = '';
      return this.props.addItem(itemText);
    }
  }
  
    render(){
        return <header>
            <h1>Todo</h1>
            <input className="new-todo"
            ref="addTodoInput"
            autofocus
            autoComplete="off"
            placeholder="What needs to be done?"
            onKeyPress={this._handleKeyPress.bind(this)}/>
        </header>
    }
};
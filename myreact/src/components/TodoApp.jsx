import React from 'react';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoTools from './TodoTools';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export class TodoApp extends React.Component {
    getNbActiveItems() {
    if (this.props.todos) {
      const activeItems = this.props.todos.filter(
        (item) => item.get('status') === 'active'
      );
      return activeItems.size;
    }
    return 0;
  }
  
    render(){
        return <div>
                <section className="todoapp">
                    <TodoHeader addItem={this.props.addItem}/>
                    <TodoList {...this.props}/>
                    <TodoTools  changeFilter={this.props.changeFilter}
                        filter={this.props.filter}
                        nbActiveItems={this.getNbActiveItems()}
                        clearCompleted={this.props.clearCompleted}/>
                </section>
            </div>
    }
}

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter')
  };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
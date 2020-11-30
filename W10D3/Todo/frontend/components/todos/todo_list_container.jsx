import blessedList from './todo_list';
import TodoList from './todo_list'
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

//returns a function 
// closes over the props 
// pass in your component, and it takes the props it closes over
// returns a new version of your component that has all the props in it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

// 
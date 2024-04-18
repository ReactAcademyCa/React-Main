import { connect } from 'react-redux';
import { toggleTodo /*, deleteTodo */ } from './slices/todos';
import { createSelector } from '@reduxjs/toolkit';
import TodoList2 from '../../common/todo-list';
import { VisibilityFilters } from './slices/visibility-filter';

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos;
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed);
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed);
//     default:
//       throw new Error("Unknown filter: " + filter);
//   }
// };

const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.visibilityFilter;

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  },
);

const mapStateToProps = (state) => ({
  todos: selectVisibleTodos(state),
});

const mapDispatchToProps = {
  onToggleTodo: toggleTodo,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDeleteTodo: (id) => (id) => null,
};

const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList2);

export default TodoList;

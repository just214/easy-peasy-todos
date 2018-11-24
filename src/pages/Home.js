import React, { useState, useEffect } from 'react';
import { Redirect } from '@reach/router';
import { useStore, useAction } from 'easy-peasy';

// * Components
import TodoItem from '../components/TodoItem';
import FilterButtons from '../components/FilterButtons';
import { Input, TextButton, Spinner } from '../components/common';

function Home() {
  const [todoInput, setTodoInput] = useState('');
  const authState = useStore(state => state.auth);
  const logout = useAction(dispatch => dispatch.auth.logout);
  const todosState = useStore(state => state.todos);
  const todosActions = useAction(dispatch => dispatch.todos);

  useEffect(() => {
    todosActions.subscribe();
    // * We need to unsubscribe from the user's todos when they logout.
    return () => {
      todosActions.unsubscribe();
    };
  }, []);

  async function handleAddTodo(e) {
    e.preventDefault();
    try {
      await todosActions.addTodo(todoInput);
      setTodoInput('');
    } catch (error) {
      alert(error.message);
    }
  }

  if (!authState.isAuthed) {
    return <Redirect noThrow to="/login" />;
  }

  if (!todosState.ready) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <div style={{ textAlign: 'right' }}>
        <div>
          <small>{authState.userData.email}</small>{' '}
          <TextButton onClick={logout}>logout</TextButton>
        </div>
      </div>
      <br />

      <form onSubmit={handleAddTodo} style={{ flexDirection: 'row' }}>
        <Input
          dark
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
          placeholder="Add Todo"
          autoFocus
          width="100%"
        />
      </form>

      {!!todosState.allTodos.length && (
        <FilterButtons
          filter={todosState.filter}
          todoCount={todosState.filteredTodosCount}
          onClick={value => todosActions.setFilter(value)}
        />
      )}

      {todosState.filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClick={() => todosActions.toggleTodoStatus(todo)}
          onDelete={() => todosActions.deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
}

export default Home;

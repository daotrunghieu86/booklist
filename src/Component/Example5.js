import React, {useReducer, useState} from 'react';
import Todo from "./Todo";


// the constant variable should setup uppercase
export const ACTION = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.input.name)];
    case ACTION.TOGGLE:
      return todos.map(todo => {
        if (todo.id === action.input.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

export default function Example05() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, input: {name: name} });
    setName("");
  }

  // console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      </form>

      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  )

}
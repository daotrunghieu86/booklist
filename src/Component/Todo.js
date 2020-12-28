import React from 'react'
import {ACTION} from './Example5'

export default function Todo({todo, dispatch}) {
  return (
    <div>
      <span style={{color: todo.complete ? '#aaa' : '#00'}}>
        {todo.name}
      </span>
      <button onClick={() => dispatch({type: ACTION.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
      <button>Delete</button>
    </div>
  )
}

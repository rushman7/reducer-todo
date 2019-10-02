import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        {state.map(todo => 
          <div key={todo.id} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id})}>
            {
              todo.completed ? 
              <span style={{ textDecorationLine: 'line-through' }}>{todo.item}</span> : 
              <span>{todo.item}</span>
            }
          </div>
        )}
        <input 
          type="text"
          name="addTodo"
          value={input}
          onChange={handleChange}
        />
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: input})}>Add Todo</button>
      </header>
    </div>
  );
}

export default App;

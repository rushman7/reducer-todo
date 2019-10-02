import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');
  console.log(state);

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        {state.todo.map(todo => <p key={todo.id}>{todo.item}</p>)}
        <input 
          type="text"
          name="addTodo"
          value={input}
          onChange={handleChange}
        />
        <button onClick={() => dispatch({ type: 'ADD_TODO', payload: input})}>Add Todo</button>
      </header>
    </div>
  );
}

export default App;

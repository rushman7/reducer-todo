export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      let newItem = {item: action.payload, completed: false,id: new Date()}
      return [...state, newItem]
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      });
    default:
      return state
  }
};

// CLEAR_COMPLETED
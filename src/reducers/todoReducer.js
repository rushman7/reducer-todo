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
      return [
        ...state, 
        {
          item: action.payloadd, 
          completed: false,
          id: new Date()
        }
      ]
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo
      });
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
};
export const initialState = {
  todo: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

export const todoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, {
          item: action.payload,
          completed: false,
          id: new Date()
        }]
      }
    case "CLEAR_COMPLETED":
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
};

// ADD_TODO
// CLEAR_COMPLETED
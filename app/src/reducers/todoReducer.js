const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        const newTodo = {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        };
        return {
          ...state,
          todos: [...state.todos, newTodo],
        };
      case 'DELETE_TODO':
          const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
          return {
          ...state,
          todos: filteredTodos,
      };
      case 'TOGGLE_TODO':
        const updatedTodos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
        return {
          ...state,
          todos: updatedTodos,
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
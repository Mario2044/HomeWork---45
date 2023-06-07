import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../actions';
import '../css/styles.css';


const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };



  return (
    <div className="container">
      <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
          <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
        ))}
      </ul>
      <div className="add-todo">
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
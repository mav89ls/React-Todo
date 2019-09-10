import React from "react";

import Todo from "./Todo";

// this will import todo from todo so it can be used inside the function and eventually displayed in app.js

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;

// line 9 will build out a functional component that will take in props from app.js

// line 11 gives this a classname of todo-list so that we can style this todo list in our css file.

//line 12 uses curly braces to allow us to use javascript so that we can map over props.todos from the app.js file in lines 69ish where inside the todolist todos are set to equal this.state.todo-list

///////////////////BLOCKER line 10 i dont know why we are using todo in the following parenthesis and how thats working with the map function.

// in the <todo> component we are using that imported component here. this will render all the todos that have been created in this list.

/////////////// //BLOCKER i dont know why we are setting the key here to todo.id and todo to todo inside the invocation of the TOdo component.

// this component is getting exported default as todolist and will show the entire list when used inside the app.js rendering parent component.

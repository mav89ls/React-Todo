import React from "react";

const Todo = props => {
  return (
    <div
      className="items"
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;

// line 3 this function is taking in props from the APP.js file.

// line6.. There is css in className that gives it its styling, as well as a secondary style that will override the first className style if props.todo.completed is truthy for this task. if it is truthy there will be a line-through class added to it as we can see in the terrinary operator in line 6.

///////////////////BLOCKER this line after style= is in javascript because it is in parentheses although i dont know why the second line with text decoration is also in parenthesis. At the end of line 6, the terniary operator states that if this task is not truthy for props.todo.completed, then null styling will be applied to it.

// line 10 in between the divs this line of code is also taking in props from the app.js file for props.todo.task and will display this information in this div. it is also in parethesis because it is javascript.

//line 15, this function gets exported as ToDo and I believe this will display all the ToDo tasks with the right styling based on whether or not it is truth for props.todo.completed.

//////////////////BLOCKER I do not know why props.todo.id is doing on the onClick function.

// ToDoList is a parent component of this Todo Componenet so ToDoList will be passing props into here.

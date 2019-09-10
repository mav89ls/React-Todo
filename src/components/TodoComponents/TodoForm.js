import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        className="input"
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button className="button1" onClick={props.handleAddTodo}>
        Add Todo
      </button>
      <button className="button2" onClick={props.handleClearTodos}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;

// line 3... this function is taking in props from the app.js file

//line 5... this function is returning a form that will take in an input with the following properties

// line 7... the className for this input box in the form will be input and can be edited in the css file

// line 8 ... onChange is an event handler code that is reserved and will perform the following action when there is a change in the input box, it is taking in a function from the app.js file passsed down as props. it is in parenthesis because it is javascript inside of JSX.

//line 9 and 10... you are giving this input form properties of type and name as keys and giving those keys values of text and todo.

//line 11 props.value in app.js shows up as just value={this.state.todo} which sets value in state where it says todo. in app.js it also gives the ability to pass value = this.state.todo as a prop

//line 12 is the placeholder text inside the input field where it will just say todo so that you know to type that into the input box

//line 14 right after the first input is finished, this form will also return two buttons that will serve two different functions, the fist button will take in props from app.js that is a function that will add the todo to state whenever you click that button. refer to app.js so you can find out what the handleaddtodo function will do. button 2 will call handlecleartodos from app.js through props whenever called upon.

//line 20 closes out the form and below that you export the form default as ToDoForm so it can be used in app.js

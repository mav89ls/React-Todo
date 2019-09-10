import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

//notice how this class app is enclosing 99% of the following code. that means its all within the same scope of the class app. that means we can use the "this" keyword anywhere in this class component to refer to anything in this component.

// below we are creating a class component  that will use a constructor and a super function to extend the react.component background component. inside of the class component we are setting the state of this function to an array called todos that will always render 3 tasks by default on refresh as well as another key value pair called todo: that by default will render nothing.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Master React",
          id: 1,
          completed: false
        },
        {
          task: "Prepare for Sprint Challenge",
          id: 2,
          completed: false
        },
        {
          task: "Hit the Treadmill for 45min",
          id: 3,
          completed: false
        }
      ],
      todo: ""
    };
  }

  // I can use these types of comments here because it is still javascript, not jsx. pay attention to when you are in javascript scope and when you are in JSX scope.
  // below we are defining all of our event handlers that we will be able to pass to other componnents as props eventually.

  // the following function can take in an event as an argument and also reference that event in the following executionary code.

  ///////////////////////////////BLOCKER what does event.prevent default do exactly? stops the page from refreshing right?

  //on line 47 we are creating a new variable that will set task completed and id to different values based on state, false because its a new to do and by default not completed yet and giving date.now as an id,
  //////////////// BLOCKER: why do we need to define this variable and where do we use it later?

  // addTodo is a function that will also be able to set state using this.setState
  // it will set the key of todos to become a new array that will now include this.state.todos and any new todo that we may add ourselves.
  // the ... spread operator below will pass this.state.todos elements into the new todos array as individual elements, not as a grouped array.

  addTodo = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      // the ... spread operator below will pass this.state.todos elements into the new todos array as individual elements, not as one grouped array.
      todos: [...this.state.todos, newTodo],
      todo: ""
    });
  };

  ////////////////////// BLOCKER: need more help on the fuction below, specifically what event.target name do and what event.target.value do

  // event.target.name

  changeTodo = event =>
    this.setState({ [event.target.name]: event.target.value });
  //  This setState is the primary method you use to update the user interface in response to event handlers and server responses.

  // in the line above, event.target.name
  // the following fuction will be a toggle complete for whether a todo is completed or not, it will take an id as an argument
  //

  /////////// BLOCKER i will need help following the logic in the below function
  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();

    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = event => {
    event.preventDefault();
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="app-container">
        <h2>My ToDo's</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;

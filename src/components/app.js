import React from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'

class App extends React.Component { //定义组件，继承父类
    constructor() {
        super()
        this.state = {
            todos: this.getLocalTodos() || [],
            isDone: false
        }
    }
    addTodo(newTodo) {
        this.state.todos.push(newTodo);
        this.setState({todos: this.state.todos});  //设置状态
    }
    onTodoCheckedChange(index,isDone) {

        if(this.state.todos[index].isDone == isDone) {
            return false;
        }
        this.state.todos[index].isDone = isDone;
        this.setState(
            {
            todos: this.state.todos
           }
        );
        console.log(this.state.todos);
        this.updateLocalTodos(this.state.todos);
    }

    deleteTodo(index) {

            this.state.todos.splice(index,1);
            this.setState({todos: this.state.todos});
            this.updateLocalTodos(this.state.todos);


    }

    getLocalTodos() {
        if (!window.localStorage) {
            console.log("Your browser dose NOT support localStorage!");
            return '';
        }
        if (localStorage["Todolist"]) {
            console.log(JSON.parse(localStorage["Todolist"]));
            return JSON.parse(localStorage["Todolist"]);
        } else {
            return "";
        }
    }
    updateLocalTodos(todos) {
        if (!window.localStorage) {
            console.log("Your browser dose NOT support localStorage!");
            return;
        }
        localStorage["Todolist"] = JSON.stringify(todos);
    }

    render(){
        let doneList = [];
        let undoneList = [];
        this.state.todos.forEach(item=>{
            if(item.isDone)
                doneList.push(item)
            else
                undoneList.push(item);
        })
        return (
            <div className="todo-wrapper">
                <TodoHeader addTodo={(newTodo) => this.addTodo(newTodo)}/>
                <TodoMain state={false} todos={undoneList} onDelete={(index) => this.deleteTodo(index)}
                          onTodoCheckedChange = {(index,isDone) => this.onTodoCheckedChange(index,isDone)}/>
                <TodoMain state={true} todos={doneList} onDelete={(index) => this.deleteTodo(index)}
                          onTodoCheckedChange = {(index,isDone) => this.onTodoCheckedChange(index,isDone)}/>
            </div>
        );
    }

}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
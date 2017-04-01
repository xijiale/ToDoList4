import React from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'

class App extends React.Component { //定义组件，继承父类
    constructor() {
        super()
        let todolist = this.getLocalTodos();
        this.state = {
            doneList: todolist.doneList || [],
            undoneList: todolist.undoneList || []
        }
    }
    addTodo(newTodo) {
        this.state.undoneList.push(newTodo);
        this.setState({doneList: this.state.doneList});  //设置状态
        this.updateLocalTodos(this.state);
        this.getLocalTodos();
    }
    onTodoCheckedChange(index,isDone) {
        if(!isDone){
            this.state.doneList.push(this.state.undoneList[index]);
            this.state.undoneList.splice(index,1);
        }else {
            this.state.undoneList.push(this.state.doneList[index]);
            this.state.doneList.splice(index,1);
        }
        this.setState({doneList: this.state.doneList});
        this.setState({undoneList: this.state.undoneList});
        this.updateLocalTodos(this.state);
        this.getLocalTodos();
    }

    deleteTodo(index,isDone) {
        if (isDone) {
            this.state.doneList.splice(index,1);
        }else {
            this.state.undoneList.splice(index,1);
        }
        this.setState({doneList: this.state.doneList});
        this.setState({undoneList: this.state.undoneList});
        this.updateLocalTodos(this.state);
        this.getLocalTodos();
    }

    getLocalTodos() {
        if (!window.localStorage) {
            console.log("Your browser dose NOT support localStorage!");
            return '';
        }
        let todolist = JSON.parse(localStorage.getItem('Todolist'))
        console.log(todolist);
        return todolist;
    }
    updateLocalTodos(object) {
        if (!window.localStorage) {
            console.log("Your browser dose NOT support localStorage!");
            return;
        }
        localStorage.setItem('Todolist',JSON.stringify(object));
    }

    render(){
        return (
            <div className="todo-wrapper">
                <TodoHeader addTodo={(newTodo) => this.addTodo(newTodo)}/>
                <TodoMain state={false}
                          todos={this.state.undoneList}
                          onDelete={(index,isDone) => this.deleteTodo(index,false)}
                          onTodoCheckedChange = {(index,isDone) => this.onTodoCheckedChange(index,false)}/>
                <TodoMain state={true}
                          todos={this.state.doneList}
                          onDelete={(index,isDone) => this.deleteTodo(index,true)}
                          onTodoCheckedChange = {(index) => this.onTodoCheckedChange(index,true)}/>
            </div>
        );
    }

}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
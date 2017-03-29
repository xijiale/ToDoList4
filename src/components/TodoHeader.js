/**
 * Created by kingdee on 2017/3/27.
 */
import React from 'react'

class TodoHeader extends React.Component {
    // 绑定键盘回车事件，添加新任务
    handlerKeyUp(e) {
        if(e.keyCode == 13) {
            let value = e.target.value;
            if(!value) return alert('请输入任务！');
            let newTodoItem = {
                text: value,
                isDone: false
            };
            e.target.value = '';
            this.props.addTodo(newTodoItem)
        }
    }
    render(){
        return (
            <div className="header">
                <h2>ToDoList</h2>
                <input className="enter" onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
export default TodoHeader
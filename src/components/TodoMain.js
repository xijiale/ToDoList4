/**
 * Created by kingdee on 2017/3/27.
 */
import React from 'react'
import TodoItem from './TodoItem'

class TodoMain extends React.Component {
    render(){
        if(this.props.todos.length == 0) {
            return (
                <div className="todo-empty">恭喜您，目前没有待办任务</div>
            )
        } else {
            return (
                <div className="desk">
                    <div className="run">
                        <div className="a">
                            <h2 className="doing">正在进行</h2>
                            <span className="qunty">0</span>
                        </div>
                        <div>
                            <ul className="task">
                                {
                                    this.props.todos.map((todo,index) => {
                                        return <TodoItem text= {todo.text} isDone= {todo.isDone} index= {index} {...this.props} key = {index}/>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default TodoMain
/**
 * Created by kingdee on 2017/3/27.
 */
import React from 'react'
import TodoItem from './TodoItem'

class TodoMain extends React.Component {
    onTodoCheckedChange(index,isDone) {
        this.props.onTodoCheckedChange(index,isDone);
    }
    onDelete(index) {
        this.props.onDelete(index);
    }

    render(){
        let htext = this.props.state ? '已经完成' : '正在进行';

        return (
            <div className="desk">
                <div className="run">
                    <div className="a">
                        <h2 className="doing">{htext}</h2>
                        <span className="qunty">{this.props.todos.length}</span>
                    </div>
                    <div>
                        <ul className="task-doing">
                            {
                                this.props.todos.map((todo,index) => {
                                    return <TodoItem isDone={this.props.state} item={todo} index= {index}  key = {index} onDelete={(index) => this.onDelete(index)}
                                    onTodoCheckedChange = {(index,isDone) => this.onTodoCheckedChange(index,isDone)}/>
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

}
export default TodoMain
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
                                    return <TodoItem todos= {todo} index= {index}  key = {index} onDelete={(index) => this.onDelete(index)}
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
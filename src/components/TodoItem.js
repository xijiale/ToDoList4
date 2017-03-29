/**
 * Created by kingdee on 2017/3/27.
 */
import React from 'react'

class TodoItem extends React.Component {
    render() {
        let className = this.props.isDone?'task-doing':'task-done'
        return (
            <li className="list">
                <input type="checkbox" aria-label="..." className="inputtype"/>
                <span className= {className} style={{width: 480,padding:6}}>
                    {this.props.text}
                </span>
                <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>

            </li>

        )
    }
}

export default TodoItem
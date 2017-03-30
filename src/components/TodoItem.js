/**
 * Created by kingdee on 2017/3/27.
 */
import React from 'react'
import {findDOMNode} from 'react-dom'

class TodoItem extends React.Component {
    handlerChange() {
        let isDone = !this.props.todos.isDone;
        this.props.onTodoCheckedChange(this.props.index,isDone);
    }

    onDeleteClick() {
        this.props.onDelete(this.props.index);
    }

    render() {
        let doneStyle = this.props.todos.isDone ? {textDecoration: "line-through"} : {textDecoration: "none"};

            return (
                <li className="list">
                    <input type="checkbox" aria-label="..." className="inputtype" checked={this.props.todos.isDone} onChange={() => this.handlerChange()}/>
                    <span style={doneStyle}>
                        {this.props.todos.content}
                    </span>
                    <button ref='btlDel' onClick={() => this.onDeleteClick()}>
                        <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
                    </button>

                </li>
        )
    }
}

export default TodoItem
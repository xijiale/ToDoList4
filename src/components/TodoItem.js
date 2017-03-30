/**
 * Created by kingdee on 2017/3/27.
 */
import React from 'react'


class TodoItem extends React.Component {
    handlerChange() {
        let isDone = !this.props.item.isDone;
        this.props.onTodoCheckedChange(this.props.index,isDone);
    }

    onDeleteClick() {
        this.props.onDelete(this.props.index);
    }

    render() {
        let className = this.props.item.isDone ? 'list-done' : 'list-doing';

            return (
                <li className={className}>
                    <input type="checkbox" aria-label="..." className="box" checked={this.props.item.isDone} onChange={() => this.handlerChange()}/>
                    <span className="text">
                        {this.props.item.content}
                    </span>
                    <button ref='btlDel' onClick={() => this.onDeleteClick()} className="delete">
                        <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
                    </button>

                </li>
            )

    }
}

export default TodoItem
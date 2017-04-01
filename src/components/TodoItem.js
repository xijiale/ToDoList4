import React from 'react'


class TodoItem extends React.Component {
    handlerChange() {
        this.props.onTodoCheckedChange(this.props.index);
    }

    onDeleteClick() {
        this.props.onDelete(this.props.index);
    }

    render() {
        let className = this.props.state ? 'list-done' : 'list-doing';
        console.log(className);

        return (
            <li className={className}>
                <input type="checkbox"
                       aria-label="..."
                       className="box"
                       checked={this.props.state}
                       onChange={() => this.handlerChange()}/>
                <span className="text">
                        {this.props.item.content}
                    </span>
                <button ref='btlDel'
                        onClick={() => this.onDeleteClick()}
                        className="delete">
                    <span className="glyphicon glyphicon-remove-circle"
                          aria-hidden="true"></span>
                </button>

            </li>
        )

    }
}
export default TodoItem

import * as React from "react";

interface ITodoProps {
    completed: boolean;
    text: string;
    onClick: () => void;
    onDelete: () => void;
}

class Todo extends React.Component<ITodoProps, {}> {
    public render() {
        const { completed, text, onClick, onDelete} = this.props;
        return (
            <li>
                <label onClick={onClick} style={ {textDecoration: completed? 'line-through' : 'none' } }>
                    {text}
                </label>
                <button onClick={onDelete}>DELETE</button>
            </li>
        )
    }
}

export default Todo;
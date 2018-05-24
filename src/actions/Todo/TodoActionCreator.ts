import { IAddTodoAction, IToggleTodoAction, IDeleteTodoAction } from './TodoAction';
import { TodoActionType } from './TodoActionType';

let nextTodoId = 0;

export function addTodo(text: string): IAddTodoAction {
    return {
        id: nextTodoId++,
        text,
        type: TodoActionType.ADD_TODO,
    }
}

export function toggleTodo(id: number): IToggleTodoAction {
    return {
        id,
        type: TodoActionType.TOGGLE_TODO
    }
}

export function deleteTodo(id: number): IDeleteTodoAction {
    return {
        id: id,
        type: TodoActionType.DELETE_TODO
    }
}
import { TodoActionType } from './TodoActionType'

export interface IAddTodoAction {
    type: TodoActionType.ADD_TODO;
    id: number;
    text: string;
}

export interface IToggleTodoAction {
    type: TodoActionType.TOGGLE_TODO;
    id: number;
}

export interface IDeleteTodoAction {
    type: TodoActionType.DELETE_TODO;
    id: number;
}

export type TodoAction = IAddTodoAction | IToggleTodoAction | IDeleteTodoAction;
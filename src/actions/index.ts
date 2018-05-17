let nextTodoId = 0;

// すべてのActionをEnumで列挙する
export enum TodoActionType {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    DELETE_TODO = 'DELETE_TODO'
}

// それぞれのActionのInterfaceを定義する[Action]
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

// それぞれのActionを定義する [ActionCreator]
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
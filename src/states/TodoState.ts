export interface ITodo {
    id: number;
    completed: boolean;
    text: string;
}

export type Todos = ITodo[];

let id: number = 0;

function generateTodo(text: string, id: number): ITodo {
    return {
        completed: false,
        id: id,
        text: text
    }
}

export function generateTodos(text: string[]): ITodo[] {
    return text.map(t => {
        let res = generateTodo(t, id);
        id++;
        return res;
    })
}
import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
    todos: InitialTodo[];
}
export interface InitialTodo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const todosSlice = createSlice({
    name: 'todos',

    initialState: {
        todos: [
            {
                id: Date.now(),
                title: 'Example Todo',
                completed: false,
            },
        ],
    } as InitialState,

    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload.todo);
        },

        removeTodo(state, action) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        toggleTodo(state, action) {
            const todo = state.todos.find(
                (todo: InitialTodo) => todo.id === action.payload
            );

            if (todo) {
                todo.completed = !todo?.completed;
            }
        },

        clearTodo(state) {
            state.todos = [
                {
                    id: Date.now(),
                    title: 'Example Todo',
                    description: '',
                    completed: false,
                },
            ];
        },

        editTodo(state, action) {
            const todo = state.todos.find(
                (todo) => todo.id === action.payload.id
            );

            if (todo) {
                todo.title = action.payload.title;
                todo.description = action.payload.description;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, clearTodo, editTodo } =
    todosSlice.actions;

export default todosSlice.reducer;

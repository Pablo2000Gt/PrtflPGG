import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo: (state,action)=>{
            const newTodo = {
                id: Date.now(),
                text:action.payload.text,
                completed:false
            };
            state.push(newTodo);
        },
        toogleTodo:(state,action)=>{
            const index = state.findIndex((todo)=> todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo:(state,action)=>{
            return state.filter((todo)=> todo.id !== action.payload.id);
        },
        editTodo:(state,action)=>{
            const index = state.findIndex((todo)=> todo.id === action.payload.id);
            state[index].text = action.payload.text
        }

    }
})

export const{
    addTodo,
    toogleTodo,
    deleteTodo,
    editTodo
} = todoSlice.actions;
export default todoSlice.reducer;
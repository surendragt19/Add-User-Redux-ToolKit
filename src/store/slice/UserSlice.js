import { createSlice } from '@reduxjs/toolkit'


const usersSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        //micro reducer
        AddUsers(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.pop(action.payload)
            
        },
        dropUser(state,action){
            return state=[]
            
        },
    }
});
console.log(usersSlice.actions)
export default usersSlice.reducer;

export const {AddUsers,removeUser,dropUser} = usersSlice.actions;
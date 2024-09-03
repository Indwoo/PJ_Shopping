import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


export let {changeName, addAge} = user.actions

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let bascket = createSlice({
  name : 'bascket',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCnt(state,actions){
      let id = state.findIndex((a)=>{return a.id === actions.payload})
      state[id].count++
    },
    additem(state,actions){
      state.push(actions.payload)
    }
  }
})

export let {changeCnt, additem} = bascket.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    bascket : bascket.reducer
  }
}) 
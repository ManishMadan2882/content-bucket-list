import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const bucketSlice = createSlice({
    name:"buckets",
    initialState:[],
    reducers:{

        addBucket(state,action){
            state.push({
                id:uuidv4(),
                title:"",
                list:[
                 {
                  id:0,
                  title:"",
                  url:""
                 }
                ]
              })
        },
        
        addCard(state,action)
        {
            let parent = action.payload.parentId;
            state[parent].list.push({
                id:uuidv4(),
                title:'',
                url:''
            })
        },
        
        updateCard(state,action){
            state[action.payload.parentId].list[action.payload.cardId].title = action.payload.title;
            state[action.payload.parentId].list[action.payload.cardId].url = action.payload.url;
        },
        
        removeBucket(state,action){
            state.splice(action.payload.id,1)
        },
        
        removeCard(state,action){
            state[action.payload.parentId].list.splice(action.payload.cardId,1);
        },
        
        updateTitle(state,action){
            state[action.payload.id].title = action.payload.title;
        } 
    }
})

export const {addBucket,removeBucket,updateTitle,updateCard,addCard,removeCard} = bucketSlice.actions

export default bucketSlice.reducer
import {createSlice} from '@reduxjs/toolkit'

const idGenerator=()=>{
    return Math.floor(Math.random() * 100000+1);
}
async function fetchData() {
    const response = await fetch('http://localhost:3000/data/10000000');
    const data = await response.json();
    return data.buckets;
  }

const bucketSlice = createSlice({
    name:"buckets",
    initialState: await fetchData(),
    reducers:{

        addBucket(state,action){
            state.push({
                id:idGenerator(),
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
                id:idGenerator(),
                title:'',
                url:''
            })
            return state
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
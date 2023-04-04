import { useState } from 'react'
import { addBucket } from './store/slice/bucketSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './App.css'
import { Bucket } from './components/bucket' 
function App() {
  const dispatch  = useDispatch();
  const addNewBucket = (payload)=>{

    dispatch(addBucket())
  }
  let myState = useSelector((state)=>{
    return state.buckets
  })
   
  return (
    <div >
      
      {
        myState.map((bucket,key)=>{
          return <Bucket id={key} key={key} />
        })
      }

        <div className='flex justify-center my-4'>
          <button onClick={addNewBucket} className='w-11/12 bg-sky-800 hover:bg-sky-500 hover:text-black text-white text-6xl rounded-lg '>+</button>
        </div>
    </div>
      )
}

export default App

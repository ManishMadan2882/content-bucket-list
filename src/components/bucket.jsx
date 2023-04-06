import deleteIcon from '../assets/delete.svg'
import { useDispatch,useSelector } from 'react-redux'
import { Card } from './card'
import { React,useEffect, useState } from 'react'
import { removeBucket,updateTitle,addCard } from '../store/slice/bucketSlice'

export const Bucket = (props) => {  
  const dispatch  = useDispatch();
  let BucketState = useSelector((state)=>{
     return state.buckets[props.id]
   })
   useEffect(()=>{
    dispatch(updateTitle({id  : props.id,title:title})) 
   })
   const [title, setTitle] = useState(BucketState.title)
  const deleteBucket = ()=>{
    dispatch(removeBucket({id  : props.id}))
  }
  
  const handleChange = (eve)=>{
      setTitle(eve.target.value)
  }
  const addNewCard= ()=>{
    dispatch(addCard({parentId:props.id}))
  }
  
  return (

    <div className="flex flex-wrap justify-center my-2 drop-shadow-2xl">
  
    <div className=' bg-cyan-200 p-4  w-11/12 rounded-xl'>
    <div className='block w-full'>
      <input value={title} onChange={handleChange} className='w-[200px] float-left border-none p-1 bg-slate-200' placeholder={"Bucket Title "+props.id }/>
      <button onClick={deleteBucket} className='float-right hover:bg-white   border-none' >
         <img src={deleteIcon} className="w-7 " alt="delete"  />
      </button> 
    </div>
    <div className='flex flex-wrap p-6 w-full'>
   
     {
        BucketState.list.map((element,key)=>{
         
          return <Card id={key} key={key} parentId={props.id} />
        })
      }
     <button onClick={addNewCard} className='  hover:bg-teal-500 p-4 m-4 text-4xl rounded-lg bg-teal-700 h-[100px] w-[150px] text-white'>+</button>
    
    </div>
    </div>
    
  </div>
  )
}

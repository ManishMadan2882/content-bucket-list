import React,{useEffect,useState} from 'react'
import { addBucket, initState} from './store/slice/bucketSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './App.css'
import { Bucket } from './components/bucket' 

function App() {
  const [loaded,setLoaded] = useState(false);
  const dispatch  = useDispatch();
   
  
  const addNewBucket = (payload)=>{

    dispatch(addBucket())

  }
  let myState = useSelector((state)=>{
    return state.buckets
  })
  useEffect(()=>{
if(loaded)
{
  fetch('https://contentbucket.onrender.com/buckets/0', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({arr : myState})
})
  .then(response => response.json())
  .catch(error => console.error(error));
  }
  else
  {
    fetch('https://contentbucket.onrender.com/buckets/0')
   .then(response => response.json())
   .then((data) => {
    console.log(data);
    setLoaded(true)
      dispatch(initState(data.arr))
    })
  .catch(error => console.error(error));  
  }
}
  )

  console.log(myState)
  return (
    <div >
    <h1 className=' block font-semibold text-2xl text-center p-1  bg-sky-100  text-cyan-600'>PlayList</h1>
      {
        myState.map((bucket,key)=>{
          return <Bucket id={key} key={key} />
        })
      }

        <div className='flex justify-center my-4'>
          <button onClick={addNewBucket} className='drop-shadow-2xl w-11/12 bg-sky-800 hover:bg-sky-500 hover:text-black text-white text-6xl rounded-lg '>+</button>
        </div>
    </div>
      )
}

export default App

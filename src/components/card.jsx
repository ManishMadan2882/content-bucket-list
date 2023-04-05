import { useState,useEffect,React } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import deleteIcon from '../assets/del.png'
import playButton from '../assets/play-button.png'
import VideoModal from './videoPlayer'
import { updateCard,removeCard} from '../store/slice/bucketSlice'

export const Card = (props) => {
  const dispatch  = useDispatch();
  let CardState = useSelector((state)=>{
     return state.buckets[props.parentId].list[props.id]
   })

  const [title,setTitle] = useState(CardState.title)
  const [url,setUrl] = useState(CardState.url)
  const handleTitleChange = (eve)=>{
    setTitle(eve.target.value)
  }
  const handleUrlChange = (eve)=>{
    setUrl(eve.target.value)
}
const deleteCard=(eve)=>{
 dispatch(removeCard({
  cardId:props.id,
  parentId:props.parentId
 }))
}
 const launchVideo=()=>{
  return <VideoModal url={url}/>
 }
 
  useEffect(()=>{
    dispatch(updateCard(
      {
        cardId:props.id,
        parentId  : props.parentId,
        title:title,
        url:url
      }
      )
      )
   })
  return (
    <div className=' bg-sky-400 rounded-br-xl rounded-tl-xl  m-4 p-2'>

        <input value={title} onChange={handleTitleChange} placeholder='URL title' className='block mt-1 p-1 rounded-sm w-[150px]'></input>
        <input value={url} onChange={handleUrlChange}  placeholder='https://' className='block p-1 mt-1 rounded-sm w-[150px]'></input>
       <div className='flex justify-evenly p-2'>
       <VideoModal url={url} title={title}/>
       {/* <button onClick={launchVideo} className='hover:bg-sky-100 rounded-full' ><img src={playButton} className="w-7"/></button> */}
       <button onClick={deleteCard} className='hover:bg-red-200 rounded-lg' ><img src={deleteIcon} className="w-7"/></button>
       </div>
    </div>
  )
}

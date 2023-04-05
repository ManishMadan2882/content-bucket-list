import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import Modal from 'react-modal';
import playIcon from '../assets/play-button.png'
Modal.setAppElement('#root'); // set the app root element to handle screen readers

function VideoModal(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
console.log(props.url);
  return (
    <>  
      <button className='hover:bg-sky-100 rounded-full w-7' onClick={handleOpenModal}><img src={playIcon}/></button>
      <Modal  className="bg-slate-600 p-2" isOpen={modalOpen} onRequestClose={handleCloseModal}>
      <button className=' float-right bg-red-900 text-white px-3 py-1 hover:bg-red-500 rounded-full' onClick={handleCloseModal} >x</button>
      <h1 className='text-white font-bold p-1'>{props.title}</h1>
        <ReactPlayer url={props.url} controls width={"full"} />              
      </Modal>
    </>
  );
}

export default VideoModal;
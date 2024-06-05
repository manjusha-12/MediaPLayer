import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI,  saveHistoryAPI } from '../Services/AllAPI';
import { toast } from 'react-toastify';

function VideoCard({displayData,setRemoveResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async() => {
    setShow(true);
    const {caption,youtubeLink}=displayData
    const systemTime= new Date()
    // let options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    // console.log(systemTime.toLocaleString('en-US', options));
    
    const formattedDate = systemTime.toLocaleString('en-US',{timeZoneName:'short'});
    console.log(formattedDate);
    const videoHistory={caption,youtubeLink,timeStamp:formattedDate}

    try{
      await saveHistoryAPI(videoHistory)

    }
    catch(err){
      console.log(err);

    }

  }
  const handleRemoveVideo=async(videoId)=>{
      try {
        const result= await removeVideoAPI(videoId)
        setRemoveResponse(result.data)
        console.log(result);
      } 
      catch (err) {
        console.log(err);
      }
  }
  const dragStarted=(e,videoId)=>{
    console.log(`Dragged....${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
  }
  return (
    <div>
      <Card draggable={true} onDragStart={e=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} height={'150px'} variant="top" src={displayData?.imgURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
          { !insideCategory &&
          <button onClick={()=>handleRemoveVideo(displayData?.id)} className="btn"><i className="fa-solid fa-trash text-danger" ></i></button>
          }
          </Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg'
        show={show}
        onHide={handleClose}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>        
      </Modal>
    </div>
  )
}

export default VideoCard




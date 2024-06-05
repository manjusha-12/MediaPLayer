import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/AllAPI';

function Add({setAddVideoResponse}) {
  const [invalidYTLink,setInvaliYTLink] = useState(false)
  const [videoDetails,setVideoDetails]=useState({
    caption:"",imgURL:"",youtubeLink:""
  })
  const [show, setShow] = useState(false);
  console.log(videoDetails);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getEmbedCode=(link)=>{
    if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
      console.log(videoId);
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      setInvaliYTLink(false)
    }
    else{
      setVideoDetails({...videoDetails,youtubeLink:""})
      setInvaliYTLink(true)
   
    }
  }
  const handleUpload=async()=>{
    console.log("Upload Function Invoked!!!");
    //destructuring
    const {caption,imgURL,youtubeLink}=videoDetails
    if(caption && imgURL && youtubeLink){
       console.log("api call");
       try {
        const result=await addVideoAPI(videoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          console.log(result.data);
          setAddVideoResponse(result.data)
          toast.success(`${result.data.caption} added your collection`)
          handleClose()
        }else{
          toast.error(result.response.data)
        }
       } catch (error) {
        console.log(error);
       }
    }
    else{
      toast.warning("Please fill the form completely...")
    }
  }
    
  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fs-5'>+</button>
    </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <div className='border rounded p-3'>
          <FloatingLabel className='mb-3' controlId="floatingInputCaption" label="Video Caption">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel className='mb-3' controlId="floatingInputImage" label="Image Url">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgURL:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel className='mb-3' controlId="floatingInputYoutube" label="Youtube Video Link">
        <Form.Control onChange={e=>getEmbedCode(e.target.value)} type="text" placeholder="Video Caption" />
      </FloatingLabel>
       {
        invalidYTLink && 
        <div className='text-danger fw-bolder'>
          Invalid YouTube Link
          </div>
       }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info' variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={5000} theme='dark' />
    </>
  )
}

export default Add




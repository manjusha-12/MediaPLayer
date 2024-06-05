import React,{useEffect, useState} from 'react'
import { Modal,Button,FloatingLabel,Form } from 'react-bootstrap'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';
import { addCategoryAPI, getAVideoAPI, getAllCategoryAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../Services/AllAPI';

function Category({deleteVideoCategoryResponse,setRemoveCategoeryVideoResponse}) {

  const [categoryName,setCategoryName]=useState("")
  const [allCategory,setAllCategory]=useState([])
  const [show, setShow] = useState(false);
  console.log(allCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
   getAllCategory()
  },[deleteVideoCategoryResponse])
  const getAllCategory=async()=>{
    try {
      const result=await getAllCategoryAPI()
      setAllCategory(result.data)
    } catch (error) {
      console.log(error);
    }
  }
  const handleAddCategory=async()=>{
      if(categoryName){
        //api call
        try {
          
          await addCategoryAPI({categoryName,allVideos:[]})
          setCategoryName("")
          handleClose()
          getAllCategory()
          
        } catch (error) {
          console.log(error);
        }

      }
      else{
        toast.warning("Please fill the form correctly....")
      }
  }
  const handleRemoveCategory=async(categoryId)=>{
    try {
      await removeCategoryAPI(categoryId)
      getAllCategory()
    } catch (error) {
      console.log(error);
    }
  }
  const dragOverCategory=(e)=>{
    e.preventDefault()
    console.log("Dragging over category")
  }
  const videoDropped=async(e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    console.log(`video id ${videoId} dropped in category id : ${categoryId}`);
    try {
      const {data}=await getAVideoAPI(videoId) 
    console.log(data);
    let selectedCategory=allCategory?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    const result=await removeVideoAPI(videoId)
    setRemoveCategoeryVideoResponse(result)
    getAllCategory()
    } catch (error) {
      console.log(error);
    }
  }
  const videoDragStarted=(e,videoDetails,categoryId)=>{
    console.log(videoDetails,categoryId);
    console.log("Video Drag Started from category...");
    let dataShare={categoryId,videoDetails}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }
  return (
    <>
    <div className="d-flex justify-content-around">
      <h3>All Categories</h3>
      <button onClick={handleShow} style={{width:'50px',height:'50px'}} className='btn btn-warning ms-3 rounded-circle fs-5'>+</button>

    </div>
{/* Display Category */}

  <div className="container-fluid mt-3">
    {
      allCategory.length>0?
      allCategory?.map(item=>(
      <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={e=>videoDropped(e,item?.id)} key={item?.id} className='border rounded p-3 mb-2'>
         <div className="d-flex justify-content-between">
           <h5>{item?.categoryName}</h5>
           <button onClick={()=>handleRemoveCategory(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>

         </div>
         {/* display videos in category */}
         <div className="row mt-2">
          {
            item.allVideos?.length>0 &&
            item.allVideos?.map(video=>(
              <div draggable={true} onDragStart={e=>videoDragStarted(e,video,item.id)} key={video?.id} className='col-lg-6'>
                  <VideoCard displayData={video} insideCategory={true}/>
              </div>
            ))
          }
         </div>
      </div>
      ))
      :
      <div className='text-danger fw-bolder'>
        No Categories are added yet....
      </div>
    }
   
  </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
      >
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>

    </>
  )
}

export default Category




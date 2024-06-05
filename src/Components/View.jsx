import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from '../Services/AllAPI'

function View({setDeleteVideoCategoryResponse,addVideoResponse,removeCategoryVideoResponse}) {
const [removeResponse,setRemoveResponse]=useState("")
  const [allVideos,setAllvideos]=useState([])
  console.log(allVideos);
  useEffect(()=>{
   getAllVideos()

  },[addVideoResponse,removeResponse,removeCategoryVideoResponse])

  const getAllVideos=async()=>{
    try{
      const result=await getAllVideoAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAllvideos(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }
  const dragOverView=(e)=>{
    e.preventDefault()
  }
  const handleCategoryVideo=async(e)=>{
    const {categoryId,videoDetails}=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(categoryId,videoDetails);
    try {
      const {data}=await getSingleCategoryAPI(categoryId)
      console.log("getsinglecategory");
      console.log(data);
      const updatedCategoryVideoList=data.allVideos.filter(item=>item.id!==videoDetails.id)
      console.log("Updated category");
      console.log(updatedCategoryVideoList);
      const {categoryName,id}=data
      const categoryResult =await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryVideoList})
         console.log(`category result is ${categoryResult}`);
         setDeleteVideoCategoryResponse(categoryResult.data)
         await addVideoAPI(videoDetails)
         getAllVideos()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
       <Row droppable={true} onDragOver={(e)=>dragOverView(e)} onDrop={(e)=>handleCategoryVideo(e)}>
        {
          allVideos.length>0?
          allVideos?.map(video=>(
          <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
           <VideoCard displayData={video} setRemoveResponse={setRemoveResponse}/>
          </Col>
          ))
          :
          <div className='fw-bolder text-danger'>Nothing to display</div>
        }
      </Row>
    </>
  )
}

export default View


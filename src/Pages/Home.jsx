import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View' 
import Category from '../Components/Category'

function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoeryVideoResponse]=useState([])
  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [deleteVideoCategoryResponse,setDeleteVideoCategoryResponse]=useState("")
  
  return (
    <>
      <div className='container my-5 d-flex justify-content-between'>
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link to={'/History'} >Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3>ALL VIDEOS</h3>
          <View setDeleteVideoCategoryResponse={setDeleteVideoCategoryResponse} addVideoResponse={addVideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse}/>
        </div>
        <div className="col-lg-6">
          <Category deleteVideoCategoryResponse={deleteVideoCategoryResponse} setRemoveCategoeryVideoResponse={setRemoveCategoeryVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home



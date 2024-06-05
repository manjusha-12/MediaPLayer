import commonAPI from "./commonAPI"
import SERVER_URL from "./server_url"

//save video
export const addVideoAPI=async(video)=>{
    //to store videoDetails in json file
    //to go with json file call commonAPI
    //add video called by add component
    return await commonAPI('POST',`${SERVER_URL}/allVideos`,video)
}

export const getAllVideoAPI=async()=>{
    //to get all video details from json file
    //to go with json file call commonAPI
    //get all video called by view component
    return await commonAPI('GET',`${SERVER_URL}/allVideos`,"")
}

//remove video called by videocard component
export const removeVideoAPI=async(videoId)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/allVideos/${videoId}`,{})

}

//store History called by videocard component
export const saveHistoryAPI=async(video)=>{
    return await commonAPI('POST',`${SERVER_URL}/history`,video)
}

//get videoHistory called by view component
export const getVideoHistoryAPI=async()=>{
    return await commonAPI('GET',`${SERVER_URL}/history`,"")
}
//removeHistory called by history component
export const removeHistoryAPI=async(videoId)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/history/${videoId}`,{})
}

//addCategory called by Category Component
export const addCategoryAPI=async(categoryDetails)=>{
    return await commonAPI('POST',`${SERVER_URL}/categories`,categoryDetails)
}
 
//getCategory called by category component
export const getAllCategoryAPI=async()=>{
    return await commonAPI('GET',`${SERVER_URL}/categories`,"")
}

//removeCategory called by category component
export const removeCategoryAPI=async(categoryId)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/categories/${categoryId}`,{})
}

//get a Video called by category component
export const getAVideoAPI=async(videoId)=>{
    return await commonAPI('GET',`${SERVER_URL}/allVideos/${videoId}`,"")
}
//update Category called by category component
export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
    return await commonAPI('PUT',`${SERVER_URL}/categories/${categoryId}`,categoryDetails)
}

//get a Video called by view component
export const getSingleCategoryAPI=async(categoryId)=>{
    return await commonAPI('GET',`${SERVER_URL}/categories/${categoryId}`,"")
}




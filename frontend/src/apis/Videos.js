import axiosInstance from "../config/apiConfig";


export const getAllVideos = async()=>{
    try {
        const response = await axiosInstance.get("/videos");
        console.log("fetch data",response);
        return response?.data;
    } catch (error) {
        console.log("error while fetchig videos",error)
    }
}
import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const getBlogsApi = async () => {
    try {
        return axios.get(AURORA_API + "/blogs")
    }catch (e){
        console.log(e)
        return e.response
    }
}

export const searchBlogsApi = async (keyword) => {
    try {
        return axios.get(AURORA_API + "/blogs/search?keyword=" + keyword)
    }catch (e){
        console.log(e)
        return e.response
    }
}
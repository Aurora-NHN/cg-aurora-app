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
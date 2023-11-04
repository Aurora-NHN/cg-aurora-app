import axios from "axios";
import {AURORA_API} from "~/app/constants";
export const createNumerologyReport = async (customerInputData) => {
    let result = null;
    let token = localStorage.getItem("token");
    try {
        result = await axios.post(
            `${AURORA_API}/numerology`,
            customerInputData,
            {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        );
    }catch (e){
        console.log(e);
        result = e.response;
    }
    return result;
};

export const getAllNumerologyReportForUser = async () => {
    let result = null;
    let token = localStorage.getItem("token");
    try {
        result = await axios.get(
            `${AURORA_API}/numerology/history`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        );
    }catch (e){
        console.log(e);
        result = e.response;
    }
    return result;
};

export const getPageNumerologyReportForUser = async (pageNumber) => {
    let token = localStorage.getItem("token");
    try {
        return await axios.get(

            `${AURORA_API}/numerology/history?page=${pageNumber}`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }

        );
    }catch (e){
        console.log(e);
        return  e.response;
    }
};


import axios from "axios";
const NUMEROLOGY_API = "http://localhost:8080/api/front-store/numerology";

export const createNumerologyReport = async (customerInputData) => {
    let result = null;
    try {
        result = await axios.post(`${NUMEROLOGY_API}`, customerInputData);
    } catch (error) {
        console.log("Create free numerology report fail! " + error);
    }
    return result;
};

export const createFullNumerologyReport = async (customerInputData) => {
    let result = null;
    let token = localStorage.getItem("token");
    try {
        result = await axios.post(
            `${NUMEROLOGY_API}/full-vip`,
            customerInputData,
            {
                headers: {
                    Authorization: "Bearer " + token,
                }
            }
        );
    }catch (e){
        console.log(e);
    }
    return result;
}
import axios from "axios";
const NUMEROLOGY_API = "http://localhost:8080/api/front-store/numerology";

export const createNumerologyReport = async (customerInputData) => {
    let result = null;
    try {
        result = await axios.post(`${NUMEROLOGY_API}`, customerInputData);
    } catch (e) {
        console.log("Create free numerology report fail! " + e);
        result = e.response;
    }
    return result;
};

export const createFullNumerologyReport = async (customerInputData) => {
    let result = null;
    let token = localStorage.getItem("token");
    console.log("api numerolory");
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
        result = e.response;
    }
    return result;
}
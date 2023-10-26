import axios from "axios";
const NUMEROLOGY_API = "http://localhost:8080/api/store-front/numerology";
export const createNumerologyReport = async (customerInputData) => {
    let result = null;
    let token = localStorage.getItem("token");
    try {
        result = await axios.post(
            `${NUMEROLOGY_API}`,
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
            `${NUMEROLOGY_API}/history`,
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


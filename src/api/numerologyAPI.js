import axios from "axios";
const NUMEROLOGY_API = "http://localhost:8080/api/front-store/numerology";

export const createFreeNumerologyReportFree = async (customerInputData) => {
    let result = null;
    try {
        result = await axios.post(`${NUMEROLOGY_API}`, customerInputData);
        console.log(result);
        console.log("Create free numerology report successfully!");
    } catch (error) {
        console.log("Create free numerology report fail! " + error);
    }
    return result;
};
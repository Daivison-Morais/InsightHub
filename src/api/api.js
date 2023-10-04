import axios from "axios";

const URL_API="http://localhost:5000/api/prompt";

export const makeRequest = async (message) => {
    console.log("MESSAGEM", message)

    try {
        const { data } = await axios.post(URL_API, message);
        return data;
    } catch (error) {
        console.log("AQUI", error)
    }
}
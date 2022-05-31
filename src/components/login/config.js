import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://forexsession.herokuapp.com/api/",
});

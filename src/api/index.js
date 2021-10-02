import axios from "axios";

const url = "http://localhost:5000/albums";

export const fetchAll = () => axios.get(url);
export const fetchOne = (id) => axios.get(`${url}/${id}`);

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchFoods = () => API.get("/food_list");
export const fetchMenus = () => API.get("/menu_list");

export default API;

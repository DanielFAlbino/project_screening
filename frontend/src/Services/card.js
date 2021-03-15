/* import api from "./api"; */
import axios from "axios";
const URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

async function get(payload) {
  const res = await axios.get(URL + "/api/card/", payload);
  return res ? res.data : "card not found!";
}

async function update(payload) {
  const res = await axios.post(URL + "/api/card/update/", payload);
  return res ? res.data : "card not found!";
}

async function remove(payload) {
  const res = await axios.delete(URL + "/api/card/delete/", payload);
  return res ? res.data : "card not found!";
}

export { update, remove, get };

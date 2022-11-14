import axios from "axios";

// helpers
import { REST_API_URL } from "../helpers/constants";


const customFetch = axios.create({
  baseURL: REST_API_URL,
  headers: { "Content-Type": "application/json" }
});


export default customFetch;

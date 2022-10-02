import axios from "axios";
axios.defaults.headers = {
  "Content-Type": "application/json",
};
const Axios = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://admin-stay.herokuapp.com/api/v1/member",
});

export default Axios;

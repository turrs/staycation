import axios from "axios";
axios.defaults.headers = {
  "Content-Type": "application/json",
};
const Axios = axios.create({
  baseURL:
    "https://corsanywhere.herokuapp.com/https://admin-stay.herokuapp.com/api/v1/member",
});

export default Axios;

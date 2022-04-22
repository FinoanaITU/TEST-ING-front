import axios from "axios";

var Api = axios.create({
    baseURL: 'http://127.0.0.1:4641'
});

export default Api;
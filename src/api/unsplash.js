import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID t6-1l0jnL8uws6UT3Ymi2sq9CB1ptMgNvb2SOx2ESVY",
  },
});

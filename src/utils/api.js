import axios from "axios";

export const getProducts = () => {
  return axios.get("/api/products").then(({ data }) => {
    console.log(data, "<--data");
    return data;
  });
};

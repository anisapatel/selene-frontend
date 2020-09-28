import axios from "axios";

export const getProducts = () => {
  return axios.get("/api/products").then((res) => {
    console.log(res, "<--");
    // console.log(data, "<--data");
    // return data.products;
  });
};

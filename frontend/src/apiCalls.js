import axios from "axios";
const ENDPOINT = "http://localhost:4000";

export const signup = async (data) => {
  await axios
    .post(
      `${ENDPOINT}/api/siignup`,
      {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        password: data.password,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const login = async (data) => {
  await axios
    .post(
      `${ENDPOINT}/api/login`,
      {
        email: data.email,
        password: data.password,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const logout = async () => {
  await axios
    .get(`${ENDPOINT}/api/logout`, {
      withCredentials: true,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const addProduct = async (data) => {
  await axios
    .post(
      `${ENDPOINT}/api/addProduct`,
      {
        title: data.title,
        description: data.description,
        category: data.category,
        marque: data.marque,
        subCategory: data.subCategory,
        quantity: data.quantity,
        taille: data.taille,
        price: data.price,
        dateAdded: data.dateAdded,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const updateProduct = async (data) => {
  await axios
    .post(
      `${ENDPOINT}/api/addProduct/${data.id}`,
      {
        title: data.title,
        description: data.description,
        category: data.category,
        marque: data.marque,
        subCategory: data.subCategory,
        quantity: data.quantity,
        taille: data.taille,
        price: data.price,
        dateAdded: data.dateAdded,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const deleteProduct = async (id) => {
  await axios
    .delete(`${ENDPOINT}/api/addProduct/${id}`, {
      withCredentials: true,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const getAllProducts = async () => {
  await axios
    .get(`${ENDPOINT}/api/getAllProducts`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const getAllProductsByCategory = async (category) => {
  await axios
    .get(`${ENDPOINT}/api/getAllProductsByCategory/${category}`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const getAllProductsBySubCategory = async (subCategory) => {
  await axios
    .get(`${ENDPOINT}/api/getAllProductsBySubCategory/${subCategory}`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const getProductByTitle = async (title) => {
  await axios
    .get(`${ENDPOINT}/api/getProductByTitle/${title}`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

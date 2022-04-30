import axios from "axios";
// const url = "https://phonebook-backend-2022.herokuapp.com/api/persons";
// const url = "/api/persons";
const url = `${
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_BASE_URL
}/api/persons`;

const get = async (req, res) => {
  const data = await axios.get(url);
  return data;
};

const add = async (person) => {
  const data = await axios.post(url, person);
  return data;
};

const remove = async (id) => {
  const data = axios.delete(`${url}/${id}`);
  return data;
};

const update = async (id, person) => {
  const data = axios.put(`${url}/${id}`, person);
  return data;
};

export default { get, add, remove, update };

import axios from "axios";
const url = "http://localhost:3001/api/persons";

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

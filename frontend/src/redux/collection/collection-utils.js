import axios from "axios";

export const fetchData = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/robots");
    return data.data;
  } catch (e) {
    return [];
  }
};

export default {
  fetchData,
};

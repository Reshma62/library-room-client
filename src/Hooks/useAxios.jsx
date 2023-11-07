import axios from "axios";

const instance = axios.create({
  baseURL: "https://library-room-server-c20tzajhz-reshma62.vercel.app/api/v1",
  // withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

const useQueryCategory = () => {
  // const axios = useAxios();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/admin/getall-category`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useQueryCategory;

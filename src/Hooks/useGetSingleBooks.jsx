import axios from "axios";
import baseUrl from "../utils/baseUrl";
import useAuthContext from "./useAuthContext";
import { useQuery } from "@tanstack/react-query";

const useGetSingleBooks = (id) => {
  console.log(id, "getSingleBooks");
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["getSingleBook", id],
    queryFn: async () => {
      const response = await axios.get(
        `${baseUrl}/admin/get-single-book/${id}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetSingleBooks;

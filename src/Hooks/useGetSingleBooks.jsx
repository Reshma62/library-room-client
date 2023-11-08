import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetSingleBooks = (id) => {
  const axios = useAxios();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["getSingleBook", id],
    queryFn: async () => {
      const response = await axios.get(`/admin/get-single-book/${id}`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetSingleBooks;

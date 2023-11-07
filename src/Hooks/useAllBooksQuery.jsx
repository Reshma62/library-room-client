import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllBooksQuery = () => {
  const axios = useAxios();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allBooks"],
    queryFn: async () => {
      const response = await axios.get("/admin/getall-product");
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllBooksQuery;

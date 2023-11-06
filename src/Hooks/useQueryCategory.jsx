import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useQueryCategory = () => {
  const axios = useAxios();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axios.get("/admin/getall-category");
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useQueryCategory;

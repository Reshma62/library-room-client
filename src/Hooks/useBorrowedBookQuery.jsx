import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuthContext from "./useAuthContext";

const useBorrowedBookQuery = () => {
  const axios = useAxios();
  const { user } = useAuthContext();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allBorrowedBook", user?.email],
    queryFn: async () => {
      const response = await axios.get(
        `/user/get-borrow-book?email=${user?.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useBorrowedBookQuery;

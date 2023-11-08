import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuthContext from "./useAuthContext";
import baseUrl from "../utils/baseUrl";
import axios from "axios";

const useBorrowedBookQuery = () => {
  // const axios = useAxios();
  const { user } = useAuthContext();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allBorrowedBook", user.email],
    queryFn: async () => {
      const response = await axios.get(
        `${baseUrl}/user/get-borrow-book?email=${user.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useBorrowedBookQuery;

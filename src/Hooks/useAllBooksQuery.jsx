import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

const useAllBooksQuery = (queryParam, totalPages, itemsPerPage) => {
  // const axios = useAxios();
  console.log(totalPages, "totalpage", itemsPerPage, "itemsper[age");
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["allBooks", queryParam, totalPages, itemsPerPage],
    queryFn: async () => {
      if (queryParam) {
        const response = await axios.get(
          `${baseUrl}/admin/getall-books?category=${queryParam}&page=${totalPages}&size=${itemsPerPage}`
        );
        return response.data;
      } else {
        const response = await axios.get(
          `${baseUrl}/admin/getall-books?page=${totalPages}&size=${itemsPerPage}`
        );
        return response.data;
      }
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllBooksQuery;

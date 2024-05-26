import { useQuery } from "@tanstack/react-query";
import { fetchStudents } from "../../services/users/studentAPI";

export function useStudents() {
  const {
    data: students,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["students"],
    queryFn: () => fetchStudents(),
  });

  return { isLoading, isError, error, students };
}

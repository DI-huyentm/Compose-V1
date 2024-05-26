import { useQuery } from "@tanstack/react-query";
import { fetchStudent } from "../../services/users/studentAPI";

export function useStudent(studentId) {
  const {
    data: student,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["students", studentId],
    queryFn: () => fetchStudent(studentId),
  });

  return { isLoading, isError, error, student };
}

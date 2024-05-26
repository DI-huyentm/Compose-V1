import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewStudent } from "../../services/users/studentAPI";
import { toast } from "react-hot-toast";

export function useCreateStudent() {
  const queryClient = useQueryClient();

  const { mutate: createStudent, isLoading: isCreating } = useMutation({
    mutationFn: createNewStudent,
    onSuccess: () => {
      toast.success("Thêm sinh viên thành công");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(`Lỗi thêm sinh viên: ${err.message}`),
  });

  return { isCreating, createStudent };
}

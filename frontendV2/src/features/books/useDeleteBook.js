import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "../../services/users/studentAPI";
import { toast } from "react-hot-toast";

export function useDeleteStudent() {
  const queryClient = useQueryClient();

  const { mutate: deleteExistingStudent, isLoading: isDeleting } = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      toast.success("Xóa sinh vien thành công");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(`Lỗi xóa sinh vien mới: ${err.message}`),
  });

  return { isDeleting, deleteExistingStudent };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editStudent } from "../../services/users/studentAPI";
import { toast } from "react-hot-toast";

export function useEditStudent() {
  const queryClient = useQueryClient();

  const { mutate: editExistingStudent, isLoading: isEditing } = useMutation({
    mutationFn: editStudent,
    onSuccess: () => {
      toast.success("Sửa thông tin sinh viên thành công");
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
    onError: (err) => toast.error(`Lỗi sửa thông tin sinh viên: ${err.message}`),
  });

  return { isEditing, editExistingStudent };
}

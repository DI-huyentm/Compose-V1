import React, { useState, useEffect } from "react";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { Edit } from "@mui/icons-material"; // Import the Edit icon
import { useForm } from "react-hook-form";
import TitleText from "../../ui/sharedComponents/TitleText";
import { useEditStudent } from "./useEditStudent";

function StudentEdit({ student }) {
  const { editExistingStudent, isEditing } = useEditStudent();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    // Handle form submission here
    // console.log(data);
    // return;
    editExistingStudent({ ...data, id: student.id });
    handleClose(); // Close the dialog after creating the student
  };

  // useEffect(() => {
  //   if (student) {
  //     Object.keys(student).forEach((key) => {
  //       if (key === "StudentGenres") {
  //         setValue("genreName", student.StudentGenres[0]?.Genre?.name || "");
  //       } else {
  //         setValue(key, book[key]);
  //       }
  //     });
  //   }
  // }, [book, setValue]);

  return (
    <>
      <IconButton color="primary" onClick={handleOpen} aria-label="edit">
        <Edit />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <TitleText variant="h5">Sửa thông tin sinh viên</TitleText>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("name", { required: true })}
                label="Họ và Tên"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("gender", { required: true })}
                label="Giới tính"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                {...register("school", { required: true })}
                label="Trường"
                fullWidth
                margin="normal"
                required
              />
              
              <Button type="submit" color="error" variant="outlined">
                Sửa thông tin sinh viên
              </Button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default StudentEdit;

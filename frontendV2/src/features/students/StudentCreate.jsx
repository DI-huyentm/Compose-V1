import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  MenuItem, // Import MenuItem for the Select component
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useCreateStudent } from "./useCreateStudent";
import TitleText from "../../ui/sharedComponents/TitleText";

function StudentCreate() {
  const { createStudent, isCreating } = useCreateStudent();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    // Call the createStudent function with the form data
    await createStudent(data);
    handleClose(); // Close the dialog after creating the student
  };

  return (
    <Grid container sx={{ mt: 3 }}>
      <Button
        startIcon={<AddCircleOutline />}
        variant="outlined"
        color="primary"
        disabled={isCreating}
        size="large"
        onClick={handleOpen} // Open the dialog when the button is clicked
      >
        Thêm sinh vien mới
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <TitleText variant="h5">Thêm sinh viên mới</TitleText>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Form for adding a new student */}
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ color: "white" }}
              >
                Thêm sinh viên
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
    </Grid>
  );
}

export default StudentCreate;

import { useState } from "react";
import { Grid } from "@mui/material";
import AppPagination from "../../ui/sharedComponents/AppPagination";
import TitleText from "../../ui/sharedComponents/TitleText";
import StudentCard from "./StudentCard";
import { useStudents } from "./useStudents";

const STUDENTS_PER_PAGE = 6;

function StudentCardList() {
  const { students, isLoading, isError, error } = useStudents();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const startIndex = (currentPage - 1) * STUDENTS_PER_PAGE;
  const endIndex = currentPage * STUDENTS_PER_PAGE;
  const paginatedStudents = students.slice(startIndex, endIndex);
  const count = Math.ceil(students.length / STUDENTS_PER_PAGE);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Grid
      container
      spacing={3}
      rowGap={4}
      margin="10px auto"
      alignItems="stretch"
    >
      <Grid item xs={12}>
        <TitleText variant="h4">Danh sách các sinh vien</TitleText>
      </Grid>

      {paginatedStudents?.map((student) => (
        <StudentCard key={student.id} student={student} xs={12} md={4}></StudentCard>
      ))}

      <AppPagination
        onChange={handleChange}
        currentPage={currentPage}
        count={count}
      ></AppPagination>
    </Grid>
  );
}

export default StudentCardList;
